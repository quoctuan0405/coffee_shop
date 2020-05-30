export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  /** 
 * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 */
  Long: any,
};

export type AggregateExpense = {
   __typename?: 'AggregateExpense',
  count: Scalars['Int'],
};

export type AggregateImport = {
   __typename?: 'AggregateImport',
  count: Scalars['Int'],
};

export type AggregateIngredient = {
   __typename?: 'AggregateIngredient',
  count: Scalars['Int'],
};

export type AggregateOrder = {
   __typename?: 'AggregateOrder',
  count: Scalars['Int'],
};

export type AggregateProduct = {
   __typename?: 'AggregateProduct',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'],
};


export type Expense = Node & {
   __typename?: 'Expense',
  id: Scalars['ID'],
  begin: Scalars['DateTime'],
  end: Scalars['DateTime'],
  name: Scalars['String'],
  total: Scalars['Int'],
};

/** A connection to a list of items. */
export type ExpenseConnection = {
   __typename?: 'ExpenseConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ExpenseEdge>>,
  aggregate: AggregateExpense,
};

export type ExpenseCreateInput = {
  id?: Maybe<Scalars['ID']>,
  begin: Scalars['DateTime'],
  end: Scalars['DateTime'],
  name: Scalars['String'],
  total: Scalars['Int'],
};

/** An edge in a connection. */
export type ExpenseEdge = {
   __typename?: 'ExpenseEdge',
  /** The item at the end of the edge. */
  node: Expense,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
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
  id: Scalars['ID'],
  begin: Scalars['DateTime'],
  end: Scalars['DateTime'],
  name: Scalars['String'],
  total: Scalars['Int'],
};

export type ExpenseSubscriptionPayload = {
   __typename?: 'ExpenseSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Expense>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ExpensePreviousValues>,
};

export type ExpenseSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExpenseSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ExpenseWhereInput>,
};

export type ExpenseUpdateInput = {
  begin?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

export type ExpenseUpdateManyMutationInput = {
  begin?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
};

export type ExpenseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExpenseWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  begin?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  begin_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  begin_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  begin_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  begin_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  begin_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  begin_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  begin_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>,
};

export type ExpenseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Import = Node & {
   __typename?: 'Import',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  ingredient: Ingredient,
  inStock: Scalars['Int'],
  total: Scalars['Int'],
  amount: Scalars['Int'],
};

/** A connection to a list of items. */
export type ImportConnection = {
   __typename?: 'ImportConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ImportEdge>>,
  aggregate: AggregateImport,
};

export type ImportCreateInput = {
  id?: Maybe<Scalars['ID']>,
  inStock: Scalars['Int'],
  total: Scalars['Int'],
  amount: Scalars['Int'],
  ingredient: IngredientCreateOneInput,
};

/** An edge in a connection. */
export type ImportEdge = {
   __typename?: 'ImportEdge',
  /** The item at the end of the edge. */
  node: Import,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
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
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  inStock: Scalars['Int'],
  total: Scalars['Int'],
  amount: Scalars['Int'],
};

export type ImportSubscriptionPayload = {
   __typename?: 'ImportSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Import>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ImportPreviousValues>,
};

export type ImportSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImportSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ImportWhereInput>,
};

export type ImportUpdateInput = {
  inStock?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  amount?: Maybe<Scalars['Int']>,
  ingredient?: Maybe<IngredientUpdateOneRequiredInput>,
};

export type ImportUpdateManyMutationInput = {
  inStock?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  amount?: Maybe<Scalars['Int']>,
};

export type ImportWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImportWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  inStock?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  inStock_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  inStock_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  inStock_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  inStock_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  inStock_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  inStock_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  inStock_gte?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
  ingredient?: Maybe<IngredientWhereInput>,
};

export type ImportWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Ingredient = Node & {
   __typename?: 'Ingredient',
  id: Scalars['ID'],
  name: Scalars['String'],
  unit: Scalars['String'],
};

export type IngredientAmount = Node & {
   __typename?: 'IngredientAmount',
  id: Scalars['ID'],
  ingredient: Ingredient,
  amount: Scalars['Int'],
};

export type IngredientAmountCreateInput = {
  id?: Maybe<Scalars['ID']>,
  amount: Scalars['Int'],
  ingredient: IngredientCreateOneInput,
};

export type IngredientAmountCreateManyInput = {
  create?: Maybe<Array<IngredientAmountCreateInput>>,
};

export type IngredientAmountRestrictedWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IngredientAmountRestrictedWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
};

