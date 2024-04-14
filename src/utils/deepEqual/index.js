/**
 * Recursively compares two objects for deep equality.
 *
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The second object to compare.
 * @param {Set} [seen=new Set()] - Set to track visited objects for circular reference check.
 * @returns {boolean} True if objects are deeply equal, false otherwise.
 */
const deepEqual = (obj1, obj2, seen = new Set()) => {
  // Base case: If objects are the same reference, they are equal
  if (obj1 === obj2) return true;

  // Check if both values are objects before proceeding with deep comparison
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    // Get keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) return false;

    // Check for circular reference
    if (seen.has(obj1) || seen.has(obj2)) {
      return false;
    }

    // Add objects to the set to track circular references
    seen.add(obj1);
    seen.add(obj2);

    // Recursively compare each key and its corresponding value
    return keys1.every((key) => {
      // Check if the key is present in both objects
      if (keys2.includes(key)) {
        // Recursively check deep equality for nested properties
        if (!deepEqual(obj1[key], obj2[key], seen)) {
          return false;
        }
      } else {
        // If a key is missing in one of the objects, they are not equal
        return false;
      }

      // If all keys are equal, objects are deeply equal
      return true;
    });
  }

  // If the types are not both 'object', the objects are not equal
  return false;
};

export default deepEqual;
