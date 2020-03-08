
# Class: AbstractFirestoreRepository <**T**>

## Type parameters

▪ **T**: *[IEntity](../interfaces/ientity.md)*

## Hierarchy

* [BaseRepository](baserepository.md)

  ↳ **AbstractFirestoreRepository**

  ↳ [TransactionRepository](transactionrepository.md)

  ↳ [BaseFirestoreRepository](basefirestorerepository.md)

## Implements

* [IBaseRepository](../interfaces/ibaserepository.md)‹T, this› & [IQueryable](../interfaces/iqueryable.md)‹T, this› & [IOrderable](../interfaces/iorderable.md)‹T, this› & [ILimitable](../interfaces/ilimitable.md)‹T, this› & [IQueryExecutor](../interfaces/iqueryexecutor.md)‹T, this›

## Index

### Constructors

* [constructor](abstractfirestorerepository.md#constructor)

### Properties

* [colMetadata](abstractfirestorerepository.md#protected-colmetadata)
* [colName](abstractfirestorerepository.md#protected-colname)
* [collectionPath](abstractfirestorerepository.md#protected-collectionpath)
* [config](abstractfirestorerepository.md#protected-config)
* [subColMetadata](abstractfirestorerepository.md#protected-subcolmetadata)

### Methods

* [create](abstractfirestorerepository.md#abstract-create)
* [delete](abstractfirestorerepository.md#abstract-delete)
* [execute](abstractfirestorerepository.md#abstract-execute)
* [extractTFromColSnap](abstractfirestorerepository.md#protected-extracttfromcolsnap)
* [extractTFromDocSnap](abstractfirestorerepository.md#protected-extracttfromdocsnap)
* [find](abstractfirestorerepository.md#find)
* [findById](abstractfirestorerepository.md#abstract-findbyid)
* [findOne](abstractfirestorerepository.md#findone)
* [initializeSubCollections](abstractfirestorerepository.md#protected-initializesubcollections)
* [limit](abstractfirestorerepository.md#limit)
* [orderByAscending](abstractfirestorerepository.md#orderbyascending)
* [orderByDescending](abstractfirestorerepository.md#orderbydescending)
* [toSerializableObject](abstractfirestorerepository.md#protected-toserializableobject)
* [transformFirestoreTypes](abstractfirestorerepository.md#protected-transformfirestoretypes)
* [update](abstractfirestorerepository.md#abstract-update)
* [validate](abstractfirestorerepository.md#validate)
* [whereArrayContains](abstractfirestorerepository.md#wherearraycontains)
* [whereEqualTo](abstractfirestorerepository.md#whereequalto)
* [whereGreaterOrEqualThan](abstractfirestorerepository.md#wheregreaterorequalthan)
* [whereGreaterThan](abstractfirestorerepository.md#wheregreaterthan)
* [whereLessOrEqualThan](abstractfirestorerepository.md#wherelessorequalthan)
* [whereLessThan](abstractfirestorerepository.md#wherelessthan)

## Constructors

###  constructor

\+ **new AbstractFirestoreRepository**(`nameOrConstructor`: string | Function, `collectionPath?`: string): *[AbstractFirestoreRepository](abstractfirestorerepository.md)*

*Defined in [AbstractFirestoreRepository.ts:33](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrConstructor` | string &#124; Function |
`collectionPath?` | string |

**Returns:** *[AbstractFirestoreRepository](abstractfirestorerepository.md)*

## Properties

### `Protected` colMetadata

• **colMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)*

*Defined in [AbstractFirestoreRepository.ts:30](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L30)*

___

### `Protected` colName

• **colName**: *string*

*Defined in [AbstractFirestoreRepository.ts:31](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L31)*

___

### `Protected` collectionPath

• **collectionPath**: *string*

*Defined in [AbstractFirestoreRepository.ts:33](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L33)*

___

### `Protected` config

• **config**: *[MetadataStorageConfig](../interfaces/metadatastorageconfig.md)*

*Defined in [AbstractFirestoreRepository.ts:32](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L32)*

___

### `Protected` subColMetadata

• **subColMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)[]*

*Defined in [AbstractFirestoreRepository.ts:29](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L29)*

## Methods

### `Abstract` create

▸ **create**(`item`: [PartialBy](../globals.md#partialby)‹T, "id"›): *Promise‹T›*

*Defined in [AbstractFirestoreRepository.ts:373](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L373)*

Creates a document.
If no id is passed, is automatically generated.
Must be implemented by base repositores

**`abstract`** 

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type |
------ | ------ |
`item` | [PartialBy](../globals.md#partialby)‹T, "id"› |

**Returns:** *Promise‹T›*

___

### `Abstract` delete

▸ **delete**(`id`: string): *Promise‹void›*

*Defined in [AbstractFirestoreRepository.ts:395](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L395)*

Deletes a document.
Must be implemented by base repositores

**`abstract`** 

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

### `Abstract` execute

▸ **execute**(`queries`: [IFireOrmQueryLine](../interfaces/ifireormqueryline.md)[], `limitVal?`: number, `orderByObj?`: [IOrderByParams](../interfaces/iorderbyparams.md), `single?`: boolean): *Promise‹T[]›*

*Defined in [AbstractFirestoreRepository.ts:345](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L345)*

Takes all the queries stored by QueryBuilder and executes them.
Must be implemented by base repositores

**`abstract`** 

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queries` | [IFireOrmQueryLine](../interfaces/ifireormqueryline.md)[] | list of queries stored in QueryBuilder |
`limitVal?` | number | - |
`orderByObj?` | [IOrderByParams](../interfaces/iorderbyparams.md) | - |
`single?` | boolean | - |

**Returns:** *Promise‹T[]›*

results from firestore converted into
entities <T>

___

### `Protected` extractTFromColSnap

▸ **extractTFromColSnap**(`q`: QuerySnapshot): *T[]*

*Defined in [AbstractFirestoreRepository.ts:118](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`q` | QuerySnapshot |

**Returns:** *T[]*

___

### `Protected` extractTFromDocSnap

▸ **extractTFromDocSnap**(`doc`: DocumentSnapshot): *T*

*Defined in [AbstractFirestoreRepository.ts:102](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | DocumentSnapshot |

**Returns:** *T*

___

###  find

▸ **find**(): *Promise‹T[]›*

*Defined in [AbstractFirestoreRepository.ts:282](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L282)*

Execute the query and applies all the filters (if specified)

**`memberof`** AbstractFirestoreRepository

**Returns:** *Promise‹T[]›*

List of documents that matched the filters
(if specified)

___

### `Abstract` findById

▸ **findById**(`id`: string): *Promise‹T›*

*Defined in [AbstractFirestoreRepository.ts:361](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L361)*

Retreive a document with the specified id.
Must be implemented by base repositores

**`abstract`** 

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹T›*

___

###  findOne

▸ **findOne**(): *Promise‹T | null›*

*Defined in [AbstractFirestoreRepository.ts:295](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L295)*

Execute the query to find at least one document matching all
filters (if specified)

**`memberof`** AbstractFirestoreRepository

**Returns:** *Promise‹T | null›*

One document that matched the filters
(if specified), or null if none exists.

___

### `Protected` initializeSubCollections

▸ **initializeSubCollections**(`entity`: T): *void*

*Defined in [AbstractFirestoreRepository.ts:88](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |

**Returns:** *void*

___

###  limit

▸ **limit**(`limitVal`: number): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:237](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L237)*

Returns a new QueryBuilder with a maximum number of results
to return. Can only be used once per query.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`limitVal` | number | maximum number of results to return Must be greater or equal than 0 |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

QueryBuilder A new QueryBuilder with
the specified limit applied

___

###  orderByAscending

▸ **orderByAscending**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:257](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L257)*

Returns a new QueryBuilder with an additional ascending order
specified by @param prop. Can only be used once per query.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be ordered on, where prop could be keyof T or a lambda where T is the first parameter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
ordering applied.

___

###  orderByDescending

▸ **orderByDescending**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:271](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L271)*

Returns a new QueryBuilder with an additional descending order
specified by @param prop. Can only be used once per query.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be ordered on, where prop could be keyof T or a lambda where T is the first parameter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
ordering applied.

___

### `Protected` toSerializableObject

▸ **toSerializableObject**(`obj`: T): *Object*

*Defined in [AbstractFirestoreRepository.ts:67](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *Object*

___

### `Protected` transformFirestoreTypes

▸ **transformFirestoreTypes**(`obj`: T): *T*

*Defined in [AbstractFirestoreRepository.ts:70](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *T*

___

### `Abstract` update

▸ **update**(`item`: T): *Promise‹T›*

*Defined in [AbstractFirestoreRepository.ts:384](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L384)*

Updates a document.
Must be implemented by base repositores

**`abstract`** 

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *Promise‹T›*

___

###  validate

▸ **validate**(`item`: T): *Promise‹ValidationError[]›*

*Defined in [AbstractFirestoreRepository.ts:305](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L305)*

Uses class-validator to validate an entity using decorators set in the collection class

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | class or object representing an entity |

**Returns:** *Promise‹ValidationError[]›*

An array of class-validator errors

___

###  whereArrayContains

▸ **whereArrayContains**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:220](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L220)*

Returns a new QueryBuilder with a filter specifying that the
value in @param val must be contained in @param prop.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be filtered on, where prop could be keyof T or a lambda where T is the first parameter |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) | value to compare in the filter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
query applied.

___

###  whereEqualTo

▸ **whereEqualTo**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:133](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L133)*

Returns a new QueryBuilder with a filter specifying that the
value in @param prop must be equal to @param val.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be filtered on, where prop could be keyof T or a lambda where T is the first parameter |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) | value to compare in the filter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
query applied.

___

###  whereGreaterOrEqualThan

▸ **whereGreaterOrEqualThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:166](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L166)*

Returns a new QueryBuilder with a filter specifying that the
value in @param prop must be greater or equal than @param val.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be filtered on, where prop could be keyof T or a lambda where T is the first parameter |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) | value to compare in the filter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
query applied.

___

###  whereGreaterThan

▸ **whereGreaterThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:148](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L148)*

Returns a new QueryBuilder with a filter specifying that the
value in @param prop must be greater than @param val.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be filtered on, where prop could be keyof T or a lambda where T is the first parameter |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) | value to compare in the filter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
query applied.

___

###  whereLessOrEqualThan

▸ **whereLessOrEqualThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:202](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L202)*

Returns a new QueryBuilder with a filter specifying that the
value in @param prop must be less or equal than @param val.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be filtered on, where prop could be keyof T or a lambda where T is the first parameter |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) | value to compare in the filter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
query applied.

___

###  whereLessThan

▸ **whereLessThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [AbstractFirestoreRepository.ts:184](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L184)*

Returns a new QueryBuilder with a filter specifying that the
value in @param prop must be less than @param val.

**`memberof`** AbstractFirestoreRepository

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› | field to be filtered on, where prop could be keyof T or a lambda where T is the first parameter |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) | value to compare in the filter |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

A new QueryBuilder with the specified
query applied.
