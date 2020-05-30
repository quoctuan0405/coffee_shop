import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateExpenseInput = {
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
  name: Scalars['String'];
  total: Scalars['Int'];
};

export type CreateImportInput = {
  total: Scalars['Int'];
  amount: Scalars['Int'];
  ingredient: Scalars['ID'];
};

export type CreateIngredientInput = {
  name: Scalars['String'];
  unit: Scalars['String'];
};

export type CreateOrderInput = {
  table: Scalars['Int'];
  products: Array<ProductAmountInput>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  unit: Scalars['String'];
  price: Scalars['Int'];
  ingredients: Array<IngredientAmountInput>;
};

export type CreateUserInput = {
  username: Scalars['String'];
  role: UserRole;
};


export type DayExpense = {
   __typename?: 'DayExpense';
  day: Scalars['String'];
  total: Scalars['Int'];
};

export type DayRevenue = {
   __typename?: 'DayRevenue';
  day: Scalars['String'];
  total: Scalars['Int'];
};

export type Expense = Node & {
   __typename?: 'Expense';
  id: Scalars['ID'];
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
  name: Scalars['String'];
  total: Scalars['Int'];
};

export enum ExpenseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  BeginAsc = 'begin_ASC',
  BeginDesc = 'begin_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC'
}

export type ExpensePreviousValues = {
   __typename?: 'ExpensePreviousValues';
  id: Scalars['ID'];
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
  name: Scalars['String'];
  total: Scalars['Int'];
};

export type ExpensesQueryInput = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ExpenseOrderByInput>;
};

export type ExpenseSubscriptionPayload = {
   __typename?: 'ExpenseSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Expense>;
  previousValues?: Maybe<ExpensePreviousValues>;
};

export type Import = Node & {
   __typename?: 'Import';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ingredient: Ingredient;
  inStock: Scalars['Int'];
  total: Scalars['Int'];
  amount: Scalars['Int'];
};

export enum ImportOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  InStockAsc = 'inStock_ASC',
  InStockDesc = 'inStock_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type ImportPreviousValues = {
   __typename?: 'ImportPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  inStock: Scalars['Int'];
  total: Scalars['Int'];
  amount: Scalars['Int'];
};

export type ImportsQueryInput = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ImportOrderByInput>;
};

export type ImportSubscriptionPayload = {
   __typename?: 'ImportSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Import>;
  previousValues?: Maybe<ImportPreviousValues>;
};

export type Ingredient = Node & {
   __typename?: 'Ingredient';
  id: Scalars['ID'];
  name: Scalars['String'];
  unit: Scalars['String'];
};

export type IngredientAmount = Node & {
   __typename?: 'IngredientAmount';
  id: Scalars['ID'];
  ingredient: Ingredient;
  amount: Scalars['Int'];
};

export type IngredientAmountInput = {
  ingredient: Scalars['ID'];
  amount: Scalars['Int'];
};

export type IngredientInStock = {
   __typename?: 'IngredientInStock';
  ingredient: Ingredient;
  amount: Scalars['Int'];
};

export enum IngredientOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC'
}

export type IngredientPreviousValues = {
   __typename?: 'IngredientPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  unit: Scalars['String'];
};

export type IngredientsQueryInput = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<IngredientOrderByInput>;
};

export type IngredientSubscriptionPayload = {
   __typename?: 'IngredientSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Ingredient>;
  previousValues?: Maybe<IngredientPreviousValues>;
};

export type MonthExpense = {
   __typename?: 'MonthExpense';
  month: Scalars['String'];
  total: Scalars['Int'];
};

export type MonthRevenue = {
   __typename?: 'MonthRevenue';
  month: Scalars['String'];
  total: Scalars['Int'];
};

