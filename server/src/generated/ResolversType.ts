import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../resolvers/types/Context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type CreateExpenseInput = {
  begin: Scalars['DateTime'],
  end: Scalars['DateTime'],
  name: Scalars['String'],
  total: Scalars['Int'],
};

export type CreateImportInput = {
  amount: Scalars['Int'],
  ingredient: Scalars['ID'],
  total: Scalars['Int'],
};

export type CreateIngredientInput = {
  name: Scalars['String'],
  unit: Scalars['String'],
};

export type CreateOrderInput = {
  products: Array<ProductAmountInput>,
  table: Scalars['Int'],
};

export type CreateProductInput = {
  ingredients: Array<IngredientAmountInput>,
  name: Scalars['String'],
  price: Scalars['Int'],
  unit: Scalars['String'],
};

export type CreateUserInput = {
  role: UserRole,
  username: Scalars['String'],
};


export type DayExpense = {
   __typename?: 'DayExpense',
  day: Scalars['String'],
  total: Scalars['Int'],
};

export type DayRevenue = {
   __typename?: 'DayRevenue',
  day: Scalars['String'],
  total: Scalars['Int'],
};

export type Expense = Node & {
   __typename?: 'Expense',
  begin: Scalars['DateTime'],
  end: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  total: Scalars['Int'],
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
   __typename?: 'ExpensePreviousValues',
  begin: Scalars['DateTime'],
  end: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  total: Scalars['Int'],
};

export type ExpensesQueryInput = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ExpenseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
};

export type ExpenseSubscriptionPayload = {
   __typename?: 'ExpenseSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Expense>,
  previousValues?: Maybe<ExpensePreviousValues>,
};

export type Import = Node & {
   __typename?: 'Import',
  amount: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  inStock: Scalars['Int'],
  ingredient: Ingredient,
  total: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
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
   __typename?: 'ImportPreviousValues',
  amount: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  inStock: Scalars['Int'],
  total: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
};

export type ImportsQueryInput = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ImportOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
};

export type ImportSubscriptionPayload = {
   __typename?: 'ImportSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Import>,
  previousValues?: Maybe<ImportPreviousValues>,
};

export type Ingredient = Node & {
   __typename?: 'Ingredient',
  id: Scalars['ID'],
  name: Scalars['String'],
  unit: Scalars['String'],
};

export type IngredientAmount = Node & {
   __typename?: 'IngredientAmount',
  amount: Scalars['Int'],
  id: Scalars['ID'],
  ingredient: Ingredient,
};

export type IngredientAmountInput = {
  amount: Scalars['Int'],
  ingredient: Scalars['ID'],
};

export type IngredientInStock = {
   __typename?: 'IngredientInStock',
  amount: Scalars['Int'],
  ingredient: Ingredient,
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
   __typename?: 'IngredientPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  unit: Scalars['String'],
};

export type IngredientsQueryInput = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<IngredientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
};

export type IngredientSubscriptionPayload = {
   __typename?: 'IngredientSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Ingredient>,
  previousValues?: Maybe<IngredientPreviousValues>,
};

export type MonthExpense = {
   __typename?: 'MonthExpense',
  month: Scalars['String'],
  total: Scalars['Int'],
};

export type MonthRevenue = {
   __typename?: 'MonthRevenue',
  month: Scalars['String'],
  total: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  changePassword: Scalars['Boolean'],
  createExpense: Expense,
  createImport: Import,
  createIngredient: Ingredient,
  createOrder: Order,
  createProduct: Product,
  createUser: User,
  deleteExpense: Expense,
  deleteImport: Import,
  deleteIngredient: Ingredient,
  deleteOrder: Order,
  deleteProduct: Product,
  deleteUser: User,
  login: User,
  logout: Scalars['Boolean'],
  passwordValidation: Scalars['Boolean'],
  updateExpense: Expense,
  updateImport: Import,
  updateIngredient: Ingredient,
  updateOrder: Order,
  updateProduct: Product,
  updateUser: User,
  usernameTaken: Scalars['Boolean'],
};


