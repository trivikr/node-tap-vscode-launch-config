const tap = require("tap");
const sum = require("../src/sum");

tap.plan(1)
tap.equal(sum(1, 2), 3);