export type IngredientAmountScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IngredientAmountScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<IngredientAmountScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<IngredientAmountScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
};

export type IngredientAmountUpdateDataInput = {
  amount?: Maybe<Scalars['Int']>,
  ingredient?: Maybe<IngredientUpdateOneRequiredInput>,
};

export type IngredientAmountUpdateManyDataInput = {
  amount?: Maybe<Scalars['Int']>,
};

export type IngredientAmountUpdateManyInput = {
  create?: Maybe<Array<IngredientAmountCreateInput>>,
  delete?: Maybe<Array<IngredientAmountWhereUniqueInput>>,
  update?: Maybe<Array<IngredientAmountUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<IngredientAmountUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<IngredientAmountScalarWhereInput>>,
  upsert?: Maybe<Array<IngredientAmountUpsertWithWhereUniqueNestedInput>>,
};

export type IngredientAmountUpdateManyWithWhereNestedInput = {
  where: IngredientAmountScalarWhereInput,
  data: IngredientAmountUpdateManyDataInput,
};

export type IngredientAmountUpdateWithWhereUniqueNestedInput = {
  where: IngredientAmountWhereUniqueInput,
  data: IngredientAmountUpdateDataInput,
};

export type IngredientAmountUpsertWithWhereUniqueNestedInput = {
  where: IngredientAmountWhereUniqueInput,
  update: IngredientAmountUpdateDataInput,
  create: IngredientAmountCreateInput,
};

export type IngredientAmountWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IngredientAmountWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
  ingredient?: Maybe<IngredientWhereInput>,
};

export type IngredientAmountWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** A connection to a list of items. */
export type IngredientConnection = {
   __typename?: 'IngredientConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<IngredientEdge>>,
  aggregate: AggregateIngredient,
};

export type IngredientCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  unit: Scalars['String'],
};

export type IngredientCreateOneInput = {
  create?: Maybe<IngredientCreateInput>,
  connect?: Maybe<IngredientWhereUniqueInput>,
};

/** An edge in a connection. */
export type IngredientEdge = {
   __typename?: 'IngredientEdge',
  /** The item at the end of the edge. */
  node: Ingredient,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
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

export type IngredientSubscriptionPayload = {
   __typename?: 'IngredientSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Ingredient>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<IngredientPreviousValues>,
};

export type IngredientSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IngredientSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<IngredientWhereInput>,
};

export type IngredientUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
};

export type IngredientUpdateInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
};

export type IngredientUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
};

export type IngredientUpdateOneRequiredInput = {
  create?: Maybe<IngredientCreateInput>,
  connect?: Maybe<IngredientWhereUniqueInput>,
  update?: Maybe<IngredientUpdateDataInput>,
  upsert?: Maybe<IngredientUpsertNestedInput>,
};

export type IngredientUpsertNestedInput = {
  update: IngredientUpdateDataInput,
  create: IngredientCreateInput,
};

export type IngredientWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<IngredientWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  unit_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  unit_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  unit_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  unit_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  unit_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  unit_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  unit_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  unit_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  unit_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  unit_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  unit_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  unit_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  unit_not_ends_with?: Maybe<Scalars['String']>,
};

export type IngredientWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};


export type Mutation = {
   __typename?: 'Mutation',
  createOrder: Order,
  createImport: Import,
  createExpense: Expense,
  createIngredient: Ingredient,
  createUser: User,
  createProduct: Product,
  updateOrder?: Maybe<Order>,
  updateImport?: Maybe<Import>,
  updateExpense?: Maybe<Expense>,
  updateIngredient?: Maybe<Ingredient>,
  updateUser?: Maybe<User>,
  updateProduct?: Maybe<Product>,
  deleteOrder?: Maybe<Order>,
  deleteImport?: Maybe<Import>,
  deleteExpense?: Maybe<Expense>,
  deleteIngredient?: Maybe<Ingredient>,
  deleteUser?: Maybe<User>,
  deleteProduct?: Maybe<Product>,
  upsertOrder: Order,
  upsertImport: Import,
  upsertExpense: Expense,
  upsertIngredient: Ingredient,
  upsertUser: User,
  upsertProduct: Product,
  updateManyOrders: BatchPayload,
  updateManyImports: BatchPayload,
  updateManyExpenses: BatchPayload,
  updateManyIngredients: BatchPayload,
  updateManyUsers: BatchPayload,
  updateManyProducts: BatchPayload,
  deleteManyOrders: BatchPayload,
  deleteManyImports: BatchPayload,
  deleteManyExpenses: BatchPayload,
  deleteManyIngredients: BatchPayload,
  deleteManyUsers: BatchPayload,
  deleteManyProducts: BatchPayload,
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput
};


