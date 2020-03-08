
# fireorm🔥

## Index

### Enumerations

* [FirestoreOperators](enums/firestoreoperators.md)

### Classes

* [AbstractFirestoreRepository](classes/abstractfirestorerepository.md)
* [BandRepository](classes/bandrepository.md)
* [BaseFirestoreBatchRepository](classes/basefirestorebatchrepository.md)
* [BaseFirestoreRepository](classes/basefirestorerepository.md)
* [BaseRepository](classes/baserepository.md)
* [FakeExecutor](classes/fakeexecutor.md)
* [FirestoreBatch](classes/firestorebatch.md)
* [FirestoreBatchSingleRepository](classes/firestorebatchsinglerepository.md)
* [FirestoreBatchUnit](classes/firestorebatchunit.md)
* [FirestoreTransaction](classes/firestoretransaction.md)
* [MetadataStorage](classes/metadatastorage.md)
* [QueryBuilder](classes/querybuilder.md)
* [Test](classes/test.md)
* [TransactionRepository](classes/transactionrepository.md)

### Interfaces

* [CollectionMetadata](interfaces/collectionmetadata.md)
* [IBaseRepository](interfaces/ibaserepository.md)
* [IEntity](interfaces/ientity.md)
* [IFireOrmQueryLine](interfaces/ifireormqueryline.md)
* [ILimitable](interfaces/ilimitable.md)
* [IMetadataStore](interfaces/imetadatastore.md)
* [IOrderByParams](interfaces/iorderbyparams.md)
* [IOrderable](interfaces/iorderable.md)
* [IQueryExecutor](interfaces/iqueryexecutor.md)
* [IQueryable](interfaces/iqueryable.md)
* [MetadataStorageConfig](interfaces/metadatastorageconfig.md)
* [RepositoryMetadata](interfaces/repositorymetadata.md)

### Type aliases

