
# Class: FirestoreTransaction

## Hierarchy

* **FirestoreTransaction**

## Index

### Constructors

* [constructor](firestoretransaction.md#constructor)

### Properties

* [transaction](firestoretransaction.md#private-transaction)

### Methods

* [getRepository](firestoretransaction.md#getrepository)

## Constructors

###  constructor

\+ **new FirestoreTransaction**(`transaction`: Transaction): *[FirestoreTransaction](firestoretransaction.md)*

*Defined in [Transaction/FirestoreTransaction.ts:8](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/FirestoreTransaction.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |

**Returns:** *[FirestoreTransaction](firestoretransaction.md)*

## Properties

### `Private` transaction

• **transaction**: *Transaction*

*Defined in [Transaction/FirestoreTransaction.ts:9](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/FirestoreTransaction.ts#L9)*

## Methods

###  getRepository

▸ **getRepository**<**T**>(`entity`: [Instantiable](../globals.md#instantiable)‹T›): *[TransactionRepository](transactionrepository.md)‹T›*

*Defined in [Transaction/FirestoreTransaction.ts:11](https://github.com/wovalle/fireorm/blob/5547513/src/Transaction/FirestoreTransaction.ts#L11)*

**Type parameters:**

▪ **T**: *[IEntity](../interfaces/ientity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Instantiable](../globals.md#instantiable)‹T› |

**Returns:** *[TransactionRepository](transactionrepository.md)‹T›*