export type Mutation = {
   __typename?: 'Mutation';
  login: User;
  usernameTaken: Scalars['Boolean'];
  passwordValidation: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  createUser: User;
  updateUser: User;
  deleteUser: User;
  createIngredient: Ingredient;
  updateIngredient: Ingredient;
  deleteIngredient: Ingredient;
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: Product;
  createOrder: Order;
  updateOrder: Order;
  deleteOrder: Order;
  createImport: Import;
  updateImport: Import;
  deleteImport: Import;
  createExpense: Expense;
  updateExpense: Expense;
  deleteExpense: Expense;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUsernameTakenArgs = {
  username: Scalars['String'];
};


export type MutationPasswordValidationArgs = {
  password: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateIngredientArgs = {
  data: CreateIngredientInput;
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['ID'];
  data: UpdateIngredientInput;
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data: UpdateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationCreateOrderArgs = {
  data: CreateOrderInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  data: UpdateOrderInput;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateImportArgs = {
  data: CreateImportInput;
};


export type MutationUpdateImportArgs = {
  id: Scalars['ID'];
  data: UpdateImportInput;
};


export type MutationDeleteImportArgs = {
  id: Scalars['ID'];
};


export type MutationCreateExpenseArgs = {
  data: CreateExpenseInput;
};


export type MutationUpdateExpenseArgs = {
  id: Scalars['ID'];
  data: UpdateExpenseInput;
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['ID'];
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Order = {
   __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  table: Scalars['Int'];
  products: Array<ProductAmount>;
  checkout: Scalars['Boolean'];
  total?: Maybe<Scalars['Int']>;
  user: User;
};

export enum OrderOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TableAsc = 'table_ASC',
  TableDesc = 'table_DESC',
  CheckoutAsc = 'checkout_ASC',
  CheckoutDesc = 'checkout_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC'
}

export type OrderPreviousValues = {
   __typename?: 'OrderPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  table: Scalars['Int'];
  checkout: Scalars['Boolean'];
  total?: Maybe<Scalars['Int']>;
};

export type OrdersQueryInput = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrderOrderByInput>;
};

export type OrderSubscriptionPayload = {
   __typename?: 'OrderSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Order>;
  previousValues?: Maybe<OrderPreviousValues>;
};

export type Product = {
   __typename?: 'Product';
  id: Scalars['ID'];
  price: Scalars['Int'];
  name: Scalars['String'];
  unit: Scalars['String'];
  ingredients: Array<IngredientAmount>;
};

export type ProductAmount = Node & {
   __typename?: 'ProductAmount';
  id: Scalars['ID'];
  product: Product;
  amount: Scalars['Int'];
};

export type ProductAmountInput = {
  product: Scalars['ID'];
  amount: Scalars['Int'];
};

export enum ProductOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC'
}

export type ProductsQueryInput = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ProductOrderByInput>;
};

export type ProductSubscriptionPayload = {
   __typename?: 'ProductSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Product>;
  previousValues?: Maybe<IngredientPreviousValues>;
};

export type Query = {
   __typename?: 'Query';
  me?: Maybe<User>;
  users?: Maybe<Array<User>>;
  ingredients?: Maybe<Array<Ingredient>>;
  products?: Maybe<Array<Product>>;
  orders?: Maybe<Array<Order>>;
  imports?: Maybe<Array<Import>>;
  expenses?: Maybe<Array<Expense>>;
  store?: Maybe<Array<IngredientInStock>>;
  dailyRevenue?: Maybe<Array<DayRevenue>>;
  monthlyRevenue?: Maybe<Array<MonthRevenue>>;
  yearlyRevenue?: Maybe<Array<YearRevenue>>;
  dailyExpense?: Maybe<Array<DayExpense>>;
  monthlyExpense?: Maybe<Array<MonthExpense>>;
  yearlyExpense?: Maybe<Array<YearExpense>>;
};


export type QueryUsersArgs = {
  query?: Maybe<UsersQueryInput>;
};


export type QueryIngredientsArgs = {
  query?: Maybe<IngredientsQueryInput>;
};


export type QueryProductsArgs = {
  query?: Maybe<ProductsQueryInput>;
};


export type QueryOrdersArgs = {
  query?: Maybe<OrdersQueryInput>;
};


export type QueryImportsArgs = {
  query?: Maybe<ImportsQueryInput>;
};


export type QueryExpensesArgs = {
  query?: Maybe<ExpensesQueryInput>;
};

export type Subscription = {
   __typename?: 'Subscription';
  ingredients?: Maybe<IngredientSubscriptionPayload>;
  products?: Maybe<ProductSubscriptionPayload>;
  orders?: Maybe<OrderSubscriptionPayload>;
  imports?: Maybe<ImportSubscriptionPayload>;
  expenses?: Maybe<ExpenseSubscriptionPayload>;
};

export type UpdateExpenseInput = {
  begin?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type UpdateImportInput = {
  total?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  inStock?: Maybe<Scalars['Int']>;
  ingredient?: Maybe<Scalars['ID']>;
};

export type UpdateIngredientInput = {
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  checkout: Scalars['Boolean'];
  table?: Maybe<Scalars['Int']>;
  products: Array<ProductAmountInput>;
};

export type UpdateProductInput = {
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  ingredients: Array<IngredientAmountInput>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  role: UserRole;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC'
}

export enum UserRole {
  Manager = 'MANAGER',
  Employee = 'EMPLOYEE'
}

export type UsersQueryInput = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<UserOrderByInput>;
};

export type YearExpense = {
   __typename?: 'YearExpense';
  year: Scalars['String'];
  total: Scalars['Int'];
};

export type YearRevenue = {
   __typename?: 'YearRevenue';
  year: Scalars['String'];
  total: Scalars['Int'];
};

export type CreateUserMutationVariables = {
  username: Scalars['String'];
  role: UserRole;
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'role' | 'username'>
  ) }
);

export type UpdateUserMutationVariables = {
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'role' | 'username'>
  ) }
);

export type DeleteUserMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type LoginMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'role'>
  ) }
);

export type PasswordValidationMutationVariables = {
  password: Scalars['String'];
};


export type PasswordValidationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'passwordValidation'>
);

export type ChangePasswordMutationVariables = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type UsernameTakenMutationVariables = {
  username: Scalars['String'];
};


export type UsernameTakenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'usernameTaken'>
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type CreateIngredientMutationVariables = {
  name: Scalars['String'];
  unit: Scalars['String'];
};


export type CreateIngredientMutation = (
  { __typename?: 'Mutation' }
  & { createIngredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id' | 'name' | 'unit'>
  ) }
);

export type UpdateIngredientMutationVariables = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};


export type UpdateIngredientMutation = (
  { __typename?: 'Mutation' }
  & { updateIngredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id' | 'name' | 'unit'>
  ) }
);

export type DeleteIngredientMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteIngredientMutation = (
  { __typename?: 'Mutation' }
  & { deleteIngredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id'>
  ) }
);

export type CreateProductMutationVariables = {
  name: Scalars['String'];
  price: Scalars['Int'];
  unit: Scalars['String'];
  ingredients: Array<IngredientAmountInput>;
};


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'unit'>
    & { ingredients: Array<(
      { __typename?: 'IngredientAmount' }
      & Pick<IngredientAmount, 'id' | 'amount'>
      & { ingredient: (
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, 'id' | 'name' | 'unit'>
      ) }
    )> }
  ) }
);

export type UpdateProductMutationVariables = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  ingredients: Array<IngredientAmountInput>;
};


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'unit'>
    & { ingredients: Array<(
      { __typename?: 'IngredientAmount' }
      & Pick<IngredientAmount, 'id' | 'amount'>
      & { ingredient: (
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, 'id' | 'name' | 'unit'>
      ) }
    )> }
  ) }
);

export type DeleteProductMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  ) }
);

export type CreateOrderMutationVariables = {
  table: Scalars['Int'];
  products: Array<ProductAmountInput>;
};


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'table' | 'total' | 'checkout'>
    & { products: Array<(
      { __typename?: 'ProductAmount' }
      & Pick<ProductAmount, 'id' | 'amount'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'price' | 'unit' | 'name'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  ) }
);

export type UpdateOrderMutationVariables = {
  id: Scalars['ID'];
  table?: Maybe<Scalars['Int']>;
  products: Array<ProductAmountInput>;
  checkout: Scalars['Boolean'];
};


export type UpdateOrderMutation = (
  { __typename?: 'Mutation' }
  & { updateOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'table' | 'total' | 'checkout'>
    & { products: Array<(
      { __typename?: 'ProductAmount' }
      & Pick<ProductAmount, 'id' | 'amount'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'price' | 'unit' | 'name'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  ) }
);

export type DeleteOrderMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteOrderMutation = (
  { __typename?: 'Mutation' }
  & { deleteOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
  ) }
);

