
# Class: MetadataStorage

## Hierarchy

* **MetadataStorage**

## Index

### Properties

* [collections](metadatastorage.md#collections)
* [firestoreRef](metadatastorage.md#firestoreref)
* [repositories](metadatastorage.md#repositories)
* [subCollections](metadatastorage.md#subcollections)

### Methods

* [getCollection](metadatastorage.md#getcollection)
* [getRepository](metadatastorage.md#getrepository)
* [getSubCollection](metadatastorage.md#getsubcollection)
* [getSubCollectionsFromParent](metadatastorage.md#getsubcollectionsfromparent)
* [setCollection](metadatastorage.md#setcollection)
* [setRepository](metadatastorage.md#setrepository)
* [setSubCollection](metadatastorage.md#setsubcollection)

### Object literals

* [config](metadatastorage.md#config)

## Properties

###  collections

• **collections**: *Array‹[CollectionMetadata](../interfaces/collectionmetadata.md)›* = []

*Defined in [MetadataStorage.ts:30](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L30)*

___

###  firestoreRef

• **firestoreRef**: *Firestore* = null

*Defined in [MetadataStorage.ts:89](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L89)*

___

###  repositories

• **repositories**: *Map‹unknown, [RepositoryMetadata](../interfaces/repositorymetadata.md)›* = new Map()

*Defined in [MetadataStorage.ts:32](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L32)*

___

###  subCollections

• **subCollections**: *Array‹[CollectionMetadata](../interfaces/collectionmetadata.md)›* = []

*Defined in [MetadataStorage.ts:31](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L31)*

## Methods

###  getCollection

▸ **getCollection**(`param`: string | Function): *[CollectionMetadata](../interfaces/collectionmetadata.md)*

*Defined in [MetadataStorage.ts:38](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | string &#124; Function |

**Returns:** *[CollectionMetadata](../interfaces/collectionmetadata.md)*

___

###  getRepository

▸ **getRepository**(`param`: Function): *[RepositoryMetadata](../interfaces/repositorymetadata.md)*

*Defined in [MetadataStorage.ts:67](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | Function |

**Returns:** *[RepositoryMetadata](../interfaces/repositorymetadata.md)*

___

###  getSubCollection

▸ **getSubCollection**(`param`: string | Function): *[CollectionMetadata](../interfaces/collectionmetadata.md)*

*Defined in [MetadataStorage.ts:56](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | string &#124; Function |

**Returns:** *[CollectionMetadata](../interfaces/collectionmetadata.md)*

___

###  getSubCollectionsFromParent

▸ **getSubCollectionsFromParent**(`parentEntity`: Function): *[CollectionMetadata](../interfaces/collectionmetadata.md)[]*

*Defined in [MetadataStorage.ts:52](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`parentEntity` | Function |

**Returns:** *[CollectionMetadata](../interfaces/collectionmetadata.md)[]*

___

###  setCollection

▸ **setCollection**(`col`: [CollectionMetadata](../interfaces/collectionmetadata.md)): *void*

*Defined in [MetadataStorage.ts:45](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`col` | [CollectionMetadata](../interfaces/collectionmetadata.md) |

**Returns:** *void*

___

###  setRepository

▸ **setRepository**(`repo`: [RepositoryMetadata](../interfaces/repositorymetadata.md)): *void*

*Defined in [MetadataStorage.ts:71](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`repo` | [RepositoryMetadata](../interfaces/repositorymetadata.md) |

**Returns:** *void*

___

###  setSubCollection

▸ **setSubCollection**(`subCol`: [CollectionMetadata](../interfaces/collectionmetadata.md)): *void*

*Defined in [MetadataStorage.ts:63](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`subCol` | [CollectionMetadata](../interfaces/collectionmetadata.md) |

**Returns:** *void*

## Object literals

###  config

### ▪ **config**: *object*

*Defined in [MetadataStorage.ts:34](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L34)*

###  validateModels

• **validateModels**: *false* = false

*Defined in [MetadataStorage.ts:35](https://github.com/wovalle/fireorm/blob/5547513/src/MetadataStorage.ts#L35)*
