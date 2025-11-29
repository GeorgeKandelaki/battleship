/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GRID_COLS: () => (/* binding */ GRID_COLS),\n/* harmony export */   GRID_ROWS: () => (/* binding */ GRID_ROWS)\n/* harmony export */ });\nvar GRID_ROWS = 8;\nvar GRID_COLS = 8;\n\n//# sourceURL=webpack://battleship/./src/constants.js?\n}");

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkBoundariesAndComputeEnd: () => (/* binding */ checkBoundariesAndComputeEnd),\n/* harmony export */   checkOverlap: () => (/* binding */ checkOverlap),\n/* harmony export */   createGrid: () => (/* binding */ createGrid),\n/* harmony export */   determineIfGameHasEnded: () => (/* binding */ determineIfGameHasEnded),\n/* harmony export */   genPos: () => (/* binding */ genPos),\n/* harmony export */   placeShip: () => (/* binding */ placeShip),\n/* harmony export */   shipHasSunken: () => (/* binding */ shipHasSunken),\n/* harmony export */   shoot: () => (/* binding */ shoot),\n/* harmony export */   sinkShip: () => (/* binding */ sinkShip),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar ships = {\n  1: {\n    name: \"destroyer\",\n    type: 1,\n    squares: 2\n  },\n  2: {\n    name: \"cruiser\",\n    type: 2,\n    squares: 3\n  },\n  3: {\n    name: \"battleship\",\n    type: 3,\n    squares: 4\n  }\n};\nvar blockTypes = {\n  0: {\n    name: \"empty\",\n    id: 0,\n    squares: 1\n  },\n  4: {\n    name: \"used_space_empty\",\n    id: 4,\n    squares: 1\n  },\n  5: {\n    name: \"used_space_ship\",\n    id: 5,\n    squares: 1\n  },\n  6: {\n    name: \"sunk\",\n    id: 6,\n    squares: \"Same amount of the squares as the sunken ship has\"\n  }\n};\nfunction createGrid() {\n  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;\n  var grid = [];\n  for (var i = 0; i < rows; i++) {\n    var buffer = [];\n    for (var t = 0; t < columns; t++) buffer.push(0);\n    grid.push(buffer);\n  }\n  return grid;\n}\n\n// TODO: Implement checking overlapping, if generated ship coordinates intersect;\nfunction checkOverlap(shipPositions, curShipPos) {}\nfunction checkBoundariesAndComputeEnd(pos, axis, squares, colsRows, direction) {\n  // For checking the boundaries of a ship, and judging from that incrementing or decrementing the num of squares from the given direction\n  var end = _toConsumableArray(pos);\n\n  // 4. Check if the direction we want to extend our ships length, is out of bounds\n  if (pos[axis] - squares < 0) end[axis] = end[axis] + squares - 1;else if (pos[axis] + squares > colsRows) end[axis] = end[axis] - (squares - 1);else end[axis] = end[axis] + (direction == 0 ? -(squares - 1) : squares - 1);\n  return end;\n}\nfunction genPos(rows, columns, squares) {\n  var finalPos = [];\n\n  // 1. Gen the random starting placement/position of the ship\n  var start = [Math.floor(Math.random() * rows), Math.floor(Math.random() * columns)];\n\n  // 2. Randomly Choose col or row\n  // Both col and row have only two different possible directions/path/ways. col: left | right || row: up | down\n  var axis = Math.floor(Math.random() * 2);\n  var direction = Math.floor(Math.random() * 2);\n\n  // 4. Check if the direction we want to extend our ships length, is out of bounds and return an processed arr\n  var end = checkBoundariesAndComputeEnd(start, axis, squares, axis === 0 ? rows : columns, direction);\n\n  // 5. Get the final coords\n  finalPos.push(start, end);\n  return finalPos;\n}\nfunction placeShip(start, end, type, grid) {\n  var _start = _slicedToArray(start, 2),\n    x = _start[0],\n    y = _start[1];\n  var _end = _slicedToArray(end, 2),\n    x1 = _end[0],\n    y1 = _end[1];\n  var mainX = x > x1 ? x1 : x,\n    mainY = y > y1 ? y1 : y;\n  var mainX1 = mainX == x1 ? x : x1,\n    mainY1 = mainY == y1 ? y : y1;\n  if (x != x1) {\n    for (var i = mainX; i <= mainX1; i++) {\n      grid[i][mainY] = type;\n    }\n  }\n  if (y != y1) {\n    for (var _i = mainY; _i <= mainY1; _i++) {\n      grid[mainX][_i] = type;\n    }\n  }\n  return type;\n}\nfunction shipHasSunken(start, end, type, grid) {\n  var _start2 = _slicedToArray(start, 2),\n    x = _start2[0],\n    y = _start2[1];\n  var _end2 = _slicedToArray(end, 2),\n    x1 = _end2[0],\n    y1 = _end2[1];\n  var mainX = x > x1 ? x1 : x,\n    mainY = y > y1 ? y1 : y;\n  var mainX1 = mainX == x1 ? x : x1,\n    mainY1 = mainY == y1 ? y : y1;\n  var blocksHit = [];\n  if (x != x1) {\n    for (var i = mainX; i <= mainX1; i++) {\n      if (grid[i][mainY] == 5) blocksHit.push(5);\n    }\n  }\n  if (y != y1) {\n    for (var _i2 = mainY; _i2 <= mainY1; _i2++) {\n      if (grid[mainX][_i2] == 5) blocksHit.push(5);\n    }\n  }\n  return blocksHit.length == ships[type].squares;\n}\nfunction sinkShip(start, end, type, grid) {\n  if (!shipHasSunken(start, end, type, grid)) return false;\n  placeShip(start, end, 6, grid);\n  return true;\n}\nfunction shoot(x, y, grid) {\n  var isHit = Boolean(grid[x][y] && grid[x][y] != 4 && grid[x][y] != 5);\n  grid[x][y] = isHit ? 5 : 4;\n  return [isHit, grid];\n}\nfunction startGame(rows, cols, ships) {\n  var grid = createGrid(rows, cols);\n  var shipPositions = [];\n  for (var _i3 = 0, _Object$entries = Object.entries(ships); _i3 < _Object$entries.length; _i3++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),\n      key = _Object$entries$_i[0],\n      value = _Object$entries$_i[1];\n    var pos = genPos(rows, cols, value.squares);\n    shipPositions.push(_objectSpread({\n      pos: pos\n    }, value));\n    placeShip(pos[0], pos[1], value.type, grid);\n  }\n  return [grid, shipPositions];\n}\nfunction determineIfGameHasEnded(allShips, sunkenShips) {\n  return allShips.length == sunkenShips.length;\n}\n\n//# sourceURL=webpack://battleship/./src/engine.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./src/engine.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\nvar ships = {\n  1: {\n    name: \"destroyer\",\n    type: 1,\n    squares: 2\n  },\n  2: {\n    name: \"cruiser\",\n    type: 2,\n    squares: 3\n  },\n  3: {\n    name: \"battleship\",\n    type: 3,\n    squares: 4\n  }\n};\nvar blockTypes = {\n  0: {\n    name: \"empty\",\n    id: 0,\n    squares: 1\n  },\n  4: {\n    name: \"used_space_empty\",\n    id: 4,\n    squares: 1\n  },\n  5: {\n    name: \"used_space_ship\",\n    id: 5,\n    squares: 1\n  },\n  6: {\n    name: \"sunk\",\n    id: 6,\n    squares: \"Same amount of the squares as the sunken ship has\"\n  }\n};\nvar grid = [];\nvar shipPositions = [];\nvar sunkenShips = [];\nvar container = document.getElementById(\"root\");\nfunction updateDOM(start, end) {\n  var _start = _slicedToArray(start, 2),\n    x = _start[0],\n    y = _start[1];\n  var _end = _slicedToArray(end, 2),\n    x1 = _end[0],\n    y1 = _end[1];\n  var startX = Math.min(x, x1);\n  var endX = Math.max(x, x1);\n  var startY = Math.min(y, y1);\n  var endY = Math.max(y, y1);\n  var makeId = function makeId(a, b) {\n    return \"\".concat(a, \"_\").concat(b);\n  };\n  if (x != x1) {\n    for (var i = startX; i <= endX; i++) {\n      var curBlockId = makeId(i, startY);\n      var el = document.getElementById(curBlockId);\n\n      // update DOM\n      updateHitEl(el, \"sunk\", true);\n    }\n  }\n  if (y != y1) {\n    for (var _i = startY; _i <= endY; _i++) {\n      var _curBlockId = makeId(startX, _i);\n      var _el = document.getElementById(_curBlockId);\n\n      // update DOM\n      updateHitEl(_el, \"sunk\", true);\n    }\n  }\n  return null;\n}\nfunction checkIfShipSunk(ships, grid) {\n  for (var i = 0; i < ships.length; i++) {\n    var _ships$i = ships[i],\n      pos = _ships$i.pos,\n      type = _ships$i.type;\n    var isSunk = (0,_engine_js__WEBPACK_IMPORTED_MODULE_0__.sinkShip)(pos[0], pos[1], type, grid);\n    if (!isSunk) continue;\n    sunkenShips.push(pos);\n    updateDOM(pos[0], pos[1]);\n  }\n}\nfunction renderGrid(grid) {\n  var clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  clean ? container.innerHTML = \" \" : \"\";\n  var _loop = function _loop(i) {\n    var row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n    row.id = i;\n    var _loop2 = function _loop2(t) {\n      var column = document.createElement(\"div\");\n      column.classList.add(\"column\");\n      column.id = i + \"_\" + t;\n      column.onclick = function (e) {\n        var curType = grid[i][t];\n        if ((0,_engine_js__WEBPACK_IMPORTED_MODULE_0__.determineIfGameHasEnded)(Object.values(ships), sunkenShips)) {\n          finishGame();\n          return null;\n        }\n        if (curType == 5 || curType == 4) return;\n        var _shoot = (0,_engine_js__WEBPACK_IMPORTED_MODULE_0__.shoot)(i, t, grid),\n          _shoot2 = _slicedToArray(_shoot, 2),\n          isHit = _shoot2[0],\n          updatedGrid = _shoot2[1];\n        if (curType != 6) updateHitEl(e.target, isHit);\n        checkIfShipSunk(shipPositions, grid);\n      };\n      row.appendChild(column);\n    };\n    for (var t = 0; t < grid[i].length; t++) {\n      _loop2(t);\n    }\n    container.appendChild(row);\n  };\n  for (var i = 0; i < grid.length; i++) {\n    _loop(i);\n  }\n  return null;\n}\nfunction updateHitEl(el, hit) {\n  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  el.className = \"column\";\n  if (hit) el.classList.add(\"hit\");else el.classList.add(\"clicked\");\n  if (hit == \"sunk\") el.classList.add(\"sunk\");\n}\nfunction main() {\n  var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var output = (0,_engine_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.GRID_ROWS, _constants_js__WEBPACK_IMPORTED_MODULE_1__.GRID_COLS, ships);\n  grid = output[0];\n  shipPositions = output[1];\n  var initialGrid = _toConsumableArray(grid);\n  renderGrid(grid, reset);\n}\nfunction playAgain() {\n  sunkenShips = [];\n  main(true);\n}\nfunction finishGame() {\n  var div = document.createElement(\"div\");\n  var playAgainButton = document.createElement(\"button\");\n  playAgainButton.innerText = \"Play Again\";\n  playAgainButton.onclick = function (e) {\n    playAgain();\n  };\n  div.innerHTML = \"<p>Game has finished.</p>\";\n  div.appendChild(playAgainButton);\n  container.appendChild(div);\n}\nmain();\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;