export type CreateImportMutationVariables = {
  total: Scalars['Int'];
  amount: Scalars['Int'];
  ingredient: Scalars['ID'];
};


export type CreateImportMutation = (
  { __typename?: 'Mutation' }
  & { createImport: (
    { __typename?: 'Import' }
    & Pick<Import, 'id' | 'createdAt' | 'inStock' | 'total' | 'amount'>
    & { ingredient: (
      { __typename?: 'Ingredient' }
      & Pick<Ingredient, 'id' | 'name' | 'unit'>
    ) }
  ) }
);

export type UpdateImportMutationVariables = {
  id: Scalars['ID'];
  total?: Maybe<Scalars['Int']>;
  inStock?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  ingredient?: Maybe<Scalars['ID']>;
};


export type UpdateImportMutation = (
  { __typename?: 'Mutation' }
  & { updateImport: (
    { __typename?: 'Import' }
    & Pick<Import, 'id' | 'createdAt' | 'inStock' | 'total' | 'amount'>
    & { ingredient: (
      { __typename?: 'Ingredient' }
      & Pick<Ingredient, 'id' | 'name' | 'unit'>
    ) }
  ) }
);

export type DeleteImportMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteImportMutation = (
  { __typename?: 'Mutation' }
  & { deleteImport: (
    { __typename?: 'Import' }
    & Pick<Import, 'id'>
  ) }
);

export type CreateExpenseMutationVariables = {
  begin: Scalars['DateTime'];
  end: Scalars['DateTime'];
  name: Scalars['String'];
  total: Scalars['Int'];
};


export type CreateExpenseMutation = (
  { __typename?: 'Mutation' }
  & { createExpense: (
    { __typename?: 'Expense' }
    & Pick<Expense, 'id' | 'begin' | 'end' | 'name' | 'total'>
  ) }
);

export type UpdateExpenseMutationVariables = {
  id: Scalars['ID'];
  begin?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};


export type UpdateExpenseMutation = (
  { __typename?: 'Mutation' }
  & { updateExpense: (
    { __typename?: 'Expense' }
    & Pick<Expense, 'id' | 'begin' | 'end' | 'name' | 'total'>
  ) }
);

export type DeleteExpenseMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteExpenseMutation = (
  { __typename?: 'Mutation' }
  & { deleteExpense: (
    { __typename?: 'Expense' }
    & Pick<Expense, 'id'>
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'role'>
  )> }
);

export type GetUsersQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'role'>
  )>> }
);

export type IngredientsQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type IngredientsQuery = (
  { __typename?: 'Query' }
  & { ingredients?: Maybe<Array<(
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id' | 'name' | 'unit'>
  )>> }
);

export type ProductsQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'unit'>
    & { ingredients: Array<(
      { __typename?: 'IngredientAmount' }
      & Pick<IngredientAmount, 'id' | 'amount'>
      & { ingredient: (
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, 'id' | 'name' | 'unit'>
      ) }
    )> }
  )>> }
);

export type OrdersQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { orders?: Maybe<Array<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'table' | 'total' | 'checkout'>
    & { products: Array<(
      { __typename?: 'ProductAmount' }
      & Pick<ProductAmount, 'id' | 'amount'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'unit' | 'price' | 'name'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )>> }
);

export type ImportsQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type ImportsQuery = (
  { __typename?: 'Query' }
  & { imports?: Maybe<Array<(
    { __typename?: 'Import' }
    & Pick<Import, 'id' | 'createdAt' | 'inStock' | 'total' | 'amount'>
    & { ingredient: (
      { __typename?: 'Ingredient' }
      & Pick<Ingredient, 'id' | 'name' | 'unit'>
    ) }
  )>> }
);

export type ExpensesQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type ExpensesQuery = (
  { __typename?: 'Query' }
  & { expenses?: Maybe<Array<(
    { __typename?: 'Expense' }
    & Pick<Expense, 'id' | 'begin' | 'end' | 'name' | 'total'>
  )>> }
);

export type GetStoreReportQueryVariables = {};


export type GetStoreReportQuery = (
  { __typename?: 'Query' }
  & { store?: Maybe<Array<(
    { __typename?: 'IngredientInStock' }
    & Pick<IngredientInStock, 'amount'>
    & { ingredient: (
      { __typename?: 'Ingredient' }
      & Pick<Ingredient, 'id' | 'name' | 'unit'>
    ) }
  )>> }
);

export type DailyRevenueQueryVariables = {};


export type DailyRevenueQuery = (
  { __typename?: 'Query' }
  & { dailyRevenue?: Maybe<Array<(
    { __typename?: 'DayRevenue' }
    & Pick<DayRevenue, 'day' | 'total'>
  )>> }
);

export type MonthlyRevenueQueryVariables = {};


export type MonthlyRevenueQuery = (
  { __typename?: 'Query' }
  & { monthlyRevenue?: Maybe<Array<(
    { __typename?: 'MonthRevenue' }
    & Pick<MonthRevenue, 'month' | 'total'>
  )>> }
);

export type YearlyRevenueQueryVariables = {};


export type YearlyRevenueQuery = (
  { __typename?: 'Query' }
  & { yearlyRevenue?: Maybe<Array<(
    { __typename?: 'YearRevenue' }
    & Pick<YearRevenue, 'year' | 'total'>
  )>> }
);

export type DailyExpenseQueryVariables = {};


export type DailyExpenseQuery = (
  { __typename?: 'Query' }
  & { dailyExpense?: Maybe<Array<(
    { __typename?: 'DayExpense' }
    & Pick<DayExpense, 'day' | 'total'>
  )>> }
);

export type MonthlyExpenseQueryVariables = {};


export type MonthlyExpenseQuery = (
  { __typename?: 'Query' }
  & { monthlyExpense?: Maybe<Array<(
    { __typename?: 'MonthExpense' }
    & Pick<MonthExpense, 'month' | 'total'>
  )>> }
);

export type YearlyExpenseQueryVariables = {};


export type YearlyExpenseQuery = (
  { __typename?: 'Query' }
  & { yearlyExpense?: Maybe<Array<(
    { __typename?: 'YearExpense' }
    & Pick<YearExpense, 'year' | 'total'>
  )>> }
);

export type IngredientSubscriptionSubscriptionVariables = {};


