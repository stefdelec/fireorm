
# Class: TransactionRepository <**T**>

## Type parameters

▪ **T**: *[IEntity](../interfaces/ientity.md)*

## Hierarchy

  ↳ [AbstractFirestoreRepository](abstractfirestorerepository.md)‹T›

  ↳ **TransactionRepository**

## Implements

* [IBaseRepository](../interfaces/ibaserepository.md)‹T, this› & [IQueryable](../interfaces/iqueryable.md)‹T, this› & [IOrderable](../interfaces/iorderable.md)‹T, this› & [ILimitable](../interfaces/ilimitable.md)‹T, this› & [IQueryExecutor](../interfaces/iqueryexecutor.md)‹T, this›
* [IBaseRepository](../interfaces/ibaserepository.md)‹T, this› & [IQueryable](../interfaces/iqueryable.md)‹T, this› & [IOrderable](../interfaces/iorderable.md)‹T, this› & [ILimitable](../interfaces/ilimitable.md)‹T, this› & [IQueryExecutor](../interfaces/iqueryexecutor.md)‹T, this›

## Index

### Constructors

* [constructor](transactionrepository.md#constructor)

### Properties

* [colMetadata](transactionrepository.md#protected-colmetadata)
* [colName](transactionrepository.md#protected-colname)
* [collectionPath](transactionrepository.md#protected-collectionpath)
* [config](transactionrepository.md#protected-config)
* [firestoreColRef](transactionrepository.md#private-firestorecolref)
* [subColMetadata](transactionrepository.md#protected-subcolmetadata)
* [transaction](transactionrepository.md#private-transaction)

### Methods

* [create](transactionrepository.md#create)
* [delete](transactionrepository.md#delete)
* [execute](transactionrepository.md#execute)
* [extractTFromColSnap](transactionrepository.md#protected-extracttfromcolsnap)
* [extractTFromDocSnap](transactionrepository.md#protected-extracttfromdocsnap)
* [find](transactionrepository.md#find)
* [findById](transactionrepository.md#findbyid)
* [findOne](transactionrepository.md#findone)
* [initializeSubCollections](transactionrepository.md#protected-initializesubcollections)
* [limit](transactionrepository.md#limit)
* [orderByAscending](transactionrepository.md#orderbyascending)
* [orderByDescending](transactionrepository.md#orderbydescending)
* [toSerializableObject](transactionrepository.md#protected-toserializableobject)
* [transformFirestoreTypes](transactionrepository.md#protected-transformfirestoretypes)
* [update](transactionrepository.md#update)
* [validate](transactionrepository.md#validate)
* [whereArrayContains](transactionrepository.md#wherearraycontains)
* [whereEqualTo](transactionrepository.md#whereequalto)
* [whereGreaterOrEqualThan](transactionrepository.md#wheregreaterorequalthan)
* [whereGreaterThan](transactionrepository.md#wheregreaterthan)
* [whereLessOrEqualThan](transactionrepository.md#wherelessorequalthan)
* [whereLessThan](transactionrepository.md#wherelessthan)

## Constructors

###  constructor

\+ **new TransactionRepository**(`transaction`: Transaction, `entity`: [Instantiable](../globals.md#instantiable)‹T›): *[TransactionRepository](transactionrepository.md)*

*Overrides [AbstractFirestoreRepository](abstractfirestorerepository.md).[constructor](abstractfirestorerepository.md#constructor)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:23](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |

**Returns:** *[TransactionRepository](transactionrepository.md)*

## Properties

### `Protected` colMetadata

• **colMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)*

*Inherited from [TransactionRepository](transactionrepository.md).[colMetadata](transactionrepository.md#protected-colmetadata)*

*Defined in [AbstractFirestoreRepository.ts:30](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L30)*

___

### `Protected` colName

• **colName**: *string*

*Inherited from [TransactionRepository](transactionrepository.md).[colName](transactionrepository.md#protected-colname)*

*Defined in [AbstractFirestoreRepository.ts:31](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L31)*

___

### `Protected` collectionPath

• **collectionPath**: *string*

*Inherited from [TransactionRepository](transactionrepository.md).[collectionPath](transactionrepository.md#protected-collectionpath)*

*Defined in [AbstractFirestoreRepository.ts:33](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L33)*

___

### `Protected` config

• **config**: *[MetadataStorageConfig](../interfaces/metadatastorageconfig.md)*

*Inherited from [TransactionRepository](transactionrepository.md).[config](transactionrepository.md#protected-config)*

*Defined in [AbstractFirestoreRepository.ts:32](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L32)*

___

### `Private` firestoreColRef

• **firestoreColRef**: *CollectionReference*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:22](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L22)*

___

### `Protected` subColMetadata

• **subColMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)[]*

*Inherited from [TransactionRepository](transactionrepository.md).[subColMetadata](transactionrepository.md#protected-subcolmetadata)*

*Defined in [AbstractFirestoreRepository.ts:29](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L29)*

___

### `Private` transaction

• **transaction**: *Transaction*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:23](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L23)*

## Methods

###  create

▸ **create**(`item`: [WithOptionalId](../globals.md#withoptionalid)‹T›): *Promise‹T›*

*Overrides [AbstractFirestoreRepository](abstractfirestorerepository.md).[create](abstractfirestorerepository.md#abstract-create)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:54](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [WithOptionalId](../globals.md#withoptionalid)‹T› |

**Returns:** *Promise‹T›*

___

###  delete

▸ **delete**(`id`: string): *Promise‹void›*

*Overrides [AbstractFirestoreRepository](abstractfirestorerepository.md).[delete](abstractfirestorerepository.md#abstract-delete)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:93](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  execute

▸ **execute**(`queries`: [IFireOrmQueryLine](../interfaces/ifireormqueryline.md)[]): *Promise‹T[]›*

*Overrides [AbstractFirestoreRepository](abstractfirestorerepository.md).[execute](abstractfirestorerepository.md#abstract-execute)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:40](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | [IFireOrmQueryLine](../interfaces/ifireormqueryline.md)[] |

**Returns:** *Promise‹T[]›*

___

### `Protected` extractTFromColSnap

▸ **extractTFromColSnap**(`q`: QuerySnapshot): *T[]*

*Inherited from [TransactionRepository](transactionrepository.md).[extractTFromColSnap](transactionrepository.md#protected-extracttfromcolsnap)*

*Defined in [AbstractFirestoreRepository.ts:118](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`q` | QuerySnapshot |

**Returns:** *T[]*

___

### `Protected` extractTFromDocSnap

▸ **extractTFromDocSnap**(`doc`: DocumentSnapshot): *T*

*Inherited from [TransactionRepository](transactionrepository.md).[extractTFromDocSnap](transactionrepository.md#protected-extracttfromdocsnap)*

*Defined in [AbstractFirestoreRepository.ts:102](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | DocumentSnapshot |

**Returns:** *T*

___

###  find

▸ **find**(): *Promise‹T[]›*

*Inherited from [TransactionRepository](transactionrepository.md).[find](transactionrepository.md#find)*

*Defined in [AbstractFirestoreRepository.ts:282](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L282)*

Execute the query and applies all the filters (if specified)

**`memberof`** AbstractFirestoreRepository

**Returns:** *Promise‹T[]›*

List of documents that matched the filters
(if specified)

___

###  findById

▸ **findById**(`id`: string): *Promise‹T›*

*Overrides [AbstractFirestoreRepository](abstractfirestorerepository.md).[findById](abstractfirestorerepository.md#abstract-findbyid)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:49](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹T›*

___

###  findOne

▸ **findOne**(): *Promise‹T | null›*

*Inherited from [TransactionRepository](transactionrepository.md).[findOne](transactionrepository.md#findone)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[initializeSubCollections](transactionrepository.md#protected-initializesubcollections)*

*Defined in [AbstractFirestoreRepository.ts:88](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |

**Returns:** *void*

___

###  limit

▸ **limit**(): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Overrides [BaseFirestoreRepository](basefirestorerepository.md).[limit](basefirestorerepository.md#limit)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:97](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L97)*

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  orderByAscending

▸ **orderByAscending**(): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Overrides [BaseFirestoreRepository](basefirestorerepository.md).[orderByAscending](basefirestorerepository.md#orderbyascending)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:101](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L101)*

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  orderByDescending

▸ **orderByDescending**(): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Overrides [BaseFirestoreRepository](basefirestorerepository.md).[orderByDescending](basefirestorerepository.md#orderbydescending)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:105](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L105)*

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

### `Protected` toSerializableObject

▸ **toSerializableObject**(`obj`: T): *Object*

*Inherited from [TransactionRepository](transactionrepository.md).[toSerializableObject](transactionrepository.md#protected-toserializableobject)*

*Defined in [AbstractFirestoreRepository.ts:67](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *Object*

___

### `Protected` transformFirestoreTypes

▸ **transformFirestoreTypes**(`obj`: T): *T*

*Inherited from [TransactionRepository](transactionrepository.md).[transformFirestoreTypes](transactionrepository.md#protected-transformfirestoretypes)*

*Defined in [AbstractFirestoreRepository.ts:70](https://github.com/wovalle/fireorm/blob/5547513/src/AbstractFirestoreRepository.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *T*

___

###  update

▸ **update**(`item`: T): *Promise‹T›*

*Overrides [AbstractFirestoreRepository](abstractfirestorerepository.md).[update](abstractfirestorerepository.md#abstract-update)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.ts:78](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *Promise‹T›*

___

###  validate

▸ **validate**(`item`: T): *Promise‹ValidationError[]›*

*Inherited from [TransactionRepository](transactionrepository.md).[validate](transactionrepository.md#validate)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[whereArrayContains](transactionrepository.md#wherearraycontains)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[whereEqualTo](transactionrepository.md#whereequalto)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[whereGreaterOrEqualThan](transactionrepository.md#wheregreaterorequalthan)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[whereGreaterThan](transactionrepository.md#wheregreaterthan)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[whereLessOrEqualThan](transactionrepository.md#wherelessorequalthan)*

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

*Inherited from [TransactionRepository](transactionrepository.md).[whereLessThan](transactionrepository.md#wherelessthan)*

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
