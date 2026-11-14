
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SupportChat
 * 
 */
export type SupportChat = $Result.DefaultSelection<Prisma.$SupportChatPayload>
/**
 * Model SupportMessage
 * 
 */
export type SupportMessage = $Result.DefaultSelection<Prisma.$SupportMessagePayload>
/**
 * Model Receiver
 * 
 */
export type Receiver = $Result.DefaultSelection<Prisma.$ReceiverPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Office
 * 
 */
export type Office = $Result.DefaultSelection<Prisma.$OfficePayload>
/**
 * Model Tariff
 * 
 */
export type Tariff = $Result.DefaultSelection<Prisma.$TariffPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  OPERATOR: 'OPERATOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const OrderStatus: {
  UNDER_REVIEW: 'UNDER_REVIEW',
  PENDING_ESTIMATE: 'PENDING_ESTIMATE',
  REGISTERED: 'REGISTERED',
  CANCELLED: 'CANCELLED',
  REJECTED: 'REJECTED',
  FOREIGN_WAREHOUSE: 'FOREIGN_WAREHOUSE',
  IN_TRANSIT: 'IN_TRANSIT',
  ARRIVED: 'ARRIVED',
  READY: 'READY',
  DELIVERED: 'DELIVERED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Currency: {
  USD: 'USD',
  AED: 'AED',
  EUR: 'EUR',
  RUB: 'RUB',
  AMD: 'AMD'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const SenderType: {
  CUSTOMER: 'CUSTOMER',
  SUPPORTER: 'SUPPORTER'
};

export type SenderType = (typeof SenderType)[keyof typeof SenderType]


export const ChatStatus: {
  OPEN: 'OPEN',
  RESOLVED: 'RESOLVED',
  ARCHIVED: 'ARCHIVED'
};