export type MutationCreateImportArgs = {
  data: ImportCreateInput
};


export type MutationCreateExpenseArgs = {
  data: ExpenseCreateInput
};


export type MutationCreateIngredientArgs = {
  data: IngredientCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput,
  where: OrderWhereUniqueInput
};


export type MutationUpdateImportArgs = {
  data: ImportUpdateInput,
  where: ImportWhereUniqueInput
};


export type MutationUpdateExpenseArgs = {
  data: ExpenseUpdateInput,
  where: ExpenseWhereUniqueInput
};


export type MutationUpdateIngredientArgs = {
  data: IngredientUpdateInput,
  where: IngredientWhereUniqueInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput,
  where: ProductWhereUniqueInput
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput
};


export type MutationDeleteImportArgs = {
  where: ImportWhereUniqueInput
};


export type MutationDeleteExpenseArgs = {
  where: ExpenseWhereUniqueInput
};


export type MutationDeleteIngredientArgs = {
  where: IngredientWhereUniqueInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput
};


export type MutationUpsertOrderArgs = {
  where: OrderWhereUniqueInput,
  create: OrderCreateInput,
  update: OrderUpdateInput
};


export type MutationUpsertImportArgs = {
  where: ImportWhereUniqueInput,
  create: ImportCreateInput,
  update: ImportUpdateInput
};


export type MutationUpsertExpenseArgs = {
  where: ExpenseWhereUniqueInput,
  create: ExpenseCreateInput,
  update: ExpenseUpdateInput
};


export type MutationUpsertIngredientArgs = {
  where: IngredientWhereUniqueInput,
  create: IngredientCreateInput,
  update: IngredientUpdateInput
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationUpsertProductArgs = {
  where: ProductWhereUniqueInput,
  create: ProductCreateInput,
  update: ProductUpdateInput
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyMutationInput,
  where?: Maybe<OrderWhereInput>
};


export type MutationUpdateManyImportsArgs = {
  data: ImportUpdateManyMutationInput,
  where?: Maybe<ImportWhereInput>
};


export type MutationUpdateManyExpensesArgs = {
  data: ExpenseUpdateManyMutationInput,
  where?: Maybe<ExpenseWhereInput>
};


export type MutationUpdateManyIngredientsArgs = {
  data: IngredientUpdateManyMutationInput,
  where?: Maybe<IngredientWhereInput>
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyMutationInput,
  where?: Maybe<ProductWhereInput>
};


export type MutationDeleteManyOrdersArgs = {
  where?: Maybe<OrderWhereInput>
};


export type MutationDeleteManyImportsArgs = {
  where?: Maybe<ImportWhereInput>
};


export type MutationDeleteManyExpensesArgs = {
  where?: Maybe<ExpenseWhereInput>
};


export type MutationDeleteManyIngredientsArgs = {
  where?: Maybe<IngredientWhereInput>
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteManyProductsArgs = {
  where?: Maybe<ProductWhereInput>
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

export type Order = Node & {
   __typename?: 'Order',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  table: Scalars['Int'],
  products?: Maybe<Array<ProductAmount>>,
  checkout: Scalars['Boolean'],
  total?: Maybe<Scalars['Int']>,
  user: User,
};

/** A connection to a list of items. */
export type OrderConnection = {
   __typename?: 'OrderConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<OrderEdge>>,
  aggregate: AggregateOrder,
};

export type OrderCreateInput = {
  id?: Maybe<Scalars['ID']>,
  table: Scalars['Int'],
  checkout?: Maybe<Scalars['Boolean']>,
  total?: Maybe<Scalars['Int']>,
  products?: Maybe<ProductAmountCreateManyInput>,
  user: UserCreateOneInput,
};

/** An edge in a connection. */
export type OrderEdge = {
   __typename?: 'OrderEdge',
  /** The item at the end of the edge. */
  node: Order,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
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
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  table: Scalars['Int'],
  checkout: Scalars['Boolean'],
  total?: Maybe<Scalars['Int']>,
};

export type OrderSubscriptionPayload = {
   __typename?: 'OrderSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Order>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<OrderPreviousValues>,
};

export type OrderSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<OrderWhereInput>,
};

export type OrderUpdateInput = {
  table?: Maybe<Scalars['Int']>,
  checkout?: Maybe<Scalars['Boolean']>,
  total?: Maybe<Scalars['Int']>,
  products?: Maybe<ProductAmountUpdateManyInput>,
  user?: Maybe<UserUpdateOneRequiredInput>,
};

export type OrderUpdateManyMutationInput = {
  table?: Maybe<Scalars['Int']>,
  checkout?: Maybe<Scalars['Boolean']>,
  total?: Maybe<Scalars['Int']>,
};

export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<OrderWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  table?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  table_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  table_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  table_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  table_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  table_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  table_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  table_gte?: Maybe<Scalars['Int']>,
  checkout?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  checkout_not?: Maybe<Scalars['Boolean']>,
  total?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  total_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  total_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  total_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  total_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  total_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  total_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  total_gte?: Maybe<Scalars['Int']>,
  products_some?: Maybe<ProductAmountWhereInput>,
  products_every?: Maybe<ProductAmountRestrictedWhereInput>,
  products_none?: Maybe<ProductAmountRestrictedWhereInput>,
  user?: Maybe<UserWhereInput>,
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type Product = Node & {
   __typename?: 'Product',
  id: Scalars['ID'],
  name: Scalars['String'],
  unit: Scalars['String'],
  price: Scalars['Int'],
  ingredients?: Maybe<Array<IngredientAmount>>,
};

export type ProductAmount = Node & {
   __typename?: 'ProductAmount',
  id: Scalars['ID'],
  product: Product,
  amount: Scalars['Int'],
};

export type ProductAmountCreateInput = {
  id?: Maybe<Scalars['ID']>,
  amount: Scalars['Int'],
  product: ProductCreateOneInput,
};

export type ProductAmountCreateManyInput = {
  create?: Maybe<Array<ProductAmountCreateInput>>,
};

export type ProductAmountRestrictedWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductAmountRestrictedWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
};

export type ProductAmountScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductAmountScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductAmountScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductAmountScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
};