export type MutationChangePasswordArgs = {
  oldPassword: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationCreateExpenseArgs = {
  data: CreateExpenseInput
};


export type MutationCreateImportArgs = {
  data: CreateImportInput
};


export type MutationCreateIngredientArgs = {
  data: CreateIngredientInput
};


export type MutationCreateOrderArgs = {
  data: CreateOrderInput
};


export type MutationCreateProductArgs = {
  data: CreateProductInput
};


export type MutationCreateUserArgs = {
  data: CreateUserInput
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['ID']
};


export type MutationDeleteImportArgs = {
  id: Scalars['ID']
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['ID']
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationLoginArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type MutationPasswordValidationArgs = {
  password: Scalars['String']
};


export type MutationUpdateExpenseArgs = {
  id: Scalars['ID'],
  data: UpdateExpenseInput
};


export type MutationUpdateImportArgs = {
  id: Scalars['ID'],
  data: UpdateImportInput
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['ID'],
  data: UpdateIngredientInput
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'],
  data: UpdateOrderInput
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'],
  data: UpdateProductInput
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput
};


export type MutationUsernameTakenArgs = {
  username: Scalars['String']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

export type Order = {
   __typename?: 'Order',
  checkout: Scalars['Boolean'],
  createdAt: Scalars['String'],
  id: Scalars['ID'],
  products: Array<ProductAmount>,
  table: Scalars['Int'],
  total?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['String'],
  user: User,
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
   __typename?: 'OrderPreviousValues',
  checkout: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  table: Scalars['Int'],
  total?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
};

export type OrdersQueryInput = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
};

export type OrderSubscriptionPayload = {
   __typename?: 'OrderSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Order>,
  previousValues?: Maybe<OrderPreviousValues>,
};

export type Product = {
   __typename?: 'Product',
  id: Scalars['ID'],
  ingredients: Array<IngredientAmount>,
  name: Scalars['String'],
  price: Scalars['Int'],
  unit: Scalars['String'],
};

export type ProductAmount = Node & {
   __typename?: 'ProductAmount',
  amount: Scalars['Int'],
  id: Scalars['ID'],
  product: Product,
};

export type ProductAmountInput = {
  amount: Scalars['Int'],
  product: Scalars['ID'],
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

export type ProductPreviousValues = {
   __typename?: 'ProductPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  price: Scalars['Int'],
  unit: Scalars['String'],
};

export type ProductsQueryInput = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
};

export type ProductSubscriptionPayload = {
   __typename?: 'ProductSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Product>,
  previousValues?: Maybe<IngredientPreviousValues>,
};

export type Query = {
   __typename?: 'Query',
  dailyExpense?: Maybe<Array<DayExpense>>,
  dailyRevenue?: Maybe<Array<DayRevenue>>,
  expenses?: Maybe<Array<Expense>>,
  imports?: Maybe<Array<Import>>,
  ingredients?: Maybe<Array<Ingredient>>,
  me?: Maybe<User>,
  monthlyExpense?: Maybe<Array<MonthExpense>>,
  monthlyRevenue?: Maybe<Array<MonthRevenue>>,
  orders?: Maybe<Array<Order>>,
  products?: Maybe<Array<Product>>,
  store?: Maybe<Array<IngredientInStock>>,
  users?: Maybe<Array<User>>,
  yearlyExpense?: Maybe<Array<YearExpense>>,
  yearlyRevenue?: Maybe<Array<YearRevenue>>,
};


export type QueryExpensesArgs = {
  query?: Maybe<ExpensesQueryInput>
};


export type QueryImportsArgs = {
  query?: Maybe<ImportsQueryInput>
};


export type QueryIngredientsArgs = {
  query?: Maybe<IngredientsQueryInput>
};


export type QueryOrdersArgs = {
  query?: Maybe<OrdersQueryInput>
};


export type QueryProductsArgs = {
  query?: Maybe<ProductsQueryInput>
};


export type QueryUsersArgs = {
  query?: Maybe<UsersQueryInput>
};

export type Subscription = {
   __typename?: 'Subscription',
  expenses?: Maybe<ExpenseSubscriptionPayload>,
  imports?: Maybe<ImportSubscriptionPayload>,
  ingredients?: Maybe<IngredientSubscriptionPayload>,
  orders?: Maybe<OrderSubscriptionPayload>,
  products?: Maybe<ProductSubscriptionPayload>,
};

export type UpdateExpenseInput = {
  begin?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

export type UpdateImportInput = {
  amount?: Maybe<Scalars['Int']>,
  inStock?: Maybe<Scalars['Int']>,
  ingredient?: Maybe<Scalars['ID']>,
  total?: Maybe<Scalars['Int']>,
};

export type UpdateIngredientInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
};

export type UpdateOrderInput = {
  checkout: Scalars['Boolean'],
  products: Array<ProductAmountInput>,
  table?: Maybe<Scalars['Int']>,
};

export type UpdateProductInput = {
  ingredients: Array<IngredientAmountInput>,
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  unit?: Maybe<Scalars['String']>,
};

export type UpdateUserInput = {
  id: Scalars['ID'],
  role?: Maybe<UserRole>,
  username?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  role: UserRole,
  username: Scalars['String'],
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
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
};

export type YearExpense = {
   __typename?: 'YearExpense',
  total: Scalars['Int'],
  year: Scalars['String'],
};

export type YearRevenue = {
   __typename?: 'YearRevenue',
  total: Scalars['Int'],
  year: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  DayExpense: ResolverTypeWrapper<any>,
  String: ResolverTypeWrapper<any>,
  Int: ResolverTypeWrapper<any>,
  DayRevenue: ResolverTypeWrapper<any>,
  ExpensesQueryInput: ResolverTypeWrapper<any>,
  ExpenseOrderByInput: ResolverTypeWrapper<any>,
  Expense: ResolverTypeWrapper<any>,
  Node: ResolverTypeWrapper<any>,
  ID: ResolverTypeWrapper<any>,
  DateTime: ResolverTypeWrapper<any>,
  ImportsQueryInput: ResolverTypeWrapper<any>,
  ImportOrderByInput: ResolverTypeWrapper<any>,
  Import: ResolverTypeWrapper<any>,
  Ingredient: ResolverTypeWrapper<any>,
  IngredientsQueryInput: ResolverTypeWrapper<any>,
  IngredientOrderByInput: ResolverTypeWrapper<any>,
  User: ResolverTypeWrapper<any>,
  UserRole: ResolverTypeWrapper<any>,
  MonthExpense: ResolverTypeWrapper<any>,
  MonthRevenue: ResolverTypeWrapper<any>,
  OrdersQueryInput: ResolverTypeWrapper<any>,
  OrderOrderByInput: ResolverTypeWrapper<any>,
  Order: ResolverTypeWrapper<any>,
  Boolean: ResolverTypeWrapper<any>,
  ProductAmount: ResolverTypeWrapper<any>,
  Product: ResolverTypeWrapper<any>,
  IngredientAmount: ResolverTypeWrapper<any>,
  ProductsQueryInput: ResolverTypeWrapper<any>,
  ProductOrderByInput: ResolverTypeWrapper<any>,
  IngredientInStock: ResolverTypeWrapper<any>,
  UsersQueryInput: ResolverTypeWrapper<any>,
  UserOrderByInput: ResolverTypeWrapper<any>,
  YearExpense: ResolverTypeWrapper<any>,
  YearRevenue: ResolverTypeWrapper<any>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateExpenseInput: ResolverTypeWrapper<any>,
  CreateImportInput: ResolverTypeWrapper<any>,
  CreateIngredientInput: ResolverTypeWrapper<any>,
  CreateOrderInput: ResolverTypeWrapper<any>,
  ProductAmountInput: ResolverTypeWrapper<any>,
  CreateProductInput: ResolverTypeWrapper<any>,
  IngredientAmountInput: ResolverTypeWrapper<any>,
  CreateUserInput: ResolverTypeWrapper<any>,
  UpdateExpenseInput: ResolverTypeWrapper<any>,
  UpdateImportInput: ResolverTypeWrapper<any>,
  UpdateIngredientInput: ResolverTypeWrapper<any>,
  UpdateOrderInput: ResolverTypeWrapper<any>,
  UpdateProductInput: ResolverTypeWrapper<any>,
  UpdateUserInput: ResolverTypeWrapper<any>,
  Subscription: ResolverTypeWrapper<{}>,
  ExpenseSubscriptionPayload: ResolverTypeWrapper<any>,
  MutationType: ResolverTypeWrapper<any>,
  ExpensePreviousValues: ResolverTypeWrapper<any>,
  ImportSubscriptionPayload: ResolverTypeWrapper<any>,
  ImportPreviousValues: ResolverTypeWrapper<any>,
  IngredientSubscriptionPayload: ResolverTypeWrapper<any>,
  IngredientPreviousValues: ResolverTypeWrapper<any>,
  OrderSubscriptionPayload: ResolverTypeWrapper<any>,
  OrderPreviousValues: ResolverTypeWrapper<any>,
  ProductSubscriptionPayload: ResolverTypeWrapper<any>,
  ProductPreviousValues: ResolverTypeWrapper<any>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  DayExpense: any,
  String: any,
  Int: any,
  DayRevenue: any,
  ExpensesQueryInput: any,
  ExpenseOrderByInput: any,
  Expense: any,
  Node: any,
  ID: any,
  DateTime: any,
  ImportsQueryInput: any,
  ImportOrderByInput: any,
  Import: any,
  Ingredient: any,
  IngredientsQueryInput: any,
  IngredientOrderByInput: any,
  User: any,
  UserRole: any,
  MonthExpense: any,
  MonthRevenue: any,
  OrdersQueryInput: any,
  OrderOrderByInput: any,
  Order: any,
  Boolean: any,
  ProductAmount: any,
  Product: any,
  IngredientAmount: any,
  ProductsQueryInput: any,
  ProductOrderByInput: any,
  IngredientInStock: any,
  UsersQueryInput: any,
  UserOrderByInput: any,
  YearExpense: any,
  YearRevenue: any,
  Mutation: {},
  CreateExpenseInput: any,
  CreateImportInput: any,
  CreateIngredientInput: any,
  CreateOrderInput: any,
  ProductAmountInput: any,
  CreateProductInput: any,
  IngredientAmountInput: any,
  CreateUserInput: any,
  UpdateExpenseInput: any,
  UpdateImportInput: any,
  UpdateIngredientInput: any,
  UpdateOrderInput: any,
  UpdateProductInput: any,
  UpdateUserInput: any,
  Subscription: {},
  ExpenseSubscriptionPayload: any,
  MutationType: any,
  ExpensePreviousValues: any,
  ImportSubscriptionPayload: any,
  ImportPreviousValues: any,
  IngredientSubscriptionPayload: any,
  IngredientPreviousValues: any,
  OrderSubscriptionPayload: any,
  OrderPreviousValues: any,
  ProductSubscriptionPayload: any,
  ProductPreviousValues: any,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DayExpenseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DayExpense'] = ResolversParentTypes['DayExpense']> = {
  day?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DayRevenueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DayRevenue'] = ResolversParentTypes['DayRevenue']> = {
  day?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ExpenseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Expense'] = ResolversParentTypes['Expense']> = {
  begin?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  end?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ExpensePreviousValuesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ExpensePreviousValues'] = ResolversParentTypes['ExpensePreviousValues']> = {
  begin?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  end?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ExpenseSubscriptionPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ExpenseSubscriptionPayload'] = ResolversParentTypes['ExpenseSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Expense']>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['ExpensePreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ImportResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Import'] = ResolversParentTypes['Import']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inStock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  ingredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ImportPreviousValuesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportPreviousValues'] = ResolversParentTypes['ImportPreviousValues']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inStock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ImportSubscriptionPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportSubscriptionPayload'] = ResolversParentTypes['ImportSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Import']>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['ImportPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IngredientResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IngredientAmountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IngredientAmount'] = ResolversParentTypes['IngredientAmount']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  ingredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IngredientInStockResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IngredientInStock'] = ResolversParentTypes['IngredientInStock']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  ingredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IngredientPreviousValuesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IngredientPreviousValues'] = ResolversParentTypes['IngredientPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IngredientSubscriptionPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IngredientSubscriptionPayload'] = ResolversParentTypes['IngredientSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Ingredient']>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['IngredientPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MonthExpenseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MonthExpense'] = ResolversParentTypes['MonthExpense']> = {
  month?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MonthRevenueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MonthRevenue'] = ResolversParentTypes['MonthRevenue']> = {
  month?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  changePassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'oldPassword' | 'newPassword'>>,
  createExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<MutationCreateExpenseArgs, 'data'>>,
  createImport?: Resolver<ResolversTypes['Import'], ParentType, ContextType, RequireFields<MutationCreateImportArgs, 'data'>>,
  createIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationCreateIngredientArgs, 'data'>>,
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'data'>>,
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>,
  deleteExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<MutationDeleteExpenseArgs, 'id'>>,
  deleteImport?: Resolver<ResolversTypes['Import'], ParentType, ContextType, RequireFields<MutationDeleteImportArgs, 'id'>>,
  deleteIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationDeleteIngredientArgs, 'id'>>,
  deleteOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'id'>>,
  deleteProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>,
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
  login?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'username' | 'password'>>,
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  passwordValidation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPasswordValidationArgs, 'password'>>,
  updateExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<MutationUpdateExpenseArgs, 'id' | 'data'>>,
  updateImport?: Resolver<ResolversTypes['Import'], ParentType, ContextType, RequireFields<MutationUpdateImportArgs, 'id' | 'data'>>,
  updateIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationUpdateIngredientArgs, 'id' | 'data'>>,
  updateOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'id' | 'data'>>,
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'data'>>,
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data'>>,
  usernameTaken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUsernameTakenArgs, 'username'>>,
};

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Expense' | 'Import' | 'Ingredient' | 'ProductAmount' | 'IngredientAmount', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type OrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  checkout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  products?: Resolver<Array<ResolversTypes['ProductAmount']>, ParentType, ContextType>,
  table?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type OrderPreviousValuesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderPreviousValues'] = ResolversParentTypes['OrderPreviousValues']> = {
  checkout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  table?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type OrderSubscriptionPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderSubscriptionPayload'] = ResolversParentTypes['OrderSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['OrderPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  ingredients?: Resolver<Array<ResolversTypes['IngredientAmount']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProductAmountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductAmount'] = ResolversParentTypes['ProductAmount']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProductPreviousValuesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductPreviousValues'] = ResolversParentTypes['ProductPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProductSubscriptionPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductSubscriptionPayload'] = ResolversParentTypes['ProductSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['IngredientPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  dailyExpense?: Resolver<Maybe<Array<ResolversTypes['DayExpense']>>, ParentType, ContextType>,
  dailyRevenue?: Resolver<Maybe<Array<ResolversTypes['DayRevenue']>>, ParentType, ContextType>,
  expenses?: Resolver<Maybe<Array<ResolversTypes['Expense']>>, ParentType, ContextType, QueryExpensesArgs>,
  imports?: Resolver<Maybe<Array<ResolversTypes['Import']>>, ParentType, ContextType, QueryImportsArgs>,
  ingredients?: Resolver<Maybe<Array<ResolversTypes['Ingredient']>>, ParentType, ContextType, QueryIngredientsArgs>,
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  monthlyExpense?: Resolver<Maybe<Array<ResolversTypes['MonthExpense']>>, ParentType, ContextType>,
  monthlyRevenue?: Resolver<Maybe<Array<ResolversTypes['MonthRevenue']>>, ParentType, ContextType>,
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, QueryOrdersArgs>,
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType, QueryProductsArgs>,
  store?: Resolver<Maybe<Array<ResolversTypes['IngredientInStock']>>, ParentType, ContextType>,
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, QueryUsersArgs>,
  yearlyExpense?: Resolver<Maybe<Array<ResolversTypes['YearExpense']>>, ParentType, ContextType>,
  yearlyRevenue?: Resolver<Maybe<Array<ResolversTypes['YearRevenue']>>, ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  expenses?: SubscriptionResolver<Maybe<ResolversTypes['ExpenseSubscriptionPayload']>, "expenses", ParentType, ContextType>,
  imports?: SubscriptionResolver<Maybe<ResolversTypes['ImportSubscriptionPayload']>, "imports", ParentType, ContextType>,
  ingredients?: SubscriptionResolver<Maybe<ResolversTypes['IngredientSubscriptionPayload']>, "ingredients", ParentType, ContextType>,
  orders?: SubscriptionResolver<Maybe<ResolversTypes['OrderSubscriptionPayload']>, "orders", ParentType, ContextType>,
  products?: SubscriptionResolver<Maybe<ResolversTypes['ProductSubscriptionPayload']>, "products", ParentType, ContextType>,
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type YearExpenseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['YearExpense'] = ResolversParentTypes['YearExpense']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type YearRevenueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['YearRevenue'] = ResolversParentTypes['YearRevenue']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = Context> = {
  DateTime?: GraphQLScalarType,
  DayExpense?: DayExpenseResolvers<ContextType>,
  DayRevenue?: DayRevenueResolvers<ContextType>,
  Expense?: ExpenseResolvers<ContextType>,
  ExpensePreviousValues?: ExpensePreviousValuesResolvers<ContextType>,
  ExpenseSubscriptionPayload?: ExpenseSubscriptionPayloadResolvers<ContextType>,
  Import?: ImportResolvers<ContextType>,
  ImportPreviousValues?: ImportPreviousValuesResolvers<ContextType>,
  ImportSubscriptionPayload?: ImportSubscriptionPayloadResolvers<ContextType>,
  Ingredient?: IngredientResolvers<ContextType>,
  IngredientAmount?: IngredientAmountResolvers<ContextType>,
  IngredientInStock?: IngredientInStockResolvers<ContextType>,
  IngredientPreviousValues?: IngredientPreviousValuesResolvers<ContextType>,
  IngredientSubscriptionPayload?: IngredientSubscriptionPayloadResolvers<ContextType>,
  MonthExpense?: MonthExpenseResolvers<ContextType>,
  MonthRevenue?: MonthRevenueResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  Order?: OrderResolvers<ContextType>,
  OrderPreviousValues?: OrderPreviousValuesResolvers<ContextType>,
  OrderSubscriptionPayload?: OrderSubscriptionPayloadResolvers<ContextType>,
  Product?: ProductResolvers<ContextType>,
  ProductAmount?: ProductAmountResolvers<ContextType>,
  ProductPreviousValues?: ProductPreviousValuesResolvers<ContextType>,
  ProductSubscriptionPayload?: ProductSubscriptionPayloadResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  YearExpense?: YearExpenseResolvers<ContextType>,
  YearRevenue?: YearRevenueResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