export type ChatStatus = (typeof ChatStatus)[keyof typeof ChatStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type SenderType = $Enums.SenderType

export const SenderType: typeof $Enums.SenderType

export type ChatStatus = $Enums.ChatStatus

export const ChatStatus: typeof $Enums.ChatStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more SystemSettings
 * const systemSettings = await prisma.systemSetting.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more SystemSettings
   * const systemSettings = await prisma.systemSetting.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportChat`: Exposes CRUD operations for the **SupportChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportChats
    * const supportChats = await prisma.supportChat.findMany()
    * ```
    */
  get supportChat(): Prisma.SupportChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportMessage`: Exposes CRUD operations for the **SupportMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportMessages
    * const supportMessages = await prisma.supportMessage.findMany()
    * ```
    */
  get supportMessage(): Prisma.SupportMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiver`: Exposes CRUD operations for the **Receiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receivers
    * const receivers = await prisma.receiver.findMany()
    * ```
    */
  get receiver(): Prisma.ReceiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.office`: Exposes CRUD operations for the **Office** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offices
    * const offices = await prisma.office.findMany()
    * ```
    */
  get office(): Prisma.OfficeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tariff`: Exposes CRUD operations for the **Tariff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tariffs
    * const tariffs = await prisma.tariff.findMany()
    * ```
    */
  get tariff(): Prisma.TariffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SystemSetting: 'SystemSetting',
    User: 'User',
    SupportChat: 'SupportChat',
    SupportMessage: 'SupportMessage',
    Receiver: 'Receiver',
    Country: 'Country',
    Office: 'Office',
    Tariff: 'Tariff',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "systemSetting" | "user" | "supportChat" | "supportMessage" | "receiver" | "country" | "office" | "tariff" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SupportChat: {
        payload: Prisma.$SupportChatPayload<ExtArgs>
        fields: Prisma.SupportChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>
          }
          findFirst: {
            args: Prisma.SupportChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>
          }
          findMany: {
            args: Prisma.SupportChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>[]
          }
          create: {
            args: Prisma.SupportChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>
          }
          createMany: {
            args: Prisma.SupportChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>[]
          }
          delete: {
            args: Prisma.SupportChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>
          }
          update: {
            args: Prisma.SupportChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>
          }
          deleteMany: {
            args: Prisma.SupportChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>[]
          }
          upsert: {
            args: Prisma.SupportChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportChatPayload>
          }
          aggregate: {
            args: Prisma.SupportChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportChat>
          }
          groupBy: {
            args: Prisma.SupportChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportChatCountArgs<ExtArgs>
            result: $Utils.Optional<SupportChatCountAggregateOutputType> | number
          }
        }
      }
      SupportMessage: {
        payload: Prisma.$SupportMessagePayload<ExtArgs>
        fields: Prisma.SupportMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          findFirst: {
            args: Prisma.SupportMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          findMany: {
            args: Prisma.SupportMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>[]
          }
          create: {
            args: Prisma.SupportMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          createMany: {
            args: Prisma.SupportMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>[]
          }
          delete: {
            args: Prisma.SupportMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          update: {
            args: Prisma.SupportMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          deleteMany: {
            args: Prisma.SupportMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>[]
          }
          upsert: {
            args: Prisma.SupportMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          aggregate: {
            args: Prisma.SupportMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportMessage>
          }
          groupBy: {
            args: Prisma.SupportMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SupportMessageCountAggregateOutputType> | number
          }
        }
      }
      Receiver: {
        payload: Prisma.$ReceiverPayload<ExtArgs>
        fields: Prisma.ReceiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          findFirst: {
            args: Prisma.ReceiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          findMany: {
            args: Prisma.ReceiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>[]
          }
          create: {
            args: Prisma.ReceiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          createMany: {
            args: Prisma.ReceiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>[]
          }
          delete: {
            args: Prisma.ReceiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          update: {
            args: Prisma.ReceiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          deleteMany: {
            args: Prisma.ReceiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>[]
          }
          upsert: {
            args: Prisma.ReceiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiverPayload>
          }
          aggregate: {
            args: Prisma.ReceiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiver>
          }
          groupBy: {
            args: Prisma.ReceiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiverCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiverCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Office: {
        payload: Prisma.$OfficePayload<ExtArgs>
        fields: Prisma.OfficeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          findFirst: {
            args: Prisma.OfficeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          findMany: {
            args: Prisma.OfficeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          create: {
            args: Prisma.OfficeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          createMany: {
            args: Prisma.OfficeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          delete: {
            args: Prisma.OfficeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          update: {
            args: Prisma.OfficeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          deleteMany: {
            args: Prisma.OfficeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          upsert: {
            args: Prisma.OfficeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          aggregate: {
            args: Prisma.OfficeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffice>
          }
          groupBy: {
            args: Prisma.OfficeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficeCountArgs<ExtArgs>
            result: $Utils.Optional<OfficeCountAggregateOutputType> | number
          }
        }
      }
      Tariff: {
        payload: Prisma.$TariffPayload<ExtArgs>
        fields: Prisma.TariffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          findFirst: {
            args: Prisma.TariffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          findMany: {
            args: Prisma.TariffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>[]
          }
          create: {
            args: Prisma.TariffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          createMany: {
            args: Prisma.TariffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TariffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>[]
          }
          delete: {
            args: Prisma.TariffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          update: {
            args: Prisma.TariffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          deleteMany: {
            args: Prisma.TariffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TariffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>[]
          }
          upsert: {
            args: Prisma.TariffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          aggregate: {
            args: Prisma.TariffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariff>
          }
          groupBy: {
            args: Prisma.TariffGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffCountArgs<ExtArgs>
            result: $Utils.Optional<TariffCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    systemSetting?: SystemSettingOmit
    user?: UserOmit
    supportChat?: SupportChatOmit
    supportMessage?: SupportMessageOmit
    receiver?: ReceiverOmit
    country?: CountryOmit
    office?: OfficeOmit
    tariff?: TariffOmit
    order?: OrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    receivers: number
    orders: number
    estimatedOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivers?: boolean | UserCountOutputTypeCountReceiversArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    estimatedOrders?: boolean | UserCountOutputTypeCountEstimatedOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiverWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEstimatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type SupportChatCountOutputType
   */

  export type SupportChatCountOutputType = {
    messages: number
  }

  export type SupportChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | SupportChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * SupportChatCountOutputType without action
   */
  export type SupportChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChatCountOutputType
     */
    select?: SupportChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupportChatCountOutputType without action
   */
  export type SupportChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportMessageWhereInput
  }


  /**
   * Count Type ReceiverCountOutputType
   */

  export type ReceiverCountOutputType = {
    orders: number
  }

  export type ReceiverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ReceiverCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ReceiverCountOutputType without action
   */
  export type ReceiverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiverCountOutputType
     */
    select?: ReceiverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiverCountOutputType without action
   */
  export type ReceiverCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    offices: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offices?: boolean | CountryCountOutputTypeCountOfficesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountOfficesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeWhereInput
  }


  /**
   * Count Type OfficeCountOutputType
   */

  export type OfficeCountOutputType = {
    operators: number
    ordersFrom: number
    ordersTo: number
    outgoingTariffs: number
    incomingTariffs: number
  }

  export type OfficeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operators?: boolean | OfficeCountOutputTypeCountOperatorsArgs
    ordersFrom?: boolean | OfficeCountOutputTypeCountOrdersFromArgs
    ordersTo?: boolean | OfficeCountOutputTypeCountOrdersToArgs
    outgoingTariffs?: boolean | OfficeCountOutputTypeCountOutgoingTariffsArgs
    incomingTariffs?: boolean | OfficeCountOutputTypeCountIncomingTariffsArgs
  }

  // Custom InputTypes
  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeCountOutputType
     */
    select?: OfficeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountOperatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountOrdersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountOrdersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountOutgoingTariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountIncomingTariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _avg: SystemSettingAvgAggregateOutputType | null
    _sum: SystemSettingSumAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingAvgAggregateOutputType = {
    volumetricDivisor: number | null
  }

  export type SystemSettingSumAggregateOutputType = {
    volumetricDivisor: number | null
  }

  export type SystemSettingMinAggregateOutputType = {
    id: string | null
    volumetricDivisor: number | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    id: string | null
    volumetricDivisor: number | null
  }

  export type SystemSettingCountAggregateOutputType = {
    id: number
    volumetricDivisor: number
    _all: number
  }


  export type SystemSettingAvgAggregateInputType = {
    volumetricDivisor?: true
  }

  export type SystemSettingSumAggregateInputType = {
    volumetricDivisor?: true
  }

  export type SystemSettingMinAggregateInputType = {
    id?: true
    volumetricDivisor?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    id?: true
    volumetricDivisor?: true
  }

  export type SystemSettingCountAggregateInputType = {
    id?: true
    volumetricDivisor?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _avg?: SystemSettingAvgAggregateInputType
    _sum?: SystemSettingSumAggregateInputType
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    id: string
    volumetricDivisor: number
    _count: SystemSettingCountAggregateOutputType | null
    _avg: SystemSettingAvgAggregateOutputType | null
    _sum: SystemSettingSumAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volumetricDivisor?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volumetricDivisor?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volumetricDivisor?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    id?: boolean
    volumetricDivisor?: boolean
  }

  export type SystemSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volumetricDivisor", ExtArgs["result"]["systemSetting"]>

  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volumetricDivisor: number
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }

  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingFindUniqueArgs>(args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingFindFirstArgs>(args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingFindManyArgs>(args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
     */
    create<T extends SystemSettingCreateArgs>(args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingCreateManyArgs>(args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingDeleteArgs>(args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingUpdateArgs>(args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingDeleteManyArgs>(args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingUpdateManyArgs>(args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingUpsertArgs>(args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSetting model
   */
  interface SystemSettingFieldRefs {
    readonly id: FieldRef<"SystemSetting", 'String'>
    readonly volumetricDivisor: FieldRef<"SystemSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data?: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }

  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting createManyAndReturn
   */
  export type SystemSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting updateManyAndReturn
   */
  export type SystemSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }

  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isIndividual: boolean | null
    isSupporter: boolean | null
    hyDocumentType: string | null
    enDocumentType: string | null
    ruDocumentType: string | null
    documentNumber: string | null
    companyName: string | null
    taxpayerId: string | null
    address: string | null
    phoneNumber: string | null
    telegramChatId: string | null
    code: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    officeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isIndividual: boolean | null
    isSupporter: boolean | null
    hyDocumentType: string | null
    enDocumentType: string | null
    ruDocumentType: string | null
    documentNumber: string | null
    companyName: string | null
    taxpayerId: string | null
    address: string | null
    phoneNumber: string | null
    telegramChatId: string | null
    code: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    officeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    isIndividual: number
    isSupporter: number
    hyDocumentType: number
    enDocumentType: number
    ruDocumentType: number
    documentNumber: number
    companyName: number
    taxpayerId: number
    address: number
    phoneNumber: number
    telegramChatId: number
    code: number
    role: number
    status: number
    officeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isIndividual?: true
    isSupporter?: true
    hyDocumentType?: true
    enDocumentType?: true
    ruDocumentType?: true
    documentNumber?: true
    companyName?: true
    taxpayerId?: true
    address?: true
    phoneNumber?: true
    telegramChatId?: true
    code?: true
    role?: true
    status?: true
    officeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isIndividual?: true
    isSupporter?: true
    hyDocumentType?: true
    enDocumentType?: true
    ruDocumentType?: true
    documentNumber?: true
    companyName?: true
    taxpayerId?: true
    address?: true
    phoneNumber?: true
    telegramChatId?: true
    code?: true
    role?: true
    status?: true
    officeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isIndividual?: true
    isSupporter?: true
    hyDocumentType?: true
    enDocumentType?: true
    ruDocumentType?: true
    documentNumber?: true
    companyName?: true
    taxpayerId?: true
    address?: true
    phoneNumber?: true
    telegramChatId?: true
    code?: true
    role?: true
    status?: true
    officeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    isIndividual: boolean
    isSupporter: boolean
    hyDocumentType: string | null
    enDocumentType: string | null
    ruDocumentType: string | null
    documentNumber: string | null
    companyName: string | null
    taxpayerId: string | null
    address: string | null
    phoneNumber: string | null
    telegramChatId: string | null
    code: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    officeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    companyName?: boolean
    taxpayerId?: boolean
    address?: boolean
    phoneNumber?: boolean
    telegramChatId?: boolean
    code?: boolean
    role?: boolean
    status?: boolean
    officeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receivers?: boolean | User$receiversArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    estimatedOrders?: boolean | User$estimatedOrdersArgs<ExtArgs>
    supportChat?: boolean | User$supportChatArgs<ExtArgs>
    office?: boolean | User$officeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    companyName?: boolean
    taxpayerId?: boolean
    address?: boolean
    phoneNumber?: boolean
    telegramChatId?: boolean
    code?: boolean
    role?: boolean
    status?: boolean
    officeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    office?: boolean | User$officeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    companyName?: boolean
    taxpayerId?: boolean
    address?: boolean
    phoneNumber?: boolean
    telegramChatId?: boolean
    code?: boolean
    role?: boolean
    status?: boolean
    officeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    office?: boolean | User$officeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    companyName?: boolean
    taxpayerId?: boolean
    address?: boolean
    phoneNumber?: boolean
    telegramChatId?: boolean
    code?: boolean
    role?: boolean
    status?: boolean
    officeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "isIndividual" | "isSupporter" | "hyDocumentType" | "enDocumentType" | "ruDocumentType" | "documentNumber" | "companyName" | "taxpayerId" | "address" | "phoneNumber" | "telegramChatId" | "code" | "role" | "status" | "officeId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivers?: boolean | User$receiversArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    estimatedOrders?: boolean | User$estimatedOrdersArgs<ExtArgs>
    supportChat?: boolean | User$supportChatArgs<ExtArgs>
    office?: boolean | User$officeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    office?: boolean | User$officeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    office?: boolean | User$officeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      receivers: Prisma.$ReceiverPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      estimatedOrders: Prisma.$OrderPayload<ExtArgs>[]
      supportChat: Prisma.$SupportChatPayload<ExtArgs> | null
      office: Prisma.$OfficePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      isIndividual: boolean
      isSupporter: boolean
      hyDocumentType: string | null
      enDocumentType: string | null
      ruDocumentType: string | null
      documentNumber: string | null
      companyName: string | null
      taxpayerId: string | null
      address: string | null
      phoneNumber: string | null
      telegramChatId: string | null
      code: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      officeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receivers<T extends User$receiversArgs<ExtArgs> = {}>(args?: Subset<T, User$receiversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estimatedOrders<T extends User$estimatedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$estimatedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supportChat<T extends User$supportChatArgs<ExtArgs> = {}>(args?: Subset<T, User$supportChatArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    office<T extends User$officeArgs<ExtArgs> = {}>(args?: Subset<T, User$officeArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly isIndividual: FieldRef<"User", 'Boolean'>
    readonly isSupporter: FieldRef<"User", 'Boolean'>
    readonly hyDocumentType: FieldRef<"User", 'String'>
    readonly enDocumentType: FieldRef<"User", 'String'>
    readonly ruDocumentType: FieldRef<"User", 'String'>
    readonly documentNumber: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly taxpayerId: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly telegramChatId: FieldRef<"User", 'String'>
    readonly code: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly officeId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.receivers
   */
  export type User$receiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    where?: ReceiverWhereInput
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    cursor?: ReceiverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.estimatedOrders
   */
  export type User$estimatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.supportChat
   */
  export type User$supportChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    where?: SupportChatWhereInput
  }

  /**
   * User.office
   */
  export type User$officeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    where?: OfficeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SupportChat
   */

  export type AggregateSupportChat = {
    _count: SupportChatCountAggregateOutputType | null
    _min: SupportChatMinAggregateOutputType | null
    _max: SupportChatMaxAggregateOutputType | null
  }

  export type SupportChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.ChatStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.ChatStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportChatCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportChatMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportChatMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportChatCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportChat to aggregate.
     */
    where?: SupportChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportChats to fetch.
     */
    orderBy?: SupportChatOrderByWithRelationInput | SupportChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportChats
    **/
    _count?: true | SupportChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportChatMaxAggregateInputType
  }

  export type GetSupportChatAggregateType<T extends SupportChatAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportChat[P]>
      : GetScalarType<T[P], AggregateSupportChat[P]>
  }




  export type SupportChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportChatWhereInput
    orderBy?: SupportChatOrderByWithAggregationInput | SupportChatOrderByWithAggregationInput[]
    by: SupportChatScalarFieldEnum[] | SupportChatScalarFieldEnum
    having?: SupportChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportChatCountAggregateInputType | true
    _min?: SupportChatMinAggregateInputType
    _max?: SupportChatMaxAggregateInputType
  }

  export type SupportChatGroupByOutputType = {
    id: string
    userId: string
    status: $Enums.ChatStatus
    createdAt: Date
    updatedAt: Date
    _count: SupportChatCountAggregateOutputType | null
    _min: SupportChatMinAggregateOutputType | null
    _max: SupportChatMaxAggregateOutputType | null
  }

  type GetSupportChatGroupByPayload<T extends SupportChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportChatGroupByOutputType[P]>
            : GetScalarType<T[P], SupportChatGroupByOutputType[P]>
        }
      >
    >


  export type SupportChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | SupportChat$messagesArgs<ExtArgs>
    _count?: boolean | SupportChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportChat"]>

  export type SupportChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportChat"]>

  export type SupportChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportChat"]>

  export type SupportChatSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["supportChat"]>
  export type SupportChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | SupportChat$messagesArgs<ExtArgs>
    _count?: boolean | SupportChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupportChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SupportChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportChat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$SupportMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: $Enums.ChatStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportChat"]>
    composites: {}
  }

  type SupportChatGetPayload<S extends boolean | null | undefined | SupportChatDefaultArgs> = $Result.GetResult<Prisma.$SupportChatPayload, S>

  type SupportChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportChatCountAggregateInputType | true
    }

  export interface SupportChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportChat'], meta: { name: 'SupportChat' } }
    /**
     * Find zero or one SupportChat that matches the filter.
     * @param {SupportChatFindUniqueArgs} args - Arguments to find a SupportChat
     * @example
     * // Get one SupportChat
     * const supportChat = await prisma.supportChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportChatFindUniqueArgs>(args: SelectSubset<T, SupportChatFindUniqueArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportChatFindUniqueOrThrowArgs} args - Arguments to find a SupportChat
     * @example
     * // Get one SupportChat
     * const supportChat = await prisma.supportChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportChatFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatFindFirstArgs} args - Arguments to find a SupportChat
     * @example
     * // Get one SupportChat
     * const supportChat = await prisma.supportChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportChatFindFirstArgs>(args?: SelectSubset<T, SupportChatFindFirstArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatFindFirstOrThrowArgs} args - Arguments to find a SupportChat
     * @example
     * // Get one SupportChat
     * const supportChat = await prisma.supportChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportChatFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportChats
     * const supportChats = await prisma.supportChat.findMany()
     * 
     * // Get first 10 SupportChats
     * const supportChats = await prisma.supportChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportChatWithIdOnly = await prisma.supportChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportChatFindManyArgs>(args?: SelectSubset<T, SupportChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportChat.
     * @param {SupportChatCreateArgs} args - Arguments to create a SupportChat.
     * @example
     * // Create one SupportChat
     * const SupportChat = await prisma.supportChat.create({
     *   data: {
     *     // ... data to create a SupportChat
     *   }
     * })
     * 
     */
    create<T extends SupportChatCreateArgs>(args: SelectSubset<T, SupportChatCreateArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportChats.
     * @param {SupportChatCreateManyArgs} args - Arguments to create many SupportChats.
     * @example
     * // Create many SupportChats
     * const supportChat = await prisma.supportChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportChatCreateManyArgs>(args?: SelectSubset<T, SupportChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportChats and returns the data saved in the database.
     * @param {SupportChatCreateManyAndReturnArgs} args - Arguments to create many SupportChats.
     * @example
     * // Create many SupportChats
     * const supportChat = await prisma.supportChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportChats and only return the `id`
     * const supportChatWithIdOnly = await prisma.supportChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportChatCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportChat.
     * @param {SupportChatDeleteArgs} args - Arguments to delete one SupportChat.
     * @example
     * // Delete one SupportChat
     * const SupportChat = await prisma.supportChat.delete({
     *   where: {
     *     // ... filter to delete one SupportChat
     *   }
     * })
     * 
     */
    delete<T extends SupportChatDeleteArgs>(args: SelectSubset<T, SupportChatDeleteArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportChat.
     * @param {SupportChatUpdateArgs} args - Arguments to update one SupportChat.
     * @example
     * // Update one SupportChat
     * const supportChat = await prisma.supportChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportChatUpdateArgs>(args: SelectSubset<T, SupportChatUpdateArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportChats.
     * @param {SupportChatDeleteManyArgs} args - Arguments to filter SupportChats to delete.
     * @example
     * // Delete a few SupportChats
     * const { count } = await prisma.supportChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportChatDeleteManyArgs>(args?: SelectSubset<T, SupportChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportChats
     * const supportChat = await prisma.supportChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportChatUpdateManyArgs>(args: SelectSubset<T, SupportChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportChats and returns the data updated in the database.
     * @param {SupportChatUpdateManyAndReturnArgs} args - Arguments to update many SupportChats.
     * @example
     * // Update many SupportChats
     * const supportChat = await prisma.supportChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportChats and only return the `id`
     * const supportChatWithIdOnly = await prisma.supportChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportChatUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportChat.
     * @param {SupportChatUpsertArgs} args - Arguments to update or create a SupportChat.
     * @example
     * // Update or create a SupportChat
     * const supportChat = await prisma.supportChat.upsert({
     *   create: {
     *     // ... data to create a SupportChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportChat we want to update
     *   }
     * })
     */
    upsert<T extends SupportChatUpsertArgs>(args: SelectSubset<T, SupportChatUpsertArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatCountArgs} args - Arguments to filter SupportChats to count.
     * @example
     * // Count the number of SupportChats
     * const count = await prisma.supportChat.count({
     *   where: {
     *     // ... the filter for the SupportChats we want to count
     *   }
     * })
    **/
    count<T extends SupportChatCountArgs>(
      args?: Subset<T, SupportChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportChatAggregateArgs>(args: Subset<T, SupportChatAggregateArgs>): Prisma.PrismaPromise<GetSupportChatAggregateType<T>>

    /**
     * Group by SupportChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportChatGroupByArgs['orderBy'] }
        : { orderBy?: SupportChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportChat model
   */
  readonly fields: SupportChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends SupportChat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, SupportChat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportChat model
   */
  interface SupportChatFieldRefs {
    readonly id: FieldRef<"SupportChat", 'String'>
    readonly userId: FieldRef<"SupportChat", 'String'>
    readonly status: FieldRef<"SupportChat", 'ChatStatus'>
    readonly createdAt: FieldRef<"SupportChat", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportChat findUnique
   */
  export type SupportChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * Filter, which SupportChat to fetch.
     */
    where: SupportChatWhereUniqueInput
  }

  /**
   * SupportChat findUniqueOrThrow
   */
  export type SupportChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * Filter, which SupportChat to fetch.
     */
    where: SupportChatWhereUniqueInput
  }

  /**
   * SupportChat findFirst
   */
  export type SupportChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * Filter, which SupportChat to fetch.
     */
    where?: SupportChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportChats to fetch.
     */
    orderBy?: SupportChatOrderByWithRelationInput | SupportChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportChats.
     */
    cursor?: SupportChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportChats.
     */
    distinct?: SupportChatScalarFieldEnum | SupportChatScalarFieldEnum[]
  }

  /**
   * SupportChat findFirstOrThrow
   */
  export type SupportChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * Filter, which SupportChat to fetch.
     */
    where?: SupportChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportChats to fetch.
     */
    orderBy?: SupportChatOrderByWithRelationInput | SupportChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportChats.
     */
    cursor?: SupportChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportChats.
     */
    distinct?: SupportChatScalarFieldEnum | SupportChatScalarFieldEnum[]
  }

  /**
   * SupportChat findMany
   */
  export type SupportChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * Filter, which SupportChats to fetch.
     */
    where?: SupportChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportChats to fetch.
     */
    orderBy?: SupportChatOrderByWithRelationInput | SupportChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportChats.
     */
    cursor?: SupportChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportChats.
     */
    distinct?: SupportChatScalarFieldEnum | SupportChatScalarFieldEnum[]
  }

  /**
   * SupportChat create
   */
  export type SupportChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportChat.
     */
    data: XOR<SupportChatCreateInput, SupportChatUncheckedCreateInput>
  }

  /**
   * SupportChat createMany
   */
  export type SupportChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportChats.
     */
    data: SupportChatCreateManyInput | SupportChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportChat createManyAndReturn
   */
  export type SupportChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * The data used to create many SupportChats.
     */
    data: SupportChatCreateManyInput | SupportChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportChat update
   */
  export type SupportChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportChat.
     */
    data: XOR<SupportChatUpdateInput, SupportChatUncheckedUpdateInput>
    /**
     * Choose, which SupportChat to update.
     */
    where: SupportChatWhereUniqueInput
  }

  /**
   * SupportChat updateMany
   */
  export type SupportChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportChats.
     */
    data: XOR<SupportChatUpdateManyMutationInput, SupportChatUncheckedUpdateManyInput>
    /**
     * Filter which SupportChats to update
     */
    where?: SupportChatWhereInput
    /**
     * Limit how many SupportChats to update.
     */
    limit?: number
  }

  /**
   * SupportChat updateManyAndReturn
   */
  export type SupportChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * The data used to update SupportChats.
     */
    data: XOR<SupportChatUpdateManyMutationInput, SupportChatUncheckedUpdateManyInput>
    /**
     * Filter which SupportChats to update
     */
    where?: SupportChatWhereInput
    /**
     * Limit how many SupportChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportChat upsert
   */
  export type SupportChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportChat to update in case it exists.
     */
    where: SupportChatWhereUniqueInput
    /**
     * In case the SupportChat found by the `where` argument doesn't exist, create a new SupportChat with this data.
     */
    create: XOR<SupportChatCreateInput, SupportChatUncheckedCreateInput>
    /**
     * In case the SupportChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportChatUpdateInput, SupportChatUncheckedUpdateInput>
  }

  /**
   * SupportChat delete
   */
  export type SupportChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
    /**
     * Filter which SupportChat to delete.
     */
    where: SupportChatWhereUniqueInput
  }

  /**
   * SupportChat deleteMany
   */
  export type SupportChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportChats to delete
     */
    where?: SupportChatWhereInput
    /**
     * Limit how many SupportChats to delete.
     */
    limit?: number
  }

  /**
   * SupportChat.messages
   */
  export type SupportChat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    where?: SupportMessageWhereInput
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    cursor?: SupportMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportChat without action
   */
  export type SupportChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportChat
     */
    select?: SupportChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportChat
     */
    omit?: SupportChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportChatInclude<ExtArgs> | null
  }


  /**
   * Model SupportMessage
   */

  export type AggregateSupportMessage = {
    _count: SupportMessageCountAggregateOutputType | null
    _min: SupportMessageMinAggregateOutputType | null
    _max: SupportMessageMaxAggregateOutputType | null
  }

  export type SupportMessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    senderType: $Enums.SenderType | null
    senderId: string | null
    text: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type SupportMessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    senderType: $Enums.SenderType | null
    senderId: string | null
    text: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type SupportMessageCountAggregateOutputType = {
    id: number
    chatId: number
    senderType: number
    senderId: number
    text: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type SupportMessageMinAggregateInputType = {
    id?: true
    chatId?: true
    senderType?: true
    senderId?: true
    text?: true
    isRead?: true
    createdAt?: true
  }

  export type SupportMessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    senderType?: true
    senderId?: true
    text?: true
    isRead?: true
    createdAt?: true
  }

  export type SupportMessageCountAggregateInputType = {
    id?: true
    chatId?: true
    senderType?: true
    senderId?: true
    text?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type SupportMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportMessage to aggregate.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportMessages
    **/
    _count?: true | SupportMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportMessageMaxAggregateInputType
  }

  export type GetSupportMessageAggregateType<T extends SupportMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportMessage[P]>
      : GetScalarType<T[P], AggregateSupportMessage[P]>
  }




  export type SupportMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportMessageWhereInput
    orderBy?: SupportMessageOrderByWithAggregationInput | SupportMessageOrderByWithAggregationInput[]
    by: SupportMessageScalarFieldEnum[] | SupportMessageScalarFieldEnum
    having?: SupportMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportMessageCountAggregateInputType | true
    _min?: SupportMessageMinAggregateInputType
    _max?: SupportMessageMaxAggregateInputType
  }

  export type SupportMessageGroupByOutputType = {
    id: string
    chatId: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead: boolean
    createdAt: Date
    _count: SupportMessageCountAggregateOutputType | null
    _min: SupportMessageMinAggregateOutputType | null
    _max: SupportMessageMaxAggregateOutputType | null
  }

  type GetSupportMessageGroupByPayload<T extends SupportMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SupportMessageGroupByOutputType[P]>
        }
      >
    >


  export type SupportMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderType?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
    chat?: boolean | SupportChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessage"]>

  export type SupportMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderType?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
    chat?: boolean | SupportChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessage"]>

  export type SupportMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    senderType?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
    chat?: boolean | SupportChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessage"]>

  export type SupportMessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    senderType?: boolean
    senderId?: boolean
    text?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type SupportMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "senderType" | "senderId" | "text" | "isRead" | "createdAt", ExtArgs["result"]["supportMessage"]>
  export type SupportMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | SupportChatDefaultArgs<ExtArgs>
  }
  export type SupportMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | SupportChatDefaultArgs<ExtArgs>
  }
  export type SupportMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | SupportChatDefaultArgs<ExtArgs>
  }

  export type $SupportMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportMessage"
    objects: {
      chat: Prisma.$SupportChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      senderType: $Enums.SenderType
      senderId: string
      text: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["supportMessage"]>
    composites: {}
  }

  type SupportMessageGetPayload<S extends boolean | null | undefined | SupportMessageDefaultArgs> = $Result.GetResult<Prisma.$SupportMessagePayload, S>

  type SupportMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportMessageCountAggregateInputType | true
    }

  export interface SupportMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportMessage'], meta: { name: 'SupportMessage' } }
    /**
     * Find zero or one SupportMessage that matches the filter.
     * @param {SupportMessageFindUniqueArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportMessageFindUniqueArgs>(args: SelectSubset<T, SupportMessageFindUniqueArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportMessageFindUniqueOrThrowArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageFindFirstArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportMessageFindFirstArgs>(args?: SelectSubset<T, SupportMessageFindFirstArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageFindFirstOrThrowArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportMessages
     * const supportMessages = await prisma.supportMessage.findMany()
     * 
     * // Get first 10 SupportMessages
     * const supportMessages = await prisma.supportMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportMessageWithIdOnly = await prisma.supportMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportMessageFindManyArgs>(args?: SelectSubset<T, SupportMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportMessage.
     * @param {SupportMessageCreateArgs} args - Arguments to create a SupportMessage.
     * @example
     * // Create one SupportMessage
     * const SupportMessage = await prisma.supportMessage.create({
     *   data: {
     *     // ... data to create a SupportMessage
     *   }
     * })
     * 
     */
    create<T extends SupportMessageCreateArgs>(args: SelectSubset<T, SupportMessageCreateArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportMessages.
     * @param {SupportMessageCreateManyArgs} args - Arguments to create many SupportMessages.
     * @example
     * // Create many SupportMessages
     * const supportMessage = await prisma.supportMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportMessageCreateManyArgs>(args?: SelectSubset<T, SupportMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportMessages and returns the data saved in the database.
     * @param {SupportMessageCreateManyAndReturnArgs} args - Arguments to create many SupportMessages.
     * @example
     * // Create many SupportMessages
     * const supportMessage = await prisma.supportMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportMessages and only return the `id`
     * const supportMessageWithIdOnly = await prisma.supportMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportMessage.
     * @param {SupportMessageDeleteArgs} args - Arguments to delete one SupportMessage.
     * @example
     * // Delete one SupportMessage
     * const SupportMessage = await prisma.supportMessage.delete({
     *   where: {
     *     // ... filter to delete one SupportMessage
     *   }
     * })
     * 
     */
    delete<T extends SupportMessageDeleteArgs>(args: SelectSubset<T, SupportMessageDeleteArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportMessage.
     * @param {SupportMessageUpdateArgs} args - Arguments to update one SupportMessage.
     * @example
     * // Update one SupportMessage
     * const supportMessage = await prisma.supportMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportMessageUpdateArgs>(args: SelectSubset<T, SupportMessageUpdateArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportMessages.
     * @param {SupportMessageDeleteManyArgs} args - Arguments to filter SupportMessages to delete.
     * @example
     * // Delete a few SupportMessages
     * const { count } = await prisma.supportMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportMessageDeleteManyArgs>(args?: SelectSubset<T, SupportMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportMessages
     * const supportMessage = await prisma.supportMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportMessageUpdateManyArgs>(args: SelectSubset<T, SupportMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportMessages and returns the data updated in the database.
     * @param {SupportMessageUpdateManyAndReturnArgs} args - Arguments to update many SupportMessages.
     * @example
     * // Update many SupportMessages
     * const supportMessage = await prisma.supportMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportMessages and only return the `id`
     * const supportMessageWithIdOnly = await prisma.supportMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportMessage.
     * @param {SupportMessageUpsertArgs} args - Arguments to update or create a SupportMessage.
     * @example
     * // Update or create a SupportMessage
     * const supportMessage = await prisma.supportMessage.upsert({
     *   create: {
     *     // ... data to create a SupportMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportMessage we want to update
     *   }
     * })
     */
    upsert<T extends SupportMessageUpsertArgs>(args: SelectSubset<T, SupportMessageUpsertArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageCountArgs} args - Arguments to filter SupportMessages to count.
     * @example
     * // Count the number of SupportMessages
     * const count = await prisma.supportMessage.count({
     *   where: {
     *     // ... the filter for the SupportMessages we want to count
     *   }
     * })
    **/
    count<T extends SupportMessageCountArgs>(
      args?: Subset<T, SupportMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportMessageAggregateArgs>(args: Subset<T, SupportMessageAggregateArgs>): Prisma.PrismaPromise<GetSupportMessageAggregateType<T>>

    /**
     * Group by SupportMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportMessageGroupByArgs['orderBy'] }
        : { orderBy?: SupportMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportMessage model
   */
  readonly fields: SupportMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends SupportChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportChatDefaultArgs<ExtArgs>>): Prisma__SupportChatClient<$Result.GetResult<Prisma.$SupportChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportMessage model
   */
  interface SupportMessageFieldRefs {
    readonly id: FieldRef<"SupportMessage", 'String'>
    readonly chatId: FieldRef<"SupportMessage", 'String'>
    readonly senderType: FieldRef<"SupportMessage", 'SenderType'>
    readonly senderId: FieldRef<"SupportMessage", 'String'>
    readonly text: FieldRef<"SupportMessage", 'String'>
    readonly isRead: FieldRef<"SupportMessage", 'Boolean'>
    readonly createdAt: FieldRef<"SupportMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportMessage findUnique
   */
  export type SupportMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage findUniqueOrThrow
   */
  export type SupportMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage findFirst
   */
  export type SupportMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportMessages.
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportMessage findFirstOrThrow
   */
  export type SupportMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportMessages.
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportMessage findMany
   */
  export type SupportMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportMessages.
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportMessage create
   */
  export type SupportMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportMessage.
     */
    data: XOR<SupportMessageCreateInput, SupportMessageUncheckedCreateInput>
  }

  /**
   * SupportMessage createMany
   */
  export type SupportMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportMessages.
     */
    data: SupportMessageCreateManyInput | SupportMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportMessage createManyAndReturn
   */
  export type SupportMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SupportMessages.
     */
    data: SupportMessageCreateManyInput | SupportMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportMessage update
   */
  export type SupportMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportMessage.
     */
    data: XOR<SupportMessageUpdateInput, SupportMessageUncheckedUpdateInput>
    /**
     * Choose, which SupportMessage to update.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage updateMany
   */
  export type SupportMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportMessages.
     */
    data: XOR<SupportMessageUpdateManyMutationInput, SupportMessageUncheckedUpdateManyInput>
    /**
     * Filter which SupportMessages to update
     */
    where?: SupportMessageWhereInput
    /**
     * Limit how many SupportMessages to update.
     */
    limit?: number
  }

  /**
   * SupportMessage updateManyAndReturn
   */
  export type SupportMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * The data used to update SupportMessages.
     */
    data: XOR<SupportMessageUpdateManyMutationInput, SupportMessageUncheckedUpdateManyInput>
    /**
     * Filter which SupportMessages to update
     */
    where?: SupportMessageWhereInput
    /**
     * Limit how many SupportMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportMessage upsert
   */
  export type SupportMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportMessage to update in case it exists.
     */
    where: SupportMessageWhereUniqueInput
    /**
     * In case the SupportMessage found by the `where` argument doesn't exist, create a new SupportMessage with this data.
     */
    create: XOR<SupportMessageCreateInput, SupportMessageUncheckedCreateInput>
    /**
     * In case the SupportMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportMessageUpdateInput, SupportMessageUncheckedUpdateInput>
  }

  /**
   * SupportMessage delete
   */
  export type SupportMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter which SupportMessage to delete.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage deleteMany
   */
  export type SupportMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportMessages to delete
     */
    where?: SupportMessageWhereInput
    /**
     * Limit how many SupportMessages to delete.
     */
    limit?: number
  }

  /**
   * SupportMessage without action
   */
  export type SupportMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
  }


  /**
   * Model Receiver
   */

  export type AggregateReceiver = {
    _count: ReceiverCountAggregateOutputType | null
    _min: ReceiverMinAggregateOutputType | null
    _max: ReceiverMaxAggregateOutputType | null
  }

  export type ReceiverMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    firstName: string | null
    lastName: string | null
    hyDocumentType: string | null
    enDocumentType: string | null
    ruDocumentType: string | null
    documentNumber: string | null
    address: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReceiverMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    firstName: string | null
    lastName: string | null
    hyDocumentType: string | null
    enDocumentType: string | null
    ruDocumentType: string | null
    documentNumber: string | null
    address: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReceiverCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    firstName: number
    lastName: number
    hyDocumentType: number
    enDocumentType: number
    ruDocumentType: number
    documentNumber: number
    address: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReceiverMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    firstName?: true
    lastName?: true
    hyDocumentType?: true
    enDocumentType?: true
    ruDocumentType?: true
    documentNumber?: true
    address?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReceiverMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    firstName?: true
    lastName?: true
    hyDocumentType?: true
    enDocumentType?: true
    ruDocumentType?: true
    documentNumber?: true
    address?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReceiverCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    firstName?: true
    lastName?: true
    hyDocumentType?: true
    enDocumentType?: true
    ruDocumentType?: true
    documentNumber?: true
    address?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReceiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receiver to aggregate.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receivers
    **/
    _count?: true | ReceiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiverMaxAggregateInputType
  }

  export type GetReceiverAggregateType<T extends ReceiverAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiver[P]>
      : GetScalarType<T[P], AggregateReceiver[P]>
  }




  export type ReceiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiverWhereInput
    orderBy?: ReceiverOrderByWithAggregationInput | ReceiverOrderByWithAggregationInput[]
    by: ReceiverScalarFieldEnum[] | ReceiverScalarFieldEnum
    having?: ReceiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiverCountAggregateInputType | true
    _min?: ReceiverMinAggregateInputType
    _max?: ReceiverMaxAggregateInputType
  }

  export type ReceiverGroupByOutputType = {
    id: string
    userId: string
    code: string | null
    firstName: string | null
    lastName: string | null
    hyDocumentType: string | null
    enDocumentType: string | null
    ruDocumentType: string | null
    documentNumber: string | null
    address: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReceiverCountAggregateOutputType | null
    _min: ReceiverMinAggregateOutputType | null
    _max: ReceiverMaxAggregateOutputType | null
  }

  type GetReceiverGroupByPayload<T extends ReceiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiverGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiverGroupByOutputType[P]>
        }
      >
    >


  export type ReceiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    firstName?: boolean
    lastName?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | Receiver$ordersArgs<ExtArgs>
    _count?: boolean | ReceiverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiver"]>

  export type ReceiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    firstName?: boolean
    lastName?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiver"]>

  export type ReceiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    firstName?: boolean
    lastName?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiver"]>

  export type ReceiverSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    firstName?: boolean
    lastName?: boolean
    hyDocumentType?: boolean
    enDocumentType?: boolean
    ruDocumentType?: boolean
    documentNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReceiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "firstName" | "lastName" | "hyDocumentType" | "enDocumentType" | "ruDocumentType" | "documentNumber" | "address" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["receiver"]>
  export type ReceiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | Receiver$ordersArgs<ExtArgs>
    _count?: boolean | ReceiverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReceiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReceiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReceiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receiver"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string | null
      firstName: string | null
      lastName: string | null
      hyDocumentType: string | null
      enDocumentType: string | null
      ruDocumentType: string | null
      documentNumber: string | null
      address: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["receiver"]>
    composites: {}
  }

  type ReceiverGetPayload<S extends boolean | null | undefined | ReceiverDefaultArgs> = $Result.GetResult<Prisma.$ReceiverPayload, S>

  type ReceiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiverCountAggregateInputType | true
    }

  export interface ReceiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receiver'], meta: { name: 'Receiver' } }
    /**
     * Find zero or one Receiver that matches the filter.
     * @param {ReceiverFindUniqueArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiverFindUniqueArgs>(args: SelectSubset<T, ReceiverFindUniqueArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiverFindUniqueOrThrowArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiverFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverFindFirstArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiverFindFirstArgs>(args?: SelectSubset<T, ReceiverFindFirstArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverFindFirstOrThrowArgs} args - Arguments to find a Receiver
     * @example
     * // Get one Receiver
     * const receiver = await prisma.receiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiverFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receivers
     * const receivers = await prisma.receiver.findMany()
     * 
     * // Get first 10 Receivers
     * const receivers = await prisma.receiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiverWithIdOnly = await prisma.receiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiverFindManyArgs>(args?: SelectSubset<T, ReceiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receiver.
     * @param {ReceiverCreateArgs} args - Arguments to create a Receiver.
     * @example
     * // Create one Receiver
     * const Receiver = await prisma.receiver.create({
     *   data: {
     *     // ... data to create a Receiver
     *   }
     * })
     * 
     */
    create<T extends ReceiverCreateArgs>(args: SelectSubset<T, ReceiverCreateArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receivers.
     * @param {ReceiverCreateManyArgs} args - Arguments to create many Receivers.
     * @example
     * // Create many Receivers
     * const receiver = await prisma.receiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiverCreateManyArgs>(args?: SelectSubset<T, ReceiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receivers and returns the data saved in the database.
     * @param {ReceiverCreateManyAndReturnArgs} args - Arguments to create many Receivers.
     * @example
     * // Create many Receivers
     * const receiver = await prisma.receiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receivers and only return the `id`
     * const receiverWithIdOnly = await prisma.receiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiverCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receiver.
     * @param {ReceiverDeleteArgs} args - Arguments to delete one Receiver.
     * @example
     * // Delete one Receiver
     * const Receiver = await prisma.receiver.delete({
     *   where: {
     *     // ... filter to delete one Receiver
     *   }
     * })
     * 
     */
    delete<T extends ReceiverDeleteArgs>(args: SelectSubset<T, ReceiverDeleteArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receiver.
     * @param {ReceiverUpdateArgs} args - Arguments to update one Receiver.
     * @example
     * // Update one Receiver
     * const receiver = await prisma.receiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiverUpdateArgs>(args: SelectSubset<T, ReceiverUpdateArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receivers.
     * @param {ReceiverDeleteManyArgs} args - Arguments to filter Receivers to delete.
     * @example
     * // Delete a few Receivers
     * const { count } = await prisma.receiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiverDeleteManyArgs>(args?: SelectSubset<T, ReceiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receivers
     * const receiver = await prisma.receiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiverUpdateManyArgs>(args: SelectSubset<T, ReceiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receivers and returns the data updated in the database.
     * @param {ReceiverUpdateManyAndReturnArgs} args - Arguments to update many Receivers.
     * @example
     * // Update many Receivers
     * const receiver = await prisma.receiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receivers and only return the `id`
     * const receiverWithIdOnly = await prisma.receiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceiverUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receiver.
     * @param {ReceiverUpsertArgs} args - Arguments to update or create a Receiver.
     * @example
     * // Update or create a Receiver
     * const receiver = await prisma.receiver.upsert({
     *   create: {
     *     // ... data to create a Receiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receiver we want to update
     *   }
     * })
     */
    upsert<T extends ReceiverUpsertArgs>(args: SelectSubset<T, ReceiverUpsertArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverCountArgs} args - Arguments to filter Receivers to count.
     * @example
     * // Count the number of Receivers
     * const count = await prisma.receiver.count({
     *   where: {
     *     // ... the filter for the Receivers we want to count
     *   }
     * })
    **/
    count<T extends ReceiverCountArgs>(
      args?: Subset<T, ReceiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiverAggregateArgs>(args: Subset<T, ReceiverAggregateArgs>): Prisma.PrismaPromise<GetReceiverAggregateType<T>>

    /**
     * Group by Receiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiverGroupByArgs['orderBy'] }
        : { orderBy?: ReceiverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receiver model
   */
  readonly fields: ReceiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Receiver$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Receiver$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Receiver model
   */
  interface ReceiverFieldRefs {
    readonly id: FieldRef<"Receiver", 'String'>
    readonly userId: FieldRef<"Receiver", 'String'>
    readonly code: FieldRef<"Receiver", 'String'>
    readonly firstName: FieldRef<"Receiver", 'String'>
    readonly lastName: FieldRef<"Receiver", 'String'>
    readonly hyDocumentType: FieldRef<"Receiver", 'String'>
    readonly enDocumentType: FieldRef<"Receiver", 'String'>
    readonly ruDocumentType: FieldRef<"Receiver", 'String'>
    readonly documentNumber: FieldRef<"Receiver", 'String'>
    readonly address: FieldRef<"Receiver", 'String'>
    readonly phoneNumber: FieldRef<"Receiver", 'String'>
    readonly createdAt: FieldRef<"Receiver", 'DateTime'>
    readonly updatedAt: FieldRef<"Receiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receiver findUnique
   */
  export type ReceiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver findUniqueOrThrow
   */
  export type ReceiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver findFirst
   */
  export type ReceiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receivers.
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivers.
     */
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver findFirstOrThrow
   */
  export type ReceiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receiver to fetch.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receivers.
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivers.
     */
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver findMany
   */
  export type ReceiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter, which Receivers to fetch.
     */
    where?: ReceiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivers to fetch.
     */
    orderBy?: ReceiverOrderByWithRelationInput | ReceiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receivers.
     */
    cursor?: ReceiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivers.
     */
    distinct?: ReceiverScalarFieldEnum | ReceiverScalarFieldEnum[]
  }

  /**
   * Receiver create
   */
  export type ReceiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to create a Receiver.
     */
    data: XOR<ReceiverCreateInput, ReceiverUncheckedCreateInput>
  }

  /**
   * Receiver createMany
   */
  export type ReceiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receivers.
     */
    data: ReceiverCreateManyInput | ReceiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receiver createManyAndReturn
   */
  export type ReceiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * The data used to create many Receivers.
     */
    data: ReceiverCreateManyInput | ReceiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receiver update
   */
  export type ReceiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * The data needed to update a Receiver.
     */
    data: XOR<ReceiverUpdateInput, ReceiverUncheckedUpdateInput>
    /**
     * Choose, which Receiver to update.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver updateMany
   */
  export type ReceiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receivers.
     */
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Receivers to update
     */
    where?: ReceiverWhereInput
    /**
     * Limit how many Receivers to update.
     */
    limit?: number
  }

  /**
   * Receiver updateManyAndReturn
   */
  export type ReceiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * The data used to update Receivers.
     */
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyInput>
    /**
     * Filter which Receivers to update
     */
    where?: ReceiverWhereInput
    /**
     * Limit how many Receivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receiver upsert
   */
  export type ReceiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * The filter to search for the Receiver to update in case it exists.
     */
    where: ReceiverWhereUniqueInput
    /**
     * In case the Receiver found by the `where` argument doesn't exist, create a new Receiver with this data.
     */
    create: XOR<ReceiverCreateInput, ReceiverUncheckedCreateInput>
    /**
     * In case the Receiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiverUpdateInput, ReceiverUncheckedUpdateInput>
  }

  /**
   * Receiver delete
   */
  export type ReceiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    /**
     * Filter which Receiver to delete.
     */
    where: ReceiverWhereUniqueInput
  }

  /**
   * Receiver deleteMany
   */
  export type ReceiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receivers to delete
     */
    where?: ReceiverWhereInput
    /**
     * Limit how many Receivers to delete.
     */
    limit?: number
  }

  /**
   * Receiver.orders
   */
  export type Receiver$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Receiver without action
   */
  export type ReceiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    hyName: string | null
    ruName: string | null
    enName: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    hyName: string | null
    ruName: string | null
    enName: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    hyName: number
    ruName: number
    enName: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    hyName?: true
    ruName?: true
    enName?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    hyName?: true
    ruName?: true
    enName?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    hyName?: true
    ruName?: true
    enName?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    hyName: string | null
    ruName: string | null
    enName: string | null
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hyName?: boolean
    ruName?: boolean
    enName?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    offices?: boolean | Country$officesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hyName?: boolean
    ruName?: boolean
    enName?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hyName?: boolean
    ruName?: boolean
    enName?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    hyName?: boolean
    ruName?: boolean
    enName?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hyName" | "ruName" | "enName" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offices?: boolean | Country$officesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      offices: Prisma.$OfficePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hyName: string | null
      ruName: string | null
      enName: string | null
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offices<T extends Country$officesArgs<ExtArgs> = {}>(args?: Subset<T, Country$officesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly hyName: FieldRef<"Country", 'String'>
    readonly ruName: FieldRef<"Country", 'String'>
    readonly enName: FieldRef<"Country", 'String'>
    readonly icon: FieldRef<"Country", 'String'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
    readonly updatedAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.offices
   */
  export type Country$officesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    where?: OfficeWhereInput
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    cursor?: OfficeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Office
   */

  export type AggregateOffice = {
    _count: OfficeCountAggregateOutputType | null
    _min: OfficeMinAggregateOutputType | null
    _max: OfficeMaxAggregateOutputType | null
  }

  export type OfficeMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    province: string | null
    city: string | null
    postalCode: string | null
    fullAddress: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    province: string | null
    city: string | null
    postalCode: string | null
    fullAddress: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeCountAggregateOutputType = {
    id: number
    countryId: number
    province: number
    city: number
    postalCode: number
    fullAddress: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfficeMinAggregateInputType = {
    id?: true
    countryId?: true
    province?: true
    city?: true
    postalCode?: true
    fullAddress?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeMaxAggregateInputType = {
    id?: true
    countryId?: true
    province?: true
    city?: true
    postalCode?: true
    fullAddress?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeCountAggregateInputType = {
    id?: true
    countryId?: true
    province?: true
    city?: true
    postalCode?: true
    fullAddress?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfficeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Office to aggregate.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offices
    **/
    _count?: true | OfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeMaxAggregateInputType
  }

  export type GetOfficeAggregateType<T extends OfficeAggregateArgs> = {
        [P in keyof T & keyof AggregateOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffice[P]>
      : GetScalarType<T[P], AggregateOffice[P]>
  }




  export type OfficeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeWhereInput
    orderBy?: OfficeOrderByWithAggregationInput | OfficeOrderByWithAggregationInput[]
    by: OfficeScalarFieldEnum[] | OfficeScalarFieldEnum
    having?: OfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeCountAggregateInputType | true
    _min?: OfficeMinAggregateInputType
    _max?: OfficeMaxAggregateInputType
  }

  export type OfficeGroupByOutputType = {
    id: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: OfficeCountAggregateOutputType | null
    _min: OfficeMinAggregateOutputType | null
    _max: OfficeMaxAggregateOutputType | null
  }

  type GetOfficeGroupByPayload<T extends OfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeGroupByOutputType[P]>
            : GetScalarType<T[P], OfficeGroupByOutputType[P]>
        }
      >
    >


  export type OfficeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    province?: boolean
    city?: boolean
    postalCode?: boolean
    fullAddress?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    operators?: boolean | Office$operatorsArgs<ExtArgs>
    ordersFrom?: boolean | Office$ordersFromArgs<ExtArgs>
    ordersTo?: boolean | Office$ordersToArgs<ExtArgs>
    outgoingTariffs?: boolean | Office$outgoingTariffsArgs<ExtArgs>
    incomingTariffs?: boolean | Office$incomingTariffsArgs<ExtArgs>
    _count?: boolean | OfficeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["office"]>

  export type OfficeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    province?: boolean
    city?: boolean
    postalCode?: boolean
    fullAddress?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["office"]>

  export type OfficeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    province?: boolean
    city?: boolean
    postalCode?: boolean
    fullAddress?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["office"]>

  export type OfficeSelectScalar = {
    id?: boolean
    countryId?: boolean
    province?: boolean
    city?: boolean
    postalCode?: boolean
    fullAddress?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OfficeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryId" | "province" | "city" | "postalCode" | "fullAddress" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["office"]>
  export type OfficeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    operators?: boolean | Office$operatorsArgs<ExtArgs>
    ordersFrom?: boolean | Office$ordersFromArgs<ExtArgs>
    ordersTo?: boolean | Office$ordersToArgs<ExtArgs>
    outgoingTariffs?: boolean | Office$outgoingTariffsArgs<ExtArgs>
    incomingTariffs?: boolean | Office$incomingTariffsArgs<ExtArgs>
    _count?: boolean | OfficeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfficeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type OfficeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $OfficePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Office"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      operators: Prisma.$UserPayload<ExtArgs>[]
      ordersFrom: Prisma.$OrderPayload<ExtArgs>[]
      ordersTo: Prisma.$OrderPayload<ExtArgs>[]
      outgoingTariffs: Prisma.$TariffPayload<ExtArgs>[]
      incomingTariffs: Prisma.$TariffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryId: string
      province: string
      city: string
      postalCode: string
      fullAddress: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["office"]>
    composites: {}
  }

  type OfficeGetPayload<S extends boolean | null | undefined | OfficeDefaultArgs> = $Result.GetResult<Prisma.$OfficePayload, S>

  type OfficeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficeCountAggregateInputType | true
    }

  export interface OfficeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Office'], meta: { name: 'Office' } }
    /**
     * Find zero or one Office that matches the filter.
     * @param {OfficeFindUniqueArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficeFindUniqueArgs>(args: SelectSubset<T, OfficeFindUniqueArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Office that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficeFindUniqueOrThrowArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficeFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Office that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindFirstArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficeFindFirstArgs>(args?: SelectSubset<T, OfficeFindFirstArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Office that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindFirstOrThrowArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficeFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offices
     * const offices = await prisma.office.findMany()
     * 
     * // Get first 10 Offices
     * const offices = await prisma.office.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeWithIdOnly = await prisma.office.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficeFindManyArgs>(args?: SelectSubset<T, OfficeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Office.
     * @param {OfficeCreateArgs} args - Arguments to create a Office.
     * @example
     * // Create one Office
     * const Office = await prisma.office.create({
     *   data: {
     *     // ... data to create a Office
     *   }
     * })
     * 
     */
    create<T extends OfficeCreateArgs>(args: SelectSubset<T, OfficeCreateArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offices.
     * @param {OfficeCreateManyArgs} args - Arguments to create many Offices.
     * @example
     * // Create many Offices
     * const office = await prisma.office.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficeCreateManyArgs>(args?: SelectSubset<T, OfficeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offices and returns the data saved in the database.
     * @param {OfficeCreateManyAndReturnArgs} args - Arguments to create many Offices.
     * @example
     * // Create many Offices
     * const office = await prisma.office.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offices and only return the `id`
     * const officeWithIdOnly = await prisma.office.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficeCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Office.
     * @param {OfficeDeleteArgs} args - Arguments to delete one Office.
     * @example
     * // Delete one Office
     * const Office = await prisma.office.delete({
     *   where: {
     *     // ... filter to delete one Office
     *   }
     * })
     * 
     */
    delete<T extends OfficeDeleteArgs>(args: SelectSubset<T, OfficeDeleteArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Office.
     * @param {OfficeUpdateArgs} args - Arguments to update one Office.
     * @example
     * // Update one Office
     * const office = await prisma.office.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficeUpdateArgs>(args: SelectSubset<T, OfficeUpdateArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offices.
     * @param {OfficeDeleteManyArgs} args - Arguments to filter Offices to delete.
     * @example
     * // Delete a few Offices
     * const { count } = await prisma.office.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficeDeleteManyArgs>(args?: SelectSubset<T, OfficeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offices
     * const office = await prisma.office.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficeUpdateManyArgs>(args: SelectSubset<T, OfficeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offices and returns the data updated in the database.
     * @param {OfficeUpdateManyAndReturnArgs} args - Arguments to update many Offices.
     * @example
     * // Update many Offices
     * const office = await prisma.office.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offices and only return the `id`
     * const officeWithIdOnly = await prisma.office.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfficeUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Office.
     * @param {OfficeUpsertArgs} args - Arguments to update or create a Office.
     * @example
     * // Update or create a Office
     * const office = await prisma.office.upsert({
     *   create: {
     *     // ... data to create a Office
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Office we want to update
     *   }
     * })
     */
    upsert<T extends OfficeUpsertArgs>(args: SelectSubset<T, OfficeUpsertArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeCountArgs} args - Arguments to filter Offices to count.
     * @example
     * // Count the number of Offices
     * const count = await prisma.office.count({
     *   where: {
     *     // ... the filter for the Offices we want to count
     *   }
     * })
    **/
    count<T extends OfficeCountArgs>(
      args?: Subset<T, OfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Office.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfficeAggregateArgs>(args: Subset<T, OfficeAggregateArgs>): Prisma.PrismaPromise<GetOfficeAggregateType<T>>

    /**
     * Group by Office.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeGroupByArgs['orderBy'] }
        : { orderBy?: OfficeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Office model
   */
  readonly fields: OfficeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Office.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operators<T extends Office$operatorsArgs<ExtArgs> = {}>(args?: Subset<T, Office$operatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersFrom<T extends Office$ordersFromArgs<ExtArgs> = {}>(args?: Subset<T, Office$ordersFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersTo<T extends Office$ordersToArgs<ExtArgs> = {}>(args?: Subset<T, Office$ordersToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outgoingTariffs<T extends Office$outgoingTariffsArgs<ExtArgs> = {}>(args?: Subset<T, Office$outgoingTariffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingTariffs<T extends Office$incomingTariffsArgs<ExtArgs> = {}>(args?: Subset<T, Office$incomingTariffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Office model
   */
  interface OfficeFieldRefs {
    readonly id: FieldRef<"Office", 'String'>
    readonly countryId: FieldRef<"Office", 'String'>
    readonly province: FieldRef<"Office", 'String'>
    readonly city: FieldRef<"Office", 'String'>
    readonly postalCode: FieldRef<"Office", 'String'>
    readonly fullAddress: FieldRef<"Office", 'String'>
    readonly phone: FieldRef<"Office", 'String'>
    readonly createdAt: FieldRef<"Office", 'DateTime'>
    readonly updatedAt: FieldRef<"Office", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Office findUnique
   */
  export type OfficeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office findUniqueOrThrow
   */
  export type OfficeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office findFirst
   */
  export type OfficeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office findFirstOrThrow
   */
  export type OfficeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office findMany
   */
  export type OfficeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Offices to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office create
   */
  export type OfficeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * The data needed to create a Office.
     */
    data: XOR<OfficeCreateInput, OfficeUncheckedCreateInput>
  }

  /**
   * Office createMany
   */
  export type OfficeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offices.
     */
    data: OfficeCreateManyInput | OfficeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Office createManyAndReturn
   */
  export type OfficeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The data used to create many Offices.
     */
    data: OfficeCreateManyInput | OfficeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Office update
   */
  export type OfficeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * The data needed to update a Office.
     */
    data: XOR<OfficeUpdateInput, OfficeUncheckedUpdateInput>
    /**
     * Choose, which Office to update.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office updateMany
   */
  export type OfficeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offices.
     */
    data: XOR<OfficeUpdateManyMutationInput, OfficeUncheckedUpdateManyInput>
    /**
     * Filter which Offices to update
     */
    where?: OfficeWhereInput
    /**
     * Limit how many Offices to update.
     */
    limit?: number
  }

  /**
   * Office updateManyAndReturn
   */
  export type OfficeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * The data used to update Offices.
     */
    data: XOR<OfficeUpdateManyMutationInput, OfficeUncheckedUpdateManyInput>
    /**
     * Filter which Offices to update
     */
    where?: OfficeWhereInput
    /**
     * Limit how many Offices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Office upsert
   */
  export type OfficeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * The filter to search for the Office to update in case it exists.
     */
    where: OfficeWhereUniqueInput
    /**
     * In case the Office found by the `where` argument doesn't exist, create a new Office with this data.
     */
    create: XOR<OfficeCreateInput, OfficeUncheckedCreateInput>
    /**
     * In case the Office was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeUpdateInput, OfficeUncheckedUpdateInput>
  }

  /**
   * Office delete
   */
  export type OfficeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter which Office to delete.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office deleteMany
   */
  export type OfficeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offices to delete
     */
    where?: OfficeWhereInput
    /**
     * Limit how many Offices to delete.
     */
    limit?: number
  }

  /**
   * Office.operators
   */
  export type Office$operatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Office.ordersFrom
   */
  export type Office$ordersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Office.ordersTo
   */
  export type Office$ordersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Office.outgoingTariffs
   */
  export type Office$outgoingTariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    where?: TariffWhereInput
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    cursor?: TariffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Office.incomingTariffs
   */
  export type Office$incomingTariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    where?: TariffWhereInput
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    cursor?: TariffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Office without action
   */
  export type OfficeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Office
     */
    omit?: OfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
  }


  /**
   * Model Tariff
   */

  export type AggregateTariff = {
    _count: TariffCountAggregateOutputType | null
    _avg: TariffAvgAggregateOutputType | null
    _sum: TariffSumAggregateOutputType | null
    _min: TariffMinAggregateOutputType | null
    _max: TariffMaxAggregateOutputType | null
  }

  export type TariffAvgAggregateOutputType = {
    pricePerKg: Decimal | null
  }

  export type TariffSumAggregateOutputType = {
    pricePerKg: Decimal | null
  }

  export type TariffMinAggregateOutputType = {
    id: string | null
    fromOfficeId: string | null
    toOfficeId: string | null
    pricePerKg: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffMaxAggregateOutputType = {
    id: string | null
    fromOfficeId: string | null
    toOfficeId: string | null
    pricePerKg: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffCountAggregateOutputType = {
    id: number
    fromOfficeId: number
    toOfficeId: number
    pricePerKg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TariffAvgAggregateInputType = {
    pricePerKg?: true
  }

  export type TariffSumAggregateInputType = {
    pricePerKg?: true
  }

  export type TariffMinAggregateInputType = {
    id?: true
    fromOfficeId?: true
    toOfficeId?: true
    pricePerKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffMaxAggregateInputType = {
    id?: true
    fromOfficeId?: true
    toOfficeId?: true
    pricePerKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffCountAggregateInputType = {
    id?: true
    fromOfficeId?: true
    toOfficeId?: true
    pricePerKg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TariffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tariff to aggregate.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tariffs
    **/
    _count?: true | TariffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffMaxAggregateInputType
  }

  export type GetTariffAggregateType<T extends TariffAggregateArgs> = {
        [P in keyof T & keyof AggregateTariff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariff[P]>
      : GetScalarType<T[P], AggregateTariff[P]>
  }




  export type TariffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffWhereInput
    orderBy?: TariffOrderByWithAggregationInput | TariffOrderByWithAggregationInput[]
    by: TariffScalarFieldEnum[] | TariffScalarFieldEnum
    having?: TariffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffCountAggregateInputType | true
    _avg?: TariffAvgAggregateInputType
    _sum?: TariffSumAggregateInputType
    _min?: TariffMinAggregateInputType
    _max?: TariffMaxAggregateInputType
  }

  export type TariffGroupByOutputType = {
    id: string
    fromOfficeId: string
    toOfficeId: string
    pricePerKg: Decimal
    createdAt: Date
    updatedAt: Date
    _count: TariffCountAggregateOutputType | null
    _avg: TariffAvgAggregateOutputType | null
    _sum: TariffSumAggregateOutputType | null
    _min: TariffMinAggregateOutputType | null
    _max: TariffMaxAggregateOutputType | null
  }

  type GetTariffGroupByPayload<T extends TariffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffGroupByOutputType[P]>
            : GetScalarType<T[P], TariffGroupByOutputType[P]>
        }
      >
    >


  export type TariffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    pricePerKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariff"]>

  export type TariffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    pricePerKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariff"]>

  export type TariffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    pricePerKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariff"]>

  export type TariffSelectScalar = {
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    pricePerKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TariffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromOfficeId" | "toOfficeId" | "pricePerKg" | "createdAt" | "updatedAt", ExtArgs["result"]["tariff"]>
  export type TariffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
  }
  export type TariffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
  }
  export type TariffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
  }

  export type $TariffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tariff"
    objects: {
      fromOffice: Prisma.$OfficePayload<ExtArgs>
      toOffice: Prisma.$OfficePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromOfficeId: string
      toOfficeId: string
      pricePerKg: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tariff"]>
    composites: {}
  }

  type TariffGetPayload<S extends boolean | null | undefined | TariffDefaultArgs> = $Result.GetResult<Prisma.$TariffPayload, S>

  type TariffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TariffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TariffCountAggregateInputType | true
    }

  export interface TariffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tariff'], meta: { name: 'Tariff' } }
    /**
     * Find zero or one Tariff that matches the filter.
     * @param {TariffFindUniqueArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffFindUniqueArgs>(args: SelectSubset<T, TariffFindUniqueArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tariff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TariffFindUniqueOrThrowArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tariff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindFirstArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffFindFirstArgs>(args?: SelectSubset<T, TariffFindFirstArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tariff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindFirstOrThrowArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tariffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tariffs
     * const tariffs = await prisma.tariff.findMany()
     * 
     * // Get first 10 Tariffs
     * const tariffs = await prisma.tariff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffWithIdOnly = await prisma.tariff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TariffFindManyArgs>(args?: SelectSubset<T, TariffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tariff.
     * @param {TariffCreateArgs} args - Arguments to create a Tariff.
     * @example
     * // Create one Tariff
     * const Tariff = await prisma.tariff.create({
     *   data: {
     *     // ... data to create a Tariff
     *   }
     * })
     * 
     */
    create<T extends TariffCreateArgs>(args: SelectSubset<T, TariffCreateArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tariffs.
     * @param {TariffCreateManyArgs} args - Arguments to create many Tariffs.
     * @example
     * // Create many Tariffs
     * const tariff = await prisma.tariff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffCreateManyArgs>(args?: SelectSubset<T, TariffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tariffs and returns the data saved in the database.
     * @param {TariffCreateManyAndReturnArgs} args - Arguments to create many Tariffs.
     * @example
     * // Create many Tariffs
     * const tariff = await prisma.tariff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tariffs and only return the `id`
     * const tariffWithIdOnly = await prisma.tariff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TariffCreateManyAndReturnArgs>(args?: SelectSubset<T, TariffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tariff.
     * @param {TariffDeleteArgs} args - Arguments to delete one Tariff.
     * @example
     * // Delete one Tariff
     * const Tariff = await prisma.tariff.delete({
     *   where: {
     *     // ... filter to delete one Tariff
     *   }
     * })
     * 
     */
    delete<T extends TariffDeleteArgs>(args: SelectSubset<T, TariffDeleteArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tariff.
     * @param {TariffUpdateArgs} args - Arguments to update one Tariff.
     * @example
     * // Update one Tariff
     * const tariff = await prisma.tariff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffUpdateArgs>(args: SelectSubset<T, TariffUpdateArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tariffs.
     * @param {TariffDeleteManyArgs} args - Arguments to filter Tariffs to delete.
     * @example
     * // Delete a few Tariffs
     * const { count } = await prisma.tariff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffDeleteManyArgs>(args?: SelectSubset<T, TariffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tariffs
     * const tariff = await prisma.tariff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffUpdateManyArgs>(args: SelectSubset<T, TariffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tariffs and returns the data updated in the database.
     * @param {TariffUpdateManyAndReturnArgs} args - Arguments to update many Tariffs.
     * @example
     * // Update many Tariffs
     * const tariff = await prisma.tariff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tariffs and only return the `id`
     * const tariffWithIdOnly = await prisma.tariff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TariffUpdateManyAndReturnArgs>(args: SelectSubset<T, TariffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tariff.
     * @param {TariffUpsertArgs} args - Arguments to update or create a Tariff.
     * @example
     * // Update or create a Tariff
     * const tariff = await prisma.tariff.upsert({
     *   create: {
     *     // ... data to create a Tariff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tariff we want to update
     *   }
     * })
     */
    upsert<T extends TariffUpsertArgs>(args: SelectSubset<T, TariffUpsertArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffCountArgs} args - Arguments to filter Tariffs to count.
     * @example
     * // Count the number of Tariffs
     * const count = await prisma.tariff.count({
     *   where: {
     *     // ... the filter for the Tariffs we want to count
     *   }
     * })
    **/
    count<T extends TariffCountArgs>(
      args?: Subset<T, TariffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TariffAggregateArgs>(args: Subset<T, TariffAggregateArgs>): Prisma.PrismaPromise<GetTariffAggregateType<T>>

    /**
     * Group by Tariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TariffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffGroupByArgs['orderBy'] }
        : { orderBy?: TariffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TariffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tariff model
   */
  readonly fields: TariffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tariff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromOffice<T extends OfficeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficeDefaultArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toOffice<T extends OfficeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficeDefaultArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tariff model
   */
  interface TariffFieldRefs {
    readonly id: FieldRef<"Tariff", 'String'>
    readonly fromOfficeId: FieldRef<"Tariff", 'String'>
    readonly toOfficeId: FieldRef<"Tariff", 'String'>
    readonly pricePerKg: FieldRef<"Tariff", 'Decimal'>
    readonly createdAt: FieldRef<"Tariff", 'DateTime'>
    readonly updatedAt: FieldRef<"Tariff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tariff findUnique
   */
  export type TariffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff findUniqueOrThrow
   */
  export type TariffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff findFirst
   */
  export type TariffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Tariff findFirstOrThrow
   */
  export type TariffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Tariff findMany
   */
  export type TariffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tariffs.
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Tariff create
   */
  export type TariffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * The data needed to create a Tariff.
     */
    data: XOR<TariffCreateInput, TariffUncheckedCreateInput>
  }

  /**
   * Tariff createMany
   */
  export type TariffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tariffs.
     */
    data: TariffCreateManyInput | TariffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tariff createManyAndReturn
   */
  export type TariffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * The data used to create many Tariffs.
     */
    data: TariffCreateManyInput | TariffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tariff update
   */
  export type TariffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * The data needed to update a Tariff.
     */
    data: XOR<TariffUpdateInput, TariffUncheckedUpdateInput>
    /**
     * Choose, which Tariff to update.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff updateMany
   */
  export type TariffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tariffs.
     */
    data: XOR<TariffUpdateManyMutationInput, TariffUncheckedUpdateManyInput>
    /**
     * Filter which Tariffs to update
     */
    where?: TariffWhereInput
    /**
     * Limit how many Tariffs to update.
     */
    limit?: number
  }

  /**
   * Tariff updateManyAndReturn
   */
  export type TariffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * The data used to update Tariffs.
     */
    data: XOR<TariffUpdateManyMutationInput, TariffUncheckedUpdateManyInput>
    /**
     * Filter which Tariffs to update
     */
    where?: TariffWhereInput
    /**
     * Limit how many Tariffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tariff upsert
   */
  export type TariffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * The filter to search for the Tariff to update in case it exists.
     */
    where: TariffWhereUniqueInput
    /**
     * In case the Tariff found by the `where` argument doesn't exist, create a new Tariff with this data.
     */
    create: XOR<TariffCreateInput, TariffUncheckedCreateInput>
    /**
     * In case the Tariff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffUpdateInput, TariffUncheckedUpdateInput>
  }

  /**
   * Tariff delete
   */
  export type TariffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter which Tariff to delete.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff deleteMany
   */
  export type TariffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tariffs to delete
     */
    where?: TariffWhereInput
    /**
     * Limit how many Tariffs to delete.
     */
    limit?: number
  }

  /**
   * Tariff without action
   */
  export type TariffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariff
     */
    omit?: TariffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    productPrice: Decimal | null
    price: Decimal | null
    pieceCount: number | null
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
    tariffRateAtBooking: Decimal | null
    estimatedPrice: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    productPrice: Decimal | null
    price: Decimal | null
    pieceCount: number | null
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
    tariffRateAtBooking: Decimal | null
    estimatedPrice: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    fromOfficeId: string | null
    toOfficeId: string | null
    userId: string | null
    receiverId: string | null
    productPrice: Decimal | null
    price: Decimal | null
    pieceCount: number | null
    currency: $Enums.Currency | null
    marketName: string | null
    productDescription: string | null
    invoiceUrl: string | null
    comment: string | null
    tnVedCode: string | null
    isNew: boolean | null
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
    tariffRateAtBooking: Decimal | null
    estimatedPrice: Decimal | null
    estimatedById: string | null
    estimatedAt: Date | null
    qrCode: string | null
    trackingNumber: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    fromOfficeId: string | null
    toOfficeId: string | null
    userId: string | null
    receiverId: string | null
    productPrice: Decimal | null
    price: Decimal | null
    pieceCount: number | null
    currency: $Enums.Currency | null
    marketName: string | null
    productDescription: string | null
    invoiceUrl: string | null
    comment: string | null
    tnVedCode: string | null
    isNew: boolean | null
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
    tariffRateAtBooking: Decimal | null
    estimatedPrice: Decimal | null
    estimatedById: string | null
    estimatedAt: Date | null
    qrCode: string | null
    trackingNumber: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    fromOfficeId: number
    toOfficeId: number
    userId: number
    receiverId: number
    productPrice: number
    price: number
    pieceCount: number
    currency: number
    marketName: number
    productDescription: number
    invoiceUrl: number
    comment: number
    tnVedCode: number
    isNew: number
    weight: number
    length: number
    width: number
    height: number
    tariffRateAtBooking: number
    estimatedPrice: number
    estimatedById: number
    estimatedAt: number
    qrCode: number
    trackingNumber: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    productPrice?: true
    price?: true
    pieceCount?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    tariffRateAtBooking?: true
    estimatedPrice?: true
  }

  export type OrderSumAggregateInputType = {
    productPrice?: true
    price?: true
    pieceCount?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    tariffRateAtBooking?: true
    estimatedPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    fromOfficeId?: true
    toOfficeId?: true
    userId?: true
    receiverId?: true
    productPrice?: true
    price?: true
    pieceCount?: true
    currency?: true
    marketName?: true
    productDescription?: true
    invoiceUrl?: true
    comment?: true
    tnVedCode?: true
    isNew?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    tariffRateAtBooking?: true
    estimatedPrice?: true
    estimatedById?: true
    estimatedAt?: true
    qrCode?: true
    trackingNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    fromOfficeId?: true
    toOfficeId?: true
    userId?: true
    receiverId?: true
    productPrice?: true
    price?: true
    pieceCount?: true
    currency?: true
    marketName?: true
    productDescription?: true
    invoiceUrl?: true
    comment?: true
    tnVedCode?: true
    isNew?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    tariffRateAtBooking?: true
    estimatedPrice?: true
    estimatedById?: true
    estimatedAt?: true
    qrCode?: true
    trackingNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    fromOfficeId?: true
    toOfficeId?: true
    userId?: true
    receiverId?: true
    productPrice?: true
    price?: true
    pieceCount?: true
    currency?: true
    marketName?: true
    productDescription?: true
    invoiceUrl?: true
    comment?: true
    tnVedCode?: true
    isNew?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    tariffRateAtBooking?: true
    estimatedPrice?: true
    estimatedById?: true
    estimatedAt?: true
    qrCode?: true
    trackingNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    fromOfficeId: string
    toOfficeId: string
    userId: string | null
    receiverId: string | null
    productPrice: Decimal
    price: Decimal
    pieceCount: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl: string | null
    comment: string | null
    tnVedCode: string | null
    isNew: boolean
    weight: Decimal
    length: Decimal
    width: Decimal
    height: Decimal
    tariffRateAtBooking: Decimal | null
    estimatedPrice: Decimal | null
    estimatedById: string | null
    estimatedAt: Date | null
    qrCode: string | null
    trackingNumber: string
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    userId?: boolean
    receiverId?: boolean
    productPrice?: boolean
    price?: boolean
    pieceCount?: boolean
    currency?: boolean
    marketName?: boolean
    productDescription?: boolean
    invoiceUrl?: boolean
    comment?: boolean
    tnVedCode?: boolean
    isNew?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    tariffRateAtBooking?: boolean
    estimatedPrice?: boolean
    estimatedById?: boolean
    estimatedAt?: boolean
    qrCode?: boolean
    trackingNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estimatedBy?: boolean | Order$estimatedByArgs<ExtArgs>
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    receiver?: boolean | Order$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    userId?: boolean
    receiverId?: boolean
    productPrice?: boolean
    price?: boolean
    pieceCount?: boolean
    currency?: boolean
    marketName?: boolean
    productDescription?: boolean
    invoiceUrl?: boolean
    comment?: boolean
    tnVedCode?: boolean
    isNew?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    tariffRateAtBooking?: boolean
    estimatedPrice?: boolean
    estimatedById?: boolean
    estimatedAt?: boolean
    qrCode?: boolean
    trackingNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estimatedBy?: boolean | Order$estimatedByArgs<ExtArgs>
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    receiver?: boolean | Order$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    userId?: boolean
    receiverId?: boolean
    productPrice?: boolean
    price?: boolean
    pieceCount?: boolean
    currency?: boolean
    marketName?: boolean
    productDescription?: boolean
    invoiceUrl?: boolean
    comment?: boolean
    tnVedCode?: boolean
    isNew?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    tariffRateAtBooking?: boolean
    estimatedPrice?: boolean
    estimatedById?: boolean
    estimatedAt?: boolean
    qrCode?: boolean
    trackingNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estimatedBy?: boolean | Order$estimatedByArgs<ExtArgs>
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    receiver?: boolean | Order$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    fromOfficeId?: boolean
    toOfficeId?: boolean
    userId?: boolean
    receiverId?: boolean
    productPrice?: boolean
    price?: boolean
    pieceCount?: boolean
    currency?: boolean
    marketName?: boolean
    productDescription?: boolean
    invoiceUrl?: boolean
    comment?: boolean
    tnVedCode?: boolean
    isNew?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    tariffRateAtBooking?: boolean
    estimatedPrice?: boolean
    estimatedById?: boolean
    estimatedAt?: boolean
    qrCode?: boolean
    trackingNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromOfficeId" | "toOfficeId" | "userId" | "receiverId" | "productPrice" | "price" | "pieceCount" | "currency" | "marketName" | "productDescription" | "invoiceUrl" | "comment" | "tnVedCode" | "isNew" | "weight" | "length" | "width" | "height" | "tariffRateAtBooking" | "estimatedPrice" | "estimatedById" | "estimatedAt" | "qrCode" | "trackingNumber" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estimatedBy?: boolean | Order$estimatedByArgs<ExtArgs>
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    receiver?: boolean | Order$receiverArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estimatedBy?: boolean | Order$estimatedByArgs<ExtArgs>
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    receiver?: boolean | Order$receiverArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estimatedBy?: boolean | Order$estimatedByArgs<ExtArgs>
    fromOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    toOffice?: boolean | OfficeDefaultArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    receiver?: boolean | Order$receiverArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      estimatedBy: Prisma.$UserPayload<ExtArgs> | null
      fromOffice: Prisma.$OfficePayload<ExtArgs>
      toOffice: Prisma.$OfficePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      receiver: Prisma.$ReceiverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromOfficeId: string
      toOfficeId: string
      userId: string | null
      receiverId: string | null
      productPrice: Prisma.Decimal
      price: Prisma.Decimal
      pieceCount: number
      currency: $Enums.Currency
      marketName: string
      productDescription: string
      invoiceUrl: string | null
      comment: string | null
      tnVedCode: string | null
      isNew: boolean
      weight: Prisma.Decimal
      length: Prisma.Decimal
      width: Prisma.Decimal
      height: Prisma.Decimal
      tariffRateAtBooking: Prisma.Decimal | null
      estimatedPrice: Prisma.Decimal | null
      estimatedById: string | null
      estimatedAt: Date | null
      qrCode: string | null
      trackingNumber: string
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estimatedBy<T extends Order$estimatedByArgs<ExtArgs> = {}>(args?: Subset<T, Order$estimatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fromOffice<T extends OfficeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficeDefaultArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toOffice<T extends OfficeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficeDefaultArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receiver<T extends Order$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Order$receiverArgs<ExtArgs>>): Prisma__ReceiverClient<$Result.GetResult<Prisma.$ReceiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly fromOfficeId: FieldRef<"Order", 'String'>
    readonly toOfficeId: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly receiverId: FieldRef<"Order", 'String'>
    readonly productPrice: FieldRef<"Order", 'Decimal'>
    readonly price: FieldRef<"Order", 'Decimal'>
    readonly pieceCount: FieldRef<"Order", 'Int'>
    readonly currency: FieldRef<"Order", 'Currency'>
    readonly marketName: FieldRef<"Order", 'String'>
    readonly productDescription: FieldRef<"Order", 'String'>
    readonly invoiceUrl: FieldRef<"Order", 'String'>
    readonly comment: FieldRef<"Order", 'String'>
    readonly tnVedCode: FieldRef<"Order", 'String'>
    readonly isNew: FieldRef<"Order", 'Boolean'>
    readonly weight: FieldRef<"Order", 'Decimal'>
    readonly length: FieldRef<"Order", 'Decimal'>
    readonly width: FieldRef<"Order", 'Decimal'>
    readonly height: FieldRef<"Order", 'Decimal'>
    readonly tariffRateAtBooking: FieldRef<"Order", 'Decimal'>
    readonly estimatedPrice: FieldRef<"Order", 'Decimal'>
    readonly estimatedById: FieldRef<"Order", 'String'>
    readonly estimatedAt: FieldRef<"Order", 'DateTime'>
    readonly qrCode: FieldRef<"Order", 'String'>
    readonly trackingNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.estimatedBy
   */
  export type Order$estimatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.receiver
   */
  export type Order$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receiver
     */
    select?: ReceiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receiver
     */
    omit?: ReceiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiverInclude<ExtArgs> | null
    where?: ReceiverWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SystemSettingScalarFieldEnum: {
    id: 'id',
    volumetricDivisor: 'volumetricDivisor'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    isIndividual: 'isIndividual',
    isSupporter: 'isSupporter',
    hyDocumentType: 'hyDocumentType',
    enDocumentType: 'enDocumentType',
    ruDocumentType: 'ruDocumentType',
    documentNumber: 'documentNumber',
    companyName: 'companyName',
    taxpayerId: 'taxpayerId',
    address: 'address',
    phoneNumber: 'phoneNumber',
    telegramChatId: 'telegramChatId',
    code: 'code',
    role: 'role',
    status: 'status',
    officeId: 'officeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupportChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportChatScalarFieldEnum = (typeof SupportChatScalarFieldEnum)[keyof typeof SupportChatScalarFieldEnum]


  export const SupportMessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    senderType: 'senderType',
    senderId: 'senderId',
    text: 'text',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type SupportMessageScalarFieldEnum = (typeof SupportMessageScalarFieldEnum)[keyof typeof SupportMessageScalarFieldEnum]


  export const ReceiverScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    firstName: 'firstName',
    lastName: 'lastName',
    hyDocumentType: 'hyDocumentType',
    enDocumentType: 'enDocumentType',
    ruDocumentType: 'ruDocumentType',
    documentNumber: 'documentNumber',
    address: 'address',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReceiverScalarFieldEnum = (typeof ReceiverScalarFieldEnum)[keyof typeof ReceiverScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    hyName: 'hyName',
    ruName: 'ruName',
    enName: 'enName',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const OfficeScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    province: 'province',
    city: 'city',
    postalCode: 'postalCode',
    fullAddress: 'fullAddress',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfficeScalarFieldEnum = (typeof OfficeScalarFieldEnum)[keyof typeof OfficeScalarFieldEnum]


  export const TariffScalarFieldEnum: {
    id: 'id',
    fromOfficeId: 'fromOfficeId',
    toOfficeId: 'toOfficeId',
    pricePerKg: 'pricePerKg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TariffScalarFieldEnum = (typeof TariffScalarFieldEnum)[keyof typeof TariffScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    fromOfficeId: 'fromOfficeId',
    toOfficeId: 'toOfficeId',
    userId: 'userId',
    receiverId: 'receiverId',
    productPrice: 'productPrice',
    price: 'price',
    pieceCount: 'pieceCount',
    currency: 'currency',
    marketName: 'marketName',
    productDescription: 'productDescription',
    invoiceUrl: 'invoiceUrl',
    comment: 'comment',
    tnVedCode: 'tnVedCode',
    isNew: 'isNew',
    weight: 'weight',
    length: 'length',
    width: 'width',
    height: 'height',
    tariffRateAtBooking: 'tariffRateAtBooking',
    estimatedPrice: 'estimatedPrice',
    estimatedById: 'estimatedById',
    estimatedAt: 'estimatedAt',
    qrCode: 'qrCode',
    trackingNumber: 'trackingNumber',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ChatStatus'
   */
  export type EnumChatStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatStatus'>
    


  /**
   * Reference to a field of type 'ChatStatus[]'
   */
  export type ListEnumChatStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatStatus[]'>
    


  /**
   * Reference to a field of type 'SenderType'
   */
  export type EnumSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderType'>
    


  /**
   * Reference to a field of type 'SenderType[]'
   */
  export type ListEnumSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    id?: StringFilter<"SystemSetting"> | string
    volumetricDivisor?: IntFilter<"SystemSetting"> | number
  }

  export type SystemSettingOrderByWithRelationInput = {
    id?: SortOrder
    volumetricDivisor?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    volumetricDivisor?: IntFilter<"SystemSetting"> | number
  }, "id">

  export type SystemSettingOrderByWithAggregationInput = {
    id?: SortOrder
    volumetricDivisor?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _avg?: SystemSettingAvgOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
    _sum?: SystemSettingSumOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSetting"> | string
    volumetricDivisor?: IntWithAggregatesFilter<"SystemSetting"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isIndividual?: BoolFilter<"User"> | boolean
    isSupporter?: BoolFilter<"User"> | boolean
    hyDocumentType?: StringNullableFilter<"User"> | string | null
    enDocumentType?: StringNullableFilter<"User"> | string | null
    ruDocumentType?: StringNullableFilter<"User"> | string | null
    documentNumber?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    taxpayerId?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    code?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    officeId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    receivers?: ReceiverListRelationFilter
    orders?: OrderListRelationFilter
    estimatedOrders?: OrderListRelationFilter
    supportChat?: XOR<SupportChatNullableScalarRelationFilter, SupportChatWhereInput> | null
    office?: XOR<OfficeNullableScalarRelationFilter, OfficeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isIndividual?: SortOrder
    isSupporter?: SortOrder
    hyDocumentType?: SortOrderInput | SortOrder
    enDocumentType?: SortOrderInput | SortOrder
    ruDocumentType?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    taxpayerId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    officeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receivers?: ReceiverOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    estimatedOrders?: OrderOrderByRelationAggregateInput
    supportChat?: SupportChatOrderByWithRelationInput
    office?: OfficeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isIndividual?: BoolFilter<"User"> | boolean
    isSupporter?: BoolFilter<"User"> | boolean
    hyDocumentType?: StringNullableFilter<"User"> | string | null
    enDocumentType?: StringNullableFilter<"User"> | string | null
    ruDocumentType?: StringNullableFilter<"User"> | string | null
    documentNumber?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    taxpayerId?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    code?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    officeId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    receivers?: ReceiverListRelationFilter
    orders?: OrderListRelationFilter
    estimatedOrders?: OrderListRelationFilter
    supportChat?: XOR<SupportChatNullableScalarRelationFilter, SupportChatWhereInput> | null
    office?: XOR<OfficeNullableScalarRelationFilter, OfficeWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isIndividual?: SortOrder
    isSupporter?: SortOrder
    hyDocumentType?: SortOrderInput | SortOrder
    enDocumentType?: SortOrderInput | SortOrder
    ruDocumentType?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    taxpayerId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    officeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    isIndividual?: BoolWithAggregatesFilter<"User"> | boolean
    isSupporter?: BoolWithAggregatesFilter<"User"> | boolean
    hyDocumentType?: StringNullableWithAggregatesFilter<"User"> | string | null
    enDocumentType?: StringNullableWithAggregatesFilter<"User"> | string | null
    ruDocumentType?: StringNullableWithAggregatesFilter<"User"> | string | null
    documentNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    taxpayerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramChatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    code?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    officeId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SupportChatWhereInput = {
    AND?: SupportChatWhereInput | SupportChatWhereInput[]
    OR?: SupportChatWhereInput[]
    NOT?: SupportChatWhereInput | SupportChatWhereInput[]
    id?: StringFilter<"SupportChat"> | string
    userId?: StringFilter<"SupportChat"> | string
    status?: EnumChatStatusFilter<"SupportChat"> | $Enums.ChatStatus
    createdAt?: DateTimeFilter<"SupportChat"> | Date | string
    updatedAt?: DateTimeFilter<"SupportChat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: SupportMessageListRelationFilter
  }

  export type SupportChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: SupportMessageOrderByRelationAggregateInput
  }

  export type SupportChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SupportChatWhereInput | SupportChatWhereInput[]
    OR?: SupportChatWhereInput[]
    NOT?: SupportChatWhereInput | SupportChatWhereInput[]
    status?: EnumChatStatusFilter<"SupportChat"> | $Enums.ChatStatus
    createdAt?: DateTimeFilter<"SupportChat"> | Date | string
    updatedAt?: DateTimeFilter<"SupportChat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: SupportMessageListRelationFilter
  }, "id" | "userId">

  export type SupportChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportChatCountOrderByAggregateInput
    _max?: SupportChatMaxOrderByAggregateInput
    _min?: SupportChatMinOrderByAggregateInput
  }

  export type SupportChatScalarWhereWithAggregatesInput = {
    AND?: SupportChatScalarWhereWithAggregatesInput | SupportChatScalarWhereWithAggregatesInput[]
    OR?: SupportChatScalarWhereWithAggregatesInput[]
    NOT?: SupportChatScalarWhereWithAggregatesInput | SupportChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportChat"> | string
    userId?: StringWithAggregatesFilter<"SupportChat"> | string
    status?: EnumChatStatusWithAggregatesFilter<"SupportChat"> | $Enums.ChatStatus
    createdAt?: DateTimeWithAggregatesFilter<"SupportChat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportChat"> | Date | string
  }

  export type SupportMessageWhereInput = {
    AND?: SupportMessageWhereInput | SupportMessageWhereInput[]
    OR?: SupportMessageWhereInput[]
    NOT?: SupportMessageWhereInput | SupportMessageWhereInput[]
    id?: StringFilter<"SupportMessage"> | string
    chatId?: StringFilter<"SupportMessage"> | string
    senderType?: EnumSenderTypeFilter<"SupportMessage"> | $Enums.SenderType
    senderId?: StringFilter<"SupportMessage"> | string
    text?: StringFilter<"SupportMessage"> | string
    isRead?: BoolFilter<"SupportMessage"> | boolean
    createdAt?: DateTimeFilter<"SupportMessage"> | Date | string
    chat?: XOR<SupportChatScalarRelationFilter, SupportChatWhereInput>
  }

  export type SupportMessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    chat?: SupportChatOrderByWithRelationInput
  }

  export type SupportMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportMessageWhereInput | SupportMessageWhereInput[]
    OR?: SupportMessageWhereInput[]
    NOT?: SupportMessageWhereInput | SupportMessageWhereInput[]
    chatId?: StringFilter<"SupportMessage"> | string
    senderType?: EnumSenderTypeFilter<"SupportMessage"> | $Enums.SenderType
    senderId?: StringFilter<"SupportMessage"> | string
    text?: StringFilter<"SupportMessage"> | string
    isRead?: BoolFilter<"SupportMessage"> | boolean
    createdAt?: DateTimeFilter<"SupportMessage"> | Date | string
    chat?: XOR<SupportChatScalarRelationFilter, SupportChatWhereInput>
  }, "id">

  export type SupportMessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: SupportMessageCountOrderByAggregateInput
    _max?: SupportMessageMaxOrderByAggregateInput
    _min?: SupportMessageMinOrderByAggregateInput
  }

  export type SupportMessageScalarWhereWithAggregatesInput = {
    AND?: SupportMessageScalarWhereWithAggregatesInput | SupportMessageScalarWhereWithAggregatesInput[]
    OR?: SupportMessageScalarWhereWithAggregatesInput[]
    NOT?: SupportMessageScalarWhereWithAggregatesInput | SupportMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportMessage"> | string
    chatId?: StringWithAggregatesFilter<"SupportMessage"> | string
    senderType?: EnumSenderTypeWithAggregatesFilter<"SupportMessage"> | $Enums.SenderType
    senderId?: StringWithAggregatesFilter<"SupportMessage"> | string
    text?: StringWithAggregatesFilter<"SupportMessage"> | string
    isRead?: BoolWithAggregatesFilter<"SupportMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SupportMessage"> | Date | string
  }

  export type ReceiverWhereInput = {
    AND?: ReceiverWhereInput | ReceiverWhereInput[]
    OR?: ReceiverWhereInput[]
    NOT?: ReceiverWhereInput | ReceiverWhereInput[]
    id?: StringFilter<"Receiver"> | string
    userId?: StringFilter<"Receiver"> | string
    code?: StringNullableFilter<"Receiver"> | string | null
    firstName?: StringNullableFilter<"Receiver"> | string | null
    lastName?: StringNullableFilter<"Receiver"> | string | null
    hyDocumentType?: StringNullableFilter<"Receiver"> | string | null
    enDocumentType?: StringNullableFilter<"Receiver"> | string | null
    ruDocumentType?: StringNullableFilter<"Receiver"> | string | null
    documentNumber?: StringNullableFilter<"Receiver"> | string | null
    address?: StringNullableFilter<"Receiver"> | string | null
    phoneNumber?: StringNullableFilter<"Receiver"> | string | null
    createdAt?: DateTimeFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
  }

  export type ReceiverOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    hyDocumentType?: SortOrderInput | SortOrder
    enDocumentType?: SortOrderInput | SortOrder
    ruDocumentType?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ReceiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceiverWhereInput | ReceiverWhereInput[]
    OR?: ReceiverWhereInput[]
    NOT?: ReceiverWhereInput | ReceiverWhereInput[]
    userId?: StringFilter<"Receiver"> | string
    code?: StringNullableFilter<"Receiver"> | string | null
    firstName?: StringNullableFilter<"Receiver"> | string | null
    lastName?: StringNullableFilter<"Receiver"> | string | null
    hyDocumentType?: StringNullableFilter<"Receiver"> | string | null
    enDocumentType?: StringNullableFilter<"Receiver"> | string | null
    ruDocumentType?: StringNullableFilter<"Receiver"> | string | null
    documentNumber?: StringNullableFilter<"Receiver"> | string | null
    address?: StringNullableFilter<"Receiver"> | string | null
    phoneNumber?: StringNullableFilter<"Receiver"> | string | null
    createdAt?: DateTimeFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type ReceiverOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    hyDocumentType?: SortOrderInput | SortOrder
    enDocumentType?: SortOrderInput | SortOrder
    ruDocumentType?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReceiverCountOrderByAggregateInput
    _max?: ReceiverMaxOrderByAggregateInput
    _min?: ReceiverMinOrderByAggregateInput
  }

  export type ReceiverScalarWhereWithAggregatesInput = {
    AND?: ReceiverScalarWhereWithAggregatesInput | ReceiverScalarWhereWithAggregatesInput[]
    OR?: ReceiverScalarWhereWithAggregatesInput[]
    NOT?: ReceiverScalarWhereWithAggregatesInput | ReceiverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Receiver"> | string
    userId?: StringWithAggregatesFilter<"Receiver"> | string
    code?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    hyDocumentType?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    enDocumentType?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    ruDocumentType?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    documentNumber?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    address?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Receiver"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Receiver"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    hyName?: StringNullableFilter<"Country"> | string | null
    ruName?: StringNullableFilter<"Country"> | string | null
    enName?: StringNullableFilter<"Country"> | string | null
    icon?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    offices?: OfficeListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    hyName?: SortOrderInput | SortOrder
    ruName?: SortOrderInput | SortOrder
    enName?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    offices?: OfficeOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    hyName?: StringNullableFilter<"Country"> | string | null
    ruName?: StringNullableFilter<"Country"> | string | null
    enName?: StringNullableFilter<"Country"> | string | null
    icon?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    offices?: OfficeListRelationFilter
  }, "id">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    hyName?: SortOrderInput | SortOrder
    ruName?: SortOrderInput | SortOrder
    enName?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    hyName?: StringNullableWithAggregatesFilter<"Country"> | string | null
    ruName?: StringNullableWithAggregatesFilter<"Country"> | string | null
    enName?: StringNullableWithAggregatesFilter<"Country"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Country"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type OfficeWhereInput = {
    AND?: OfficeWhereInput | OfficeWhereInput[]
    OR?: OfficeWhereInput[]
    NOT?: OfficeWhereInput | OfficeWhereInput[]
    id?: StringFilter<"Office"> | string
    countryId?: StringFilter<"Office"> | string
    province?: StringFilter<"Office"> | string
    city?: StringFilter<"Office"> | string
    postalCode?: StringFilter<"Office"> | string
    fullAddress?: StringFilter<"Office"> | string
    phone?: StringFilter<"Office"> | string
    createdAt?: DateTimeFilter<"Office"> | Date | string
    updatedAt?: DateTimeFilter<"Office"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    operators?: UserListRelationFilter
    ordersFrom?: OrderListRelationFilter
    ordersTo?: OrderListRelationFilter
    outgoingTariffs?: TariffListRelationFilter
    incomingTariffs?: TariffListRelationFilter
  }

  export type OfficeOrderByWithRelationInput = {
    id?: SortOrder
    countryId?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    fullAddress?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    operators?: UserOrderByRelationAggregateInput
    ordersFrom?: OrderOrderByRelationAggregateInput
    ordersTo?: OrderOrderByRelationAggregateInput
    outgoingTariffs?: TariffOrderByRelationAggregateInput
    incomingTariffs?: TariffOrderByRelationAggregateInput
  }

  export type OfficeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfficeWhereInput | OfficeWhereInput[]
    OR?: OfficeWhereInput[]
    NOT?: OfficeWhereInput | OfficeWhereInput[]
    countryId?: StringFilter<"Office"> | string
    province?: StringFilter<"Office"> | string
    city?: StringFilter<"Office"> | string
    postalCode?: StringFilter<"Office"> | string
    fullAddress?: StringFilter<"Office"> | string
    phone?: StringFilter<"Office"> | string
    createdAt?: DateTimeFilter<"Office"> | Date | string
    updatedAt?: DateTimeFilter<"Office"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    operators?: UserListRelationFilter
    ordersFrom?: OrderListRelationFilter
    ordersTo?: OrderListRelationFilter
    outgoingTariffs?: TariffListRelationFilter
    incomingTariffs?: TariffListRelationFilter
  }, "id">

  export type OfficeOrderByWithAggregationInput = {
    id?: SortOrder
    countryId?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    fullAddress?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfficeCountOrderByAggregateInput
    _max?: OfficeMaxOrderByAggregateInput
    _min?: OfficeMinOrderByAggregateInput
  }

  export type OfficeScalarWhereWithAggregatesInput = {
    AND?: OfficeScalarWhereWithAggregatesInput | OfficeScalarWhereWithAggregatesInput[]
    OR?: OfficeScalarWhereWithAggregatesInput[]
    NOT?: OfficeScalarWhereWithAggregatesInput | OfficeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Office"> | string
    countryId?: StringWithAggregatesFilter<"Office"> | string
    province?: StringWithAggregatesFilter<"Office"> | string
    city?: StringWithAggregatesFilter<"Office"> | string
    postalCode?: StringWithAggregatesFilter<"Office"> | string
    fullAddress?: StringWithAggregatesFilter<"Office"> | string
    phone?: StringWithAggregatesFilter<"Office"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Office"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Office"> | Date | string
  }

  export type TariffWhereInput = {
    AND?: TariffWhereInput | TariffWhereInput[]
    OR?: TariffWhereInput[]
    NOT?: TariffWhereInput | TariffWhereInput[]
    id?: StringFilter<"Tariff"> | string
    fromOfficeId?: StringFilter<"Tariff"> | string
    toOfficeId?: StringFilter<"Tariff"> | string
    pricePerKg?: DecimalFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeFilter<"Tariff"> | Date | string
    fromOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
    toOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
  }

  export type TariffOrderByWithRelationInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    pricePerKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromOffice?: OfficeOrderByWithRelationInput
    toOffice?: OfficeOrderByWithRelationInput
  }

  export type TariffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TariffWhereInput | TariffWhereInput[]
    OR?: TariffWhereInput[]
    NOT?: TariffWhereInput | TariffWhereInput[]
    fromOfficeId?: StringFilter<"Tariff"> | string
    toOfficeId?: StringFilter<"Tariff"> | string
    pricePerKg?: DecimalFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeFilter<"Tariff"> | Date | string
    fromOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
    toOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
  }, "id">

  export type TariffOrderByWithAggregationInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    pricePerKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TariffCountOrderByAggregateInput
    _avg?: TariffAvgOrderByAggregateInput
    _max?: TariffMaxOrderByAggregateInput
    _min?: TariffMinOrderByAggregateInput
    _sum?: TariffSumOrderByAggregateInput
  }

  export type TariffScalarWhereWithAggregatesInput = {
    AND?: TariffScalarWhereWithAggregatesInput | TariffScalarWhereWithAggregatesInput[]
    OR?: TariffScalarWhereWithAggregatesInput[]
    NOT?: TariffScalarWhereWithAggregatesInput | TariffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tariff"> | string
    fromOfficeId?: StringWithAggregatesFilter<"Tariff"> | string
    toOfficeId?: StringWithAggregatesFilter<"Tariff"> | string
    pricePerKg?: DecimalWithAggregatesFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tariff"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    fromOfficeId?: StringFilter<"Order"> | string
    toOfficeId?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    receiverId?: StringNullableFilter<"Order"> | string | null
    productPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFilter<"Order"> | number
    currency?: EnumCurrencyFilter<"Order"> | $Enums.Currency
    marketName?: StringFilter<"Order"> | string
    productDescription?: StringFilter<"Order"> | string
    invoiceUrl?: StringNullableFilter<"Order"> | string | null
    comment?: StringNullableFilter<"Order"> | string | null
    tnVedCode?: StringNullableFilter<"Order"> | string | null
    isNew?: BoolFilter<"Order"> | boolean
    weight?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    length?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    width?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedById?: StringNullableFilter<"Order"> | string | null
    estimatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    qrCode?: StringNullableFilter<"Order"> | string | null
    trackingNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    estimatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    fromOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
    toOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    receiver?: XOR<ReceiverNullableScalarRelationFilter, ReceiverWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    receiverId?: SortOrderInput | SortOrder
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    currency?: SortOrder
    marketName?: SortOrder
    productDescription?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    tnVedCode?: SortOrderInput | SortOrder
    isNew?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrderInput | SortOrder
    estimatedPrice?: SortOrderInput | SortOrder
    estimatedById?: SortOrderInput | SortOrder
    estimatedAt?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estimatedBy?: UserOrderByWithRelationInput
    fromOffice?: OfficeOrderByWithRelationInput
    toOffice?: OfficeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    receiver?: ReceiverOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    fromOfficeId?: StringFilter<"Order"> | string
    toOfficeId?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    receiverId?: StringNullableFilter<"Order"> | string | null
    productPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFilter<"Order"> | number
    currency?: EnumCurrencyFilter<"Order"> | $Enums.Currency
    marketName?: StringFilter<"Order"> | string
    productDescription?: StringFilter<"Order"> | string
    invoiceUrl?: StringNullableFilter<"Order"> | string | null
    comment?: StringNullableFilter<"Order"> | string | null
    tnVedCode?: StringNullableFilter<"Order"> | string | null
    isNew?: BoolFilter<"Order"> | boolean
    weight?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    length?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    width?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedById?: StringNullableFilter<"Order"> | string | null
    estimatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    qrCode?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    estimatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    fromOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
    toOffice?: XOR<OfficeScalarRelationFilter, OfficeWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    receiver?: XOR<ReceiverNullableScalarRelationFilter, ReceiverWhereInput> | null
  }, "id" | "trackingNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    receiverId?: SortOrderInput | SortOrder
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    currency?: SortOrder
    marketName?: SortOrder
    productDescription?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    tnVedCode?: SortOrderInput | SortOrder
    isNew?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrderInput | SortOrder
    estimatedPrice?: SortOrderInput | SortOrder
    estimatedById?: SortOrderInput | SortOrder
    estimatedAt?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    fromOfficeId?: StringWithAggregatesFilter<"Order"> | string
    toOfficeId?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    receiverId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    productPrice?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pieceCount?: IntWithAggregatesFilter<"Order"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Order"> | $Enums.Currency
    marketName?: StringWithAggregatesFilter<"Order"> | string
    productDescription?: StringWithAggregatesFilter<"Order"> | string
    invoiceUrl?: StringNullableWithAggregatesFilter<"Order"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Order"> | string | null
    tnVedCode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    isNew?: BoolWithAggregatesFilter<"Order"> | boolean
    weight?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    length?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    width?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    height?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedById?: StringNullableWithAggregatesFilter<"Order"> | string | null
    estimatedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    qrCode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    trackingNumber?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type SystemSettingCreateInput = {
    id?: string
    volumetricDivisor?: number
  }

  export type SystemSettingUncheckedCreateInput = {
    id?: string
    volumetricDivisor?: number
  }

  export type SystemSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volumetricDivisor?: IntFieldUpdateOperationsInput | number
  }

  export type SystemSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volumetricDivisor?: IntFieldUpdateOperationsInput | number
  }

  export type SystemSettingCreateManyInput = {
    id?: string
    volumetricDivisor?: number
  }

  export type SystemSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    volumetricDivisor?: IntFieldUpdateOperationsInput | number
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volumetricDivisor?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatCreateNestedOneWithoutUserInput
    office?: OfficeCreateNestedOneWithoutOperatorsInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    officeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderUncheckedCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUpdateOneWithoutUserNestedInput
    office?: OfficeUpdateOneWithoutOperatorsNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    officeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUncheckedUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    officeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    officeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportChatCreateInput = {
    id?: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSupportChatInput
    messages?: SupportMessageCreateNestedManyWithoutChatInput
  }

  export type SupportChatUncheckedCreateInput = {
    id?: string
    userId: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: SupportMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type SupportChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportChatNestedInput
    messages?: SupportMessageUpdateManyWithoutChatNestedInput
  }

  export type SupportChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: SupportMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type SupportChatCreateManyInput = {
    id?: string
    userId: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageCreateInput = {
    id?: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
    chat: SupportChatCreateNestedOneWithoutMessagesInput
  }

  export type SupportMessageUncheckedCreateInput = {
    id?: string
    chatId: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SupportMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: SupportChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type SupportMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageCreateManyInput = {
    id?: string
    chatId: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SupportMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverCreateInput = {
    id?: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReceiversInput
    orders?: OrderCreateNestedManyWithoutReceiverInput
  }

  export type ReceiverUncheckedCreateInput = {
    id?: string
    userId: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type ReceiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReceiversNestedInput
    orders?: OrderUpdateManyWithoutReceiverNestedInput
  }

  export type ReceiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ReceiverCreateManyInput = {
    id?: string
    userId: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReceiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    id?: string
    hyName?: string | null
    ruName?: string | null
    enName?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offices?: OfficeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    hyName?: string | null
    ruName?: string | null
    enName?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offices?: OfficeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hyName?: NullableStringFieldUpdateOperationsInput | string | null
    ruName?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offices?: OfficeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hyName?: NullableStringFieldUpdateOperationsInput | string | null
    ruName?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offices?: OfficeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    hyName?: string | null
    ruName?: string | null
    enName?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hyName?: NullableStringFieldUpdateOperationsInput | string | null
    ruName?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hyName?: NullableStringFieldUpdateOperationsInput | string | null
    ruName?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeCreateInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutOfficesInput
    operators?: UserCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUncheckedCreateInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserUncheckedCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderUncheckedCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderUncheckedCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffUncheckedCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffUncheckedCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutOfficesNestedInput
    operators?: UserUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUncheckedUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUncheckedUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUncheckedUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUncheckedUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeCreateManyInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffCreateInput = {
    id?: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromOffice: OfficeCreateNestedOneWithoutOutgoingTariffsInput
    toOffice: OfficeCreateNestedOneWithoutIncomingTariffsInput
  }

  export type TariffUncheckedCreateInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromOffice?: OfficeUpdateOneRequiredWithoutOutgoingTariffsNestedInput
    toOffice?: OfficeUpdateOneRequiredWithoutIncomingTariffsNestedInput
  }

  export type TariffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffCreateManyInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    estimatedBy?: UserCreateNestedOneWithoutEstimatedOrdersInput
    fromOffice: OfficeCreateNestedOneWithoutOrdersFromInput
    toOffice: OfficeCreateNestedOneWithoutOrdersToInput
    user?: UserCreateNestedOneWithoutOrdersInput
    receiver?: ReceiverCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedBy?: UserUpdateOneWithoutEstimatedOrdersNestedInput
    fromOffice?: OfficeUpdateOneRequiredWithoutOrdersFromNestedInput
    toOffice?: OfficeUpdateOneRequiredWithoutOrdersToNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    receiver?: ReceiverUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SystemSettingCountOrderByAggregateInput = {
    id?: SortOrder
    volumetricDivisor?: SortOrder
  }

  export type SystemSettingAvgOrderByAggregateInput = {
    volumetricDivisor?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    volumetricDivisor?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    id?: SortOrder
    volumetricDivisor?: SortOrder
  }

  export type SystemSettingSumOrderByAggregateInput = {
    volumetricDivisor?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReceiverListRelationFilter = {
    every?: ReceiverWhereInput
    some?: ReceiverWhereInput
    none?: ReceiverWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SupportChatNullableScalarRelationFilter = {
    is?: SupportChatWhereInput | null
    isNot?: SupportChatWhereInput | null
  }

  export type OfficeNullableScalarRelationFilter = {
    is?: OfficeWhereInput | null
    isNot?: OfficeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReceiverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isIndividual?: SortOrder
    isSupporter?: SortOrder
    hyDocumentType?: SortOrder
    enDocumentType?: SortOrder
    ruDocumentType?: SortOrder
    documentNumber?: SortOrder
    companyName?: SortOrder
    taxpayerId?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    telegramChatId?: SortOrder
    code?: SortOrder
    role?: SortOrder
    status?: SortOrder
    officeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isIndividual?: SortOrder
    isSupporter?: SortOrder
    hyDocumentType?: SortOrder
    enDocumentType?: SortOrder
    ruDocumentType?: SortOrder
    documentNumber?: SortOrder
    companyName?: SortOrder
    taxpayerId?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    telegramChatId?: SortOrder
    code?: SortOrder
    role?: SortOrder
    status?: SortOrder
    officeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isIndividual?: SortOrder
    isSupporter?: SortOrder
    hyDocumentType?: SortOrder
    enDocumentType?: SortOrder
    ruDocumentType?: SortOrder
    documentNumber?: SortOrder
    companyName?: SortOrder
    taxpayerId?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    telegramChatId?: SortOrder
    code?: SortOrder
    role?: SortOrder
    status?: SortOrder
    officeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumChatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusFilter<$PrismaModel> | $Enums.ChatStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SupportMessageListRelationFilter = {
    every?: SupportMessageWhereInput
    some?: SupportMessageWhereInput
    none?: SupportMessageWhereInput
  }

  export type SupportMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatStatusFilter<$PrismaModel>
    _max?: NestedEnumChatStatusFilter<$PrismaModel>
  }

  export type EnumSenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeFilter<$PrismaModel> | $Enums.SenderType
  }

  export type SupportChatScalarRelationFilter = {
    is?: SupportChatWhereInput
    isNot?: SupportChatWhereInput
  }

  export type SupportMessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportMessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    senderType?: SortOrder
    senderId?: SortOrder
    text?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenderTypeFilter<$PrismaModel>
    _max?: NestedEnumSenderTypeFilter<$PrismaModel>
  }

  export type ReceiverCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hyDocumentType?: SortOrder
    enDocumentType?: SortOrder
    ruDocumentType?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReceiverMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hyDocumentType?: SortOrder
    enDocumentType?: SortOrder
    ruDocumentType?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReceiverMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    hyDocumentType?: SortOrder
    enDocumentType?: SortOrder
    ruDocumentType?: SortOrder
    documentNumber?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeListRelationFilter = {
    every?: OfficeWhereInput
    some?: OfficeWhereInput
    none?: OfficeWhereInput
  }

  export type OfficeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    hyName?: SortOrder
    ruName?: SortOrder
    enName?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    hyName?: SortOrder
    ruName?: SortOrder
    enName?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    hyName?: SortOrder
    ruName?: SortOrder
    enName?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TariffListRelationFilter = {
    every?: TariffWhereInput
    some?: TariffWhereInput
    none?: TariffWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficeCountOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    fullAddress?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    fullAddress?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeMinOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    fullAddress?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OfficeScalarRelationFilter = {
    is?: OfficeWhereInput
    isNot?: OfficeWhereInput
  }

  export type TariffCountOrderByAggregateInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    pricePerKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffAvgOrderByAggregateInput = {
    pricePerKg?: SortOrder
  }

  export type TariffMaxOrderByAggregateInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    pricePerKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffMinOrderByAggregateInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    pricePerKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffSumOrderByAggregateInput = {
    pricePerKg?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReceiverNullableScalarRelationFilter = {
    is?: ReceiverWhereInput | null
    isNot?: ReceiverWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    currency?: SortOrder
    marketName?: SortOrder
    productDescription?: SortOrder
    invoiceUrl?: SortOrder
    comment?: SortOrder
    tnVedCode?: SortOrder
    isNew?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrder
    estimatedPrice?: SortOrder
    estimatedById?: SortOrder
    estimatedAt?: SortOrder
    qrCode?: SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrder
    estimatedPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    currency?: SortOrder
    marketName?: SortOrder
    productDescription?: SortOrder
    invoiceUrl?: SortOrder
    comment?: SortOrder
    tnVedCode?: SortOrder
    isNew?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrder
    estimatedPrice?: SortOrder
    estimatedById?: SortOrder
    estimatedAt?: SortOrder
    qrCode?: SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    fromOfficeId?: SortOrder
    toOfficeId?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    currency?: SortOrder
    marketName?: SortOrder
    productDescription?: SortOrder
    invoiceUrl?: SortOrder
    comment?: SortOrder
    tnVedCode?: SortOrder
    isNew?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrder
    estimatedPrice?: SortOrder
    estimatedById?: SortOrder
    estimatedAt?: SortOrder
    qrCode?: SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    productPrice?: SortOrder
    price?: SortOrder
    pieceCount?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    tariffRateAtBooking?: SortOrder
    estimatedPrice?: SortOrder
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReceiverCreateNestedManyWithoutUserInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutEstimatedByInput = {
    create?: XOR<OrderCreateWithoutEstimatedByInput, OrderUncheckedCreateWithoutEstimatedByInput> | OrderCreateWithoutEstimatedByInput[] | OrderUncheckedCreateWithoutEstimatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEstimatedByInput | OrderCreateOrConnectWithoutEstimatedByInput[]
    createMany?: OrderCreateManyEstimatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type SupportChatCreateNestedOneWithoutUserInput = {
    create?: XOR<SupportChatCreateWithoutUserInput, SupportChatUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupportChatCreateOrConnectWithoutUserInput
    connect?: SupportChatWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutOperatorsInput = {
    create?: XOR<OfficeCreateWithoutOperatorsInput, OfficeUncheckedCreateWithoutOperatorsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOperatorsInput
    connect?: OfficeWhereUniqueInput
  }

  export type ReceiverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutEstimatedByInput = {
    create?: XOR<OrderCreateWithoutEstimatedByInput, OrderUncheckedCreateWithoutEstimatedByInput> | OrderCreateWithoutEstimatedByInput[] | OrderUncheckedCreateWithoutEstimatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEstimatedByInput | OrderCreateOrConnectWithoutEstimatedByInput[]
    createMany?: OrderCreateManyEstimatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type SupportChatUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SupportChatCreateWithoutUserInput, SupportChatUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupportChatCreateOrConnectWithoutUserInput
    connect?: SupportChatWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReceiverUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    upsert?: ReceiverUpsertWithWhereUniqueWithoutUserInput | ReceiverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    set?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    disconnect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    delete?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    update?: ReceiverUpdateWithWhereUniqueWithoutUserInput | ReceiverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReceiverUpdateManyWithWhereWithoutUserInput | ReceiverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutEstimatedByNestedInput = {
    create?: XOR<OrderCreateWithoutEstimatedByInput, OrderUncheckedCreateWithoutEstimatedByInput> | OrderCreateWithoutEstimatedByInput[] | OrderUncheckedCreateWithoutEstimatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEstimatedByInput | OrderCreateOrConnectWithoutEstimatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEstimatedByInput | OrderUpsertWithWhereUniqueWithoutEstimatedByInput[]
    createMany?: OrderCreateManyEstimatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEstimatedByInput | OrderUpdateWithWhereUniqueWithoutEstimatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEstimatedByInput | OrderUpdateManyWithWhereWithoutEstimatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type SupportChatUpdateOneWithoutUserNestedInput = {
    create?: XOR<SupportChatCreateWithoutUserInput, SupportChatUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupportChatCreateOrConnectWithoutUserInput
    upsert?: SupportChatUpsertWithoutUserInput
    disconnect?: SupportChatWhereInput | boolean
    delete?: SupportChatWhereInput | boolean
    connect?: SupportChatWhereUniqueInput
    update?: XOR<XOR<SupportChatUpdateToOneWithWhereWithoutUserInput, SupportChatUpdateWithoutUserInput>, SupportChatUncheckedUpdateWithoutUserInput>
  }

  export type OfficeUpdateOneWithoutOperatorsNestedInput = {
    create?: XOR<OfficeCreateWithoutOperatorsInput, OfficeUncheckedCreateWithoutOperatorsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOperatorsInput
    upsert?: OfficeUpsertWithoutOperatorsInput
    disconnect?: OfficeWhereInput | boolean
    delete?: OfficeWhereInput | boolean
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutOperatorsInput, OfficeUpdateWithoutOperatorsInput>, OfficeUncheckedUpdateWithoutOperatorsInput>
  }

  export type ReceiverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput> | ReceiverCreateWithoutUserInput[] | ReceiverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReceiverCreateOrConnectWithoutUserInput | ReceiverCreateOrConnectWithoutUserInput[]
    upsert?: ReceiverUpsertWithWhereUniqueWithoutUserInput | ReceiverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReceiverCreateManyUserInputEnvelope
    set?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    disconnect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    delete?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    connect?: ReceiverWhereUniqueInput | ReceiverWhereUniqueInput[]
    update?: ReceiverUpdateWithWhereUniqueWithoutUserInput | ReceiverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReceiverUpdateManyWithWhereWithoutUserInput | ReceiverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutEstimatedByNestedInput = {
    create?: XOR<OrderCreateWithoutEstimatedByInput, OrderUncheckedCreateWithoutEstimatedByInput> | OrderCreateWithoutEstimatedByInput[] | OrderUncheckedCreateWithoutEstimatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEstimatedByInput | OrderCreateOrConnectWithoutEstimatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEstimatedByInput | OrderUpsertWithWhereUniqueWithoutEstimatedByInput[]
    createMany?: OrderCreateManyEstimatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEstimatedByInput | OrderUpdateWithWhereUniqueWithoutEstimatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEstimatedByInput | OrderUpdateManyWithWhereWithoutEstimatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type SupportChatUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SupportChatCreateWithoutUserInput, SupportChatUncheckedCreateWithoutUserInput>
    connectOrCreate?: SupportChatCreateOrConnectWithoutUserInput
    upsert?: SupportChatUpsertWithoutUserInput
    disconnect?: SupportChatWhereInput | boolean
    delete?: SupportChatWhereInput | boolean
    connect?: SupportChatWhereUniqueInput
    update?: XOR<XOR<SupportChatUpdateToOneWithWhereWithoutUserInput, SupportChatUpdateWithoutUserInput>, SupportChatUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSupportChatInput = {
    create?: XOR<UserCreateWithoutSupportChatInput, UserUncheckedCreateWithoutSupportChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportChatInput
    connect?: UserWhereUniqueInput
  }

  export type SupportMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<SupportMessageCreateWithoutChatInput, SupportMessageUncheckedCreateWithoutChatInput> | SupportMessageCreateWithoutChatInput[] | SupportMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutChatInput | SupportMessageCreateOrConnectWithoutChatInput[]
    createMany?: SupportMessageCreateManyChatInputEnvelope
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
  }

  export type SupportMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<SupportMessageCreateWithoutChatInput, SupportMessageUncheckedCreateWithoutChatInput> | SupportMessageCreateWithoutChatInput[] | SupportMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutChatInput | SupportMessageCreateOrConnectWithoutChatInput[]
    createMany?: SupportMessageCreateManyChatInputEnvelope
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
  }

  export type EnumChatStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChatStatus
  }

  export type UserUpdateOneRequiredWithoutSupportChatNestedInput = {
    create?: XOR<UserCreateWithoutSupportChatInput, UserUncheckedCreateWithoutSupportChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportChatInput
    upsert?: UserUpsertWithoutSupportChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupportChatInput, UserUpdateWithoutSupportChatInput>, UserUncheckedUpdateWithoutSupportChatInput>
  }

  export type SupportMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<SupportMessageCreateWithoutChatInput, SupportMessageUncheckedCreateWithoutChatInput> | SupportMessageCreateWithoutChatInput[] | SupportMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutChatInput | SupportMessageCreateOrConnectWithoutChatInput[]
    upsert?: SupportMessageUpsertWithWhereUniqueWithoutChatInput | SupportMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: SupportMessageCreateManyChatInputEnvelope
    set?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    disconnect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    delete?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    update?: SupportMessageUpdateWithWhereUniqueWithoutChatInput | SupportMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: SupportMessageUpdateManyWithWhereWithoutChatInput | SupportMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
  }

  export type SupportMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<SupportMessageCreateWithoutChatInput, SupportMessageUncheckedCreateWithoutChatInput> | SupportMessageCreateWithoutChatInput[] | SupportMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutChatInput | SupportMessageCreateOrConnectWithoutChatInput[]
    upsert?: SupportMessageUpsertWithWhereUniqueWithoutChatInput | SupportMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: SupportMessageCreateManyChatInputEnvelope
    set?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    disconnect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    delete?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    update?: SupportMessageUpdateWithWhereUniqueWithoutChatInput | SupportMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: SupportMessageUpdateManyWithWhereWithoutChatInput | SupportMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
  }

  export type SupportChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<SupportChatCreateWithoutMessagesInput, SupportChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportChatCreateOrConnectWithoutMessagesInput
    connect?: SupportChatWhereUniqueInput
  }

  export type EnumSenderTypeFieldUpdateOperationsInput = {
    set?: $Enums.SenderType
  }

  export type SupportChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<SupportChatCreateWithoutMessagesInput, SupportChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportChatCreateOrConnectWithoutMessagesInput
    upsert?: SupportChatUpsertWithoutMessagesInput
    connect?: SupportChatWhereUniqueInput
    update?: XOR<XOR<SupportChatUpdateToOneWithWhereWithoutMessagesInput, SupportChatUpdateWithoutMessagesInput>, SupportChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutReceiversInput = {
    create?: XOR<UserCreateWithoutReceiversInput, UserUncheckedCreateWithoutReceiversInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiversInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutReceiverInput = {
    create?: XOR<OrderCreateWithoutReceiverInput, OrderUncheckedCreateWithoutReceiverInput> | OrderCreateWithoutReceiverInput[] | OrderUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutReceiverInput | OrderCreateOrConnectWithoutReceiverInput[]
    createMany?: OrderCreateManyReceiverInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<OrderCreateWithoutReceiverInput, OrderUncheckedCreateWithoutReceiverInput> | OrderCreateWithoutReceiverInput[] | OrderUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutReceiverInput | OrderCreateOrConnectWithoutReceiverInput[]
    createMany?: OrderCreateManyReceiverInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReceiversNestedInput = {
    create?: XOR<UserCreateWithoutReceiversInput, UserUncheckedCreateWithoutReceiversInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiversInput
    upsert?: UserUpsertWithoutReceiversInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiversInput, UserUpdateWithoutReceiversInput>, UserUncheckedUpdateWithoutReceiversInput>
  }

  export type OrderUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<OrderCreateWithoutReceiverInput, OrderUncheckedCreateWithoutReceiverInput> | OrderCreateWithoutReceiverInput[] | OrderUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutReceiverInput | OrderCreateOrConnectWithoutReceiverInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutReceiverInput | OrderUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: OrderCreateManyReceiverInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutReceiverInput | OrderUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutReceiverInput | OrderUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<OrderCreateWithoutReceiverInput, OrderUncheckedCreateWithoutReceiverInput> | OrderCreateWithoutReceiverInput[] | OrderUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutReceiverInput | OrderCreateOrConnectWithoutReceiverInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutReceiverInput | OrderUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: OrderCreateManyReceiverInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutReceiverInput | OrderUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutReceiverInput | OrderUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OfficeCreateNestedManyWithoutCountryInput = {
    create?: XOR<OfficeCreateWithoutCountryInput, OfficeUncheckedCreateWithoutCountryInput> | OfficeCreateWithoutCountryInput[] | OfficeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: OfficeCreateOrConnectWithoutCountryInput | OfficeCreateOrConnectWithoutCountryInput[]
    createMany?: OfficeCreateManyCountryInputEnvelope
    connect?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
  }

  export type OfficeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<OfficeCreateWithoutCountryInput, OfficeUncheckedCreateWithoutCountryInput> | OfficeCreateWithoutCountryInput[] | OfficeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: OfficeCreateOrConnectWithoutCountryInput | OfficeCreateOrConnectWithoutCountryInput[]
    createMany?: OfficeCreateManyCountryInputEnvelope
    connect?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
  }

  export type OfficeUpdateManyWithoutCountryNestedInput = {
    create?: XOR<OfficeCreateWithoutCountryInput, OfficeUncheckedCreateWithoutCountryInput> | OfficeCreateWithoutCountryInput[] | OfficeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: OfficeCreateOrConnectWithoutCountryInput | OfficeCreateOrConnectWithoutCountryInput[]
    upsert?: OfficeUpsertWithWhereUniqueWithoutCountryInput | OfficeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: OfficeCreateManyCountryInputEnvelope
    set?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    disconnect?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    delete?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    connect?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    update?: OfficeUpdateWithWhereUniqueWithoutCountryInput | OfficeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: OfficeUpdateManyWithWhereWithoutCountryInput | OfficeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: OfficeScalarWhereInput | OfficeScalarWhereInput[]
  }

  export type OfficeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<OfficeCreateWithoutCountryInput, OfficeUncheckedCreateWithoutCountryInput> | OfficeCreateWithoutCountryInput[] | OfficeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: OfficeCreateOrConnectWithoutCountryInput | OfficeCreateOrConnectWithoutCountryInput[]
    upsert?: OfficeUpsertWithWhereUniqueWithoutCountryInput | OfficeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: OfficeCreateManyCountryInputEnvelope
    set?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    disconnect?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    delete?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    connect?: OfficeWhereUniqueInput | OfficeWhereUniqueInput[]
    update?: OfficeUpdateWithWhereUniqueWithoutCountryInput | OfficeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: OfficeUpdateManyWithWhereWithoutCountryInput | OfficeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: OfficeScalarWhereInput | OfficeScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutOfficesInput = {
    create?: XOR<CountryCreateWithoutOfficesInput, CountryUncheckedCreateWithoutOfficesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutOfficesInput
    connect?: CountryWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutOfficeInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutFromOfficeInput = {
    create?: XOR<OrderCreateWithoutFromOfficeInput, OrderUncheckedCreateWithoutFromOfficeInput> | OrderCreateWithoutFromOfficeInput[] | OrderUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFromOfficeInput | OrderCreateOrConnectWithoutFromOfficeInput[]
    createMany?: OrderCreateManyFromOfficeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutToOfficeInput = {
    create?: XOR<OrderCreateWithoutToOfficeInput, OrderUncheckedCreateWithoutToOfficeInput> | OrderCreateWithoutToOfficeInput[] | OrderUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutToOfficeInput | OrderCreateOrConnectWithoutToOfficeInput[]
    createMany?: OrderCreateManyToOfficeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TariffCreateNestedManyWithoutFromOfficeInput = {
    create?: XOR<TariffCreateWithoutFromOfficeInput, TariffUncheckedCreateWithoutFromOfficeInput> | TariffCreateWithoutFromOfficeInput[] | TariffUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutFromOfficeInput | TariffCreateOrConnectWithoutFromOfficeInput[]
    createMany?: TariffCreateManyFromOfficeInputEnvelope
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
  }

  export type TariffCreateNestedManyWithoutToOfficeInput = {
    create?: XOR<TariffCreateWithoutToOfficeInput, TariffUncheckedCreateWithoutToOfficeInput> | TariffCreateWithoutToOfficeInput[] | TariffUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutToOfficeInput | TariffCreateOrConnectWithoutToOfficeInput[]
    createMany?: TariffCreateManyToOfficeInputEnvelope
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutFromOfficeInput = {
    create?: XOR<OrderCreateWithoutFromOfficeInput, OrderUncheckedCreateWithoutFromOfficeInput> | OrderCreateWithoutFromOfficeInput[] | OrderUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFromOfficeInput | OrderCreateOrConnectWithoutFromOfficeInput[]
    createMany?: OrderCreateManyFromOfficeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutToOfficeInput = {
    create?: XOR<OrderCreateWithoutToOfficeInput, OrderUncheckedCreateWithoutToOfficeInput> | OrderCreateWithoutToOfficeInput[] | OrderUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutToOfficeInput | OrderCreateOrConnectWithoutToOfficeInput[]
    createMany?: OrderCreateManyToOfficeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TariffUncheckedCreateNestedManyWithoutFromOfficeInput = {
    create?: XOR<TariffCreateWithoutFromOfficeInput, TariffUncheckedCreateWithoutFromOfficeInput> | TariffCreateWithoutFromOfficeInput[] | TariffUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutFromOfficeInput | TariffCreateOrConnectWithoutFromOfficeInput[]
    createMany?: TariffCreateManyFromOfficeInputEnvelope
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
  }

  export type TariffUncheckedCreateNestedManyWithoutToOfficeInput = {
    create?: XOR<TariffCreateWithoutToOfficeInput, TariffUncheckedCreateWithoutToOfficeInput> | TariffCreateWithoutToOfficeInput[] | TariffUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutToOfficeInput | TariffCreateOrConnectWithoutToOfficeInput[]
    createMany?: TariffCreateManyToOfficeInputEnvelope
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutOfficesNestedInput = {
    create?: XOR<CountryCreateWithoutOfficesInput, CountryUncheckedCreateWithoutOfficesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutOfficesInput
    upsert?: CountryUpsertWithoutOfficesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutOfficesInput, CountryUpdateWithoutOfficesInput>, CountryUncheckedUpdateWithoutOfficesInput>
  }

  export type UserUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOfficeInput | UserUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOfficeInput | UserUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOfficeInput | UserUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutFromOfficeNestedInput = {
    create?: XOR<OrderCreateWithoutFromOfficeInput, OrderUncheckedCreateWithoutFromOfficeInput> | OrderCreateWithoutFromOfficeInput[] | OrderUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFromOfficeInput | OrderCreateOrConnectWithoutFromOfficeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFromOfficeInput | OrderUpsertWithWhereUniqueWithoutFromOfficeInput[]
    createMany?: OrderCreateManyFromOfficeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFromOfficeInput | OrderUpdateWithWhereUniqueWithoutFromOfficeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFromOfficeInput | OrderUpdateManyWithWhereWithoutFromOfficeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutToOfficeNestedInput = {
    create?: XOR<OrderCreateWithoutToOfficeInput, OrderUncheckedCreateWithoutToOfficeInput> | OrderCreateWithoutToOfficeInput[] | OrderUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutToOfficeInput | OrderCreateOrConnectWithoutToOfficeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutToOfficeInput | OrderUpsertWithWhereUniqueWithoutToOfficeInput[]
    createMany?: OrderCreateManyToOfficeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutToOfficeInput | OrderUpdateWithWhereUniqueWithoutToOfficeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutToOfficeInput | OrderUpdateManyWithWhereWithoutToOfficeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TariffUpdateManyWithoutFromOfficeNestedInput = {
    create?: XOR<TariffCreateWithoutFromOfficeInput, TariffUncheckedCreateWithoutFromOfficeInput> | TariffCreateWithoutFromOfficeInput[] | TariffUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutFromOfficeInput | TariffCreateOrConnectWithoutFromOfficeInput[]
    upsert?: TariffUpsertWithWhereUniqueWithoutFromOfficeInput | TariffUpsertWithWhereUniqueWithoutFromOfficeInput[]
    createMany?: TariffCreateManyFromOfficeInputEnvelope
    set?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    disconnect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    delete?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    update?: TariffUpdateWithWhereUniqueWithoutFromOfficeInput | TariffUpdateWithWhereUniqueWithoutFromOfficeInput[]
    updateMany?: TariffUpdateManyWithWhereWithoutFromOfficeInput | TariffUpdateManyWithWhereWithoutFromOfficeInput[]
    deleteMany?: TariffScalarWhereInput | TariffScalarWhereInput[]
  }

  export type TariffUpdateManyWithoutToOfficeNestedInput = {
    create?: XOR<TariffCreateWithoutToOfficeInput, TariffUncheckedCreateWithoutToOfficeInput> | TariffCreateWithoutToOfficeInput[] | TariffUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutToOfficeInput | TariffCreateOrConnectWithoutToOfficeInput[]
    upsert?: TariffUpsertWithWhereUniqueWithoutToOfficeInput | TariffUpsertWithWhereUniqueWithoutToOfficeInput[]
    createMany?: TariffCreateManyToOfficeInputEnvelope
    set?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    disconnect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    delete?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    update?: TariffUpdateWithWhereUniqueWithoutToOfficeInput | TariffUpdateWithWhereUniqueWithoutToOfficeInput[]
    updateMany?: TariffUpdateManyWithWhereWithoutToOfficeInput | TariffUpdateManyWithWhereWithoutToOfficeInput[]
    deleteMany?: TariffScalarWhereInput | TariffScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOfficeInput | UserUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOfficeInput | UserUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOfficeInput | UserUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutFromOfficeNestedInput = {
    create?: XOR<OrderCreateWithoutFromOfficeInput, OrderUncheckedCreateWithoutFromOfficeInput> | OrderCreateWithoutFromOfficeInput[] | OrderUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFromOfficeInput | OrderCreateOrConnectWithoutFromOfficeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFromOfficeInput | OrderUpsertWithWhereUniqueWithoutFromOfficeInput[]
    createMany?: OrderCreateManyFromOfficeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFromOfficeInput | OrderUpdateWithWhereUniqueWithoutFromOfficeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFromOfficeInput | OrderUpdateManyWithWhereWithoutFromOfficeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutToOfficeNestedInput = {
    create?: XOR<OrderCreateWithoutToOfficeInput, OrderUncheckedCreateWithoutToOfficeInput> | OrderCreateWithoutToOfficeInput[] | OrderUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutToOfficeInput | OrderCreateOrConnectWithoutToOfficeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutToOfficeInput | OrderUpsertWithWhereUniqueWithoutToOfficeInput[]
    createMany?: OrderCreateManyToOfficeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutToOfficeInput | OrderUpdateWithWhereUniqueWithoutToOfficeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutToOfficeInput | OrderUpdateManyWithWhereWithoutToOfficeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TariffUncheckedUpdateManyWithoutFromOfficeNestedInput = {
    create?: XOR<TariffCreateWithoutFromOfficeInput, TariffUncheckedCreateWithoutFromOfficeInput> | TariffCreateWithoutFromOfficeInput[] | TariffUncheckedCreateWithoutFromOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutFromOfficeInput | TariffCreateOrConnectWithoutFromOfficeInput[]
    upsert?: TariffUpsertWithWhereUniqueWithoutFromOfficeInput | TariffUpsertWithWhereUniqueWithoutFromOfficeInput[]
    createMany?: TariffCreateManyFromOfficeInputEnvelope
    set?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    disconnect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    delete?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    update?: TariffUpdateWithWhereUniqueWithoutFromOfficeInput | TariffUpdateWithWhereUniqueWithoutFromOfficeInput[]
    updateMany?: TariffUpdateManyWithWhereWithoutFromOfficeInput | TariffUpdateManyWithWhereWithoutFromOfficeInput[]
    deleteMany?: TariffScalarWhereInput | TariffScalarWhereInput[]
  }

  export type TariffUncheckedUpdateManyWithoutToOfficeNestedInput = {
    create?: XOR<TariffCreateWithoutToOfficeInput, TariffUncheckedCreateWithoutToOfficeInput> | TariffCreateWithoutToOfficeInput[] | TariffUncheckedCreateWithoutToOfficeInput[]
    connectOrCreate?: TariffCreateOrConnectWithoutToOfficeInput | TariffCreateOrConnectWithoutToOfficeInput[]
    upsert?: TariffUpsertWithWhereUniqueWithoutToOfficeInput | TariffUpsertWithWhereUniqueWithoutToOfficeInput[]
    createMany?: TariffCreateManyToOfficeInputEnvelope
    set?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    disconnect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    delete?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    connect?: TariffWhereUniqueInput | TariffWhereUniqueInput[]
    update?: TariffUpdateWithWhereUniqueWithoutToOfficeInput | TariffUpdateWithWhereUniqueWithoutToOfficeInput[]
    updateMany?: TariffUpdateManyWithWhereWithoutToOfficeInput | TariffUpdateManyWithWhereWithoutToOfficeInput[]
    deleteMany?: TariffScalarWhereInput | TariffScalarWhereInput[]
  }

  export type OfficeCreateNestedOneWithoutOutgoingTariffsInput = {
    create?: XOR<OfficeCreateWithoutOutgoingTariffsInput, OfficeUncheckedCreateWithoutOutgoingTariffsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOutgoingTariffsInput
    connect?: OfficeWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutIncomingTariffsInput = {
    create?: XOR<OfficeCreateWithoutIncomingTariffsInput, OfficeUncheckedCreateWithoutIncomingTariffsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutIncomingTariffsInput
    connect?: OfficeWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OfficeUpdateOneRequiredWithoutOutgoingTariffsNestedInput = {
    create?: XOR<OfficeCreateWithoutOutgoingTariffsInput, OfficeUncheckedCreateWithoutOutgoingTariffsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOutgoingTariffsInput
    upsert?: OfficeUpsertWithoutOutgoingTariffsInput
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutOutgoingTariffsInput, OfficeUpdateWithoutOutgoingTariffsInput>, OfficeUncheckedUpdateWithoutOutgoingTariffsInput>
  }

  export type OfficeUpdateOneRequiredWithoutIncomingTariffsNestedInput = {
    create?: XOR<OfficeCreateWithoutIncomingTariffsInput, OfficeUncheckedCreateWithoutIncomingTariffsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutIncomingTariffsInput
    upsert?: OfficeUpsertWithoutIncomingTariffsInput
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutIncomingTariffsInput, OfficeUpdateWithoutIncomingTariffsInput>, OfficeUncheckedUpdateWithoutIncomingTariffsInput>
  }

  export type UserCreateNestedOneWithoutEstimatedOrdersInput = {
    create?: XOR<UserCreateWithoutEstimatedOrdersInput, UserUncheckedCreateWithoutEstimatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutEstimatedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutOrdersFromInput = {
    create?: XOR<OfficeCreateWithoutOrdersFromInput, OfficeUncheckedCreateWithoutOrdersFromInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOrdersFromInput
    connect?: OfficeWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutOrdersToInput = {
    create?: XOR<OfficeCreateWithoutOrdersToInput, OfficeUncheckedCreateWithoutOrdersToInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOrdersToInput
    connect?: OfficeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ReceiverCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ReceiverCreateWithoutOrdersInput, ReceiverUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ReceiverCreateOrConnectWithoutOrdersInput
    connect?: ReceiverWhereUniqueInput
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneWithoutEstimatedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutEstimatedOrdersInput, UserUncheckedCreateWithoutEstimatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutEstimatedOrdersInput
    upsert?: UserUpsertWithoutEstimatedOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEstimatedOrdersInput, UserUpdateWithoutEstimatedOrdersInput>, UserUncheckedUpdateWithoutEstimatedOrdersInput>
  }

  export type OfficeUpdateOneRequiredWithoutOrdersFromNestedInput = {
    create?: XOR<OfficeCreateWithoutOrdersFromInput, OfficeUncheckedCreateWithoutOrdersFromInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOrdersFromInput
    upsert?: OfficeUpsertWithoutOrdersFromInput
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutOrdersFromInput, OfficeUpdateWithoutOrdersFromInput>, OfficeUncheckedUpdateWithoutOrdersFromInput>
  }

  export type OfficeUpdateOneRequiredWithoutOrdersToNestedInput = {
    create?: XOR<OfficeCreateWithoutOrdersToInput, OfficeUncheckedCreateWithoutOrdersToInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutOrdersToInput
    upsert?: OfficeUpsertWithoutOrdersToInput
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutOrdersToInput, OfficeUpdateWithoutOrdersToInput>, OfficeUncheckedUpdateWithoutOrdersToInput>
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ReceiverUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ReceiverCreateWithoutOrdersInput, ReceiverUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ReceiverCreateOrConnectWithoutOrdersInput
    upsert?: ReceiverUpsertWithoutOrdersInput
    disconnect?: ReceiverWhereInput | boolean
    delete?: ReceiverWhereInput | boolean
    connect?: ReceiverWhereUniqueInput
    update?: XOR<XOR<ReceiverUpdateToOneWithWhereWithoutOrdersInput, ReceiverUpdateWithoutOrdersInput>, ReceiverUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumChatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusFilter<$PrismaModel> | $Enums.ChatStatus
  }

  export type NestedEnumChatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatStatus | EnumChatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatStatus[] | ListEnumChatStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatStatusFilter<$PrismaModel>
    _max?: NestedEnumChatStatusFilter<$PrismaModel>
  }

  export type NestedEnumSenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeFilter<$PrismaModel> | $Enums.SenderType
  }

  export type NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenderTypeFilter<$PrismaModel>
    _max?: NestedEnumSenderTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ReceiverCreateWithoutUserInput = {
    id?: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutReceiverInput
  }

  export type ReceiverUncheckedCreateWithoutUserInput = {
    id?: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type ReceiverCreateOrConnectWithoutUserInput = {
    where: ReceiverWhereUniqueInput
    create: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput>
  }

  export type ReceiverCreateManyUserInputEnvelope = {
    data: ReceiverCreateManyUserInput | ReceiverCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    estimatedBy?: UserCreateNestedOneWithoutEstimatedOrdersInput
    fromOffice: OfficeCreateNestedOneWithoutOrdersFromInput
    toOffice: OfficeCreateNestedOneWithoutOrdersToInput
    receiver?: ReceiverCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutEstimatedByInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fromOffice: OfficeCreateNestedOneWithoutOrdersFromInput
    toOffice: OfficeCreateNestedOneWithoutOrdersToInput
    user?: UserCreateNestedOneWithoutOrdersInput
    receiver?: ReceiverCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutEstimatedByInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutEstimatedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEstimatedByInput, OrderUncheckedCreateWithoutEstimatedByInput>
  }

  export type OrderCreateManyEstimatedByInputEnvelope = {
    data: OrderCreateManyEstimatedByInput | OrderCreateManyEstimatedByInput[]
    skipDuplicates?: boolean
  }

  export type SupportChatCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: SupportMessageCreateNestedManyWithoutChatInput
  }

  export type SupportChatUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: SupportMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type SupportChatCreateOrConnectWithoutUserInput = {
    where: SupportChatWhereUniqueInput
    create: XOR<SupportChatCreateWithoutUserInput, SupportChatUncheckedCreateWithoutUserInput>
  }

  export type OfficeCreateWithoutOperatorsInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutOfficesInput
    ordersFrom?: OrderCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUncheckedCreateWithoutOperatorsInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordersFrom?: OrderUncheckedCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderUncheckedCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffUncheckedCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffUncheckedCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeCreateOrConnectWithoutOperatorsInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutOperatorsInput, OfficeUncheckedCreateWithoutOperatorsInput>
  }

  export type ReceiverUpsertWithWhereUniqueWithoutUserInput = {
    where: ReceiverWhereUniqueInput
    update: XOR<ReceiverUpdateWithoutUserInput, ReceiverUncheckedUpdateWithoutUserInput>
    create: XOR<ReceiverCreateWithoutUserInput, ReceiverUncheckedCreateWithoutUserInput>
  }

  export type ReceiverUpdateWithWhereUniqueWithoutUserInput = {
    where: ReceiverWhereUniqueInput
    data: XOR<ReceiverUpdateWithoutUserInput, ReceiverUncheckedUpdateWithoutUserInput>
  }

  export type ReceiverUpdateManyWithWhereWithoutUserInput = {
    where: ReceiverScalarWhereInput
    data: XOR<ReceiverUpdateManyMutationInput, ReceiverUncheckedUpdateManyWithoutUserInput>
  }

  export type ReceiverScalarWhereInput = {
    AND?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
    OR?: ReceiverScalarWhereInput[]
    NOT?: ReceiverScalarWhereInput | ReceiverScalarWhereInput[]
    id?: StringFilter<"Receiver"> | string
    userId?: StringFilter<"Receiver"> | string
    code?: StringNullableFilter<"Receiver"> | string | null
    firstName?: StringNullableFilter<"Receiver"> | string | null
    lastName?: StringNullableFilter<"Receiver"> | string | null
    hyDocumentType?: StringNullableFilter<"Receiver"> | string | null
    enDocumentType?: StringNullableFilter<"Receiver"> | string | null
    ruDocumentType?: StringNullableFilter<"Receiver"> | string | null
    documentNumber?: StringNullableFilter<"Receiver"> | string | null
    address?: StringNullableFilter<"Receiver"> | string | null
    phoneNumber?: StringNullableFilter<"Receiver"> | string | null
    createdAt?: DateTimeFilter<"Receiver"> | Date | string
    updatedAt?: DateTimeFilter<"Receiver"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    fromOfficeId?: StringFilter<"Order"> | string
    toOfficeId?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    receiverId?: StringNullableFilter<"Order"> | string | null
    productPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFilter<"Order"> | number
    currency?: EnumCurrencyFilter<"Order"> | $Enums.Currency
    marketName?: StringFilter<"Order"> | string
    productDescription?: StringFilter<"Order"> | string
    invoiceUrl?: StringNullableFilter<"Order"> | string | null
    comment?: StringNullableFilter<"Order"> | string | null
    tnVedCode?: StringNullableFilter<"Order"> | string | null
    isNew?: BoolFilter<"Order"> | boolean
    weight?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    length?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    width?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    estimatedById?: StringNullableFilter<"Order"> | string | null
    estimatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    qrCode?: StringNullableFilter<"Order"> | string | null
    trackingNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutEstimatedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutEstimatedByInput, OrderUncheckedUpdateWithoutEstimatedByInput>
    create: XOR<OrderCreateWithoutEstimatedByInput, OrderUncheckedCreateWithoutEstimatedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutEstimatedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutEstimatedByInput, OrderUncheckedUpdateWithoutEstimatedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutEstimatedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutEstimatedByInput>
  }

  export type SupportChatUpsertWithoutUserInput = {
    update: XOR<SupportChatUpdateWithoutUserInput, SupportChatUncheckedUpdateWithoutUserInput>
    create: XOR<SupportChatCreateWithoutUserInput, SupportChatUncheckedCreateWithoutUserInput>
    where?: SupportChatWhereInput
  }

  export type SupportChatUpdateToOneWithWhereWithoutUserInput = {
    where?: SupportChatWhereInput
    data: XOR<SupportChatUpdateWithoutUserInput, SupportChatUncheckedUpdateWithoutUserInput>
  }

  export type SupportChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: SupportMessageUpdateManyWithoutChatNestedInput
  }

  export type SupportChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: SupportMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type OfficeUpsertWithoutOperatorsInput = {
    update: XOR<OfficeUpdateWithoutOperatorsInput, OfficeUncheckedUpdateWithoutOperatorsInput>
    create: XOR<OfficeCreateWithoutOperatorsInput, OfficeUncheckedCreateWithoutOperatorsInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutOperatorsInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutOperatorsInput, OfficeUncheckedUpdateWithoutOperatorsInput>
  }

  export type OfficeUpdateWithoutOperatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutOfficesNestedInput
    ordersFrom?: OrderUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutOperatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersFrom?: OrderUncheckedUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUncheckedUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUncheckedUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUncheckedUpdateManyWithoutToOfficeNestedInput
  }

  export type UserCreateWithoutSupportChatInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderCreateNestedManyWithoutEstimatedByInput
    office?: OfficeCreateNestedOneWithoutOperatorsInput
  }

  export type UserUncheckedCreateWithoutSupportChatInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    officeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderUncheckedCreateNestedManyWithoutEstimatedByInput
  }

  export type UserCreateOrConnectWithoutSupportChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupportChatInput, UserUncheckedCreateWithoutSupportChatInput>
  }

  export type SupportMessageCreateWithoutChatInput = {
    id?: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SupportMessageUncheckedCreateWithoutChatInput = {
    id?: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SupportMessageCreateOrConnectWithoutChatInput = {
    where: SupportMessageWhereUniqueInput
    create: XOR<SupportMessageCreateWithoutChatInput, SupportMessageUncheckedCreateWithoutChatInput>
  }

  export type SupportMessageCreateManyChatInputEnvelope = {
    data: SupportMessageCreateManyChatInput | SupportMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSupportChatInput = {
    update: XOR<UserUpdateWithoutSupportChatInput, UserUncheckedUpdateWithoutSupportChatInput>
    create: XOR<UserCreateWithoutSupportChatInput, UserUncheckedCreateWithoutSupportChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupportChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupportChatInput, UserUncheckedUpdateWithoutSupportChatInput>
  }

  export type UserUpdateWithoutSupportChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUpdateManyWithoutEstimatedByNestedInput
    office?: OfficeUpdateOneWithoutOperatorsNestedInput
  }

  export type UserUncheckedUpdateWithoutSupportChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    officeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUncheckedUpdateManyWithoutEstimatedByNestedInput
  }

  export type SupportMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: SupportMessageWhereUniqueInput
    update: XOR<SupportMessageUpdateWithoutChatInput, SupportMessageUncheckedUpdateWithoutChatInput>
    create: XOR<SupportMessageCreateWithoutChatInput, SupportMessageUncheckedCreateWithoutChatInput>
  }

  export type SupportMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: SupportMessageWhereUniqueInput
    data: XOR<SupportMessageUpdateWithoutChatInput, SupportMessageUncheckedUpdateWithoutChatInput>
  }

  export type SupportMessageUpdateManyWithWhereWithoutChatInput = {
    where: SupportMessageScalarWhereInput
    data: XOR<SupportMessageUpdateManyMutationInput, SupportMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type SupportMessageScalarWhereInput = {
    AND?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
    OR?: SupportMessageScalarWhereInput[]
    NOT?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
    id?: StringFilter<"SupportMessage"> | string
    chatId?: StringFilter<"SupportMessage"> | string
    senderType?: EnumSenderTypeFilter<"SupportMessage"> | $Enums.SenderType
    senderId?: StringFilter<"SupportMessage"> | string
    text?: StringFilter<"SupportMessage"> | string
    isRead?: BoolFilter<"SupportMessage"> | boolean
    createdAt?: DateTimeFilter<"SupportMessage"> | Date | string
  }

  export type SupportChatCreateWithoutMessagesInput = {
    id?: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSupportChatInput
  }

  export type SupportChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    status?: $Enums.ChatStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportChatCreateOrConnectWithoutMessagesInput = {
    where: SupportChatWhereUniqueInput
    create: XOR<SupportChatCreateWithoutMessagesInput, SupportChatUncheckedCreateWithoutMessagesInput>
  }

  export type SupportChatUpsertWithoutMessagesInput = {
    update: XOR<SupportChatUpdateWithoutMessagesInput, SupportChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<SupportChatCreateWithoutMessagesInput, SupportChatUncheckedCreateWithoutMessagesInput>
    where?: SupportChatWhereInput
  }

  export type SupportChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: SupportChatWhereInput
    data: XOR<SupportChatUpdateWithoutMessagesInput, SupportChatUncheckedUpdateWithoutMessagesInput>
  }

  export type SupportChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportChatNestedInput
  }

  export type SupportChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumChatStatusFieldUpdateOperationsInput | $Enums.ChatStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReceiversInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatCreateNestedOneWithoutUserInput
    office?: OfficeCreateNestedOneWithoutOperatorsInput
  }

  export type UserUncheckedCreateWithoutReceiversInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    officeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderUncheckedCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceiversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiversInput, UserUncheckedCreateWithoutReceiversInput>
  }

  export type OrderCreateWithoutReceiverInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    estimatedBy?: UserCreateNestedOneWithoutEstimatedOrdersInput
    fromOffice: OfficeCreateNestedOneWithoutOrdersFromInput
    toOffice: OfficeCreateNestedOneWithoutOrdersToInput
    user?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutReceiverInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    userId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutReceiverInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutReceiverInput, OrderUncheckedCreateWithoutReceiverInput>
  }

  export type OrderCreateManyReceiverInputEnvelope = {
    data: OrderCreateManyReceiverInput | OrderCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReceiversInput = {
    update: XOR<UserUpdateWithoutReceiversInput, UserUncheckedUpdateWithoutReceiversInput>
    create: XOR<UserCreateWithoutReceiversInput, UserUncheckedCreateWithoutReceiversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiversInput, UserUncheckedUpdateWithoutReceiversInput>
  }

  export type UserUpdateWithoutReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUpdateOneWithoutUserNestedInput
    office?: OfficeUpdateOneWithoutOperatorsNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiversInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    officeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUncheckedUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutReceiverInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutReceiverInput, OrderUncheckedUpdateWithoutReceiverInput>
    create: XOR<OrderCreateWithoutReceiverInput, OrderUncheckedCreateWithoutReceiverInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutReceiverInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutReceiverInput, OrderUncheckedUpdateWithoutReceiverInput>
  }

  export type OrderUpdateManyWithWhereWithoutReceiverInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutReceiverInput>
  }

  export type OfficeCreateWithoutCountryInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUncheckedCreateWithoutCountryInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserUncheckedCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderUncheckedCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderUncheckedCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffUncheckedCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffUncheckedCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeCreateOrConnectWithoutCountryInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutCountryInput, OfficeUncheckedCreateWithoutCountryInput>
  }

  export type OfficeCreateManyCountryInputEnvelope = {
    data: OfficeCreateManyCountryInput | OfficeCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type OfficeUpsertWithWhereUniqueWithoutCountryInput = {
    where: OfficeWhereUniqueInput
    update: XOR<OfficeUpdateWithoutCountryInput, OfficeUncheckedUpdateWithoutCountryInput>
    create: XOR<OfficeCreateWithoutCountryInput, OfficeUncheckedCreateWithoutCountryInput>
  }

  export type OfficeUpdateWithWhereUniqueWithoutCountryInput = {
    where: OfficeWhereUniqueInput
    data: XOR<OfficeUpdateWithoutCountryInput, OfficeUncheckedUpdateWithoutCountryInput>
  }

  export type OfficeUpdateManyWithWhereWithoutCountryInput = {
    where: OfficeScalarWhereInput
    data: XOR<OfficeUpdateManyMutationInput, OfficeUncheckedUpdateManyWithoutCountryInput>
  }

  export type OfficeScalarWhereInput = {
    AND?: OfficeScalarWhereInput | OfficeScalarWhereInput[]
    OR?: OfficeScalarWhereInput[]
    NOT?: OfficeScalarWhereInput | OfficeScalarWhereInput[]
    id?: StringFilter<"Office"> | string
    countryId?: StringFilter<"Office"> | string
    province?: StringFilter<"Office"> | string
    city?: StringFilter<"Office"> | string
    postalCode?: StringFilter<"Office"> | string
    fullAddress?: StringFilter<"Office"> | string
    phone?: StringFilter<"Office"> | string
    createdAt?: DateTimeFilter<"Office"> | Date | string
    updatedAt?: DateTimeFilter<"Office"> | Date | string
  }

  export type CountryCreateWithoutOfficesInput = {
    id?: string
    hyName?: string | null
    ruName?: string | null
    enName?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUncheckedCreateWithoutOfficesInput = {
    id?: string
    hyName?: string | null
    ruName?: string | null
    enName?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryCreateOrConnectWithoutOfficesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutOfficesInput, CountryUncheckedCreateWithoutOfficesInput>
  }

  export type UserCreateWithoutOfficeInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOfficeInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderUncheckedCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOfficeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput>
  }

  export type UserCreateManyOfficeInputEnvelope = {
    data: UserCreateManyOfficeInput | UserCreateManyOfficeInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutFromOfficeInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    estimatedBy?: UserCreateNestedOneWithoutEstimatedOrdersInput
    toOffice: OfficeCreateNestedOneWithoutOrdersToInput
    user?: UserCreateNestedOneWithoutOrdersInput
    receiver?: ReceiverCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutFromOfficeInput = {
    id?: string
    toOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutFromOfficeInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFromOfficeInput, OrderUncheckedCreateWithoutFromOfficeInput>
  }

  export type OrderCreateManyFromOfficeInputEnvelope = {
    data: OrderCreateManyFromOfficeInput | OrderCreateManyFromOfficeInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutToOfficeInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    estimatedBy?: UserCreateNestedOneWithoutEstimatedOrdersInput
    fromOffice: OfficeCreateNestedOneWithoutOrdersFromInput
    user?: UserCreateNestedOneWithoutOrdersInput
    receiver?: ReceiverCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutToOfficeInput = {
    id?: string
    fromOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutToOfficeInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutToOfficeInput, OrderUncheckedCreateWithoutToOfficeInput>
  }

  export type OrderCreateManyToOfficeInputEnvelope = {
    data: OrderCreateManyToOfficeInput | OrderCreateManyToOfficeInput[]
    skipDuplicates?: boolean
  }

  export type TariffCreateWithoutFromOfficeInput = {
    id?: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    toOffice: OfficeCreateNestedOneWithoutIncomingTariffsInput
  }

  export type TariffUncheckedCreateWithoutFromOfficeInput = {
    id?: string
    toOfficeId: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffCreateOrConnectWithoutFromOfficeInput = {
    where: TariffWhereUniqueInput
    create: XOR<TariffCreateWithoutFromOfficeInput, TariffUncheckedCreateWithoutFromOfficeInput>
  }

  export type TariffCreateManyFromOfficeInputEnvelope = {
    data: TariffCreateManyFromOfficeInput | TariffCreateManyFromOfficeInput[]
    skipDuplicates?: boolean
  }

  export type TariffCreateWithoutToOfficeInput = {
    id?: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromOffice: OfficeCreateNestedOneWithoutOutgoingTariffsInput
  }

  export type TariffUncheckedCreateWithoutToOfficeInput = {
    id?: string
    fromOfficeId: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffCreateOrConnectWithoutToOfficeInput = {
    where: TariffWhereUniqueInput
    create: XOR<TariffCreateWithoutToOfficeInput, TariffUncheckedCreateWithoutToOfficeInput>
  }

  export type TariffCreateManyToOfficeInputEnvelope = {
    data: TariffCreateManyToOfficeInput | TariffCreateManyToOfficeInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutOfficesInput = {
    update: XOR<CountryUpdateWithoutOfficesInput, CountryUncheckedUpdateWithoutOfficesInput>
    create: XOR<CountryCreateWithoutOfficesInput, CountryUncheckedCreateWithoutOfficesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutOfficesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutOfficesInput, CountryUncheckedUpdateWithoutOfficesInput>
  }

  export type CountryUpdateWithoutOfficesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hyName?: NullableStringFieldUpdateOperationsInput | string | null
    ruName?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateWithoutOfficesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hyName?: NullableStringFieldUpdateOperationsInput | string | null
    ruName?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutOfficeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOfficeInput, UserUncheckedUpdateWithoutOfficeInput>
    create: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOfficeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOfficeInput, UserUncheckedUpdateWithoutOfficeInput>
  }

  export type UserUpdateManyWithWhereWithoutOfficeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOfficeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isIndividual?: BoolFilter<"User"> | boolean
    isSupporter?: BoolFilter<"User"> | boolean
    hyDocumentType?: StringNullableFilter<"User"> | string | null
    enDocumentType?: StringNullableFilter<"User"> | string | null
    ruDocumentType?: StringNullableFilter<"User"> | string | null
    documentNumber?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    taxpayerId?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    code?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    officeId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutFromOfficeInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutFromOfficeInput, OrderUncheckedUpdateWithoutFromOfficeInput>
    create: XOR<OrderCreateWithoutFromOfficeInput, OrderUncheckedCreateWithoutFromOfficeInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutFromOfficeInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutFromOfficeInput, OrderUncheckedUpdateWithoutFromOfficeInput>
  }

  export type OrderUpdateManyWithWhereWithoutFromOfficeInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutFromOfficeInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutToOfficeInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutToOfficeInput, OrderUncheckedUpdateWithoutToOfficeInput>
    create: XOR<OrderCreateWithoutToOfficeInput, OrderUncheckedCreateWithoutToOfficeInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutToOfficeInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutToOfficeInput, OrderUncheckedUpdateWithoutToOfficeInput>
  }

  export type OrderUpdateManyWithWhereWithoutToOfficeInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutToOfficeInput>
  }

  export type TariffUpsertWithWhereUniqueWithoutFromOfficeInput = {
    where: TariffWhereUniqueInput
    update: XOR<TariffUpdateWithoutFromOfficeInput, TariffUncheckedUpdateWithoutFromOfficeInput>
    create: XOR<TariffCreateWithoutFromOfficeInput, TariffUncheckedCreateWithoutFromOfficeInput>
  }

  export type TariffUpdateWithWhereUniqueWithoutFromOfficeInput = {
    where: TariffWhereUniqueInput
    data: XOR<TariffUpdateWithoutFromOfficeInput, TariffUncheckedUpdateWithoutFromOfficeInput>
  }

  export type TariffUpdateManyWithWhereWithoutFromOfficeInput = {
    where: TariffScalarWhereInput
    data: XOR<TariffUpdateManyMutationInput, TariffUncheckedUpdateManyWithoutFromOfficeInput>
  }

  export type TariffScalarWhereInput = {
    AND?: TariffScalarWhereInput | TariffScalarWhereInput[]
    OR?: TariffScalarWhereInput[]
    NOT?: TariffScalarWhereInput | TariffScalarWhereInput[]
    id?: StringFilter<"Tariff"> | string
    fromOfficeId?: StringFilter<"Tariff"> | string
    toOfficeId?: StringFilter<"Tariff"> | string
    pricePerKg?: DecimalFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeFilter<"Tariff"> | Date | string
  }

  export type TariffUpsertWithWhereUniqueWithoutToOfficeInput = {
    where: TariffWhereUniqueInput
    update: XOR<TariffUpdateWithoutToOfficeInput, TariffUncheckedUpdateWithoutToOfficeInput>
    create: XOR<TariffCreateWithoutToOfficeInput, TariffUncheckedCreateWithoutToOfficeInput>
  }

  export type TariffUpdateWithWhereUniqueWithoutToOfficeInput = {
    where: TariffWhereUniqueInput
    data: XOR<TariffUpdateWithoutToOfficeInput, TariffUncheckedUpdateWithoutToOfficeInput>
  }

  export type TariffUpdateManyWithWhereWithoutToOfficeInput = {
    where: TariffScalarWhereInput
    data: XOR<TariffUpdateManyMutationInput, TariffUncheckedUpdateManyWithoutToOfficeInput>
  }

  export type OfficeCreateWithoutOutgoingTariffsInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutOfficesInput
    operators?: UserCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderCreateNestedManyWithoutToOfficeInput
    incomingTariffs?: TariffCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUncheckedCreateWithoutOutgoingTariffsInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserUncheckedCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderUncheckedCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderUncheckedCreateNestedManyWithoutToOfficeInput
    incomingTariffs?: TariffUncheckedCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeCreateOrConnectWithoutOutgoingTariffsInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutOutgoingTariffsInput, OfficeUncheckedCreateWithoutOutgoingTariffsInput>
  }

  export type OfficeCreateWithoutIncomingTariffsInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutOfficesInput
    operators?: UserCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffCreateNestedManyWithoutFromOfficeInput
  }

  export type OfficeUncheckedCreateWithoutIncomingTariffsInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserUncheckedCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderUncheckedCreateNestedManyWithoutFromOfficeInput
    ordersTo?: OrderUncheckedCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffUncheckedCreateNestedManyWithoutFromOfficeInput
  }

  export type OfficeCreateOrConnectWithoutIncomingTariffsInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutIncomingTariffsInput, OfficeUncheckedCreateWithoutIncomingTariffsInput>
  }

  export type OfficeUpsertWithoutOutgoingTariffsInput = {
    update: XOR<OfficeUpdateWithoutOutgoingTariffsInput, OfficeUncheckedUpdateWithoutOutgoingTariffsInput>
    create: XOR<OfficeCreateWithoutOutgoingTariffsInput, OfficeUncheckedCreateWithoutOutgoingTariffsInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutOutgoingTariffsInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutOutgoingTariffsInput, OfficeUncheckedUpdateWithoutOutgoingTariffsInput>
  }

  export type OfficeUpdateWithoutOutgoingTariffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutOfficesNestedInput
    operators?: UserUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUpdateManyWithoutToOfficeNestedInput
    incomingTariffs?: TariffUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutOutgoingTariffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUncheckedUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUncheckedUpdateManyWithoutToOfficeNestedInput
    incomingTariffs?: TariffUncheckedUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUpsertWithoutIncomingTariffsInput = {
    update: XOR<OfficeUpdateWithoutIncomingTariffsInput, OfficeUncheckedUpdateWithoutIncomingTariffsInput>
    create: XOR<OfficeCreateWithoutIncomingTariffsInput, OfficeUncheckedCreateWithoutIncomingTariffsInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutIncomingTariffsInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutIncomingTariffsInput, OfficeUncheckedUpdateWithoutIncomingTariffsInput>
  }

  export type OfficeUpdateWithoutIncomingTariffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutOfficesNestedInput
    operators?: UserUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUpdateManyWithoutFromOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutIncomingTariffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUncheckedUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUncheckedUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUncheckedUpdateManyWithoutFromOfficeNestedInput
  }

  export type UserCreateWithoutEstimatedOrdersInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    supportChat?: SupportChatCreateNestedOneWithoutUserInput
    office?: OfficeCreateNestedOneWithoutOperatorsInput
  }

  export type UserUncheckedCreateWithoutEstimatedOrdersInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    officeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    supportChat?: SupportChatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEstimatedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEstimatedOrdersInput, UserUncheckedCreateWithoutEstimatedOrdersInput>
  }

  export type OfficeCreateWithoutOrdersFromInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutOfficesInput
    operators?: UserCreateNestedManyWithoutOfficeInput
    ordersTo?: OrderCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUncheckedCreateWithoutOrdersFromInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserUncheckedCreateNestedManyWithoutOfficeInput
    ordersTo?: OrderUncheckedCreateNestedManyWithoutToOfficeInput
    outgoingTariffs?: TariffUncheckedCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffUncheckedCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeCreateOrConnectWithoutOrdersFromInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutOrdersFromInput, OfficeUncheckedCreateWithoutOrdersFromInput>
  }

  export type OfficeCreateWithoutOrdersToInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutOfficesInput
    operators?: UserCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderCreateNestedManyWithoutFromOfficeInput
    outgoingTariffs?: TariffCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeUncheckedCreateWithoutOrdersToInput = {
    id?: string
    countryId: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operators?: UserUncheckedCreateNestedManyWithoutOfficeInput
    ordersFrom?: OrderUncheckedCreateNestedManyWithoutFromOfficeInput
    outgoingTariffs?: TariffUncheckedCreateNestedManyWithoutFromOfficeInput
    incomingTariffs?: TariffUncheckedCreateNestedManyWithoutToOfficeInput
  }

  export type OfficeCreateOrConnectWithoutOrdersToInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutOrdersToInput, OfficeUncheckedCreateWithoutOrdersToInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatCreateNestedOneWithoutUserInput
    office?: OfficeCreateNestedOneWithoutOperatorsInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    officeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivers?: ReceiverUncheckedCreateNestedManyWithoutUserInput
    estimatedOrders?: OrderUncheckedCreateNestedManyWithoutEstimatedByInput
    supportChat?: SupportChatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ReceiverCreateWithoutOrdersInput = {
    id?: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReceiversInput
  }

  export type ReceiverUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReceiverCreateOrConnectWithoutOrdersInput = {
    where: ReceiverWhereUniqueInput
    create: XOR<ReceiverCreateWithoutOrdersInput, ReceiverUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutEstimatedOrdersInput = {
    update: XOR<UserUpdateWithoutEstimatedOrdersInput, UserUncheckedUpdateWithoutEstimatedOrdersInput>
    create: XOR<UserCreateWithoutEstimatedOrdersInput, UserUncheckedCreateWithoutEstimatedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEstimatedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEstimatedOrdersInput, UserUncheckedUpdateWithoutEstimatedOrdersInput>
  }

  export type UserUpdateWithoutEstimatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    supportChat?: SupportChatUpdateOneWithoutUserNestedInput
    office?: OfficeUpdateOneWithoutOperatorsNestedInput
  }

  export type UserUncheckedUpdateWithoutEstimatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    officeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    supportChat?: SupportChatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OfficeUpsertWithoutOrdersFromInput = {
    update: XOR<OfficeUpdateWithoutOrdersFromInput, OfficeUncheckedUpdateWithoutOrdersFromInput>
    create: XOR<OfficeCreateWithoutOrdersFromInput, OfficeUncheckedCreateWithoutOrdersFromInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutOrdersFromInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutOrdersFromInput, OfficeUncheckedUpdateWithoutOrdersFromInput>
  }

  export type OfficeUpdateWithoutOrdersFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutOfficesNestedInput
    operators?: UserUpdateManyWithoutOfficeNestedInput
    ordersTo?: OrderUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutOrdersFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    ordersTo?: OrderUncheckedUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUncheckedUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUncheckedUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUpsertWithoutOrdersToInput = {
    update: XOR<OfficeUpdateWithoutOrdersToInput, OfficeUncheckedUpdateWithoutOrdersToInput>
    create: XOR<OfficeCreateWithoutOrdersToInput, OfficeUncheckedCreateWithoutOrdersToInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutOrdersToInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutOrdersToInput, OfficeUncheckedUpdateWithoutOrdersToInput>
  }

  export type OfficeUpdateWithoutOrdersToInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutOfficesNestedInput
    operators?: UserUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUpdateManyWithoutFromOfficeNestedInput
    outgoingTariffs?: TariffUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutOrdersToInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUncheckedUpdateManyWithoutFromOfficeNestedInput
    outgoingTariffs?: TariffUncheckedUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUncheckedUpdateManyWithoutToOfficeNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUpdateOneWithoutUserNestedInput
    office?: OfficeUpdateOneWithoutOperatorsNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    officeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUncheckedUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ReceiverUpsertWithoutOrdersInput = {
    update: XOR<ReceiverUpdateWithoutOrdersInput, ReceiverUncheckedUpdateWithoutOrdersInput>
    create: XOR<ReceiverCreateWithoutOrdersInput, ReceiverUncheckedCreateWithoutOrdersInput>
    where?: ReceiverWhereInput
  }

  export type ReceiverUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ReceiverWhereInput
    data: XOR<ReceiverUpdateWithoutOrdersInput, ReceiverUncheckedUpdateWithoutOrdersInput>
  }

  export type ReceiverUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReceiversNestedInput
  }

  export type ReceiverUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiverCreateManyUserInput = {
    id?: string
    code?: string | null
    firstName?: string | null
    lastName?: string | null
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    address?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyEstimatedByInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReceiverUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutReceiverNestedInput
  }

  export type ReceiverUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ReceiverUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedBy?: UserUpdateOneWithoutEstimatedOrdersNestedInput
    fromOffice?: OfficeUpdateOneRequiredWithoutOrdersFromNestedInput
    toOffice?: OfficeUpdateOneRequiredWithoutOrdersToNestedInput
    receiver?: ReceiverUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutEstimatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromOffice?: OfficeUpdateOneRequiredWithoutOrdersFromNestedInput
    toOffice?: OfficeUpdateOneRequiredWithoutOrdersToNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    receiver?: ReceiverUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutEstimatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutEstimatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageCreateManyChatInput = {
    id?: string
    senderType: $Enums.SenderType
    senderId: string
    text: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SupportMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderType?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    senderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyReceiverInput = {
    id?: string
    fromOfficeId: string
    toOfficeId: string
    userId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedBy?: UserUpdateOneWithoutEstimatedOrdersNestedInput
    fromOffice?: OfficeUpdateOneRequiredWithoutOrdersFromNestedInput
    toOffice?: OfficeUpdateOneRequiredWithoutOrdersToNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeCreateManyCountryInput = {
    id?: string
    province: string
    city: string
    postalCode: string
    fullAddress: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operators?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    ordersFrom?: OrderUncheckedUpdateManyWithoutFromOfficeNestedInput
    ordersTo?: OrderUncheckedUpdateManyWithoutToOfficeNestedInput
    outgoingTariffs?: TariffUncheckedUpdateManyWithoutFromOfficeNestedInput
    incomingTariffs?: TariffUncheckedUpdateManyWithoutToOfficeNestedInput
  }

  export type OfficeUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyOfficeInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
    isSupporter?: boolean
    hyDocumentType?: string | null
    enDocumentType?: string | null
    ruDocumentType?: string | null
    documentNumber?: string | null
    companyName?: string | null
    taxpayerId?: string | null
    address?: string | null
    phoneNumber?: string | null
    telegramChatId?: string | null
    code?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyFromOfficeInput = {
    id?: string
    toOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyToOfficeInput = {
    id?: string
    fromOfficeId: string
    userId?: string | null
    receiverId?: string | null
    productPrice: Decimal | DecimalJsLike | number | string
    price?: Decimal | DecimalJsLike | number | string
    pieceCount?: number
    currency: $Enums.Currency
    marketName: string
    productDescription: string
    invoiceUrl?: string | null
    comment?: string | null
    tnVedCode?: string | null
    isNew?: boolean
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: Decimal | DecimalJsLike | number | string | null
    estimatedById?: string | null
    estimatedAt?: Date | string | null
    qrCode?: string | null
    trackingNumber: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffCreateManyFromOfficeInput = {
    id?: string
    toOfficeId: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffCreateManyToOfficeInput = {
    id?: string
    fromOfficeId: string
    pricePerKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivers?: ReceiverUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    estimatedOrders?: OrderUncheckedUpdateManyWithoutEstimatedByNestedInput
    supportChat?: SupportChatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isIndividual?: BoolFieldUpdateOperationsInput | boolean
    isSupporter?: BoolFieldUpdateOperationsInput | boolean
    hyDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    enDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    ruDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    taxpayerId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutFromOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedBy?: UserUpdateOneWithoutEstimatedOrdersNestedInput
    toOffice?: OfficeUpdateOneRequiredWithoutOrdersToNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    receiver?: ReceiverUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutFromOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutFromOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutToOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedBy?: UserUpdateOneWithoutEstimatedOrdersNestedInput
    fromOffice?: OfficeUpdateOneRequiredWithoutOrdersFromNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    receiver?: ReceiverUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutToOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutToOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pieceCount?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    marketName?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tnVedCode?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tariffRateAtBooking?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estimatedById?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUpdateWithoutFromOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toOffice?: OfficeUpdateOneRequiredWithoutIncomingTariffsNestedInput
  }

  export type TariffUncheckedUpdateWithoutFromOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateManyWithoutFromOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    toOfficeId?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUpdateWithoutToOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromOffice?: OfficeUpdateOneRequiredWithoutOutgoingTariffsNestedInput
  }

  export type TariffUncheckedUpdateWithoutToOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateManyWithoutToOfficeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromOfficeId?: StringFieldUpdateOperationsInput | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}