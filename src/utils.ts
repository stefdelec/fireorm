import { CollectionMetadata } from './MetadataStorage';
import { IEntity } from '.';

/**
 * Returns a serializable object from entity<T>
 *
 * @template T
 * @param {T} Entity object
 * @param {CollectionMetadata[]} subColMetadata Subcollection
 * metadata to remove runtime-created fields
 * @returns {Object} Serialiable object
 */
export function serializeEntity<T extends IEntity>(
  obj: T,
  subColMetadata: CollectionMetadata[]
): Record<string, any> {

  const objectGetters = extractAllGetter(obj);

  const serializableObj = { ...obj, ...objectGetters };


  subColMetadata.forEach(scm => {
    delete serializableObj[scm.propertyKey];
  });
  return serializableObj;
}


export function extractAllGetter(obj): any {

  const prototype = Object.getPrototypeOf(obj);
  const fromInstanceObj = Object.keys(obj);
  const fromInstance = Object.getOwnPropertyNames(obj);
  const fromPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

  const keys = [...fromInstanceObj, ...fromInstance, ...fromPrototype];

  const getters = keys
    .map(key => Object
      .getOwnPropertyDescriptor(prototype, key))
    .map((descriptor, index) => {
      if (descriptor && typeof descriptor.get === 'function') {
        return keys[index];
      } else {
        return undefined;
      }
    }).filter(d => d !== undefined);

  return getters.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = obj[currentValue];
    return accumulator;
  }, {});

}
