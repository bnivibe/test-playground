/**
 * Simple utility functions
 */

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function range(start, end) {
  return Array.from({ length: end - start }, (_, i) => start + i);
}

module.exports = { capitalize, range };