export type ProductAmountUpdateDataInput = {
  amount?: Maybe<Scalars['Int']>,
  product?: Maybe<ProductUpdateOneRequiredInput>,
};

export type ProductAmountUpdateManyDataInput = {
  amount?: Maybe<Scalars['Int']>,
};

export type ProductAmountUpdateManyInput = {
  create?: Maybe<Array<ProductAmountCreateInput>>,
  delete?: Maybe<Array<ProductAmountWhereUniqueInput>>,
  update?: Maybe<Array<ProductAmountUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<ProductAmountUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ProductAmountScalarWhereInput>>,
  upsert?: Maybe<Array<ProductAmountUpsertWithWhereUniqueNestedInput>>,
};

export type ProductAmountUpdateManyWithWhereNestedInput = {
  where: ProductAmountScalarWhereInput,
  data: ProductAmountUpdateManyDataInput,
};

export type ProductAmountUpdateWithWhereUniqueNestedInput = {
  where: ProductAmountWhereUniqueInput,
  data: ProductAmountUpdateDataInput,
};

export type ProductAmountUpsertWithWhereUniqueNestedInput = {
  where: ProductAmountWhereUniqueInput,
  update: ProductAmountUpdateDataInput,
  create: ProductAmountCreateInput,
};

export type ProductAmountWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductAmountWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Int']>,
  product?: Maybe<ProductWhereInput>,
};

export type ProductAmountWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** A connection to a list of items. */
export type ProductConnection = {
   __typename?: 'ProductConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ProductEdge>>,
  aggregate: AggregateProduct,
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  unit: Scalars['String'],
  price: Scalars['Int'],
  ingredients?: Maybe<IngredientAmountCreateManyInput>,
};

export type ProductCreateOneInput = {
  create?: Maybe<ProductCreateInput>,
  connect?: Maybe<ProductWhereUniqueInput>,
};

/** An edge in a connection. */
export type ProductEdge = {
   __typename?: 'ProductEdge',
  /** The item at the end of the edge. */
  node: Product,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
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
  unit: Scalars['String'],
  price: Scalars['Int'],
};

export type ProductSubscriptionPayload = {
   __typename?: 'ProductSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Product>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ProductPreviousValues>,
};

export type ProductSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ProductWhereInput>,
};

export type ProductUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  ingredients?: Maybe<IngredientAmountUpdateManyInput>,
};

export type ProductUpdateInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  ingredients?: Maybe<IngredientAmountUpdateManyInput>,
};

export type ProductUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
};

