import _keyBy from 'lodash/keyBy';
import _omit from 'lodash/omit';
import _sortBy from 'lodash/sortBy';
import _startCase from 'lodash/startCase';
import _uniq from 'lodash/uniq';
import _uniqBy from 'lodash/uniqBy';
import _values from 'lodash/values';

export function arraySwap(
  array: Array<any>,
  fromIndex: number,
  toIndex: number
): Array<any> {
  const delta = [...array];
  delta[fromIndex] = array[toIndex];
  delta[toIndex] = array[fromIndex];
  return delta;
}

export function arrayInsert(
  array: Array<any>,
  index: number,
  value: any
): Array<any> {
  const delta = [...array];
  delta.splice(index, 0, value);
  return delta;
}

export function arrayRemove(array: Array<any>, index: number): Array<any> {
  const delta = [...array];
  delta.splice(index, 1);
  return delta;
}

export function objectFromArray(array: Object[], key: string = 'id') {
  return _keyBy(array, key);
}

export function objectValues(obj: Object) {
  return _values(obj);
}

export function objectWithoutKeys(obj: Object, keys: string[]) {
  return _omit(obj, keys);
}

export function sortObjectArray(array: Object[], keys: any[]) {
  return _sortBy(array, keys);
}

export function startCase(value: string) {
  return _startCase(value);
}

export function unique(array: Array<any>) {
  return _uniq(array);
}

export function uniqueBy(array: Array<any>, compare: any) {
  return _uniqBy(array, compare);
}

// V4 UUID
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
