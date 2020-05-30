import gql from 'graphql-tag';

export const INGREDIENT_SUBSCRIPTION = gql`
    subscription ingredientSubscription {
        ingredients {
            mutation
            node {
                id
                name
                unit
            }
            previousValues {
                id
            }
        }
    }
`;

export const PRODUCT_SUBSCRIPTION = gql`
    subscription productSubscription {
        products {
            mutation
            node {
                id
                name
                unit
                price
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
            previousValues {
                id
            }
        }
    }
`;

export const ORDER_SUBSCRIPTION = gql`
    subscription orderSubscription {
        orders {
            mutation
            node {
                id
                createdAt
                table
                total
                checkout
                products {
                    id
                    product {
                        id
                        price
                        name
                        unit
                    }
                    amount
                }
                user {
                    username
                }
            }
            previousValues {
                id
            }
        }
    }
`;

export const IMPORT_SUBSCRIPTION = gql`
    subscription importSubscription {
        imports {
            mutation
            node {
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
            previousValues {
                id
            }
        }
    }
`;

export const EXPENSE_SUBSCRIPTION = gql`
    subscription expenseSubscription {
        expenses {
            mutation
            node {
                id
                begin
                end
                name
                total
            }
            previousValues {
                id
            }
        }
    }
`;