export type IngredientSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { ingredients?: Maybe<(
    { __typename?: 'IngredientSubscriptionPayload' }
    & Pick<IngredientSubscriptionPayload, 'mutation'>
    & { node?: Maybe<(
      { __typename?: 'Ingredient' }
      & Pick<Ingredient, 'id' | 'name' | 'unit'>
    )>, previousValues?: Maybe<(
      { __typename?: 'IngredientPreviousValues' }
      & Pick<IngredientPreviousValues, 'id'>
    )> }
  )> }
);

export type ProductSubscriptionSubscriptionVariables = {};


export type ProductSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { products?: Maybe<(
    { __typename?: 'ProductSubscriptionPayload' }
    & Pick<ProductSubscriptionPayload, 'mutation'>
    & { node?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'unit' | 'price'>
      & { ingredients: Array<(
        { __typename?: 'IngredientAmount' }
        & Pick<IngredientAmount, 'id' | 'amount'>
        & { ingredient: (
          { __typename?: 'Ingredient' }
          & Pick<Ingredient, 'id' | 'name' | 'unit'>
        ) }
      )> }
    )>, previousValues?: Maybe<(
      { __typename?: 'IngredientPreviousValues' }
      & Pick<IngredientPreviousValues, 'id'>
    )> }
  )> }
);

export type OrderSubscriptionSubscriptionVariables = {};


export type OrderSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { orders?: Maybe<(
    { __typename?: 'OrderSubscriptionPayload' }
    & Pick<OrderSubscriptionPayload, 'mutation'>
    & { node?: Maybe<(
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'createdAt' | 'table' | 'total' | 'checkout'>
      & { products: Array<(
        { __typename?: 'ProductAmount' }
        & Pick<ProductAmount, 'id' | 'amount'>
        & { product: (
          { __typename?: 'Product' }
          & Pick<Product, 'id' | 'price' | 'name' | 'unit'>
        ) }
      )>, user: (
        { __typename?: 'User' }
        & Pick<User, 'username'>
      ) }
    )>, previousValues?: Maybe<(
      { __typename?: 'OrderPreviousValues' }
      & Pick<OrderPreviousValues, 'id'>
    )> }
  )> }
);

export type ImportSubscriptionSubscriptionVariables = {};


export type ImportSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { imports?: Maybe<(
    { __typename?: 'ImportSubscriptionPayload' }
    & Pick<ImportSubscriptionPayload, 'mutation'>
    & { node?: Maybe<(
      { __typename?: 'Import' }
      & Pick<Import, 'id' | 'createdAt' | 'inStock' | 'total' | 'amount'>
      & { ingredient: (
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, 'id' | 'name' | 'unit'>
      ) }
    )>, previousValues?: Maybe<(
      { __typename?: 'ImportPreviousValues' }
      & Pick<ImportPreviousValues, 'id'>
    )> }
  )> }
);

export type ExpenseSubscriptionSubscriptionVariables = {};


export type ExpenseSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { expenses?: Maybe<(
    { __typename?: 'ExpenseSubscriptionPayload' }
    & Pick<ExpenseSubscriptionPayload, 'mutation'>
    & { node?: Maybe<(
      { __typename?: 'Expense' }
      & Pick<Expense, 'id' | 'begin' | 'end' | 'name' | 'total'>
    )>, previousValues?: Maybe<(
      { __typename?: 'ExpensePreviousValues' }
      & Pick<ExpensePreviousValues, 'id'>
    )> }
  )> }
);


export const CreateUserDocument = gql`
    mutation createUser($username: String!, $role: UserRole!) {
  createUser(data: {username: $username, role: $role}) {
    id
    role
    username
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $username: String, $role: UserRole) {
  updateUser(data: {id: $id, username: $username, role: $role}) {
    id
    role
    username
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
  }
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    username
    role
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const PasswordValidationDocument = gql`
    mutation passwordValidation($password: String!) {
  passwordValidation(password: $password)
}
    `;
export type PasswordValidationMutationFn = ApolloReactCommon.MutationFunction<PasswordValidationMutation, PasswordValidationMutationVariables>;

/**
 * __usePasswordValidationMutation__
 *
 * To run a mutation, you first call `usePasswordValidationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordValidationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordValidationMutation, { data, loading, error }] = usePasswordValidationMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function usePasswordValidationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PasswordValidationMutation, PasswordValidationMutationVariables>) {
        return ApolloReactHooks.useMutation<PasswordValidationMutation, PasswordValidationMutationVariables>(PasswordValidationDocument, baseOptions);
      }
export type PasswordValidationMutationHookResult = ReturnType<typeof usePasswordValidationMutation>;
export type PasswordValidationMutationResult = ApolloReactCommon.MutationResult<PasswordValidationMutation>;
export type PasswordValidationMutationOptions = ApolloReactCommon.BaseMutationOptions<PasswordValidationMutation, PasswordValidationMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const UsernameTakenDocument = gql`
    mutation usernameTaken($username: String!) {
  usernameTaken(username: $username)
}
    `;
export type UsernameTakenMutationFn = ApolloReactCommon.MutationFunction<UsernameTakenMutation, UsernameTakenMutationVariables>;

/**
 * __useUsernameTakenMutation__
 *
 * To run a mutation, you first call `useUsernameTakenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsernameTakenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usernameTakenMutation, { data, loading, error }] = useUsernameTakenMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsernameTakenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UsernameTakenMutation, UsernameTakenMutationVariables>) {
        return ApolloReactHooks.useMutation<UsernameTakenMutation, UsernameTakenMutationVariables>(UsernameTakenDocument, baseOptions);
      }
export type UsernameTakenMutationHookResult = ReturnType<typeof useUsernameTakenMutation>;
export type UsernameTakenMutationResult = ApolloReactCommon.MutationResult<UsernameTakenMutation>;
export type UsernameTakenMutationOptions = ApolloReactCommon.BaseMutationOptions<UsernameTakenMutation, UsernameTakenMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateIngredientDocument = gql`
    mutation createIngredient($name: String!, $unit: String!) {
  createIngredient(data: {name: $name, unit: $unit}) {
    id
    name
    unit
  }
}
    `;
export type CreateIngredientMutationFn = ApolloReactCommon.MutationFunction<CreateIngredientMutation, CreateIngredientMutationVariables>;

/**
 * __useCreateIngredientMutation__
 *
 * To run a mutation, you first call `useCreateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIngredientMutation, { data, loading, error }] = useCreateIngredientMutation({
 *   variables: {
 *      name: // value for 'name'
 *      unit: // value for 'unit'
 *   },
 * });
 */
