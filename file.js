"use strict";

const $_$c = $_$wp(1, 8);
$_$w(1, 0, $_$c), Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = ($_$w(1, 1, $_$c), require("@jest/globals"));
const index_1 = ($_$w(1, 2, $_$c), require("../code/index"));

$_$w(1, 3, $_$c),
  (0, globals_1.describe)("Hey", function () {
    const $_$c = $_$wf(1);
    $_$w(1, 4, $_$c),
      (0, globals_1.it)("should calculate a + b", function () {
        const $_$c = $_$wf(1);
        $_$w(1, 5, $_$c), (0, globals_1.expect)((0, index_1.add)(1, 4)).toBe(3);
      });
    $_$w(1, 6, $_$c),
      (0, globals_1.it)("should calculate a + b", function () {
        const $_$c = $_$wf(1);
        $_$w(1, 7, $_$c), (0, globals_1.expect)((0, index_1.add)(3, 2)).toBe(7);
      });
  });
$_$wpe(1);
