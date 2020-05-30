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