export function useCreateIngredientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateIngredientMutation, CreateIngredientMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateIngredientMutation, CreateIngredientMutationVariables>(CreateIngredientDocument, baseOptions);
      }
export type CreateIngredientMutationHookResult = ReturnType<typeof useCreateIngredientMutation>;
export type CreateIngredientMutationResult = ApolloReactCommon.MutationResult<CreateIngredientMutation>;
export type CreateIngredientMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateIngredientMutation, CreateIngredientMutationVariables>;
export const UpdateIngredientDocument = gql`
    mutation updateIngredient($id: ID!, $name: String, $unit: String) {
  updateIngredient(id: $id, data: {name: $name, unit: $unit}) {
    id
    name
    unit
  }
}
    `;
export type UpdateIngredientMutationFn = ApolloReactCommon.MutationFunction<UpdateIngredientMutation, UpdateIngredientMutationVariables>;

/**
 * __useUpdateIngredientMutation__
 *
 * To run a mutation, you first call `useUpdateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIngredientMutation, { data, loading, error }] = useUpdateIngredientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      unit: // value for 'unit'
 *   },
 * });
 */
export function useUpdateIngredientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateIngredientMutation, UpdateIngredientMutationVariables>(UpdateIngredientDocument, baseOptions);
      }
export type UpdateIngredientMutationHookResult = ReturnType<typeof useUpdateIngredientMutation>;
export type UpdateIngredientMutationResult = ApolloReactCommon.MutationResult<UpdateIngredientMutation>;
export type UpdateIngredientMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>;
export const DeleteIngredientDocument = gql`
    mutation deleteIngredient($id: ID!) {
  deleteIngredient(id: $id) {
    id
  }
}
    `;
export type DeleteIngredientMutationFn = ApolloReactCommon.MutationFunction<DeleteIngredientMutation, DeleteIngredientMutationVariables>;

/**
 * __useDeleteIngredientMutation__
 *
 * To run a mutation, you first call `useDeleteIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIngredientMutation, { data, loading, error }] = useDeleteIngredientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIngredientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteIngredientMutation, DeleteIngredientMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteIngredientMutation, DeleteIngredientMutationVariables>(DeleteIngredientDocument, baseOptions);
      }
export type DeleteIngredientMutationHookResult = ReturnType<typeof useDeleteIngredientMutation>;
export type DeleteIngredientMutationResult = ApolloReactCommon.MutationResult<DeleteIngredientMutation>;
export type DeleteIngredientMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteIngredientMutation, DeleteIngredientMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($name: String!, $price: Int!, $unit: String!, $ingredients: [IngredientAmountInput!]!) {
  createProduct(data: {name: $name, unit: $unit, price: $price, ingredients: $ingredients}) {
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
export type CreateProductMutationFn = ApolloReactCommon.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      unit: // value for 'unit'
 *      ingredients: // value for 'ingredients'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = ApolloReactCommon.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: ID!, $name: String, $price: Int, $unit: String, $ingredients: [IngredientAmountInput!]!) {
  updateProduct(id: $id, data: {name: $name, unit: $unit, price: $price, ingredients: $ingredients}) {
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
export type UpdateProductMutationFn = ApolloReactCommon.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      unit: // value for 'unit'
 *      ingredients: // value for 'ingredients'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = ApolloReactCommon.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id) {
    id
  }
}
    `;
export type DeleteProductMutationFn = ApolloReactCommon.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = ApolloReactCommon.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($table: Int!, $products: [ProductAmountInput!]!) {
  createOrder(data: {table: $table, products: $products}) {
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
export type CreateOrderMutationFn = ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      table: // value for 'table'
 *      products: // value for 'products'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = ApolloReactCommon.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation updateOrder($id: ID!, $table: Int, $products: [ProductAmountInput!]!, $checkout: Boolean!) {
  updateOrder(id: $id, data: {checkout: $checkout, table: $table, products: $products}) {
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
export type UpdateOrderMutationFn = ApolloReactCommon.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      table: // value for 'table'
 *      products: // value for 'products'
 *      checkout: // value for 'checkout'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, baseOptions);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = ApolloReactCommon.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation deleteOrder($id: ID!) {
  deleteOrder(id: $id) {
    id
  }
}
    `;
export type DeleteOrderMutationFn = ApolloReactCommon.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, baseOptions);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = ApolloReactCommon.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const CreateImportDocument = gql`
    mutation createImport($total: Int!, $amount: Int!, $ingredient: ID!) {
  createImport(data: {total: $total, amount: $amount, ingredient: $ingredient}) {
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
export type CreateImportMutationFn = ApolloReactCommon.MutationFunction<CreateImportMutation, CreateImportMutationVariables>;

/**
 * __useCreateImportMutation__
 *
 * To run a mutation, you first call `useCreateImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImportMutation, { data, loading, error }] = useCreateImportMutation({
 *   variables: {
 *      total: // value for 'total'
 *      amount: // value for 'amount'
 *      ingredient: // value for 'ingredient'
 *   },
 * });
 */
export function useCreateImportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateImportMutation, CreateImportMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateImportMutation, CreateImportMutationVariables>(CreateImportDocument, baseOptions);
      }
export type CreateImportMutationHookResult = ReturnType<typeof useCreateImportMutation>;
export type CreateImportMutationResult = ApolloReactCommon.MutationResult<CreateImportMutation>;
export type CreateImportMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateImportMutation, CreateImportMutationVariables>;
export const UpdateImportDocument = gql`
    mutation updateImport($id: ID!, $total: Int, $inStock: Int, $amount: Int, $ingredient: ID) {
  updateImport(id: $id, data: {total: $total, amount: $amount, inStock: $inStock, ingredient: $ingredient}) {
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
export type UpdateImportMutationFn = ApolloReactCommon.MutationFunction<UpdateImportMutation, UpdateImportMutationVariables>;

/**
 * __useUpdateImportMutation__
 *
 * To run a mutation, you first call `useUpdateImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImportMutation, { data, loading, error }] = useUpdateImportMutation({
 *   variables: {
 *      id: // value for 'id'
 *      total: // value for 'total'
 *      inStock: // value for 'inStock'
 *      amount: // value for 'amount'
 *      ingredient: // value for 'ingredient'
 *   },
 * });
 */
