/**
 * Performs an in-place merge of the keys in object b into object a.
 */
export default function merge(a: object, b: object): void {
  Object.assign(a, b);
}
