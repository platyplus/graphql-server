import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hosts: <T = Host[]>(args: { where?: HostWhereInput, orderBy?: HostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    host: <T = Host | null>(args: { where: HostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hostsConnection: <T = HostConnection>(args: { where?: HostWhereInput, orderBy?: HostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHost: <T = Host>(args: { data: HostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateHost: <T = Host | null>(args: { data: HostUpdateInput, where: HostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteHost: <T = Host | null>(args: { where: HostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHost: <T = Host>(args: { where: HostWhereUniqueInput, create: HostCreateInput, update: HostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHosts: <T = BatchPayload>(args: { data: HostUpdateInput, where?: HostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHosts: <T = BatchPayload>(args: { where?: HostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    host: <T = HostSubscriptionPayload | null>(args: { where?: HostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Host: (where?: HostWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateHost {
  count: Int!
}

type AggregatePost {
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

type Host implements Node {
  id: ID!
  hostName: String!
  owner: User!
  publicKey: String
  timeZone: String!
  tunnelPort: Int
}

"""A connection to a list of items."""
type HostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HostEdge]!
  aggregate: AggregateHost!
}

input HostCreateInput {
  hostName: String!
  publicKey: String
  timeZone: String
  tunnelPort: Int
  owner: UserCreateOneWithoutHostInput!
}

input HostCreateOneWithoutOwnerInput {
  create: HostCreateWithoutOwnerInput
  connect: HostWhereUniqueInput
}

input HostCreateWithoutOwnerInput {
  hostName: String!
  publicKey: String
  timeZone: String
  tunnelPort: Int
}

"""An edge in a connection."""
type HostEdge {
  """The item at the end of the edge."""
  node: Host!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HostOrderByInput {
  id_ASC
  id_DESC
  hostName_ASC
  hostName_DESC
  publicKey_ASC
  publicKey_DESC
  timeZone_ASC
  timeZone_DESC
  tunnelPort_ASC
  tunnelPort_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type HostPreviousValues {
  id: ID!
  hostName: String!
  publicKey: String
  timeZone: String!
  tunnelPort: Int
}

type HostSubscriptionPayload {
  mutation: MutationType!
  node: Host
  updatedFields: [String!]
  previousValues: HostPreviousValues
}

input HostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
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
  node: HostWhereInput
}

input HostUpdateInput {
  hostName: String
  publicKey: String
  timeZone: String
  tunnelPort: Int
  owner: UserUpdateOneRequiredWithoutHostInput
}

input HostUpdateOneWithoutOwnerInput {
  create: HostCreateWithoutOwnerInput
  connect: HostWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HostUpdateWithoutOwnerDataInput
  upsert: HostUpsertWithoutOwnerInput
}

input HostUpdateWithoutOwnerDataInput {
  hostName: String
  publicKey: String
  timeZone: String
  tunnelPort: Int
}

input HostUpsertWithoutOwnerInput {
  update: HostUpdateWithoutOwnerDataInput!
  create: HostCreateWithoutOwnerInput!
}

input HostWhereInput {
  """Logical AND on all given filters."""
  AND: [HostWhereInput!]

  """Logical OR on all given filters."""
  OR: [HostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HostWhereInput!]
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
  hostName: String

  """All values that are not equal to given value."""
  hostName_not: String

  """All values that are contained in given list."""
  hostName_in: [String!]

  """All values that are not contained in given list."""
  hostName_not_in: [String!]

  """All values less than the given value."""
  hostName_lt: String

  """All values less than or equal the given value."""
  hostName_lte: String

  """All values greater than the given value."""
  hostName_gt: String

  """All values greater than or equal the given value."""
  hostName_gte: String

  """All values containing the given string."""
  hostName_contains: String

  """All values not containing the given string."""
  hostName_not_contains: String

  """All values starting with the given string."""
  hostName_starts_with: String

  """All values not starting with the given string."""
  hostName_not_starts_with: String

  """All values ending with the given string."""
  hostName_ends_with: String

  """All values not ending with the given string."""
  hostName_not_ends_with: String
  publicKey: String

  """All values that are not equal to given value."""
  publicKey_not: String

  """All values that are contained in given list."""
  publicKey_in: [String!]

  """All values that are not contained in given list."""
  publicKey_not_in: [String!]

  """All values less than the given value."""
  publicKey_lt: String

  """All values less than or equal the given value."""
  publicKey_lte: String

  """All values greater than the given value."""
  publicKey_gt: String

  """All values greater than or equal the given value."""
  publicKey_gte: String

  """All values containing the given string."""
  publicKey_contains: String

  """All values not containing the given string."""
  publicKey_not_contains: String

  """All values starting with the given string."""
  publicKey_starts_with: String

  """All values not starting with the given string."""
  publicKey_not_starts_with: String

  """All values ending with the given string."""
  publicKey_ends_with: String

  """All values not ending with the given string."""
  publicKey_not_ends_with: String
  timeZone: String

  """All values that are not equal to given value."""
  timeZone_not: String

  """All values that are contained in given list."""
  timeZone_in: [String!]

  """All values that are not contained in given list."""
  timeZone_not_in: [String!]

  """All values less than the given value."""
  timeZone_lt: String

  """All values less than or equal the given value."""
  timeZone_lte: String

  """All values greater than the given value."""
  timeZone_gt: String

  """All values greater than or equal the given value."""
  timeZone_gte: String

  """All values containing the given string."""
  timeZone_contains: String

  """All values not containing the given string."""
  timeZone_not_contains: String

  """All values starting with the given string."""
  timeZone_starts_with: String

  """All values not starting with the given string."""
  timeZone_not_starts_with: String

  """All values ending with the given string."""
  timeZone_ends_with: String

  """All values not ending with the given string."""
  timeZone_not_ends_with: String
  tunnelPort: Int

  """All values that are not equal to given value."""
  tunnelPort_not: Int

  """All values that are contained in given list."""
  tunnelPort_in: [Int!]

  """All values that are not contained in given list."""
  tunnelPort_not_in: [Int!]

  """All values less than the given value."""
  tunnelPort_lt: Int

  """All values less than or equal the given value."""
  tunnelPort_lte: Int

  """All values greater than the given value."""
  tunnelPort_gt: Int

  """All values greater than or equal the given value."""
  tunnelPort_gte: Int
  owner: UserWhereInput
}

input HostWhereUniqueInput {
  id: ID
  hostName: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createHost(data: HostCreateInput!): Host!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateHost(data: HostUpdateInput!, where: HostWhereUniqueInput!): Host
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteHost(where: HostWhereUniqueInput!): Host
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertHost(where: HostWhereUniqueInput!, create: HostCreateInput!, update: HostUpdateInput!): Host!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyHosts(data: HostUpdateInput!, where: HostWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyHosts(where: HostWhereInput): BatchPayload!
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

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author: User!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
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
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
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
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  hosts(where: HostWhereInput, orderBy: HostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Host]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  host(where: HostWhereUniqueInput!): Host
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  hostsConnection(where: HostWhereInput, orderBy: HostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HostConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  ADMIN
  USER
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  host(where: HostSubscriptionWhereInput): HostSubscriptionPayload
}

type User implements Node {
  id: ID!
  login: String!
  name: String!
  password: String!
  role: Role
  host: Host
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
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
  login: String!
  name: String!
  password: String!
  role: Role
  host: HostCreateOneWithoutOwnerInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutHostInput {
  create: UserCreateWithoutHostInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutHostInput {
  login: String!
  name: String!
  password: String!
  role: Role
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  login: String!
  name: String!
  password: String!
  role: Role
  host: HostCreateOneWithoutOwnerInput
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
  login_ASC
  login_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  login: String!
  name: String!
  password: String!
  role: Role
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

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
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

input UserUpdateInput {
  login: String
  name: String
  password: String
  role: Role
  host: HostUpdateOneWithoutOwnerInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneRequiredWithoutHostInput {
  create: UserCreateWithoutHostInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutHostDataInput
  upsert: UserUpsertWithoutHostInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutHostDataInput {
  login: String
  name: String
  password: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  login: String
  name: String
  password: String
  role: Role
  host: HostUpdateOneWithoutOwnerInput
}

input UserUpsertWithoutHostInput {
  update: UserUpdateWithoutHostDataInput!
  create: UserCreateWithoutHostInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
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
  login: String

  """All values that are not equal to given value."""
  login_not: String

  """All values that are contained in given list."""
  login_in: [String!]

  """All values that are not contained in given list."""
  login_not_in: [String!]

  """All values less than the given value."""
  login_lt: String

  """All values less than or equal the given value."""
  login_lte: String

  """All values greater than the given value."""
  login_gt: String

  """All values greater than or equal the given value."""
  login_gte: String

  """All values containing the given string."""
  login_contains: String

  """All values not containing the given string."""
  login_not_contains: String

  """All values starting with the given string."""
  login_starts_with: String

  """All values not starting with the given string."""
  login_not_starts_with: String

  """All values ending with the given string."""
  login_ends_with: String

  """All values not ending with the given string."""
  login_not_ends_with: String
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
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  host: HostWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  login: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type Role =   'ADMIN' |
  'USER'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'login_ASC' |
  'login_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type HostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'hostName_ASC' |
  'hostName_DESC' |
  'publicKey_ASC' |
  'publicKey_DESC' |
  'timeZone_ASC' |
  'timeZone_DESC' |
  'tunnelPort_ASC' |
  'tunnelPort_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateInput {
  login: String
  name: String
  password: String
  role?: Role
  host?: HostCreateOneWithoutOwnerInput
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface HostCreateInput {
  hostName: String
  publicKey?: String
  timeZone?: String
  tunnelPort?: Int
  owner: UserCreateOneWithoutHostInput
}

export interface HostWhereInput {
  AND?: HostWhereInput[] | HostWhereInput
  OR?: HostWhereInput[] | HostWhereInput
  NOT?: HostWhereInput[] | HostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  hostName?: String
  hostName_not?: String
  hostName_in?: String[] | String
  hostName_not_in?: String[] | String
  hostName_lt?: String
  hostName_lte?: String
  hostName_gt?: String
  hostName_gte?: String
  hostName_contains?: String
  hostName_not_contains?: String
  hostName_starts_with?: String
  hostName_not_starts_with?: String
  hostName_ends_with?: String
  hostName_not_ends_with?: String
  publicKey?: String
  publicKey_not?: String
  publicKey_in?: String[] | String
  publicKey_not_in?: String[] | String
  publicKey_lt?: String
  publicKey_lte?: String
  publicKey_gt?: String
  publicKey_gte?: String
  publicKey_contains?: String
  publicKey_not_contains?: String
  publicKey_starts_with?: String
  publicKey_not_starts_with?: String
  publicKey_ends_with?: String
  publicKey_not_ends_with?: String
  timeZone?: String
  timeZone_not?: String
  timeZone_in?: String[] | String
  timeZone_not_in?: String[] | String
  timeZone_lt?: String
  timeZone_lte?: String
  timeZone_gt?: String
  timeZone_gte?: String
  timeZone_contains?: String
  timeZone_not_contains?: String
  timeZone_starts_with?: String
  timeZone_not_starts_with?: String
  timeZone_ends_with?: String
  timeZone_not_ends_with?: String
  tunnelPort?: Int
  tunnelPort_not?: Int
  tunnelPort_in?: Int[] | Int
  tunnelPort_not_in?: Int[] | Int
  tunnelPort_lt?: Int
  tunnelPort_lte?: Int
  tunnelPort_gt?: Int
  tunnelPort_gte?: Int
  owner?: UserWhereInput
}

export interface UserCreateOneWithoutHostInput {
  create?: UserCreateWithoutHostInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  login?: String
  login_not?: String
  login_in?: String[] | String
  login_not_in?: String[] | String
  login_lt?: String
  login_lte?: String
  login_gt?: String
  login_gte?: String
  login_contains?: String
  login_not_contains?: String
  login_starts_with?: String
  login_not_starts_with?: String
  login_ends_with?: String
  login_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  host?: HostWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface UserUpdateInput {
  login?: String
  name?: String
  password?: String
  role?: Role
  host?: HostUpdateOneWithoutOwnerInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserCreateWithoutHostInput {
  login: String
  name: String
  password: String
  role?: Role
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutPostsInput {
  login: String
  name: String
  password: String
  role?: Role
  host?: HostCreateOneWithoutOwnerInput
}

export interface HostWhereUniqueInput {
  id?: ID_Input
  hostName?: String
}

export interface HostCreateOneWithoutOwnerInput {
  create?: HostCreateWithoutOwnerInput
  connect?: HostWhereUniqueInput
}

export interface UserUpdateWithoutHostDataInput {
  login?: String
  name?: String
  password?: String
  role?: Role
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface HostCreateWithoutOwnerInput {
  hostName: String
  publicKey?: String
  timeZone?: String
  tunnelPort?: Int
}

export interface HostUpdateInput {
  hostName?: String
  publicKey?: String
  timeZone?: String
  tunnelPort?: Int
  owner?: UserUpdateOneRequiredWithoutHostInput
}

export interface HostUpsertWithoutOwnerInput {
  update: HostUpdateWithoutOwnerDataInput
  create: HostCreateWithoutOwnerInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface UserUpsertWithoutHostInput {
  update: UserUpdateWithoutHostDataInput
  create: UserCreateWithoutHostInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneRequiredWithoutPostsInput
}

export interface UserUpdateWithoutPostsDataInput {
  login?: String
  name?: String
  password?: String
  role?: Role
  host?: HostUpdateOneWithoutOwnerInput
}

export interface HostUpdateOneWithoutOwnerInput {
  create?: HostCreateWithoutOwnerInput
  connect?: HostWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: HostUpdateWithoutOwnerDataInput
  upsert?: HostUpsertWithoutOwnerInput
}

export interface HostUpdateWithoutOwnerDataInput {
  hostName?: String
  publicKey?: String
  timeZone?: String
  tunnelPort?: Int
}

export interface UserUpdateOneRequiredWithoutHostInput {
  create?: UserCreateWithoutHostInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutHostDataInput
  upsert?: UserUpsertWithoutHostInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  login?: String
}

export interface HostSubscriptionWhereInput {
  AND?: HostSubscriptionWhereInput[] | HostSubscriptionWhereInput
  OR?: HostSubscriptionWhereInput[] | HostSubscriptionWhereInput
  NOT?: HostSubscriptionWhereInput[] | HostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: HostWhereInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface HostPreviousValues {
  id: ID_Output
  hostName: String
  publicKey?: String
  timeZone: String
  tunnelPort?: Int
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  login: String
  name: String
  password: String
  role?: Role
  host?: Host
  posts?: Post[]
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface HostSubscriptionPayload {
  mutation: MutationType
  node?: Host
  updatedFields?: String[]
  previousValues?: HostPreviousValues
}

export interface AggregateHost {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface HostEdge {
  node: Host
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface UserPreviousValues {
  id: ID_Output
  login: String
  name: String
  password: String
  role?: Role
}

export interface Host extends Node {
  id: ID_Output
  hostName: String
  owner: User
  publicKey?: String
  timeZone: String
  tunnelPort?: Int
}

export interface AggregatePost {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface HostConnection {
  pageInfo: PageInfo
  edges: HostEdge[]
  aggregate: AggregateHost
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string