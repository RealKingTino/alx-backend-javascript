function cleanSet(set, startString) {
  const setArray = Array.from(set);

  const filteredValues = setArray.filter(value => value.startsWith(startString));

  const valuesToInclude = startString === '' ? setArray : filteredValues;

  return valuesToInclude.join('-');
}

export default cleanSet;
