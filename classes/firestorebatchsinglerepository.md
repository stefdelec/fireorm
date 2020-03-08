
# Class: FirestoreBatchSingleRepository <**T**>

This class is only needed to maintain current batch functionality
inside repositories and will be deleted in the next major version

**`export`** 

**`template`** T

## Type parameters

▪ **T**: *[IEntity](../interfaces/ientity.md)*

## Hierarchy

* [BaseFirestoreBatchRepository](basefirestorebatchrepository.md)‹T›

  ↳ **FirestoreBatchSingleRepository**

## Index

### Constructors

* [constructor](firestorebatchsinglerepository.md#constructor)

### Properties

* [batch](firestorebatchsinglerepository.md#protected-batch)
* [colMetadata](firestorebatchsinglerepository.md#protected-colmetadata)
* [colRef](firestorebatchsinglerepository.md#protected-colref)
* [collectionPath](firestorebatchsinglerepository.md#protected-collectionpath)
* [config](firestorebatchsinglerepository.md#protected-config)
* [entity](firestorebatchsinglerepository.md#protected-entity)
* [subColMetadata](firestorebatchsinglerepository.md#protected-subcolmetadata)

### Methods

* [commit](firestorebatchsinglerepository.md#commit)
* [create](firestorebatchsinglerepository.md#create)
* [delete](firestorebatchsinglerepository.md#delete)
* [update](firestorebatchsinglerepository.md#update)

## Constructors

###  constructor

\+ **new FirestoreBatchSingleRepository**(`batch`: [FirestoreBatchUnit](firestorebatchunit.md), `entity`: [Instantiable](../globals.md#instantiable)‹T›, `collectionPath?`: string): *[FirestoreBatchSingleRepository](firestorebatchsinglerepository.md)*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[constructor](basefirestorebatchrepository.md#constructor)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:16](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`batch` | [FirestoreBatchUnit](firestorebatchunit.md) |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |
`collectionPath?` | string |

**Returns:** *[FirestoreBatchSingleRepository](firestorebatchsinglerepository.md)*

## Properties

### `Protected` batch

• **batch**: *[FirestoreBatchUnit](firestorebatchunit.md)*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[batch](basefirestorebatchrepository.md#protected-batch)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:19](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L19)*

___

### `Protected` colMetadata

• **colMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[colMetadata](basefirestorebatchrepository.md#protected-colmetadata)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:12](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L12)*

___

### `Protected` colRef

• **colRef**: *CollectionReference*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[colRef](basefirestorebatchrepository.md#protected-colref)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:15](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L15)*

___

### `Protected` collectionPath

• **collectionPath**: *string*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[collectionPath](basefirestorebatchrepository.md#protected-collectionpath)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:14](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L14)*

___

### `Protected` config

• **config**: *[MetadataStorageConfig](../interfaces/metadatastorageconfig.md)*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[config](basefirestorebatchrepository.md#protected-config)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:16](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L16)*

___

### `Protected` entity

• **entity**: *[Instantiable](../globals.md#instantiable)‹T›*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[entity](basefirestorebatchrepository.md#protected-entity)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:20](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L20)*

___

### `Protected` subColMetadata

• **subColMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)[]*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[subColMetadata](basefirestorebatchrepository.md#protected-subcolmetadata)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:13](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L13)*

## Methods

###  commit

▸ **commit**(): *Promise‹WriteResult‹›[]›*

*Defined in [Batch/FirestoreBatchSingleRepository.ts:17](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchSingleRepository.ts#L17)*

**Returns:** *Promise‹WriteResult‹›[]›*

___

###  create

▸ **create**(`item`: [WithOptionalId](../globals.md#withoptionalid)‹T›): *void*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[create](basefirestorebatchrepository.md#create)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:39](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [WithOptionalId](../globals.md#withoptionalid)‹T› |

**Returns:** *void*

___

###  delete

▸ **delete**(`item`: T): *void*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[delete](basefirestorebatchrepository.md#delete)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:66](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  update

▸ **update**(`item`: T): *void*

*Inherited from [BaseFirestoreBatchRepository](basefirestorebatchrepository.md).[update](basefirestorebatchrepository.md#update)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:55](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*
