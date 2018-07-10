/**
 * @fileOverview Generates random value in the Range
 */

/**
 * Gets random value in the min and max range
 * @param {number} min minValue to be included in the range
 * @param {number} max maxValue to be included in the range
 * @returns {number}
 */
const getRandomValue = (min, max) => {
  const a = Math.floor((max - min + 1) * (Math.random())) + min;
  return a;
};

module.exports = getRandomValue;
