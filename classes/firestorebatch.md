
# Class: FirestoreBatch

## Hierarchy

* **FirestoreBatch**

## Index

### Constructors

* [constructor](firestorebatch.md#constructor)

### Properties

* [batch](firestorebatch.md#private-batch)
* [firestoreRef](firestorebatch.md#protected-firestoreref)

### Methods

* [commit](firestorebatch.md#commit)
* [getRepository](firestorebatch.md#getrepository)
* [getSingleRepository](firestorebatch.md#getsinglerepository)

## Constructors

###  constructor

\+ **new FirestoreBatch**(`firestoreRef`: Firestore): *[FirestoreBatch](firestorebatch.md)*

*Defined in [Batch/FirestoreBatch.ts:9](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`firestoreRef` | Firestore |

**Returns:** *[FirestoreBatch](firestorebatch.md)*

## Properties

### `Private` batch

• **batch**: *[FirestoreBatchUnit](firestorebatchunit.md)*

*Defined in [Batch/FirestoreBatch.ts:9](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.ts#L9)*

___

### `Protected` firestoreRef

• **firestoreRef**: *Firestore*

*Defined in [Batch/FirestoreBatch.ts:11](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.ts#L11)*

## Methods

###  commit

▸ **commit**(): *Promise‹WriteResult‹›[]›*

*Defined in [Batch/FirestoreBatch.ts:51](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.ts#L51)*

Commits current batch.

**Returns:** *Promise‹WriteResult‹›[]›*

___

###  getRepository

▸ **getRepository**<**T**>(`entity`: [Instantiable](../globals.md#instantiable)‹T›): *[BaseFirestoreBatchRepository](basefirestorebatchrepository.md)‹T›*

*Defined in [Batch/FirestoreBatch.ts:24](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.ts#L24)*

Returns a batch repository of T.

**`template`** T

**`memberof`** FirestoreBatch

**Type parameters:**

▪ **T**: *[IEntity](../interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |

**Returns:** *[BaseFirestoreBatchRepository](basefirestorebatchrepository.md)‹T›*

___

###  getSingleRepository

▸ **getSingleRepository**<**T**>(`entity`: [Instantiable](../globals.md#instantiable)‹T›): *[FirestoreBatchSingleRepository](firestorebatchsinglerepository.md)‹T›*

*Defined in [Batch/FirestoreBatch.ts:38](https://github.com/wovalle/fireorm/blob/5547513/src/Batch/FirestoreBatch.ts#L38)*

Returns a batch repository of a single entity. Required to maintain
current features and will be deleted in the next major version.

**`template`** T

**`memberof`** FirestoreBatch

**Type parameters:**

▪ **T**: *[IEntity](../interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |

**Returns:** *[FirestoreBatchSingleRepository](firestorebatchsinglerepository.md)‹T›*
