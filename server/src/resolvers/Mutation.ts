import _ from 'lodash';
import {MutationResolvers} from '../generated/ResolversType';
import {Context} from "./types/Context";
import {Password} from "../utils/Password";
import {Token} from "../utils/Token";
import {IngredientAmountCreateInput, ProductAmountCreateInput} from "../generated/prisma";
import {Product} from "../utils/Product";
import {Order} from '../utils/Order';
import {UserRole} from "../generated/PrismaType";

export const Mutation: MutationResolvers<Context> = {
    async createUser(parent, {data: {username, role}}, {prisma, request}, info) {
        const usernameTaken = await prisma.exists.User({username});

        if (usernameTaken) {
            throw new Error('Username has been taken.');
        }

        const hashedPassword = await Password.hash(process.env.DEFAULT_PASSWORD as string);

        return await prisma.mutation.createUser({
            data: {
                username,
                password: hashedPassword,
                role
            }
        }, info);
    },

    async updateUser(parent, {data}, {prisma, request}, info) {
        const userExists = await prisma.exists.User({id: data.id});
        if (!userExists) {
            throw new Error('User is not exist.');
        }

        if (typeof data.username === 'string') {
            const usernameTaken = await prisma.exists.User({username: data.username, id_not: data.id});
            if (usernameTaken) {
                throw new Error('Username is taken.');
            }
        }

        return await prisma.mutation.updateUser({
            where: {id: data.id}, data: _.omit(data, 'id', 'password')
        }, info);
    },

    async deleteUser(parent, {id}, {prisma, request}, info) {
        const userExists = await prisma.exists.User({id});

        if (!userExists) {
            throw new Error('User does not exists.')
        }

        return await prisma.mutation.deleteUser({where: {id}}, info);
    },

    async login(parent, {username, password}, {prisma, request}, info) {
        const user = await prisma.query.user({where: {username}});
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const result = await Password.verify(password, user.password);
        if (!result) {
            throw new Error('Invalid credentials.');
        }

        const jwt = Token.generate({userId: user.id, role: user.role});
        request.response.cookie('jid', jwt, {maxAge: 1000 * 60 * 60 * 24 * 7});

        return user;
    },

    async usernameTaken(parent, {username}, {prisma, request}, info) {
        return await prisma.exists.User({username});
    },

    async logout(parent, args, {prisma, request}, info) {
        request.response.cookie('jid', '');

        return true;
    },

    async createIngredient(parent, {data: {name, unit}}, {prisma, request}, info) {
        const ingredientExists = await prisma.exists.Ingredient({name});
        if (ingredientExists) {
            throw new Error('Ingredient name has been taken.');
        }

        return await prisma.mutation.createIngredient({
            data: {
                name,
                unit
            }
        }, info)
    },

    async updateIngredient(parent, {id, data}, {prisma, request}, info) {
        const ingredientExists = await prisma.exists.Ingredient({id});
        if (!ingredientExists) {
            throw new Error('Ingredient is not exists.');
        }

        const ingredientNameExists = await prisma.exists.Ingredient({id_not: id, name: data.name});
        if (ingredientNameExists) {
            throw new Error('Ingredient name has been taken.');
        }

        return await prisma.mutation.updateIngredient({
            where: {
                id
            },
            data
        }, info)
    },

    async deleteIngredient(parent, {id}, {prisma, request}, info) {
        const ingredientExists = await prisma.exists.Ingredient({id});
        if (!ingredientExists) {
            throw new Error('Ingredient is not exists.');
        }

        return await prisma.mutation.deleteIngredient({
            where: {
                id
            }
        }, info)
    },

    async createProduct(parent, {data: {name, price, unit, ingredients}}, {prisma, request}, info) {
        for (const {ingredient: ingredientId} of ingredients) {
            const ingredientExists = prisma.exists.Ingredient({id: ingredientId});

            if (!ingredientExists) {
                throw new Error('Ingredient does not exists.');
            }
        }

        const ingredientDuplicate = Product.checkDuplicateIngredient(ingredients);
        if (ingredientDuplicate) {
            throw new Error('Ingredient is duplicate.');
        }

        const ingredientList: IngredientAmountCreateInput[] = ingredients.map(({ingredient: ingredientId, amount}) => {
            return {
                ingredient: {
                    connect: {
                        id: ingredientId
                    }
                },
                amount
            };
        });

        return prisma.mutation.createProduct({
            data: {
                name,
                unit,
                price,
                ingredients: {
                    create: ingredientList
                }
            }
        }, info)
    },

    async updateProduct(parent, {id, data: {name, price, unit, ingredients}}, {prisma, request}, info) {
        const productExists = await prisma.exists.Product({id});
        if (!productExists) {
            throw new Error('Product is not exists.');
        }

        for (const {ingredient: ingredientId} of ingredients) {
            const ingredientExists = prisma.exists.Ingredient({id: ingredientId});

            if (!ingredientExists) {
                throw new Error('Ingredient does not exists.');
            }
        }

        const ingredientDuplicate = Product.checkDuplicateIngredient(ingredients);
        if (ingredientDuplicate) {
            throw new Error('Ingredient is duplicate.');
        }

        const ingredientAmountList: IngredientAmountCreateInput[] = ingredients.map(({ingredient: ingredientId, amount}) => {
            return {
                ingredient: {
                    connect: {
                        id: ingredientId
                    }
                },
                amount
            };
        });

        await prisma.mutation.updateProduct({
            where: {id},
            data: {
                name,
                unit,
                price,
                ingredients: {
                    deleteMany: {},
                }
            }
        });

        return await prisma.mutation.updateProduct({
            where: {id},
            data: {
                ingredients: {
                    create: ingredientAmountList
                }
            }
        }, info)
    },

    async deleteProduct(parent, {id}, {prisma, request}, info) {
        const productExists = await prisma.exists.Product({id});
        if (!productExists) {
            throw new Error('Product is not exists.');
        }

        return await prisma.mutation.deleteProduct({
            where: {
                id
            }
        }, info)
    },

    async createOrder(parent, {data: {products, table}}, {prisma, request}, info) {
        const jwt = Token.getContent(request);

        for (const {product: productId} of products) {
            const productExists = await prisma.exists.Product({id: productId});

            if (!productExists) {
                throw new Error('Product does not exists.');
            }
        }

        const productDuplicate = Order.checkDuplicateProduct(products);
        if (productDuplicate) {
            throw new Error('Product is duplicate.');
        }

        const productList: ProductAmountCreateInput[] = products.map(({product: productId, amount}) => {
            return {
                product: {
                    connect: {
                        id: productId
                    }
                },
                amount
            };
        });

        return prisma.mutation.createOrder({
            data: {
                table,
                products: {
                    create: productList
                },
                user: {
                    connect: {
                        id: jwt?.userId
                    }
                }
            }
        }, info)
    },

    async updateOrder(parent, {id, data: {products, table, checkout}}, {prisma, request}, info) {
        const jwt = Token.getContent(request);

        const productDuplicate = Order.checkDuplicateProduct(products);
        if (productDuplicate) {
            throw new Error('Product is duplicate.');
        }

        const orderExists = await prisma.exists.Order({id});
        if (!orderExists) {
            throw new Error('Order is not exists.');
        }

        const allProductsExists = await Order.checkAllProductsExists(products);
        if (!allProductsExists) {
            throw new Error('Product does not exists.');
        }

        const productAmountList: ProductAmountCreateInput[] = products.map(({product: productId, amount}) => {
            return {
                product: {
                    connect: {
                        id: productId 
                    }
                },
                amount 
            };
        });

        await prisma.mutation.updateOrder({
            where: {id},
            data: {
                table,
                products: {
                    deleteMany: {},
                },
                user: {
                    connect: {
                        id: jwt?.userId
                    }
                }
            }
        });

        if (!checkout) {
            return await prisma.mutation.updateOrder({
                where: {id},
                data: {
                    checkout,
                    products: {
                        create: productAmountList
                    }
                }
            }, info);
        }

        await prisma.mutation.updateOrder({
            where: {id},
            data: {
                checkout,
                products: {
                    create: productAmountList
                }
            }
        }, info);

        const total = await Order.getTotal(id);
        const updatedOrder = await prisma.mutation.updateOrder({
            where: {id},
            data: {
                total
            }
        }, info);

        return updatedOrder;
    },

    async deleteOrder(parent, {id}, {prisma, request}, info) {
        const orderExists = await prisma.exists.Order({id});
        if (!orderExists) {
            throw new Error('Order is not exists.');
        }

        return await prisma.mutation.deleteOrder({
            where: {
                id
            }
        }, info)
    },

    async createImport(parent, {data: {amount, total, ingredient: ingredientId}}, {prisma, request}, info) {
        return await prisma.mutation.createImport({
            data: {
                total,
                amount,
                inStock: amount,
                ingredient: {
                    connect: {
                        id: ingredientId
                    }
                }
            }
        }, info)
    },

    async updateImport(parent, {id, data: {total, amount, inStock, ingredient: ingredientId}}, {prisma, request}, info) {
        const importExists = await prisma.exists.Import({id});
        if (!importExists) {
            throw new Error('Import is not exists.');
        }

        return await prisma.mutation.updateImport({
            where: {
                id
            },
            data: {
                total,
                amount,
                inStock,
                ingredient: {
                    connect: {
                        id: ingredientId
                    }
                }
            }
        }, info)
    },

    async deleteImport(parent, {id}, {prisma, request}, info) {
        const importExists = await prisma.exists.Import({id});
        if (!importExists) {
            throw new Error('Import is not exists.');
        }

        return await prisma.mutation.deleteImport({
            where: {
                id
            }
        }, info)
    },

    async createExpense(parent, {data}, {prisma, request}, info) {
        return await prisma.mutation.createExpense({data}, info);
    },

    async updateExpense(parent, {id, data}, {prisma, request}, info) {
        const expenseExists = await prisma.exists.Expense({id});
        if (!expenseExists) {
            throw new Error('Expense is not exists.');
        }

        return await prisma.mutation.updateExpense({
            where: {id}, 
            data
        }, info)
    },

    async deleteExpense(parent, {id}, {prisma, request}, info) {
        const expenseExists = await prisma.exists.Expense({id});
        if (!expenseExists) {
            throw new Error('Expense is not exists.');
        }

        return await prisma.mutation.deleteExpense({
            where: {
                id
            }
        }, info)
    },

    async passwordValidation(parent, {password}, {prisma, request}, info) {
        const jwt = Token.getContent(request);
        if (!jwt || !jwt.userId || jwt.role !== UserRole.Manager) {
            throw new Error('Unauthorized.');
        }

        const user = await prisma.query.user({where: {id: jwt.userId}});

        if (!user) {
            throw new Error('Unauthorized');
        }

        const passwordCorrect = await Password.verify(password, user.password);

        if (!passwordCorrect) {
            return false;
        }

        return true;
    },

    async changePassword(parent, {oldPassword, newPassword}, {prisma, request}, info) {
        const jwt = Token.getContent(request);
        if (!jwt || !jwt.userId || jwt.role !== UserRole.Manager) {
            throw new Error('Unauthorized.');
        }

        const user = await prisma.query.user({where: {id: jwt.userId}});
        if (!user) {
            throw new Error('Unauthorized.');
        }

        const passwordCorrect = await Password.verify(oldPassword, user.password);
        if (!passwordCorrect) {
            throw new Error('Wrong password.');
        }

        const newHashedPassword = await Password.hash(newPassword);

        await prisma.mutation.updateUser({where: {id: jwt.userId}, data: {password: newHashedPassword}})

        return true;
    }
};