export type ProductUpdateOneRequiredInput = {
  create?: Maybe<ProductCreateInput>,
  connect?: Maybe<ProductWhereUniqueInput>,
  update?: Maybe<ProductUpdateDataInput>,
  upsert?: Maybe<ProductUpsertNestedInput>,
};

export type ProductUpsertNestedInput = {
  update: ProductUpdateDataInput,
  create: ProductCreateInput,
};

export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  unit_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  unit_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  unit_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  unit_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  unit_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  unit_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  unit_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  unit_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  unit_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  unit_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  unit_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  unit_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  unit_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Int']>,
  ingredients_some?: Maybe<IngredientAmountWhereInput>,
  ingredients_every?: Maybe<IngredientAmountRestrictedWhereInput>,
  ingredients_none?: Maybe<IngredientAmountRestrictedWhereInput>,
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  orders: Array<Maybe<Order>>,
  imports: Array<Maybe<Import>>,
  expenses: Array<Maybe<Expense>>,
  ingredients: Array<Maybe<Ingredient>>,
  users: Array<Maybe<User>>,
  products: Array<Maybe<Product>>,
  order?: Maybe<Order>,
  import?: Maybe<Import>,
  expense?: Maybe<Expense>,
  ingredient?: Maybe<Ingredient>,
  user?: Maybe<User>,
  product?: Maybe<Product>,
  ordersConnection: OrderConnection,
  importsConnection: ImportConnection,
  expensesConnection: ExpenseConnection,
  ingredientsConnection: IngredientConnection,
  usersConnection: UserConnection,
  productsConnection: ProductConnection,
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryImportsArgs = {
  where?: Maybe<ImportWhereInput>,
  orderBy?: Maybe<ImportOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryExpensesArgs = {
  where?: Maybe<ExpenseWhereInput>,
  orderBy?: Maybe<ExpenseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryIngredientsArgs = {
  where?: Maybe<IngredientWhereInput>,
  orderBy?: Maybe<IngredientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput
};


export type QueryImportArgs = {
  where: ImportWhereUniqueInput
};


export type QueryExpenseArgs = {
  where: ExpenseWhereUniqueInput
};


export type QueryIngredientArgs = {
  where: IngredientWhereUniqueInput
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput
};


export type QueryOrdersConnectionArgs = {
  where?: Maybe<OrderWhereInput>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryImportsConnectionArgs = {
  where?: Maybe<ImportWhereInput>,
  orderBy?: Maybe<ImportOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryExpensesConnectionArgs = {
  where?: Maybe<ExpenseWhereInput>,
  orderBy?: Maybe<ExpenseOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryIngredientsConnectionArgs = {
  where?: Maybe<IngredientWhereInput>,
  orderBy?: Maybe<IngredientOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProductsConnectionArgs = {
  where?: Maybe<ProductWhereInput>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  order?: Maybe<OrderSubscriptionPayload>,
  import?: Maybe<ImportSubscriptionPayload>,
  expense?: Maybe<ExpenseSubscriptionPayload>,
  ingredient?: Maybe<IngredientSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
  product?: Maybe<ProductSubscriptionPayload>,
};


export type SubscriptionOrderArgs = {
  where?: Maybe<OrderSubscriptionWhereInput>
};


export type SubscriptionImportArgs = {
  where?: Maybe<ImportSubscriptionWhereInput>
};


export type SubscriptionExpenseArgs = {
  where?: Maybe<ExpenseSubscriptionWhereInput>
};


export type SubscriptionIngredientArgs = {
  where?: Maybe<IngredientSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};


export type SubscriptionProductArgs = {
  where?: Maybe<ProductSubscriptionWhereInput>
};

export type User = Node & {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
};

/** A connection to a list of items. */
export type UserConnection = {
   __typename?: 'UserConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  username: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

/** An edge in a connection. */
export type UserEdge = {
   __typename?: 'UserEdge',
  /** The item at the end of the edge. */
  node: User,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
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

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  username: Scalars['String'],
  password: Scalars['String'],
  role: UserRole,
};

export enum UserRole {
  Manager = 'MANAGER',
  Employee = 'EMPLOYEE'
}

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
};

export type UserUpdateDataInput = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
};

export type UserUpdateInput = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
};

export type UserUpdateManyMutationInput = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  username_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  username_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  username_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  username_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  username_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  username_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  username_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  username_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  username_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRole>,
  /** All values that are contained in given list. */
  role_in?: Maybe<Array<UserRole>>,
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<Array<UserRole>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
};
