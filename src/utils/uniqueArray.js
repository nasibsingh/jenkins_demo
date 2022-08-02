/**
 * using ES6 Map
 * */
const uniqueByProp = (prop) => (arr) => Array.from(
  arr
    .reduce(
      (acc, item) => (
        (item && item[prop] && acc.set(item[prop], item), acc)
      ), // using map (preserves ordering)
      new Map(),
    )
    .values(),
);

const uniqueById = uniqueByProp('id');

module.exports = {
  uniqueByProp, uniqueById,
};
