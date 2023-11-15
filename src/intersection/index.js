function intersection(a, b) {
  const mapA = new Map();
  const result = new Set();
  a.forEach((element) => mapA.set(element, element));
  b.forEach((element) => {
    const foundElement = mapA.get(element);
    if (foundElement) {
      result.add(element);
    }
  });
  return [...result];
}

module.exports = intersection;
