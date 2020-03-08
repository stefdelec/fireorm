
# Interface: IQueryable <**T**>

## Type parameters

▪ **T**: *[IEntity](ientity.md)*

## Hierarchy

* **IQueryable**

## Index

### Methods

* [find](iqueryable.md#find)
* [findOne](iqueryable.md#findone)
* [whereArrayContains](iqueryable.md#wherearraycontains)
* [whereEqualTo](iqueryable.md#whereequalto)
* [whereGreaterOrEqualThan](iqueryable.md#wheregreaterorequalthan)
* [whereGreaterThan](iqueryable.md#wheregreaterthan)
* [whereLessOrEqualThan](iqueryable.md#wherelessorequalthan)
* [whereLessThan](iqueryable.md#wherelessthan)

## Methods

###  find

▸ **find**(): *Promise‹T[]›*

*Defined in [types.ts:61](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L61)*

**Returns:** *Promise‹T[]›*

___

###  findOne

▸ **findOne**(): *Promise‹T | null›*

*Defined in [types.ts:62](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L62)*

**Returns:** *Promise‹T | null›*

___

###  whereArrayContains

▸ **whereArrayContains**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [types.ts:57](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  whereEqualTo

▸ **whereEqualTo**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [types.ts:43](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  whereGreaterOrEqualThan

▸ **whereGreaterOrEqualThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [types.ts:48](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  whereGreaterThan

▸ **whereGreaterThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [types.ts:44](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  whereLessOrEqualThan

▸ **whereLessOrEqualThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [types.ts:53](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

___

###  whereLessThan

▸ **whereLessThan**(`prop`: [IWherePropParam](../globals.md#iwherepropparam)‹T›, `val`: [IFirestoreVal](../globals.md#ifirestoreval)): *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*

*Defined in [types.ts:52](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [IWherePropParam](../globals.md#iwherepropparam)‹T› |
`val` | [IFirestoreVal](../globals.md#ifirestoreval) |

**Returns:** *[IQueryBuilder](../globals.md#iquerybuilder)‹T›*
