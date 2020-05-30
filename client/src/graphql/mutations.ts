import gql from 'graphql-tag';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $role: UserRole!) {
        createUser(data: {username: $username, role: $role}) {
            id
            role
            username
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $username: String, $role: UserRole) {
        updateUser(data: {id: $id, username: $username, role: $role}) {
            id
            role
            username
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            id
            username
            role
        }
    }
`;

export const PASSWORD_VALIDATION = gql`
    mutation passwordValidation($password: String!) {
        passwordValidation(password: $password)
    }
`;

export const CHANGE_PASSWORD = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
        changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
    }
`;

export const USERNAME_TAKEN = gql`
    mutation usernameTaken($username: String!) {
        usernameTaken(username: $username)
    }
`;

export const LOGOUT = gql`
    mutation logout {
        logout
    }
`;

export const CREATE_INGREDIENT = gql`
    mutation createIngredient($name: String!, $unit: String!) {
        createIngredient(data: {name: $name, unit: $unit}) {
            id
            name
            unit
        }
    }
`;

export const UPDATE_INGREDIENT = gql`
    mutation updateIngredient($id: ID!, $name: String, $unit: String) {
        updateIngredient(id: $id, data: {name: $name, unit: $unit}) {
            id
            name
            unit
        }
    }
`;

export const DELETE_INGREDIENT = gql`
    mutation deleteIngredient($id: ID!) {
        deleteIngredient(id: $id) {
            id
        }
    }
`;

export const CREATE_PRODUCT = gql`
    mutation createProduct($name: String!, $price: Int!, $unit: String!, $ingredients: [IngredientAmountInput!]!) {
        createProduct(data: {
            name: $name
            unit: $unit
            price: $price
            ingredients: $ingredients
        }) {
            id
            name
            price
            unit
            ingredients {
                id
                ingredient {
                    id
                    name
                    unit
                }
                amount
            }
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($id: ID!, $name: String, $price: Int, $unit: String, $ingredients: [IngredientAmountInput!]!) {
        updateProduct(
            id: $id, 
            data: {
                name: $name
                unit: $unit
                price: $price
                ingredients: $ingredients
            }
        ) {
            id
            name
            price
            unit
            ingredients {
                id
                ingredient {
                    id
                    name
                    unit
                }
                amount
            }
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            id
        }
    }
`;

export const CREATE_ORDER = gql`
    mutation createOrder($table: Int!, $products: [ProductAmountInput!]!) {
        createOrder(data: {
            table: $table
            products: $products
        }) {
            id
            table
            total
            checkout
            products {
                id
                product {
                    id
                    price
                    unit
                    name
                }
                amount
            }
            user {
                username
            }
        }
    }
`;

export const UPDATE_ORDER = gql`
    mutation updateOrder($id: ID!, $table: Int, $products: [ProductAmountInput!]!, $checkout: Boolean!) {
        updateOrder(
            id: $id,
            data: {
                checkout: $checkout
                table: $table
                products: $products
        }) {
            id
            table
            total
            checkout
            products {
                id
                product {
                    id
                    price
                    unit
                    name
                }
                amount
            }
            user {
                username
            }
        }
    }
`;

export const DELETE_ORDER = gql`
    mutation deleteOrder($id: ID!) {
        deleteOrder(id: $id) {
            id
        }
    }
`;

export const CREATE_IMPORT = gql`
    mutation createImport($total: Int!, $amount: Int!, $ingredient: ID!) {
        createImport (data: {
            total: $total
            amount: $amount
            ingredient: $ingredient
        }) {
            id
            createdAt
            inStock
            ingredient {
                id
                name
                unit
            }
            total
            amount
        }
    }
`;

export const UPDATE_IMPORT = gql`
    mutation updateImport($id: ID!, $total: Int, $inStock: Int, $amount: Int, $ingredient: ID) {
        updateImport (
            id: $id,
            data: {
                total: $total
                amount: $amount
                inStock: $inStock
                ingredient: $ingredient
            }
        ) {
            id
            createdAt
            inStock
            ingredient {
                id
                name
                unit
            }
            total
            amount
        }
    }
`;

export const DELETE_IMPORT = gql`
    mutation deleteImport($id: ID!) {
        deleteImport(id: $id) {
            id
        }
    }
`;

export const CREATE_EXPENSE = gql`
    mutation createExpense($begin: DateTime!, $end: DateTime!, $name: String!, $total: Int!) {
        createExpense (data: {
            begin: $begin
            end: $end
            name: $name
            total: $total
        }) {
            id
            begin
            end
            name
            total
        }
    }
`;

export const UPDATE_EXPENSE = gql`
    mutation updateExpense($id: ID!, $begin: DateTime, $end: DateTime, $name: String, $total: Int) {
        updateExpense (
            id: $id,
            data: {
                begin: $begin
                end: $end
                name: $name
                total: $total
            }
        ) {
            id
            begin
            end
            name
            total
        }
    }
`;

export const DELETE_EXPENSE = gql`
    mutation deleteExpense($id: ID!) {
        deleteExpense(id: $id) {
            id
        }
    }
`;