export function useUpdateImportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateImportMutation, UpdateImportMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateImportMutation, UpdateImportMutationVariables>(UpdateImportDocument, baseOptions);
      }
export type UpdateImportMutationHookResult = ReturnType<typeof useUpdateImportMutation>;
export type UpdateImportMutationResult = ApolloReactCommon.MutationResult<UpdateImportMutation>;
export type UpdateImportMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateImportMutation, UpdateImportMutationVariables>;
export const DeleteImportDocument = gql`
    mutation deleteImport($id: ID!) {
  deleteImport(id: $id) {
    id
  }
}
    `;
export type DeleteImportMutationFn = ApolloReactCommon.MutationFunction<DeleteImportMutation, DeleteImportMutationVariables>;

/**
 * __useDeleteImportMutation__
 *
 * To run a mutation, you first call `useDeleteImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImportMutation, { data, loading, error }] = useDeleteImportMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteImportMutation, DeleteImportMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteImportMutation, DeleteImportMutationVariables>(DeleteImportDocument, baseOptions);
      }
export type DeleteImportMutationHookResult = ReturnType<typeof useDeleteImportMutation>;
export type DeleteImportMutationResult = ApolloReactCommon.MutationResult<DeleteImportMutation>;
export type DeleteImportMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteImportMutation, DeleteImportMutationVariables>;
export const CreateExpenseDocument = gql`
    mutation createExpense($begin: DateTime!, $end: DateTime!, $name: String!, $total: Int!) {
  createExpense(data: {begin: $begin, end: $end, name: $name, total: $total}) {
    id
    begin
    end
    name
    total
  }
}
    `;
export type CreateExpenseMutationFn = ApolloReactCommon.MutationFunction<CreateExpenseMutation, CreateExpenseMutationVariables>;

/**
 * __useCreateExpenseMutation__
 *
 * To run a mutation, you first call `useCreateExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExpenseMutation, { data, loading, error }] = useCreateExpenseMutation({
 *   variables: {
 *      begin: // value for 'begin'
 *      end: // value for 'end'
 *      name: // value for 'name'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useCreateExpenseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateExpenseMutation, CreateExpenseMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateExpenseMutation, CreateExpenseMutationVariables>(CreateExpenseDocument, baseOptions);
      }
export type CreateExpenseMutationHookResult = ReturnType<typeof useCreateExpenseMutation>;
export type CreateExpenseMutationResult = ApolloReactCommon.MutationResult<CreateExpenseMutation>;
export type CreateExpenseMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateExpenseMutation, CreateExpenseMutationVariables>;
export const UpdateExpenseDocument = gql`
    mutation updateExpense($id: ID!, $begin: DateTime, $end: DateTime, $name: String, $total: Int) {
  updateExpense(id: $id, data: {begin: $begin, end: $end, name: $name, total: $total}) {
    id
    begin
    end
    name
    total
  }
}
    `;
export type UpdateExpenseMutationFn = ApolloReactCommon.MutationFunction<UpdateExpenseMutation, UpdateExpenseMutationVariables>;

/**
 * __useUpdateExpenseMutation__
 *
 * To run a mutation, you first call `useUpdateExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExpenseMutation, { data, loading, error }] = useUpdateExpenseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      begin: // value for 'begin'
 *      end: // value for 'end'
 *      name: // value for 'name'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useUpdateExpenseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateExpenseMutation, UpdateExpenseMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateExpenseMutation, UpdateExpenseMutationVariables>(UpdateExpenseDocument, baseOptions);
      }
export type UpdateExpenseMutationHookResult = ReturnType<typeof useUpdateExpenseMutation>;
export type UpdateExpenseMutationResult = ApolloReactCommon.MutationResult<UpdateExpenseMutation>;
export type UpdateExpenseMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateExpenseMutation, UpdateExpenseMutationVariables>;
export const DeleteExpenseDocument = gql`
    mutation deleteExpense($id: ID!) {
  deleteExpense(id: $id) {
    id
  }
}
    `;
export type DeleteExpenseMutationFn = ApolloReactCommon.MutationFunction<DeleteExpenseMutation, DeleteExpenseMutationVariables>;

/**
 * __useDeleteExpenseMutation__
 *
 * To run a mutation, you first call `useDeleteExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExpenseMutation, { data, loading, error }] = useDeleteExpenseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExpenseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteExpenseMutation, DeleteExpenseMutationVariables>(DeleteExpenseDocument, baseOptions);
      }
export type DeleteExpenseMutationHookResult = ReturnType<typeof useDeleteExpenseMutation>;
export type DeleteExpenseMutationResult = ApolloReactCommon.MutationResult<DeleteExpenseMutation>;
export type DeleteExpenseMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    username
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($after: String) {
  users(query: {orderBy: username_ASC, after: $after}) {
    id
    username
    role
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const IngredientsDocument = gql`
    query ingredients($after: String) {
  ingredients(query: {orderBy: name_ASC, after: $after}) {
    id
    name
    unit
  }
}
    `;

/**
 * __useIngredientsQuery__
 *
 * To run a query within a React component, call `useIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientsQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useIngredientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
        return ApolloReactHooks.useQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, baseOptions);
      }
export function useIngredientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, baseOptions);
        }
export type IngredientsQueryHookResult = ReturnType<typeof useIngredientsQuery>;
export type IngredientsLazyQueryHookResult = ReturnType<typeof useIngredientsLazyQuery>;
export type IngredientsQueryResult = ApolloReactCommon.QueryResult<IngredientsQuery, IngredientsQueryVariables>;
export const ProductsDocument = gql`
    query products($after: String) {
  products(query: {orderBy: name_ASC, after: $after}) {
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

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const OrdersDocument = gql`
    query orders($after: String) {
  orders(query: {orderBy: createdAt_DESC, first: 10, after: $after}) {
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

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        return ApolloReactHooks.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
      }
export function useOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = ApolloReactCommon.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const ImportsDocument = gql`
    query imports($after: String) {
  imports(query: {orderBy: createdAt_DESC, first: 10, after: $after}) {
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

/**
 * __useImportsQuery__
 *
 * To run a query within a React component, call `useImportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportsQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useImportsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ImportsQuery, ImportsQueryVariables>) {
        return ApolloReactHooks.useQuery<ImportsQuery, ImportsQueryVariables>(ImportsDocument, baseOptions);
      }
export function useImportsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ImportsQuery, ImportsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ImportsQuery, ImportsQueryVariables>(ImportsDocument, baseOptions);
        }
export type ImportsQueryHookResult = ReturnType<typeof useImportsQuery>;
export type ImportsLazyQueryHookResult = ReturnType<typeof useImportsLazyQuery>;
export type ImportsQueryResult = ApolloReactCommon.QueryResult<ImportsQuery, ImportsQueryVariables>;
export const ExpensesDocument = gql`
    query expenses($after: String) {
  expenses(query: {orderBy: begin_DESC, first: 10, after: $after}) {
    id
    begin
    end
    name
    total
  }
}
    `;

/**
 * __useExpensesQuery__
 *
 * To run a query within a React component, call `useExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpensesQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useExpensesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
        return ApolloReactHooks.useQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, baseOptions);
      }
export function useExpensesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, baseOptions);
        }
export type ExpensesQueryHookResult = ReturnType<typeof useExpensesQuery>;
export type ExpensesLazyQueryHookResult = ReturnType<typeof useExpensesLazyQuery>;
export type ExpensesQueryResult = ApolloReactCommon.QueryResult<ExpensesQuery, ExpensesQueryVariables>;
export const GetStoreReportDocument = gql`
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

/**
 * __useGetStoreReportQuery__
 *
 * To run a query within a React component, call `useGetStoreReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreReportQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreReportQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStoreReportQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStoreReportQuery, GetStoreReportQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStoreReportQuery, GetStoreReportQueryVariables>(GetStoreReportDocument, baseOptions);
      }
export function useGetStoreReportLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStoreReportQuery, GetStoreReportQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStoreReportQuery, GetStoreReportQueryVariables>(GetStoreReportDocument, baseOptions);
        }
export type GetStoreReportQueryHookResult = ReturnType<typeof useGetStoreReportQuery>;
export type GetStoreReportLazyQueryHookResult = ReturnType<typeof useGetStoreReportLazyQuery>;
export type GetStoreReportQueryResult = ApolloReactCommon.QueryResult<GetStoreReportQuery, GetStoreReportQueryVariables>;
export const DailyRevenueDocument = gql`
    query dailyRevenue {
  dailyRevenue {
    day
    total
  }
}
    `;

/**
 * __useDailyRevenueQuery__
 *
 * To run a query within a React component, call `useDailyRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `useDailyRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDailyRevenueQuery({
 *   variables: {
 *   },
 * });
 */
