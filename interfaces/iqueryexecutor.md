
# Interface: IQueryExecutor <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **IQueryExecutor**

## Implemented by

* [FakeExecutor](../classes/fakeexecutor.md)

## Index

### Methods

* [execute](iqueryexecutor.md#execute)

## Methods

###  execute

▸ **execute**(`queries`: [IFireOrmQueryLine](ifireormqueryline.md)[], `limitVal?`: number, `orderByObj?`: [IOrderByParams](iorderbyparams.md), `single?`: boolean): *Promise‹T[]›*

*Defined in [types.ts:79](https://github.com/wovalle/fireorm/blob/5547513/src/types.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`queries` | [IFireOrmQueryLine](ifireormqueryline.md)[] |
`limitVal?` | number |
`orderByObj?` | [IOrderByParams](iorderbyparams.md) |
`single?` | boolean |

**Returns:** *Promise‹T[]›*
