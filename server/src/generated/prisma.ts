import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    orders: <T = Array<Order | null>>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imports: <T = Array<Import | null>>(args: { where?: ImportWhereInput | null, orderBy?: ImportOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expenses: <T = Array<Expense | null>>(args: { where?: ExpenseWhereInput | null, orderBy?: ExpenseOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredients: <T = Array<Ingredient | null>>(args: { where?: IngredientWhereInput | null, orderBy?: IngredientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Array<Product | null>>(args: { where?: ProductWhereInput | null, orderBy?: ProductOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    import: <T = Import | null>(args: { where: ImportWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    expense: <T = Expense | null>(args: { where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    ingredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput | null, orderBy?: OrderOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    importsConnection: <T = ImportConnection>(args: { where?: ImportWhereInput | null, orderBy?: ImportOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    expensesConnection: <T = ExpenseConnection>(args: { where?: ExpenseWhereInput | null, orderBy?: ExpenseOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredientsConnection: <T = IngredientConnection>(args: { where?: IngredientWhereInput | null, orderBy?: IngredientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput | null, orderBy?: ProductOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImport: <T = Import>(args: { data: ImportCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExpense: <T = Expense>(args: { data: ExpenseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createIngredient: <T = Ingredient>(args: { data: IngredientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateImport: <T = Import | null>(args: { data: ImportUpdateInput, where: ImportWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateExpense: <T = Expense | null>(args: { data: ExpenseUpdateInput, where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateIngredient: <T = Ingredient | null>(args: { data: IngredientUpdateInput, where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteImport: <T = Import | null>(args: { where: ImportWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteExpense: <T = Expense | null>(args: { where: ExpenseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteIngredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImport: <T = Import>(args: { where: ImportWhereUniqueInput, create: ImportCreateInput, update: ImportUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExpense: <T = Expense>(args: { where: ExpenseWhereUniqueInput, create: ExpenseCreateInput, update: ExpenseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertIngredient: <T = Ingredient>(args: { where: IngredientWhereUniqueInput, create: IngredientCreateInput, update: IngredientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateManyMutationInput, where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyImports: <T = BatchPayload>(args: { data: ImportUpdateManyMutationInput, where?: ImportWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExpenses: <T = BatchPayload>(args: { data: ExpenseUpdateManyMutationInput, where?: ExpenseWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyIngredients: <T = BatchPayload>(args: { data: IngredientUpdateManyMutationInput, where?: IngredientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImports: <T = BatchPayload>(args: { where?: ImportWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExpenses: <T = BatchPayload>(args: { where?: ExpenseWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyIngredients: <T = BatchPayload>(args: { where?: IngredientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    import: <T = ImportSubscriptionPayload | null>(args: { where?: ImportSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    expense: <T = ExpenseSubscriptionPayload | null>(args: { where?: ExpenseSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    ingredient: <T = IngredientSubscriptionPayload | null>(args: { where?: IngredientSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Order: (where?: OrderWhereInput) => Promise<boolean>
  Import: (where?: ImportWhereInput) => Promise<boolean>
  Expense: (where?: ExpenseWhereInput) => Promise<boolean>
  Ingredient: (where?: IngredientWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateExpense {
  count: Int!
}

type AggregateImport {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Expense implements Node {
  id: ID!
  begin: DateTime!
  end: DateTime!
  name: String!
  total: Int!
}

"""A connection to a list of items."""
type ExpenseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExpenseEdge]!
  aggregate: AggregateExpense!
}

input ExpenseCreateInput {
  id: ID
  begin: DateTime!
  end: DateTime!
  name: String!
  total: Int!
}

"""An edge in a connection."""
type ExpenseEdge {
  """The item at the end of the edge."""
  node: Expense!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExpenseOrderByInput {
  id_ASC
  id_DESC
  begin_ASC
  begin_DESC
  end_ASC
  end_DESC
  name_ASC
  name_DESC
  total_ASC
  total_DESC
}

type ExpensePreviousValues {
  id: ID!
  begin: DateTime!
  end: DateTime!
  name: String!
  total: Int!
}

type ExpenseSubscriptionPayload {
  mutation: MutationType!
  node: Expense
  updatedFields: [String!]
  previousValues: ExpensePreviousValues
}

input ExpenseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExpenseSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExpenseWhereInput
}

input ExpenseUpdateInput {
  begin: DateTime
  end: DateTime
  name: String
  total: Int
}

input ExpenseUpdateManyMutationInput {
  begin: DateTime
  end: DateTime
  name: String
  total: Int
}

input ExpenseWhereInput {
  """Logical AND on all given filters."""
  AND: [ExpenseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  begin: DateTime

  """All values that are not equal to given value."""
  begin_not: DateTime

  """All values that are contained in given list."""
  begin_in: [DateTime!]

  """All values that are not contained in given list."""
  begin_not_in: [DateTime!]

  """All values less than the given value."""
  begin_lt: DateTime

  """All values less than or equal the given value."""
  begin_lte: DateTime

  """All values greater than the given value."""
  begin_gt: DateTime

  """All values greater than or equal the given value."""
  begin_gte: DateTime
  end: DateTime

  """All values that are not equal to given value."""
  end_not: DateTime

  """All values that are contained in given list."""
  end_in: [DateTime!]

  """All values that are not contained in given list."""
  end_not_in: [DateTime!]

  """All values less than the given value."""
  end_lt: DateTime

  """All values less than or equal the given value."""
  end_lte: DateTime

  """All values greater than the given value."""
  end_gt: DateTime

  """All values greater than or equal the given value."""
  end_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  total: Int

  """All values that are not equal to given value."""
  total_not: Int

  """All values that are contained in given list."""
  total_in: [Int!]

  """All values that are not contained in given list."""
  total_not_in: [Int!]

  """All values less than the given value."""
  total_lt: Int

  """All values less than or equal the given value."""
  total_lte: Int

  """All values greater than the given value."""
  total_gt: Int

  """All values greater than or equal the given value."""
  total_gte: Int
}

input ExpenseWhereUniqueInput {
  id: ID
}

type Import implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  ingredient: Ingredient!
  inStock: Int!
  total: Int!
  amount: Int!
}

"""A connection to a list of items."""
type ImportConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ImportEdge]!
  aggregate: AggregateImport!
}

input ImportCreateInput {
  id: ID
  inStock: Int!
  total: Int!
  amount: Int!
  ingredient: IngredientCreateOneInput!
}

"""An edge in a connection."""
type ImportEdge {
  """The item at the end of the edge."""
  node: Import!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ImportOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  inStock_ASC
  inStock_DESC
  total_ASC
  total_DESC
  amount_ASC
  amount_DESC
}

type ImportPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  inStock: Int!
  total: Int!
  amount: Int!
}

type ImportSubscriptionPayload {
  mutation: MutationType!
  node: Import
  updatedFields: [String!]
  previousValues: ImportPreviousValues
}

input ImportSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ImportSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ImportWhereInput
}

input ImportUpdateInput {
  inStock: Int
  total: Int
  amount: Int
  ingredient: IngredientUpdateOneRequiredInput
}

input ImportUpdateManyMutationInput {
  inStock: Int
  total: Int
  amount: Int
}

input ImportWhereInput {
  """Logical AND on all given filters."""
  AND: [ImportWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  inStock: Int

  """All values that are not equal to given value."""
  inStock_not: Int

  """All values that are contained in given list."""
  inStock_in: [Int!]

  """All values that are not contained in given list."""
  inStock_not_in: [Int!]

  """All values less than the given value."""
  inStock_lt: Int

  """All values less than or equal the given value."""
  inStock_lte: Int

  """All values greater than the given value."""
  inStock_gt: Int

  """All values greater than or equal the given value."""
  inStock_gte: Int
  total: Int

  """All values that are not equal to given value."""
  total_not: Int

  """All values that are contained in given list."""
  total_in: [Int!]

  """All values that are not contained in given list."""
  total_not_in: [Int!]

  """All values less than the given value."""
  total_lt: Int

  """All values less than or equal the given value."""
  total_lte: Int

  """All values greater than the given value."""
  total_gt: Int

  """All values greater than or equal the given value."""
  total_gte: Int
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  ingredient: IngredientWhereInput
}

input ImportWhereUniqueInput {
  id: ID
}

type Ingredient implements Node {
  id: ID!
  name: String!
  unit: String!
}

type IngredientAmount implements Node {
  id: ID!
  ingredient: Ingredient!
  amount: Int!
}

input IngredientAmountCreateInput {
  id: ID
  amount: Int!
  ingredient: IngredientCreateOneInput!
}

input IngredientAmountCreateManyInput {
  create: [IngredientAmountCreateInput!]
}

input IngredientAmountRestrictedWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientAmountRestrictedWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
}

input IngredientAmountScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientAmountScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientAmountScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientAmountScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
}

input IngredientAmountUpdateDataInput {
  amount: Int
  ingredient: IngredientUpdateOneRequiredInput
}

input IngredientAmountUpdateManyDataInput {
  amount: Int
}

input IngredientAmountUpdateManyInput {
  create: [IngredientAmountCreateInput!]
  delete: [IngredientAmountWhereUniqueInput!]
  update: [IngredientAmountUpdateWithWhereUniqueNestedInput!]
  updateMany: [IngredientAmountUpdateManyWithWhereNestedInput!]
  deleteMany: [IngredientAmountScalarWhereInput!]
  upsert: [IngredientAmountUpsertWithWhereUniqueNestedInput!]
}

input IngredientAmountUpdateManyWithWhereNestedInput {
  where: IngredientAmountScalarWhereInput!
  data: IngredientAmountUpdateManyDataInput!
}

input IngredientAmountUpdateWithWhereUniqueNestedInput {
  where: IngredientAmountWhereUniqueInput!
  data: IngredientAmountUpdateDataInput!
}

input IngredientAmountUpsertWithWhereUniqueNestedInput {
  where: IngredientAmountWhereUniqueInput!
  update: IngredientAmountUpdateDataInput!
  create: IngredientAmountCreateInput!
}

input IngredientAmountWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientAmountWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  ingredient: IngredientWhereInput
}

input IngredientAmountWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type IngredientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  id: ID
  name: String!
  unit: String!
}

input IngredientCreateOneInput {
  create: IngredientCreateInput
  connect: IngredientWhereUniqueInput
}

"""An edge in a connection."""
type IngredientEdge {
  """The item at the end of the edge."""
  node: Ingredient!

  """A cursor for use in pagination."""
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  unit_ASC
  unit_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
  unit: String!
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
}

input IngredientUpdateDataInput {
  name: String
  unit: String
}

input IngredientUpdateInput {
  name: String
  unit: String
}

input IngredientUpdateManyMutationInput {
  name: String
  unit: String
}

input IngredientUpdateOneRequiredInput {
  create: IngredientCreateInput
  connect: IngredientWhereUniqueInput
  update: IngredientUpdateDataInput
  upsert: IngredientUpsertNestedInput
}

input IngredientUpsertNestedInput {
  update: IngredientUpdateDataInput!
  create: IngredientCreateInput!
}

input IngredientWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  unit: String

  """All values that are not equal to given value."""
  unit_not: String

  """All values that are contained in given list."""
  unit_in: [String!]

  """All values that are not contained in given list."""
  unit_not_in: [String!]

  """All values less than the given value."""
  unit_lt: String

  """All values less than or equal the given value."""
  unit_lte: String

  """All values greater than the given value."""
  unit_gt: String

  """All values greater than or equal the given value."""
  unit_gte: String

  """All values containing the given string."""
  unit_contains: String

  """All values not containing the given string."""
  unit_not_contains: String

  """All values starting with the given string."""
  unit_starts_with: String

  """All values not starting with the given string."""
  unit_not_starts_with: String

  """All values ending with the given string."""
  unit_ends_with: String

  """All values not ending with the given string."""
  unit_not_ends_with: String
}

input IngredientWhereUniqueInput {
  id: ID
  name: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createOrder(data: OrderCreateInput!): Order!
  createImport(data: ImportCreateInput!): Import!
  createExpense(data: ExpenseCreateInput!): Expense!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  createUser(data: UserCreateInput!): User!
  createProduct(data: ProductCreateInput!): Product!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateImport(data: ImportUpdateInput!, where: ImportWhereUniqueInput!): Import
  updateExpense(data: ExpenseUpdateInput!, where: ExpenseWhereUniqueInput!): Expense
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteImport(where: ImportWhereUniqueInput!): Import
  deleteExpense(where: ExpenseWhereUniqueInput!): Expense
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  deleteUser(where: UserWhereUniqueInput!): User
  deleteProduct(where: ProductWhereUniqueInput!): Product
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertImport(where: ImportWhereUniqueInput!, create: ImportCreateInput!, update: ImportUpdateInput!): Import!
  upsertExpense(where: ExpenseWhereUniqueInput!, create: ExpenseCreateInput!, update: ExpenseUpdateInput!): Expense!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyImports(data: ImportUpdateManyMutationInput!, where: ImportWhereInput): BatchPayload!
  updateManyExpenses(data: ExpenseUpdateManyMutationInput!, where: ExpenseWhereInput): BatchPayload!
  updateManyIngredients(data: IngredientUpdateManyMutationInput!, where: IngredientWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyImports(where: ImportWhereInput): BatchPayload!
  deleteManyExpenses(where: ExpenseWhereInput): BatchPayload!
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Order implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  table: Int!
  products: [ProductAmount!]
  checkout: Boolean!
  total: Int
  user: User!
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  table: Int!
  checkout: Boolean
  total: Int
  products: ProductAmountCreateManyInput
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  table_ASC
  table_DESC
  checkout_ASC
  checkout_DESC
  total_ASC
  total_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  table: Int!
  checkout: Boolean!
  total: Int
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  table: Int
  checkout: Boolean
  total: Int
  products: ProductAmountUpdateManyInput
  user: UserUpdateOneRequiredInput
}

input OrderUpdateManyMutationInput {
  table: Int
  checkout: Boolean
  total: Int
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  table: Int

  """All values that are not equal to given value."""
  table_not: Int

  """All values that are contained in given list."""
  table_in: [Int!]

  """All values that are not contained in given list."""
  table_not_in: [Int!]

  """All values less than the given value."""
  table_lt: Int

  """All values less than or equal the given value."""
  table_lte: Int

  """All values greater than the given value."""
  table_gt: Int

  """All values greater than or equal the given value."""
  table_gte: Int
  checkout: Boolean

  """All values that are not equal to given value."""
  checkout_not: Boolean
  total: Int

  """All values that are not equal to given value."""
  total_not: Int

  """All values that are contained in given list."""
  total_in: [Int!]

  """All values that are not contained in given list."""
  total_not_in: [Int!]

  """All values less than the given value."""
  total_lt: Int

  """All values less than or equal the given value."""
  total_lte: Int

  """All values greater than the given value."""
  total_gt: Int

  """All values greater than or equal the given value."""
  total_gte: Int
  products_some: ProductAmountWhereInput
  products_every: ProductAmountRestrictedWhereInput
  products_none: ProductAmountRestrictedWhereInput
  user: UserWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  name: String!
  unit: String!
  price: Int!
  ingredients: [IngredientAmount!]
}

type ProductAmount implements Node {
  id: ID!
  product: Product!
  amount: Int!
}

input ProductAmountCreateInput {
  id: ID
  amount: Int!
  product: ProductCreateOneInput!
}

input ProductAmountCreateManyInput {
  create: [ProductAmountCreateInput!]
}

input ProductAmountRestrictedWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductAmountRestrictedWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
}

input ProductAmountScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductAmountScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductAmountScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductAmountScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
}

input ProductAmountUpdateDataInput {
  amount: Int
  product: ProductUpdateOneRequiredInput
}

input ProductAmountUpdateManyDataInput {
  amount: Int
}

input ProductAmountUpdateManyInput {
  create: [ProductAmountCreateInput!]
  delete: [ProductAmountWhereUniqueInput!]
  update: [ProductAmountUpdateWithWhereUniqueNestedInput!]
  updateMany: [ProductAmountUpdateManyWithWhereNestedInput!]
  deleteMany: [ProductAmountScalarWhereInput!]
  upsert: [ProductAmountUpsertWithWhereUniqueNestedInput!]
}

input ProductAmountUpdateManyWithWhereNestedInput {
  where: ProductAmountScalarWhereInput!
  data: ProductAmountUpdateManyDataInput!
}

input ProductAmountUpdateWithWhereUniqueNestedInput {
  where: ProductAmountWhereUniqueInput!
  data: ProductAmountUpdateDataInput!
}

input ProductAmountUpsertWithWhereUniqueNestedInput {
  where: ProductAmountWhereUniqueInput!
  update: ProductAmountUpdateDataInput!
  create: ProductAmountCreateInput!
}

input ProductAmountWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductAmountWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  product: ProductWhereInput
}

input ProductAmountWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  unit: String!
  price: Int!
  ingredients: IngredientAmountCreateManyInput
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  unit_ASC
  unit_DESC
  price_ASC
  price_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  unit: String!
  price: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateDataInput {
  name: String
  unit: String
  price: Int
  ingredients: IngredientAmountUpdateManyInput
}

input ProductUpdateInput {
  name: String
  unit: String
  price: Int
  ingredients: IngredientAmountUpdateManyInput
}

input ProductUpdateManyMutationInput {
  name: String
  unit: String
  price: Int
}

input ProductUpdateOneRequiredInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  unit: String

  """All values that are not equal to given value."""
  unit_not: String

  """All values that are contained in given list."""
  unit_in: [String!]

  """All values that are not contained in given list."""
  unit_not_in: [String!]

  """All values less than the given value."""
  unit_lt: String

  """All values less than or equal the given value."""
  unit_lte: String

  """All values greater than the given value."""
  unit_gt: String

  """All values greater than or equal the given value."""
  unit_gte: String

  """All values containing the given string."""
  unit_contains: String

  """All values not containing the given string."""
  unit_not_contains: String

  """All values starting with the given string."""
  unit_starts_with: String

  """All values not starting with the given string."""
  unit_not_starts_with: String

  """All values ending with the given string."""
  unit_ends_with: String

  """All values not ending with the given string."""
  unit_not_ends_with: String
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  ingredients_some: IngredientAmountWhereInput
  ingredients_every: IngredientAmountRestrictedWhereInput
  ingredients_none: IngredientAmountRestrictedWhereInput
}

input ProductWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  imports(where: ImportWhereInput, orderBy: ImportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Import]!
  expenses(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Expense]!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  order(where: OrderWhereUniqueInput!): Order
  import(where: ImportWhereUniqueInput!): Import
  expense(where: ExpenseWhereUniqueInput!): Expense
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  user(where: UserWhereUniqueInput!): User
  product(where: ProductWhereUniqueInput!): Product
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  importsConnection(where: ImportWhereInput, orderBy: ImportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImportConnection!
  expensesConnection(where: ExpenseWhereInput, orderBy: ExpenseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExpenseConnection!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  import(where: ImportSubscriptionWhereInput): ImportSubscriptionPayload
  expense(where: ExpenseSubscriptionWhereInput): ExpenseSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  password: String!
  role: UserRole!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  password: String!
  role: UserRole!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  role: UserRole!
}

enum UserRole {
  MANAGER
  EMPLOYEE
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  username: String
  password: String
  role: UserRole
}

input UserUpdateInput {
  username: String
  password: String
  role: UserRole
}

input UserUpdateManyMutationInput {
  username: String
  password: String
  role: UserRole
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ExpenseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'begin_ASC' |
  'begin_DESC' |
  'end_ASC' |
  'end_DESC' |
  'name_ASC' |
  'name_DESC' |
  'total_ASC' |
  'total_DESC'

export type ImportOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'inStock_ASC' |
  'inStock_DESC' |
  'total_ASC' |
  'total_DESC' |
  'amount_ASC' |
  'amount_DESC'

export type IngredientOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'unit_ASC' |
  'unit_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type OrderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'table_ASC' |
  'table_DESC' |
  'checkout_ASC' |
  'checkout_DESC' |
  'total_ASC' |
  'total_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'unit_ASC' |
  'unit_DESC' |
  'price_ASC' |
  'price_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC'

export type UserRole =   'MANAGER' |
  'EMPLOYEE'

export interface ExpenseCreateInput {
  id?: ID_Input | null
  begin: DateTime
  end: DateTime
  name: String
  total: Int
}

export interface ExpenseSubscriptionWhereInput {
  AND?: ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ExpenseWhereInput | null
}

export interface ExpenseUpdateInput {
  begin?: DateTime | null
  end?: DateTime | null
  name?: String | null
  total?: Int | null
}

export interface ExpenseUpdateManyMutationInput {
  begin?: DateTime | null
  end?: DateTime | null
  name?: String | null
  total?: Int | null
}

export interface ExpenseWhereInput {
  AND?: ExpenseWhereInput[] | ExpenseWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  begin?: DateTime | null
  begin_not?: DateTime | null
  begin_in?: DateTime[] | DateTime | null
  begin_not_in?: DateTime[] | DateTime | null
  begin_lt?: DateTime | null
  begin_lte?: DateTime | null
  begin_gt?: DateTime | null
  begin_gte?: DateTime | null
  end?: DateTime | null
  end_not?: DateTime | null
  end_in?: DateTime[] | DateTime | null
  end_not_in?: DateTime[] | DateTime | null
  end_lt?: DateTime | null
  end_lte?: DateTime | null
  end_gt?: DateTime | null
  end_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  total?: Int | null
  total_not?: Int | null
  total_in?: Int[] | Int | null
  total_not_in?: Int[] | Int | null
  total_lt?: Int | null
  total_lte?: Int | null
  total_gt?: Int | null
  total_gte?: Int | null
}

export interface ExpenseWhereUniqueInput {
  id?: ID_Input | null
}

export interface ImportCreateInput {
  id?: ID_Input | null
  inStock: Int
  total: Int
  amount: Int
  ingredient: IngredientCreateOneInput
}

export interface ImportSubscriptionWhereInput {
  AND?: ImportSubscriptionWhereInput[] | ImportSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ImportWhereInput | null
}

export interface ImportUpdateInput {
  inStock?: Int | null
  total?: Int | null
  amount?: Int | null
  ingredient?: IngredientUpdateOneRequiredInput | null
}

export interface ImportUpdateManyMutationInput {
  inStock?: Int | null
  total?: Int | null
  amount?: Int | null
}

export interface ImportWhereInput {
  AND?: ImportWhereInput[] | ImportWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  inStock?: Int | null
  inStock_not?: Int | null
  inStock_in?: Int[] | Int | null
  inStock_not_in?: Int[] | Int | null
  inStock_lt?: Int | null
  inStock_lte?: Int | null
  inStock_gt?: Int | null
  inStock_gte?: Int | null
  total?: Int | null
  total_not?: Int | null
  total_in?: Int[] | Int | null
  total_not_in?: Int[] | Int | null
  total_lt?: Int | null
  total_lte?: Int | null
  total_gt?: Int | null
  total_gte?: Int | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
  ingredient?: IngredientWhereInput | null
}

export interface ImportWhereUniqueInput {
  id?: ID_Input | null
}

export interface IngredientAmountCreateInput {
  id?: ID_Input | null
  amount: Int
  ingredient: IngredientCreateOneInput
}

export interface IngredientAmountCreateManyInput {
  create?: IngredientAmountCreateInput[] | IngredientAmountCreateInput | null
}

export interface IngredientAmountRestrictedWhereInput {
  AND?: IngredientAmountRestrictedWhereInput[] | IngredientAmountRestrictedWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
}

export interface IngredientAmountScalarWhereInput {
  AND?: IngredientAmountScalarWhereInput[] | IngredientAmountScalarWhereInput | null
  OR?: IngredientAmountScalarWhereInput[] | IngredientAmountScalarWhereInput | null
  NOT?: IngredientAmountScalarWhereInput[] | IngredientAmountScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
}

export interface IngredientAmountUpdateDataInput {
  amount?: Int | null
  ingredient?: IngredientUpdateOneRequiredInput | null
}

export interface IngredientAmountUpdateManyDataInput {
  amount?: Int | null
}

export interface IngredientAmountUpdateManyInput {
  create?: IngredientAmountCreateInput[] | IngredientAmountCreateInput | null
  delete?: IngredientAmountWhereUniqueInput[] | IngredientAmountWhereUniqueInput | null
  update?: IngredientAmountUpdateWithWhereUniqueNestedInput[] | IngredientAmountUpdateWithWhereUniqueNestedInput | null
  updateMany?: IngredientAmountUpdateManyWithWhereNestedInput[] | IngredientAmountUpdateManyWithWhereNestedInput | null
  deleteMany?: IngredientAmountScalarWhereInput[] | IngredientAmountScalarWhereInput | null
  upsert?: IngredientAmountUpsertWithWhereUniqueNestedInput[] | IngredientAmountUpsertWithWhereUniqueNestedInput | null
}

export interface IngredientAmountUpdateManyWithWhereNestedInput {
  where: IngredientAmountScalarWhereInput
  data: IngredientAmountUpdateManyDataInput
}

export interface IngredientAmountUpdateWithWhereUniqueNestedInput {
  where: IngredientAmountWhereUniqueInput
  data: IngredientAmountUpdateDataInput
}

export interface IngredientAmountUpsertWithWhereUniqueNestedInput {
  where: IngredientAmountWhereUniqueInput
  update: IngredientAmountUpdateDataInput
  create: IngredientAmountCreateInput
}

export interface IngredientAmountWhereInput {
  AND?: IngredientAmountWhereInput[] | IngredientAmountWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
  ingredient?: IngredientWhereInput | null
}

export interface IngredientAmountWhereUniqueInput {
  id?: ID_Input | null
}

export interface IngredientCreateInput {
  id?: ID_Input | null
  name: String
  unit: String
}

export interface IngredientCreateOneInput {
  create?: IngredientCreateInput | null
  connect?: IngredientWhereUniqueInput | null
}

export interface IngredientSubscriptionWhereInput {
  AND?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: IngredientWhereInput | null
}

export interface IngredientUpdateDataInput {
  name?: String | null
  unit?: String | null
}

export interface IngredientUpdateInput {
  name?: String | null
  unit?: String | null
}

export interface IngredientUpdateManyMutationInput {
  name?: String | null
  unit?: String | null
}

export interface IngredientUpdateOneRequiredInput {
  create?: IngredientCreateInput | null
  connect?: IngredientWhereUniqueInput | null
  update?: IngredientUpdateDataInput | null
  upsert?: IngredientUpsertNestedInput | null
}

export interface IngredientUpsertNestedInput {
  update: IngredientUpdateDataInput
  create: IngredientCreateInput
}

export interface IngredientWhereInput {
  AND?: IngredientWhereInput[] | IngredientWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  unit?: String | null
  unit_not?: String | null
  unit_in?: String[] | String | null
  unit_not_in?: String[] | String | null
  unit_lt?: String | null
  unit_lte?: String | null
  unit_gt?: String | null
  unit_gte?: String | null
  unit_contains?: String | null
  unit_not_contains?: String | null
  unit_starts_with?: String | null
  unit_not_starts_with?: String | null
  unit_ends_with?: String | null
  unit_not_ends_with?: String | null
}

export interface IngredientWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface OrderCreateInput {
  id?: ID_Input | null
  table: Int
  checkout?: Boolean | null
  total?: Int | null
  products?: ProductAmountCreateManyInput | null
  user: UserCreateOneInput
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: OrderWhereInput | null
}

export interface OrderUpdateInput {
  table?: Int | null
  checkout?: Boolean | null
  total?: Int | null
  products?: ProductAmountUpdateManyInput | null
  user?: UserUpdateOneRequiredInput | null
}

export interface OrderUpdateManyMutationInput {
  table?: Int | null
  checkout?: Boolean | null
  total?: Int | null
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  table?: Int | null
  table_not?: Int | null
  table_in?: Int[] | Int | null
  table_not_in?: Int[] | Int | null
  table_lt?: Int | null
  table_lte?: Int | null
  table_gt?: Int | null
  table_gte?: Int | null
  checkout?: Boolean | null
  checkout_not?: Boolean | null
  total?: Int | null
  total_not?: Int | null
  total_in?: Int[] | Int | null
  total_not_in?: Int[] | Int | null
  total_lt?: Int | null
  total_lte?: Int | null
  total_gt?: Int | null
  total_gte?: Int | null
  products_some?: ProductAmountWhereInput | null
  products_every?: ProductAmountRestrictedWhereInput | null
  products_none?: ProductAmountRestrictedWhereInput | null
  user?: UserWhereInput | null
}

export interface OrderWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProductAmountCreateInput {
  id?: ID_Input | null
  amount: Int
  product: ProductCreateOneInput
}

export interface ProductAmountCreateManyInput {
  create?: ProductAmountCreateInput[] | ProductAmountCreateInput | null
}

export interface ProductAmountRestrictedWhereInput {
  AND?: ProductAmountRestrictedWhereInput[] | ProductAmountRestrictedWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
}

export interface ProductAmountScalarWhereInput {
  AND?: ProductAmountScalarWhereInput[] | ProductAmountScalarWhereInput | null
  OR?: ProductAmountScalarWhereInput[] | ProductAmountScalarWhereInput | null
  NOT?: ProductAmountScalarWhereInput[] | ProductAmountScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
}

export interface ProductAmountUpdateDataInput {
  amount?: Int | null
  product?: ProductUpdateOneRequiredInput | null
}

export interface ProductAmountUpdateManyDataInput {
  amount?: Int | null
}

export interface ProductAmountUpdateManyInput {
  create?: ProductAmountCreateInput[] | ProductAmountCreateInput | null
  delete?: ProductAmountWhereUniqueInput[] | ProductAmountWhereUniqueInput | null
  update?: ProductAmountUpdateWithWhereUniqueNestedInput[] | ProductAmountUpdateWithWhereUniqueNestedInput | null
  updateMany?: ProductAmountUpdateManyWithWhereNestedInput[] | ProductAmountUpdateManyWithWhereNestedInput | null
  deleteMany?: ProductAmountScalarWhereInput[] | ProductAmountScalarWhereInput | null
  upsert?: ProductAmountUpsertWithWhereUniqueNestedInput[] | ProductAmountUpsertWithWhereUniqueNestedInput | null
}

export interface ProductAmountUpdateManyWithWhereNestedInput {
  where: ProductAmountScalarWhereInput
  data: ProductAmountUpdateManyDataInput
}

export interface ProductAmountUpdateWithWhereUniqueNestedInput {
  where: ProductAmountWhereUniqueInput
  data: ProductAmountUpdateDataInput
}

export interface ProductAmountUpsertWithWhereUniqueNestedInput {
  where: ProductAmountWhereUniqueInput
  update: ProductAmountUpdateDataInput
  create: ProductAmountCreateInput
}

export interface ProductAmountWhereInput {
  AND?: ProductAmountWhereInput[] | ProductAmountWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
  product?: ProductWhereInput | null
}

export interface ProductAmountWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProductCreateInput {
  id?: ID_Input | null
  name: String
  unit: String
  price: Int
  ingredients?: IngredientAmountCreateManyInput | null
}

export interface ProductCreateOneInput {
  create?: ProductCreateInput | null
  connect?: ProductWhereUniqueInput | null
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProductWhereInput | null
}

export interface ProductUpdateDataInput {
  name?: String | null
  unit?: String | null
  price?: Int | null
  ingredients?: IngredientAmountUpdateManyInput | null
}

export interface ProductUpdateInput {
  name?: String | null
  unit?: String | null
  price?: Int | null
  ingredients?: IngredientAmountUpdateManyInput | null
}

export interface ProductUpdateManyMutationInput {
  name?: String | null
  unit?: String | null
  price?: Int | null
}

export interface ProductUpdateOneRequiredInput {
  create?: ProductCreateInput | null
  connect?: ProductWhereUniqueInput | null
  update?: ProductUpdateDataInput | null
  upsert?: ProductUpsertNestedInput | null
}

export interface ProductUpsertNestedInput {
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  unit?: String | null
  unit_not?: String | null
  unit_in?: String[] | String | null
  unit_not_in?: String[] | String | null
  unit_lt?: String | null
  unit_lte?: String | null
  unit_gt?: String | null
  unit_gte?: String | null
  unit_contains?: String | null
  unit_not_contains?: String | null
  unit_starts_with?: String | null
  unit_not_starts_with?: String | null
  unit_ends_with?: String | null
  unit_not_ends_with?: String | null
  price?: Int | null
  price_not?: Int | null
  price_in?: Int[] | Int | null
  price_not_in?: Int[] | Int | null
  price_lt?: Int | null
  price_lte?: Int | null
  price_gt?: Int | null
  price_gte?: Int | null
  ingredients_some?: IngredientAmountWhereInput | null
  ingredients_every?: IngredientAmountRestrictedWhereInput | null
  ingredients_none?: IngredientAmountRestrictedWhereInput | null
}

export interface ProductWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  username: String
  password: String
  role: UserRole
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  username?: String | null
  password?: String | null
  role?: UserRole | null
}

export interface UserUpdateInput {
  username?: String | null
  password?: String | null
  role?: UserRole | null
}

export interface UserUpdateManyMutationInput {
  username?: String | null
  password?: String | null
  role?: UserRole | null
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  role?: UserRole | null
  role_not?: UserRole | null
  role_in?: UserRole[] | UserRole | null
  role_not_in?: UserRole[] | UserRole | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  username?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateExpense {
  count: Int
}

export interface AggregateImport {
  count: Int
}

export interface AggregateIngredient {
  count: Int
}

export interface AggregateOrder {
  count: Int
}

export interface AggregateProduct {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Expense extends Node {
  id: ID_Output
  begin: DateTime
  end: DateTime
  name: String
  total: Int
}

/*
 * A connection to a list of items.

 */
export interface ExpenseConnection {
  pageInfo: PageInfo
  edges: Array<ExpenseEdge | null>
  aggregate: AggregateExpense
}

/*
 * An edge in a connection.

 */
export interface ExpenseEdge {
  node: Expense
  cursor: String
}

export interface ExpensePreviousValues {
  id: ID_Output
  begin: DateTime
  end: DateTime
  name: String
  total: Int
}

export interface ExpenseSubscriptionPayload {
  mutation: MutationType
  node?: Expense | null
  updatedFields?: Array<String> | null
  previousValues?: ExpensePreviousValues | null
}

export interface Import extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  ingredient: Ingredient
  inStock: Int
  total: Int
  amount: Int
}

/*
 * A connection to a list of items.

 */
export interface ImportConnection {
  pageInfo: PageInfo
  edges: Array<ImportEdge | null>
  aggregate: AggregateImport
}

/*
 * An edge in a connection.

 */
export interface ImportEdge {
  node: Import
  cursor: String
}

export interface ImportPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  inStock: Int
  total: Int
  amount: Int
}

export interface ImportSubscriptionPayload {
  mutation: MutationType
  node?: Import | null
  updatedFields?: Array<String> | null
  previousValues?: ImportPreviousValues | null
}

export interface Ingredient extends Node {
  id: ID_Output
  name: String
  unit: String
}

export interface IngredientAmount extends Node {
  id: ID_Output
  ingredient: Ingredient
  amount: Int
}

/*
 * A connection to a list of items.

 */
export interface IngredientConnection {
  pageInfo: PageInfo
  edges: Array<IngredientEdge | null>
  aggregate: AggregateIngredient
}

/*
 * An edge in a connection.

 */
export interface IngredientEdge {
  node: Ingredient
  cursor: String
}

export interface IngredientPreviousValues {
  id: ID_Output
  name: String
  unit: String
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType
  node?: Ingredient | null
  updatedFields?: Array<String> | null
  previousValues?: IngredientPreviousValues | null
}

export interface Order extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  table: Int
  products?: Array<ProductAmount> | null
  checkout: Boolean
  total?: Int | null
  user: User
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: Array<OrderEdge | null>
  aggregate: AggregateOrder
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface OrderPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  table: Int
  checkout: Boolean
  total?: Int | null
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order | null
  updatedFields?: Array<String> | null
  previousValues?: OrderPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Product extends Node {
  id: ID_Output
  name: String
  unit: String
  price: Int
  ingredients?: Array<IngredientAmount> | null
}

export interface ProductAmount extends Node {
  id: ID_Output
  product: Product
  amount: Int
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: Array<ProductEdge | null>
  aggregate: AggregateProduct
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface ProductPreviousValues {
  id: ID_Output
  name: String
  unit: String
  price: Int
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product | null
  updatedFields?: Array<String> | null
  previousValues?: ProductPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  username: String
  password: String
  role: UserRole
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  password: String
  role: UserRole
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string