export function useDailyRevenueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DailyRevenueQuery, DailyRevenueQueryVariables>) {
        return ApolloReactHooks.useQuery<DailyRevenueQuery, DailyRevenueQueryVariables>(DailyRevenueDocument, baseOptions);
      }
export function useDailyRevenueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DailyRevenueQuery, DailyRevenueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DailyRevenueQuery, DailyRevenueQueryVariables>(DailyRevenueDocument, baseOptions);
        }
export type DailyRevenueQueryHookResult = ReturnType<typeof useDailyRevenueQuery>;
export type DailyRevenueLazyQueryHookResult = ReturnType<typeof useDailyRevenueLazyQuery>;
export type DailyRevenueQueryResult = ApolloReactCommon.QueryResult<DailyRevenueQuery, DailyRevenueQueryVariables>;
export const MonthlyRevenueDocument = gql`
    query monthlyRevenue {
  monthlyRevenue {
    month
    total
  }
}
    `;

/**
 * __useMonthlyRevenueQuery__
 *
 * To run a query within a React component, call `useMonthlyRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonthlyRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonthlyRevenueQuery({
 *   variables: {
 *   },
 * });
 */
export function useMonthlyRevenueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MonthlyRevenueQuery, MonthlyRevenueQueryVariables>) {
        return ApolloReactHooks.useQuery<MonthlyRevenueQuery, MonthlyRevenueQueryVariables>(MonthlyRevenueDocument, baseOptions);
      }
export function useMonthlyRevenueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MonthlyRevenueQuery, MonthlyRevenueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MonthlyRevenueQuery, MonthlyRevenueQueryVariables>(MonthlyRevenueDocument, baseOptions);
        }
export type MonthlyRevenueQueryHookResult = ReturnType<typeof useMonthlyRevenueQuery>;
export type MonthlyRevenueLazyQueryHookResult = ReturnType<typeof useMonthlyRevenueLazyQuery>;
export type MonthlyRevenueQueryResult = ApolloReactCommon.QueryResult<MonthlyRevenueQuery, MonthlyRevenueQueryVariables>;
export const YearlyRevenueDocument = gql`
    query yearlyRevenue {
  yearlyRevenue {
    year
    total
  }
}
    `;

/**
 * __useYearlyRevenueQuery__
 *
 * To run a query within a React component, call `useYearlyRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearlyRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearlyRevenueQuery({
 *   variables: {
 *   },
 * });
 */
export function useYearlyRevenueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<YearlyRevenueQuery, YearlyRevenueQueryVariables>) {
        return ApolloReactHooks.useQuery<YearlyRevenueQuery, YearlyRevenueQueryVariables>(YearlyRevenueDocument, baseOptions);
      }
export function useYearlyRevenueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<YearlyRevenueQuery, YearlyRevenueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<YearlyRevenueQuery, YearlyRevenueQueryVariables>(YearlyRevenueDocument, baseOptions);
        }
export type YearlyRevenueQueryHookResult = ReturnType<typeof useYearlyRevenueQuery>;
export type YearlyRevenueLazyQueryHookResult = ReturnType<typeof useYearlyRevenueLazyQuery>;
export type YearlyRevenueQueryResult = ApolloReactCommon.QueryResult<YearlyRevenueQuery, YearlyRevenueQueryVariables>;
export const DailyExpenseDocument = gql`
    query dailyExpense {
  dailyExpense {
    day
    total
  }
}
    `;

/**
 * __useDailyExpenseQuery__
 *
 * To run a query within a React component, call `useDailyExpenseQuery` and pass it any options that fit your needs.
 * When your component renders, `useDailyExpenseQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDailyExpenseQuery({
 *   variables: {
 *   },
 * });
 */
