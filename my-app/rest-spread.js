const coords = {
  x: 1,
  y: 2,
  z: 3,
};

// REST Operator (we are create a object, using the other keys)
// Syntax conversion : list of key/value -> object
const { z, ...coords2d } = coords;

// SPREAD Operator ()
// Syntax conversion : object -> list of key/value
const coords3d = { ...coords2d, z };