
# Class: FirestoreBatchUnit

## Hierarchy

* **FirestoreBatchUnit**

## Index

### Constructors

* [constructor](firestorebatchunit.md#constructor)

### Properties

* [firestoreRef](firestorebatchunit.md#private-firestoreref)
* [operations](firestorebatchunit.md#operations)
* [status](firestorebatchunit.md#private-status)

### Methods

* [add](firestorebatchunit.md#add)
* [commit](firestorebatchunit.md#commit)
* [validate](firestorebatchunit.md#validate)

## Constructors

###  constructor

\+ **new FirestoreBatchUnit**(`firestoreRef`: Firestore): *[FirestoreBatchUnit](firestorebatchunit.md)*

*Defined in [Batch/FirestoreBatchUnit.ts:18](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`firestoreRef` | Firestore |

**Returns:** *[FirestoreBatchUnit](firestorebatchunit.md)*

## Properties

### `Private` firestoreRef

• **firestoreRef**: *Firestore*

*Defined in [Batch/FirestoreBatchUnit.ts:20](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L20)*

___

###  operations

• **operations**: *[BatchOperation](../globals.md#batchoperation)‹[IEntity](../interfaces/ientity.md)›[]* = []

*Defined in [Batch/FirestoreBatchUnit.ts:18](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L18)*

___

### `Private` status

• **status**: *"pending" | "committing"* = "pending"

*Defined in [Batch/FirestoreBatchUnit.ts:17](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L17)*

## Methods

###  add

▸ **add**<**T**>(`type`: BatchOperation<T>["type"], `item`: T, `ref`: DocumentReference, `entity`: [Instantiable](../globals.md#instantiable)‹T›, `subCollectionsMetadata`: [CollectionMetadata](../interfaces/collectionmetadata.md)[], `validateModels`: boolean): *void*

*Defined in [Batch/FirestoreBatchUnit.ts:22](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L22)*

**Type parameters:**

▪ **T**: *[IEntity](../interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | BatchOperation<T>["type"] |
`item` | T |
`ref` | DocumentReference |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |
`subCollectionsMetadata` | [CollectionMetadata](../interfaces/collectionmetadata.md)[] |
`validateModels` | boolean |

**Returns:** *void*

___

###  commit

▸ **commit**(): *Promise‹WriteResult‹›[]›*

*Defined in [Batch/FirestoreBatchUnit.ts:40](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L40)*

**Returns:** *Promise‹WriteResult‹›[]›*

___

###  validate

▸ **validate**(`item`: [IEntity](../interfaces/ientity.md), `Entity`: [Instantiable](../globals.md#instantiable)‹[IEntity](../interfaces/ientity.md)›): *Promise‹ValidationError[]›*

*Defined in [Batch/FirestoreBatchUnit.ts:83](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatchUnit.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [IEntity](../interfaces/ientity.md) |
`Entity` | [Instantiable](../globals.md#instantiable)‹[IEntity](../interfaces/ientity.md)› |

**Returns:** *Promise‹ValidationError[]›*
