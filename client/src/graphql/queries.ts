import gql from 'graphql-tag';

export const ME = gql`
    query me {
        me {
            id
            username
            role
        }
    }
`;

export const GET_USERS = gql`
    query getUsers($after: String) {
        users (query: {
            orderBy: username_ASC
            # first: 10
            after: $after
        }) {
            id
            username
            role
        }
    }
`;

export const GET_INGREDIENTS = gql`
    query ingredients($after: String) {
        ingredients (query: {
            orderBy: name_ASC
            # first: 10
            after: $after
        }) {
            id
            name
            unit
        }
    }
`;

export const GET_PRODUCTS = gql`
    query products($after: String) {
        products (query: {
            orderBy: name_ASC
            # first: 10
            after: $after
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

export const GET_ORDERS = gql`
    query orders($after: String) {
        orders (query: {
            orderBy: createdAt_DESC
            first: 10
            after: $after
        }) {
            id
            table
            total
            checkout
            products {
                id
                product {
                    id
                    unit
                    price
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

export const GET_IMPORTS = gql`
    query imports($after: String) {
        imports (query: {
            orderBy: createdAt_DESC
            first: 10
            after: $after
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

export const GET_EXPENSES = gql`
    query expenses($after: String) {
        expenses (query: {
            orderBy: begin_DESC
            first: 10
            after: $after
        }) {
            id
            begin
            end
            name
            total
        }
    }
`;

export const GET_STORE_REPORT = gql`
    query getStoreReport {
        store {
            ingredient {
                id
                name
                unit
            }
            amount
        }
    }
`;

export const GET_DAILY_REVENUE = gql`
    query dailyRevenue {
        dailyRevenue {
            day
            total
        }
    }
`;

export const GET_MONTHLY_REVENUE = gql`
    query monthlyRevenue {
        monthlyRevenue {
            month
            total
        }
    }
`;

export const GET_YEARLY_REVENUE = gql`
    query yearlyRevenue {
        yearlyRevenue {
            year
            total
        }
    }
`;

export const GET_DAILY_EXPENSE = gql`
    query dailyExpense {
        dailyExpense {
            day
            total
        }
    }
`;

export const GET_MONTHLY_EXPENSE = gql`
    query monthlyExpense {
        monthlyExpense {
            month
            total
        }
    }
`;

export const GET_YEARLY_EXPENSE = gql`
    query yearlyExpense {
        yearlyExpense {
            year
            total
        }
    }
`;