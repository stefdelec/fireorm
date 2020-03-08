
# Class: BaseFirestoreBatchRepository <**T**>

## Type parameters

▪ **T**: *[IEntity](../interfaces/ientity.md)*

## Hierarchy

* **BaseFirestoreBatchRepository**

  ↳ [FirestoreBatchSingleRepository](firestorebatchsinglerepository.md)

## Index

### Constructors

* [constructor](basefirestorebatchrepository.md#constructor)

### Properties

* [batch](basefirestorebatchrepository.md#protected-batch)
* [colMetadata](basefirestorebatchrepository.md#protected-colmetadata)
* [colRef](basefirestorebatchrepository.md#protected-colref)
* [collectionPath](basefirestorebatchrepository.md#protected-collectionpath)
* [config](basefirestorebatchrepository.md#protected-config)
* [entity](basefirestorebatchrepository.md#protected-entity)
* [subColMetadata](basefirestorebatchrepository.md#protected-subcolmetadata)

### Methods

* [create](basefirestorebatchrepository.md#create)
* [delete](basefirestorebatchrepository.md#delete)
* [update](basefirestorebatchrepository.md#update)

## Constructors

###  constructor

\+ **new BaseFirestoreBatchRepository**(`batch`: [FirestoreBatchUnit](firestorebatchunit.md), `entity`: [Instantiable](../globals.md#instantiable)‹T›, `collectionPath?`: string): *[BaseFirestoreBatchRepository](basefirestorebatchrepository.md)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:16](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`batch` | [FirestoreBatchUnit](firestorebatchunit.md) |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |
`collectionPath?` | string |

**Returns:** *[BaseFirestoreBatchRepository](basefirestorebatchrepository.md)*

## Properties

### `Protected` batch

• **batch**: *[FirestoreBatchUnit](firestorebatchunit.md)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:19](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L19)*

___

### `Protected` colMetadata

• **colMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:12](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L12)*

___

### `Protected` colRef

• **colRef**: *CollectionReference*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:15](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L15)*

___

### `Protected` collectionPath

• **collectionPath**: *string*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:14](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L14)*

___

### `Protected` config

• **config**: *[MetadataStorageConfig](../interfaces/metadatastorageconfig.md)*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:16](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L16)*

___

### `Protected` entity

• **entity**: *[Instantiable](../globals.md#instantiable)‹T›*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:20](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L20)*

___

### `Protected` subColMetadata

• **subColMetadata**: *[CollectionMetadata](../interfaces/collectionmetadata.md)[]*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:13](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L13)*

## Methods

###  create

▸ **create**(`item`: [WithOptionalId](../globals.md#withoptionalid)‹T›): *void*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:39](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [WithOptionalId](../globals.md#withoptionalid)‹T› |

**Returns:** *void*

___

###  delete

▸ **delete**(`item`: T): *void*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:66](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*

___

###  update

▸ **update**(`item`: T): *void*

*Defined in [Batch/BaseFirestoreBatchRepository.ts:55](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/BaseFirestoreBatchRepository.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*