export function useDailyExpenseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DailyExpenseQuery, DailyExpenseQueryVariables>) {
        return ApolloReactHooks.useQuery<DailyExpenseQuery, DailyExpenseQueryVariables>(DailyExpenseDocument, baseOptions);
      }
export function useDailyExpenseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DailyExpenseQuery, DailyExpenseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DailyExpenseQuery, DailyExpenseQueryVariables>(DailyExpenseDocument, baseOptions);
        }
export type DailyExpenseQueryHookResult = ReturnType<typeof useDailyExpenseQuery>;
export type DailyExpenseLazyQueryHookResult = ReturnType<typeof useDailyExpenseLazyQuery>;
export type DailyExpenseQueryResult = ApolloReactCommon.QueryResult<DailyExpenseQuery, DailyExpenseQueryVariables>;
export const MonthlyExpenseDocument = gql`
    query monthlyExpense {
  monthlyExpense {
    month
    total
  }
}
    `;

/**
 * __useMonthlyExpenseQuery__
 *
 * To run a query within a React component, call `useMonthlyExpenseQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonthlyExpenseQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonthlyExpenseQuery({
 *   variables: {
 *   },
 * });
 */
export function useMonthlyExpenseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MonthlyExpenseQuery, MonthlyExpenseQueryVariables>) {
        return ApolloReactHooks.useQuery<MonthlyExpenseQuery, MonthlyExpenseQueryVariables>(MonthlyExpenseDocument, baseOptions);
      }
export function useMonthlyExpenseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MonthlyExpenseQuery, MonthlyExpenseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MonthlyExpenseQuery, MonthlyExpenseQueryVariables>(MonthlyExpenseDocument, baseOptions);
        }
export type MonthlyExpenseQueryHookResult = ReturnType<typeof useMonthlyExpenseQuery>;
export type MonthlyExpenseLazyQueryHookResult = ReturnType<typeof useMonthlyExpenseLazyQuery>;
export type MonthlyExpenseQueryResult = ApolloReactCommon.QueryResult<MonthlyExpenseQuery, MonthlyExpenseQueryVariables>;
export const YearlyExpenseDocument = gql`
    query yearlyExpense {
  yearlyExpense {
    year
    total
  }
}
    `;

/**
 * __useYearlyExpenseQuery__
 *
 * To run a query within a React component, call `useYearlyExpenseQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearlyExpenseQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearlyExpenseQuery({
 *   variables: {
 *   },
 * });
 */
export function useYearlyExpenseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<YearlyExpenseQuery, YearlyExpenseQueryVariables>) {
        return ApolloReactHooks.useQuery<YearlyExpenseQuery, YearlyExpenseQueryVariables>(YearlyExpenseDocument, baseOptions);
      }
export function useYearlyExpenseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<YearlyExpenseQuery, YearlyExpenseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<YearlyExpenseQuery, YearlyExpenseQueryVariables>(YearlyExpenseDocument, baseOptions);
        }
export type YearlyExpenseQueryHookResult = ReturnType<typeof useYearlyExpenseQuery>;
export type YearlyExpenseLazyQueryHookResult = ReturnType<typeof useYearlyExpenseLazyQuery>;
export type YearlyExpenseQueryResult = ApolloReactCommon.QueryResult<YearlyExpenseQuery, YearlyExpenseQueryVariables>;
export const IngredientSubscriptionDocument = gql`
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

/**
 * __useIngredientSubscriptionSubscription__
 *
 * To run a query within a React component, call `useIngredientSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useIngredientSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useIngredientSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<IngredientSubscriptionSubscription, IngredientSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<IngredientSubscriptionSubscription, IngredientSubscriptionSubscriptionVariables>(IngredientSubscriptionDocument, baseOptions);
      }
export type IngredientSubscriptionSubscriptionHookResult = ReturnType<typeof useIngredientSubscriptionSubscription>;
export type IngredientSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<IngredientSubscriptionSubscription>;
export const ProductSubscriptionDocument = gql`
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

/**
 * __useProductSubscriptionSubscription__
 *
 * To run a query within a React component, call `useProductSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProductSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useProductSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ProductSubscriptionSubscription, ProductSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ProductSubscriptionSubscription, ProductSubscriptionSubscriptionVariables>(ProductSubscriptionDocument, baseOptions);
      }
export type ProductSubscriptionSubscriptionHookResult = ReturnType<typeof useProductSubscriptionSubscription>;
export type ProductSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<ProductSubscriptionSubscription>;
export const OrderSubscriptionDocument = gql`
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

/**
 * __useOrderSubscriptionSubscription__
 *
 * To run a query within a React component, call `useOrderSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrderSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOrderSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OrderSubscriptionSubscription, OrderSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OrderSubscriptionSubscription, OrderSubscriptionSubscriptionVariables>(OrderSubscriptionDocument, baseOptions);
      }
export type OrderSubscriptionSubscriptionHookResult = ReturnType<typeof useOrderSubscriptionSubscription>;
export type OrderSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<OrderSubscriptionSubscription>;
export const ImportSubscriptionDocument = gql`
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

/**
 * __useImportSubscriptionSubscription__
 *
 * To run a query within a React component, call `useImportSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useImportSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useImportSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ImportSubscriptionSubscription, ImportSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ImportSubscriptionSubscription, ImportSubscriptionSubscriptionVariables>(ImportSubscriptionDocument, baseOptions);
      }
export type ImportSubscriptionSubscriptionHookResult = ReturnType<typeof useImportSubscriptionSubscription>;
export type ImportSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<ImportSubscriptionSubscription>;
export const ExpenseSubscriptionDocument = gql`
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

/**
 * __useExpenseSubscriptionSubscription__
 *
 * To run a query within a React component, call `useExpenseSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useExpenseSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpenseSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useExpenseSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ExpenseSubscriptionSubscription, ExpenseSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ExpenseSubscriptionSubscription, ExpenseSubscriptionSubscriptionVariables>(ExpenseSubscriptionDocument, baseOptions);
      }
export type ExpenseSubscriptionSubscriptionHookResult = ReturnType<typeof useExpenseSubscriptionSubscription>;
export type ExpenseSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<ExpenseSubscriptionSubscription>;