* [BatchOperation](globals.md#batchoperation)
* [IFirestoreVal](globals.md#ifirestoreval)
* [IQueryBuilder](globals.md#iquerybuilder)
* [IQueryBuilderResult](globals.md#iquerybuilderresult)
* [IRepository](globals.md#irepository)
* [ISubCollection](globals.md#isubcollection)
* [IWherePropParam](globals.md#iwherepropparam)
* [InstanstiableIEntity](globals.md#instanstiableientity)
* [Instantiable](globals.md#instantiable)
* [PartialBy](globals.md#partialby)
* [RepositoryType](globals.md#repositorytype)
* [TestTransactionRepository](globals.md#testtransactionrepository)
* [WithOptionalId](globals.md#withoptionalid)

### Variables

* [GetBaseRepository](globals.md#const-getbaserepository)
* [GetCustomRepository](globals.md#const-getcustomrepository)
* [GetRepository](globals.md#const-getrepository)
* [Initialize](globals.md#const-initialize)
* [MockFirebase](globals.md#const-mockfirebase)
* [metadataStorage](globals.md#const-metadatastorage)

### Functions

* [Collection](globals.md#collection)
* [CustomRepository](globals.md#customrepository)
* [SubCollection](globals.md#subcollection)
* [_getRepository](globals.md#_getrepository)
* [clearMetadataStorage](globals.md#clearmetadatastorage)
* [createBatch](globals.md#const-createbatch)
* [getBaseRepository](globals.md#getbaserepository)
* [getCustomRepository](globals.md#getcustomrepository)
* [getMetadataStorage](globals.md#const-getmetadatastorage)
* [getRepository](globals.md#getrepository)
* [getStore](globals.md#getstore)
* [initialize](globals.md#const-initialize)
* [initializeMetadataStorage](globals.md#initializemetadatastorage)
* [runTransaction](globals.md#const-runtransaction)
* [serializeEntity](globals.md#serializeentity)

## Type aliases

###  BatchOperation

Ƭ **BatchOperation**: *object*

*Defined in [Batch/FirestoreBatchUnit.ts:7](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L7)*

#### Type declaration:

* **entity**: *[Instantiable](globals.md#instantiable)‹T›*

* **item**: *[IEntity](interfaces/ientity.md)*

* **ref**: *DocumentReference*

* **subCollectionsMetadata**: *[CollectionMetadata](interfaces/collectionmetadata.md)[]*

* **type**: *"create" | "update" | "delete"*

* **validateModels**: *boolean*

___

###  IFirestoreVal

Ƭ **IFirestoreVal**: *string | number | Date | Boolean | DocumentReference*

*Defined in [types.ts:11](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L11)*

___

###  IQueryBuilder

Ƭ **IQueryBuilder**: *[IQueryable](interfaces/iqueryable.md)‹T› & [IOrderable](interfaces/iorderable.md)‹T› & [ILimitable](interfaces/ilimitable.md)‹T›*

*Defined in [types.ts:74](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L74)*

___

###  IQueryBuilderResult

Ƭ **IQueryBuilderResult**: *[IFireOrmQueryLine](interfaces/ifireormqueryline.md)[]*

*Defined in [types.ts:38](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L38)*

___

###  IRepository

Ƭ **IRepository**: *[IBaseRepository](interfaces/ibaserepository.md)‹T› & [IQueryBuilder](globals.md#iquerybuilder)‹T› & [IQueryExecutor](interfaces/iqueryexecutor.md)‹T›*

*Defined in [types.ts:94](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L94)*

___

###  ISubCollection

Ƭ **ISubCollection**: *[IRepository](globals.md#irepository)‹T›*

*Defined in [types.ts:98](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L98)*

___

###  IWherePropParam

Ƭ **IWherePropParam**: *keyof T | function*

*Defined in [types.ts:40](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L40)*

___

###  InstanstiableIEntity

Ƭ **InstanstiableIEntity**: *[Instantiable](globals.md#instantiable)‹[IEntity](interfaces/ientity.md)›*

*Defined in [types.ts:105](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L105)*

___

###  Instantiable

Ƭ **Instantiable**: *object*

*Defined in [types.ts:104](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L104)*

#### Type declaration:

* **new __type**(): *T*

___

###  PartialBy

Ƭ **PartialBy**: *Omit‹T, K› & Partial‹Pick‹T, K››*

*Defined in [types.ts:3](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L3)*

___

###  RepositoryType

Ƭ **RepositoryType**: *"default" | "base" | "custom"*

*Defined in [helpers.ts:43](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L43)*

___

###  TestTransactionRepository

Ƭ **TestTransactionRepository**: *Pick‹[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›, "runTransaction"›*

*Defined in [Transaction/BaseFirestoreTransactionRepository.spec.ts:10](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.spec.ts#L10)*

___

###  WithOptionalId

Ƭ **WithOptionalId**: *Pick‹T, Exclude‹keyof T, "id"›› & Partial‹Pick‹T, "id"››*

*Defined in [types.ts:5](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L5)*

## Variables

### `Const` GetBaseRepository

• **GetBaseRepository**: *[getBaseRepository](globals.md#getbaserepository)* = getBaseRepository

*Defined in [helpers.ts:41](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L41)*

**`deprecated`** Use getBaseRepository. This will be removed in a future version.

___

### `Const` GetCustomRepository

• **GetCustomRepository**: *[getCustomRepository](globals.md#getcustomrepository)* = getCustomRepository

*Defined in [helpers.ts:29](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L29)*

**`deprecated`** Use getCustomRepository. This will be removed in a future version.

___

### `Const` GetRepository

• **GetRepository**: *[getRepository](globals.md#getrepository)* = getRepository

*Defined in [helpers.ts:17](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L17)*

**`deprecated`** Use getRepository. This will be removed in a future version.

___

### `Const` Initialize

• **Initialize**: *initialize* = initialize

*Defined in [MetadataStorage.ts:136](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L136)*

**`deprecated`** Use initialize. This will be removed in a future version.

___

### `Const` MockFirebase

• **MockFirebase**: *any* = require('mock-cloud-firestore')

*Defined in [BaseFirestoreRepository.spec.ts:2](https://github.com/wovalle/fireorm/blob/5547513/src/BaseFirestoreRepository.spec.ts#L2)*

*Defined in [helpers.spec.ts:2](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.spec.ts#L2)*

*Defined in [Batch/BaseFirestoreBatchRepository.spec.ts:2](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.spec.ts#L2)*

*Defined in [Batch/FirestoreBatch.spec.ts:2](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.spec.ts#L2)*

*Defined in [Transaction/BaseFirestoreTransactionRepository.spec.ts:2](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/BaseFirestoreTransactionRepository.spec.ts#L2)*

*Defined in [Transaction/FirestoreTransaction.spec.ts:2](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/FirestoreTransaction.spec.ts#L2)*

___

### `Const` metadataStorage

• **metadataStorage**: *[MetadataStorage](classes/metadatastorage.md)‹›* = getMetadataStorage()

*Defined in [Transaction/FirestoreTransaction.ts:6](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/FirestoreTransaction.ts#L6)*

## Functions

###  Collection

▸ **Collection**(`entityName?`: string): *Function*

*Defined in [Decorators/Collection.ts:5](https://github.com/wovalle/fireorm/blob/5547513/src/Decorators/Collection.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`entityName?` | string |

**Returns:** *Function*

___

###  CustomRepository

▸ **CustomRepository**(`entity`: [InstanstiableIEntity](globals.md#instanstiableientity)): *Function*

*Defined in [Decorators/CustomRepository.ts:4](https://github.com/wovalle/fireorm/blob/5547513/src/Decorators/CustomRepository.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [InstanstiableIEntity](globals.md#instanstiableientity) |

**Returns:** *Function*

___

###  SubCollection

▸ **SubCollection**(`entity`: [InstanstiableIEntity](globals.md#instanstiableientity), `entityName?`: string): *Function*

*Defined in [Decorators/SubCollection.ts:5](https://github.com/wovalle/fireorm/blob/5547513/src/Decorators/SubCollection.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [InstanstiableIEntity](globals.md#instanstiableientity) |
`entityName?` | string |

**Returns:** *Function*

___

###  _getRepository

▸ **_getRepository**<**T**>(`entity`: [Instantiable](globals.md#instantiable)‹T›, `repositoryType`: [RepositoryType](globals.md#repositorytype), `documentPath`: string): *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

*Defined in [helpers.ts:45](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L45)*

**Type parameters:**

▪ **T**: *[IEntity](interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](globals.md#instantiable)‹T› |
`repositoryType` | [RepositoryType](globals.md#repositorytype) |
`documentPath` | string |

**Returns:** *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

___

###  clearMetadataStorage

▸ **clearMetadataStorage**(): *void*

*Defined in [MetadataStorage.ts:116](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L116)*

Used for testing to reset metadataStore to clean state

**Returns:** *void*

___

### `Const` createBatch

▸ **createBatch**(): *[FirestoreBatch](classes/firestorebatch.md)‹›*

*Defined in [helpers.ts:106](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L106)*

**Returns:** *[FirestoreBatch](classes/firestorebatch.md)‹›*

___

###  getBaseRepository

▸ **getBaseRepository**<**T**>(`entity`: [Instantiable](globals.md#instantiable)‹T›, `documentPath?`: string): *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

*Defined in [helpers.ts:31](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L31)*

**Type parameters:**

▪ **T**: *[IEntity](interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](globals.md#instantiable)‹T› |
`documentPath?` | string |

**Returns:** *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

___

###  getCustomRepository

▸ **getCustomRepository**<**T**>(`entity`: [Instantiable](globals.md#instantiable)‹T›, `documentPath?`: string): *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

*Defined in [helpers.ts:19](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L19)*

**Type parameters:**

▪ **T**: *[IEntity](interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](globals.md#instantiable)‹T› |
`documentPath?` | string |

**Returns:** *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

___

### `Const` getMetadataStorage

▸ **getMetadataStorage**(): *[MetadataStorage](classes/metadatastorage.md)*

*Defined in [MetadataStorage.ts:95](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L95)*

Return exisiting metadataStorage, otherwise create if not present

**Returns:** *[MetadataStorage](classes/metadatastorage.md)*

___

###  getRepository

▸ **getRepository**<**T**>(`entity`: [Instantiable](globals.md#instantiable)‹T›, `documentPath?`: string): *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

*Defined in [helpers.ts:7](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L7)*

**Type parameters:**

▪ **T**: *[IEntity](interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](globals.md#instantiable)‹T› |
`documentPath?` | string |

**Returns:** *[BaseFirestoreRepository](classes/basefirestorerepository.md)‹T›*

___

###  getStore

▸ **getStore**(): *[IMetadataStore](interfaces/imetadatastore.md)*

*Defined in [MetadataStorage.ts:9](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L9)*

**Returns:** *[IMetadataStore](interfaces/imetadatastore.md)*

___

### `Const` initialize

▸ **initialize**(`firestore`: Firestore, `config`: [MetadataStorageConfig](interfaces/metadatastorageconfig.md)): *void*

*Defined in [MetadataStorage.ts:121](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L121)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`firestore` | Firestore | - |
`config` | [MetadataStorageConfig](interfaces/metadatastorageconfig.md) | { validateModels: false } |

**Returns:** *void*

___

###  initializeMetadataStorage

▸ **initializeMetadataStorage**(): *void*

*Defined in [MetadataStorage.ts:105](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L105)*

**Returns:** *void*

___

### `Const` runTransaction

▸ **runTransaction**<**T**>(`executor`: function): *Promise‹T›*

*Defined in [helpers.ts:92](https://github.com/wovalle/fireorm/blob/5547513/src/helpers.ts#L92)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **executor**: *function*

▸ (`tran`: [FirestoreTransaction](classes/firestoretransaction.md)): *Promise‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`tran` | [FirestoreTransaction](classes/firestoretransaction.md) |

**Returns:** *Promise‹T›*

___

###  serializeEntity

▸ **serializeEntity**<**T**>(`obj`: T, `subColMetadata`: [CollectionMetadata](interfaces/collectionmetadata.md)[]): *Object*

*Defined in [utils.ts:13](https://github.com/wovalle/fireorm/blob/5547513/src/utils.ts#L13)*

Returns a serializable object from entity<T>

**`template`** T

**Type parameters:**

▪ **T**: *[IEntity](interfaces/ientity.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | - |
`subColMetadata` | [CollectionMetadata](interfaces/collectionmetadata.md)[] | Subcollection metadata to remove runtime-created fields |

**Returns:** *Object*

Serialiable object
