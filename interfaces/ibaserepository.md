
# Interface: IBaseRepository <**T**>

## Type parameters

▪ **T**: *[IEntity](ientity.md)*

## Hierarchy

* **IBaseRepository**

## Index

### Methods

* [create](ibaserepository.md#create)
* [delete](ibaserepository.md#delete)
* [findById](ibaserepository.md#findbyid)
* [update](ibaserepository.md#update)

## Methods

###  create

▸ **create**(`item`: [PartialBy](../globals.md#partialby)‹T, "id"›): *Promise‹T›*

*Defined in [types.ts:89](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [PartialBy](../globals.md#partialby)‹T, "id"› |

**Returns:** *Promise‹T›*

___

###  delete

▸ **delete**(`id`: string): *Promise‹void›*

*Defined in [types.ts:91](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  findById

▸ **findById**(`id`: string): *Promise‹T›*

*Defined in [types.ts:88](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹T›*

___

###  update

▸ **update**(`item`: T): *Promise‹T›*

*Defined in [types.ts:90](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *Promise‹T›*
