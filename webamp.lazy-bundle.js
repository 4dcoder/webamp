(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Webamp"] = factory();
	else
		root["Webamp"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(127);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = close;
/* harmony export (immutable) */ __webpack_exports__["V"] = toggleVisualizerStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__windows__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["a"]; });
/* unused harmony reexport hideWindow */
/* unused harmony reexport showWindow */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_1__windows__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_2__media__["n"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equalizer__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_3__equalizer__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__files__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["d"]; });
/* unused harmony reexport setSkinFromArrayBuffer */
/* unused harmony reexport setSkinFromFileReference */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["h"]; });
/* unused harmony reexport fetchMediaDuration */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["e"]; });
/* unused harmony reexport loadMediaFile */
/* unused harmony reexport fetchMediaTags */
/* unused harmony reexport setEqFromFileReference */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__files__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlist__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["j"]; });
/* unused harmony reexport scrollNTracks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__playlist__["b"]; });






function close() {
  return dispatch => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_3" /* STOP */]
    });
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["f" /* CLOSE_WINAMP */]
    });
  };
}
function toggleVisualizerStyle() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_10" /* TOGGLE_VISUALIZER_STYLE */]
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ADD_TRACK_FROM_URL = "ADD_TRACK_FROM_URL";
/* harmony export (immutable) */ __webpack_exports__["b"] = ADD_TRACK_FROM_URL;

const CLOSE_WINAMP = "CLOSE_WINAMP";
/* harmony export (immutable) */ __webpack_exports__["f"] = CLOSE_WINAMP;

const MINIMIZE_WINAMP = "MINIMIZE_WINAMP";
/* harmony export (immutable) */ __webpack_exports__["r"] = MINIMIZE_WINAMP;

const IS_PLAYING = "IS_PLAYING";
/* harmony export (immutable) */ __webpack_exports__["l"] = IS_PLAYING;

const IS_STOPPED = "IS_STOPPED";
/* harmony export (immutable) */ __webpack_exports__["m"] = IS_STOPPED;

const PAUSE = "PAUSE";
/* harmony export (immutable) */ __webpack_exports__["u"] = PAUSE;

const PLAY = "PLAY";
/* harmony export (immutable) */ __webpack_exports__["v"] = PLAY;

const SEEK_TO_PERCENT_COMPLETE = "SEEK_TO_PERCENT_COMPLETE";
/* harmony export (immutable) */ __webpack_exports__["C"] = SEEK_TO_PERCENT_COMPLETE;

const SET_BALANCE = "SET_BALANCE";
/* harmony export (immutable) */ __webpack_exports__["G"] = SET_BALANCE;

const SET_BAND_VALUE = "SET_BAND_VALUE";
/* harmony export (immutable) */ __webpack_exports__["I"] = SET_BAND_VALUE;

const SET_FOCUS = "SET_FOCUS";
/* harmony export (immutable) */ __webpack_exports__["N"] = SET_FOCUS;

const SET_BAND_FOCUS = "SET_BAND_FOCUS";
/* harmony export (immutable) */ __webpack_exports__["H"] = SET_BAND_FOCUS;

const SET_FOCUSED_WINDOW = "SET_FOCUSED_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["O"] = SET_FOCUSED_WINDOW;

const SET_MEDIA = "SET_MEDIA";
/* harmony export (immutable) */ __webpack_exports__["P"] = SET_MEDIA;

const SET_SCRUB_POSITION = "SET_SCRUB_POSITION";
/* harmony export (immutable) */ __webpack_exports__["T"] = SET_SCRUB_POSITION;

const SET_SKIN_DATA = "SET_SKIN_DATA";
/* harmony export (immutable) */ __webpack_exports__["U"] = SET_SKIN_DATA;

const SET_VOLUME = "SET_VOLUME";
/* harmony export (immutable) */ __webpack_exports__["X"] = SET_VOLUME;

const START_WORKING = "START_WORKING";
/* harmony export (immutable) */ __webpack_exports__["_1"] = START_WORKING;

const STEP_MARQUEE = "STEP_MARQUEE";
/* harmony export (immutable) */ __webpack_exports__["_2"] = STEP_MARQUEE;

const STOP = "STOP";
/* harmony export (immutable) */ __webpack_exports__["_3"] = STOP;

const STOP_WORKING = "STOP_WORKING";
/* harmony export (immutable) */ __webpack_exports__["_4"] = STOP_WORKING;

const TOGGLE_DOUBLESIZE_MODE = "TOGGLE_DOUBLESIZE_MODE";
/* harmony export (immutable) */ __webpack_exports__["_5"] = TOGGLE_DOUBLESIZE_MODE;

const SET_EQ_AUTO = "SET_EQ_AUTO";
/* harmony export (immutable) */ __webpack_exports__["K"] = SET_EQ_AUTO;

const SET_EQ_ON = "SET_EQ_ON";
/* harmony export (immutable) */ __webpack_exports__["M"] = SET_EQ_ON;

const SET_EQ_OFF = "SET_EQ_OFF";
/* harmony export (immutable) */ __webpack_exports__["L"] = SET_EQ_OFF;

const TOGGLE_LLAMA_MODE = "TOGGLE_LLAMA_MODE";
/* harmony export (immutable) */ __webpack_exports__["_6"] = TOGGLE_LLAMA_MODE;

const TOGGLE_REPEAT = "TOGGLE_REPEAT";
/* harmony export (immutable) */ __webpack_exports__["_7"] = TOGGLE_REPEAT;

const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
/* harmony export (immutable) */ __webpack_exports__["_8"] = TOGGLE_SHUFFLE;

const TOGGLE_TIME_MODE = "TOGGLE_TIME_MODE";
/* harmony export (immutable) */ __webpack_exports__["_9"] = TOGGLE_TIME_MODE;

const TOGGLE_VISUALIZER_STYLE = "TOGGLE_VISUALIZER_STYLE";
/* harmony export (immutable) */ __webpack_exports__["_10"] = TOGGLE_VISUALIZER_STYLE;

const UNSET_FOCUS = "UNSET_FOCUS";
/* harmony export (immutable) */ __webpack_exports__["_13"] = UNSET_FOCUS;

const UPDATE_TIME_ELAPSED = "UPDATE_TIME_ELAPSED";
/* harmony export (immutable) */ __webpack_exports__["_15"] = UPDATE_TIME_ELAPSED;

const SET_USER_MESSAGE = "SET_USER_MESSAGE";
/* harmony export (immutable) */ __webpack_exports__["W"] = SET_USER_MESSAGE;

const UNSET_USER_MESSAGE = "UNSET_USER_MESSAGE";
/* harmony export (immutable) */ __webpack_exports__["_14"] = UNSET_USER_MESSAGE;

const SET_PLAYLIST_SCROLL_POSITION = "SET_PLAYLIST_SCROLL_POSITION";
/* harmony export (immutable) */ __webpack_exports__["S"] = SET_PLAYLIST_SCROLL_POSITION;

const CLICKED_TRACK = "CLICKED_TRACK";
/* harmony export (immutable) */ __webpack_exports__["e"] = CLICKED_TRACK;

const CTRL_CLICKED_TRACK = "CTRL_CLICKED_TRACK";
/* harmony export (immutable) */ __webpack_exports__["h"] = CTRL_CLICKED_TRACK;

const SHIFT_CLICKED_TRACK = "SHIFT_CLICKED_TRACK";
/* harmony export (immutable) */ __webpack_exports__["_0"] = SHIFT_CLICKED_TRACK;

const SELECT_ALL = "SELECT_ALL";
/* harmony export (immutable) */ __webpack_exports__["D"] = SELECT_ALL;

const SELECT_ZERO = "SELECT_ZERO";
/* harmony export (immutable) */ __webpack_exports__["E"] = SELECT_ZERO;

const INVERT_SELECTION = "INVERT_SELECTION";
/* harmony export (immutable) */ __webpack_exports__["k"] = INVERT_SELECTION;

const REMOVE_ALL_TRACKS = "REMOVE_ALL_TRACKS";
/* harmony export (immutable) */ __webpack_exports__["z"] = REMOVE_ALL_TRACKS;

const CROP_TRACKS = "CROP_TRACKS";
/* unused harmony export CROP_TRACKS */

const FILE_INFO = "FILE_INFO";
/* unused harmony export FILE_INFO */

const REMOVE_TRACKS = "REMOVE_TRACKS";
/* harmony export (immutable) */ __webpack_exports__["A"] = REMOVE_TRACKS;

const SET_AVAILABLE_SKINS = "SET_AVAILABLE_SKINS";
/* harmony export (immutable) */ __webpack_exports__["F"] = SET_AVAILABLE_SKINS;

const REVERSE_LIST = "REVERSE_LIST";
/* harmony export (immutable) */ __webpack_exports__["B"] = REVERSE_LIST;

const RANDOMIZE_LIST = "RANDOMIZE_LIST";
/* harmony export (immutable) */ __webpack_exports__["x"] = RANDOMIZE_LIST;

const SET_TRACK_ORDER = "SET_TRACK_ORDER";
/* harmony export (immutable) */ __webpack_exports__["V"] = SET_TRACK_ORDER;

const PLAY_TRACK = "PLAY_TRACK";
/* harmony export (immutable) */ __webpack_exports__["w"] = PLAY_TRACK;

const BUFFER_TRACK = "BUFFER_TRACK";
/* harmony export (immutable) */ __webpack_exports__["c"] = BUFFER_TRACK;

const DRAG_SELECTED = "DRAG_SELECTED";
/* harmony export (immutable) */ __webpack_exports__["j"] = DRAG_SELECTED;

const SET_MEDIA_TAGS = "SET_MEDIA_TAGS";
/* harmony export (immutable) */ __webpack_exports__["R"] = SET_MEDIA_TAGS;

const SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
/* harmony export (immutable) */ __webpack_exports__["Q"] = SET_MEDIA_DURATION;

const TOGGLE_WINDOW = "TOGGLE_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["_11"] = TOGGLE_WINDOW;

const ADD_GEN_WINDOW = "ADD_GEN_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_GEN_WINDOW;

const CLOSE_WINDOW = "CLOSE_WINDOW";
/* harmony export (immutable) */ __webpack_exports__["g"] = CLOSE_WINDOW;

const MEDIA_TAG_REQUEST_INITIALIZED = "MEDIA_TAG_REQUEST_INITIALIZED";
/* harmony export (immutable) */ __webpack_exports__["q"] = MEDIA_TAG_REQUEST_INITIALIZED;

const MEDIA_TAG_REQUEST_FAILED = "MEDIA_TAG_REQUEST_FAILED";
/* harmony export (immutable) */ __webpack_exports__["p"] = MEDIA_TAG_REQUEST_FAILED;

const NETWORK_CONNECTED = "NETWORK_CONNECTED";
/* harmony export (immutable) */ __webpack_exports__["s"] = NETWORK_CONNECTED;

const NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED";
/* harmony export (immutable) */ __webpack_exports__["t"] = NETWORK_DISCONNECTED;

const UPDATE_WINDOW_POSITIONS = "UPDATE_WINDOW_POSITIONS";
/* harmony export (immutable) */ __webpack_exports__["_16"] = UPDATE_WINDOW_POSITIONS;

const CHANNEL_COUNT_CHANGED = "CHANNEL_COUNT_CHANGED";
/* harmony export (immutable) */ __webpack_exports__["d"] = CHANNEL_COUNT_CHANGED;

const WINDOW_SIZE_CHANGED = "WINDOW_SIZE_CHANGED";
/* harmony export (immutable) */ __webpack_exports__["_17"] = WINDOW_SIZE_CHANGED;

const TOGGLE_WINDOW_SHADE_MODE = "TOGGLE_WINDOW_SHADE_MODE";
/* harmony export (immutable) */ __webpack_exports__["_12"] = TOGGLE_WINDOW_SHADE_MODE;

const LOADED = "LOADED";
/* harmony export (immutable) */ __webpack_exports__["n"] = LOADED;

const REGISTER_VISUALIZER = "REGISTER_VISUALIZER";
/* harmony export (immutable) */ __webpack_exports__["y"] = REGISTER_VISUALIZER;

const SET_Z_INDEX = "SET_Z_INDEX";
/* harmony export (immutable) */ __webpack_exports__["Z"] = SET_Z_INDEX;

const DISABLE_MARQUEE = "DISABLE_MARQUEE";
/* harmony export (immutable) */ __webpack_exports__["i"] = DISABLE_MARQUEE;

const SET_DUMMY_VIZ_DATA = "SET_DUMMY_VIZ_DATA";
/* harmony export (immutable) */ __webpack_exports__["J"] = SET_DUMMY_VIZ_DATA;

const SET_WINDOW_VISIBILITY = "SET_WINDOW_VISIBILITY";
/* harmony export (immutable) */ __webpack_exports__["Y"] = SET_WINDOW_VISIBILITY;

const LOADING = "LOADING";
/* harmony export (immutable) */ __webpack_exports__["o"] = LOADING;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSkin_json__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSkin_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__baseSkin_json__);

const BANDS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
/* harmony export (immutable) */ __webpack_exports__["a"] = BANDS;

const WINDOWS = {
  MAIN: "main",
  PLAYLIST: "playlist",
  EQUALIZER: "equalizer"
};
/* harmony export (immutable) */ __webpack_exports__["m"] = WINDOWS;

const LOAD_STYLE = {
  BUFFER: "BUFFER",
  PLAY: "PLAY"
};
/* harmony export (immutable) */ __webpack_exports__["e"] = LOAD_STYLE;

const MEDIA_TAG_REQUEST_STATUS = {
  INITIALIZED: "INITIALIZED",
  FAILED: "FAILED",
  COMPLETE: "COMPLETE",
  NOT_REQUESTED: "NOT_REQUESTED"
};
/* harmony export (immutable) */ __webpack_exports__["g"] = MEDIA_TAG_REQUEST_STATUS;

const UTF8_ELLIPSIS = "\u2026";
/* harmony export (immutable) */ __webpack_exports__["j"] = UTF8_ELLIPSIS;

const CHARACTER_WIDTH = 5;
/* harmony export (immutable) */ __webpack_exports__["b"] = CHARACTER_WIDTH;

const WINDOW_RESIZE_SEGMENT_WIDTH = 25;
/* harmony export (immutable) */ __webpack_exports__["p"] = WINDOW_RESIZE_SEGMENT_WIDTH;

const WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
/* harmony export (immutable) */ __webpack_exports__["o"] = WINDOW_RESIZE_SEGMENT_HEIGHT;

const WINDOW_HEIGHT = 116;
/* harmony export (immutable) */ __webpack_exports__["n"] = WINDOW_HEIGHT;

const WINDOW_WIDTH = 275;
/* harmony export (immutable) */ __webpack_exports__["q"] = WINDOW_WIDTH;

const TRACK_HEIGHT = 13;
/* harmony export (immutable) */ __webpack_exports__["i"] = TRACK_HEIGHT;

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
/* harmony export (immutable) */ __webpack_exports__["d"] = LETTERS;

const DEFAULT_SKIN = __WEBPACK_IMPORTED_MODULE_0__baseSkin_json__;
/* harmony export (immutable) */ __webpack_exports__["c"] = DEFAULT_SKIN;

const VISUALIZERS = {
  OSCILLOSCOPE: "OSCILLOSCOPE",
  BAR: "BAR",
  NONE: "NONE"
};
/* harmony export (immutable) */ __webpack_exports__["k"] = VISUALIZERS;

const VISUALIZER_ORDER = [VISUALIZERS.BAR, VISUALIZERS.OSCILLOSCOPE, // TODO: Verify the order
VISUALIZERS.NONE];
/* harmony export (immutable) */ __webpack_exports__["l"] = VISUALIZER_ORDER;

const TIME_MODE = {
  ELAPSED: "ELAPSED",
  REMAINING: "REMAINING"
};
/* harmony export (immutable) */ __webpack_exports__["h"] = TIME_MODE;

const MEDIA_STATUS = {
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  PAUSED: "PAUSED"
};
/* harmony export (immutable) */ __webpack_exports__["f"] = MEDIA_STATUS;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["y"] = getWindowPositions;
/* harmony export (immutable) */ __webpack_exports__["A"] = getWindowSize;
/* harmony export (immutable) */ __webpack_exports__["w"] = getWindowOpen;
/* harmony export (immutable) */ __webpack_exports__["z"] = getWindowShade;
/* harmony export (immutable) */ __webpack_exports__["v"] = getWindowHidden;
/* unused harmony export getDoubled */
/* harmony export (immutable) */ __webpack_exports__["x"] = getWindowPixelSize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlistHtml__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_playlist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_display__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resizeUtils__ = __webpack_require__(84);









const getSliders = state => state.equalizer.sliders;
/* unused harmony export getSliders */

const getEqfData = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getSliders, sliders => {
  const preset = {
    name: "Entry1",
    preamp: Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* denormalize */])(sliders.preamp)
  };
  __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* BANDS */].forEach(band => {
    preset[`hz${band}`] = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* denormalize */])(sliders[band]);
  });
  const eqfData = {
    presets: [preset],
    type: "Winamp EQ library file v1.1"
  };
  return eqfData;
});
/* harmony export (immutable) */ __webpack_exports__["b"] = getEqfData;

const getTracks = state => state.playlist.tracks;
/* harmony export (immutable) */ __webpack_exports__["r"] = getTracks;


const getTrackOrder = state => state.playlist.trackOrder;

const getTrackCount = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTrackOrder, trackOrder => trackOrder.length);
/* harmony export (immutable) */ __webpack_exports__["o"] = getTrackCount;

const getOrderedTracks = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.filter(id => tracks[id]));
/* harmony export (immutable) */ __webpack_exports__["g"] = getOrderedTracks;

const getOrderedTrackObjects = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, getOrderedTracks, (tracks, trackOrder) => trackOrder.map(id => tracks[id]));
const getSelectedTrackObjects = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOrderedTrackObjects, tracks => tracks.filter(track => track.selected));
/* harmony export (immutable) */ __webpack_exports__["m"] = getSelectedTrackObjects;
 // If a duration is `null`, it counts as zero, which seems fine enough.

const runningTimeFromTracks = tracks => tracks.reduce((time, track) => time + Number(track.duration), 0);

const getTotalRunningTime = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOrderedTrackObjects, runningTimeFromTracks);
const getSelectedRunningTime = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getSelectedTrackObjects, runningTimeFromTracks); // Note: We should append "+" to these values if some of the tracks are of unknown time.

const getRunningTimeMessage = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTotalRunningTime, getSelectedRunningTime, (totalRunningTime, selectedRunningTime) => `${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(selectedRunningTime)}/${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(totalRunningTime)}`);
/* harmony export (immutable) */ __webpack_exports__["k"] = getRunningTimeMessage;
 // TODO: use slectors to get memoization

const getCurrentTrackIndex = state => state.playlist.trackOrder.indexOf(state.playlist.currentTrack);
/* unused harmony export getCurrentTrackIndex */

const getCurrentTrackNumber = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrackIndex, currentTrackIndex => currentTrackIndex + 1);
/* unused harmony export getCurrentTrackNumber */

const getCurrentTrackId = state => state.playlist.currentTrack;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCurrentTrackId;

const nextTrack = (state, n = 1) => {
  const trackOrder = state.playlist.trackOrder,
        repeat = state.media.repeat;
  const trackCount = getTrackCount(state);

  if (trackCount === 0) {
    return null;
  }

  const currentIndex = getCurrentTrackIndex(state);
  let nextIndex = currentIndex + n;

  if (repeat) {
    nextIndex = nextIndex % trackCount;

    if (nextIndex < 0) {
      // Handle wrapping around backwards
      nextIndex += trackCount;
    }

    return trackOrder[nextIndex];
  }

  if (currentIndex === trackCount - 1 && n > 0) {
    return null;
  } else if (currentIndex === 0 && n < 0) {
    return null;
  }

  nextIndex = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["d" /* clamp */])(nextIndex, 0, trackCount - 1);
  return trackOrder[nextIndex];
};
/* harmony export (immutable) */ __webpack_exports__["D"] = nextTrack;

const BASE_WINDOW_HEIGHT = 58;
const getNumberOfVisibleTracks = state => {
  const playlistSize = getWindowSize(state, "playlist");
  return Math.floor((BASE_WINDOW_HEIGHT + __WEBPACK_IMPORTED_MODULE_4__constants__["o" /* WINDOW_RESIZE_SEGMENT_HEIGHT */] * playlistSize[1]) / __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* TRACK_HEIGHT */]);
};
/* unused harmony export getNumberOfVisibleTracks */

const getOverflowTrackCount = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTrackCount, getNumberOfVisibleTracks, (trackCount, numberOfVisibleTracks) => Math.max(0, trackCount - numberOfVisibleTracks));
/* harmony export (immutable) */ __webpack_exports__["h"] = getOverflowTrackCount;


const _getPlaylistScrollPosition = state => state.display.playlistScrollPosition;

const getPlaylistScrollPosition = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getOverflowTrackCount, _getPlaylistScrollPosition, (overflowTrackCount, playlistScrollPosition) => {
  if (overflowTrackCount === 0) {
    return 0;
  }

  return Math.round(Math.round(overflowTrackCount * playlistScrollPosition / 100) / overflowTrackCount * 100);
});
/* harmony export (immutable) */ __webpack_exports__["i"] = getPlaylistScrollPosition;

const getScrollOffset = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(_getPlaylistScrollPosition, getTrackCount, getNumberOfVisibleTracks, (playlistScrollPosition, trackCount, numberOfVisibleTracks) => {
  const overflow = Math.max(0, trackCount - numberOfVisibleTracks);
  return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["r" /* percentToIndex */])(playlistScrollPosition / 100, overflow + 1);
});
/* harmony export (immutable) */ __webpack_exports__["l"] = getScrollOffset;

const getVisibleTrackIds = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getScrollOffset, getTrackOrder, getNumberOfVisibleTracks, (offset, trackOrder, numberOfVisibleTracks) => trackOrder.slice(offset, offset + numberOfVisibleTracks));
/* harmony export (immutable) */ __webpack_exports__["s"] = getVisibleTrackIds;

const getTrackIsVisibleFunction = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getVisibleTrackIds, visibleTrackIds => {
  return id => visibleTrackIds.includes(id);
});
/* harmony export (immutable) */ __webpack_exports__["q"] = getTrackIsVisibleFunction;

const getVisibleTracks = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getVisibleTrackIds, getTracks, (visibleTrackIds, tracks) => visibleTrackIds.map(id => tracks[id]));
/* unused harmony export getVisibleTracks */

const getPlaylist = state => state.playlist;
/* unused harmony export getPlaylist */

const getDuration = state => {
  const currentTrack = state.playlist.tracks[state.playlist.currentTrack];
  return currentTrack && currentTrack.duration;
};
/* unused harmony export getDuration */

const getTrackDisplayName = (state, trackId) => __WEBPACK_IMPORTED_MODULE_6__reducers_playlist__["b" /* getTrackDisplayName */](getPlaylist(state), trackId);
/* harmony export (immutable) */ __webpack_exports__["p"] = getTrackDisplayName;

const getCurrentTrackDisplayName = state => {
  const id = getCurrentTrackId(state);
  return getTrackDisplayName(state, id);
};
/* unused harmony export getCurrentTrackDisplayName */

const getMinimalMediaText = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getCurrentTrackNumber, getCurrentTrackDisplayName, (trackNumber, name) => name == null ? null : `${trackNumber}. ${name}`);
/* harmony export (immutable) */ __webpack_exports__["e"] = getMinimalMediaText;

const getMediaText = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getMinimalMediaText, getDuration, (minimalMediaText, duration) => minimalMediaText == null ? null : // TODO: Maybe the `  ***  ` should actually be added by the marquee
`${minimalMediaText} (${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(duration)})  ***  `);
/* harmony export (immutable) */ __webpack_exports__["d"] = getMediaText;

const getNumberOfTracks = state => getTrackOrder(state).length;
/* harmony export (immutable) */ __webpack_exports__["f"] = getNumberOfTracks;

const getPlaylistDuration = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getTracks, tracks => Object.values(tracks).reduce((total, track) => total + track.duration, 0));
const getPlaylistURL = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(state => state, getNumberOfTracks, getPlaylistDuration, getTrackOrder, getTracks, (state, numberOfTracks, playlistDuration, trackOrder, tracks) => Object(__WEBPACK_IMPORTED_MODULE_5__playlistHtml__["a" /* createPlaylistURL */])({
  numberOfTracks,
  averageTrackLength: Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(playlistDuration / numberOfTracks),
  // TODO: Handle hours
  playlistLengthMinutes: Math.floor(playlistDuration / 60),
  playlistLengthSeconds: Math.floor(playlistDuration % 60),
  tracks: trackOrder.map((id, i) => `${i + 1}. ${getTrackDisplayName(state, id)} (${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(tracks[id].duration)})`)
}));
/* harmony export (immutable) */ __webpack_exports__["j"] = getPlaylistURL;

function getWindowPositions(state) {
  return state.windows.positions;
}
const WINDOW_HEIGHT = 116;
const SHADE_WINDOW_HEIGHT = 14;

function getWPixelSize(w, doubled) {
  const _w$size = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(w.size, 2),
        width = _w$size[0],
        height = _w$size[1];

  const doubledMultiplier = doubled && w.canDouble ? 2 : 1;
  const pix = {
    height: WINDOW_HEIGHT + height * __WEBPACK_IMPORTED_MODULE_4__constants__["o" /* WINDOW_RESIZE_SEGMENT_HEIGHT */],
    width: __WEBPACK_IMPORTED_MODULE_4__constants__["q" /* WINDOW_WIDTH */] + width * __WEBPACK_IMPORTED_MODULE_4__constants__["p" /* WINDOW_RESIZE_SEGMENT_WIDTH */]
  };
  return {
    height: (w.shade ? SHADE_WINDOW_HEIGHT : pix.height) * doubledMultiplier,
    width: pix.width * doubledMultiplier
  };
}

function getWindowSize(state, windowId) {
  return state.windows.genWindows[windowId].size;
}
function getWindowOpen(state) {
  return windowId => state.windows.genWindows[windowId].open;
}
function getWindowShade(state, windowId) {
  return state.windows.genWindows[windowId].shade;
}
function getWindowHidden(state) {
  return windowId => state.windows.genWindows[windowId].hidden;
}
const getGenWindows = state => {
  return state.windows.genWindows;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getGenWindows;

function getDoubled(state) {
  return state.display.doubled;
}
const getWindowSizes = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getGenWindows, getDoubled, (windows, doubled) => {
  return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["o" /* objectMap */])(windows, w => getWPixelSize(w, doubled));
});
/* harmony export (immutable) */ __webpack_exports__["B"] = getWindowSizes;

function getWindowPixelSize(state, windowId) {
  // Rather than compute it directly, we go via `getWindowSizes`
  // to take advantage of caching.
  return getWindowSizes(state)[windowId];
}
const getWindowsInfo = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getWindowSizes, getWindowPositions, (sizes, positions) => Object.keys(sizes).map(key => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
  key
}, sizes[key], positions[key])));
/* harmony export (immutable) */ __webpack_exports__["C"] = getWindowsInfo;

const getWindowGraph = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getWindowsInfo, __WEBPACK_IMPORTED_MODULE_8__resizeUtils__["a" /* generateGraph */]);
/* harmony export (immutable) */ __webpack_exports__["u"] = getWindowGraph;

const getSkinPlaylistStyle = state => {
  return state.display.skinPlaylistStyle || {
    normal: "#00FF00",
    current: "#FFFFFF",
    normalbg: "#000000",
    selectedbg: "#0000C6",
    font: "Arial"
  };
};
/* harmony export (immutable) */ __webpack_exports__["n"] = getSkinPlaylistStyle;

const getVisualizerStyle = state => __WEBPACK_IMPORTED_MODULE_7__reducers_display__["b" /* getVisualizerStyle */](state.display);
/* harmony export (immutable) */ __webpack_exports__["t"] = getVisualizerStyle;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = downloadURI;
/* unused harmony export debounce */
/* harmony export (immutable) */ __webpack_exports__["w"] = uniqueId;
/* harmony export (immutable) */ __webpack_exports__["n"] = objectForEach;
/* harmony export (immutable) */ __webpack_exports__["o"] = objectMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);

const getTimeObj = time => {
  if (time == null) {
    // If we clean up `<MiniTime />` we don't need to do this any more.
    return {
      minutesFirstDigit: " ",
      minutesSecondDigit: " ",
      secondsFirstDigit: " ",
      secondsSecondDigit: " "
    };
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const digits = time == null ? [" ", " ", " ", " "] : [Math.floor(minutes / 10), Math.floor(minutes % 10), Math.floor(seconds / 10), Math.floor(seconds % 10)];
  const minutesFirstDigit = digits[0],
        minutesSecondDigit = digits[1],
        secondsFirstDigit = digits[2],
        secondsSecondDigit = digits[3];
  return {
    minutesFirstDigit,
    minutesSecondDigit,
    secondsFirstDigit,
    secondsSecondDigit
  };
};
/* harmony export (immutable) */ __webpack_exports__["h"] = getTimeObj;

const getTimeStr = (time, truncate = true) => {
  if (time == null) {
    return "";
  }

  const _getTimeObj = getTimeObj(time),
        minutesFirstDigit = _getTimeObj.minutesFirstDigit,
        minutesSecondDigit = _getTimeObj.minutesSecondDigit,
        secondsFirstDigit = _getTimeObj.secondsFirstDigit,
        secondsSecondDigit = _getTimeObj.secondsSecondDigit;

  return [truncate ? minutesFirstDigit || "" : minutesFirstDigit, minutesSecondDigit, ":", secondsFirstDigit, secondsSecondDigit].join("");
};
/* harmony export (immutable) */ __webpack_exports__["i"] = getTimeStr;

const getFileExtension = fileName => {
  const matches = /\.([a-z]{3,4})$/i.exec(fileName);
  return matches ? matches[1].toLowerCase() : null;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = getFileExtension;

const parseViscolors = text => {
  const entries = text.split("\n");
  const regex = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;
  const colors = []; // changed to a hard number to deal with empty lines at the end...
  // plus it's only meant to be an exact quantity of numbers anyway.
  // - @PAEz

  for (let i = 0; i < 24; i++) {
    const matches = regex.exec(entries[i]);
    colors[i] = matches ? `rgb(${matches.slice(1, 4).join(",")})` : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* DEFAULT_SKIN */].colors[i];
  }

  return colors;
};
/* harmony export (immutable) */ __webpack_exports__["q"] = parseViscolors;

const SECTION_REGEX = /^\s*\[(.+?)\]\s*$/;
const PROPERTY_REGEX = /^\s*([^;].*)\s*=\s*(.*)\s*$/;
const parseIni = text => {
  let section, match;
  return text.split(/[\r\n]+/g).reduce((data, line) => {
    if ((match = line.match(PROPERTY_REGEX)) && section != null) {
      const value = match[2].replace(/(^")|("$)|(^')|('$)/gi, "");
      data[section][match[1].trim().toLowerCase()] = value;
    } else if (match = line.match(SECTION_REGEX)) {
      section = match[1].trim().toLowerCase();
      data[section] = {};
    }

    return data;
  }, {});
};
/* harmony export (immutable) */ __webpack_exports__["p"] = parseIni;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
/* harmony export (immutable) */ __webpack_exports__["d"] = clamp;

const base64FromArrayBuffer = arrayBuffer => {
  const dataView = new Uint8Array(arrayBuffer);
  return window.btoa(String.fromCharCode(...dataView));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = base64FromArrayBuffer;
 // https://stackoverflow.com/a/15832662/1263117

function downloadURI(uri, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}
const toPercent = (min, max, value) => (value - min) / (max - min);
/* unused harmony export toPercent */

const percentToRange = (percent, min, max) => min + Math.round(percent * (max - min));
/* harmony export (immutable) */ __webpack_exports__["s"] = percentToRange;

const percentToIndex = (percent, length) => percentToRange(percent, 0, length - 1);
/* harmony export (immutable) */ __webpack_exports__["r"] = percentToIndex;


const rebound = (oldMin, oldMax, newMin, newMax) => oldValue => percentToRange(toPercent(oldMin, oldMax, oldValue), newMin, newMax); // Convert a .eqf value to a 1-100


const normalize = rebound(1, 64, 1, 100);
/* harmony export (immutable) */ __webpack_exports__["l"] = normalize;
 // Convert a 0-100 to an .eqf value

const denormalize = rebound(1, 100, 1, 64);
/* harmony export (immutable) */ __webpack_exports__["e"] = denormalize;
 // Merge a `source` object to a `target` recursively

const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
  } // Join `target` and modified `source`


  Object.assign(target || {}, source);
  return target;
};
/* harmony export (immutable) */ __webpack_exports__["j"] = merge;
 // Maps a value in a range (defined my min/max) to a value in an array (options).

const segment = (min, max, value, newValues) => {
  const ratio = toPercent(min, max, value);
  /*
  | 0 | 1 | 2 |
  0   1   2   3
  */

  return newValues[percentToIndex(ratio, newValues.length)];
};
/* harmony export (immutable) */ __webpack_exports__["t"] = segment;

const arraysAreEqual = (a, b) => a.length === b.length && a.every((value, i) => value === b[i]);
/* harmony export (immutable) */ __webpack_exports__["a"] = arraysAreEqual;
 // https://bost.ocks.org/mike/shuffle/
// Shuffle an array in O(n)

const shuffle = array => {
  const sorted = [...array];
  let m = sorted.length; // While there remain elements to shuffle…

  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--); // And swap it with the current element.

    const val = sorted[m];
    sorted[m] = sorted[i];
    sorted[i] = val;
  }

  return sorted;
};
/* harmony export (immutable) */ __webpack_exports__["u"] = shuffle;

const sort = (array, iteratee) => [...array].sort((a, b) => {
  const aKey = iteratee(a);
  const bKey = iteratee(b);

  if (aKey < bKey) {
    return -1;
  } else if (aKey > bKey) {
    return 1;
  }

  return 0;
});
/* harmony export (immutable) */ __webpack_exports__["v"] = sort;

const moveSelected = (arr, isSelected, offset) => {
  const newArr = new Array(arr.length);
  let next = 0;

  for (let i = 0; i < newArr.length; i++) {
    const from = i - offset; // Is a value supposed to move here?

    if (from >= 0 && from < arr.length && isSelected(from)) {
      newArr[i] = arr[from];
    } else {
      while (next < arr.length && isSelected(next)) {
        next++;
      }

      newArr[i] = arr[next];
      next++;
    }
  }

  return newArr;
};
/* harmony export (immutable) */ __webpack_exports__["k"] = moveSelected;

const spliceIn = (original, start, newValues) => {
  const newArr = [...original];
  newArr.splice(start, 0, ...newValues);
  return newArr;
};
/* unused harmony export spliceIn */

function debounce(func, delay) {
  let token;
  return function (...args) {
    if (token != null) {
      clearTimeout(token);
    }

    token = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
let counter = 0;
function uniqueId() {
  return counter++;
}
function objectForEach(obj, cb) {
  Object.keys(obj).forEach(key => cb(obj[key], key));
}
function objectMap(obj, cb) {
  const modified = {};
  Object.keys(obj).forEach(key => modified[key] = cb(obj[key], key));
  return modified;
}
const objectFilter = (obj, predicate) => // TODO: Could return the original reference if no values change
Object.keys(obj).reduce((newObj, key) => {
  if (predicate(obj[key], key)) {
    newObj[key] = obj[key];
  }

  return newObj;
}, {});
/* harmony export (immutable) */ __webpack_exports__["m"] = objectFilter;

const calculateBoundingBox = windows => windows.reduce((b, w) => ({
  left: Math.min(b.left, w.x),
  top: Math.min(b.top, w.y),
  bottom: Math.max(b.bottom, w.y + w.height),
  right: Math.max(b.right, w.x + w.width)
}), {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
});
/* harmony export (immutable) */ __webpack_exports__["c"] = calculateBoundingBox;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(10);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(132)();
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_context_menu_css__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_context_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_context_menu_css__);









class Portal extends __WEBPACK_IMPORTED_MODULE_2_react___default.a.Component {
  componentWillMount() {
    this._node = document.createElement("div");
    this._node.id = "webamp-context-menu";
    this._node.style.position = "absolute";
    this._node.style.top = 0;
    this._node.style.left = 0;
    this._node.style.zIndex = this.props.zIndex + 1;
    document.body.appendChild(this._node);
  }

  componentWillUnmount() {
    document.body.removeChild(this._node);
  }

  render() {
    const style = {
      position: "absolute",
      top: this.props.top,
      left: this.props.left
    };
    return Object(__WEBPACK_IMPORTED_MODULE_3_react_dom__["createPortal"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      style: style
    }, this.props.children), this._node);
  }

}

const Hr = () => __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
  className: "hr"
}, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("hr", null));
/* harmony export (immutable) */ __webpack_exports__["a"] = Hr;

const Parent = ({
  children,
  label
}) => __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
  className: "parent"
}, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", null, children), label);
/* harmony export (immutable) */ __webpack_exports__["d"] = Parent;

const LinkNode = props => __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", props, props.label));
/* harmony export (immutable) */ __webpack_exports__["b"] = LinkNode;

LinkNode.propTypes = {
  label: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
  href: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired
};
const Node = props => {
  const label = props.label,
        checked = props.checked,
        _props$className = props.className,
        className = _props$className === void 0 ? "" : _props$className,
        passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(props, ["label", "checked", "className"]);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
    className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(className, {
      checked
    })
  }, passThroughProps), label);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Node;

Node.propTypes = {
  label: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
  hotkey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};

class ContextMenu extends __WEBPACK_IMPORTED_MODULE_2_react___default.a.Component {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          offsetTop = _this$props.offsetTop,
          offsetLeft = _this$props.offsetLeft,
          top = _this$props.top,
          bottom = _this$props.bottom,
          selected = _this$props.selected,
          zIndex = _this$props.zIndex;
    return selected && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Portal, {
      top: offsetTop,
      left: offsetLeft,
      zIndex: zIndex
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()("context-menu", {
        top,
        bottom
      })
    }, children));
  }

}

const mapStateToProps = state => ({
  zIndex: state.display.zIndex
});

/* harmony default export */ __webpack_exports__["e"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(ContextMenu));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(128);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(188);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(171);

var iterableToArrayLimit = __webpack_require__(172);

var nonIterableRest = __webpack_require__(173);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(185);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(229);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var createDesc = __webpack_require__(40);
module.exports = __webpack_require__(26) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(34);
var IE8_DOM_DEFINE = __webpack_require__(100);
var toPrimitive = __webpack_require__(52);
var dP = Object.defineProperty;

exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(35)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(103);
var defined = __webpack_require__(53);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(56)('wks');
var uid = __webpack_require__(42);
var Symbol = __webpack_require__(13).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Character__ = __webpack_require__(93);




class CharacterString extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }

  render() {
    const text = `${this.props.children}` || "";
    const chars = text.split("");
    return chars.map((character, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Character__["a" /* default */], {
      key: index + character
    }, character));
  }

}

CharacterString.propsTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (CharacterString);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);



let cursorX;
let cursorY;
window.document.addEventListener("mousemove", e => {
  cursorX = e.pageX;
  cursorY = e.pageY;
}); // We implement hover ourselves, because we hate ourselves and https://stackoverflow.com/a/13259049/1263117

class Entry extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  componentDidMount() {
    const domRect = this.node.getBoundingClientRect();
    this.setState({
      hover: cursorX >= domRect.left && cursorX <= domRect.right && cursorY >= domRect.top && cursorY <= domRect.bottom
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      ref: node => this.node = node,
      onMouseEnter: () => this.setState({
        hover: true
      }),
      onMouseLeave: () => this.setState({
        hover: false
      }),
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
        hover: this.state.hover
      })
    }, this.props.children);
  }

}

class PlaylistMenu extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleClick", e => {
      const target = e.target;
      const selected = this.state.selected;

      if (selected) {
        this.setState({
          selected: false
        });
        return;
      }

      const handleClickOut = ee => {
        // If the click is _not_ inside the menu.
        if (!target.contains(ee.target)) {
          // If we've clicked on a Context Menu spawed inside this menu, it will
          // register as an external click. However, hiding the menu will remove
          // the Context Menu from the DOM. Therefore, we wait until the next
          // event loop to actually hide ourselves.
          setTimeout(() => {
            // Close the menu
            this.setState({
              selected: false
            });
          }, 0);
          window.document.removeEventListener("click", handleClickOut, {
            capture: true
          });
        }
      };

      window.document.addEventListener("click", handleClickOut, {
        capture: true
      });
      this.setState({
        selected: true
      });
    });

    this.state = {
      selected: false
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: this.props.id,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("playlist-menu", {
        selected: this.state.selected
      }),
      onClick: this._handleClick
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "bar"
    }), this.state.selected && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.map(this.props.children, (child, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Entry, {
      key: i
    }, child))));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlaylistMenu;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(22);
var ctx = __webpack_require__(99);
var hide = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(142);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Emitter {
  on(event, callback) {
    const eventListeners = this._listeners[event] || [];
    eventListeners.push(callback);
    this._listeners[event] = eventListeners;

    const unsubscribe = () => {
      this._listeners[event] = eventListeners.filter(cb => cb !== callback);
    };

    return unsubscribe;
  }

  trigger(event, ...args) {
    const callbacks = this._listeners[event];

    if (callbacks) {
      callbacks.forEach(cb => cb(...args));
    }
  }

  constructor() {
    this._listeners = {};
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Emitter;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);


 // Winamp has a strange behavior for the buttons at the top of the main window.
// It shows through to the main background sprite until the first time that it's
// clicked, and then it shows the dedicated undepressed sprite thereafter.
// This component is an abstraction that tracks if a div has ever been clicked.
// Look in `skinSelectors` for CSS selectors that look like `#some-id.clicked`
// for examples of this functionality in use.

class ClickedDiv extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, this.props, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(this.props.className, this.state),
      onMouseDown: e => {
        if (!this.state.clicked) {
          this.setState({
            clicked: true
          });
        }

        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }
      }
    }));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClickedDiv;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(102);
var enumBugKeys = __webpack_require__(57);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = genMediaTags;
/* harmony export (immutable) */ __webpack_exports__["c"] = genMediaDuration;
/* harmony export (immutable) */ __webpack_exports__["b"] = genArrayBufferFromFileReference;
/* harmony export (immutable) */ __webpack_exports__["e"] = promptForFileReferences;
/* harmony export (immutable) */ __webpack_exports__["a"] = filenameFromUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);

function genMediaTags(file, jsmediatags) {
  __WEBPACK_IMPORTED_MODULE_0_invariant___default()(file != null, "Attempted to get the tags of media file without passing a file"); // Workaround https://github.com/aadsm/jsmediatags/issues/83

  if (typeof file === "string" && !/^[a-z]+:\/\//i.test(file)) {
    file = `${location.protocol}//${location.host}${location.pathname}${file}`;
  }

  return new Promise((resolve, reject) => {
    try {
      jsmediatags.read(file, {
        onSuccess: resolve,
        onError: reject
      });
    } catch (e) {
      // Possibly jsmediatags could not find a parser for this file?
      // Nothing to do.
      // Consider removing this after https://github.com/aadsm/jsmediatags/issues/83 is resolved.
      reject(e);
    }
  }, () => {// The dependency failed to load
  }, "jsmediatags");
}
function genMediaDuration(url) {
  __WEBPACK_IMPORTED_MODULE_0_invariant___default()(typeof url === "string", "Attempted to get the duration of media file without passing a url");
  return new Promise((resolve, reject) => {
    // TODO: Does this actually stop downloading the file once it's
    // got the duration?
    const audio = document.createElement("audio");
    audio.crossOrigin = "anonymous";

    const durationChange = () => {
      resolve(audio.duration);
      audio.removeEventListener("durationchange", durationChange);
      audio.url = null; // TODO: Not sure if this really gets cleaned up.
    };

    audio.addEventListener("durationchange", durationChange);
    audio.addEventListener("error", e => {
      reject(e);
    });
    audio.src = url;
  });
}
async function genArrayBufferFromFileReference(fileReference) {
  __WEBPACK_IMPORTED_MODULE_0_invariant___default()(fileReference != null, "Attempted to get an ArrayBuffer without assing a fileReference");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      resolve(e.target.result);
    };

    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsArrayBuffer(fileReference);
  });
}
async function promptForFileReferences({
  accept = null,
  directory = false
} = {}) {
  return new Promise(resolve => {
    // Does this represent a memory leak somehow?
    // Can this fail? Do we ever reject?
    const fileInput = document.createElement("input");
    if (accept) fileInput.setAttribute("accept", accept);
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.webkitdirectory = directory;
    fileInput.directory = directory;
    fileInput.mozdirectory = directory; // Not entirely sure why this is needed, since the input
    // was just created, but somehow this helps prevent change
    // events from getting swallowed.
    // https://stackoverflow.com/a/12102992/1263117

    fileInput.value = null;
    fileInput.addEventListener("change", e => {
      resolve(e.target.files);
    });
    fileInput.click();
  });
}

function urlIsBlobUrl(url) {
  return /^blob:/.test(url);
} // This is not perfect, but... meh: https://stackoverflow.com/a/36756650/1263117


function filenameFromUrl(url) {
  if (urlIsBlobUrl(url)) {
    return null;
  }

  return url.split("/").pop().split("#")[0].split("?")[0];
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);






class ContextMenuWraper extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_handleGlobalRightClick", () => {
      this._closeMenu();
    });

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_handleGlobalClick", e => {
      if (e.button === 2) {
        return;
      }

      this._closeMenu();
    });

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_handleRightClick", e => {
      const pageX = e.pageX,
            pageY = e.pageY;
      this.setState({
        selected: true,
        // TODO: We could do an initial render to see if the menu fits here
        // and do a second render if it does not.
        offsetTop: pageY,
        offsetLeft: pageX
      }); // Even if you right click multiple times before closeing,
      // we should only end up with one global listener.

      document.addEventListener("click", this._handleGlobalClick);
      document.body.addEventListener("contextmenu", this._handleGlobalRightClick);
      e.preventDefault();
      e.stopPropagation();
    });

    this.state = {
      selected: false,
      offsetTop: null,
      offsetLeft: null
    };
  }

  componentWillUnmount() {
    this._closeMenu();
  }

  _closeMenu() {
    this.setState({
      selected: false,
      offsetTop: null,
      offsetLeft: null
    });
    document.removeEventListener("click", this._handleGlobalClick);
    document.body.removeEventListener("contextmenu", this._handleGlobalRightClick);
  }

  render() {
    const _this$props = this.props,
          children = _this$props.children,
          renderContents = _this$props.renderContents,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["children", "renderContents"]);

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
      onContextMenu: this._handleRightClick,
      style: {
        width: "100%",
        height: "100%"
      }
    }, passThroughProps), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["e" /* default */], {
      selected: this.state.selected,
      offsetTop: this.state.offsetTop,
      offsetLeft: this.state.offsetLeft
    }, renderContents()), children);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContextMenuWraper;

ContextMenuWraper.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any.isRequired,
  renderContents: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenu__ = __webpack_require__(12);





class ContextMenuTarget extends __WEBPACK_IMPORTED_MODULE_2_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default()(this, "_handleHandleClick", () => {
      this.setState({
        selected: !this.state.selected
      });
    });

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_defineProperty___default()(this, "_handleGlobalClick", e => {
      if (this.state.selected && // Not sure how, but it's possible for this to get called when handleNode is null/undefined.
      // https://sentry.io/share/issue/2066cd79f21e4f279791319f4d2ea35d/
      this.handleNode && !this.handleNode.contains(e.target)) {
        this.setState({
          selected: false
        });
      }
    });

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this._handleGlobalClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._handleGlobalClick);
  }

  _offset() {
    if (!this.handleNode) {
      return {
        top: 0,
        left: 0
      };
    }

    const rect = this.handleNode.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  render() {
    const _this$props = this.props,
          handle = _this$props.handle,
          children = _this$props.children,
          top = _this$props.top,
          bottom = _this$props.bottom,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["handle", "children", "top", "bottom"]);

    const offset = this._offset();

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", passThroughProps, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      className: "handle",
      style: {
        width: "100%",
        height: "100%"
      },
      ref: node => this.handleNode = node,
      onClick: this._handleHandleClick
    }, handle), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenu__["e" /* default */], {
      selected: this.state.selected,
      offsetTop: offset.top,
      offsetLeft: offset.left,
      top: top,
      bottom: bottom
    }, children));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ContextMenuTarget;

ContextMenuTarget.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,
  handle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,
  top: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  bottom: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(25);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(56)('keys');
var uid = __webpack_require__(42);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(106);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(34);
var dPs = __webpack_require__(242);
var enumBugKeys = __webpack_require__(57);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(101)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(243).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(24).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(28)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(28);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(22);
var LIBRARY = __webpack_require__(61);
var wksExt = __webpack_require__(65);
var defineProperty = __webpack_require__(24).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(259);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(263);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(106);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(75);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(78);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(48);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(147);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileUtils__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);





const defaultPlaylistState = {
  trackOrder: [],
  currentTrack: null,
  tracks: {},
  lastSelectedIndex: null
};

const playlist = (state = defaultPlaylistState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["e" /* CLICKED_TRACK */]:
      const clickedId = String(state.trackOrder[action.index]);
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* objectMap */])(state.tracks, (track, id) => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, track, {
          selected: id === clickedId
        })),
        lastSelectedIndex: action.index
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["h" /* CTRL_CLICKED_TRACK */]:
      const id = state.trackOrder[action.index];
      const t = state.tracks[id];
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, t, {
            selected: !t.selected
          })
        }),
        // Using this as the lastClickedIndex is kinda funny, since you
        // may have just _un_selected the track. However, this is what
        // Winamp 2 does, so we'll copy it.
        lastSelectedIndex: action.index
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_0" /* SHIFT_CLICKED_TRACK */]:
      if (state.lastSelectedIndex == null) {
        return state;
      }

      const clickedIndex = action.index;
      const start = Math.min(clickedIndex, state.lastSelectedIndex);
      const end = Math.max(clickedIndex, state.lastSelectedIndex);
      const selected = new Set(state.trackOrder.slice(start, end + 1));
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* objectMap */])(state.tracks, (track, trackId) => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, track, {
          selected: selected.has(Number(trackId))
        }))
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["D" /* SELECT_ALL */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* objectMap */])(state.tracks, track => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, track, {
          selected: true
        }))
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["E" /* SELECT_ZERO */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* objectMap */])(state.tracks, track => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, track, {
          selected: false
        }))
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["k" /* INVERT_SELECTION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* objectMap */])(state.tracks, track => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, track, {
          selected: !track.selected
        }))
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["z" /* REMOVE_ALL_TRACKS */]:
      // TODO: Consider disposing of ObjectUrls
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: [],
        currentTrack: null,
        tracks: {},
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["A" /* REMOVE_TRACKS */]:
      // TODO: Consider disposing of ObjectUrls
      const actionIds = action.ids.map(Number);
      const currentTrack = state.currentTrack;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: state.trackOrder.filter(trackId => !actionIds.includes(trackId)),
        currentTrack: actionIds.includes(currentTrack) ? null : currentTrack,
        tracks: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["m" /* objectFilter */])(state.tracks, (track, trackId) => !action.ids.includes(trackId)),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["B" /* REVERSE_LIST */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: [...state.trackOrder].reverse(),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["x" /* RANDOMIZE_LIST */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["u" /* shuffle */])(state.trackOrder)
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["V" /* SET_TRACK_ORDER */]:
      const trackOrder = action.trackOrder;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* ADD_TRACK_FROM_URL */]:
      const atIndex = action.atIndex == null ? state.trackOrder.length : action.atIndex;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: [...state.trackOrder.slice(0, atIndex), Number(action.id), ...state.trackOrder.slice(atIndex)],
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [action.id]: {
            id: action.id,
            selected: false,
            defaultName: action.defaultName,
            duration: action.duration == null ? null : action.duration,
            url: action.url,
            mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].NOT_REQUESTED
          }
        }),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["P" /* SET_MEDIA */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks[action.id], {
            duration: action.length
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["R" /* SET_MEDIA_TAGS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks[action.id], {
            mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].COMPLETE,
            title: action.title,
            artist: action.artist,
            albumArtUrl: action.albumArtUrl
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["q" /* MEDIA_TAG_REQUEST_INITIALIZED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks[action.id], {
            mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].INITIALIZED
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["p" /* MEDIA_TAG_REQUEST_FAILED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks[action.id], {
            mediaTagsRequestStatus: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* MEDIA_TAG_REQUEST_STATUS */].FAILED
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["Q" /* SET_MEDIA_DURATION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        tracks: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks, {
          [action.id]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.tracks[action.id], {
            duration: action.duration
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["w" /* PLAY_TRACK */]:
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["c" /* BUFFER_TRACK */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        currentTrack: action.id
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["j" /* DRAG_SELECTED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        trackOrder: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["k" /* moveSelected */])(state.trackOrder, i => state.tracks[state.trackOrder[i]].selected, action.offset),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (playlist);
const getTrackDisplayName = (state, id) => {
  const track = state.tracks[id];

  if (track == null) {
    return null;
  }

  const artist = track.artist,
        title = track.title,
        defaultName = track.defaultName,
        url = track.url;

  if (artist && title) {
    return `${artist} - ${title}`;
  } else if (title) {
    return title;
  } else if (defaultName) {
    return defaultName;
  } else if (url) {
    const filename = Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["a" /* filenameFromUrl */])(url);

    if (filename) {
      return filename;
    }
  }

  return "???";
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getTrackDisplayName;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);




const getVisualizationOrder = state => {
  return [...state.additionalVisualizers, ...__WEBPACK_IMPORTED_MODULE_3__constants__["l" /* VISUALIZER_ORDER */]];
};
/* unused harmony export getVisualizationOrder */

const getVisualizerStyle = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(getVisualizationOrder, state => state.visualizerStyle, (visualizationOrder, visualizationStyle) => {
  return visualizationOrder[visualizationStyle];
});
/* harmony export (immutable) */ __webpack_exports__["b"] = getVisualizerStyle;

const defaultDisplayState = {
  doubled: false,
  marqueeStep: 0,
  disableMarquee: false,
  loading: true,
  llama: false,
  closed: false,
  working: false,
  skinImages: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* DEFAULT_SKIN */].images,
  skinColors: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* DEFAULT_SKIN */].colors,
  skinCursors: null,
  skinPlaylistStyle: null,
  skinRegion: {},
  visualizerStyle: 0,
  // Index into VISUALIZER_ORDER
  dummyVizData: null,
  playlistScrollPosition: 0,
  skinGenLetterWidths: null,
  // TODO: Get the default value for this?
  additionalVisualizers: [],
  zIndex: 0
};

const display = (state = defaultDisplayState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_5" /* TOGGLE_DOUBLESIZE_MODE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        doubled: !state.doubled
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_6" /* TOGGLE_LLAMA_MODE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        llama: !state.llama
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_2" /* STEP_MARQUEE */]:
      return state.disableMarquee ? state : __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        marqueeStep: state.marqueeStep + 1
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["i" /* DISABLE_MARQUEE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        disableMarquee: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_4" /* STOP_WORKING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        working: false
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_1" /* START_WORKING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        working: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["f" /* CLOSE_WINAMP */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        closed: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["o" /* LOADING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        loading: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["n" /* LOADED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        loading: false
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["U" /* SET_SKIN_DATA */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        loading: false,
        skinImages: action.skinImages,
        skinColors: action.skinColors,
        skinPlaylistStyle: action.skinPlaylistStyle,
        skinCursors: action.skinCursors,
        skinRegion: action.skinRegion,
        skinGenLetterWidths: action.skinGenLetterWidths
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_10" /* TOGGLE_VISUALIZER_STYLE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        visualizerStyle: (state.visualizerStyle + 1) % getVisualizationOrder(state).length
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["y" /* REGISTER_VISUALIZER */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        additionalVisualizers: [action.id, ...state.additionalVisualizers]
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["S" /* SET_PLAYLIST_SCROLL_POSITION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        playlistScrollPosition: action.position
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["Z" /* SET_Z_INDEX */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        zIndex: action.zIndex
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["J" /* SET_DUMMY_VIZ_DATA */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        dummyVizData: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (display);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPositionDiff;
/* harmony export (immutable) */ __webpack_exports__["a"] = generateGraph;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);

function getPositionDiff(graph, sizeDiff) {
  const newGraph = {};
  const positionDiff = {};

  for (const key of Object.keys(graph)) {
    newGraph[key] = {
      above: [],
      left: []
    };
    positionDiff[key] = {
      x: 0,
      y: 0
    };
  } // Construct an inverted graph


  for (const _ref of Object.entries(graph)) {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 2);

    const key = _ref2[0];
    const neighbors = _ref2[1];
    const below = neighbors.below,
          right = neighbors.right;

    if (right != null) {
      newGraph[right].left.push(key);
    }

    if (below != null) {
      newGraph[below].above.push(key);
    }
  }

  function walkRight(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.left.forEach(left => {
      positionDiff[left].x += nodeSizeDiff.width + positionDiff[key].x;
      walkRight(left);
    });
  }

  function walkDown(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.above.forEach(above => {
      positionDiff[above].y += nodeSizeDiff.height + positionDiff[key].y;
      walkDown(above);
    });
  } // Find disconnected nodes, and walk


  for (const _ref3 of Object.entries(graph)) {
    var _ref4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref3, 2);

    const key = _ref4[0];
    const neighbors = _ref4[1];

    if (neighbors.below == null) {
      walkDown(key);
    }

    if (neighbors.right == null) {
      walkRight(key);
    }
  }

  return positionDiff;
}
function generateGraph(windows) {
  const bottoms = {};
  const rights = {};

  for (const w of windows) {
    const bottom = w.y + w.height;

    if (bottoms[bottom]) {
      bottoms[bottom].push(w);
    } else {
      bottoms[bottom] = [w];
    }

    const right = w.x + w.width;

    if (rights[right]) {
      rights[right].push(w);
    } else {
      rights[right] = [w];
    }
  }

  const graph = {};

  for (const w of windows) {
    const edges = {};
    const top = w.y;
    const left = w.x;
    const tops = bottoms[top];
    const lefts = rights[left];

    if (tops) {
      for (const below of tops) {
        const isToTheLeft = below.x + below.width < w.x;
        const isToTheRight = below.x > w.x + w.width;
        const overlapsInX = !(isToTheLeft || isToTheRight);

        if (overlapsInX) {
          edges.below = below.key;
          break;
        }
      }
    }

    if (lefts) {
      for (const right of lefts) {
        const isAbove = right.y + right.height < w.y;
        const isBelow = right.y > w.y + w.height;
        const overlapsInY = !(isAbove || isBelow);

        if (overlapsInY) {
          edges.right = right.key;
          break;
        }
      }
    }

    graph[w.key] = edges;
  }

  return graph;
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);

// box = {x, y, width, height}
const SNAP_DISTANCE = 15;
/* unused harmony export SNAP_DISTANCE */

const top = box => box.y;
/* unused harmony export top */

const bottom = box => box.y + box.height;
/* unused harmony export bottom */

const left = box => box.x;
/* unused harmony export left */

const right = box => box.x + box.width;
/* unused harmony export right */

const near = (a, b) => Math.abs(a - b) < SNAP_DISTANCE;
/* unused harmony export near */
 // http://stackoverflow.com/a/3269471/1263117

const overlapX = (a, b) => left(a) <= right(b) + SNAP_DISTANCE && left(b) <= right(a) + SNAP_DISTANCE;
/* unused harmony export overlapX */

const overlapY = (a, b) => top(a) <= bottom(b) + SNAP_DISTANCE && top(b) <= bottom(a) + SNAP_DISTANCE;
/* unused harmony export overlapY */
 // Give a new position for `boxA` that snaps it to `boxB` if neede.

const snap = (boxA, boxB) => {
  let x, y; // TODO: Refactor/simplify this code

  if (overlapY(boxA, boxB)) {
    if (near(left(boxA), right(boxB))) {
      x = right(boxB);
    } else if (near(right(boxA), left(boxB))) {
      x = left(boxB) - boxA.width;
    } else if (near(left(boxA), left(boxB))) {
      x = left(boxB);
    } else if (near(right(boxA), right(boxB))) {
      x = right(boxB) - boxA.width;
    }
  }

  if (overlapX(boxA, boxB)) {
    if (near(top(boxA), bottom(boxB))) {
      y = bottom(boxB);
    } else if (near(bottom(boxA), top(boxB))) {
      y = top(boxB) - boxA.height;
    } else if (near(top(boxA), top(boxB))) {
      y = top(boxB);
    } else if (near(bottom(boxA), bottom(boxB))) {
      y = bottom(boxB) - boxA.height;
    }
  }

  return {
    x,
    y
  };
};
/* harmony export (immutable) */ __webpack_exports__["d"] = snap;

const snapDiff = (a, b) => {
  const newPos = snap(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};
/* unused harmony export snapDiff */
 // TODO: Use the first x and y combo

const snapDiffManyToMany = (as, bs) => {
  let x = 0;
  let y = 0;

  for (const a of as) {
    for (const b of bs) {
      const diff = snapDiff(a, b);
      x = x || diff.x;
      y = y || diff.y;

      if (x > 0 && y > 0) {
        break;
      }
    }
  }

  return {
    x,
    y
  };
};
/* harmony export (immutable) */ __webpack_exports__["e"] = snapDiffManyToMany;

const snapToMany = (boxA, otherBoxes) => {
  let x, y;
  otherBoxes.forEach(boxB => {
    const newPos = snap(boxA, boxB);
    x = newPos.x || x;
    y = newPos.y || y;
  });
  return {
    x,
    y
  };
};
/* unused harmony export snapToMany */

const snapWithin = (boxA, boundingBox) => {
  let x, y;

  if (boxA.x - SNAP_DISTANCE < 0) {
    x = 0;
  } else if (boxA.x + boxA.width + SNAP_DISTANCE > boundingBox.width) {
    x = boundingBox.width - boxA.width;
  }

  if (boxA.y - SNAP_DISTANCE < 0) {
    y = 0;
  } else if (boxA.y + boxA.height + SNAP_DISTANCE > boundingBox.height) {
    y = boundingBox.height - boxA.height;
  }

  return {
    x,
    y
  };
};
/* unused harmony export snapWithin */

const snapWithinDiff = (a, b) => {
  const newPos = snapWithin(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};
/* harmony export (immutable) */ __webpack_exports__["f"] = snapWithinDiff;

const applySnap = (original, ...snaps) => snaps.reduce((previous, snapped) => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, previous, {
  x: typeof snapped.x !== "undefined" ? snapped.x : previous.x,
  y: typeof snapped.y !== "undefined" ? snapped.y : previous.y
}), original);
/* unused harmony export applySnap */

const boundingBox = nodes => {
  const boxes = nodes.slice();
  const firstNode = boxes.pop();
  const bounding = {
    top: top(firstNode),
    right: right(firstNode),
    bottom: bottom(firstNode),
    left: left(firstNode)
  };
  boxes.forEach(node => {
    bounding.top = Math.min(bounding.top, top(node));
    bounding.right = Math.max(bounding.right, right(node));
    bounding.bottom = Math.max(bounding.bottom, bottom(node));
    bounding.left = Math.min(bounding.left, left(node));
  });
  return {
    x: bounding.left,
    y: bounding.top,
    width: bounding.right - bounding.left,
    height: bounding.bottom - bounding.top
  };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = boundingBox;

const traceConnection = areConnected => (candidates, node) => {
  const connected = new Set();

  const checkNode = n => {
    for (const candidate of candidates) {
      if (!connected.has(candidate) && areConnected(candidate, n)) {
        connected.add(candidate);
        checkNode(candidate);
      }
    }
  };

  checkNode(node);
  return connected;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = traceConnection;

const applyDiff = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y
});
/* harmony export (immutable) */ __webpack_exports__["a"] = applyDiff;
 // TODO: This should not

const applyMultipleDiffs = (initial, ...diffs) => {
  const metaDiff = diffs.reduce((m, diff) => ({
    // Use the smallest non-zero diff for each axis.
    // TODO: Min should be the absolute value
    x: m.x === 0 || diff.x === 0 ? m.x + diff.x : Math.min(m.x, diff.x),
    y: m.y === 0 || diff.y === 0 ? m.y + diff.y : Math.min(m.y, diff.y)
  }));
  return applyDiff(initial, metaDiff);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = applyMultipleDiffs;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setEqBand;
/* harmony export (immutable) */ __webpack_exports__["b"] = setEqToMax;
/* harmony export (immutable) */ __webpack_exports__["c"] = setEqToMid;
/* harmony export (immutable) */ __webpack_exports__["d"] = setEqToMin;
/* harmony export (immutable) */ __webpack_exports__["e"] = setPreamp;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleEq;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const BAND_SNAP_DISTANCE = 10;
const BAND_MID_POINT_VALUE = 50;
function setEqBand(band, value) {
  if (value < BAND_MID_POINT_VALUE + BAND_SNAP_DISTANCE && value > BAND_MID_POINT_VALUE - BAND_SNAP_DISTANCE) {
    return {
      type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["I" /* SET_BAND_VALUE */],
      band,
      value: BAND_MID_POINT_VALUE
    };
  }

  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["I" /* SET_BAND_VALUE */],
    band,
    value
  };
}

function _setEqTo(value) {
  return dispatch => {
    Object.keys(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* BANDS */]).forEach(key => {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["I" /* SET_BAND_VALUE */],
        value,
        band: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* BANDS */][key]
      });
    });
  };
}

function setEqToMax() {
  return _setEqTo(100);
}
function setEqToMid() {
  return _setEqTo(50);
}
function setEqToMin() {
  return _setEqTo(0);
}
function setPreamp(value) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["I" /* SET_BAND_VALUE */],
    band: "preamp",
    value
  };
}
function toggleEq() {
  return (dispatch, getState) => {
    const type = getState().equalizer.on ? __WEBPACK_IMPORTED_MODULE_1__actionTypes__["L" /* SET_EQ_OFF */] : __WEBPACK_IMPORTED_MODULE_1__actionTypes__["M" /* SET_EQ_ON */];
    dispatch({
      type
    });
  };
}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

var PRESET_VALUES = [
  "hz60",
  "hz170",
  "hz310",
  "hz600",
  "hz1000",
  "hz3000",
  "hz6000",
  "hz12000",
  "hz14000",
  "hz16000",
  "preamp"
];

var HEADER = "Winamp EQ library file v1.1";

module.exports = {
  PRESET_VALUES: PRESET_VALUES,
  HEADER: HEADER
};


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);

/* TODO: There are too many " " and "_" characters */

const FONT_LOOKUP = {
  a: [0, 0],
  b: [0, 1],
  c: [0, 2],
  d: [0, 3],
  e: [0, 4],
  f: [0, 5],
  g: [0, 6],
  h: [0, 7],
  i: [0, 8],
  j: [0, 9],
  k: [0, 10],
  l: [0, 11],
  m: [0, 12],
  n: [0, 13],
  o: [0, 14],
  p: [0, 15],
  q: [0, 16],
  r: [0, 17],
  s: [0, 18],
  t: [0, 19],
  u: [0, 20],
  v: [0, 21],
  w: [0, 22],
  x: [0, 23],
  y: [0, 24],
  z: [0, 25],
  '"': [0, 26],
  "@": [0, 27],
  " ": [0, 30],
  "0": [1, 0],
  "1": [1, 1],
  "2": [1, 2],
  "3": [1, 3],
  "4": [1, 4],
  "5": [1, 5],
  "6": [1, 6],
  "7": [1, 7],
  "8": [1, 8],
  "9": [1, 9],
  [__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* UTF8_ELLIPSIS */]]: [1, 10],
  _: [1, 11],
  ":": [1, 12],
  "(": [1, 13],
  ")": [1, 14],
  "-": [1, 15],
  "'": [1, 16],
  "!": [1, 17],
  "+": [1, 19],
  "\\": [1, 20],
  "/": [1, 21],
  "[": [1, 22],
  "]": [1, 23],
  "^": [1, 24],
  "&": [1, 25],
  "%": [1, 26],
  ".": [1, 27],
  "=": [1, 28],
  $: [1, 29],
  "#": [1, 30],
  Å: [2, 0],
  Ö: [2, 1],
  Ä: [2, 2],
  "?": [2, 3],
  "*": [2, 4],
  "<": [1, 22],
  ">": [1, 23],
  "{": [1, 22],
  "}": [1, 23]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = FONT_LOOKUP;

const imageConstFromChar = char => `CHARACTER_${char.charCodeAt(0)}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = imageConstFromChar;

const CHAR_X = 5;
const CHAR_Y = 6;
const characterSprites = [];

for (const key in FONT_LOOKUP) {
  if (FONT_LOOKUP.hasOwnProperty(key)) {
    const position = FONT_LOOKUP[key];
    characterSprites.push({
      name: imageConstFromChar(key),
      y: position[0] * CHAR_Y,
      x: position[1] * CHAR_X,
      width: CHAR_X,
      height: CHAR_Y
    });
  }
}

/* harmony default export */ __webpack_exports__["b"] = ({
  BALANCE: [{
    name: "MAIN_BALANCE_BACKGROUND",
    x: 9,
    y: 0,
    width: 38,
    height: 420
  }, {
    name: "MAIN_BALANCE_THUMB",
    x: 15,
    y: 422,
    width: 14,
    height: 11
  }, {
    name: "MAIN_BALANCE_THUMB_ACTIVE",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  CBUTTONS: [{
    name: "MAIN_PREVIOUS_BUTTON",
    x: 0,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PREVIOUS_BUTTON_ACTIVE",
    x: 0,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PLAY_BUTTON",
    x: 23,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PLAY_BUTTON_ACTIVE",
    x: 23,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PAUSE_BUTTON",
    x: 46,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PAUSE_BUTTON_ACTIVE",
    x: 46,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_STOP_BUTTON",
    x: 69,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_STOP_BUTTON_ACTIVE",
    x: 69,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_NEXT_BUTTON",
    x: 92,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_NEXT_BUTTON_ACTIVE",
    x: 92,
    y: 18,
    width: 22,
    height: 18
  }, {
    name: "MAIN_EJECT_BUTTON",
    x: 114,
    y: 0,
    width: 22,
    height: 16
  }, {
    name: "MAIN_EJECT_BUTTON_ACTIVE",
    x: 114,
    y: 16,
    width: 22,
    height: 16
  }],
  MAIN: [{
    name: "MAIN_WINDOW_BACKGROUND",
    x: 0,
    y: 0,
    width: 275,
    height: 116
  }],
  MONOSTER: [{
    name: "MAIN_STEREO",
    x: 0,
    y: 12,
    width: 29,
    height: 12
  }, {
    name: "MAIN_STEREO_SELECTED",
    x: 0,
    y: 0,
    width: 29,
    height: 12
  }, {
    name: "MAIN_MONO",
    x: 29,
    y: 12,
    width: 27,
    height: 12
  }, {
    name: "MAIN_MONO_SELECTED",
    x: 29,
    y: 0,
    width: 27,
    height: 12
  }],
  NUMBERS: [{
    name: "NO_MINUS_SIGN",
    x: 9,
    y: 6,
    width: 5,
    height: 1
  }, {
    name: "MINUS_SIGN",
    x: 20,
    y: 6,
    width: 5,
    height: 1
  }, {
    name: "DIGIT_0",
    x: 0,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_1",
    x: 9,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_2",
    x: 18,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_3",
    x: 27,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_4",
    x: 36,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_5",
    x: 45,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_6",
    x: 54,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_7",
    x: 63,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_8",
    x: 72,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_9",
    x: 81,
    y: 0,
    width: 9,
    height: 13
  }],
  NUMS_EX: [{
    name: "NO_MINUS_SIGN_EX",
    x: 90,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "MINUS_SIGN_EX",
    x: 99,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_0_EX",
    x: 0,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_1_EX",
    x: 9,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_2_EX",
    x: 18,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_3_EX",
    x: 27,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_4_EX",
    x: 36,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_5_EX",
    x: 45,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_6_EX",
    x: 54,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_7_EX",
    x: 63,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_8_EX",
    x: 72,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_9_EX",
    x: 81,
    y: 0,
    width: 9,
    height: 13
  }],
  PLAYPAUS: [{
    name: "MAIN_PLAYING_INDICATOR",
    x: 0,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_PAUSED_INDICATOR",
    x: 9,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_STOPPED_INDICATOR",
    x: 18,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_NOT_WORKING_INDICATOR",
    x: 36,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_WORKING_INDICATOR",
    x: 39,
    y: 0,
    width: 9,
    height: 9
  }],
  PLEDIT: [{
    name: "PLAYLIST_TOP_TILE",
    x: 127,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_LEFT_CORNER",
    x: 0,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TITLE_BAR",
    x: 26,
    y: 21,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER",
    x: 153,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_TILE_SELECTED",
    x: 127,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_LEFT_SELECTED",
    x: 0,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TITLE_BAR_SELECTED",
    x: 26,
    y: 0,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER_SELECTED",
    x: 153,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_LEFT_TILE",
    x: 0,
    y: 42,
    width: 12,
    height: 29
  }, {
    name: "PLAYLIST_RIGHT_TILE",
    x: 31,
    y: 42,
    width: 20,
    height: 29
  }, {
    name: "PLAYLIST_BOTTOM_TILE",
    x: 179,
    y: 0,
    width: 25,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_LEFT_CORNER",
    x: 0,
    y: 72,
    width: 125,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_RIGHT_CORNER",
    x: 126,
    y: 72,
    width: 150,
    height: 38
  }, {
    name: "PLAYLIST_VISUALIZER_BACKGROUND",
    x: 205,
    y: 0,
    width: 75,
    height: 38
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND",
    x: 72,
    y: 57,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_LEFT",
    x: 72,
    y: 42,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT",
    x: 99,
    y: 57,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED",
    x: 99,
    y: 42,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SCROLL_HANDLE_SELECTED",
    x: 61,
    y: 53,
    width: 8,
    height: 18
  }, {
    name: "PLAYLIST_SCROLL_HANDLE",
    x: 52,
    y: 53,
    width: 8,
    height: 18
  }, {
    name: "PLAYLIST_ADD_URL",
    x: 0,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_URL_SELECTED",
    x: 23,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_DIR",
    x: 0,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_DIR_SELECTED",
    x: 23,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_FILE",
    x: 0,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_FILE_SELECTED",
    x: 23,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_ALL",
    x: 54,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_ALL_SELECTED",
    x: 77,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_CROP",
    x: 54,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_CROP_SELECTED",
    x: 77,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_SELECTED",
    x: 54,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_SELECTED_SELECTED",
    x: 77,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_MISC",
    x: 54,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_MISC_SELECTED",
    x: 77,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION",
    x: 104,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION_SELECTED",
    x: 127,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ZERO",
    x: 104,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ZERO_SELECTED",
    x: 127,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ALL",
    x: 104,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ALL_SELECTED",
    x: 127,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SORT_LIST",
    x: 154,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SORT_LIST_SELECTED",
    x: 177,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_FILE_INFO",
    x: 154,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_FILE_INFO_SELECTED",
    x: 177,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_MISC_OPTIONS",
    x: 154,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_MISC_OPTIONS_SELECTED",
    x: 177,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_NEW_LIST",
    x: 204,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_NEW_LIST_SELECTED",
    x: 227,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SAVE_LIST",
    x: 204,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SAVE_LIST_SELECTED",
    x: 227,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_LOAD_LIST",
    x: 204,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_LOAD_LIST_SELECTED",
    x: 227,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_MENU_BAR",
    x: 48,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_REMOVE_MENU_BAR",
    x: 100,
    y: 111,
    width: 3,
    height: 72
  }, {
    name: "PLAYLIST_SELECT_MENU_BAR",
    x: 150,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_MISC_MENU_BAR",
    x: 200,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_LIST_BAR",
    x: 250,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_CLOSE_SELECTED",
    x: 52,
    y: 42,
    width: 9,
    height: 9
  }, {
    name: "PLAYLIST_COLLAPSE_SELECTED",
    x: 62,
    y: 42,
    width: 9,
    height: 9
  }, {
    name: "PLAYLIST_EXPAND_SELECTED",
    x: 150,
    y: 42,
    width: 9,
    height: 9
  }],
  EQ_EX: [{
    name: "EQ_SHADE_BACKGROUND_SELECTED",
    x: 0,
    y: 0,
    width: 275,
    height: 14
  }, {
    name: "EQ_SHADE_BACKGROUND",
    x: 0,
    y: 15,
    width: 275,
    height: 14
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_LEFT",
    x: 1,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_CENTER",
    x: 4,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_RIGHT",
    x: 7,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_LEFT",
    x: 11,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_CENTER",
    x: 14,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_RIGHT",
    x: 17,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_MAXIMIZE_BUTTON_ACTIVE",
    x: 1,
    y: 38,
    width: 9,
    height: 9
  }, {
    name: "EQ_MINIMIZE_BUTTON_ACTIVE",
    x: 1,
    y: 47,
    width: 9,
    height: 9
  }, {
    name: "EQ_CLOSE_BUTTON",
    x: 11,
    y: 38,
    width: 9,
    height: 9
  }, {
    name: "EQ_CLOSE_BUTTON_ACTIVE",
    x: 11,
    y: 47,
    width: 9,
    height: 9
  }],
  EQMAIN: [{
    name: "EQ_WINDOW_BACKGROUND",
    x: 0,
    y: 0,
    width: 275,
    height: 116
  }, {
    name: "EQ_TITLE_BAR",
    x: 0,
    y: 149,
    width: 275,
    height: 14
  }, {
    name: "EQ_TITLE_BAR_SELECTED",
    x: 0,
    y: 134,
    width: 275,
    height: 14
  }, {
    name: "EQ_SLIDER_BACKGROUND",
    x: 13,
    y: 164,
    width: 209,
    height: 129
  }, {
    name: "EQ_SLIDER_THUMB",
    x: 0,
    y: 164,
    width: 11,
    height: 11
  }, {
    name: "EQ_SLIDER_THUMB_SELECTED",
    x: 0,
    y: 176,
    width: 11,
    height: 11
  }, {
    name: "EQ_ON_BUTTON",
    x: 10,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_DEPRESSED",
    x: 128,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_SELECTED",
    x: 69,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_SELECTED_DEPRESSED",
    x: 187,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON",
    x: 36,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_DEPRESSED",
    x: 154,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_SELECTED",
    x: 95,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_SELECTED_DEPRESSED",
    x: 213,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_GRAPH_BACKGROUND",
    x: 0,
    y: 294,
    width: 113,
    height: 19
  }, {
    name: "EQ_GRAPH_LINE_COLORS",
    x: 115,
    y: 294,
    width: 1,
    height: 19
  }, {
    name: "EQ_PRESETS_BUTTON",
    x: 224,
    y: 164,
    width: 44,
    height: 12
  }, {
    name: "EQ_PRESETS_BUTTON_SELECTED",
    x: 224,
    y: 176,
    width: 44,
    height: 12
  }, {
    name: "EQ_PREAMP_LINE",
    x: 0,
    y: 314,
    width: 113,
    height: 1
  }],
  POSBAR: [{
    name: "MAIN_POSITION_SLIDER_BACKGROUND",
    x: 0,
    y: 0,
    width: 248,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB",
    x: 248,
    y: 0,
    width: 29,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB_SELECTED",
    x: 278,
    y: 0,
    width: 29,
    height: 10
  }],
  SHUFREP: [{
    name: "MAIN_SHUFFLE_BUTTON",
    x: 28,
    y: 0,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_DEPRESSED",
    x: 28,
    y: 15,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED",
    x: 28,
    y: 30,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED",
    x: 28,
    y: 45,
    width: 47,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON",
    x: 0,
    y: 0,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_DEPRESSED",
    x: 0,
    y: 15,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED",
    x: 0,
    y: 30,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED",
    x: 0,
    y: 45,
    width: 28,
    height: 15
  }, {
    name: "MAIN_EQ_BUTTON",
    x: 0,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_SELECTED",
    x: 0,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED",
    x: 46,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED_SELECTED",
    x: 46,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON",
    x: 23,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_SELECTED",
    x: 23,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED",
    x: 69,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED",
    x: 69,
    y: 73,
    width: 23,
    height: 12
  }],
  TEXT: characterSprites,
  TITLEBAR: [{
    name: "MAIN_TITLE_BAR",
    x: 27,
    y: 15,
    width: 275,
    height: 14
  }, {
    name: "MAIN_TITLE_BAR_SELECTED",
    x: 27,
    y: 0,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR",
    x: 27,
    y: 72,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR_SELECTED",
    x: 27,
    y: 57,
    width: 275,
    height: 14
  }, {
    name: "MAIN_OPTIONS_BUTTON",
    x: 0,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_OPTIONS_BUTTON_DEPRESSED",
    x: 0,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_MINIMIZE_BUTTON",
    x: 9,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_MINIMIZE_BUTTON_DEPRESSED",
    x: 9,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON",
    x: 0,
    y: 18,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON_DEPRESSED",
    x: 9,
    y: 18,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLOSE_BUTTON",
    x: 18,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLOSE_BUTTON_DEPRESSED",
    x: 18,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND",
    x: 304,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND_DISABLED",
    x: 312,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_O_SELECTED",
    x: 304,
    y: 47,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_A_SELECTED",
    x: 312,
    y: 55,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_I_SELECTED",
    x: 320,
    y: 62,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_D_SELECTED",
    x: 328,
    y: 69,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_V_SELECTED",
    x: 336,
    y: 77,
    width: 8,
    height: 7
  }, {
    name: "MAIN_SHADE_BACKGROUND",
    x: 27,
    y: 42,
    width: 275,
    height: 14
  }, {
    name: "MAIN_SHADE_BACKGROUND_SELECTED",
    x: 27,
    y: 29,
    width: 275,
    height: 14
  }, {
    name: "MAIN_SHADE_BUTTON_SELECTED",
    x: 0,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON_SELECTED_DEPRESSED",
    x: 9,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_POSITION_BACKGROUND",
    x: 0,
    y: 36,
    width: 17,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB",
    x: 20,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_LEFT",
    x: 17,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_RIGHT",
    x: 23,
    y: 36,
    width: 3,
    height: 7
  }],
  VOLUME: [{
    name: "MAIN_VOLUME_BACKGROUND",
    x: 0,
    y: 0,
    width: 68,
    height: 420
  }, {
    name: "MAIN_VOLUME_THUMB",
    x: 15,
    y: 422,
    width: 14,
    height: 11
  }, {
    name: "MAIN_VOLUME_THUMB_SELECTED",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  GEN: [{
    name: "GEN_TOP_LEFT_SELECTED",
    x: 0,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_END_SELECTED",
    x: 26,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_CENTER_FILL_SELECTED",
    x: 52,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_END_SELECTED",
    x: 78,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL_SELECTED",
    x: 104,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_SELECTED",
    x: 130,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT",
    x: 0,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_END",
    x: 26,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_CENTER_FILL",
    x: 52,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_END",
    x: 78,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL",
    x: 104,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT",
    x: 130,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_BOTTOM_LEFT",
    x: 0,
    y: 42,
    width: 125,
    height: 14
  }, {
    name: "GEN_BOTTOM_RIGHT",
    x: 0,
    y: 57,
    width: 125,
    height: 14
  }, {
    name: "GEN_BOTTOM_FILL",
    x: 127,
    y: 72,
    width: 25,
    height: 14
  }, {
    name: "GEN_MIDDLE_LEFT",
    x: 127,
    y: 42,
    width: 11,
    height: 29
  }, {
    name: "GEN_MIDDLE_LEFT_BOTTOM",
    x: 158,
    y: 42,
    width: 11,
    height: 24
  }, {
    name: "GEN_MIDDLE_RIGHT",
    x: 139,
    y: 42,
    width: 8,
    height: 29
  }, {
    name: "GEN_MIDDLE_RIGHT_BOTTOM",
    x: 170,
    y: 42,
    width: 8,
    height: 24
  }, {
    name: "GEN_CLOSE_SELECTED",
    x: 148,
    y: 42,
    width: 9,
    height: 9
  }]
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cropPlaylist;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeSelectedTracks;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeAllTracks;
/* harmony export (immutable) */ __webpack_exports__["f"] = reverseList;
/* harmony export (immutable) */ __webpack_exports__["c"] = randomizeList;
/* harmony export (immutable) */ __webpack_exports__["k"] = sortListByTitle;
/* harmony export (immutable) */ __webpack_exports__["j"] = setPlaylistScrollPosition;
/* unused harmony export scrollNTracks */
/* harmony export (immutable) */ __webpack_exports__["h"] = scrollPlaylistByDelta;
/* harmony export (immutable) */ __webpack_exports__["i"] = scrollUpFourTracks;
/* harmony export (immutable) */ __webpack_exports__["g"] = scrollDownFourTracks;
/* harmony export (immutable) */ __webpack_exports__["b"] = dragSelected;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);




function cropPlaylist() {
  return (dispatch, getState) => {
    const state = getState();

    if (Object(__WEBPACK_IMPORTED_MODULE_1__selectors__["m" /* getSelectedTrackObjects */])(state).length === 0) {
      return;
    }

    const _getState = getState(),
          tracks = _getState.playlist.tracks;

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["A" /* REMOVE_TRACKS */],
      ids: Object.keys(tracks).filter(id => !tracks[id].selected)
    });
  };
}
function removeSelectedTracks() {
  return (dispatch, getState) => {
    const _getState2 = getState(),
          tracks = _getState2.playlist.tracks;

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["A" /* REMOVE_TRACKS */],
      ids: Object.keys(tracks).filter(id => tracks[id].selected)
    });
  };
}
function removeAllTracks() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["z" /* REMOVE_ALL_TRACKS */]
  };
}
function reverseList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["B" /* REVERSE_LIST */]
  };
}
function randomizeList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["x" /* RANDOMIZE_LIST */]
  };
}
function sortListByTitle() {
  return (dispatch, getState) => {
    const state = getState();
    const trackOrder = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["v" /* sort */])(state.playlist.trackOrder, i => `${state.playlist.tracks[i].title}`.toLowerCase());
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["V" /* SET_TRACK_ORDER */],
      trackOrder
    });
  };
}
function setPlaylistScrollPosition(position) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["S" /* SET_PLAYLIST_SCROLL_POSITION */],
    position
  };
}
function scrollNTracks(n) {
  return (dispatch, getState) => {
    const state = getState();
    const overflow = Object(__WEBPACK_IMPORTED_MODULE_1__selectors__["h" /* getOverflowTrackCount */])(state);
    const currentOffset = Object(__WEBPACK_IMPORTED_MODULE_1__selectors__["l" /* getScrollOffset */])(state);
    const position = overflow ? Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])((currentOffset + n) / overflow, 0, 1) : 0;
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["S" /* SET_PLAYLIST_SCROLL_POSITION */],
      position: position * 100
    });
  };
}
function scrollPlaylistByDelta(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState();

    if (Object(__WEBPACK_IMPORTED_MODULE_1__selectors__["h" /* getOverflowTrackCount */])(state)) {
      e.stopPropagation();
    }

    const totalPixelHeight = state.playlist.trackOrder.length * __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* TRACK_HEIGHT */];
    const percentDelta = e.deltaY / totalPixelHeight * 100;
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["S" /* SET_PLAYLIST_SCROLL_POSITION */],
      position: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])(state.display.playlistScrollPosition + percentDelta, 0, 100)
    });
  };
}
function scrollUpFourTracks() {
  return scrollNTracks(-4);
}
function scrollDownFourTracks() {
  return scrollNTracks(4);
}

function findLastIndex(arr, cb) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return i;
    }
  }

  return -1;
}

function dragSelected(offset) {
  return (dispatch, getState) => {
    const _getState3 = getState(),
          _getState3$playlist = _getState3.playlist,
          trackOrder = _getState3$playlist.trackOrder,
          tracks = _getState3$playlist.tracks;

    const firstSelected = trackOrder.findIndex(trackId => tracks[trackId] && tracks[trackId].selected);

    if (firstSelected === -1) {
      return;
    }

    const lastSelected = findLastIndex(trackOrder, trackId => tracks[trackId] && tracks[trackId].selected);

    if (lastSelected === -1) {
      throw new Error("We found a first selected, but not a last selected.");
    } // Ensure we don't try to drag off either end.


    const min = -firstSelected;
    const max = trackOrder.length - 1 - lastSelected;
    const normalizedOffset = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* clamp */])(offset, min, max);

    if (normalizedOffset !== 0) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["j" /* DRAG_SELECTED */],
        offset: normalizedOffset
      });
    }
  };
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PlaybackContextMenu__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SkinsContextMenu__ = __webpack_require__(190);









const MainContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["b" /* LinkNode */], {
  href: "https://github.com/captbaritone/webamp",
  target: "_blank",
  label: "Webamp..."
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["d" /* Parent */], {
  label: "Play"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  onClick: props.openMediaFileDialog,
  label: "File...",
  hotkey: "L"
}), props.filePickers && props.filePickers.map((picker, i) => (props.networkConnected || !picker.requiresNetwork) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  key: i,
  onClick: async () => {
    let files;

    try {
      files = await picker.filePicker();
    } catch (e) {
      console.error("Error loading from file picker", e);
    }

    props.loadMediaFiles(files, __WEBPACK_IMPORTED_MODULE_4__constants__["e" /* LOAD_STYLE */].PLAY);
  },
  label: picker.contextMenuName
}))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), Object.keys(props.genWindows).map(i => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  key: i,
  label: props.genWindows[i].title,
  checked: props.genWindows[i].open,
  onClick: () => props.toggleGenWindow(i),
  hotkey: props.genWindows[i].hotkey
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SkinsContextMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["d" /* Parent */], {
  label: "Playback"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__PlaybackContextMenu__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
  onClick: props.close,
  label: "Exit"
}));

const mapStateToProps = state => ({
  networkConnected: state.network.connected,
  genWindows: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["c" /* getGenWindows */])(state)
});

const mapDispatchToProps = {
  close: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["c" /* close */],
  openMediaFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["n" /* openMediaFileDialog */],
  loadMediaFiles: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["j" /* loadMediaFiles */],
  toggleGenWindow: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["W" /* toggleWindow */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(MainContextMenu));

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);




class DropTarget extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "handleDrop", e => {
      this.supress(e);

      if (!this._node) {
        return;
      }

      const _this$_node$getBoundi = this._node.getBoundingClientRect(),
            x = _this$_node$getBoundi.x,
            y = _this$_node$getBoundi.y;

      this.props.handleDrop(e, {
        x,
        y
      });
    });

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "_ref", node => {
      this._node = node;
    });
  }

  supress(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    e.dataTransfer.effectAllowed = "link";
  }

  render() {
    const _this$props = this.props,
          loadFilesFromReferences = _this$props.loadFilesFromReferences,
          handleDrop = _this$props.handleDrop,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["loadFilesFromReferences", "handleDrop"]);

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, passThroughProps, {
      onDragStart: this.supress,
      onDragEnter: this.supress,
      onDragOver: this.supress,
      onDrop: this.handleDrop,
      ref: this._ref
    }));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DropTarget;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Character__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_mini_time_css__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_mini_time_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_mini_time_css__);







 // Sigh. When the display is blinking (say when it's paused) we need to
// alternate between the actual character and the space character. Not
// Possible to do that in pure CSS with the background being dynamically generated.
// All "space" characters is also how Winamp renders no content.

const Background = () => [1, 7, 12, 20, 25].map((left, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
  style: {
    left
  },
  key: i,
  className: "background-character",
  children: " "
}));

const MiniTime = props => {
  let seconds = null; // TODO: Clean this up: If stopped, just render the background, rather than
  // rendering spaces twice.

  if (props.status !== __WEBPACK_IMPORTED_MODULE_5__constants__["f" /* MEDIA_STATUS */].STOPPED) {
    seconds = props.timeMode === __WEBPACK_IMPORTED_MODULE_5__constants__["h" /* TIME_MODE */].ELAPSED ? props.timeElapsed : props.length - props.timeElapsed;
  }

  const timeObj = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["h" /* getTimeObj */])(seconds);
  const showMinus = props.timeMode === __WEBPACK_IMPORTED_MODULE_5__constants__["h" /* TIME_MODE */].REMAINING && props.status !== __WEBPACK_IMPORTED_MODULE_5__constants__["f" /* MEDIA_STATUS */].STOPPED;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    onClick: props.toggle,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("mini-time", "countdown", {
      blinking: props.status === __WEBPACK_IMPORTED_MODULE_5__constants__["f" /* MEDIA_STATUS */].PAUSED
    })
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Background, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 1
    }
  }, showMinus ? "-" : " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 7
    }
  }, timeObj.minutesFirstDigit), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 12
    }
  }, timeObj.minutesSecondDigit), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 20
    }
  }, timeObj.secondsFirstDigit), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Character__["a" /* default */], {
    style: {
      left: 25
    }
  }, timeObj.secondsSecondDigit));
};

const mapDispatchToProps = {
  // TODO: move to actionCreators
  toggle: () => ({
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["_9" /* TOGGLE_TIME_MODE */]
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => state.media, mapDispatchToProps)(MiniTime));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);




const characterClassName = char => `character-${char.toString().toLowerCase().charCodeAt(0)}`;
/* unused harmony export characterClassName */


const Character = (_ref) => {
  let char = _ref.children,
      className = _ref.className,
      passThrough = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children", "className"]);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, passThrough, {
    className: `${className || ""} character ${characterClassName(char)}`
  }), char);
};

Character.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number]).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);





const PIXEL_DENSITY = 2;
const NUM_BARS = 20;
const BAR_PEAK_DROP_RATE = 0.01;
const GRADIENT_COLOR_COUNT = 16;
const PEAK_COLOR_INDEX = 23; // Return the average value in a slice of dataArray

function sliceAverage(dataArray, sliceWidth, sliceNumber) {
  const start = sliceWidth * sliceNumber;
  const end = start + sliceWidth;
  let sum = 0;

  for (let i = start; i < end; i++) {
    sum += dataArray[i];
  }

  return sum / sliceWidth;
}

class Visualizer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  componentDidMount() {
    this.barPeaks = new Array(NUM_BARS).fill(0);
    this.barPeakFrames = new Array(NUM_BARS).fill(0);
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.setStyle(); // Kick off the animation loop

    const loop = () => {
      if (this.props.status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PLAYING) {
        if (this.props.dummyVizData) {
          Object.keys(this.props.dummyVizData).forEach(i => {
            this._printBar(i, this.props.dummyVizData[i]);
          });
        } else {
          this.paintFrame();
        }
      }

      this._animationRequest = window.requestAnimationFrame(loop);
    };

    loop();
  }

  componentWillUnmount() {
    if (this._animationRequest) {
      window.cancelAnimationFrame(this._animationRequest);
    }
  }

  componentDidUpdate() {
    this.setStyle(); // Redraw the current frame, since the skin may have changed.

    this.paintFrame();
  }

  _renderWidth() {
    return this.props.width;
  }

  _renderHeight() {
    return this.props.height;
  }

  _height() {
    return this.props.height * PIXEL_DENSITY;
  }

  _width() {
    return this.props.width * PIXEL_DENSITY;
  }

  _barWidth() {
    const barWidth = Math.floor(this._width() / NUM_BARS);

    if (barWidth % 2 === 0) {
      return barWidth;
    }

    return barWidth - 1;
  }

  _generateOctaveBuckets() {
    const octaveBuckets = new Array(NUM_BARS).fill(0);
    const minHz = 200;
    const maxHz = 22050;
    const octaveStep = Math.pow(maxHz / minHz, 1 / NUM_BARS);
    octaveBuckets[0] = 0;
    octaveBuckets[1] = minHz;

    for (let i = 2; i < NUM_BARS - 1; i++) {
      octaveBuckets[i] = octaveBuckets[i - 1] * octaveStep;
    }

    octaveBuckets[NUM_BARS - 1] = maxHz;

    for (let i = 0; i < NUM_BARS; i++) {
      const octaveIdx = Math.floor(octaveBuckets[i] / maxHz * this.bufferLength);
      octaveBuckets[i] = octaveIdx;
    }

    return octaveBuckets;
  }

  setStyle() {
    if (!this.props.colors) {
      return;
    } // TODO: Split this into to methods. One for skin update, one for style
    // update.


    this.preRenderBg();
    this.preRenderBar();
    this.props.analyser.fftSize = 2048;

    if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].OSCILLOSCOPE) {
      this.bufferLength = this.props.analyser.fftSize;
      this.dataArray = new Uint8Array(this.bufferLength);
    } else if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].BAR) {
      this.bufferLength = this.props.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);

      if (!this.octaveBuckets) {
        this.octaveBuckets = this._generateOctaveBuckets();
      }
    }
  }

  clear() {
    this.canvasCtx.drawImage(this.bgCanvas, 0, 0);
  } // Pre-render the background grid


  preRenderBg() {
    // Off-screen canvas for pre-rendering the background
    this.bgCanvas = document.createElement("canvas");
    this.bgCanvas.width = this._width();
    this.bgCanvas.height = this._height();
    const bgCanvasCtx = this.bgCanvas.getContext("2d");
    bgCanvasCtx.fillStyle = this.props.colors[0];
    bgCanvasCtx.fillRect(0, 0, this._width(), this._height());

    if (!this.props.windowShade) {
      bgCanvasCtx.fillStyle = this.props.colors[1];

      for (let x = 0; x < this._width(); x += 4) {
        for (let y = PIXEL_DENSITY; y < this._height(); y += 4) {
          bgCanvasCtx.fillRect(x, y, PIXEL_DENSITY, PIXEL_DENSITY);
        }
      }
    }
  } // Pre-render the bar gradient


  preRenderBar() {
    /**
     * The order of the colours is commented in the file: the fist two colours
     * define the background and dots (check it to see what are the dots), the
     * next 16 colours are the analyzer's colours from top to bottom, the next
     * 5 colours are the oscilloscope's ones, from center to top/bottom, the
     * last colour is for the analyzer's peak markers.
     */
    // Off-screen canvas for pre-rendering a single bar gradient
    const barWidth = this._barWidth();

    this.barCanvas = document.createElement("canvas");
    this.barCanvas.width = barWidth;
    this.barCanvas.height = this._height();
    const offset = 2; // The first two colors are for the background;

    const gradientColors = this.props.colors.slice(offset, offset + GRADIENT_COLOR_COUNT);
    const barCanvasCtx = this.barCanvas.getContext("2d");

    const height = this._renderHeight();

    const multiplier = GRADIENT_COLOR_COUNT / height; // In shade mode, the five colors are, from top to bottom:
    // 214, 102, 0 -- 3
    // 222, 165, 24 -- 6
    // 148, 222, 33 -- 9
    // 57, 181, 16 -- 12
    // 24, 132, 8 -- 15
    // TODO: This could probably be improved by iterating backwards

    for (let i = 0; i < height; i++) {
      const colorIndex = GRADIENT_COLOR_COUNT - 1 - Math.floor(i * multiplier);
      barCanvasCtx.fillStyle = gradientColors[colorIndex];
      const y = this._height() - i * PIXEL_DENSITY;
      barCanvasCtx.fillRect(0, y, barWidth, PIXEL_DENSITY);
    }
  }

  paintFrame() {
    this.clear();

    if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].OSCILLOSCOPE) {
      this._paintOscilloscopeFrame();
    } else if (this.props.style === __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* VISUALIZERS */].BAR) {
      this._paintBarFrame();
    }
  }

  _paintOscilloscopeFrame() {
    this.props.analyser.getByteTimeDomainData(this.dataArray);
    this.canvasCtx.lineWidth = PIXEL_DENSITY; // Just use one of the viscolors for now

    this.canvasCtx.strokeStyle = this.props.colors[18]; // Since dataArray has more values than we have pixels to display, we
    // have to average several dataArray values per pixel. We call these
    // groups slices.
    //
    // We use the  2x scale here since we only want to plot values for
    // "real" pixels.

    const sliceWidth = Math.floor(this.bufferLength / this._width()) * PIXEL_DENSITY;

    const h = this._height();

    this.canvasCtx.beginPath(); // Iterate over the width of the canvas in "real" pixels.

    for (let j = 0; j <= this._renderWidth(); j++) {
      const amplitude = sliceAverage(this.dataArray, sliceWidth, j);
      const percentAmplitude = amplitude / 255; // dataArray gives us bytes

      const y = (1 - percentAmplitude) * h; // flip y

      const x = j * PIXEL_DENSITY; // Canvas coordinates are in the middle of the pixel by default.
      // When we want to draw pixel perfect lines, we will need to
      // account for that here

      if (x === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }
    }

    this.canvasCtx.stroke();
  }

  _printBar(x, height, peakHeight) {
    height = Math.ceil(height) * PIXEL_DENSITY;
    peakHeight = Math.ceil(peakHeight) * PIXEL_DENSITY;

    if (height > 0 || peakHeight > 0) {
      const y = this._height() - height;
      const ctx = this.canvasCtx; // Draw the gradient

      const b = this._barWidth();

      if (height > 0) {
        ctx.drawImage(this.barCanvas, 0, y, b, height, x, y, b, height);
      } // Draw the gray peak line


      if (!this.props.windowShade) {
        const peakY = this._height() - peakHeight;
        ctx.fillStyle = this.props.colors[PEAK_COLOR_INDEX];
        ctx.fillRect(x, peakY, b, PIXEL_DENSITY);
      }
    }
  }

  _paintBarFrame() {
    this.props.analyser.getByteFrequencyData(this.dataArray);
    const heightMultiplier = this._renderHeight() / 256;

    const barWidth = this._barWidth();

    const xOffset = barWidth + PIXEL_DENSITY; // Bar width, plus a pixel of spacing to the right.

    for (let j = 0; j < NUM_BARS - 1; j++) {
      const start = this.octaveBuckets[j];
      const end = this.octaveBuckets[j + 1];
      let amplitude = 0;

      for (let k = start; k < end; k++) {
        amplitude += this.dataArray[k];
      }

      amplitude /= end - start; // The drop rate should probably be normalized to the rendering FPS, for now assume 60 FPS

      let barPeak = this.barPeaks[j] - BAR_PEAK_DROP_RATE * Math.pow(this.barPeakFrames[j], 2);

      if (barPeak < amplitude) {
        barPeak = amplitude;
        this.barPeakFrames[j] = 0;
      } else {
        this.barPeakFrames[j] += 1;
      }

      this.barPeaks[j] = barPeak;

      this._printBar(j * xOffset, amplitude * heightMultiplier, barPeak * heightMultiplier);
    }
  }

  render() {
    const _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
      id: "visualizer",
      ref: node => this.canvas = node,
      style: {
        width,
        height
      },
      width: width * PIXEL_DENSITY,
      height: height * PIXEL_DENSITY,
      onClick: this.props.toggleVisualizerStyle
    });
  }

}

const mapStateToProps = state => ({
  colors: state.display.skinColors,
  style: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["t" /* getVisualizerStyle */])(state),
  width: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["z" /* getWindowShade */])(state, "main") ? 38 : 76,
  height: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["z" /* getWindowShade */])(state, "main") ? 5 : 16,
  status: state.media.status,
  windowShade: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["z" /* getWindowShade */])(state, "main"),
  dummyVizData: state.display.dummyVizData
});

const mapDispatchToProps = {
  toggleVisualizerStyle: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["V" /* toggleVisualizerStyle */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Visualizer));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);





const Balance = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
  id: props.id,
  className: props.className,
  type: "range",
  min: "-100",
  max: "100",
  step: "1",
  value: props.balance,
  style: props.style,
  onChange: props.handleChange,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Balance"
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["C" /* setBalance */])(e.target.value)),
  showMarquee: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["N" /* SET_FOCUS */],
    input: "balance"
  }),
  hideMarquee: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_13" /* UNSET_FOCUS */]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => ({
  balance: state.media.balance
}), mapDispatchToProps)(Balance));

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);





const Volume = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
  id: props.id,
  type: "range",
  min: "0",
  max: "100",
  step: "1",
  value: props.volume,
  style: props.style,
  className: props.className,
  onChange: props.setVolume,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Volume Bar"
});

const mapStateToProps = state => ({
  volume: state.media.volume
});

const mapDispatchToProps = dispatch => ({
  showMarquee: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["N" /* SET_FOCUS */],
    input: "volume"
  }),
  hideMarquee: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_13" /* UNSET_FOCUS */]
  }),
  setVolume: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["K" /* setVolume */])(e.target.value))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Volume));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResizeTarget__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);





const mapStateToProps = state => ({
  currentSize: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["A" /* getWindowSize */])(state, "playlist"),
  id: "playlist-resize-target"
});

const mapDispatchToProps = {
  setWindowSize: size => Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["L" /* setWindowSize */])("playlist", size)
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__ResizeTarget__["a" /* default */]));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(59);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(60);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(67);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(266);

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(267);

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(112);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {
      (0, _warning2['default'])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      (0, _warning2['default'])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        disabled = _props.disabled;

    if (autoFocus && !disabled) {
      this.focus();
    }
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (utils.isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }

    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();
    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = utils.getKeyboardValueMutator(e);

    if (valueMutator) {
      utils.pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
    var val = utils.ensureValueInRange(v, mergedProps);
    return utils.ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        minimumTrackStyle = _props2.minimumTrackStyle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value);
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      index: 0,
      tabIndex: tabIndex,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      }
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = _react2['default'].createElement(_Track2['default'], {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool,
  autoFocus: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].number
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(232);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(26) && !__webpack_require__(35)(function () {
  return Object.defineProperty(__webpack_require__(101)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(234)(false);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(104);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(53);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(237);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(249);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(61);
var $export = __webpack_require__(33);
var redefine = __webpack_require__(108);
var hide = __webpack_require__(23);
var has = __webpack_require__(17);
var Iterators = __webpack_require__(62);
var $iterCreate = __webpack_require__(241);
var setToStringTag = __webpack_require__(64);
var getPrototypeOf = __webpack_require__(244);
var ITERATOR = __webpack_require__(28)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(102);
var hiddenKeys = __webpack_require__(57).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(43);
var createDesc = __webpack_require__(40);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(52);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(100);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(26) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _reactDom = __webpack_require__(14);

var _KeyCode = __webpack_require__(275);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, diffs))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case _KeyCode2['default'].UP:
    case _KeyCode2['default'].RIGHT:
      return function (value, props) {
        return value + props.step;
      };

    case _KeyCode2['default'].DOWN:
    case _KeyCode2['default'].LEFT:
      return function (value, props) {
        return value - props.step;
      };

    case _KeyCode2['default'].END:
      return function (value, props) {
        return props.max;
      };
    case _KeyCode2['default'].HOME:
      return function (value, props) {
        return props.min;
      };
    case _KeyCode2['default'].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case _KeyCode2['default'].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotkeys__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__media__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__emitter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_base_skin_min_css__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_base_skin_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__css_base_skin_min_css__);














 // Return a promise that resolves when the store matches a predicate.

const storeHas = (store, predicate) => new Promise(resolve => {
  if (predicate(store.getState())) {
    resolve();
    return;
  }

  const unsubscribe = store.subscribe(() => {
    if (predicate(store.getState())) {
      resolve();
      unsubscribe();
    }
  });
});

class Winamp {
  static browserIsSupported() {
    const supportsAudioApi = !!(window.AudioContext || window.webkitAudioContext);
    const supportsCanvas = !!window.document.createElement("canvas").getContext;
    const supportsPromises = typeof Promise !== "undefined";
    return supportsAudioApi && supportsCanvas && supportsPromises;
  }

  constructor(options) {
    this._actionEmitter = new __WEBPACK_IMPORTED_MODULE_13__emitter__["a" /* default */]();
    this.options = options;
    const _this$options = this.options,
          initialTracks = _this$options.initialTracks,
          initialSkin = _this$options.initialSkin,
          avaliableSkins = _this$options.avaliableSkins,
          availableSkins = _this$options.availableSkins,
          _this$options$enableH = _this$options.enableHotkeys,
          enableHotkeys = _this$options$enableH === void 0 ? false : _this$options$enableH,
          zIndex = _this$options.zIndex,
          requireJSZip = _this$options.requireJSZip,
          requireJSMediaTags = _this$options.requireJSMediaTags,
          __extraWindows = _this$options.__extraWindows; // TODO: Validate required options

    this.media = new __WEBPACK_IMPORTED_MODULE_7__media__["a" /* default */]();
    this.store = Object(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */])(this.media, this._actionEmitter, this.options.__customMiddlewares, this.options.__initialState, {
      requireJSZip,
      requireJSMediaTags
    });
    this.store.dispatch({
      type: navigator.onLine ? __WEBPACK_IMPORTED_MODULE_12__actionTypes__["s" /* NETWORK_CONNECTED */] : __WEBPACK_IMPORTED_MODULE_12__actionTypes__["t" /* NETWORK_DISCONNECTED */]
    });

    if (true) {
      const fileInput = document.createElement("input");
      fileInput.id = "webamp-file-input";
      fileInput.style.display = "none";
      fileInput.type = "file";
      fileInput.value = null;
      fileInput.addEventListener("change", e => {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["i" /* loadFilesFromReferences */])(e.target.files));
      });
      document.body.appendChild(fileInput);
    }

    if (zIndex != null) {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["Z" /* SET_Z_INDEX */],
        zIndex
      });
    }

    this.genWindows = [];

    if (__extraWindows) {
      this.genWindows = __extraWindows.map(genWindow => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
        id: genWindow.id || `${genWindow.title}-${Object(__WEBPACK_IMPORTED_MODULE_11__utils__["w" /* uniqueId */])()}`
      }, genWindow));

      __extraWindows.forEach(genWindow => {
        if (genWindow.isVisualizer) {
          this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["y" /* REGISTER_VISUALIZER */],
            id: genWindow.id
          });
        }
      });
    }

    this.genWindows.forEach(genWindow => {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["a" /* ADD_GEN_WINDOW */],
        windowId: genWindow.id,
        title: genWindow.title,
        open: genWindow.open
      });
    });
    window.addEventListener("online", () => this.store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["s" /* NETWORK_CONNECTED */]
    }));
    window.addEventListener("offline", () => this.store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["t" /* NETWORK_DISCONNECTED */]
    }));

    if (initialSkin) {
      this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["J" /* setSkinFromUrl */])(initialSkin.url));
    } else {
      // We are using the default skin.
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["n" /* LOADED */]
      });
    }

    if (initialTracks) {
      this.appendTracks(initialTracks);
    }

    if (avaliableSkins != null) {
      console.warn("The misspelled option `avaliableSkins` is deprecated. Please use `availableSkins` instead.");
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["F" /* SET_AVAILABLE_SKINS */],
        skins: avaliableSkins
      });
    } else if (availableSkins != null) {
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["F" /* SET_AVAILABLE_SKINS */],
        skins: availableSkins
      });
    }

    const layout = options.__initialWindowLayout;

    if (layout != null) {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils__["n" /* objectForEach */])(layout, (w, windowId) => {
        if (w.size != null) {
          this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["L" /* setWindowSize */])(windowId, w.size));
        }
      });
      this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_12__actionTypes__["_16" /* UPDATE_WINDOW_POSITIONS */],
        positions: Object(__WEBPACK_IMPORTED_MODULE_11__utils__["o" /* objectMap */])(layout, w => w.position)
      });
    }

    if (enableHotkeys) {
      new __WEBPACK_IMPORTED_MODULE_6__hotkeys__["a" /* default */](this.store.dispatch);
    }
  } // Append this array of tracks to the end of the current playlist.


  appendTracks(tracks) {
    const nextIndex = Object(__WEBPACK_IMPORTED_MODULE_8__selectors__["o" /* getTrackCount */])(this.store.getState());
    this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["j" /* loadMediaFiles */])(tracks, __WEBPACK_IMPORTED_MODULE_10__constants__["e" /* LOAD_STYLE */].BUFFER, nextIndex));
  } // Replace any existing tracks with this array of tracks, and begin playing.


  setTracksToPlay(tracks) {
    this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actionCreators__["j" /* loadMediaFiles */])(tracks, __WEBPACK_IMPORTED_MODULE_10__constants__["e" /* LOAD_STYLE */].PLAY));
  }

  onClose(cb) {
    return this._actionEmitter.on(__WEBPACK_IMPORTED_MODULE_12__actionTypes__["f" /* CLOSE_WINAMP */], cb);
  }

  onTrackDidChange(cb) {
    return this._actionEmitter.on(__WEBPACK_IMPORTED_MODULE_12__actionTypes__["P" /* SET_MEDIA */], action => {
      const tracks = Object(__WEBPACK_IMPORTED_MODULE_8__selectors__["r" /* getTracks */])(this.store.getState());
      const track = tracks[action.id];

      if (track == null) {
        return;
      }

      cb({
        url: track.url
      });
    });
  }

  onMinimize(cb) {
    return this._actionEmitter.on(__WEBPACK_IMPORTED_MODULE_12__actionTypes__["r" /* MINIMIZE_WINAMP */], cb);
  }

  async skinIsLoaded() {
    // Wait for the skin to load.
    return storeHas(this.store, state => !state.display.loading);
  }

  async renderWhenReady(node) {
    await this.skinIsLoaded();
    const genWindowComponents = {};
    this.genWindows.forEach(w => {
      genWindowComponents[w.id] = w.Component;
    });
    Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */], {
      store: this.store
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_App__["a" /* default */], {
      media: this.media,
      container: node,
      filePickers: this.options.filePickers,
      genWindowComponents: genWindowComponents
    })), node);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Winamp);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(47),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(47),ba=__webpack_require__(129);function ca(a,b,c,d,e,f,g,k){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[c,d,e,f,g,k],l=0;a=Error(b.replace(/%s/g,function(){return h[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function w(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:w("227");function da(a,b,c,d,e,f,g,k,h){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,k,h){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,k,h){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else w("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:w("96",a);if(!pa[c]){b.extractEvents?void 0:w("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,k=d;qa.hasOwnProperty(k)?w("99",k):void 0;qa[k]=f;var h=f.phasedRegistrationNames;if(h){for(e in h)h.hasOwnProperty(e)&&ra(h[e],g,k);e=!0}else f.registrationName?(ra(f.registrationName,g,k),e=!0):e=!1;e?void 0:w("98",d,a)}}}}
function ra(a,b,c){sa[a]?w("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=wa(d);la(b,c,void 0,a);a.currentTarget=null}function ya(a,b){null==b?w("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)xa(a,b,c[e],d[e]);else c&&xa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){return Ba(a,!0)}function Da(a){return Ba(a,!1)}
var Ea={injectEventPluginOrder:function(a){ma?w("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?w("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Fa(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?w("231",b,typeof c):void 0;
return c}function Ga(a,b){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(b?za(a,Ca):za(a,Da),Aa?w("95"):void 0,ha))throw b=ia,ha=!1,ia=null,b;}var Ha=Math.random().toString(36).slice(2),Ia="__reactInternalInstance$"+Ha,Ja="__reactEventHandlers$"+Ha;function Ka(a){if(a[Ia])return a[Ia];for(;!a[Ia];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ia];return 7===a.tag||8===a.tag?a:null}function La(a){a=a[Ia];return!a||7!==a.tag&&8!==a.tag?null:a}
function Ma(a){if(7===a.tag||8===a.tag)return a.stateNode;w("33")}function Na(a){return a[Ja]||null}function Oa(a){do a=a.return;while(a&&7!==a.tag);return a?a:null}function Pa(a,b,c){if(b=Fa(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Qa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Oa(b);for(b=c.length;0<b--;)Pa(c[b],"captured",a);for(b=0;b<c.length;b++)Pa(c[b],"bubbled",a)}}function Ra(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Fa(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Ta(a){a&&a.dispatchConfig.registrationName&&Ra(a._targetInst,null,a)}
function Ua(a){za(a,Qa)}var Va=!("undefined"===typeof window||!window.document||!window.document.createElement);function Wa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ya={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Za={},$a={};
Va&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ab(a){if(Za[a])return Za[a];if(!Ya[a])return a;var b=Ya[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in $a)return Za[a]=b[c];return a}
var bb=ab("animationend"),cb=ab("animationiteration"),db=ab("animationstart"),eb=ab("transitionend"),fb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=null,hb=null,ib=null;
function jb(){if(ib)return ib;var a,b=hb,c=b.length,d,e="value"in gb?gb.value:gb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ib=e.slice(a,1<d?1-d:void 0)}function kb(){return!0}function lb(){return!1}
function C(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?kb:lb;this.isPropagationStopped=lb;return this}
n(C.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=kb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kb)},persist:function(){this.isPersistent=kb},isPersistent:lb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=lb;this._dispatchInstances=this._dispatchListeners=null}});C.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
C.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;mb(c);return c};mb(C);function nb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ob(a){a instanceof this?void 0:w("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function mb(a){a.eventPool=[];a.getPooled=nb;a.release=ob}var pb=C.extend({data:null}),qb=C.extend({data:null}),rb=[9,13,27,32],sb=Va&&"CompositionEvent"in window,tb=null;Va&&"documentMode"in document&&(tb=document.documentMode);
var ub=Va&&"TextEvent"in window&&!tb,vb=Va&&(!sb||tb&&8<tb&&11>=tb),wb=String.fromCharCode(32),xb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yb=!1;
function zb(a,b){switch(a){case "keyup":return-1!==rb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Ab(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Bb=!1;function Cb(a,b){switch(a){case "compositionend":return Ab(b);case "keypress":if(32!==b.which)return null;yb=!0;return wb;case "textInput":return a=b.data,a===wb&&yb?null:a;default:return null}}
function Db(a,b){if(Bb)return"compositionend"===a||!sb&&zb(a,b)?(a=jb(),ib=hb=gb=null,Bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return vb&&"ko"!==b.locale?null:b.data;default:return null}}
var Eb={eventTypes:xb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(sb)b:{switch(a){case "compositionstart":e=xb.compositionStart;break b;case "compositionend":e=xb.compositionEnd;break b;case "compositionupdate":e=xb.compositionUpdate;break b}e=void 0}else Bb?zb(a,c)&&(e=xb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=xb.compositionStart);e?(vb&&"ko"!==c.locale&&(Bb||e!==xb.compositionStart?e===xb.compositionEnd&&Bb&&(f=jb()):(gb=d,hb="value"in gb?gb.value:gb.textContent,Bb=
!0)),e=pb.getPooled(e,b,c,d),f?e.data=f:(f=Ab(c),null!==f&&(e.data=f)),Ua(e),f=e):f=null;(a=ub?Cb(a,c):Db(a,c))?(b=qb.getPooled(xb.beforeInput,b,c,d),b.data=a,Ua(b)):b=null;return null===f?b:null===b?f:[f,b]}},Fb=null,Gb=null,Hb=null;function Ib(a){if(a=va(a)){"function"!==typeof Fb?w("280"):void 0;var b=ua(a.stateNode);Fb(a.stateNode,a.type,b)}}function Jb(a){Gb?Hb?Hb.push(a):Hb=[a]:Gb=a}function Kb(){if(Gb){var a=Gb,b=Hb;Hb=Gb=null;Ib(a);if(b)for(a=0;a<b.length;a++)Ib(b[a])}}
function Lb(a,b){return a(b)}function Mb(a,b,c){return a(b,c)}function Nb(){}var Ob=!1;function Pb(a,b){if(Ob)return a(b);Ob=!0;try{return Lb(a,b)}finally{if(Ob=!1,null!==Gb||null!==Hb)Nb(),Kb()}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qb[a.type]:"textarea"===b?!0:!1}
function Sb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Tb(a){if(!Va)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Ub(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Vb(a){var b=Ub(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wb(a){a._valueTracker||(a._valueTracker=Vb(a))}function Xb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ub(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zb=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,$b=E?Symbol.for("react.element"):60103,ac=E?Symbol.for("react.portal"):60106,bc=E?Symbol.for("react.fragment"):60107,cc=E?Symbol.for("react.strict_mode"):60108,dc=E?Symbol.for("react.profiler"):60114,ec=E?Symbol.for("react.provider"):60109,fc=E?Symbol.for("react.context"):60110,gc=E?Symbol.for("react.async_mode"):60111,hc=E?Symbol.for("react.forward_ref"):60112,ic=E?Symbol.for("react.placeholder"):
60113,jc="function"===typeof Symbol&&Symbol.iterator;function kc(a){if(null===a||"object"!==typeof a)return null;a=jc&&a[jc]||a["@@iterator"];return"function"===typeof a?a:null}
function lc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case gc:return"AsyncMode";case bc:return"Fragment";case ac:return"Portal";case dc:return"Profiler";case cc:return"StrictMode";case ic:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case fc:return"Context.Consumer";case ec:return"Context.Provider";case hc:return a=a.render,a=a.displayName||a.name||"",""!==a?"ForwardRef("+a+")":"ForwardRef"}if("function"===
typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return lc(a)}return null}function mc(a){var b="";do{a:switch(a.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var c=a._debugOwner,d=a._debugSource,e=lc(a.type);var f=null;c&&(f=lc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Zb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(nc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);G[b]=new F(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});G.tabIndex=new F("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=C.getPooled(Gc.change,a,b,c);a.type="change";Jb(c);Ua(a);return a}var Ic=null,Jc=null;function Kc(a){Ga(a,!1)}
function Lc(a){var b=Ma(a);if(Xb(b))return a}function Mc(a,b){if("change"===a)return b}var Nc=!1;Va&&(Nc=Tb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Ic&&(Ic.detachEvent("onpropertychange",Pc),Jc=Ic=null)}function Pc(a){"value"===a.propertyName&&Lc(Jc)&&(a=Hc(Jc,a,Sb(a)),Pb(Kc,a))}function Qc(a,b,c){"focus"===a?(Oc(),Ic=b,Jc=c,Ic.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc()}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Lc(Jc)}
function Sc(a,b){if("click"===a)return Lc(b)}function Tc(a,b){if("input"===a||"change"===a)return Lc(b)}
var Uc={eventTypes:Gc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?Ma(b):window,f=void 0,g=void 0,k=e.nodeName&&e.nodeName.toLowerCase();"select"===k||"input"===k&&"file"===e.type?f=Mc:Rb(e)?Nc?f=Tc:(f=Rc,g=Qc):(k=e.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Vc=C.extend({view:null,detail:null}),Wc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
var Zc=0,$c=0,ad=!1,bd=!1,cd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Zc;Zc=a.screenX;return ad?"mousemove"===a.type?a.screenX-b:0:(ad=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=$c;$c=a.screenY;return bd?"mousemove"===a.type?a.screenY-b:0:(bd=!0,0)}}),dd=cd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ed={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},fd={eventTypes:ed,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ka(b):null):f=null;if(f===b)return null;var g=void 0,k=void 0,h=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=cd,k=ed.mouseLeave,h=ed.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=dd,k=ed.pointerLeave,h=ed.pointerEnter,l="pointer";var m=null==f?e:Ma(f);e=null==b?e:Ma(b);a=g.getPooled(k,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(h,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Oa(g))l++;g=0;for(h=e;h;h=Oa(h))g++;for(;0<l-g;)b=Oa(b),l--;for(;0<g-l;)e=Oa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Oa(b);e=Oa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Oa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Oa(d)}for(d=0;d<b.length;d++)Ra(b[d],"bubbled",a);for(d=f.length;0<d--;)Ra(f[d],"captured",c);return[a,c]}},gd=Object.prototype.hasOwnProperty;function hd(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function id(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gd.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 5===b.tag?2:3}function kd(a){2!==jd(a)?w("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?w("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}w("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var k=e.child;k;){if(k===c){g=!0;c=e;d=f;break}if(k===d){g=!0;d=e;c=f;break}k=k.sibling}if(!g){for(k=f.child;k;){if(k===c){g=!0;c=f;d=e;break}if(k===d){g=!0;d=f;c=e;break}k=k.sibling}g?
void 0:w("189")}}c.alternate!==d?w("190"):void 0}5!==c.tag?w("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(7===b.tag||8===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var nd=C.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=C.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=Vc.extend({relatedTarget:null});function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=Vc.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return"keypress"===
a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=cd.extend({dataTransfer:null}),vd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),wd=C.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=cd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[bb,"animationEnd"],[cb,"animationIteration"],[db,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[eb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0)});yd.forEach(function(a){Bd(a,!1)});
var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=cd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case bb:case cb:case db:a=nd;break;case eb:a=wd;break;case "scroll":a=Vc;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=dd;break;default:a=C}b=a.getPooled(e,b,c,d);Ua(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
Ed=[];function Fd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=5!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ka(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Sb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,k=0;k<pa.length;k++){var h=pa[k];h&&(h=h.extractEvents(d,b,f,e))&&(g=ya(g,h))}Ga(g,!1)}}var Gd=!0;
function H(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!1)}function Jd(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!0)}function Hd(a,b){Mb(Id,a,b)}
function Id(a,b){if(Gd){var c=Sb(b);c=Ka(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Pb(Fd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a)}}}var Kd={},Ld=0,Md="_reactListenersID"+(""+Math.random()).slice(2);
function Nd(a){Object.prototype.hasOwnProperty.call(a,Md)||(a[Md]=Ld++,Kd[a[Md]]={});return Kd[a[Md]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Va&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&id(Zd,c)?null:(Zd=c,a=C.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ua(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Nd(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var k=f[g];if(!e.hasOwnProperty(k)||!e[k]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ma(b):window;switch(a){case "focus":if(Rb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ea.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=Na;va=La;wa=Ma;Ea.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:fd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Eb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?w("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?w("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:w("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=""+yc(b.defaultValue))}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});
function re(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||pe.hasOwnProperty(e)&&pe[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var se=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function te(a,b){b&&(se[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?w("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?w("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:w("61")),null!=b.style&&"object"!==typeof b.style?w("62",""):void 0)}
function ue(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function ve(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Nd(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Jd("scroll",a);break;case "focus":case "blur":Jd("focus",a);Jd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Tb(e)&&Jd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===fb.indexOf(e)&&H(e,a)}c[e]=!0}}}function we(){}var xe=null,ye=null;
function ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ae(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Be(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function Ce(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var De=[],Ee=-1;function I(a){0>Ee||(a.current=De[Ee],De[Ee]=null,Ee--)}function J(a,b){Ee++;De[Ee]=a.current;a.current=b}var Fe={},K={current:Fe},L={current:!1},Ge=Fe;
function He(a,b){var c=a.type.contextTypes;if(!c)return Fe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ie(a){I(L,a);I(K,a)}function Je(a){I(L,a);I(K,a)}
function Ke(a,b,c){K.current!==Fe?w("168"):void 0;J(K,b,a);J(L,c,a)}function Le(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:w("108",lc(b)||"Unknown",e);return n({},c,d)}function Me(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Fe;Ge=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Ne(a,b,c){var d=a.stateNode;d?void 0:w("169");c?(b=Le(a,b,Ge),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Oe=null,Pe=null;function Qe(a){return function(b){try{return a(b)}catch(c){}}}
function Re(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Oe=Qe(function(a){return b.onCommitFiberRoot(c,a)});Pe=Qe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Se(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}
function Te(a){a=a.prototype;return"object"===typeof a&&null!==a&&"object"===typeof a.isReactComponent&&null!==a.isReactComponent}
function Ue(a,b,c){var d=a.alternate;null===d?(d=new Se(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.childExpirationTime=a.childExpirationTime;d.expirationTime=b!==a.pendingProps?c:a.expirationTime;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.firstContextDependency=a.firstContextDependency;d.sibling=a.sibling;
d.index=a.index;d.ref=a.ref;return d}
function Ve(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=Te(d)?2:4;else if("string"===typeof d)f=7;else a:switch(d){case bc:return We(a.children,b,c,e);case gc:f=10;b|=3;break;case cc:f=10;b|=2;break;case dc:return d=new Se(15,a,e,b|4),d.type=dc,d.expirationTime=c,d;case ic:f=16;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case ec:f=12;break a;case fc:f=11;break a;case hc:f=13;break a;default:if("function"===typeof d.then){f=4;break a}}w("130",
null==d?d:typeof d,"")}b=new Se(f,a,e,b);b.type=d;b.expirationTime=c;return b}function We(a,b,c,d){a=new Se(9,a,d,b);a.expirationTime=c;return a}function Xe(a,b,c){a=new Se(8,a,null,b);a.expirationTime=c;return a}function Ye(a,b,c){b=new Se(6,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ze(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);$e(b,a)}function $e(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var af=!1;
function bf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function df(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function ef(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function ff(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bf(a.memoizedState),e=c.updateQueue=bf(c.memoizedState)):d=a.updateQueue=cf(e):null===e&&(e=c.updateQueue=cf(d));null===e||d===e?ef(d,b):null===d.lastUpdate||null===e.lastUpdate?(ef(d,b),ef(e,b)):(ef(d,b),e.lastUpdate=b)}
function gf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bf(a.memoizedState):hf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function hf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=cf(b));return b}
function jf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:af=!0}return d}
function kf(a,b,c,d,e){af=!1;b=hf(a,b);for(var f=b.baseState,g=null,k=0,h=b.firstUpdate,l=f;null!==h;){var m=h.expirationTime;if(m>e){if(null===g&&(g=h,f=l),0===k||k>m)k=m}else l=jf(a,b,h,l,c,d),null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=h:(b.lastEffect.nextEffect=h,b.lastEffect=h));h=h.next}m=null;for(h=b.firstCapturedUpdate;null!==h;){var t=h.expirationTime;if(t>e){if(null===m&&(m=h,null===g&&(f=l)),0===k||k>t)k=t}else l=jf(a,b,h,l,c,d),
null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=h:(b.lastCapturedEffect.nextEffect=h,b.lastCapturedEffect=h));h=h.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=k;a.memoizedState=l}
function lf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);mf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;mf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function mf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?w("191",c):void 0;c.call(d)}a=a.nextEffect}}
function nf(a,b){return{value:a,source:b,stack:mc(b)}}var of={current:null},pf=null,qf=null,rf=null;function sf(a,b){var c=a.type._context;J(of,c._currentValue,a);c._currentValue=b}function tf(a){var b=of.current;I(of,a);a.type._context._currentValue=b}function uf(a){pf=a;rf=qf=null;a.firstContextDependency=null}
function vf(a,b){if(rf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)rf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===qf?(null===pf?w("277"):void 0,pf.firstContextDependency=qf=b):qf=qf.next=b}return a._currentValue}var wf={},N={current:wf},xf={current:wf},yf={current:wf};function zf(a){a===wf?w("174"):void 0;return a}
function Af(a,b){J(yf,b,a);J(xf,a,a);J(N,wf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}I(N,a);J(N,b,a)}function Bf(a){I(N,a);I(xf,a);I(yf,a)}function Cf(a){zf(yf.current);var b=zf(N.current);var c=le(b,a.type);b!==c&&(J(xf,a,a),J(N,c,a))}function Df(a){xf.current===a&&(I(N,a),I(xf,a))}var Ef=(new aa.Component).refs;
function Ff(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Jf={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gf();c=Hf(c,a);var d=df(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);ff(a,d);If(a,c)}};function Kf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!id(c,d)||!id(e,f):!0}function Lf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jf.enqueueReplaceState(b,b.state,null)}
function Mf(a,b,c,d){var e=a.stateNode,f=M(b)?Ge:K.current;e.props=c;e.state=a.memoizedState;e.refs=Ef;e.context=He(a,f);f=a.updateQueue;null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Ff(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&
e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Nf=Array.isArray;
function Of(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag&&3!==c.tag?w("110"):void 0,d=c.stateNode);d?void 0:w("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ef&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?w("284"):void 0;c._owner?void 0:w("254",a)}return a}
function Pf(a,b){"textarea"!==a.type&&w("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Qf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ue(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function k(a,b,c,d){if(null===b||8!==b.tag)return b=Xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function h(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Of(a,b,c),d.return=a,d;d=Ve(c,a.mode,d);d.ref=Of(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||6!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||9!==b.tag)return b=We(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function t(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $b:return c=Ve(b,a.mode,c),c.ref=Of(a,null,b),c.return=a,c;case ac:return b=Ye(b,a.mode,c),b.return=a,b}if(Nf(b)||kc(b))return b=We(b,a.mode,c,null),b.return=
a,b;Pf(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case $b:return c.key===e?c.type===bc?m(a,b,c.props.children,d,e):h(a,b,c,d):null;case ac:return c.key===e?l(a,b,c,d):null}if(Nf(c)||kc(c))return null!==e?null:m(a,b,c,d,null);Pf(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,k(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case $b:return a=a.get(null===d.key?c:d.key)||null,d.type===bc?m(b,a,d.props.children,e,d.key):h(b,a,d,e);case ac:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Nf(d)||kc(d))return a=a.get(c)||null,m(b,a,d,e,null);Pf(b,d)}return null}function y(e,g,h,k){for(var l=null,r=null,p=g,m=g=0,q=null;null!==p&&m<h.length;m++){p.index>m?(q=p,p=null):q=p.sibling;var v=x(e,p,h[m],k);if(null===v){null===p&&(p=q);break}a&&p&&null===v.alternate&&b(e,
p);g=f(v,g,m);null===r?l=v:r.sibling=v;r=v;p=q}if(m===h.length)return c(e,p),l;if(null===p){for(;m<h.length;m++)if(p=t(e,h[m],k))g=f(p,g,m),null===r?l=p:r.sibling=p,r=p;return l}for(p=d(e,p);m<h.length;m++)if(q=z(p,e,m,h[m],k))a&&null!==q.alternate&&p.delete(null===q.key?m:q.key),g=f(q,g,m),null===r?l=q:r.sibling=q,r=q;a&&p.forEach(function(a){return b(e,a)});return l}function u(e,g,h,k){var l=kc(h);"function"!==typeof l?w("150"):void 0;h=l.call(h);null==h?w("151"):void 0;for(var m=l=null,p=g,r=g=
0,q=null,v=h.next();null!==p&&!v.done;r++,v=h.next()){p.index>r?(q=p,p=null):q=p.sibling;var u=x(e,p,v.value,k);if(null===u){p||(p=q);break}a&&p&&null===u.alternate&&b(e,p);g=f(u,g,r);null===m?l=u:m.sibling=u;m=u;p=q}if(v.done)return c(e,p),l;if(null===p){for(;!v.done;r++,v=h.next())v=t(e,v.value,k),null!==v&&(g=f(v,g,r),null===m?l=v:m.sibling=v,m=v);return l}for(p=d(e,p);!v.done;r++,v=h.next())v=z(p,e,r,v.value,k),null!==v&&(a&&null!==v.alternate&&p.delete(null===v.key?r:v.key),g=f(v,g,r),null===
m?l=v:m.sibling=v,m=v);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===bc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $b:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(9===k.tag?f.type===bc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===bc?f.props.children:f.props,h);d.ref=Of(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===bc?(d=We(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Ve(f,a.mode,h),h.ref=Of(a,d,f),h.return=a,a=h)}return g(a);case ac:a:{for(k=f.key;null!==d;){if(d.key===k)if(6===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&8===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Xe(f,a.mode,h),d.return=a,a=d),g(a);if(Nf(f))return y(a,d,f,h);if(kc(f))return u(a,d,f,h);l&&Pf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 3:case 0:h=a.type,w("152",h.displayName||h.name||"Component")}return c(a,d)}}var Rf=Qf(!0),Sf=Qf(!1),Tf=null,Uf=null,Vf=!1;function Wf(a,b){var c=new Se(7,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Xf(a,b){switch(a.tag){case 7:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 8:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Yf(a){if(Vf){var b=Uf;if(b){var c=b;if(!Xf(a,b)){b=Be(c);if(!b||!Xf(a,b)){a.effectTag|=2;Vf=!1;Tf=a;return}Wf(Tf,c)}Tf=a;Uf=Ce(b)}else a.effectTag|=2,Vf=!1,Tf=a}}
function Zf(a){for(a=a.return;null!==a&&7!==a.tag&&5!==a.tag;)a=a.return;Tf=a}function $f(a){if(a!==Tf)return!1;if(!Vf)return Zf(a),Vf=!0,!1;var b=a.type;if(7!==a.tag||"head"!==b&&"body"!==b&&!Ae(b,a.memoizedProps))for(b=Uf;b;)Wf(a,b),b=Be(b);Zf(a);Uf=Tf?Be(a.stateNode):null;return!0}function ag(){Uf=Tf=null;Vf=!1}
function bg(a){switch(a._reactStatus){case 1:return a._reactResult;case 2:throw a._reactResult;case 0:throw a;default:throw a._reactStatus=0,a.then(function(b){if(0===a._reactStatus){a._reactStatus=1;if("object"===typeof b&&null!==b){var c=b.default;b=void 0!==c&&null!==c?c:b}a._reactResult=b}},function(b){0===a._reactStatus&&(a._reactStatus=2,a._reactResult=b)}),a;}}var cg=Yb.ReactCurrentOwner;function O(a,b,c,d){b.child=null===a?Sf(b,null,c,d):Rf(b,a.child,c,d)}
function dg(a,b,c,d,e){c=c.render;var f=b.ref;if(!L.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return eg(a,b,e);c=c(d,f);O(a,b,c,e);b.memoizedProps=d;return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function gg(a,b,c,d,e){var f=M(c)?Ge:K.current;f=He(b,f);uf(b,e);c=c(d,f);b.effectTag|=1;O(a,b,c,e);b.memoizedProps=d;return b.child}
function hg(a,b,c,d,e){if(M(c)){var f=!0;Me(b)}else f=!1;uf(b,e);if(null===a)if(null===b.stateNode){var g=M(c)?Ge:K.current,k=c.contextTypes,h=null!==k&&void 0!==k;k=h?He(b,g):Fe;var l=new c(d,k);b.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;l.updater=Jf;b.stateNode=l;l._reactInternalFiber=b;h&&(h=b.stateNode,h.__reactInternalMemoizedUnmaskedChildContext=g,h.__reactInternalMemoizedMaskedChildContext=k);Mf(b,c,d,e);d=!0}else{g=b.stateNode;k=b.memoizedProps;g.props=k;var m=g.context;
h=M(c)?Ge:K.current;h=He(b,h);var t=c.getDerivedStateFromProps;(l="function"===typeof t||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(k!==d||m!==h)&&Lf(b,g,d,h);af=!1;var x=b.memoizedState;m=g.state=x;var z=b.updateQueue;null!==z&&(kf(b,z,d,g,e),m=b.memoizedState);k!==d||x!==m||L.current||af?("function"===typeof t&&(Ff(b,c,t,d),m=b.memoizedState),(k=af||Kf(b,c,k,d,x,m,h))?(l||"function"!==
typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=h,d=k):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,k=
b.memoizedProps,g.props=k,m=g.context,h=M(c)?Ge:K.current,h=He(b,h),t=c.getDerivedStateFromProps,(l="function"===typeof t||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(k!==d||m!==h)&&Lf(b,g,d,h),af=!1,m=b.memoizedState,x=g.state=m,z=b.updateQueue,null!==z&&(kf(b,z,d,g,e),x=b.memoizedState),k!==d||m!==x||L.current||af?("function"===typeof t&&(Ff(b,c,t,d),x=b.memoizedState),(t=af||Kf(b,c,k,d,
m,x,h))?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,h),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,h)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=h,d=t):("function"!==typeof g.componentDidUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return ig(a,b,c,d,f,e)}
function ig(a,b,c,d,e,f){fg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Ne(b,c,!1),eg(a,b,f);d=b.stateNode;cg.current=b;var k=g?null:d.render();b.effectTag|=1;null!==a&&g&&(O(a,b,null,f),b.child=null);O(a,b,k,f);b.memoizedState=d.state;b.memoizedProps=d.props;e&&Ne(b,c,!0);return b.child}function jg(a){var b=a.stateNode;b.pendingContext?Ke(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ke(a,b.context,!1);Af(a,b.containerInfo)}
function ng(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function og(a,b,c,d){null!==a?w("155"):void 0;var e=b.pendingProps;if("object"===typeof c&&null!==c&&"function"===typeof c.then){c=bg(c);var f=c;f="function"===typeof f?Te(f)?3:1:void 0!==f&&null!==f&&f.$$typeof?14:4;f=b.tag=f;var g=ng(c,e);switch(f){case 1:return gg(a,b,c,g,d);case 3:return hg(a,b,c,g,d);case 14:return dg(a,b,c,g,d);default:w("283",c)}}f=He(b,K.current);uf(b,d);f=c(e,f);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=2;M(c)?
(g=!0,Me(b)):g=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var k=c.getDerivedStateFromProps;"function"===typeof k&&Ff(b,c,k,e);f.updater=Jf;b.stateNode=f;f._reactInternalFiber=b;Mf(b,c,e,d);return ig(a,b,c,!0,g,d)}b.tag=0;O(a,b,f,d);b.memoizedProps=e;return b.child}
function eg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?w("153"):void 0;if(null!==b.child){a=b.child;c=Ue(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ue(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function pg(a,b,c){var d=b.expirationTime;if(!L.current&&(0===d||d>c)){switch(b.tag){case 5:jg(b);ag();break;case 7:Cf(b);break;case 2:M(b.type)&&Me(b);break;case 3:M(b.type._reactResult)&&Me(b);break;case 6:Af(b,b.stateNode.containerInfo);break;case 12:sf(b,b.memoizedProps.value)}return eg(a,b,c)}b.expirationTime=0;switch(b.tag){case 4:return og(a,b,b.type,c);case 0:return gg(a,b,b.type,b.pendingProps,c);case 1:var e=b.type._reactResult;d=b.pendingProps;a=gg(a,b,e,ng(e,d),c);b.memoizedProps=d;return a;
case 2:return hg(a,b,b.type,b.pendingProps,c);case 3:return e=b.type._reactResult,d=b.pendingProps,a=hg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 5:jg(b);d=b.updateQueue;null===d?w("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;kf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ag(),b=eg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Uf=Ce(b.stateNode.containerInfo),Tf=b,e=Vf=!0;e?(b.effectTag|=2,b.child=Sf(b,null,d,c)):(O(a,b,d,c),ag());b=b.child}return b;
case 7:Cf(b);null===a&&Yf(b);d=b.type;e=b.pendingProps;var f=null!==a?a.memoizedProps:null,g=e.children;Ae(d,e)?g=null:null!==f&&Ae(d,f)&&(b.effectTag|=16);fg(a,b);1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b.memoizedProps=e,b=null):(O(a,b,g,c),b.memoizedProps=e,b=b.child);return b;case 8:return null===a&&Yf(b),b.memoizedProps=b.pendingProps,null;case 16:return null;case 6:return Af(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Rf(b,null,d,c):O(a,b,d,c),b.memoizedProps=
d,b.child;case 13:return dg(a,b,b.type,b.pendingProps,c);case 14:return e=b.type._reactResult,d=b.pendingProps,a=dg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 9:return d=b.pendingProps,O(a,b,d,c),b.memoizedProps=d,b.child;case 10:return d=b.pendingProps.children,O(a,b,d,c),b.memoizedProps=d,b.child;case 15:return d=b.pendingProps,O(a,b,d.children,c),b.memoizedProps=d,b.child;case 12:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;b.memoizedProps=e;sf(b,f);if(null!==g){var k=g.value;
f=k===f&&(0!==k||1/k===1/f)||k!==k&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=eg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){k=g.firstContextDependency;if(null!==k){do{if(k.context===d&&0!==(k.observedBits&f)){if(2===g.tag||3===g.tag){var h=df(c);h.tag=2;ff(g,h)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;h=g.alternate;null!==h&&(0===h.expirationTime||
h.expirationTime>c)&&(h.expirationTime=c);for(var l=g.return;null!==l;){h=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==h&&(0===h.childExpirationTime||h.childExpirationTime>c)&&(h.childExpirationTime=c);else if(null!==h&&(0===h.childExpirationTime||h.childExpirationTime>c))h.childExpirationTime=c;else break;l=l.return}}h=g.child;k=k.next}while(null!==k)}else h=12===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==
h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}O(a,b,e.children,c);b=b.child}return b;case 11:return f=b.type,d=b.pendingProps,e=d.children,uf(b,c),f=vf(f,d.unstable_observedBits),e=e(f),b.effectTag|=1,O(a,b,e,c),b.memoizedProps=d,b.child;default:w("156")}}function qg(a){a.effectTag|=4}var rg=void 0,sg=void 0,tg=void 0;rg=function(){};sg=function(a,b,c){(b.updateQueue=c)&&qg(b)};tg=function(a,b,c,d){c!==d&&qg(b)};
function ug(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=mc(c));null!==c&&lc(c.type);b=b.value;null!==a&&2===a.tag&&lc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function vg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){wg(a,c)}else b.current=null}
function xg(a){"function"===typeof Pe&&Pe(a);switch(a.tag){case 2:case 3:vg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){wg(a,c)}break;case 7:vg(a);break;case 6:yg(a)}}function zg(a){return 7===a.tag||5===a.tag||6===a.tag}
function Ag(a){a:{for(var b=a.return;null!==b;){if(zg(b)){var c=b;break a}b=b.return}w("160");c=void 0}var d=b=void 0;switch(c.tag){case 7:b=c.stateNode;d=!1;break;case 5:b=c.stateNode.containerInfo;d=!0;break;case 6:b=c.stateNode.containerInfo;d=!0;break;default:w("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;7!==c.tag&&8!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||6===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(7===e.tag||8===e.tag)if(c)if(d){var f=b,g=e.stateNode,k=c;8===f.nodeType?f.parentNode.insertBefore(g,k):f.insertBefore(g,k)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?(k=f.parentNode,k.insertBefore(g,f)):(k=f,k.appendChild(g)),null===k.onclick&&(k.onclick=we)):b.appendChild(e.stateNode);else if(6!==e.tag&&null!==e.child){e.child.return=
e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?w("160"):void 0;switch(c.tag){case 7:d=c.stateNode;e=!1;break a;case 5:d=c.stateNode.containerInfo;e=!0;break a;case 6:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(7===b.tag||8===b.tag){a:for(var f=b,g=f;;)if(xg(g),null!==g.child&&6!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(6===b.tag?(d=b.stateNode.containerInfo,e=!0):xg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;6===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bg(a,b){switch(b.tag){case 2:case 3:break;case 7:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ja]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);ue(a,e);b=ue(a,d);for(e=0;e<f.length;e+=2){var g=f[e],k=f[e+1];"style"===g?re(c,k):"dangerouslySetInnerHTML"===g?ne(c,k):"children"===g?oe(c,k):xc(c,g,k,b)}switch(a){case "input":Dc(c,d);break;case "textarea":he(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 8:null===b.stateNode?w("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 5:break;case 15:break;case 16:break;default:w("163")}}function Cg(a,b,c){c=df(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Dg(d);ug(a,b)};return c}
function Eg(a,b,c){c=df(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===Fg?Fg=new Set([this]):Fg.add(this);var c=b.value,d=b.stack;ug(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function Gg(a){switch(a.tag){case 2:M(a.type)&&Ie(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return M(a.type._reactResult)&&Ie(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return Bf(a),Je(a),b=a.effectTag,0!==(b&64)?w("285"):void 0,a.effectTag=b&-1025|64,a;case 7:return Df(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 6:return Bf(a),null;case 12:return tf(a),null;default:return null}}
var Hg={readContext:vf},Ig=Yb.ReactCurrentOwner,Jg=0,Kg=0,Lg=!1,P=null,Mg=null,Q=0,Ng=!1,R=null,Og=!1,Fg=null;function Pg(){if(null!==P)for(var a=P.return;null!==a;){var b=a;switch(b.tag){case 2:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 3:c=b.type._reactResult.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 5:Bf(b);Je(b);break;case 7:Df(b);break;case 6:Bf(b);break;case 12:tf(b)}a=a.return}Mg=null;Q=0;Ng=!1;P=null}
function Qg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 0:case 1:break;case 2:M(b.type)&&Ie(b);break;case 3:M(b.type._reactResult)&&Ie(b);break;case 5:Bf(b);Je(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)$f(b),b.effectTag&=-3;rg(b);break;case 7:Df(b);var g=zf(yf.current),k=b.type;if(null!==e&&null!=b.stateNode){var h=e.memoizedProps;if(h!==f){var l=
b.stateNode,m=zf(N.current),t=l,x=k;var z=h;var y=f;l=g;var u=null;switch(x){case "input":z=zc(t,z);y=zc(t,y);u=[];break;case "option":z=de(t,z);y=de(t,y);u=[];break;case "select":z=n({},z,{value:void 0});y=n({},y,{value:void 0});u=[];break;case "textarea":z=fe(t,z);y=fe(t,y);u=[];break;default:"function"!==typeof z.onClick&&"function"===typeof y.onClick&&(t.onclick=we)}te(x,y);x=t=void 0;var v=null;for(t in z)if(!y.hasOwnProperty(t)&&z.hasOwnProperty(t)&&null!=z[t])if("style"===t){var r=z[t];for(x in r)r.hasOwnProperty(x)&&
(v||(v={}),v[x]="")}else"dangerouslySetInnerHTML"!==t&&"children"!==t&&"suppressContentEditableWarning"!==t&&"suppressHydrationWarning"!==t&&"autoFocus"!==t&&(sa.hasOwnProperty(t)?u||(u=[]):(u=u||[]).push(t,null));for(t in y){var p=y[t];r=null!=z?z[t]:void 0;if(y.hasOwnProperty(t)&&p!==r&&(null!=p||null!=r))if("style"===t)if(r){for(x in r)!r.hasOwnProperty(x)||p&&p.hasOwnProperty(x)||(v||(v={}),v[x]="");for(x in p)p.hasOwnProperty(x)&&r[x]!==p[x]&&(v||(v={}),v[x]=p[x])}else v||(u||(u=[]),u.push(t,
v)),v=p;else"dangerouslySetInnerHTML"===t?(p=p?p.__html:void 0,r=r?r.__html:void 0,null!=p&&r!==p&&(u=u||[]).push(t,""+p)):"children"===t?r===p||"string"!==typeof p&&"number"!==typeof p||(u=u||[]).push(t,""+p):"suppressContentEditableWarning"!==t&&"suppressHydrationWarning"!==t&&(sa.hasOwnProperty(t)?(null!=p&&ve(l,t),u||r===p||(u=[])):(u=u||[]).push(t,p))}v&&(u=u||[]).push("style",v);sg(e,b,u,k,h,f,g,m)}e.ref!==b.ref&&(b.effectTag|=128)}else if(f){u=zf(N.current);if($f(b)){f=b;l=f.stateNode;e=f.type;
h=f.memoizedProps;m=g;l[Ia]=f;l[Ja]=h;k=void 0;g=l;switch(e){case "iframe":case "object":H("load",g);break;case "video":case "audio":for(l=0;l<fb.length;l++)H(fb[l],g);break;case "source":H("error",g);break;case "img":case "image":case "link":H("error",g);H("load",g);break;case "form":H("reset",g);H("submit",g);break;case "details":H("toggle",g);break;case "input":Bc(g,h);H("invalid",g);ve(m,"onChange");break;case "select":g._wrapperState={wasMultiple:!!h.multiple};H("invalid",g);ve(m,"onChange");
break;case "textarea":ge(g,h),H("invalid",g),ve(m,"onChange")}te(e,h);l=null;for(k in h)h.hasOwnProperty(k)&&(u=h[k],"children"===k?"string"===typeof u?g.textContent!==u&&(l=["children",u]):"number"===typeof u&&g.textContent!==""+u&&(l=["children",""+u]):sa.hasOwnProperty(k)&&null!=u&&ve(m,k));switch(e){case "input":Wb(g);Fc(g,h,!0);break;case "textarea":Wb(g);ie(g,h);break;case "select":case "option":break;default:"function"===typeof h.onClick&&(g.onclick=we)}k=l;f.updateQueue=k;f=null!==k?!0:!1;
f&&qg(b)}else{h=b;e=k;m=f;l=9===g.nodeType?g:g.ownerDocument;u===je.html&&(u=ke(e));u===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof m.is?l=l.createElement(e,{is:m.is}):(l=l.createElement(e),"select"===e&&m.multiple&&(l.multiple=!0)):l=l.createElementNS(u,e);e=l;e[Ia]=h;e[Ja]=f;a:for(h=e,m=b,l=m.child;null!==l;){if(7===l.tag||8===l.tag)h.appendChild(l.stateNode);else if(6!==l.tag&&null!==l.child){l.child.return=
l;l=l.child;continue}if(l===m)break;for(;null===l.sibling;){if(null===l.return||l.return===m)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}m=e;l=k;h=f;t=g;v=ue(l,h);switch(l){case "iframe":case "object":H("load",m);g=h;break;case "video":case "audio":for(g=0;g<fb.length;g++)H(fb[g],m);g=h;break;case "source":H("error",m);g=h;break;case "img":case "image":case "link":H("error",m);H("load",m);g=h;break;case "form":H("reset",m);H("submit",m);g=h;break;case "details":H("toggle",m);g=h;break;
case "input":Bc(m,h);g=zc(m,h);H("invalid",m);ve(t,"onChange");break;case "option":g=de(m,h);break;case "select":m._wrapperState={wasMultiple:!!h.multiple};g=n({},h,{value:void 0});H("invalid",m);ve(t,"onChange");break;case "textarea":ge(m,h);g=fe(m,h);H("invalid",m);ve(t,"onChange");break;default:g=h}te(l,g);u=void 0;z=l;y=m;x=g;for(u in x)x.hasOwnProperty(u)&&(r=x[u],"style"===u?re(y,r):"dangerouslySetInnerHTML"===u?(r=r?r.__html:void 0,null!=r&&ne(y,r)):"children"===u?"string"===typeof r?("textarea"!==
z||""!==r)&&oe(y,r):"number"===typeof r&&oe(y,""+r):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(sa.hasOwnProperty(u)?null!=r&&ve(t,u):null!=r&&xc(y,u,r,v)));switch(l){case "input":Wb(m);Fc(m,h,!1);break;case "textarea":Wb(m);ie(m,h);break;case "option":null!=h.value&&m.setAttribute("value",""+yc(h.value));break;case "select":g=m;g.multiple=!!h.multiple;m=h.value;null!=m?ee(g,!!h.multiple,m,!1):null!=h.defaultValue&&ee(g,!!h.multiple,h.defaultValue,!0);break;
default:"function"===typeof g.onClick&&(m.onclick=we)}(f=ze(k,f))&&qg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?w("166"):void 0;break;case 8:e&&null!=b.stateNode?tg(e,b,e.memoizedProps,f):("string"!==typeof f&&(null===b.stateNode?w("166"):void 0),g=zf(yf.current),zf(N.current),$f(b)?(f=b,k=f.stateNode,g=f.memoizedProps,k[Ia]=f,(f=k.nodeValue!==g)&&qg(b)):(k=b,f=(9===g.nodeType?g:g.ownerDocument).createTextNode(f),f[Ia]=k,b.stateNode=f));break;case 13:case 14:break;
case 16:break;case 9:break;case 10:break;case 15:break;case 6:Bf(b);rg(b);break;case 12:tf(b);break;case 11:break;case 4:w("167");default:w("156")}b=P=null;f=a;if(1073741823===Q||1073741823!==f.childExpirationTime){k=0;for(g=f.child;null!==g;){e=g.expirationTime;h=g.childExpirationTime;if(0===k||0!==e&&e<k)k=e;if(0===k||0!==h&&h<k)k=h;g=g.sibling}f.childExpirationTime=k}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gg(a,Q);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Rg(a){var b=pg(a.alternate,a,Q);null===b&&(b=Qg(a));Ig.current=null;return b}
function Sg(a,b,c){Lg?w("243"):void 0;Lg=!0;Ig.currentDispatcher=Hg;var d=a.nextExpirationTimeToWorkOn;if(d!==Q||a!==Mg||null===P)Pg(),Mg=a,Q=d,P=Ue(Mg.current,null,Q),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==P&&!Tg();)P=Rg(P);else for(;null!==P;)P=Rg(P)}catch(t){if(null===P)e=!0,Dg(t);else{null===P?w("271"):void 0;var f=P,g=f.return;if(null===g)e=!0,Dg(t);else{a:{var k=g,h=f,l=t;g=Q;h.effectTag|=512;h.firstEffect=h.lastEffect=null;Ng=!0;l=nf(l,h);do{switch(k.tag){case 5:k.effectTag|=
1024;k.expirationTime=g;g=Cg(k,l,g);gf(k,g);break a;case 2:case 3:h=l;var m=k.stateNode;if(0===(k.effectTag&64)&&null!==m&&"function"===typeof m.componentDidCatch&&(null===Fg||!Fg.has(m))){k.effectTag|=1024;k.expirationTime=g;g=Eg(k,h,g);gf(k,g);break a}}k=k.return}while(null!==k)}P=Qg(f);continue}}}break}while(1);Lg=!1;rf=qf=pf=Ig.currentDispatcher=null;if(e)Mg=null,a.finishedWork=null;else if(null!==P)a.finishedWork=null;else{b=a.current.alternate;null===b?w("281"):void 0;Mg=null;if(Ng){e=a.latestPendingTime;
f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){a.didError=!1;c=a.latestPingedTime;0!==c&&c<=d&&(a.latestPingedTime=0);c=a.earliestPendingTime;b=a.latestPendingTime;c===d?a.earliestPendingTime=b===d?a.latestPendingTime=0:b:b===d&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;b=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=d:c>d?a.earliestSuspendedTime=d:b<d&&(a.latestSuspendedTime=d);$e(d,a);a.expirationTime=a.expirationTime;return}if(!a.didError&&
!c){a.didError=!0;a.nextExpirationTimeToWorkOn=d;d=a.expirationTime=1;a.expirationTime=d;return}}a.pendingCommitExpirationTime=d;a.finishedWork=b}}
function wg(a,b){var c;a:{Lg&&!Og?w("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:case 3:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===Fg||!Fg.has(d))){a=nf(b,a);a=Eg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}break;case 5:a=nf(b,a);a=Cg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}c=c.return}5===a.tag&&(c=nf(b,a),c=Cg(a,c,1),ff(a,c),If(a,1));c=void 0}return c}
function Hf(a,b){0!==Kg?a=Kg:Lg?a=Og?1:Q:b.mode&1?(a=Ug?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==Mg&&a===Q&&(a+=1)):a=1;Ug&&(0===Vg||a>Vg)&&(Vg=a);return a}
function If(a,b){a:{if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return;if(null===d&&5===a.tag)a=a.stateNode;else{for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&5===d.tag){a=d.stateNode;break a}d=d.return}a=null}}if(null!==
a){!Lg&&0!==Q&&b<Q&&Pg();Ze(a,b);if(!Lg||Og||Mg!==a){b=a;a=a.expirationTime;if(null===b.nextScheduledRoot)b.expirationTime=a,null===T?(U=T=b,b.nextScheduledRoot=b):(T=T.nextScheduledRoot=b,T.nextScheduledRoot=U);else if(c=b.expirationTime,0===c||a<c)b.expirationTime=a;V||(W?Wg&&(Y=b,Z=1,Xg(b,1,!0)):1===a?Yg(1,null):Zg(b,a))}$g>ah&&($g=0,w("185"))}}function bh(a,b,c,d,e){var f=Kg;Kg=1;try{return a(b,c,d,e)}finally{Kg=f}}
var U=null,T=null,ch=0,dh=void 0,V=!1,Y=null,Z=0,Vg=0,eh=!1,fh=!1,gh=null,hh=null,W=!1,Wg=!1,Ug=!1,ih=null,jh=ba.unstable_now(),kh=(jh/10|0)+2,lh=kh,ah=50,$g=0,mh=null,nh=1;function oh(){kh=((ba.unstable_now()-jh)/10|0)+2}function Zg(a,b){if(0!==ch){if(b>ch)return;null!==dh&&ba.unstable_cancelScheduledWork(dh)}ch=b;a=ba.unstable_now()-jh;dh=ba.unstable_scheduleWork(ph,{timeout:10*(b-2)-a})}function Gf(){if(V)return lh;qh();if(0===Z||1073741823===Z)oh(),lh=kh;return lh}
function qh(){var a=0,b=null;if(null!==T)for(var c=T,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===T?w("244"):void 0;if(d===d.nextScheduledRoot){U=T=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function ph(a){if(a.didTimeout&&null!==U){oh();var b=U;do{var c=b.expirationTime;0!==c&&kh>=c&&(b.nextExpirationTimeToWorkOn=kh);b=b.nextScheduledRoot}while(b!==U)}Yg(0,a)}
function Yg(a,b){hh=b;qh();if(null!==hh)for(oh(),lh=kh;null!==Y&&0!==Z&&(0===a||a>=Z)&&(!eh||kh>=Z);)Xg(Y,Z,kh>=Z),qh(),oh(),lh=kh;else for(;null!==Y&&0!==Z&&(0===a||a>=Z);)Xg(Y,Z,!0),qh();null!==hh&&(ch=0,dh=null);0!==Z&&Zg(Y,Z);hh=null;eh=!1;$g=0;mh=null;if(null!==ih)for(a=ih,ih=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){fh||(fh=!0,gh=d)}}if(fh)throw a=gh,gh=null,fh=!1,a;}
function Xg(a,b,c){V?w("245"):void 0;V=!0;if(null===hh||c){var d=a.finishedWork;null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!1,c),d=a.finishedWork,null!==d&&rh(a,d,b))}else d=a.finishedWork,null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!0,c),d=a.finishedWork,null!==d&&(Tg()?a.finishedWork=d:rh(a,d,b)));V=!1}
function rh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ih?ih=[d]:ih.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===mh?$g++:(mh=a,$g=0);Og=Lg=!0;a.current===b?w("177"):void 0;c=a.pendingCommitExpirationTime;0===c?w("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=0===d||0!==e&&e<d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0):(e=a.latestPendingTime,0!==e&&(e<d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?Ze(a,d):d>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Ze(a,d)):d<e&&Ze(a,d));$e(0,a);Ig.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;xe=Gd;e=Td();if(Ud(e)){if("selectionStart"in e)var f=
{start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var k=g.anchorOffset,h=g.focusNode;g=g.focusOffset;try{f.nodeType,h.nodeType}catch(Xa){f=null;break a}var l=0,m=-1,t=-1,x=0,z=0,y=e,u=null;b:for(;;){for(var v;;){y!==f||0!==k&&3!==y.nodeType||(m=l+k);y!==h||0!==g&&3!==y.nodeType||(t=l+g);3===y.nodeType&&(l+=y.nodeValue.length);if(null===(v=y.firstChild))break;u=y;y=v}for(;;){if(y===
e)break b;u===f&&++x===k&&(m=l);u===h&&++z===g&&(t=l);if(null!==(v=y.nextSibling))break;y=u;u=y.parentNode}y=v}f=-1===m||-1===t?null:{start:m,end:t}}else f=null}f=f||{start:0,end:0}}else f=null;ye={focusedElem:e,selectionRange:f};Gd=!1;for(R=d;null!==R;){e=!1;f=void 0;try{for(;null!==R;){if(R.effectTag&256){var r=R.alternate;a:switch(k=R,k.tag){case 2:case 3:if(k.effectTag&256&&null!==r){var p=r.memoizedProps,D=r.memoizedState,S=k.stateNode;S.props=k.memoizedProps;S.state=k.memoizedState;var yh=S.getSnapshotBeforeUpdate(p,
D);S.__reactInternalSnapshotBeforeUpdate=yh}break a;case 5:case 7:case 8:case 6:break a;default:w("163")}}R=R.nextEffect}}catch(Xa){e=!0,f=Xa}e&&(null===R?w("178"):void 0,wg(R,f),null!==R&&(R=R.nextEffect))}for(R=d;null!==R;){r=!1;p=void 0;try{for(;null!==R;){var A=R.effectTag;A&16&&oe(R.stateNode,"");if(A&128){var B=R.alternate;if(null!==B){var q=B.ref;null!==q&&("function"===typeof q?q(null):q.current=null)}}switch(A&14){case 2:Ag(R);R.effectTag&=-3;break;case 6:Ag(R);R.effectTag&=-3;Bg(R.alternate,
R);break;case 4:Bg(R.alternate,R);break;case 8:D=R,yg(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}R=R.nextEffect}}catch(Xa){r=!0,p=Xa}r&&(null===R?w("178"):void 0,wg(R,p),null!==R&&(R=R.nextEffect))}q=ye;B=Td();A=q.focusedElem;p=q.selectionRange;if(B!==A&&A&&A.ownerDocument&&Sd(A.ownerDocument.documentElement,A)){null!==p&&Ud(A)&&(B=p.start,q=p.end,void 0===q&&(q=B),"selectionStart"in A?(A.selectionStart=B,A.selectionEnd=Math.min(q,A.value.length)):
(r=A.ownerDocument||document,B=(r?r.defaultView:window).getSelection(),D=A.textContent.length,q=Math.min(p.start,D),p=void 0===p.end?q:Math.min(p.end,D),!B.extend&&q>p&&(D=p,p=q,q=D),D=Rd(A,q),S=Rd(A,p),D&&S&&(1!==B.rangeCount||B.anchorNode!==D.node||B.anchorOffset!==D.offset||B.focusNode!==S.node||B.focusOffset!==S.offset)&&(r=r.createRange(),r.setStart(D.node,D.offset),B.removeAllRanges(),q>p?(B.addRange(r),B.extend(S.node,S.offset)):(r.setEnd(S.node,S.offset),B.addRange(r)))));B=[];for(q=A;q=q.parentNode;)1===
q.nodeType&&B.push({element:q,left:q.scrollLeft,top:q.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<B.length;A++)q=B[A],q.element.scrollLeft=q.left,q.element.scrollTop=q.top}ye=null;Gd=!!xe;xe=null;a.current=b;for(R=d;null!==R;){d=!1;A=void 0;try{for(B=c;null!==R;){var Sa=R.effectTag;if(Sa&36){var oc=R.alternate;q=R;r=B;switch(q.tag){case 2:case 3:var X=q.stateNode;if(q.effectTag&4)if(null===oc)X.props=q.memoizedProps,X.state=q.memoizedState,X.componentDidMount();else{var Ih=oc.memoizedProps,
Jh=oc.memoizedState;X.props=q.memoizedProps;X.state=q.memoizedState;X.componentDidUpdate(Ih,Jh,X.__reactInternalSnapshotBeforeUpdate)}var kg=q.updateQueue;null!==kg&&(X.props=q.memoizedProps,X.state=q.memoizedState,lf(q,kg,X,r));break;case 5:var lg=q.updateQueue;if(null!==lg){p=null;if(null!==q.child)switch(q.child.tag){case 7:p=q.child.stateNode;break;case 2:case 3:p=q.child.stateNode}lf(q,lg,p,r)}break;case 7:var Kh=q.stateNode;null===oc&&q.effectTag&4&&ze(q.type,q.memoizedProps)&&Kh.focus();break;
case 8:break;case 6:break;case 15:break;case 16:break;default:w("163")}}if(Sa&128){var Ac=R.ref;if(null!==Ac){var mg=R.stateNode;switch(R.tag){case 7:var Od=mg;break;default:Od=mg}"function"===typeof Ac?Ac(Od):Ac.current=Od}}var Lh=R.nextEffect;R.nextEffect=null;R=Lh}}catch(Xa){d=!0,A=Xa}d&&(null===R?w("178"):void 0,wg(R,A),null!==R&&(R=R.nextEffect))}Lg=Og=!1;"function"===typeof Oe&&Oe(b.stateNode);Sa=b.expirationTime;b=b.childExpirationTime;b=0===Sa||0!==b&&b<Sa?b:Sa;0===b&&(Fg=null);a.expirationTime=
b;a.finishedWork=null}function Tg(){return eh?!0:null===hh||hh.timeRemaining()>nh?!1:eh=!0}function Dg(a){null===Y?w("246"):void 0;Y.expirationTime=0;fh||(fh=!0,gh=a)}function sh(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||V||Yg(1,null)}}function th(a,b){if(W&&!Wg){Wg=!0;try{return a(b)}finally{Wg=!1}}return a(b)}function uh(a,b,c){if(Ug)return a(b,c);W||V||0===Vg||(Yg(Vg,null),Vg=0);var d=Ug,e=W;W=Ug=!0;try{return a(b,c)}finally{Ug=d,(W=e)||V||Yg(1,null)}}
function vh(a){if(!a)return Fe;a=a._reactInternalFiber;a:{2!==jd(a)||2!==a.tag&&3!==a.tag?w("170"):void 0;var b=a;do{switch(b.tag){case 5:b=b.stateNode.context;break a;case 2:if(M(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}break;case 3:if(M(b.type._reactResult)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);w("171");b=void 0}if(2===a.tag){var c=a.type;if(M(c))return Le(a,c,b)}else if(3===a.tag&&(c=a.type._reactResult,M(c)))return Le(a,
c,b);return b}function wh(a,b,c,d,e){var f=b.current;c=vh(c);null===b.context?b.context=c:b.pendingContext=c;b=e;e=df(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);ff(f,e);If(f,d);return d}function xh(a,b,c,d){var e=b.current,f=Gf();e=Hf(f,e);return wh(a,b,c,e,d)}function zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 7:return a.child.stateNode;default:return a.child.stateNode}}
function Ah(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ac,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Fb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Na(d);e?void 0:w("90");Xb(d);Dc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Bh(a){var b=2+25*(((Gf()-2+500)/25|0)+1);b<=Jg&&(b=Jg+1);this._expirationTime=Jg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bh.prototype.render=function(a){this._defer?void 0:w("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ch;wh(a,b,null,c,d._onCommit);return d};
Bh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:w("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?w("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;V?w("253"):void 0;Y=a;Z=b;Xg(a,b,!0);Yg(1,null);b=this._next;this._next=null;b=a.firstBatch=b;null!==
b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ch(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ch.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ch.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?w("191",c):void 0;c()}}};
function Dh(a,b,c){b=new Se(5,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Dh.prototype.render=function(a,b){var c=this._internalRoot,d=new Ch;b=void 0===b?null:b;null!==b&&d.then(b);xh(a,c,null,d._onCommit);return d};Dh.prototype.unmount=function(a){var b=this._internalRoot,c=new Ch;a=void 0===a?null:a;null!==a&&c.then(a);xh(null,b,null,c._onCommit);return c};Dh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ch;c=void 0===c?null:c;null!==c&&e.then(c);xh(b,d,a,e._onCommit);return e};
Dh.prototype.createBatch=function(){var a=new Bh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Eh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Lb=sh;Mb=uh;Nb=function(){V||0===Vg||(Yg(Vg,null),Vg=0)};
function Fh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dh(a,!1,b)}
function Gh(a,b,c,d,e){Eh(c)?void 0:w("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Fh(c,d);if("function"===typeof e){var k=e;e=function(){var a=zh(f._internalRoot);k.call(a)}}th(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return zh(f._internalRoot)}
function Hh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Eh(b)?void 0:w("200");return Ah(a,b,null,c)}
var Mh={createPortal:Hh,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?w("188"):w("268",Object.keys(a)));a=md(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Gh(null,a,b,!0,c)},render:function(a,b,c){return Gh(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?w("38"):void 0;return Gh(a,b,c,!1,d)},unmountComponentAtNode:function(a){Eh(a)?
void 0:w("40");return a._reactRootContainer?(th(function(){Gh(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Hh.apply(void 0,arguments)},unstable_batchedUpdates:sh,unstable_interactiveUpdates:uh,flushSync:function(a,b){V?w("187"):void 0;var c=W;W=!0;try{return bh(a,b)}finally{W=c,Yg(1,null)}},unstable_flushControlled:function(a){var b=W;W=!0;try{bh(a)}finally{(W=b)||V||Yg(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[La,
Ma,Na,qa,Ua,function(a){za(a,Ta)},Jb,Kb,Id,Ga]},unstable_createRoot:function(a,b){Eh(a)?void 0:w("278");return new Dh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Re(n({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ka,bundleType:0,version:"16.5.0",rendererPackageName:"react-dom"});var Nh={default:Mh},Oh=Nh&&Mh||Nh;
module.exports=Oh.default||Oh;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(130);
} else {
  module.exports = require('./cjs/schedule.development.js');
}


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * schedule.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=!("undefined"===typeof window||!window.document||!window.document.createElement),f=Date,g="function"===typeof setTimeout?setTimeout:void 0,h="function"===typeof clearTimeout?clearTimeout:void 0,l="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,m="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,n="object"===typeof performance&&"function"===typeof performance.now;
exports.unstable_now=void 0;if(n){var p=performance;exports.unstable_now=function(){return p.now()}}else exports.unstable_now=function(){return f.now()};exports.unstable_scheduleWork=void 0;exports.unstable_cancelScheduledWork=void 0;
if(d){var q=null,r=null,t=-1,u=!1,v=!1,w=void 0,x=void 0,y=function(a){w=l(function(b){h(x);a(b)});x=g(function(){m(w);a(exports.unstable_now())},100)},z=0,A=33,B=33,C={didTimeout:!1,timeRemaining:function(){var a=z-exports.unstable_now();return 0<a?a:0}},E=function(a,b){var c=a.scheduledCallback,e=!1;try{c(b),e=!0}finally{exports.unstable_cancelScheduledWork(a),e||(u=!0,window.postMessage(D,"*"))}},D="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===
window&&a.data===D&&(u=!1,null!==q)){if(null!==q){var b=exports.unstable_now();if(!(-1===t||t>b)){a=-1;for(var c=[],e=q;null!==e;){var k=e.timeoutTime;-1!==k&&k<=b?c.push(e):-1!==k&&(-1===a||k<a)&&(a=k);e=e.next}if(0<c.length)for(C.didTimeout=!0,b=0,e=c.length;b<e;b++)E(c[b],C);t=a}}for(a=exports.unstable_now();0<z-a&&null!==q;)a=q,C.didTimeout=!1,E(a,C),a=exports.unstable_now();null===q||v||(v=!0,y(F))}},!1);var F=function(a){v=!1;var b=a-z+B;b<B&&A<B?(8>b&&(b=8),B=b<A?A:b):A=b;z=a+B;u||(u=!0,window.postMessage(D,
"*"))};exports.unstable_scheduleWork=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=exports.unstable_now()+b.timeout);if(-1===t||-1!==c&&c<t)t=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===q?q=a:(b=a.prev=r,null!==b&&(b.next=a));r=a;v||(v=!0,y(F));return a};exports.unstable_cancelScheduledWork=function(a){if(null!==a.prev||q===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,q=b):null!==c?(c.next=null,r=c):r=
q=null}}}else{var G=new Map;exports.unstable_scheduleWork=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=g(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1})});G.set(a,c);return b};exports.unstable_cancelScheduledWork=function(a){var b=G.get(a.scheduledCallback);G.delete(a);h(b)}};


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(48);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(133);
var invariant = __webpack_require__(134);
var ReactPropTypesSecret = __webpack_require__(135);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hoistNonReactStatics = factory());
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(156);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(77);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(144);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29), __webpack_require__(143)(module)))

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(153);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(150);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(148);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29)))

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(79);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(152);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(77);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(78);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(157);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(48);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mediaMiddleware__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);







const compose = Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])({
  actionsBlacklist: [__WEBPACK_IMPORTED_MODULE_6__actionTypes__["_15" /* UPDATE_TIME_ELAPSED */], __WEBPACK_IMPORTED_MODULE_6__actionTypes__["_2" /* STEP_MARQUEE */]]
});
/* harmony default export */ __webpack_exports__["a"] = (function (media, actionEmitter, customMiddlewares = [], stateOverrides, extras) {
  let initialState;

  if (stateOverrides) {
    initialState = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["j" /* merge */])(Object(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */])(undefined, {
      type: "@@init"
    }), stateOverrides);
  } // eslint-disable-next-line no-unused-vars


  const emitterMiddleware = store => next => action => {
    actionEmitter.trigger(action.type, action);
    return next(action);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, compose(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...[__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(extras), Object(__WEBPACK_IMPORTED_MODULE_4__mediaMiddleware__["a" /* default */])(media), emitterMiddleware, ...customMiddlewares].filter(Boolean))));
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(37).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playlist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__windows__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userInput__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equalizer__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__network__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings__ = __webpack_require__(168);









const reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  userInput: __WEBPACK_IMPORTED_MODULE_5__userInput__["a" /* default */],
  windows: __WEBPACK_IMPORTED_MODULE_2__windows__["a" /* default */],
  display: __WEBPACK_IMPORTED_MODULE_4__display__["a" /* default */],
  settings: __WEBPACK_IMPORTED_MODULE_8__settings__["a" /* default */],
  equalizer: __WEBPACK_IMPORTED_MODULE_6__equalizer__["a" /* default */],
  playlist: __WEBPACK_IMPORTED_MODULE_1__playlist__["a" /* default */],
  media: __WEBPACK_IMPORTED_MODULE_3__media__["a" /* default */],
  network: __WEBPACK_IMPORTED_MODULE_7__network__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = {"images":{"EQ_PREAMP_LINE":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==","EQ_GRAPH_LINE_COLORS":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAATCAYAAABRC2cZAAAAR0lEQVQYV2O4rCT9n+F9kOJ/hvfViv8ZHkzSQCE2afxneH/HEJm49Nr0PwOYWPLIAkp0PjL4z1B41uQ/Q9QGnf8MWrPEIAQANWYwvnlToNIAAAAASUVORK5CYII="},"colors":["rgb(0,0,0)","rgb(24,33,41)","rgb(239,49,16)","rgb(206,41,16)","rgb(214,90,0)","rgb(214,102,0)","rgb(214,115,0)","rgb(198,123,8)","rgb(222,165,24)","rgb(214,181,33)","rgb(189,222,41)","rgb(148,222,33)","rgb(41,206,16)","rgb(50,190,16)","rgb(57,181,16)","rgb(49,156,8)","rgb(41,148,0)","rgb(24,132,8)","rgb(255,255,255)","rgb(214,214,222)","rgb(181,189,189)","rgb(160,170,175)","rgb(148,156,165)","rgb(150,150,150)"],"playlistStyle":{"normal":"#00FF00","current":"#FFFFFF","normalbg":"#000000","selectedbg":"#0000FF","font":"Arial"}}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);



const defaultWindowsState = {
  focused: __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* WINDOWS */].MAIN,
  genWindows: {
    // TODO: Remove static capabilites and derive them from ids/generic
    main: {
      title: "Main Window",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+W"
    },
    equalizer: {
      title: "Equalizer",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+G"
    },
    playlist: {
      title: "Playlist Editor",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: true,
      canShade: true,
      canDouble: false,
      generic: false,
      hotkey: "Alt+E"
    }
  },
  positions: {}
};

const windows = (state = defaultWindowsState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["O" /* SET_FOCUSED_WINDOW */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focused: action.window
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_12" /* TOGGLE_WINDOW_SHADE_MODE */]:
      const canShade = state.genWindows[action.windowId].canShade;

      if (!canShade) {
        throw new Error("Tried to shade/unshade a window that cannot be shaded:", action.windowId);
      }

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            shade: !state.genWindows[action.windowId].shade
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_11" /* TOGGLE_WINDOW */]:
      const windowState = state.genWindows[action.windowId];
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, windowState, {
            open: !windowState.open,
            // Reset hidden state when opening window
            hidden: windowState.open ? windowState.hidden : false
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["g" /* CLOSE_WINDOW */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            open: false
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["Y" /* SET_WINDOW_VISIBILITY */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            hidden: action.hidden
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["a" /* ADD_GEN_WINDOW */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: {
            title: action.title,
            open: action.open,
            hidden: false,
            size: [0, 0],
            canShade: false,
            canResize: true,
            canDouble: false,
            generic: true
          }
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_17" /* WINDOW_SIZE_CHANGED */]:
      const canResize = state.genWindows[action.windowId].canResize;

      if (!canResize) {
        throw new Error("Tried to resize a window that cannot be resized:", action.windowId);
      }

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        genWindows: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows, {
          [action.windowId]: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.genWindows[action.windowId], {
            size: action.size
          })
        })
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_16" /* UPDATE_WINDOW_POSITIONS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        positions: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.positions, action.positions)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (windows);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);




const media = (state, action) => {
  if (!state) {
    return {
      timeMode: __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].ELAPSED,
      timeElapsed: 0,
      length: null,
      // Consider renaming to "duration"
      kbps: null,
      khz: null,
      // The winamp ini file declares the default volume as "200".
      // The UI seems to show a default volume near 78, which would
      // math with the default value being 200 out of 255.
      volume: Math.round(200 / 255 * 100),
      balance: 0,
      channels: null,
      shuffle: false,
      repeat: false,
      // TODO: Enforce possible values
      status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED
    };
  }

  switch (action.type) {
    // TODO: Make these constants
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["v" /* PLAY */]:
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["l" /* IS_PLAYING */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PLAYING
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["u" /* PAUSE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PAUSED
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_3" /* STOP */]:
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["m" /* IS_STOPPED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        status: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["d" /* CHANNEL_COUNT_CHANGED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        channels: action.channels
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_9" /* TOGGLE_TIME_MODE */]:
      const newMode = state.timeMode === __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].REMAINING ? __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].ELAPSED : __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* TIME_MODE */].TIME_REMAINING;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        timeMode: newMode
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_15" /* UPDATE_TIME_ELAPSED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        timeElapsed: action.elapsed
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* ADD_TRACK_FROM_URL */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        timeElapsed: 0,
        length: null,
        kbps: null,
        khz: null,
        channels: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["P" /* SET_MEDIA */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        length: action.length,
        kbps: action.kbps,
        khz: action.khz,
        channels: action.channels
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["X" /* SET_VOLUME */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        volume: action.volume
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["G" /* SET_BALANCE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        balance: action.balance
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_7" /* TOGGLE_REPEAT */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        repeat: !state.repeat
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_8" /* TOGGLE_SHUFFLE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        shuffle: !state.shuffle
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (media);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const defaultUserInput = {
  focus: null,
  bandFocused: null,
  scrubPosition: 0,
  userMessage: null
};
const userInput = (state = defaultUserInput, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["N" /* SET_FOCUS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focus: action.input,
        bandFocused: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["H" /* SET_BAND_FOCUS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focus: action.input,
        bandFocused: action.bandFocused
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_13" /* UNSET_FOCUS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        focus: null,
        bandFocused: null
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["T" /* SET_SCRUB_POSITION */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        scrubPosition: action.position
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["W" /* SET_USER_MESSAGE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        userMessage: action.message
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_14" /* UNSET_USER_MESSAGE */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        userMessage: null
      });

    default:
      return state;
  }
};
/* unused harmony export userInput */

/* harmony default export */ __webpack_exports__["a"] = (userInput);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);




const equalizer = (state, action) => {
  if (!state) {
    state = {
      on: true,
      auto: false,
      sliders: {
        preamp: 50
      }
    };
    __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* BANDS */].forEach(band => {
      state.sliders[band] = 50;
    });
    return state;
  }

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["I" /* SET_BAND_VALUE */]:
      const newSliders = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.sliders, {
        [action.band]: action.value
      });

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        sliders: newSliders
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["M" /* SET_EQ_ON */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        on: true
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["L" /* SET_EQ_OFF */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        on: false
      });

    case __WEBPACK_IMPORTED_MODULE_2__actionTypes__["K" /* SET_EQ_AUTO */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        auto: action.value
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (equalizer);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);



const network = (state = {
  connected: true
}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["s" /* NETWORK_CONNECTED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        connected: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["t" /* NETWORK_DISCONNECTED */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        connected: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (network);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);


const defaultSettingsState = {
  availableSkins: []
};

const settings = (state = defaultSettingsState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actionTypes__["F" /* SET_AVAILABLE_SKINS */]:
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state, {
        availableSkins: action.skins
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (settings);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (media => store => {
  const _store$getState = store.getState(),
        _store$getState$media = _store$getState.media,
        volume = _store$getState$media.volume,
        balance = _store$getState$media.balance; // Ensure the default state is the canonical value.


  media.setVolume(volume);
  media.setBalance(balance); // TODO: Ensure other values like bands and preamp are in sync

  media.on("timeupdate", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_15" /* UPDATE_TIME_ELAPSED */],
      elapsed: media.timeElapsed()
    });
  });
  media.on("ended", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["m" /* IS_STOPPED */]
    });
    store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actionCreators__["k" /* next */])());
  });
  media.on("playing", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["l" /* IS_PLAYING */]
    });
  });
  media.on("waiting", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_1" /* START_WORKING */]
    });
  });
  media.on("stopWaiting", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_4" /* STOP_WORKING */]
    });
  });
  media.on("fileLoaded", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["P" /* SET_MEDIA */],
      kbps: "128",
      khz: Math.round(media.sampleRate() / 1000).toString(),
      channels: media.channels(),
      length: media.duration(),
      id: Object(__WEBPACK_IMPORTED_MODULE_2__selectors__["a" /* getCurrentTrackId */])(store.getState())
    });
  });
  media.on("channelupdate", () => {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* CHANNEL_COUNT_CHANGED */],
      channels: media.channels()
    });
  });
  return next => action => {
    // TODO: Consider doing this after the action, and using the state as the source of truth.
    switch (action.type) {
      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["v" /* PLAY */]:
        media.play();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["u" /* PAUSE */]:
        media.pause();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["_3" /* STOP */]:
        media.stop();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["X" /* SET_VOLUME */]:
        media.setVolume(action.volume);
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["G" /* SET_BALANCE */]:
        media.setBalance(action.balance);
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["C" /* SEEK_TO_PERCENT_COMPLETE */]:
        media.seekToPercentComplete(action.percent);
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["w" /* PLAY_TRACK */]:
        {
          const track = store.getState().playlist.tracks[action.id];

          if (track != null) {
            media.loadFromUrl(track.url, true);
          }

          break;
        }

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* BUFFER_TRACK */]:
        {
          const track = store.getState().playlist.tracks[action.id];

          if (track != null) {
            media.loadFromUrl(track.url, false);
          }

          break;
        }

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["I" /* SET_BAND_VALUE */]:
        if (action.band === "preamp") {
          media.setPreamp(action.value);
        } else {
          media.setEqBand(action.band, action.value);
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["L" /* SET_EQ_OFF */]:
        media.disableEq();
        break;

      case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["M" /* SET_EQ_ON */]:
        media.enableEq();
        break;
    }

    return next(action);
  };
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleDoubleSizeMode;
/* harmony export (immutable) */ __webpack_exports__["d"] = toggleEqualizerShadeMode;
/* harmony export (immutable) */ __webpack_exports__["e"] = toggleMainWindowShadeMode;
/* harmony export (immutable) */ __webpack_exports__["f"] = togglePlaylistShadeMode;
/* harmony export (immutable) */ __webpack_exports__["a"] = closeWindow;
/* unused harmony export hideWindow */
/* unused harmony export showWindow */
/* harmony export (immutable) */ __webpack_exports__["b"] = setWindowSize;
/* harmony export (immutable) */ __webpack_exports__["g"] = toggleWindow;
/* harmony export (immutable) */ __webpack_exports__["h"] = updateWindowPositions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resizeUtils__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__snapUtils__ = __webpack_require__(85);




 // Dispatch an action and, if needed rearrange the windows to preserve
// the existing edge relationship.
//
// Works by checking the edges before the action is dispatched. Then,
// after disatching, calculating what position change would be required
// to restore those relationships.

function withWindowGraphIntegrity(action) {
  return (dispatch, getState) => {
    const state = getState();
    const graph = Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["u" /* getWindowGraph */])(state);
    const originalSizes = Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["B" /* getWindowSizes */])(state);
    dispatch(action);
    const newSizes = Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["B" /* getWindowSizes */])(getState());
    const sizeDiff = {};

    for (const window of Object.keys(newSizes)) {
      const original = originalSizes[window];
      const current = newSizes[window];
      sizeDiff[window] = {
        height: current.height - original.height,
        width: current.width - original.width
      };
    }

    const positionDiff = Object(__WEBPACK_IMPORTED_MODULE_3__resizeUtils__["b" /* getPositionDiff */])(graph, sizeDiff);
    const windowPositions = Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["y" /* getWindowPositions */])(state);
    const newPositions = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["o" /* objectMap */])(windowPositions, (position, key) => Object(__WEBPACK_IMPORTED_MODULE_4__snapUtils__["a" /* applyDiff */])(position, positionDiff[key]));
    dispatch(updateWindowPositions(newPositions));
  };
}

function toggleDoubleSizeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_5" /* TOGGLE_DOUBLESIZE_MODE */]
  });
}
function toggleEqualizerShadeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_12" /* TOGGLE_WINDOW_SHADE_MODE */],
    windowId: "equalizer"
  });
}
function toggleMainWindowShadeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_12" /* TOGGLE_WINDOW_SHADE_MODE */],
    windowId: "main"
  });
}
function togglePlaylistShadeMode() {
  return withWindowGraphIntegrity({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_12" /* TOGGLE_WINDOW_SHADE_MODE */],
    windowId: "playlist"
  });
}
function closeWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["g" /* CLOSE_WINDOW */],
    windowId
  };
}
function hideWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["Y" /* SET_WINDOW_VISIBILITY */],
    windowId,
    hidden: true
  };
}
function showWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["Y" /* SET_WINDOW_VISIBILITY */],
    windowId,
    hidden: false
  };
}
function setWindowSize(windowId, size) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_17" /* WINDOW_SIZE_CHANGED */],
    windowId,
    size
  };
}
function toggleWindow(windowId) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_11" /* TOGGLE_WINDOW */],
    windowId
  };
}
function updateWindowPositions(positions) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_16" /* UPDATE_WINDOW_POSITIONS */],
    positions
  };
}

/***/ }),
/* 171 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 173 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);


const getAsDataURI = text => `data:text/html;base64,${window.btoa(text)}`;
/* unused harmony export getAsDataURI */
 // Replaces deprecated "noshade" attribute

const noshadeStyle = {
  height: "2px",
  borderWidth: 0,
  color: "gray",
  backgroundColor: "gray"
}; // TODO: Move <html> tag out to the string creation step in order
// to avoid the warning.

const Playlist = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("head", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
  rel: "stylesheet",
  href: "null"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
  type: "text/css"
}, `
        body { background: #000040; }
        .para1 { margin-top: -42px; margin-left: 145px; margin-right: 10px; font-family: "font2, Arial"; font-size: 30px; line-height: 35px; text-align: left; color: #E1E1E1; }
        .para2 { margin-top: 15px; margin-left: 15px; margin-right: 50px; font-family: "font1, Arial Black"; font-size: 50px; line-height: 40px; text-align: left; color: #004080; }
        `), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Winamp Generated PlayList")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
  bgcolor: "#000080",
  topmargin: "0",
  leftmargin: "0",
  text: "#FFFFFF"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  align: "center"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "para2",
  align: "center"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "WINAMP")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "para1",
  align: "center"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "playlist"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
  align: "left",
  width: "90%",
  size: "1",
  color: "#FFBF00",
  style: noshadeStyle
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  align: "right"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
  border: "0",
  cellSpacing: "0",
  cellPadding: "0",
  width: "98%"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.numberOfTracks), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, " track in playlist, average track length: "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.averageTrackLength))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, "Playlist length: "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.playlistLengthMinutes), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, " minutes "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFBF00"
}, props.playlistLengthSeconds), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, " second "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#409FFF",
  face: "Arial"
}, "Right-click ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "./"
}, "here"), " to save this HTML file.")))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("blockquote", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  color: "#FFBF00",
  face: "Arial"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("big", null, "Playlist files:"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("font", {
  face: "Arial",
  color: "#FFFFFF"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, props.tracks.map(track => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
  key: track
}, track, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
  align: "left",
  width: "90%",
  size: "1",
  color: "#FFBF00",
  style: noshadeStyle
})));

const createPlaylistHTML = props => {
  const node = document.createElement("div");
  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Playlist, props), node);
  return node.innerHTML;
};

const createPlaylistURL = props => getAsDataURI(createPlaylistHTML(props));
/* harmony export (immutable) */ __webpack_exports__["a"] = createPlaylistURL;


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = play;
/* harmony export (immutable) */ __webpack_exports__["d"] = pause;
/* harmony export (immutable) */ __webpack_exports__["l"] = stop;
/* harmony export (immutable) */ __webpack_exports__["c"] = nextN;
/* harmony export (immutable) */ __webpack_exports__["b"] = next;
/* harmony export (immutable) */ __webpack_exports__["f"] = previous;
/* harmony export (immutable) */ __webpack_exports__["i"] = seekForward;
/* harmony export (immutable) */ __webpack_exports__["h"] = seekBackward;
/* harmony export (immutable) */ __webpack_exports__["k"] = setVolume;
/* harmony export (immutable) */ __webpack_exports__["a"] = adjustVolume;
/* harmony export (immutable) */ __webpack_exports__["g"] = scrollVolume;
/* harmony export (immutable) */ __webpack_exports__["j"] = setBalance;
/* harmony export (immutable) */ __webpack_exports__["m"] = toggleRepeat;
/* harmony export (immutable) */ __webpack_exports__["n"] = toggleShuffle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(2);






function playRandomTrack() {
  return (dispatch, getState) => {
    const _getState = getState(),
          _getState$playlist = _getState.playlist,
          trackOrder = _getState$playlist.trackOrder,
          currentTrack = _getState$playlist.currentTrack;

    if (trackOrder.length === 0) {
      return;
    }

    let nextId;

    do {
      nextId = trackOrder[Math.floor(trackOrder.length * Math.random())];
    } while (nextId === currentTrack && trackOrder.length > 1); // TODO: Sigh... Technically, we should detect if we are looping only repeat if we are.
    // I think this would require pre-computing the "random" order of a playlist.


    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["w" /* PLAY_TRACK */],
      id: nextId
    });
  };
}

function play() {
  return (dispatch, getState) => {
    const state = getState();

    if (state.media.status === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].STOPPED && state.playlist.curentTrack == null && state.playlist.trackOrder.length === 0) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_4____["n" /* openMediaFileDialog */])());
    } else {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["v" /* PLAY */]
      });
    }
  };
}
function pause() {
  return (dispatch, getState) => {
    const status = getState().media.status;
    dispatch({
      type: status === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* MEDIA_STATUS */].PLAYING ? __WEBPACK_IMPORTED_MODULE_2__actionTypes__["u" /* PAUSE */] : __WEBPACK_IMPORTED_MODULE_2__actionTypes__["v" /* PLAY */]
    });
  };
}
function stop() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_3" /* STOP */]
  };
}
function nextN(n) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.media.shuffle) {
      dispatch(playRandomTrack());
      return;
    }

    const nextTrackId = Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["D" /* nextTrack */])(state, n);

    if (nextTrackId == null) {
      return;
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["w" /* PLAY_TRACK */],
      id: nextTrackId
    });
  };
}
function next() {
  return nextN(1);
}
function previous() {
  return nextN(-1);
}
function seekForward(seconds) {
  return function (dispatch, getState) {
    const _getState$media = getState().media,
          timeElapsed = _getState$media.timeElapsed,
          length = _getState$media.length;
    const newTimeElapsed = timeElapsed + seconds;
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["C" /* SEEK_TO_PERCENT_COMPLETE */],
      percent: newTimeElapsed / length * 100
    });
  };
}
function seekBackward(seconds) {
  return seekForward(-seconds);
}
function setVolume(volume) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["X" /* SET_VOLUME */],
    volume: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* clamp */])(volume, 0, 100)
  };
}
function adjustVolume(volumeDiff) {
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    return dispatch(setVolume(currentVolume + volumeDiff));
  };
}
function scrollVolume(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume; // Using pixels as percentage difference here is a bit arbirary, but... oh well.

    return dispatch(setVolume(currentVolume + e.deltaY));
  };
}
function setBalance(balance) {
  balance = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* clamp */])(balance, -100, 100); // The balance clips to the center

  if (Math.abs(balance) < 25) {
    balance = 0;
  }

  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["G" /* SET_BALANCE */],
    balance
  };
}
function toggleRepeat() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_7" /* TOGGLE_REPEAT */]
  };
}
function toggleShuffle() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_8" /* TOGGLE_SHUFFLE */]
  };
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addTracksFromReferences;
/* harmony export (immutable) */ __webpack_exports__["d"] = loadFilesFromReferences;
/* unused harmony export setSkinFromArrayBuffer */
/* unused harmony export setSkinFromFileReference */
/* harmony export (immutable) */ __webpack_exports__["i"] = setSkinFromUrl;
/* harmony export (immutable) */ __webpack_exports__["f"] = openEqfFileDialog;
/* harmony export (immutable) */ __webpack_exports__["g"] = openMediaFileDialog;
/* harmony export (immutable) */ __webpack_exports__["h"] = openSkinFileDialog;
/* unused harmony export fetchMediaDuration */
/* harmony export (immutable) */ __webpack_exports__["e"] = loadMediaFiles;
/* unused harmony export loadMediaFile */
/* unused harmony export fetchMediaTags */
/* unused harmony export setEqFromFileReference */
/* harmony export (immutable) */ __webpack_exports__["c"] = downloadPreset;
/* harmony export (immutable) */ __webpack_exports__["b"] = downloadHtmlPlaylist;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winamp_eqf__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winamp_eqf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_winamp_eqf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileUtils__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skinParser__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadQueue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__playlist__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__equalizer__ = __webpack_require__(86);









 // Lower is better

const DURATION_VISIBLE_PRIORITY = 5;
const META_DATA_VISIBLE_PRIORITY = 10;
const DURATION_PRIORITY = 15;
const META_DATA_PRIORITY = 20;
const loadQueue = new __WEBPACK_IMPORTED_MODULE_7__loadQueue__["a" /* default */]({
  threads: 4
});
function addTracksFromReferences(fileReferences, loadStyle, atIndex) {
  const tracks = Array.from(fileReferences).map(file => ({
    blob: file,
    defaultName: file.name
  }));
  return loadMediaFiles(tracks, loadStyle, atIndex);
}
const SKIN_FILENAME_MATCHER = new RegExp("(wsz|zip)$", "i");
const EQF_FILENAME_MATCHER = new RegExp("eqf$", "i");
function loadFilesFromReferences(fileReferences, loadStyle = __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].PLAY, atIndex = null) {
  return dispatch => {
    if (fileReferences.length < 1) {
      return;
    } else if (fileReferences.length === 1) {
      const fileReference = fileReferences[0];

      if (SKIN_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setSkinFromFileReference(fileReference));
        return;
      } else if (EQF_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setEqFromFileReference(fileReference));
        return;
      }
    }

    dispatch(addTracksFromReferences(fileReferences, loadStyle, atIndex));
  };
}
function setSkinFromArrayBuffer(arrayBuffer) {
  return async (dispatch, getState, {
    requireJSZip
  }) => {
    if (!requireJSZip) {
      alert("Webamp has not been configured to support custom skins.");
      return;
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["o" /* LOADING */]
    });
    let JSZip;

    try {
      JSZip = await requireJSZip();
    } catch (e) {
      console.error(e);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["n" /* LOADED */]
      });
      alert("Failed to load the skin parser.");
      return;
    }

    try {
      const skinData = await Object(__WEBPACK_IMPORTED_MODULE_4__skinParser__["a" /* default */])(arrayBuffer, JSZip);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["U" /* SET_SKIN_DATA */],
        skinImages: skinData.images,
        skinColors: skinData.colors,
        skinPlaylistStyle: skinData.playlistStyle,
        skinCursors: skinData.cursors,
        skinRegion: skinData.region,
        skinGenLetterWidths: skinData.genLetterWidths
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["n" /* LOADED */]
      });
      alert(`Failed to parse skin`);
    }
  };
}
function setSkinFromFileReference(skinFileReference) {
  return async dispatch => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["o" /* LOADING */]
    });
    const arrayBuffer = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["b" /* genArrayBufferFromFileReference */])(skinFileReference);
    dispatch(setSkinFromArrayBuffer(arrayBuffer));
  };
}
function setSkinFromUrl(url) {
  return async dispatch => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["o" /* LOADING */]
    });

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(setSkinFromArrayBuffer(response.arrayBuffer()));
    } catch (e) {
      console.error(e);
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["n" /* LOADED */]
      });
      alert(`Failed to download skin from ${url}`);
    }
  };
} // This function is private, since Winamp consumers can provide means for
// opening files via other methods. Only use the file type specific
// versions below, since they can defer to the user-defined behavior.

function _openFileDialog(accept) {
  return async dispatch => {
    const fileReferences = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["e" /* promptForFileReferences */])({
      accept
    });
    dispatch(loadFilesFromReferences(fileReferences));
  };
}

function openEqfFileDialog() {
  return _openFileDialog(".eqf");
}
function openMediaFileDialog() {
  return _openFileDialog();
}
function openSkinFileDialog() {
  return _openFileDialog(".zip, .wsz");
}
function fetchMediaDuration(url, id) {
  return (dispatch, getState) => {
    loadQueue.push(async () => {
      try {
        const duration = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["c" /* genMediaDuration */])(url);
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["Q" /* SET_MEDIA_DURATION */],
          duration,
          id
        });
      } catch (e) {// TODO: Should we update the state to indicate that we don't know the length?
      }
    }, () => {
      const trackIsVisible = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["q" /* getTrackIsVisibleFunction */])(getState());
      return trackIsVisible(id) ? DURATION_VISIBLE_PRIORITY : DURATION_PRIORITY;
    });
  };
}
function loadMediaFiles(tracks, loadStyle = null, atIndex = 0) {
  return dispatch => {
    if (loadStyle === __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].PLAY) {
      // I'm the worst. It just so happens that in every case that we autoPlay,
      // we should also clear all tracks.
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__playlist__["d" /* removeAllTracks */])());
    }

    tracks.forEach((track, i) => {
      const priority = i === 0 && loadStyle != null ? loadStyle : null;
      dispatch(loadMediaFile(track, priority, atIndex + i));
    });
  };
}
function loadMediaFile(track, priority = null, atIndex = 0) {
  return dispatch => {
    const id = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["w" /* uniqueId */])();
    const url = track.url,
          blob = track.blob,
          defaultName = track.defaultName,
          metaData = track.metaData,
          duration = track.duration;
    let canonicalUrl = url;

    if (canonicalUrl == null) {
      if (blob == null) {
        throw new Error("Expected track to have either a blob or a url");
      }

      canonicalUrl = URL.createObjectURL(track.blob);
    }

    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["b" /* ADD_TRACK_FROM_URL */],
      url: canonicalUrl,
      duration: track.duration,
      defaultName,
      id,
      atIndex
    });

    switch (priority) {
      case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].BUFFER:
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["c" /* BUFFER_TRACK */],
          id
        });
        break;

      case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOAD_STYLE */].PLAY:
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["w" /* PLAY_TRACK */],
          id
        });
        break;

      default:
        // If we're not going to load this right away,
        // we should set duration on our own
        if (duration != null) {
          dispatch({
            type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["Q" /* SET_MEDIA_DURATION */],
            duration,
            id
          });
        } else {
          dispatch(fetchMediaDuration(canonicalUrl, id));
        }

    }

    if (metaData != null) {
      const artist = metaData.artist,
            title = metaData.title;
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["R" /* SET_MEDIA_TAGS */],
        artist,
        title,
        id
      });
    } else if (blob != null) {
      // Blobs can be loaded quickly
      dispatch(fetchMediaTags(blob, id));
    } else {
      dispatch(queueFetchingMediaTags(id));
    }
  };
}

function queueFetchingMediaTags(id) {
  return (dispatch, getState) => {
    const track = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["r" /* getTracks */])(getState())[id];
    return loadQueue.push(() => dispatch(fetchMediaTags(track.url, id)), () => {
      const trackIsVisible = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["q" /* getTrackIsVisibleFunction */])(getState());
      return trackIsVisible(track.id) ? META_DATA_VISIBLE_PRIORITY : META_DATA_PRIORITY;
    });
  };
}

function fetchMediaTags(file, id) {
  return async (dispatch, getState, {
    requireJSMediaTags
  }) => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["q" /* MEDIA_TAG_REQUEST_INITIALIZED */],
      id
    });

    try {
      const data = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["d" /* genMediaTags */])(file, (await requireJSMediaTags())); // There's more data here, but we don't have a use for it yet:
      // https://github.com/aadsm/jsmediatags#shortcuts

      const _data$tags = data.tags,
            artist = _data$tags.artist,
            title = _data$tags.title,
            picture = _data$tags.picture;
      let albumArtUrl = null;

      if (picture) {
        const byteArray = new Uint8Array(picture.data);
        const blob = new Blob([byteArray], {
          type: picture.type
        });
        albumArtUrl = URL.createObjectURL(blob);
      }

      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["R" /* SET_MEDIA_TAGS */],
        artist,
        title,
        albumArtUrl,
        id
      });
    } catch (e) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["p" /* MEDIA_TAG_REQUEST_FAILED */],
        id
      });
    }
  };
}
function setEqFromFileReference(fileReference) {
  return async dispatch => {
    const arrayBuffer = await Object(__WEBPACK_IMPORTED_MODULE_3__fileUtils__["b" /* genArrayBufferFromFileReference */])(fileReference);
    const eqf = Object(__WEBPACK_IMPORTED_MODULE_0_winamp_eqf__["parser"])(arrayBuffer);
    const preset = eqf.presets[0];
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__equalizer__["e" /* setPreamp */])(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* normalize */])(preset.preamp)));
    __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* BANDS */].forEach(band => {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__equalizer__["a" /* setEqBand */])(band, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* normalize */])(preset[`hz${band}`])));
    });
  };
}
function downloadPreset() {
  return (dispatch, getState) => {
    const state = getState();
    const data = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["b" /* getEqfData */])(state);
    const arrayBuffer = Object(__WEBPACK_IMPORTED_MODULE_0_winamp_eqf__["creator"])(data);
    const base64 = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* base64FromArrayBuffer */])(arrayBuffer);
    const dataURI = `data:application/zip;base64,${base64}`;
    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* downloadURI */])(dataURI, "entry.eqf");
  };
}
function downloadHtmlPlaylist() {
  return (dispatch, getState) => {
    const uri = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["j" /* getPlaylistURL */])(getState());
    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* downloadURI */])(uri, "Winamp Playlist.html");
  };
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(178);
var creator = __webpack_require__(179);

module.exports = {
  parser: parser,
  creator: creator
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(87);

function parser(arrayBuffer) {
  var data = {};
  var i = 0;
  var arr = new Int8Array(arrayBuffer);
  // Parse header
  data.type = String.fromCharCode.apply(
    null,
    arr.slice(i, CONSTANTS.HEADER.length)
  );
  if (data.type !== CONSTANTS.HEADER) {
    throw new Error("Invalid .eqf file.");
  }
  i += CONSTANTS.HEADER.length;
  // Skip "<ctrl-z>!--"
  i += 4;
  // Get the presets
  data.presets = [];
  while (i < arr.length) {
    var preset = {};
    // Get the name
    var nameStart = i;
    var nameEnd = nameStart + 257; // Str is fixed length
    // Str is null terminated
    while (arr[i] !== 0 && i <= nameEnd) {
      i++;
    }
    preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
    i = nameEnd; // Skip over any unused bytes

    // Get the levels
    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
    });
    data.presets.push(preset);
  }
  return data;
}

module.exports = parser;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(87);

var FILL_SIZE = 4;
var PRESET_LENGTH = 257;

function creator(data) {
  var buffer = [];
  for (var i = 0; i < CONSTANTS.HEADER.length; i++) {
    buffer.push(CONSTANTS.HEADER.charCodeAt(i));
  }
  buffer.push(26); // <ctrl-z>
  var ending = "!--";
  for (var i = 0; i < ending.length; i++) {
    buffer.push(ending.charCodeAt(i));
  }
  if (!data.presets) {
    throw new Error("Eqf data is missing presets");
  }
  data.presets.forEach(function(preset) {
    var k = 0;
    for (; k < preset.name.length; k++) {
      buffer.push(preset.name.charCodeAt(k));
    }
    for (; k < PRESET_LENGTH; k++) {
      buffer.push(0);
    }

    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      buffer.push(64 - preset[valueName]); // Adjust for inverse values
    });
  });
  return new Uint8Array(buffer).buffer;
}

module.exports = creator;


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skinSprites__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regionParser__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(6);







const shallowMerge = objs => objs.reduce((prev, img) => Object.assign(prev, img), {});

const CURSORS = ["CLOSE", "EQCLOSE", "EQNORMAL", "EQSLID", "EQTITLE", "MAINMENU", "MMENU", "MIN", "NORMAL", "PCLOSE", "PNORMAL", "POSBAR", "PSIZE", "PTBAR", "PVSCROLL", "PWINBUT", "PWSNORM", "PWSSIZE", "SONGNAME", "TITLEBAR", "VOLBAL", "WINBUT", "WSNORMAL", "WSPOSBAR"
/*
 * > There are usually 4 more cursors in the skins: volbar.cur, wsclose.cur,
 * > wswinbut.cur, wsmin.cur, but they are never used, at least in the last
 * > versions of winamp, so there's no need of including them. The cursors
 * > shown when the mouse is over the app-buttons are the same in normal and
 * > winshade mode, except for the main menu button. You can make animated
 * > cursors, but you have to name them with the extension .cur (animated
 * > cursors are usually .ani files).
 *
 * -- Skinners Atlas
 *
 * "VOLBAR",
 * "WSCLOSE",
 * "WSWINBUT",
 * "WSMIN",
 *
 */
];

const _genImgFromBlob = async blob => new Promise((resolve, reject) => {
  const img = new Image();

  img.onload = () => {
    // Schedule cleanup of object url?
    // Maybe on next tick, or with requestidlecallback
    resolve(img);
  };

  img.onerror = () => reject("Failed to decode image");

  img.src = URL.createObjectURL(blob);
});

const genImgFromBlob = async blob => {
  if (window.createImageBitmap) {
    try {
      // Use this faster native browser API if available.
      return await window.createImageBitmap(blob);
    } catch (e) {
      console.warn("Encountered an error with createImageBitmap. Falling back to Image approach."); // There are some bugs in the new API. In case something goes wrong, we call fall back.

      return _genImgFromBlob(blob);
    }
  }

  return _genImgFromBlob(blob);
};

async function genFileFromZip(zip, fileName, ext, mode) {
  const regex = new RegExp(`^(.*/)?${fileName}(\.${ext})?$`, "i");
  const files = zip.file(regex);

  if (!files.length) {
    return null;
  } // Return a promise (awaitable).


  return {
    contents: await files[0].async(mode),
    name: files[0].name
  };
}

function getSpriteUrisFromImg(img, sprites) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  return sprites.reduce((images, sprite) => {
    canvas.height = sprite.height;
    canvas.width = sprite.width;
    context.drawImage(img, -sprite.x, -sprite.y);
    const image = canvas.toDataURL();
    images[sprite.name] = image;
    return images;
  }, {});
}

async function genImgFromFilename(zip, fileName) {
  // Winamp only supports .bmp images, but WACUP set a precidence of supporting
  // .png as well to reduce size. Since we care about size as well, we follow
  // suit. Our default skin uses .png to save 14kb.
  const file = await genFileFromZip(zip, fileName, "(png|bmp)", "blob");

  if (!file) {
    return null;
  }

  const mimeType = `image/${Object(__WEBPACK_IMPORTED_MODULE_5__utils__["g" /* getFileExtension */])(file.name) || "*"}`; // The spec for createImageBitmap() says the browser should try to sniff the
  // mime type, but it looks like Firefox does not. So we specify it here
  // explicitly.

  const typedBlob = new Blob([file.contents], {
    type: mimeType
  });
  return genImgFromBlob(typedBlob);
}

async function genSpriteUrisFromFilename(zip, fileName) {
  const img = await genImgFromFilename(zip, fileName);

  if (img == null) {
    return {};
  }

  return getSpriteUrisFromImg(img, __WEBPACK_IMPORTED_MODULE_2__skinSprites__["b" /* default */][fileName]);
}

async function getCursorFromFilename(zip, fileName) {
  const file = await genFileFromZip(zip, fileName, "CUR", "base64");
  return file && `data:image/x-win-bitmap;base64,${file.contents}`;
}

async function genPlaylistStyle(zip) {
  const pledit = await genFileFromZip(zip, "PLEDIT", "txt", "text");
  const data = pledit && Object(__WEBPACK_IMPORTED_MODULE_5__utils__["p" /* parseIni */])(pledit.contents).text;

  if (!data) {
    // Corrupt or missing PLEDIT.txt file.
    return __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* DEFAULT_SKIN */].playlistStyle;
  } // Winamp seems to permit colors that contain too many characters.
  // For compatibility with existing skins, we normalize them here.


  ["normal", "current", "normalbg", "selectedbg"].forEach(colorKey => {
    let color = data[colorKey];

    if (!color) {
      return;
    }

    if (color[0] !== "#") {
      color = `#${color}`;
    }

    data[colorKey] = color.slice(0, 7);
  });
  return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* DEFAULT_SKIN */].playlistStyle, data);
}

async function genVizColors(zip) {
  const viscolor = await genFileFromZip(zip, "VISCOLOR", "txt", "text");
  return viscolor ? Object(__WEBPACK_IMPORTED_MODULE_5__utils__["q" /* parseViscolors */])(viscolor.contents) : __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* DEFAULT_SKIN */].colors;
}

async function genImages(zip) {
  const imageObjs = await Promise.all(Object.keys(__WEBPACK_IMPORTED_MODULE_2__skinSprites__["b" /* default */]).map(async fileName => genSpriteUrisFromFilename(zip, fileName))); // Merge all the objects into a single object. Tests assert that sprite keys are unique.

  return shallowMerge(imageObjs);
}

async function genCursors(zip) {
  const cursorObjs = await Promise.all(CURSORS.map(async cursorName => ({
    [cursorName]: await getCursorFromFilename(zip, cursorName)
  })));
  return shallowMerge(cursorObjs);
}

async function genRegion(zip) {
  const region = await genFileFromZip(zip, "REGION", "txt", "text");
  return region ? Object(__WEBPACK_IMPORTED_MODULE_3__regionParser__["a" /* default */])(region.contents) : {};
}

async function genGenTextSprites(zip) {
  const img = await genImgFromFilename(zip, "GEN");

  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getLetters = (y, prefix) => {
    const getColorAt = x => context.getImageData(x, y, 1, 1).data.join(",");

    let x = 1;
    const backgroundColor = getColorAt(0);
    const height = 7;
    return __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* LETTERS */].map(letter => {
      let nextBackground = x;

      while (getColorAt(nextBackground) !== backgroundColor && nextBackground < canvas.width) {
        nextBackground++;
      }

      const width = nextBackground - x;
      const name = `${prefix}_${letter}`;
      const sprite = {
        x,
        y,
        height,
        width,
        name
      };
      x = nextBackground + 1;
      return sprite;
    });
  };

  const letterWidths = {};
  const sprites = [...getLetters(88, "GEN_TEXT_SELECTED"), ...getLetters(96, "GEN_TEXT")];
  sprites.forEach(sprite => {
    letterWidths[sprite.name] = sprite.width;
  });
  return [letterWidths, getSpriteUrisFromImg(img, sprites)];
} // A promise that, given an array buffer  returns a skin style object


async function skinParser(zipFileBuffer, JSZip) {
  const zip = await JSZip.loadAsync(zipFileBuffer);

  const _ref = await Promise.all([genVizColors(zip), genPlaylistStyle(zip), genImages(zip), genCursors(zip), genRegion(zip), genGenTextSprites(zip)]),
        _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 6),
        colors = _ref2[0],
        playlistStyle = _ref2[1],
        images = _ref2[2],
        cursors = _ref2[3],
        region = _ref2[4],
        genTextSprites = _ref2[5];

  const _ref3 = genTextSprites || [null, {}],
        _ref4 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
        genLetterWidths = _ref4[0],
        genTextImages = _ref4[1];

  return {
    colors,
    playlistStyle,
    images: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, images, genTextImages),
    genLetterWidths,
    cursors,
    region
  };
}

/* harmony default export */ __webpack_exports__["a"] = (skinParser);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pointPairs */
/* harmony export (immutable) */ __webpack_exports__["a"] = regionParser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);

function pointPairs(arr) {
  const pairedValues = [];

  for (let i = 0; i < arr.length; i += 2) {
    pairedValues.push(`${arr[i]},${arr[i + 1]}`);
  }

  return pairedValues;
}
function regionParser(regionStr) {
  const iniData = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* parseIni */])(regionStr);
  const data = {};
  Object.keys(iniData).forEach(section => {
    const _iniData$section = iniData[section],
          numpoints = _iniData$section.numpoints,
          pointlist = _iniData$section.pointlist;

    if (!numpoints || !pointlist) {
      return;
    }

    const pointCounts = numpoints.split(/\s*,\s*/).filter(val => val !== "");
    const points = pointPairs( // points can be separated by spaces, or by commas
    pointlist.split(/\s*[, ]\s*/).filter(val => val !== ""));
    let pointIndex = 0;
    const polygons = pointCounts.map(numStr => {
      const num = Number(numStr);
      const polygon = points.slice(pointIndex, pointIndex + num).join(" ");

      if (!polygon.length) {
        // It's possible that the skin author specified more polygons than provided points.
        return null;
      }

      pointIndex += num;
      return polygon;
    });
    const validPolygons = polygons.filter(polygon => polygon != null);

    if (validPolygons.length) {
      data[section] = validPolygons;
    }
  });
  return data;
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinyqueue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinyqueue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tinyqueue__);

 // Push promises onto a queue with a priority.
// Run a given number of jobs in parallel
// Useful for prioritizing network requests

class LoadQueue {
  constructor({
    threads
  }) {
    // TODO: Consider not running items with zero priority
    // Priority is a function so that items can change their priority between
    // when their priority is evaluated.
    // For example, we might add a track to the playlist and then scroll to/away
    // from it before it gets processed.
    this._queue = new __WEBPACK_IMPORTED_MODULE_1_tinyqueue___default.a([], (a, b) => a.priority() - b.priority());
    this._availableThreads = threads;
  }

  push(task, priority) {
    const t = {
      task,
      priority
    };

    this._queue.push(t); // Wait until the next event loop to pick a task to run. This way, we can
    // enqueue multiple items in an event loop, and be sure they will be run in
    // priority order.


    setTimeout(() => {
      this._run();
    }, 0);
    return () => {
      // TODO: Could return a boolean representing if the task has already been
      // kicked off.
      this._queue = this._queue.filter(t1 => t1 !== t);
    };
  }

  _run() {
    while (this._availableThreads > 0) {
      if (this._queue.length === 0) {
        return;
      }

      this._availableThreads--;

      const t = this._queue.pop();

      const promise = t.task();
      __WEBPACK_IMPORTED_MODULE_0_invariant___default()(typeof promise.then === "function", `LoadQueue only supports loading Promises. Got ${promise}`);
      promise.then(() => {
        this._availableThreads++;

        this._run();
      });
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadQueue;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinyQueue;
module.exports.default = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emitter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ContextMenuWrapper__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MainWindow_MainContextMenu__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WindowManager__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__MainWindow__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__PlaylistWindow__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__EqualizerWindow__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Skin__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__css_webamp_css__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__css_webamp_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__css_webamp_css__);

















/**
 * Constructs the windows to render, and tracks focus.
 */

class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor() {
    super();
    this._emitter = new __WEBPACK_IMPORTED_MODULE_5__emitter__["a" /* default */]();
    this._windowNodes = {};
    this._bindings = {};
  }

  componentWillMount() {
    this._webampNode = document.createElement("div");
    this._webampNode.id = "webamp";
    this._webampNode.role = "application";
    this._webampNode.style.zIndex = this.props.zIndex;
    document.body.appendChild(this._webampNode);
  }

  componentWillUnmount() {
    document.body.removeChild(this._webampNode);
  }

  componentDidMount() {
    this._setFocus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused) {
      this._setFocus();
    }
  }

  _setFocus() {
    const binding = this._bindings[this.props.focused];

    if (binding.node) {
      binding.node.focus();
    }
  }

  _gotRef(windowId, comp) {
    if (comp == null) {
      const binding = this._bindings[windowId];

      if (binding.remove) {
        binding.remove();
      }

      this._bindings[windowId] = null;
      return;
    }

    const node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(comp);
    const binding = this._bindings[windowId];

    if (binding && binding.node === node) {
      return;
    }

    node.tabIndex = -1;

    const listener = e => this._emitter.trigger(windowId, e);

    node.addEventListener("keydown", listener);
    this._bindings[windowId] = {
      node,
      remove: () => {
        node.removeEventListener("keydown", listener);
      }
    };
  }

  _renderWindows() {
    const _this$props = this.props,
          media = _this$props.media,
          genWindowsInfo = _this$props.genWindowsInfo,
          filePickers = _this$props.filePickers,
          genWindowComponents = _this$props.genWindowComponents;
    return Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* objectMap */])(genWindowsInfo, (w, id) => {
      if (!w.open) {
        return null;
      }

      switch (id) {
        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].MAIN:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__MainWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser(),
            filePickers: filePickers
          });

        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].EQUALIZER:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__EqualizerWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component)
          });

        case __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].PLAYLIST:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__PlaylistWindow__["a" /* default */], {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser()
          });

        default:
          if (!w.generic) {
            throw new Error("Tried to render an unknown window:", id);
          }

          const Component = genWindowComponents[id];
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, {
            chromeRef: component => this._gotRef(id, component),
            title: w.title,
            windowId: id,
            onFocusedKeyDown: listener => this._emitter.on(id, listener),
            analyser: media.getAnalyser(),
            isEnabledVisualizer: this.props.visualizerStyle === id,
            playing: this.props.status === __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* MEDIA_STATUS */].PLAYING,
            close: () => this.props.closeWindow(id)
          });
      }
    });
  }

  render() {
    const _this$props2 = this.props,
          closed = _this$props2.closed,
          container = _this$props2.container,
          filePickers = _this$props2.filePickers;

    if (closed) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.createPortal(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Skin__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ContextMenuWrapper__["a" /* default */], {
      renderContents: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__MainWindow_MainContextMenu__["a" /* default */], {
        filePickers: filePickers
      })
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__WindowManager__["a" /* default */], {
      windows: this._renderWindows(),
      container: container
    }))), this._webampNode);
  }

}

App.propTypes = {
  container: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Element)
};

const mapStateToProps = state => ({
  visualizerStyle: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["t" /* getVisualizerStyle */])(state),
  status: state.media.status,
  focused: state.windows.focused,
  closed: state.display.closed,
  genWindowsInfo: state.windows.genWindows,
  zIndex: state.display.zIndex
});

const mapDispatchToProps = dispatch => ({
  closeWindow: id => dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actionCreators__["d" /* closeWindow */])(id))
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),
/* 185 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./context-menu.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./context-menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "#webamp-context-menu .context-menu {\n    left: 0px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp-context-menu .context-menu.bottom {\n    top: 12px;\n}\n\n#webamp-context-menu .context-menu.top {\n    top: 0px;\n}\n\n#webamp-context-menu .context-menu,\n#webamp-context-menu .context-menu ul {\n    z-index: 50; /* Gross */\n    background-color: #ffffff;\n    position: absolute;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #a7a394;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#webamp-context-menu .context-menu li {\n    position: relative;\n    font-family: \"Tahoma\";\n    font-size: 11px;\n    color: black;\n    white-space: nowrap;\n    margin: 2px;\n    padding: 1px 18px 3px 18px;\n    display: block;\n}\n\n#webamp-context-menu .context-menu li.checked:before {\n    float: left;\n    /* TODO: Use an image */\n    content: \"\\2713\";\n    margin-left: -12px;\n}\n\n#webamp-context-menu .context-menu li.parent:after {\n    float: right;\n    content: \"\\25B8\";\n    margin-right: -12px;\n}\n#webamp-context-menu .context-menu li a {\n    text-decoration: none;\n    color: black;\n    cursor: default;\n}\n\n#webamp-context-menu .context-menu li:hover,\n#webamp-context-menu .context-menu li:hover a {\n    background-color: #224eb7;\n    color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr {\n    padding: 2px 0;\n}\n\n#webamp-context-menu .context-menu li.hr:hover {\n    background-color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr hr {\n    border: none;\n    height: 1px;\n    background-color: #a7a394;\n    margin: 0;\n    padding: 0;\n}\n\n#webamp-context-menu .context-menu ul {\n    display: none;\n    left: 100%;\n    margin-left: -3px;\n}\n\n#webamp-context-menu .context-menu li:hover ul {\n    display: block;\n}\n", ""]);

// exports


/***/ }),
/* 188 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);





const PlaybackContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Previous",
  hotkey: "Z",
  onClick: props.previous
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Play",
  hotkey: "X",
  onClick: props.play
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Pause",
  hotkey: "C",
  onClick: props.pause
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Stop",
  hotkey: "V",
  onClick: props.stop
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Next",
  hotkey: "B",
  onClick: props.next
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Back 5 seconds",
  hotkey: "Left",
  onClick: () => props.seekBackward(5)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Fwd 5 seconds",
  hotkey: "Right",
  onClick: () => props.seekForward(5)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "10 tracks back",
  hotkey: "Num. 1",
  onClick: () => Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["l" /* nextN */])(-10)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "10 tracks fwd",
  hotkey: "Num. 3",
  onClick: () => Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["l" /* nextN */])(10)
}));

const mapDispatchToProps = {
  previous: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["r" /* previous */],
  play: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["q" /* play */],
  pause: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["p" /* pause */],
  stop: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["N" /* stop */],
  next: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["k" /* next */],
  seekForward: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["B" /* seekForward */],
  seekBackward: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["A" /* seekBackward */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(PlaybackContextMenu));

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);





const SkinContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["d" /* Parent */], {
  label: "Skins"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.openSkinFileDialog,
  label: "Load Skin..."
}), !!props.availableSkins.length && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["a" /* Hr */], null), props.availableSkins.map(skin => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  key: skin.url,
  onClick: () => props.setSkin(skin.url),
  label: skin.name
})));

const mapStateToProps = state => ({
  availableSkins: state.settings.availableSkins
});

const mapDispatchToProps = {
  openSkinFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["o" /* openSkinFileDialog */],
  setSkin: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["J" /* setSkinFromUrl */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(SkinContextMenu));

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__snapUtils__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(6);












const abuts = (a, b) => {
  // TODO: This is kinda a hack. They should really be touching, not just within snapping distance.
  // Also, overlapping should not count.
  const wouldMoveTo = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["d" /* snap */])(a, b);
  return wouldMoveTo.x !== undefined || wouldMoveTo.y !== undefined;
};

class WindowManager extends __WEBPACK_IMPORTED_MODULE_3_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "centerWindows", () => {
      const container = this.props.container;
      const rect = container.getBoundingClientRect();
      const offsetLeft = rect.left + window.scrollX;
      const offsetTop = rect.top + window.scrollY;
      const width = container.scrollWidth;
      const height = container.scrollHeight;

      if (this.props.windowsInfo.some(w => w.x == null || w.y == null)) {
        // Some windows do not have an initial position, so we'll come up
        // with your own layout.
        const windowPositions = {};
        const keys = this.windowKeys();
        const totalHeight = keys.length * __WEBPACK_IMPORTED_MODULE_9__constants__["n" /* WINDOW_HEIGHT */];
        const globalOffsetLeft = Math.max(0, width / 2 - __WEBPACK_IMPORTED_MODULE_9__constants__["q" /* WINDOW_WIDTH */] / 2);
        const globalOffsetTop = Math.max(0, height / 2 - totalHeight / 2);
        keys.forEach((key, i) => {
          const offset = __WEBPACK_IMPORTED_MODULE_9__constants__["n" /* WINDOW_HEIGHT */] * i;
          windowPositions[key] = {
            x: Math.ceil(offsetLeft + globalOffsetLeft),
            y: Math.ceil(offsetTop + (globalOffsetTop + offset))
          };
        });
        this.props.updateWindowPositions(windowPositions);
      } else {
        // A layout has been suplied. We will compute the bounding box and
        // center the given layout.
        const bounding = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* calculateBoundingBox */])(this.props.windowsInfo.filter(w => this.props.getWindowOpen(w.key)));
        const boxHeight = bounding.bottom - bounding.top;
        const boxWidth = bounding.right - bounding.left;
        const move = {
          x: Math.ceil(offsetLeft + (width - boxWidth) / 2),
          y: Math.ceil(offsetTop + (height - boxHeight) / 2)
        };
        const newPositions = this.props.windowsInfo.reduce((pos, w) => __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, pos, {
          [w.key]: {
            x: move.x + w.x,
            y: move.y + w.y
          }
        }), {});
        this.props.updateWindowPositions(newPositions);
      }
    });

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(this, "handleMouseDown", (key, e) => {
      if (!e.target.classList.contains("draggable")) {
        return;
      } // Prevent dragging from highlighting text.


      e.preventDefault();

      const _this$movingAndStatio = this.movingAndStationaryNodes(key),
            _this$movingAndStatio2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_this$movingAndStatio, 2),
            moving = _this$movingAndStatio2[0],
            stationary = _this$movingAndStatio2[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      }; // Aparently this is crazy across browsers.

      const browserSize = {
        width: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth),
        height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
      };
      const box = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["c" /* boundingBox */])(moving);

      const handleMouseMove = ee => {
        const proposedDiff = {
          x: ee.clientX - mouseStart.x,
          y: ee.clientY - mouseStart.y
        };
        const proposedWindows = moving.map(node => __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, node, Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["a" /* applyDiff */])(node, proposedDiff)));

        const proposedBox = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, box, Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["a" /* applyDiff */])(box, proposedDiff));

        const snapDiff = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["e" /* snapDiffManyToMany */])(proposedWindows, stationary);
        const withinDiff = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["f" /* snapWithinDiff */])(proposedBox, browserSize);
        const finalDiff = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["b" /* applyMultipleDiffs */])(proposedDiff, snapDiff, withinDiff);
        const windowPositionDiff = moving.reduce((diff, window) => {
          diff[window.key] = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["a" /* applyDiff */])(window, finalDiff);
          return diff;
        }, {});
        this.props.updateWindowPositions(windowPositionDiff);
      };

      const removeListeners = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", removeListeners);
      };

      window.addEventListener("mouseup", removeListeners);
      window.addEventListener("mousemove", handleMouseMove);
    });
  }

  componentDidMount() {
    this.centerWindows();
  }

  movingAndStationaryNodes(key) {
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key] != null && !this.props.getWindowHidden(w.key));
    const targetNode = windows.find(node => node.key === key);
    let movingSet = new Set([targetNode]); // Only the main window brings other windows along.

    if (key === "main") {
      const findAllConnected = Object(__WEBPACK_IMPORTED_MODULE_6__snapUtils__["g" /* traceConnection */])(abuts);
      movingSet = findAllConnected(windows, targetNode);
    }

    const stationary = windows.filter(w => !movingSet.has(w));
    const moving = Array.from(movingSet);
    return [moving, stationary];
  }

  // Keys for the visible windows
  windowKeys() {
    // TODO: Iterables can probably do this better.
    return Object.keys(this.props.windows).filter(key => !!this.props.windows[key]);
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      left: 0
    };
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key]);
    return windows.map(w => __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      key: w.key,
      onMouseDown: e => this.handleMouseDown(w.key, e),
      style: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, style, {
        transform: `translate(${w.x}px, ${w.y}px)`
      })
    }, this.props.windows[w.key]));
  }

}

WindowManager.propTypes = {
  windows: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  container: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(Element).isRequired
};

const mapStateToProps = state => ({
  windowsInfo: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["C" /* getWindowsInfo */])(state),
  getWindowHidden: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["v" /* getWindowHidden */])(state),
  getWindowOpen: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["w" /* getWindowOpen */])(state)
});

const mapDispatchToProps = {
  updateWindowPositions: __WEBPACK_IMPORTED_MODULE_8__actionCreators__["X" /* updateWindowPositions */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(WindowManager));

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropTarget__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MiniTime__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ClickedDiv__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ContextMenuTarget__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Visualizer__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ActionButtons__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__MainBalance__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Close__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ClutterBar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MainContextMenu__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Eject__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__EqToggleButton__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__PlaylistToggleButton__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Kbps__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Khz__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Marquee__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__MonoStereo__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Position__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Repeat__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Shade__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Minimize__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Shuffle__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Time__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__MainVolume__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__css_main_window_css__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__css_main_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__css_main_window_css__);

































class MainWindow extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleClick", () => {
      this.props.setFocus();
    });

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleDrop", e => {
      this.props.loadFilesFromReferences(e);
    });
  }

  render() {
    const _this$props = this.props,
          focused = _this$props.focused,
          loading = _this$props.loading,
          doubled = _this$props.doubled,
          mainShade = _this$props.mainShade,
          llama = _this$props.llama,
          status = _this$props.status,
          working = _this$props.working,
          filePickers = _this$props.filePickers;
    const className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      window: true,
      play: status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PLAYING,
      stop: status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].STOPPED,
      pause: status === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* MEDIA_STATUS */].PAUSED,
      selected: focused === __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].MAIN,
      shade: mainShade,
      draggable: true,
      loading,
      doubled,
      llama
    });
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__DropTarget__["a" /* default */], {
      id: "main-window",
      className: className,
      onMouseDown: this._handleClick,
      handleDrop: this._handleDrop,
      onWheel: this.props.scrollVolume
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "title-bar",
      className: "selected draggable",
      onDoubleClick: this.props.toggleMainWindowShadeMode
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ContextMenuTarget__["a" /* default */], {
      id: "option-context",
      bottom: true,
      handle: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ClickedDiv__["a" /* default */], {
        id: "option",
        title: "Winamp Menu"
      })
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__MainContextMenu__["a" /* default */], {
      filePickers: filePickers
    })), mainShade && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__MiniTime__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__Minimize__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__Shade__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Close__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "status"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__ClutterBar__["a" /* default */], null), !working && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "play-pause"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "work-indicator",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
        selected: working
      })
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__Time__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Visualizer__["a" /* default */], {
      analyser: this.props.analyser
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "media-info"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__Marquee__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__Kbps__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__Khz__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__MonoStereo__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__MainVolume__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__MainBalance__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "windows"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__EqToggleButton__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__PlaylistToggleButton__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__Position__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ActionButtons__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__Eject__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "shuffle-repeat"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__Shuffle__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__Repeat__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      id: "about",
      target: "blank",
      href: "https://github.com/captbaritone/webamp",
      title: "About"
    }));
  }

}
/* unused harmony export MainWindow */


const mapStateToProps = state => {
  const status = state.media.status,
        _state$display = state.display,
        loading = _state$display.loading,
        doubled = _state$display.doubled,
        llama = _state$display.llama,
        working = _state$display.working,
        focused = state.windows.focused;
  return {
    mainShade: Object(__WEBPACK_IMPORTED_MODULE_6__selectors__["z" /* getWindowShade */])(state, "main"),
    status,
    loading,
    doubled,
    llama,
    working,
    focused
  };
};

const mapDispatchToProps = {
  setFocus: () => ({
    type: __WEBPACK_IMPORTED_MODULE_9__actionTypes__["O" /* SET_FOCUSED_WINDOW */],
    window: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].MAIN
  }),
  loadFilesFromReferences: e => Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["i" /* loadFilesFromReferences */])(e.dataTransfer.files),
  removeAllTracks: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["t" /* removeAllTracks */],
  toggleMainWindowShadeMode: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["R" /* toggleMainWindowShadeMode */],
  scrollVolume: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["z" /* scrollVolume */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(MainWindow));

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./mini-time.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./mini-time.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "#webamp .mini-time {\n    display: block;\n    height: 6px;\n    width: 25px;\n}\n\n#webamp .mini-time.blinking .character:not(.background-character) {\n    animation: blink 2s step-start 1s infinite;\n    -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .mini-time .background-character {\n    z-index: 1;\n}\n\n#webamp .mini-time .character {\n    position: absolute;\n    top: 0;\n    z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);




const ActionButtons = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "actions"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "previous",
  onClick: props.previous,
  title: "Previous Track"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "play",
  onClick: props.play,
  title: "Play"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "pause",
  onClick: props.pause,
  title: "Pause"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "stop",
  onClick: props.stop,
  title: "Stop"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "next",
  onClick: props.next,
  title: "Next Track"
}));

const mapDispatchToProps = {
  previous: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["r" /* previous */],
  play: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["q" /* play */],
  pause: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["p" /* pause */],
  stop: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["N" /* stop */],
  next: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["k" /* next */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(ActionButtons));

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Balance__ = __webpack_require__(95);



const offsetFromBalance = balance => {
  const percent = Math.abs(balance) / 100;
  const sprite = Math.floor(percent * 27);
  const offset = sprite * 15;
  return offset;
};
/* unused harmony export offsetFromBalance */


const MainBalance = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Balance__["a" /* default */], {
  id: "balance",
  style: {
    backgroundPosition: `0 -${offsetFromBalance(props.balance)}px`
  }
});

const mapStateToProps = state => ({
  balance: state.media.balance
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(MainBalance));

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClickedDiv__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const Close = ({
  onClick
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ClickedDiv__["a" /* default */], {
  id: "close",
  onClick: onClick,
  title: "Close"
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, {
  onClick: __WEBPACK_IMPORTED_MODULE_3__actionCreators__["c" /* close */]
})(Close));

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const ClutterBar = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "clutter-bar"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-o"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-a"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-i"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  title: "Toggle Doublesize Mode",
  id: "button-d",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.doubled
  }),
  onMouseUp: props.handleMouseUp,
  onMouseDown: props.handleMouseDown
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "button-v"
}));

const mapStateToProps = state => ({
  doubled: state.display.doubled
});

const mapDispatchToProps = dispatch => ({
  handleMouseDown: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["N" /* SET_FOCUS */],
    input: "double"
  }),
  handleMouseUp: () => {
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["O" /* toggleDoubleSizeMode */])());
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_13" /* UNSET_FOCUS */]
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(ClutterBar));

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);




const Eject = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "eject",
  onClick: props.openMediaFileDialog,
  title: "Open File(s)"
});

const mapDispatchToProps = {
  openMediaFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["n" /* openMediaFileDialog */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Eject));

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const EqToggleButton = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "equalizer-button",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.getWindowOpen("equalizer")
  }),
  onClick: props.handleClick,
  title: "Toggle Graphical Equalizer"
});

const mapStateToProps = state => ({
  getWindowOpen: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["w" /* getWindowOpen */])(state)
});

const mapDispatchToProps = {
  handleClick: () => Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["W" /* toggleWindow */])("equalizer")
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqToggleButton));

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(2);






const PlaylistToggleButton = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "playlist-button",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.getWindowOpen("playlist")
  }),
  onClick: props.handleClick,
  title: "Toggle Playlist Editor"
});

const mapStateToProps = state => ({
  getWindowOpen: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["w" /* getWindowOpen */])(state)
});

const mapDispatchToProps = {
  handleClick: () => Object(__WEBPACK_IMPORTED_MODULE_4__actionCreators__["W" /* toggleWindow */])("playlist")
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PlaylistToggleButton));

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterString__ = __webpack_require__(31);




const Kbps = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "kbps"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterString__["a" /* default */], null, props.kbps));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => ({
  kbps: state.media.kbps
}))(Kbps));

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterString__ = __webpack_require__(31);




const Khz = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "khz"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterString__["a" /* default */], null, props.khz));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => state.media)(Khz));

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CharacterString__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(5);

// Single line text display that can animate and hold multiple registers
// Knows how to display various modes like tracking, volume, balance, etc.






const CHAR_WIDTH = 5;
const MARQUEE_MAX_LENGTH = 31; // Always positive modulus

const mod = (n, m) => (n % m + m) % m;
/* unused harmony export mod */

const getBalanceText = balance => {
  if (balance === 0) {
    return "Balance: Center";
  }

  const direction = balance > 0 ? "Right" : "Left";
  return `Balance: ${Math.abs(balance)}% ${direction}`;
};
/* unused harmony export getBalanceText */

const getVolumeText = volume => `Volume: ${volume}%`;
/* unused harmony export getVolumeText */

const getPositionText = (duration, seekToPercent) => {
  const newElapsedStr = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(duration * seekToPercent / 100, false);
  const durationStr = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(duration, false);
  return `Seek to: ${newElapsedStr}/${durationStr} (${seekToPercent}%)`;
};
/* unused harmony export getPositionText */

const getDoubleSizeModeText = enabled => `${enabled ? "Disable" : "Enable"} doublesize mode`;
/* unused harmony export getDoubleSizeModeText */


const formatHz = hz => hz < 1000 ? `${hz}HZ` : `${hz / 1000}KHZ`; // Format a number as a string, ensuring it has a + or - sign


const ensureSign = num => num > 0 ? `+${num}` : num.toString(); // Round to 1 and exactly 1 decimal point


const roundToTenths = num => (Math.round(num * 10) / 10).toFixed(1);

const getEqText = (band, level) => {
  const db = roundToTenths((level - 50) / 50 * 12);
  const label = band === "preamp" ? "Preamp" : formatHz(band);
  return `EQ: ${label} ${ensureSign(db)} DB`;
};
/* unused harmony export getEqText */


const isLong = text => text.length >= MARQUEE_MAX_LENGTH; // Given text and step, how many pixels should it be shifted?


const stepOffset = (text, step, pixels) => {
  if (!isLong(text)) {
    return 0;
  }

  const stepOffsetWidth = step * CHAR_WIDTH; // Steps move one char at a time

  const offset = stepOffsetWidth + pixels;
  const stringLength = text.length * CHAR_WIDTH;
  return mod(offset, stringLength);
};
/* unused harmony export stepOffset */
 // Format an int as pixels

const pixelUnits = pixels => `${pixels}px`;
/* unused harmony export pixelUnits */
 // If text is wider than the marquee, it needs to loop

const loopText = text => isLong(text) ? text + text : text.padEnd(MARQUEE_MAX_LENGTH, " ");
/* unused harmony export loopText */


class Marquee extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "handleMouseDown", e => {
      const xStart = e.clientX;
      this.setState({
        stepping: false
      });

      const handleMouseMove = ee => {
        const diff = ee.clientX - xStart;
        this.setState({
          dragOffset: -diff
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove); // TODO: Remove this listener

        setTimeout(() => {
          this.setState({
            stepping: true
          });
        }, 1000);
        document.removeEventListener("mouseUp", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    this.state = {
      stepping: true,
      dragOffset: 0
    };
    this.stepHandle = null;
  }

  componentDidMount() {
    this.stepHandle = setInterval(() => {
      if (this.state.stepping) {
        this.props.dispatch({
          type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["_2" /* STEP_MARQUEE */]
        });
      }
    }, 220);
  }

  componentWillUnmount() {
    if (this.stepHandle) {
      clearTimeout(this.stepHandle);
    }
  }

  render() {
    const _this$props = this.props,
          text = _this$props.text,
          marqueeStep = _this$props.marqueeStep;
    const offset = stepOffset(text, marqueeStep, this.state.dragOffset);
    const offsetPixels = pixelUnits(-offset);
    const style = {
      whiteSpace: "nowrap",
      willChange: "transform",
      transform: `translateX(${offsetPixels})`
    };
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "marquee",
      className: "text",
      onMouseDown: this.handleMouseDown,
      title: "Song Title"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      style: style
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CharacterString__["a" /* default */], null, loopText(text))));
  }

}

const getMarqueeText = state => {
  if (state.userInput.userMessage != null) {
    return state.userInput.userMessage;
  }

  switch (state.userInput.focus) {
    case "balance":
      return getBalanceText(state.media.balance);

    case "volume":
      return getVolumeText(state.media.volume);

    case "position":
      return getPositionText(state.media.length, state.userInput.scrubPosition);

    case "double":
      return getDoubleSizeModeText(state.display.doubled);

    case "eq":
      const band = state.userInput.bandFocused;
      return getEqText(band, state.equalizer.sliders[band]);

    default:
      break;
  }

  if (state.playlist.currentTrack != null) {
    return Object(__WEBPACK_IMPORTED_MODULE_6__selectors__["d" /* getMediaText */])(state);
  }

  return "Winamp 2.91";
};

const mapStateToProps = state => ({
  marqueeStep: state.display.marqueeStep,
  text: getMarqueeText(state)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Marquee));

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);




const MonoStereo = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "mono-stereo"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "stereo",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.channels === 2
  })
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "mono",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.channels === 1
  })
}));

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => ({
  channels: state.media.channels
}))(MonoStereo));

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);




const Position = ({
  position,
  seekToPercentComplete,
  displayedPosition,
  setPosition
}) => {
  // In shade mode, the position slider shows up differently depending on if
  // it's near the start, middle or end of its progress
  let className = "";

  if (position <= 33) {
    className = "left";
  } else if (position >= 66) {
    className = "right";
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    id: "position",
    className: className,
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: displayedPosition,
    onInput: setPosition,
    onChange: () => {}
    /* React complains without this, can probably rename onInput to onChange */
    ,
    onMouseUp: seekToPercentComplete,
    onMouseDown: setPosition,
    title: "Seeking Bar"
  });
};

const mapStateToProps = ({
  media,
  userInput
}) => {
  let position;

  if (media.length) {
    position = Math.floor(media.timeElapsed) / media.length * 100;
  } else {
    position = 0;
  }

  const displayedPosition = userInput.focus === "position" ? userInput.scrubPosition : position;
  return {
    displayedPosition,
    position
  };
};

const mapDispatchToProps = dispatch => ({
  seekToPercentComplete: e => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["C" /* SEEK_TO_PERCENT_COMPLETE */],
      percent: e.target.value
    });
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["_13" /* UNSET_FOCUS */]
    });
  },
  setPosition: e => {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["N" /* SET_FOCUS */],
      input: "position"
    });
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["T" /* SET_SCRUB_POSITION */],
      position: e.target.value
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Position));

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);







const Repeat = ({
  repeat,
  handleClick
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__["a" /* default */], {
  renderContents: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
    checked: repeat,
    label: "Repeat",
    onClick: handleClick,
    hotkey: "(R)"
  })
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "repeat",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: repeat
  }),
  onClick: handleClick,
  title: "Toggle Repeat"
}));

const mapStateToProps = state => ({
  repeat: state.media.repeat
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["T" /* toggleRepeat */])())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Repeat));

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClickedDiv__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const Shade = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ClickedDiv__["a" /* default */], {
  id: "shade",
  onMouseDown: props.handleClick,
  onDoubleClick: e => e.stopPropagation(),
  title: "Toggle Windowshade Mode"
});

const mapDispatchToProps = {
  handleClick: __WEBPACK_IMPORTED_MODULE_3__actionCreators__["R" /* toggleMainWindowShadeMode */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(() => ({}), mapDispatchToProps)(Shade));

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClickedDiv__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);





const Minimize = ({
  minimize
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ClickedDiv__["a" /* default */], {
  id: "minimize",
  title: "Minimize",
  onClick: minimize
});

const mapDispatchToProps = {
  minimize: () => ({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["r" /* MINIMIZE_WINAMP */]
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Minimize));

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextMenu__ = __webpack_require__(12);







const Shuffle = ({
  shuffle,
  handleClick
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuWrapper__["a" /* default */], {
  renderContents: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ContextMenu__["c" /* Node */], {
    checked: shuffle,
    label: "Shuffle",
    onClick: handleClick,
    hotkey: "(S)"
  })
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: "shuffle",
  className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: shuffle
  }),
  onClick: handleClick,
  title: "Toggle Shuffle"
}));

const mapStateToProps = state => ({
  shuffle: state.media.shuffle
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["U" /* toggleShuffle */])())
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Shuffle));

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);






const Time = ({
  timeElapsed,
  length,
  timeMode,
  toggleTimeMode
}) => {
  const seconds = timeMode === __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* TIME_MODE */].ELAPSED ? timeElapsed : length - timeElapsed;
  const timeObj = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["h" /* getTimeObj */])(seconds);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "time",
    onClick: toggleTimeMode,
    className: "countdown"
  }, timeMode === __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* TIME_MODE */].REMAINING && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minus-sign"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minute-first-digit",
    className: `digit digit-${timeObj.minutesFirstDigit}`
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minute-second-digit",
    className: `digit digit-${timeObj.minutesSecondDigit}`
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "second-first-digit",
    className: `digit digit-${timeObj.secondsFirstDigit}`
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "second-second-digit",
    className: `digit digit-${timeObj.secondsSecondDigit}`
  }));
};

const mapStateToProps = state => state.media;

const mapDispatchToProps = dispatch => ({
  toggleTimeMode: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_9" /* TOGGLE_TIME_MODE */]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Time));

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Volume__ = __webpack_require__(96);




const MainVolume = props => {
  const volume = props.volume;
  const percent = volume / 100;
  const sprite = Math.round(percent * 28);
  const offset = (sprite - 1) * 15;
  const style = {
    backgroundPosition: `0 -${offset}px`
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "volume",
    style: style
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Volume__["a" /* default */], null));
};

const mapStateToProps = state => ({
  volume: state.media.volume
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(MainVolume));

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #main-window {\n    position: absolute;\n    height: 116px;\n    width: 275px;\n    /* Ask the browser to scale showing large pixels if possible */\n    image-rendering: -moz-crisp-edges; /* Firefox */\n    image-rendering: -o-crisp-edges; /* Opera */\n    image-rendering: -webkit-optimize-contrast; /* Safari */\n    image-rendering: pixelated; /* Only in Chrome > 40 */\n    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp #title-bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 14px;\n    width: 275px;\n}\n\n#webamp #option-context,\n#webamp #minimize,\n#webamp #shade,\n#webamp #close {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #title-bar #option {\n    width: 100%;\n    height: 100%;\n}\n\n#webamp #title-bar #option-context {\n    left: 6px;\n}\n#webamp #title-bar #minimize {\n    left: 244px;\n}\n#webamp #title-bar #shade {\n    left: 254px;\n}\n#webamp #title-bar #close {\n    left: 264px;\n}\n#webamp #clutter-bar {\n    position: absolute;\n    top: 22px;\n    left: 10px;\n    height: 43px;\n    width: 8px;\n}\n\n#webamp #clutter-bar div {\n    position: absolute;\n    height: 7px;\n    width: 8px;\n    left: 0px;\n}\n\n#webamp #clutter-bar #button-o {\n    top: 3px;\n    height: 8px;\n}\n#webamp #clutter-bar #button-a {\n    top: 11px;\n}\n#webamp #clutter-bar #button-i {\n    top: 18px;\n}\n#webamp #clutter-bar #button-d {\n    top: 25px;\n    height: 8px;\n}\n#webamp #clutter-bar #button-v {\n    top: 33px;\n}\n\n#webamp #play-pause {\n    position: absolute;\n    top: 28px;\n    left: 26px;\n    height: 9px;\n    width: 9px;\n    background-repeat: no-repeat;\n}\n\n#webamp .play #work-indicator,\n#webamp #work-indicator.selected {\n    position: absolute;\n    top: 28px;\n    left: 24px;\n    height: 9px;\n    width: 3px;\n}\n#webamp .status #time {\n    position: absolute;\n    left: 39px;\n    top: 26px;\n    /* Just to make it clickable */\n    height: 13px;\n    width: 59px;\n}\n\n#webamp .stop .status #time {\n    display: none;\n}\n#webamp .pause .status #time {\n    animation: blink 2s step-start 1s infinite;\n    -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .status #time #minus-sign {\n    /* Note that this get's augmented by the skin CSS if NUM_EX.BMP is present */\n    position: absolute;\n    top: 6px;\n    left: -1px;\n    width: 5px;\n    height: 1px;\n}\n\n#webamp .status #time #minute-first-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 9px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #minute-second-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 21px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #second-first-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 39px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #second-second-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 51px;\n    height: 13px;\n    width: 9px;\n}\n\n#webamp #main-window #visualizer {\n    position: absolute;\n    top: 43px;\n    left: 24px;\n}\n\n#webamp #main-window.shade #visualizer {\n    top: 5px;\n    left: 79px;\n}\n\n#webamp #main-window.stop #visualizer {\n    display: none;\n}\n\n#webamp .text {\n    display: none;\n}\n\n#webamp #marquee {\n    position: absolute;\n    left: 111px;\n    top: 24px;\n    width: 155px;\n    height: 6px;\n    overflow: hidden;\n    display: block;\n    padding: 3px 0px; /* Ensure the target is correct for the cursor */\n}\n\n#webamp .media-info #kbps {\n    position: absolute;\n    left: 111px;\n    top: 43px;\n    width: 15px;\n    height: 6px;\n    overflow: hidden;\n}\n\n#webamp .stop .media-info #kbps {\n    display: none;\n}\n\n#webamp .media-info #khz {\n    position: absolute;\n    left: 156px;\n    top: 43px;\n    width: 10px;\n    height: 6px;\n    overflow: hidden;\n}\n\n#webamp .stop .media-info #khz {\n    display: none;\n}\n\n#webamp .media-info .mono-stereo {\n    position: absolute;\n    left: 212px;\n    top: 41px;\n    width: 57px;\n    height: 12px;\n}\n\n#webamp .media-info .mono-stereo div {\n    position: absolute;\n    height: 12px;\n}\n\n#webamp .media-info .mono-stereo #mono {\n    width: 27px;\n}\n\n#webamp .media-info .mono-stereo #stereo {\n    left: 27px;\n    width: 29px;\n}\n\n#webamp #volume {\n    position: absolute;\n    left: 107px;\n    top: 57px;\n    height: 13px;\n    width: 68px;\n    background-position: 0 0;\n}\n\n#webamp #volume input {\n    height: 13px;\n    /* The input itself, is actually 3px shorter than the background\n     * https://twitter.com/LuigiHann/status/959275940688867328\n     */\n    width: 65px;\n    display: block;\n}\n#webamp #volume input::-webkit-slider-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n#webamp #volume input::-moz-range-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n\n#webamp #balance {\n    position: absolute;\n    left: 177px;\n    top: 57px;\n    height: 13px;\n    width: 38px;\n    background-position: 0 0;\n}\n\n#webamp #balance::-webkit-slider-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n#webamp #balance::-moz-range-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n\n#webamp .windows {\n    position: absolute;\n    left: 219px;\n    top: 58px;\n    width: 46px;\n    height: 12px;\n}\n\n#webamp .windows div {\n    position: absolute;\n    width: 23px;\n    height: 12px;\n}\n\n#webamp .windows #equalizer-button {\n    left: 0;\n}\n\n#webamp .windows #playlist-button {\n    left: 23px;\n}\n\n#webamp #position {\n    position: absolute;\n    left: 16px;\n    top: 72px;\n    width: 248px;\n    height: 10px;\n}\n\n#webamp #position::-webkit-slider-thumb {\n    height: 10px;\n    width: 29px;\n    /*\n     * Fix the strange bug in Safair/mobile-chrome\n     * http://stackoverflow.com/questions/26727769/rendering-glitch-when-manipulating-range-input-value-via-javascript-in-webkit\n     */\n    -webkit-box-sizing: border-box;\n    position: relative;\n}\n\n#webamp #position::-moz-range-thumb {\n    height: 10px;\n    width: 29px;\n}\n\n/* For some reason, we can't use display: none here */\n#webamp .stop #position::-webkit-slider-thumb {\n    visibility: hidden;\n}\n#webamp .stop #position::-moz-range-thumb {\n    visibility: hidden;\n}\n\n/* For some reason this is needed for the position slider to show up now that\n * we are using React.\n */\n#webamp .play #position::-webkit-slider-thumb {\n    visibility: visible;\n}\n\n#webamp .actions div {\n    height: 18px;\n    width: 23px;\n    position: absolute;\n}\n\n#webamp .actions #previous {\n    top: 88px;\n    left: 16px;\n}\n#webamp .actions #play {\n    top: 88px;\n    left: 39px;\n}\n#webamp .actions #pause {\n    top: 88px;\n    left: 62px;\n}\n#webamp .actions #stop {\n    top: 88px;\n    left: 85px;\n}\n#webamp .actions #next {\n    top: 88px;\n    left: 108px;\n    width: 22px;\n}\n\n#webamp #eject {\n    position: absolute;\n    top: 89px;\n    left: 136px;\n    height: 16px;\n    width: 22px;\n}\n\n#webamp .shuffle-repeat {\n    position: absolute;\n    top: 89px;\n    left: 164px;\n    width: 74px;\n}\n\n#webamp .shuffle-repeat div {\n    position: absolute;\n    height: 15px;\n}\n\n#webamp .shuffle-repeat #shuffle {\n    width: 47px;\n}\n\n#webamp .shuffle-repeat #repeat {\n    left: 46px;\n    width: 28px;\n}\n\n#webamp #about {\n    position: absolute;\n    top: 91px;\n    left: 253px;\n    height: 15px;\n    width: 13px;\n}\n\n#webamp .digit {\n    position: absolute;\n    display: inline-block;\n    width: 9px;\n    height: 13px;\n    background-repeat: no-repeat;\n    text-indent: -9999px;\n}\n\n/* Shade View */\n#webamp #main-window.shade {\n    height: 14px;\n}\n\n#webamp .shade .media-info,\n#webamp .shade .windows,\n#webamp .shade #volume,\n#webamp .shade #balance,\n#webamp .shade .shuffle-repeat,\n#webamp .shade .status {\n    display: none;\n}\n#webamp .shade #title-bar {\n}\n\n#webamp .shade .actions div {\n    position: absolute;\n}\n#webamp .shade .actions #previous,\n#webamp .shade .actions #previous:active {\n    background: none;\n    height: 10px;\n    width: 7px;\n    top: 2px;\n    left: 169px;\n}\n#webamp .shade .actions #play,\n#webamp .shade .actions #play:active {\n    background: none;\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 176px;\n}\n#webamp .shade .actions #pause,\n#webamp .shade .actions #pause:active {\n    background: none;\n    height: 10px;\n    width: 9px;\n    top: 2px;\n    left: 186px;\n}\n#webamp .shade .actions #stop,\n#webamp .shade .actions #stop:active {\n    background: none;\n    height: 10px;\n    width: 9px;\n    top: 2px;\n    left: 195px;\n}\n#webamp .shade .actions #next,\n#webamp .shade .actions #next:active {\n    background: none;\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 204px;\n}\n#webamp .shade #eject,\n#webamp .shade #eject:active {\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 215px;\n    background: none;\n}\n\n#webamp .shade #position {\n    position: absolute;\n    left: 226px;\n    top: 4px;\n    width: 17px;\n    height: 7px;\n}\n\n#webamp .shade #position::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n    /* This make it appear. Not sure why */\n    background: none;\n}\n\n#webamp .shade #position::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n    /* This make it appear. Not sure why */\n    background: none;\n}\n\n#webamp #main-window .mini-time {\n    position: absolute;\n    top: 4px;\n    left: 127px;\n}\n", ""]);

// exports


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DropTarget__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Visualizer__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PlaylistShade__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AddMenu__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__RemoveMenu__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SelectionMenu__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MiscMenu__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ListMenu__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__PlaylistResizeTarget__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__PlaylistActionArea__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__TrackList__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ScrollBar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__css_playlist_window_css__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__css_playlist_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__css_playlist_window_css__);























class PlaylistWindow extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleDrop", (e, targetCoords) => {
      const top = e.clientY - targetCoords.y;
      const atIndex = Object(__WEBPACK_IMPORTED_MODULE_8__utils__["d" /* clamp */])(this.props.offset + Math.round((top - 23) / __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* TRACK_HEIGHT */]), 0, this.props.maxTrackIndex + 1);
      this.props.loadFilesFromReferences(e, atIndex);
    });
  }

  render() {
    const _this$props = this.props,
          skinPlaylistStyle = _this$props.skinPlaylistStyle,
          focusPlaylist = _this$props.focusPlaylist,
          focused = _this$props.focused,
          playlistSize = _this$props.playlistSize,
          playlistWindowPixelSize = _this$props.playlistWindowPixelSize,
          playlistShade = _this$props.playlistShade,
          close = _this$props.close,
          toggleShade = _this$props.toggleShade,
          analyser = _this$props.analyser;

    if (playlistShade) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__PlaylistShade__["a" /* default */], null);
    }

    const style = {
      color: skinPlaylistStyle.normal,
      backgroundColor: skinPlaylistStyle.normalbg,
      fontFamily: `${skinPlaylistStyle.font}, Arial, sans-serif`,
      height: `${playlistWindowPixelSize.height}px`,
      width: `${playlistWindowPixelSize.width}px`
    };
    const classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()("window", "draggable", {
      selected: focused === __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].PLAYLIST,
      wide: playlistSize[0] > 2
    });
    const showSpacers = playlistSize[0] % 2 === 0;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__DropTarget__["a" /* default */], {
      id: "playlist-window",
      className: classes,
      style: style,
      onMouseDown: focusPlaylist,
      handleDrop: this._handleDrop,
      onWheel: this.props.scrollVolume
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top draggable",
      onDoubleClick: toggleShade
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-left draggable"
    }), showSpacers && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-left-spacer draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-left-fill draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-title draggable"
    }), showSpacers && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-right-spacer draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-right-fill draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-top-right draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-shade-button",
      onClick: toggleShade
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-close-button",
      onClick: close
    }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle-left draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle-center"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__TrackList__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-middle-right draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__ScrollBar__["a" /* default */], null))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom-left draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__AddMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__RemoveMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SelectionMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__MiscMenu__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom-center draggable"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-bottom-right draggable"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-visualizer",
      onClick: this.props.toggleVisualizerStyle
    },
    /* TODO: Resize the visualizer so it fits */
    false && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Visualizer__["a" /* default */], {
      analyser: analyser
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__PlaylistActionArea__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__ListMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-scroll-up-button",
      onClick: this.props.scrollUpFourTracks
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "playlist-scroll-down-button",
      onClick: this.props.scrollDownFourTracks
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__PlaylistResizeTarget__["a" /* default */], null))));
  }

}

const mapDispatchToProps = {
  focusPlaylist: () => ({
    type: __WEBPACK_IMPORTED_MODULE_5__actionTypes__["O" /* SET_FOCUSED_WINDOW */],
    window: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].PLAYLIST
  }),
  close: () => Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["d" /* closeWindow */])("playlist"),
  toggleShade: __WEBPACK_IMPORTED_MODULE_6__actionCreators__["S" /* togglePlaylistShadeMode */],
  toggleVisualizerStyle: __WEBPACK_IMPORTED_MODULE_6__actionCreators__["V" /* toggleVisualizerStyle */],
  scrollUpFourTracks: __WEBPACK_IMPORTED_MODULE_6__actionCreators__["y" /* scrollUpFourTracks */],
  scrollDownFourTracks: __WEBPACK_IMPORTED_MODULE_6__actionCreators__["w" /* scrollDownFourTracks */],
  loadFilesFromReferences: (e, startIndex) => Object(__WEBPACK_IMPORTED_MODULE_6__actionCreators__["i" /* loadFilesFromReferences */])(e.dataTransfer.files, null, startIndex),
  scrollVolume: __WEBPACK_IMPORTED_MODULE_6__actionCreators__["z" /* scrollVolume */]
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        duration = state.media.duration,
        trackOrder = state.playlist.trackOrder;
  return {
    offset: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["l" /* getScrollOffset */])(state),
    maxTrackIndex: trackOrder.length - 1,
    playlistWindowPixelSize: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["x" /* getWindowPixelSize */])(state, "playlist"),
    focused,
    skinPlaylistStyle: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["n" /* getSkinPlaylistStyle */])(state),
    playlistSize: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["A" /* getWindowSize */])(state, "playlist"),
    playlistShade: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["z" /* getWindowShade */])(state, "playlist"),
    duration
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PlaylistWindow));

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CharacterString__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PlaylistResizeTarget__ = __webpack_require__(97);











class PlaylistShade extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  _addedWidth() {
    return this.props.playlistSize[0] * __WEBPACK_IMPORTED_MODULE_6__constants__["p" /* WINDOW_RESIZE_SEGMENT_WIDTH */];
  }

  _trimmedName() {
    const name = this.props.name;

    if (name == null) {
      return "[No file]";
    }

    const MIN_NAME_WIDTH = 205;
    const nameLength = (MIN_NAME_WIDTH + this._addedWidth()) / __WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CHARACTER_WIDTH */];
    return name.length > nameLength ? name.slice(0, nameLength - 1) + __WEBPACK_IMPORTED_MODULE_6__constants__["j" /* UTF8_ELLIPSIS */] : name;
  }

  _time() {
    const _this$props = this.props,
          length = _this$props.length,
          name = _this$props.name;
    return name == null ? "" : Object(__WEBPACK_IMPORTED_MODULE_4__utils__["i" /* getTimeStr */])(length);
  }

  render() {
    const _this$props2 = this.props,
          toggleShade = _this$props2.toggleShade,
          close = _this$props2.close,
          focusPlaylist = _this$props2.focusPlaylist,
          focused = _this$props2.focused;
    const style = {
      width: `${__WEBPACK_IMPORTED_MODULE_6__constants__["q" /* WINDOW_WIDTH */] + this._addedWidth()}px`
    };
    const classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()("window", "draggable", {
      selected: focused === __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].PLAYLIST
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-window-shade",
      className: classes,
      style: {
        width: style.width
      },
      onMouseDown: focusPlaylist,
      onDoubleClick: toggleShade
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "left"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "right draggable"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-shade-track-title"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CharacterString__["a" /* default */], null, this._trimmedName())), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-shade-time"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CharacterString__["a" /* default */], null, this._time())), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__PlaylistResizeTarget__["a" /* default */], {
      widthOnly: true
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-shade-button",
      onClick: toggleShade
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "playlist-close-button",
      onClick: close
    }))));
  }

}

const mapDispatchToProps = {
  focusPlaylist: () => ({
    type: __WEBPACK_IMPORTED_MODULE_5__actionTypes__["O" /* SET_FOCUSED_WINDOW */],
    window: __WEBPACK_IMPORTED_MODULE_6__constants__["m" /* WINDOWS */].PLAYLIST
  }),
  close: () => Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["d" /* closeWindow */])("playlist"),
  toggleShade: () => Object(__WEBPACK_IMPORTED_MODULE_7__actionCreators__["S" /* togglePlaylistShadeMode */])()
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        length = state.media.length;
  return {
    focused,
    playlistSize: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["A" /* getWindowSize */])(state, "playlist"),
    trackOrder: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["g" /* getOrderedTracks */])(state),
    length,
    name: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["e" /* getMinimalMediaText */])(state)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(PlaylistShade));

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);







class ResizeTarget extends __WEBPACK_IMPORTED_MODULE_4_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty___default()(this, "handleMouseDown", e => {
      // Prevent dragging from highlighting text.
      e.preventDefault();

      const _this$props$currentSi = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_slicedToArray___default()(this.props.currentSize, 2),
            width = _this$props$currentSi[0],
            height = _this$props$currentSi[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      };

      const handleMove = ee => {
        const x = ee.clientX - mouseStart.x;
        const y = ee.clientY - mouseStart.y;
        const newWidth = Math.max(0, width + Math.round(x / __WEBPACK_IMPORTED_MODULE_6__constants__["p" /* WINDOW_RESIZE_SEGMENT_WIDTH */]));
        const newHeight = this.props.widthOnly ? width : Math.max(0, height + Math.round(y / __WEBPACK_IMPORTED_MODULE_6__constants__["o" /* WINDOW_RESIZE_SEGMENT_HEIGHT */]));
        const newSize = [newWidth, newHeight];
        this.props.setWindowSize(newSize);
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMove);
      });
    });
  }

  render() {
    /* eslint-disable no-unused-vars */
    const _this$props = this.props,
          currentSize = _this$props.currentSize,
          setWindowSize = _this$props.setWindowSize,
          widthOnly = _this$props.widthOnly,
          passThroughProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["currentSize", "setWindowSize", "widthOnly"]);
    /* eslint-enable no-unused-vars */


    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
      ref: node => this.node = node,
      onMouseDown: this.handleMouseDown
    }, passThroughProps));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ResizeTarget;

ResizeTarget.propTypes = {
  currentSize: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number).isRequired,
  setWindowSize: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired,
  widthOnly: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileUtils__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PlaylistMenu__ = __webpack_require__(32);






const el = document.createElement("input");
el.type = "file";
const DIR_SUPPORT = typeof el.webkitdirectory !== "undefined" || typeof el.mozdirectory !== "undefined" || typeof el.directory !== "undefined";
/* eslint-disable no-alert */

const AddMenu = ({
  nextIndex,
  addFilesAtIndex,
  addDirAtIndex
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PlaylistMenu__["a" /* default */], {
  id: "playlist-add-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "add-url",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "add-dir",
  onClick: () => addDirAtIndex(nextIndex)
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "add-file",
  onClick: () => addFilesAtIndex(nextIndex)
}));

const mapStateToProps = state => ({
  nextIndex: Object(__WEBPACK_IMPORTED_MODULE_2__selectors__["o" /* getTrackCount */])(state)
});

const mapDispatchToProps = dispatch => ({
  addFilesAtIndex: async nextIndex => {
    const fileReferences = await Object(__WEBPACK_IMPORTED_MODULE_4__fileUtils__["e" /* promptForFileReferences */])();
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["a" /* addTracksFromReferences */])(fileReferences, null, nextIndex));
  },
  addDirAtIndex: async nextIndex => {
    if (!DIR_SUPPORT) {
      alert("Not supported in your browser");
      return;
    }

    const fileReferences = await Object(__WEBPACK_IMPORTED_MODULE_4__fileUtils__["e" /* promptForFileReferences */])({
      directory: true
    });
    dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["a" /* addTracksFromReferences */])(fileReferences, null, nextIndex));
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(AddMenu));

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__ = __webpack_require__(32);




/* eslint-disable no-alert */

const RemoveMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__["a" /* default */], {
  id: "playlist-remove-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "remove-misc",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "remove-all",
  onClick: props.removeAll
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "crop",
  onClick: props.crop
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "remove-selected",
  onClick: props.removeSelected
}));

const mapDispatchToProps = {
  removeSelected: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["u" /* removeSelectedTracks */],
  removeAll: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["t" /* removeAllTracks */],
  crop: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["e" /* cropPlaylist */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(RemoveMenu));

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__ = __webpack_require__(32);





const SelectionMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__["a" /* default */], {
  id: "playlist-selection-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "invert-selection",
  onClick: props.invertSelection
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "select-zero",
  onClick: props.selectZero
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "select-all",
  onClick: props.selectAll
}));

const mapDispatchToProps = {
  invertSelection: () => ({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["k" /* INVERT_SELECTION */]
  }),
  selectAll: () => ({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["D" /* SELECT_ALL */]
  }),
  selectZero: () => ({
    type: __WEBPACK_IMPORTED_MODULE_2__actionTypes__["E" /* SELECT_ZERO */]
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(SelectionMenu));

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PlaylistMenu__ = __webpack_require__(32);






/* eslint-disable no-alert */

/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */

const SortContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__["a" /* default */], {
  style: {
    width: "100%",
    height: "100%"
  },
  top: true,
  handle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null)
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Sort list by title",
  onClick: props.sortListByTitle
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["a" /* Hr */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Reverse list",
  onClick: props.reverseList
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  label: "Randomize list",
  onClick: props.randomizeList
}));

const ConnectedSortContextMenu = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, {
  reverseList: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["v" /* reverseList */],
  randomizeList: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["s" /* randomizeList */],
  sortListByTitle: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["M" /* sortListByTitle */]
})(SortContextMenu);

const MiscOptionsContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__["a" /* default */], {
  style: {
    width: "100%",
    height: "100%"
  },
  top: true,
  handle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null)
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.downloadHtmlPlaylist,
  label: "Generate HTML playlist"
}));

const ConnectedMiscOptionsContextMenu = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, {
  downloadHtmlPlaylist: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["f" /* downloadHtmlPlaylist */]
})(MiscOptionsContextMenu);

const MiscMenu = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PlaylistMenu__["a" /* default */], {
  id: "playlist-misc-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "sort-list",
  onClick: e => e.stopPropagation()
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ConnectedSortContextMenu, null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "file-info",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "misc-options",
  onClick: e => e.stopPropagation()
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ConnectedMiscOptionsContextMenu, null)));

/* harmony default export */ __webpack_exports__["a"] = (MiscMenu);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__ = __webpack_require__(32);




/* eslint-disable no-alert */

const ListMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlaylistMenu__["a" /* default */], {
  id: "playlist-list-menu"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "new-list",
  onClick: props.removeAllTracks
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "save-list",
  onClick: () => alert("Not supported in Webamp")
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "load-list",
  onClick: () => alert("Not supported in Webamp")
}));

const mapDispatchToProps = {
  removeAllTracks: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["t" /* removeAllTracks */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(ListMenu));

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MiniTime__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunningTimeDisplay__ = __webpack_require__(224);






const PlaylistWindow = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunningTimeDisplay__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-action-buttons"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-previous-button",
  onClick: props.previous
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-play-button",
  onClick: props.play
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-pause-button",
  onClick: props.pause
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-stop-button",
  onClick: props.stop
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-next-button",
  onClick: props.next
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-eject-button",
  onClick: props.openMediaFileDialog
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MiniTime__["a" /* default */], null));

const mapDispatchToProps = {
  play: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["q" /* play */],
  pause: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["p" /* pause */],
  stop: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["N" /* stop */],
  openMediaFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["n" /* openMediaFileDialog */],
  next: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["k" /* next */],
  previous: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["r" /* previous */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(PlaylistWindow));

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterString__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(5);



 // While all the browsers I care about support String.prototype.padEnd,
// Not all node versions do, and I want tests to pass in Jest...
// Sigh.

function rightPad(str, len, fillChar) {
  while (str.length < len) {
    str += fillChar;
  }

  return str;
}

const RunningTimeDisplay = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-running-time-display draggable"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterString__["a" /* default */], null, rightPad(props.runningTimeMessage, 18, " "))));

const mapStateToProps = state => ({
  runningTimeMessage: Object(__WEBPACK_IMPORTED_MODULE_3__selectors__["k" /* getRunningTimeMessage */])(state)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(RunningTimeDisplay));

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TrackCell__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TrackTitle__ = __webpack_require__(227);











function getNumberLength(number) {
  return number.toString().length;
}

class TrackList extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_handleMoveClick", e => {
      if (!this._node) {
        return;
      }

      const _this$_node$getBoundi = this._node.getBoundingClientRect(),
            top = _this$_node$getBoundi.top,
            bottom = _this$_node$getBoundi.bottom,
            left = _this$_node$getBoundi.left,
            right = _this$_node$getBoundi.right;

      const mouseStart = e.clientY;
      let lastDiff = 0;

      const handleMouseMove = ee => {
        const y = ee.clientY,
              x = ee.clientX;

        if (y < top || y > bottom || x < left || x > right) {
          // Mouse is outside the track list
          return;
        }

        const proposedDiff = Math.floor((y - mouseStart) / __WEBPACK_IMPORTED_MODULE_5__constants__["i" /* TRACK_HEIGHT */]);

        if (proposedDiff !== lastDiff) {
          const diffDiff = proposedDiff - lastDiff;
          this.props.dragSelected(diffDiff);
          lastDiff = proposedDiff;
        }
      };

      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
      window.addEventListener("mousemove", handleMouseMove);
    });
  }

  _renderTracks(format) {
    return this.props.trackIds.map((id, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TrackCell__["a" /* default */], {
      key: id,
      id: id,
      index: this.props.offset + i,
      handleMoveClick: this._handleMoveClick
    }, format(id, i)));
  }

  render() {
    const _this$props = this.props,
          tracks = _this$props.tracks,
          offset = _this$props.offset;
    const maxTrackNumberLength = getNumberLength(this.props.numberOfTracks);

    const paddedTrackNumForIndex = i => (i + 1 + offset).toString().padStart(maxTrackNumberLength, "\u00A0");

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      ref: node => {
        this._node = node;
      },
      className: "playlist-tracks",
      style: {
        height: "100%"
      },
      onClick: this.props.selectZero,
      onWheel: this.props.scrollPlaylistByDelta
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-track-titles"
    }, this._renderTracks((id, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TrackTitle__["a" /* default */], {
      id: id,
      paddedTrackNumber: paddedTrackNumForIndex(i)
    }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: "playlist-track-durations"
    }, this._renderTracks(id => Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* getTimeStr */])(tracks[id].duration))));
  }

}

const mapDispatchToProps = {
  selectZero: () => ({
    type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["E" /* SELECT_ZERO */]
  }),
  dragSelected: __WEBPACK_IMPORTED_MODULE_7__actionCreators__["h" /* dragSelected */],
  scrollPlaylistByDelta: __WEBPACK_IMPORTED_MODULE_7__actionCreators__["x" /* scrollPlaylistByDelta */]
};

const mapStateToProps = state => ({
  offset: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["l" /* getScrollOffset */])(state),
  trackIds: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["s" /* getVisibleTrackIds */])(state),
  tracks: state.playlist.tracks,
  numberOfTracks: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["f" /* getNumberOfTracks */])(state)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(TrackList));

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(5);







class TrackCell extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(...args) {
    super(...args);

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()(this, "_onMouseDown", e => {
      if (e.shiftKey) {
        this.props.shiftClick(e);
        return;
      } else if (e.metaKey || e.ctrlKey) {
        this.props.ctrlClick(e);
        return;
      }

      if (!this.props.selected) {
        this.props.click(e);
      }

      this.props.handleMoveClick(e);
    });
  }

  render() {
    const _this$props = this.props,
          skinPlaylistStyle = _this$props.skinPlaylistStyle,
          selected = _this$props.selected,
          current = _this$props.current,
          children = _this$props.children,
          onDoubleClick = _this$props.onDoubleClick;
    const style = {
      backgroundColor: selected ? skinPlaylistStyle.selectedbg : null,
      color: current ? skinPlaylistStyle.current : null
    };
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()("track-cell", {
        selected,
        current
      }),
      style: style,
      onClick: e => e.stopPropagation(),
      onMouseDown: this._onMouseDown,
      onContextMenu: e => e.preventDefault(),
      onDoubleClick: onDoubleClick
    }, children);
  }

}

const mapStateToProps = (state, ownProps) => {
  const tracks = state.playlist.tracks;
  const current = Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["a" /* getCurrentTrackId */])(state) === ownProps.id;
  const track = tracks[ownProps.id];
  return {
    skinPlaylistStyle: Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["n" /* getSkinPlaylistStyle */])(state),
    selected: track.selected,
    current
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  shiftClick: e => {
    e.preventDefault();
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["_0" /* SHIFT_CLICKED_TRACK */],
      index: ownProps.index
    });
  },
  ctrlClick: e => {
    e.preventDefault();
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["h" /* CTRL_CLICKED_TRACK */],
      index: ownProps.index
    });
  },
  click: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["e" /* CLICKED_TRACK */],
    index: ownProps.index
  }),
  onDoubleClick: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["w" /* PLAY_TRACK */],
    id: ownProps.id
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(TrackCell));

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(5);




const TrackTitle = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, props.paddedTrackNumber, ". ", props.title);

const mapStateToProps = (state, ownProps) => ({
  title: Object(__WEBPACK_IMPORTED_MODULE_2__selectors__["p" /* getTrackDisplayName */])(state, ownProps.id)
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(TrackTitle));

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(5);






const Handle = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "playlist-scrollbar-handle"
});

const ScrollBar = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
  className: "playlist-scrollbar",
  type: "range",
  min: 0,
  max: 100,
  step: 1,
  value: props.playlistScrollPosition,
  onChange: props.setPlaylistScrollPosition,
  vertical: true,
  handle: Handle,
  disabled: props.allTracksAreVisible
});

const mapDispatchToProps = {
  setPlaylistScrollPosition: position => Object(__WEBPACK_IMPORTED_MODULE_3__actionCreators__["H" /* setPlaylistScrollPosition */])(100 - position)
};

const mapStateToProps = state => ({
  playlistScrollPosition: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["i" /* getPlaylistScrollPosition */])(state),
  allTracksAreVisible: Object(__WEBPACK_IMPORTED_MODULE_4__selectors__["s" /* getVisibleTrackIds */])(state).length === state.playlist.length
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(ScrollBar));

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(230), __esModule: true };

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(231);
module.exports = __webpack_require__(22).Object.assign;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(33);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(233) });


/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(41);
var gOPS = __webpack_require__(58);
var pIE = __webpack_require__(43);
var toObject = __webpack_require__(105);
var IObject = __webpack_require__(103);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(35)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(235);
var toAbsoluteIndex = __webpack_require__(236);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(54);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(54);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(238), __esModule: true };

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(239);
__webpack_require__(245);
module.exports = __webpack_require__(65).f('iterator');


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(240)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(107)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(54);
var defined = __webpack_require__(53);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(63);
var descriptor = __webpack_require__(40);
var setToStringTag = __webpack_require__(64);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(23)(IteratorPrototype, __webpack_require__(28)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var anObject = __webpack_require__(34);
var getKeys = __webpack_require__(41);

module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(13).document;
module.exports = document && document.documentElement;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(105);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(246);
var global = __webpack_require__(13);
var hide = __webpack_require__(23);
var Iterators = __webpack_require__(62);
var TO_STRING_TAG = __webpack_require__(28)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(247);
var step = __webpack_require__(248);
var Iterators = __webpack_require__(62);
var toIObject = __webpack_require__(27);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(107)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(250), __esModule: true };

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(251);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
module.exports = __webpack_require__(22).Symbol;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(13);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(26);
var $export = __webpack_require__(33);
var redefine = __webpack_require__(108);
var META = __webpack_require__(252).KEY;
var $fails = __webpack_require__(35);
var shared = __webpack_require__(56);
var setToStringTag = __webpack_require__(64);
var uid = __webpack_require__(42);
var wks = __webpack_require__(28);
var wksExt = __webpack_require__(65);
var wksDefine = __webpack_require__(66);
var enumKeys = __webpack_require__(253);
var isArray = __webpack_require__(254);
var anObject = __webpack_require__(34);
var isObject = __webpack_require__(25);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(52);
var createDesc = __webpack_require__(40);
var _create = __webpack_require__(63);
var gOPNExt = __webpack_require__(255);
var $GOPD = __webpack_require__(110);
var $DP = __webpack_require__(24);
var $keys = __webpack_require__(41);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(109).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(43).f = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(61)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(23)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(42)('meta');
var isObject = __webpack_require__(25);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(24).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(35)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(41);
var gOPS = __webpack_require__(58);
var pIE = __webpack_require__(43);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(104);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(27);
var gOPN = __webpack_require__(109).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 256 */
/***/ (function(module, exports) {



/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66)('asyncIterator');


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66)('observable');


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(261);
module.exports = __webpack_require__(22).Object.setPrototypeOf;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(33);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(262).set });


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(25);
var anObject = __webpack_require__(34);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(99)(Function.call, __webpack_require__(110).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265);
var $Object = __webpack_require__(22).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(33);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(63) });


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = (0, _extends3['default'])({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return _react2['default'].createElement('div', { className: className, style: elStyle });
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(111);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(59);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(60);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(67);

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(268);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(272);

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(273);

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(274);

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(112);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        _this.onEnd();
        _this.removeDocumentEvents();
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) {
        var step = props.step,
            max = props.max,
            min = props.min;

        (0, _warning2['default'])(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.componentDidMount = function componentDidMount() {
      // Snapshot testing cannot handle refs, so be sure to null-check this.
      this.document = this.sliderRef && this.sliderRef.ownerDocument;
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    ComponentEnhancer.prototype.focus = function focus() {
      if (!this.props.disabled) {
        this.handlesRefs[0].focus();
      }
    };

    ComponentEnhancer.prototype.blur = function blur() {
      if (!this.props.disabled) {
        this.handlesRefs[0].blur();
      }
    };

    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };

    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      var pixelOffset = position - this.getSliderStart();
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          maximumTrackStyle = _props3.maximumTrackStyle,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, _classNames[prefixCls + '-with-marks'] = Object.keys(marks).length, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-vertical'] = vertical, _classNames[className] = className, _classNames));
      return _react2['default'].createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        _react2['default'].createElement('div', {
          className: prefixCls + '-rail',
          style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
        }),
        tracks,
        _react2['default'].createElement(_Steps2['default'], {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        _react2['default'].createElement(_Marks2['default'], {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(269);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(270);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(271);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(47);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(68);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends3['default'])({ bottom: offset }, dotStyle) : (0, _extends3['default'])({ left: offset }, dotStyle);
    if (isActived) {
      style = (0, _extends3['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[prefixCls + '-dot'] = true, _classNames[prefixCls + '-dot-active'] = isActived, _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[className + '-text'] = true, _classNames[className + '-text-active'] = isActive, _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(111);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(59);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(60);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(67);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3['default'])(this, Handle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.focus = function focus() {
    this.handle.focus();
  };

  Handle.prototype.blur = function blur() {
    this.handle.blur();
  };

  Handle.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        tabIndex = _props.tabIndex,
        restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = (0, _extends3['default'])({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = (0, _extends3['default'])({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }
    return _react2['default'].createElement('div', (0, _extends3['default'])({
      ref: function ref(node) {
        return _this2.handle = node;
      },
      role: 'slider',
      tabIndex: tabIndex || 0
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./playlist-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./playlist-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #playlist-window {\n    display: flex;\n    flex-direction: column;\n}\n\n#webamp .playlist-top {\n    width: 100%;\n    min-height: 20px;\n    max-height: 20px;\n    position: relative;\n    display: flex;\n}\n\n#webamp .playlist-top-left {\n    width: 25px;\n}\n\n#webamp .playlist-top-left-spacer {\n    width: 12px;\n}\n\n#webamp .playlist-top-left-fill {\n    flex-grow: 1;\n    background-position: right;\n}\n\n#webamp .playlist-top-right-spacer {\n    /* This goes to the right of the center */\n    width: 13px;\n}\n\n#webamp .playlist-top-right-fill {\n    flex-grow: 1;\n    background-position: right;\n}\n\n#webamp .playlist-top-title {\n    width: 100px;\n}\n\n#webamp .playlist-top-right {\n    width: 25px;\n}\n\n#webamp .playlist-middle {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n}\n\n#webamp .playlist-middle-left {\n    background-repeat: repeat-y;\n    width: 12px;\n    min-width: 12px;\n}\n\n#webamp .playlist-middle-center {\n    flex-grow: 1;\n    padding: 3px 0;\n    min-width: 0; /* Not sure why this is needed */\n}\n\n#webamp .playlist-tracks {\n    display: flex;\n    flex: 1 0 auto;\n}\n\n#webamp .playlist-tracks .track-cell {\n    height: 13px;\n    line-height: 13px;\n    font-size: 9px;\n    letter-spacing: 0.5px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp .playlist-track-durations > div {\n    padding-right: 3px;\n    text-align: right;\n}\n\n#webamp .playlist-track-titles {\n    flex: 1 1 auto;\n    overflow: hidden;\n}\n\n#webamp .playlist-track-titles > div {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n#webamp .playlist-middle-right {\n    background-repeat: repeat-y;\n    background-position: top right;\n    width: 20px;\n    min-width: 20px;\n    position: relative;\n    padding-bottom: 18px;\n}\n\n#webamp .playlist-scrollbar {\n    height: 100%;\n    width: 8px;\n    margin-left: 5px;\n}\n\n#webamp .playlist-scrollbar-handle {\n    width: 8x;\n    height: 18px;\n}\n\n#webamp .playlist-bottom {\n    width: 100%;\n    height: 38px;\n    min-height: 38px;\n    max-height: 38px;\n    position: relative;\n}\n\n#webamp .playlist-bottom-left {\n    width: 125px;\n    height: 100%;\n    position: absolute;\n}\n\n#webamp .playlist-menu li {\n    list-style: none;\n    display: none;\n    width: 22px;\n    height: 18px;\n    padding: 0;\n    margin: 0;\n}\n\n#webamp .playlist-menu li > div {\n    height: 100%;\n}\n\n#webamp .playlist-menu ul {\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n}\n\n#webamp .playlist-menu.selected li {\n    display: block;\n}\n\n#webamp .playlist-menu .bar {\n    position: absolute;\n    bottom: 0;\n    left: -3px;\n    width: 3px;\n    height: 54px;\n}\n\n#webamp #playlist-add-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 14px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-remove-menu.playlist-menu .bar {\n    height: 72px;\n}\n\n#webamp #playlist-remove-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 43px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-selection-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 72px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-misc-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 101px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-list-menu {\n    position: absolute;\n    bottom: 12px;\n    right: 22px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp .playlist-bottom-right {\n    width: 150px;\n    height: 100%;\n    position: absolute;\n    right: 0;\n}\n\n#webamp .playlist-running-time-display {\n    position: absolute;\n    top: 10px;\n    left: 7px;\n    height: 10px;\n}\n\n#webamp .playlist-action-buttons {\n    position: absolute;\n    top: 22px;\n    left: 3px;\n    display: flex;\n}\n\n#webamp .playlist-action-buttons > div {\n    height: 10px;\n    width: 10px;\n}\n\n#webamp #playlist-window .playlist-visualizer {\n    width: 75px;\n    height: 100%;\n    position: absolute;\n    right: 150px;\n    display: none; /* Only show if the window is wide enough */\n}\n\n#webamp #playlist-window.wide .playlist-visualizer {\n    display: block;\n}\n\n#webamp #playlist-window .mini-time {\n    position: absolute;\n    top: 23px;\n    left: 66px;\n}\n\n#webamp #playlist-window #playlist-resize-target {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    height: 20px;\n    width: 20px;\n}\n\n#webamp #playlist-close-button {\n    position: absolute;\n    right: 2px;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #playlist-shade-button {\n    position: absolute;\n    right: 12px;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #playlist-window-shade {\n    height: 14px;\n}\n\n#webamp #playlist-window-shade .left {\n    height: 14px;\n    background-repeat: no-repeat;\n}\n\n#webamp #playlist-window-shade .right {\n    height: 14px;\n    background-repeat: no-repeat;\n    background-position-x: right;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button,\n#webamp #playlist-window #playlist-scroll-down-button {\n    position: absolute;\n    width: 8px;\n    height: 5px;\n    right: 7px;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button {\n    top: 2px;\n}\n#webamp #playlist-window #playlist-scroll-down-button {\n    top: 8px;\n}\n\n#webamp #playlist-window-shade #playlist-resize-target {\n    position: absolute;\n    right: 20px;\n    top: 3px;\n    height: 9px;\n    width: 9px;\n}\n\n#webamp #playlist-shade-track-title {\n    position: absolute;\n    top: 4px;\n    left: 5px;\n}\n\n#webamp #playlist-shade-time {\n    position: absolute;\n    top: 4px;\n    right: 30px;\n}\n\n#webamp #playlist-window #visualizer {\n    position: absolute;\n    /* TODO: These numbers are not quite right */\n    top: 10px;\n    left: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Band__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EqOn__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EqAuto__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__EqGraph__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PresetsContextMenu__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__EqualizerShade__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_equalizer_window_css__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_equalizer_window_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__css_equalizer_window_css__);
















const bandClassName = band => `band-${band}`;

const EqualizerWindow = props => {
  const doubled = props.doubled,
        selected = props.selected,
        shade = props.shade;
  const className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
    selected,
    doubled,
    shade,
    window: true,
    draggable: true
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-window",
    className: className,
    onMouseDown: props.focusWindow,
    onWheel: props.scrollVolume
  }, props.shade ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__EqualizerShade__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "equalizer-top title-bar draggable",
    onDoubleClick: props.toggleEqualizerShadeMode
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-shade",
    onClick: props.toggleEqualizerShadeMode
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-close",
    onClick: props.closeEqualizerWindow
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EqOn__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__EqAuto__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__EqGraph__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__PresetsContextMenu__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Band__["a" /* default */], {
    id: "preamp",
    band: "preamp",
    onChange: props.setPreampValue
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "plus12db",
    onClick: props.setEqToMax
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "zerodb",
    onClick: props.setEqToMid
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "minus12db",
    onClick: props.setEqToMin
  }), __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* BANDS */].map(hertz => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Band__["a" /* default */], {
    key: hertz,
    id: bandClassName(hertz),
    band: hertz,
    onChange: props.setHertzValue(hertz)
  }))));
};

EqualizerWindow.propTypes = {
  doubled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  shade: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
}; // This does not use the shorthand object syntax becuase `setHertzValue` needs
// to return a function.

const mapDispatchToProps = dispatch => ({
  focusWindow: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_6__actionTypes__["O" /* SET_FOCUSED_WINDOW */],
    window: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].EQUALIZER
  }),
  setPreampValue: value => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["I" /* setPreamp */])(value)),
  setEqToMin: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["G" /* setEqToMin */])()),
  setEqToMid: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["F" /* setEqToMid */])()),
  setEqToMax: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["E" /* setEqToMax */])()),
  setHertzValue: hertz => value => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["D" /* setEqBand */])(hertz, value)),
  closeEqualizerWindow: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["d" /* closeWindow */])("equalizer")),
  toggleEqualizerShadeMode: () => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["Q" /* toggleEqualizerShadeMode */])()),
  scrollVolume: e => dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["z" /* scrollVolume */])(e))
});

const mapStateToProps = state => ({
  doubled: state.display.doubled,
  selected: state.windows.focused === __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* WINDOWS */].EQUALIZER,
  shade: Object(__WEBPACK_IMPORTED_MODULE_7__selectors__["z" /* getWindowShade */])(state, "equalizer")
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqualizerWindow));

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);




const MAX_VALUE = 100; // Given a value between 1-100, return the sprite number (0-27)

const spriteNumber = value => {
  const percent = value / 100;
  return Math.round(percent * 27);
};
/* unused harmony export spriteNumber */
 // Given a sprite number, return the x,y

const spriteOffsets = number => {
  const x = number % 14;
  const y = Math.floor(number / 14);
  return {
    x,
    y
  };
};
/* unused harmony export spriteOffsets */


const Handle = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  className: "rc-slider-handle"
});

const Band = ({
  value,
  backgroundPosition,
  id,
  onChange,
  handleMouseDown,
  handleMouseUp
}) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  id: id,
  className: "band",
  style: {
    backgroundPosition
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
  type: "range",
  min: 0,
  max: MAX_VALUE,
  step: 1,
  value: MAX_VALUE - value,
  vertical: true,
  onChange: onChange,
  onBeforeChange: handleMouseDown,
  onAfterChange: handleMouseUp,
  handle: Handle
}));

const mapStateToProps = (state, ownProps) => {
  const value = state.equalizer.sliders[ownProps.band];

  const _spriteOffsets = spriteOffsets(spriteNumber(value)),
        x = _spriteOffsets.x,
        y = _spriteOffsets.y;

  const xOffset = x * 15; // Each sprite is 15px wide

  const yOffset = y * 65; // Each sprite is 15px tall

  const backgroundPosition = `-${xOffset}px -${yOffset}px`;
  return {
    id: ownProps.id,
    value,
    backgroundPosition
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMouseDown: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["H" /* SET_BAND_FOCUS */],
    input: "eq",
    bandFocused: ownProps.band
  }),
  handleMouseUp: () => dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["_13" /* UNSET_FOCUS */]
  })
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Band));

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(2);





const EqOn = props => {
  const className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.on
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "on",
    className: className,
    onClick: props.toggleEq
  });
};

const mapStateToProps = state => ({
  on: state.equalizer.on
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, {
  toggleEq: __WEBPACK_IMPORTED_MODULE_3__actionCreators__["P" /* toggleEq */]
})(EqOn));

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionTypes__ = __webpack_require__(3);





const EqAuto = props => {
  const className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    selected: props.auto
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "auto",
    className: className,
    onClick: props.toggleAuto
  });
};

const toggleAuto = () => dispatch => {
  // We don't support auto.
  dispatch({
    type: __WEBPACK_IMPORTED_MODULE_3__actionTypes__["K" /* SET_EQ_AUTO */],
    value: false
  });
};

const mapDispatchToProps = {
  toggleAuto
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state => ({
  auto: state.equalizer.auto
}), mapDispatchToProps)(EqAuto));

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(4);







class EqGraph extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.width = this.canvas.width * 1; // Cast to int

    this.height = this.canvas.height * 1; // Cast to int

    if (this.props.lineColorsImage) {
      this.createColorPattern(this.props.lineColorsImage);
    }

    if (this.props.preampLineUrl) {
      this.createPreampLineImage(this.props.preampLineUrl);
    }
  }

  componentDidUpdate() {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
    this.drawPreampLine();
    this.drawEqLine(); // This should paint on top of the preamp line
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lineColorsImage !== nextProps.lineColorsImage) {
      this.createColorPattern(nextProps.lineColorsImage);
    }

    if (this.props.preampLineUrl !== nextProps.preampLineUrl) {
      this.createPreampLineImage(nextProps.preampLineUrl);
    }

    return true;
  }

  createPreampLineImage(preampLineUrl) {
    const preampLineImg = new Image();

    preampLineImg.onload = () => {
      this.setState({
        preampLineImg
      });
    };

    preampLineImg.src = preampLineUrl;
  }

  createColorPattern(lineColorsImage) {
    const bgImage = new Image();

    bgImage.onload = () => {
      const colorsCanvas = document.createElement("canvas");
      const colorsCtx = colorsCanvas.getContext("2d");
      colorsCanvas.width = bgImage.width * 2;
      colorsCanvas.height = bgImage.height * 2;
      colorsCtx.drawImage(bgImage, 0, 0, colorsCanvas.width, colorsCanvas.height);
      this.setState({
        colorPattern: this.canvasCtx.createPattern(colorsCanvas, "repeat-x")
      });
    };

    bgImage.src = lineColorsImage;
  }

  drawEqLine() {
    if (!this.state.colorPattern) {
      // The skin has not finished loading yet
      return;
    }

    const props = this.props;
    const amplitudes = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* BANDS */].map(band => props[band]);
    this.canvasCtx.strokeStyle = this.state.colorPattern;
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.beginPath();
    const paddingLeft = 4; // TODO: This should be 3

    const min = 1;
    const max = 31;
    const points = amplitudes.reduce((prev, value, i) => {
      const percent = (100 - value) / 100;
      const y = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["s" /* percentToRange */])(percent, min, max);
      return prev.concat(paddingLeft + i * 16, y);
    }, []); // Spline between points in order to create nice curves

    const tension = 0.5;
    const resolution = 4; // Points in each segment

    const smoothPoints = Object(__WEBPACK_IMPORTED_MODULE_3_cardinal_spline_js__["getCurvePoints"])(points, tension, resolution);

    for (let i = 0; i < smoothPoints.length; i += 2) {
      // Splining can push peaks out of bounds. So we fudge them back in.
      const y = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* clamp */])(smoothPoints[i + 1], min, max);
      this.canvasCtx.lineTo(smoothPoints[i], y);
    }

    this.canvasCtx.stroke();
  }

  drawPreampLine() {
    const preampLineImg = this.state.preampLineImg;

    if (!preampLineImg) {
      // The skin has not finished loading yet
      return;
    }

    const preampValue = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["s" /* percentToRange */])(this.props.preamp / 100, 0, 30);
    this.canvasCtx.drawImage(this.state.preampLineImg, 0, preampValue, preampLineImg.width * 2, preampLineImg.height * 2);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
      id: "eqGraph",
      ref: node => this.canvas = node,
      width: "152",
      height: "32"
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(state => __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, state.equalizer.sliders, {
  lineColorsImage: state.display.skinImages.EQ_GRAPH_LINE_COLORS,
  preampLineUrl: state.display.skinImages.EQ_PREAMP_LINE
}))(EqGraph));

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

/*	Curve calc function for canvas 2.3.8
 *	(c) Epistemex 2013-2018
 *	www.epistemex.com
 *	License: MIT
 */
function getCurvePoints(h,t,f,c){if(typeof h==="undefined"||h.length<2){return new Float32Array(0)}t=typeof t==="number"?t:0.5;f=typeof f==="number"?f:25;var j,d=1,e=h.length,n=0,m=(e-2)*f+2+(c?2*f:0),k=new Float32Array(m),a=new Float32Array((f+2)<<2),b=4;j=h.slice(0);if(c){j.unshift(h[e-1]);j.unshift(h[e-2]);j.push(h[0],h[1])}else{j.unshift(h[1]);j.unshift(h[0]);j.push(h[e-2],h[e-1])}a[0]=1;for(;d<f;d++){var o=d/f,p=o*o,r=p*o,q=r*2,s=p*3;a[b++]=q-s+1;a[b++]=s-q;a[b++]=r-2*p+o;a[b++]=r-p}a[++b]=1;g(j,a,e,t);if(c){j=[];j.push(h[e-4],h[e-3],h[e-2],h[e-1],h[0],h[1],h[2],h[3]);g(j,a,4,t)}function g(G,z,B,M){for(var A=2,H;A<B;A+=2){var C=G[A],D=G[A+1],E=G[A+2],F=G[A+3],I=(E-G[A-2])*M,J=(F-G[A-1])*M,K=(G[A+4]-C)*M,L=(G[A+5]-D)*M,u=0,v,w,x,y;for(H=0;H<f;H++){v=z[u++];w=z[u++];x=z[u++];y=z[u++];k[n++]=v*C+w*E+x*I+y*K;k[n++]=v*D+w*F+x*J+y*L}}}e=c?0:h.length-2;k[n++]=h[e++];k[n]=h[e];return k}if(true){exports.getCurvePoints=getCurvePoints};

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__ = __webpack_require__(51);






const PresetsContextMenu = props => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContextMenuTarget__["a" /* default */], {
  top: true,
  id: "presets-context",
  handle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "presets"
  })
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.openEqfFileDialog,
  label: "Load"
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContextMenu__["c" /* Node */], {
  onClick: props.downloadPreset,
  label: "Save"
}));

const mapDispatchToProps = {
  openEqfFileDialog: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["m" /* openEqfFileDialog */],
  downloadPreset: __WEBPACK_IMPORTED_MODULE_2__actionCreators__["g" /* downloadPreset */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(PresetsContextMenu));

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Volume__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Balance__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actionCreators__ = __webpack_require__(2);







const EqualizerShade = props => {
  const volume = props.volume,
        balance = props.balance;
  const classes = ["left", "center", "right"];
  const eqVolumeClassName = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["t" /* segment */])(0, 100, volume, classes);
  const eqBalanceClassName = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["t" /* segment */])(-100, 100, balance, classes);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "draggable",
    onDoubleClick: props.toggleEqualizerShadeMode,
    style: {
      width: "100%",
      height: "100%"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-shade",
    onClick: props.toggleEqualizerShadeMode
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "equalizer-close",
    onClick: props.closeWindow
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Volume__["a" /* default */], {
    id: "equalizer-volume",
    className: eqVolumeClassName
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Balance__["a" /* default */], {
    id: "equalizer-balance",
    className: eqBalanceClassName
  }));
};

const mapDispatchToProps = {
  closeWindow: () => Object(__WEBPACK_IMPORTED_MODULE_5__actionCreators__["d" /* closeWindow */])("equalizer"),
  toggleEqualizerShadeMode: __WEBPACK_IMPORTED_MODULE_5__actionCreators__["Q" /* toggleEqualizerShadeMode */]
};

const mapStateToProps = state => ({
  volume: state.media.volume,
  balance: state.media.balance
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EqualizerShade));

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./equalizer-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./equalizer-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #equalizer-window {\n    height: 116px;\n    width: 275px;\n}\n\n#webamp #equalizer-window.shade {\n    height: 14px;\n}\n\n#webamp #equalizer-volume {\n    position: absolute;\n    left: 61px;\n    top: 4px;\n    height: 6px;\n    width: 97px;\n    background-position: 0 0;\n}\n\n#webamp #equalizer-volume::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-volume::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-balance {\n    position: absolute;\n    left: 164px;\n    top: 4px;\n    height: 6px;\n    width: 43px;\n    background-position: 0 0;\n}\n\n#webamp #equalizer-balance::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-balance::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp .equalizer-top {\n    height: 14px;\n    width: 275px;\n    position: relative;\n}\n\n#webamp #equalizer-close {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 264px;\n    top: 3px;\n}\n\n#webamp #equalizer-shade {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 254px;\n    top: 3px;\n}\n\n#webamp #on {\n    position: absolute;\n    width: 26px;\n    height: 12px;\n    top: 18px;\n    left: 14px;\n}\n\n#webamp #auto {\n    position: absolute;\n    width: 32px;\n    height: 12px;\n    top: 18px;\n    left: 40px;\n}\n\n#webamp #presets-context {\n    position: absolute;\n    width: 44px;\n    height: 12px;\n    top: 18px;\n    left: 217px;\n}\n\n#webamp #presets {\n    width: 100%;\n    height: 100%;\n}\n\n#webamp #eqGraph {\n    position: absolute;\n    width: 113px;\n    height: 19px;\n    top: 17px;\n    left: 86px;\n}\n\n#webamp #preamp {\n    position: absolute;\n    left: 21px;\n    top: 38px;\n}\n\n#webamp #plus12db {\n    position: absolute;\n    left: 45px;\n    top: 36px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #zerodb {\n    position: absolute;\n    left: 45px;\n    top: 64px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #minus12db {\n    position: absolute;\n    left: 45px;\n    top: 95px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #band-60 {\n    position: absolute;\n    left: 78px;\n    top: 38px;\n}\n\n#webamp #band-170 {\n    position: absolute;\n    left: 96px;\n    top: 38px;\n}\n\n#webamp #band-310 {\n    position: absolute;\n    left: 114px;\n    top: 38px;\n}\n\n#webamp #band-600 {\n    position: absolute;\n    left: 132px;\n    top: 38px;\n}\n\n#webamp #band-1000 {\n    position: absolute;\n    left: 150px;\n    top: 38px;\n}\n\n#webamp #band-3000 {\n    position: absolute;\n    left: 168px;\n    top: 38px;\n}\n\n#webamp #band-6000 {\n    position: absolute;\n    left: 186px;\n    top: 38px;\n}\n\n#webamp #band-12000 {\n    position: absolute;\n    left: 204px;\n    top: 38px;\n}\n\n#webamp #band-14000 {\n    position: absolute;\n    left: 222px;\n    top: 38px;\n}\n\n#webamp #band-16000 {\n    position: absolute;\n    left: 240px;\n    top: 38px;\n}\n\n#webamp .band {\n    width: 14px;\n    height: 63px;\n}\n\n#webamp .band .rc-slider {\n    height: 51px;\n    width: 14px;\n    margin-top: 6px;\n}\n\n#webamp .band .rc-slider .rc-slider-handle {\n    width: 11px;\n    height: 11px;\n    margin: -6px 0 0 1px;\n    position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skinSelectors__ = __webpack_require__(289);

// Dynamically set the css background images for all the sprites





const CSS_PREFIX = "#webamp";
const mapRegionNamesToIds = {
  normal: "mainWindowClipPath",
  windowshade: "shadeMainWindowClipPath",
  equalizer: "equalizerWindowClipPath",
  equalizerws: "shadeEqualizerWindowClipPath"
};
const mapRegionNamesToMatcher = {
  normal: "#main-window:not(.shade)",
  windowshade: "#main-window.shade",
  equalizer: "#equalizer-window:not(.shade)",
  equalizerws: "#equalizer-window.shade"
};

const numExIsUsed = skinImages => !!skinImages.DIGIT_0_EX;

class Css extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  componentWillMount() {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "webamp-skin";
    document.head.appendChild(style);
    this.style = style;
  }

  componentWillUnmount() {
    this.style.remove();
    this.style = null;
  }

  render() {
    return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"])(this.props.children, this.style);
  }

}

class ClipPaths extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
  componentWillMount() {
    const paths = document.createElement("div");
    document.body.appendChild(paths);
    this.paths = paths;
  }

  componentWillUnmount() {
    this.paths.remove();
    this.paths = null;
  }

  render() {
    // this.props.children should be an object containing arrays of strings. The
    // keys are ids, and the arrays are arrays of polygon point strings
    const children = this.props.children;
    return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
      height: 0,
      width: 0
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", null, Object.keys(children).map(id => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
      id: id,
      key: id
    }, children[id].map((points, i) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polygon", {
      points: points,
      key: i
    })))))), this.paths);
  }

}

const FALLBACKS = {
  MAIN_BALANCE_BACKGROUND: "MAIN_VOLUME_BACKGROUND",
  MAIN_BALANCE_THUMB: "MAIN_VOLUME_THUMB",
  MAIN_BALANCE_THUMB_ACTIVE: "MAIN_VOLUME_THUMB_SELECTED"
};

const Skin = props => {
  const skinImages = props.skinImages,
        skinCursors = props.skinCursors,
        skinGenLetterWidths = props.skinGenLetterWidths;

  if (!skinImages || !skinCursors) {
    return null;
  }

  const cssRules = [];
  Object.keys(__WEBPACK_IMPORTED_MODULE_5__skinSelectors__["b" /* imageSelectors */]).forEach(imageName => {
    const imageUrl = skinImages[imageName] || skinImages[FALLBACKS[imageName]];

    if (imageUrl) {
      __WEBPACK_IMPORTED_MODULE_5__skinSelectors__["b" /* imageSelectors */][imageName].forEach(selector => {
        cssRules.push(`${CSS_PREFIX} ${selector} {background-image: url(${imageUrl})}`);
      });
    }
  });

  if (skinGenLetterWidths != null) {
    __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* LETTERS */].forEach(letter => {
      const width = skinGenLetterWidths[`GEN_TEXT_${letter}`];
      const selectedWidth = skinGenLetterWidths[`GEN_TEXT_SELECTED_${letter}`];
      cssRules.push(`${CSS_PREFIX} .gen-text-${letter.toLowerCase()} {width: ${width}px;}`);
      cssRules.push(`${CSS_PREFIX} .selected .gen-text-${letter.toLowerCase()} {width: ${selectedWidth}px;}`);
    });
  }

  Object.keys(__WEBPACK_IMPORTED_MODULE_5__skinSelectors__["a" /* cursorSelectors */]).forEach(cursorName => {
    const cursorUrl = skinCursors[cursorName];

    if (cursorUrl) {
      __WEBPACK_IMPORTED_MODULE_5__skinSelectors__["a" /* cursorSelectors */][cursorName].forEach(selector => {
        cssRules.push(`${// TODO: Fix this hack
        // Maybe our CSS name spacing should be based on some other class/id
        // than the one we use for defining the main div.
        // That way it could be shared by both the player and the context menu.
        selector.startsWith("#webamp-context-menu") ? "" : CSS_PREFIX} ${selector} {cursor: url(${cursorUrl}), auto}`);
      });
    }
  });

  if (numExIsUsed(skinImages)) {
    // This alternate number file requires that the minus sign be
    // formatted differently.
    cssRules.push(`${CSS_PREFIX} .status #time #minus-sign { top: 0px; left: -1px; width: 9px; height: 13px; }`);
  }

  const clipPaths = {};

  for (const _ref of Object.entries(props.skinRegion)) {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_ref, 2);

    const regionName = _ref2[0];
    const polygons = _ref2[1];

    if (polygons) {
      const matcher = mapRegionNamesToMatcher[regionName];
      const id = mapRegionNamesToIds[regionName];
      clipPaths[id] = polygons;
      cssRules.push(`${CSS_PREFIX} ${matcher} { clip-path: url(#${id}); }`);
    }
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Css, null, cssRules.join("\n")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ClipPaths, null, clipPaths));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(state => ({
  skinImages: state.display.skinImages,
  skinCursors: state.display.skinCursors,
  skinRegion: state.display.skinRegion,
  skinGenLetterWidths: state.display.skinGenLetterWidths
}))(Skin));

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skinSprites__ = __webpack_require__(88);


const imageSelectors = {
  MAIN_BALANCE_BACKGROUND: ["#balance"],
  MAIN_BALANCE_THUMB: ["#balance::-webkit-slider-thumb", "#balance::-moz-range-thumb"],
  MAIN_BALANCE_THUMB_ACTIVE: ["#balance::-webkit-slider-thumb:active", "#balance::-moz-range-thumb:active"],
  MAIN_PREVIOUS_BUTTON: [".actions #previous"],
  MAIN_PREVIOUS_BUTTON_ACTIVE: [".actions #previous:active"],
  MAIN_PLAY_BUTTON: [".actions #play"],
  MAIN_PLAY_BUTTON_ACTIVE: [".actions #play:active"],
  MAIN_PAUSE_BUTTON: [".actions #pause"],
  MAIN_PAUSE_BUTTON_ACTIVE: [".actions #pause:active"],
  MAIN_STOP_BUTTON: [".actions #stop"],
  MAIN_STOP_BUTTON_ACTIVE: [".actions #stop:active"],
  MAIN_NEXT_BUTTON: [".actions #next"],
  MAIN_NEXT_BUTTON_ACTIVE: [".actions #next:active"],
  MAIN_EJECT_BUTTON: ["#eject"],
  MAIN_EJECT_BUTTON_ACTIVE: ["#eject:active"],
  MAIN_WINDOW_BACKGROUND: ["#main-window"],
  MAIN_STEREO: [".media-info #stereo", ".stop .media-info #stereo.selected"],
  MAIN_STEREO_SELECTED: [".media-info #stereo.selected"],
  MAIN_MONO: [".media-info #mono", ".stop .media-info #mono.selected"],
  MAIN_MONO_SELECTED: [".media-info #mono.selected"],
  NO_MINUS_SIGN: ["#time #minus-sign"],
  MINUS_SIGN: ["#time.countdown #minus-sign"],
  DIGIT_0: [".digit-0"],
  DIGIT_1: [".digit-1"],
  DIGIT_2: [".digit-2"],
  DIGIT_3: [".digit-3"],
  DIGIT_4: [".digit-4"],
  DIGIT_5: [".digit-5"],
  DIGIT_6: [".digit-6"],
  DIGIT_7: [".digit-7"],
  DIGIT_8: [".digit-8"],
  DIGIT_9: [".digit-9"],
  NO_MINUS_SIGN_EX: ["#time #minus-sign"],
  MINUS_SIGN_EX: ["#time.countdown #minus-sign"],
  DIGIT_0_EX: [".digit-0"],
  DIGIT_1_EX: [".digit-1"],
  DIGIT_2_EX: [".digit-2"],
  DIGIT_3_EX: [".digit-3"],
  DIGIT_4_EX: [".digit-4"],
  DIGIT_5_EX: [".digit-5"],
  DIGIT_6_EX: [".digit-6"],
  DIGIT_7_EX: [".digit-7"],
  DIGIT_8_EX: [".digit-8"],
  DIGIT_9_EX: [".digit-9"],
  MAIN_PLAYING_INDICATOR: [".play #play-pause"],
  MAIN_PAUSED_INDICATOR: [".pause #play-pause"],
  MAIN_STOPPED_INDICATOR: [".stop #play-pause"],
  MAIN_NOT_WORKING_INDICATOR: ["#work-indicator"],
  MAIN_WORKING_INDICATOR: ["#work-indicator.selected"],
  PLAYLIST_TOP_TILE: [".playlist-top-left-fill", ".playlist-top-left-spacer", ".playlist-top-right-fill", ".playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_CORNER: [".playlist-top-left"],
  PLAYLIST_TITLE_BAR: [".playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER: [".playlist-top-right"],
  PLAYLIST_TOP_TILE_SELECTED: [".selected .playlist-top-left-fill", ".selected .playlist-top-left-spacer", ".selected .playlist-top-right-fill", ".selected .playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_SELECTED: [".selected .playlist-top-left"],
  PLAYLIST_TITLE_BAR_SELECTED: [".selected .playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER_SELECTED: [".selected .playlist-top-right"],
  PLAYLIST_LEFT_TILE: [".playlist-middle-left"],
  PLAYLIST_RIGHT_TILE: [".playlist-middle-right"],
  PLAYLIST_SCROLL_HANDLE: [".playlist-scrollbar-handle"],
  PLAYLIST_SCROLL_HANDLE_SELECTED: [".playlist-scrollbar-handle:active"],
  PLAYLIST_BOTTOM_TILE: [".playlist-bottom"],
  PLAYLIST_BOTTOM_LEFT_CORNER: [".playlist-bottom-left"],
  PLAYLIST_BOTTOM_RIGHT_CORNER: [".playlist-bottom-right"],
  PLAYLIST_VISUALIZER_BACKGROUND: [".playlist-visualizer"],
  PLAYLIST_SHADE_BACKGROUND: ["#playlist-window-shade"],
  PLAYLIST_SHADE_BACKGROUND_LEFT: ["#playlist-window-shade .left"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT: ["#playlist-window-shade .right"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED: ["#playlist-window-shade.selected .right"],
  PLAYLIST_ADD_MENU_BAR: ["#playlist-add-menu.selected .bar"],
  PLAYLIST_ADD_URL: ["#playlist-add-menu .add-url"],
  PLAYLIST_ADD_URL_SELECTED: ["#playlist-add-menu .hover .add-url"],
  PLAYLIST_ADD_DIR: ["#playlist-add-menu .add-dir"],
  PLAYLIST_ADD_DIR_SELECTED: ["#playlist-add-menu .hover .add-dir"],
  PLAYLIST_ADD_FILE: ["#playlist-add-menu .add-file"],
  PLAYLIST_ADD_FILE_SELECTED: ["#playlist-add-menu .hover .add-file"],
  PLAYLIST_REMOVE_MENU_BAR: ["#playlist-remove-menu.selected .bar"],
  PLAYLIST_REMOVE_ALL: ["#playlist-remove-menu .remove-all"],
  PLAYLIST_REMOVE_ALL_SELECTED: ["#playlist-remove-menu .hover .remove-all"],
  PLAYLIST_CROP: ["#playlist-remove-menu .crop"],
  PLAYLIST_CROP_SELECTED: ["#playlist-remove-menu .hover .crop"],
  PLAYLIST_REMOVE_SELECTED: ["#playlist-remove-menu .remove-selected"],
  PLAYLIST_REMOVE_SELECTED_SELECTED: ["#playlist-remove-menu .hover .remove-selected"],
  PLAYLIST_REMOVE_MISC: ["#playlist-remove-menu .remove-misc"],
  PLAYLIST_REMOVE_MISC_SELECTED: ["#playlist-remove-menu .hover .remove-misc"],
  PLAYLIST_SELECT_MENU_BAR: ["#playlist-selection-menu.selected .bar"],
  PLAYLIST_INVERT_SELECTION: ["#playlist-selection-menu .invert-selection"],
  PLAYLIST_INVERT_SELECTION_SELECTED: ["#playlist-selection-menu .hover .invert-selection"],
  PLAYLIST_SELECT_ZERO: ["#playlist-selection-menu .select-zero"],
  PLAYLIST_SELECT_ZERO_SELECTED: ["#playlist-selection-menu .hover .select-zero"],
  PLAYLIST_SELECT_ALL: ["#playlist-selection-menu .select-all"],
  PLAYLIST_SELECT_ALL_SELECTED: ["#playlist-selection-menu .hover .select-all"],
  PLAYLIST_CLOSE_SELECTED: ["#playlist-close-button:active"],
  PLAYLIST_COLLAPSE_SELECTED: ["#playlist-window #playlist-shade-button:active"],
  PLAYLIST_EXPAND_SELECTED: ["#playlist-window-shade #playlist-shade-button:active"],
  PLAYLIST_MISC_MENU_BAR: ["#playlist-misc-menu.selected .bar"],
  PLAYLIST_MISC_OPTIONS: ["#playlist-misc-menu .misc-options"],
  PLAYLIST_MISC_OPTIONS_SELECTED: ["#playlist-misc-menu .hover .misc-options"],
  PLAYLIST_FILE_INFO: ["#playlist-misc-menu .file-info"],
  PLAYLIST_FILE_INFO_SELECTED: ["#playlist-misc-menu .hover .file-info"],
  PLAYLIST_SORT_LIST: ["#playlist-misc-menu .sort-list"],
  PLAYLIST_SORT_LIST_SELECTED: ["#playlist-misc-menu .hover .sort-list"],
  PLAYLIST_LIST_BAR: ["#playlist-list-menu.selected .bar"],
  PLAYLIST_NEW_LIST: ["#playlist-list-menu .new-list"],
  PLAYLIST_NEW_LIST_SELECTED: ["#playlist-list-menu .hover .new-list"],
  PLAYLIST_LOAD_LIST: ["#playlist-list-menu .load-list"],
  PLAYLIST_LOAD_LIST_SELECTED: ["#playlist-list-menu .hover .load-list"],
  PLAYLIST_SAVE_LIST: ["#playlist-list-menu .save-list"],
  PLAYLIST_SAVE_LIST_SELECTED: ["#playlist-list-menu .hover .save-list"],
  EQ_WINDOW_BACKGROUND: ["#equalizer-window:not(.shade)"],
  EQ_TITLE_BAR: [".equalizer-top"],
  EQ_TITLE_BAR_SELECTED: [".selected .equalizer-top"],
  EQ_SLIDER_BACKGROUND: [".band"],
  EQ_SLIDER_THUMB: [".band .rc-slider-handle"],
  // But the "active" pseudo selector on the parent, since clicking
  // anywhere on the track moves the slider.
  EQ_SLIDER_THUMB_SELECTED: [".band .rc-slider:active .rc-slider-handle"],
  EQ_ON_BUTTON: ["#on"],
  EQ_ON_BUTTON_DEPRESSED: ["#on:active"],
  EQ_ON_BUTTON_SELECTED: ["#on.selected"],
  EQ_ON_BUTTON_SELECTED_DEPRESSED: ["#on.selected:active"],
  EQ_AUTO_BUTTON: ["#auto"],
  EQ_AUTO_BUTTON_DEPRESSED: ["#auto:active"],
  EQ_AUTO_BUTTON_SELECTED: ["#auto.selected"],
  EQ_AUTO_BUTTON_SELECTED_DEPRESSED: ["#auto.selected:active"],
  EQ_GRAPH_BACKGROUND: ["#eqGraph"],
  EQ_PRESETS_BUTTON: ["#presets"],
  EQ_PRESETS_BUTTON_SELECTED: ["#presets:active"],
  EQ_PREAMP_LINE: ["#preamp-line"],
  EQ_SHADE_BACKGROUND: ["#equalizer-window.shade"],
  EQ_SHADE_BACKGROUND_SELECTED: ["#equalizer-window.shade.selected"],
  EQ_SHADE_VOLUME_SLIDER_LEFT: ["#equalizer-volume.left::-webkit-slider-thumb", "#equalizer-volume.left::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_CENTER: ["#equalizer-volume.center::-webkit-slider-thumb", "#equalizer-volume.center::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_RIGHT: ["#equalizer-volume.right::-webkit-slider-thumb", "#equalizer-volume.right::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_LEFT: ["#equalizer-balance.left::-webkit-slider-thumb", "#equalizer-balance.left::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_CENTER: ["#equalizer-balance.center::-webkit-slider-thumb", "#equalizer-balance.center::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_RIGHT: ["#equalizer-balance.right::-webkit-slider-thumb", "#equalizer-balance.right::-moz-range-thumb"],
  EQ_MAXIMIZE_BUTTON_ACTIVE: ["#equalizer-shade:active"],
  EQ_MINIMIZE_BUTTON_ACTIVE: ["#equalizer-window.shade #equalizer-shade:active"],
  EQ_CLOSE_BUTTON: ["#equalizer-window.selected #equalizer-close"],
  EQ_CLOSE_BUTTON_ACTIVE: ["#equalizer-window #equalizer-close:active"],
  MAIN_POSITION_SLIDER_BACKGROUND: ["#position"],
  MAIN_POSITION_SLIDER_THUMB: ["#position::-webkit-slider-thumb", "#position::-moz-range-thumb"],
  MAIN_POSITION_SLIDER_THUMB_SELECTED: ["#position:active::-webkit-slider-thumb", "#position:active::-moz-range-thumb"],
  MAIN_SHUFFLE_BUTTON: ["#shuffle"],
  MAIN_SHUFFLE_BUTTON_DEPRESSED: ["#shuffle:active"],
  MAIN_SHUFFLE_BUTTON_SELECTED: ["#shuffle.selected"],
  MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED: ["#shuffle.selected:active"],
  MAIN_REPEAT_BUTTON: ["#repeat"],
  MAIN_REPEAT_BUTTON_DEPRESSED: ["#repeat:active"],
  MAIN_REPEAT_BUTTON_SELECTED: ["#repeat.selected"],
  MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED: ["#repeat.selected:active"],
  MAIN_EQ_BUTTON: ["#equalizer-button"],
  MAIN_EQ_BUTTON_SELECTED: ["#equalizer-button.selected"],
  MAIN_EQ_BUTTON_DEPRESSED: ["#equalizer-button:active"],
  MAIN_EQ_BUTTON_DEPRESSED_SELECTED: ["#equalizer-button.selected:active"],
  MAIN_PLAYLIST_BUTTON: ["#playlist-button"],
  MAIN_PLAYLIST_BUTTON_SELECTED: ["#playlist-button.selected"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED: ["#playlist-button:active"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED: ["#playlist-button.selected:active"],
  MAIN_TITLE_BAR: ["#title-bar"],
  MAIN_TITLE_BAR_SELECTED: [".selected #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR: [".llama #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR_SELECTED: [".llama.selected #title-bar"],
  MAIN_OPTIONS_BUTTON: [".selected #title-bar #option.clicked"],
  MAIN_OPTIONS_BUTTON_DEPRESSED: [".selected #title-bar #option:active", ".selected #title-bar #option.selected"],
  MAIN_MINIMIZE_BUTTON: [".selected #title-bar #minimize.clicked"],
  MAIN_MINIMIZE_BUTTON_DEPRESSED: [".selected #title-bar #minimize:active"],
  MAIN_SHADE_BUTTON: [".selected #title-bar #shade.clicked"],
  MAIN_SHADE_BUTTON_DEPRESSED: [".selected #title-bar #shade:active"],
  MAIN_CLOSE_BUTTON: [".selected #title-bar #close.clicked"],
  MAIN_CLOSE_BUTTON_DEPRESSED: [".selected #title-bar #close:active"],
  MAIN_CLUTTER_BAR_BACKGROUND: ["#clutter-bar"],
  MAIN_CLUTTER_BAR_BACKGROUND_DISABLED: ["#clutter-bar.disabled"],
  MAIN_CLUTTER_BAR_BUTTON_O_SELECTED: ["#button-o:active", "#button-0.selected"],
  MAIN_CLUTTER_BAR_BUTTON_A_SELECTED: ["#button-a:active", "#button-a.selected"],
  MAIN_CLUTTER_BAR_BUTTON_I_SELECTED: ["#button-i:active", "#button-i.selected"],
  MAIN_CLUTTER_BAR_BUTTON_D_SELECTED: ["#button-d:active", "#button-d.selected"],
  MAIN_CLUTTER_BAR_BUTTON_V_SELECTED: ["#button-v:active", "#button-v.selected"],
  MAIN_SHADE_BACKGROUND: [".shade #title-bar"],
  MAIN_SHADE_BACKGROUND_SELECTED: [".shade.selected #title-bar"],
  MAIN_SHADE_BUTTON_SELECTED: [".shade.selected #title-bar #shade"],
  MAIN_SHADE_BUTTON_SELECTED_DEPRESSED: [".shade #title-bar #shade:active"],
  MAIN_SHADE_POSITION_BACKGROUND: [".shade #position"],
  MAIN_SHADE_POSITION_THUMB: [".shade #position::-moz-range-thumb", ".shade #position::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_LEFT: [".shade #position.left::-moz-range-thumb", ".shade #position.left::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_RIGHT: [".shade #position.right::-moz-range-thumb", ".shade #position.right::-webkit-slider-thumb"],
  MAIN_VOLUME_BACKGROUND: ["#volume"],
  MAIN_VOLUME_THUMB: ["#volume input::-webkit-slider-thumb", "#volume input::-moz-range-thumb"],
  MAIN_VOLUME_THUMB_SELECTED: ["#volume input::-webkit-slider-thumb:active", "#volume input::-moz-range-thumb:active"],
  GEN_TOP_CENTER_FILL: [".gen-window .gen-top"],
  GEN_TOP_LEFT: [".gen-window .gen-top-left"],
  GEN_TOP_LEFT_END: [".gen-window .gen-top-left-end"],
  GEN_TOP_RIGHT: [".gen-window .gen-top-right"],
  GEN_TOP_RIGHT_END: [".gen-window .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL: [".gen-window .gen-top-left-fill", ".gen-window .gen-top-right-fill"],
  GEN_TOP_CENTER_FILL_SELECTED: [".gen-window.selected .gen-top"],
  GEN_TOP_LEFT_SELECTED: [".gen-window.selected .gen-top-left"],
  GEN_TOP_LEFT_END_SELECTED: [".gen-window.selected .gen-top-left-end"],
  GEN_TOP_RIGHT_SELECTED: [".gen-window.selected .gen-top-right"],
  GEN_TOP_RIGHT_END_SELECTED: [".gen-window.selected .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL_SELECTED: [".gen-window.selected .gen-top-left-fill", ".gen-window.selected .gen-top-right-fill"],
  GEN_BOTTOM_LEFT: [".gen-window .gen-bottom-left"],
  GEN_BOTTOM_RIGHT: [".gen-window .gen-bottom-right"],
  GEN_BOTTOM_FILL: [".gen-window .gen-bottom"],
  GEN_MIDDLE_LEFT: [".gen-window .gen-middle-left"],
  GEN_MIDDLE_LEFT_BOTTOM: [".gen-window .gen-middle-left-bottom"],
  GEN_MIDDLE_RIGHT: [".gen-window .gen-middle-right"],
  GEN_MIDDLE_RIGHT_BOTTOM: [".gen-window .gen-middle-right-bottom"],
  GEN_CLOSE_SELECTED: [".gen-window .gen-close:active"]
};
/* harmony export (immutable) */ __webpack_exports__["b"] = imageSelectors;

Object.keys(__WEBPACK_IMPORTED_MODULE_1__skinSprites__["a" /* FONT_LOOKUP */]).forEach(character => {
  const key = Object(__WEBPACK_IMPORTED_MODULE_1__skinSprites__["c" /* imageConstFromChar */])(character);
  const code = character.charCodeAt(0);
  imageSelectors[key] = [`.character-${code}`];
});
__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LETTERS */].forEach(character => {
  imageSelectors[`GEN_TEXT_${character}`] = [`.gen-text-${character.toLowerCase()}`];
  imageSelectors[`GEN_TEXT_SELECTED_${character}`] = [`.gen-window.selected .gen-text-${character.toLowerCase()}`];
});
const cursorSelectors = {
  CLOSE: ["#title-bar #close"],
  // This is not quite right. There are some areas that show this cursor
  // but are not clickable.
  EQSLID: ["#equalizer-window .band rc-slider"],
  EQNORMAL: ["#equalizer-window"],
  EQCLOSE: ["#equalizer-window #equalizer-close"],
  EQTITLE: ["#equalizer-window .title-bar", "#equalizer-window.shade", "#equalizer-window.shade input"],
  MAINMENU: ["#main-window #option", "#webamp-context-menu .context-menu"],
  MIN: ["#main-window #minimize"],
  NORMAL: [// Use this as the default cursor.
  ".window", ".window input", // Otherwise
  "#main-window", "#main-window.shade #title-bar"],
  MMENU: ["#main-window.shade #option"],
  PNORMAL: ["#playlist-window"],
  // TODO: This is should really only apply to the top part of the top.
  // The chrome around the playlist window is larger than others. The
  // cursor only applies to the same height as the other window's chrome.
  PTBAR: ["#playlist-window .playlist-top"],
  PCLOSE: ["#playlist-window #playlist-close-button", "#playlist-window-shade #playlist-close-button"],
  PWINBUT: ["#playlist-window #playlist-shade-button", "#playlist-window-shade #playlist-shade-button"],
  POSBAR: ["#main-window #position"],
  PSIZE: ["#playlist-window #playlist-resize-target"],
  PWSSIZE: ["#playlist-window-shade #playlist-resize-target"],
  PWSNORM: ["#playlist-window-shade"],
  // TODO: The target for this is not quite right.
  PVSCROLL: ["#playlist-window .playlist-scrollbar"],
  SONGNAME: ["#main-window #marquee"],
  TITLEBAR: ["#main-window #title-bar"],
  VOLBAL: ["#volume", "#volume input", "#balance"],
  WINBUT: ["#main-window #shade"],
  WSNORMAL: ["#main-window.shade #title-bar"],
  WSPOSBAR: ["#main-window.shade #position"]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cursorSelectors;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./webamp.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./webamp.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/* Rules used by all windows */\n\n#webamp {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n/* Prevent accidental highlighting */\n#webamp canvas {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp * {\n    /* Some environments globably change the box-sizing */\n    box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n}\n\n#webamp *:focus {\n    outline: 0;\n}\n\n/* Range input css reset */\n#webamp input[type=\"range\"] {\n    -webkit-appearance: none;\n    margin: 0;\n    padding: 0;\n    background: none;\n    border: none;\n}\n#webamp input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    border-radius: 0;\n    background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-thumb {\n    border: none;\n    border-radius: 0;\n    background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-track {\n    border: none;\n    background: none;\n}\n#webamp input[type=\"range\"]:focus {\n    outline: none;\n}\n#webamp input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n\n#webamp a:focus {\n    outline: none;\n}\n\n/* Animation */\n@keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n#webamp .character {\n    display: inline-block;\n    vertical-align: top;\n    width: 5px;\n    height: 6px;\n    /* background-image: TEXT.BMP via Javascript */\n    text-indent: -9999px;\n}\n\n#webamp .window {\n    position: absolute;\n    /* Ask the browser to scale showing large pixels if possible */\n    image-rendering: -moz-crisp-edges; /* Firefox */\n    image-rendering: -o-crisp-edges; /* Opera */\n    image-rendering: -webkit-optimize-contrast; /* Safari */\n    image-rendering: pixelated; /* Only in Chrome > 40 */\n    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp .window {\n    /* Work around rendering bug with clip-path */\n    -webkit-transform: translateZ(0);\n}\n#webamp .window.doubled {\n    -moz-transform: translateZ(0) scale(2);\n    -moz-transform-origin: top left;\n    -webkit-transform: translateZ(0) scale(2);\n    -webkit-transform-origin: top left;\n}\n", ""]);

// exports


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionCreators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["a"] = (function (dispatch) {
  let keylog = [];
  const trigger = [78, // N
  85, // U
  76, // L
  76, // L
  83, // S
  79, // O
  70, // F
  84 // T
  ];
  document.addEventListener("keydown", e => {
    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 68:
          // CTRL+D
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["O" /* toggleDoubleSizeMode */])());
          e.preventDefault(); // Supress the "Bookmark" action on windows.

          break;

        case 76:
          // CTRL+L FIXME
          break;

        case 82:
          // CTRL+R
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["v" /* reverseList */])());
          break;

        case 84:
          // CTRL+T
          dispatch({
            type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_9" /* TOGGLE_TIME_MODE */]
          });
          break;
      }
    } else if (e.altKey) {
      switch (e.keyCode) {
        case 87:
          // ALT+W
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["W" /* toggleWindow */])("main"));
          break;

        case 69:
          // ALT+E
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["W" /* toggleWindow */])("playlist"));
          break;

        case 71:
          // ALT+G
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["W" /* toggleWindow */])("equalizer"));
          break;
      }
    } else {
      switch (e.keyCode) {
        case 37:
          // left arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["A" /* seekBackward */])(5));
          break;

        case 38:
          // up arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(1));
          break;

        case 39:
          // right arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["B" /* seekForward */])(5));
          break;

        case 40:
          // down arrow
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(-1));
          break;

        case 66:
          // B
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["k" /* next */])());
          break;

        case 67:
          // C
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["p" /* pause */])());
          break;

        case 76:
          // L
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["n" /* openMediaFileDialog */])());
          break;

        case 82:
          // R
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["T" /* toggleRepeat */])());
          break;

        case 83:
          // S
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["U" /* toggleShuffle */])());
          break;

        case 86:
          // V
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["N" /* stop */])());
          break;

        case 88:
          // X
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["q" /* play */])());
          break;

        case 90:
          // Z
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["r" /* previous */])());
          break;

        case 96:
          // numpad 0
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["n" /* openMediaFileDialog */])());
          break;

        case 97:
          // numpad 1
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["l" /* nextN */])(-10));
          break;

        case 98:
          // numpad 2
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(-1));
          break;

        case 99:
          // numpad 3
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["l" /* nextN */])(10));
          break;

        case 100:
          // numpad 4
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["r" /* previous */])());
          break;

        case 101:
          // numpad 5
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["q" /* play */])());
          break;

        case 102:
          // numpad 6
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["k" /* next */])());
          break;

        case 103:
          // numpad 7
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["A" /* seekBackward */])(5));
          break;

        case 104:
          // numpad 8
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["b" /* adjustVolume */])(1));
          break;

        case 105:
          // numpad 9
          dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actionCreators__["B" /* seekForward */])(5));
          break;
      }
    } // Easter Egg
    // Ignore escape. Usually this gets swallowed by the browser, but not always.


    if (e.keyCode !== 27) {
      keylog.push(e.keyCode);
      keylog = keylog.slice(-8);

      if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* arraysAreEqual */])(keylog, trigger)) {
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["_6" /* TOGGLE_LLAMA_MODE */]
        });
      }
    }
  });
});

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elementSource__ = __webpack_require__(294);
/* Emulate the native <audio> element with Web Audio API */


 // import detectChannels from "./detectChannels";

class Media {
  constructor() {
    this._emitter = new __WEBPACK_IMPORTED_MODULE_1__emitter__["a" /* default */]();
    this._context = new (window.AudioContext || window.webkitAudioContext)(); // Fix for iOS and Chrome (Canary) which require that the context be created
    // or resumed by a user interaction.
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    // https://gist.github.com/laziel/7aefabe99ee57b16081c
    // Via: https://stackoverflow.com/a/43395068/1263117

    if (this._context.state === "suspended") {
      const resume = async () => {
        await this._context.resume();

        if (this._context.state === "running") {
          document.body.removeEventListener("touchend", resume, false);
          document.body.removeEventListener("click", resume, false);
          document.body.removeEventListener("keydown", resume, false);
        }
      };

      document.body.addEventListener("touchend", resume, false);
      document.body.addEventListener("click", resume, false);
      document.body.addEventListener("keydown", resume, false);
    } // We don't currently know how many channels


    this._channels = null;
    this._balance = 0; // The _source node has to be recreated each time it's stopped or
    // paused, so we don't create it here. Instead we create this dummy
    // node wich the real source will connect to.
    // TODO: Maybe we can get rid of this now that we are using AudioAbstraction?

    this._staticSource = this._context.createAnalyser(); // Just a noop node
    // Create the preamp node

    this._preamp = this._context.createGain(); // Create the spliter node

    this._chanSplit = this._context.createChannelSplitter(2); // Create the gains for left and right

    this._leftGain = this._context.createGain();
    this._rightGain = this._context.createGain(); // Create channel merge

    this._chanMerge = this._context.createChannelMerger(2); // Create the analyser node for the visualizer

    this._analyser = this._context.createAnalyser();
    this._analyser.fftSize = 2048; // don't smooth audio analysis

    this._analyser.smoothingTimeConstant = 0.0; // Create the gain node for the volume control

    this._gainNode = this._context.createGain(); // Connect all the nodes in the correct way
    // (Note, source is created and connected later)
    //
    //                <source>
    //                    |
    //                    |_____________
    //                    |             \
    //                <preamp>          |
    //                    |             | <-- Optional bypass
    //           [...biquadFilters]     |
    //                    |_____________/
    //                    |
    //    (split using createChannelSplitter)
    //                    |
    //                   / \
    //                  /   \
    //          <leftGain><rightGain>
    //                  \   /
    //                   \ /
    //                    |
    //     (merge using createChannelMerger)
    //                    |
    //               <chanMerge>
    //                    |
    //                    |\
    //                    | <analyser>
    //                  <gain>
    //                    |
    //              <destination>

    this._source = new __WEBPACK_IMPORTED_MODULE_2__elementSource__["a" /* default */](this._context, this._staticSource);

    this._source.on("positionChange", () => {
      this._emitter.trigger("timeupdate");
    });

    this._source.on("ended", () => {
      this._emitter.trigger("ended");
    });

    this._source.on("statusChange", () => {
      switch (this._source.getStatus()) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* MEDIA_STATUS */].PLAYING:
          this._emitter.trigger("playing");

          break;
      }

      this._emitter.trigger("timeupdate");
    });

    this._source.on("loaded", () => {
      this._emitter.trigger("fileLoaded");
    });

    this._staticSource.connect(this._preamp);

    let output = this._preamp;
    this.bands = {};
    __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* BANDS */].forEach((band, i) => {
      const filter = this._context.createBiquadFilter();

      this.bands[band] = filter;

      if (i === 0) {
        // The first filter, includes all lower frequencies
        filter.type = "lowshelf";
      } else if (i === band.length - 1) {
        // The last filter, includes all higher frequencies
        filter.type = "highshelf";
      } else {
        filter.type = "peaking";
      }

      filter.frequency.value = band;
      filter.gain.value = 0;
      output.connect(filter);
      output = filter;
    });
    output.connect(this._chanSplit); // Connect split channels to left / right gains

    this._chanSplit.connect(this._leftGain, 0);

    this._chanSplit.connect(this._rightGain, 1); // Reconnect the left / right gains to the merge node


    this._leftGain.connect(this._chanMerge, 0, 0);

    this._rightGain.connect(this._chanMerge, 0, 1);

    this._chanMerge.connect(this._gainNode);

    this._chanMerge.connect(this._analyser);

    this._gainNode.connect(this._context.destination);

    window.media = this;
  }

  _setChannels(num) {
    const assumedChannels = num == null ? 2 : num;

    this._chanSplit.disconnect();

    this._chanSplit.connect(this._leftGain, 0); // If we only have one channel, use it for both left and right.


    this._chanSplit.connect(this._rightGain, assumedChannels === 1 ? 0 : 1);

    this._channels = num;

    this._emitter.trigger("channelupdate");
  }

  getAnalyser() {
    return this._analyser;
  }
  /* Properties */


  duration() {
    return this._source.getDuration();
  }

  timeElapsed() {
    return this._source.getTimeElapsed();
  }

  timeRemaining() {
    return this.duration() - this.timeElapsed();
  }

  percentComplete() {
    return this.timeElapsed() / this.duration() * 100;
  }

  channels() {
    return this._channels == null ? 2 : this._channels;
  }

  sampleRate() {
    return this._source.getSampleRate();
  }
  /* Actions */


  async play() {
    await this._source.play();

    if (this._channels == null) {// Temporarily disabled https://github.com/captbaritone/webamp/issues/551

      /*
      detectChannels(this._staticSource)
        .then(channels => {
          this._setChannels(channels);
        })
        .catch(() => {
          this._setChannels(null);
        });
      */
    }
  }

  pause() {
    this._source.pause();
  }

  stop() {
    this._source.stop();
  }
  /* Actions with arguments */


  seekToPercentComplete(percent) {
    const seekTime = this.duration() * (percent / 100);
    this.seekToTime(seekTime);
  } // From 0-1


  setVolume(volume) {
    this._gainNode.gain.value = volume / 100;
  } // From 0-1


  setPreamp(value) {
    this._preamp.gain.value = value / 100;
  } // From -100 to 100


  setBalance(balance) {
    let changeVal = Math.abs(balance) / 100; // Hack for Firefox. Having either channel set to 0 seems to revert us
    // to equal balance.

    changeVal = changeVal - 0.00000001;

    if (balance > 0) {
      // Right
      this._leftGain.gain.value = 1 - changeVal;
      this._rightGain.gain.value = 1;
    } else if (balance < 0) {
      // Left
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1 - changeVal;
    } else {
      // Center
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1;
    }

    this._balance = balance;
  }

  setEqBand(band, value) {
    const db = value / 100 * 24 - 12;
    this.bands[band].gain.value = db;
  }

  disableEq() {
    this._staticSource.disconnect();

    this._staticSource.connect(this._chanSplit);
  }

  enableEq() {
    this._staticSource.disconnect();

    this._staticSource.connect(this._preamp);
  }
  /* Listeners */


  on(event, callback) {
    this._emitter.on(event, callback);
  }

  seekToTime(time) {
    this._source.seekToTime(time);
  } // Used only for the initial load, since it must have a CORS header


  async loadFromUrl(url, autoPlay) {
    this._emitter.trigger("waiting");

    await this._source.loadUrl(url);

    this._setChannels(null);

    this._emitter.trigger("stopWaiting");

    if (autoPlay) {
      this.play();
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Media;


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emitter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);



class ElementSource {
  on(eventType, cb) {
    return this._emitter.on(eventType, cb);
  }

  constructor(context, destination) {
    this._emitter = new __WEBPACK_IMPORTED_MODULE_0__emitter__["a" /* default */]();
    this._context = context;
    this._destination = destination;
    this._audio = document.createElement("audio");
    this._audio.crossOrigin = "anonymous";
    this._stalled = false;
    this._status = __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED;

    this._audio.addEventListener("suspend", () => {
      this._setStalled(true);
    });

    this._audio.addEventListener("durationchange", () => {
      this._emitter.trigger("loaded");

      this._setStalled(false);
    });

    this._audio.addEventListener("ended", () => {
      this._emitter.trigger("ended");

      this._setStatus(__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED);
    }); // TODO: Throttle to 50 (if needed)


    this._audio.addEventListener("timeupdate", () => {
      this._emitter.trigger("positionChange");
    });

    this._audio.addEventListener("error", e => {
      switch (this._audio.error.code) {
        case 1:
          // The fetching of the associated resource was aborted by the user's request.
          console.error("MEDIA_ERR_ABORTED", e);
          break;

        case 2:
          console.error("MEDIA_ERR_NETWORK", e); // Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.

          break;

        case 3:
          // Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.
          // There is a bug in Chrome where improperly terminated mp3s can cuase this error.
          // https://bugs.chromium.org/p/chromium/issues/detail?id=794782
          // Related: Commit f44e826c83c74fef04c2c448af30cfb353b28312
          console.error("PIPELINE_ERROR_DECODE", e);
          break;

        case 4:
          console.error("MEDIA_ERR_SRC_NOT_SUPPORTED", e); // The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.

          break;
      } // Rather than just geting stuck in this error state, we can just pretend this is
      // the end of the track.


      this._emitter.trigger("ended");

      this._setStatus(__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED);
    });

    this._source = this._context.createMediaElementSource(this._audio);

    this._source.connect(destination);
  }

  _setStalled(stalled) {
    this._stalled = stalled;

    this._emitter.trigger("stallChanged");
  }

  disconnect() {
    this._source.disconnect();
  } // Async for now, for compatibility with BufferAudioSource
  // TODO: This does not need to be async


  async loadUrl(url) {
    this._audio.src = url;
  }

  async play() {
    if (this._status !== __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PAUSED) {
      this.seekToTime(0);
    }

    try {
      await this._audio.play();
    } catch (err) {//
    }

    this._setStatus(__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PLAYING);
  }

  pause() {
    this._audio.pause();

    this._setStatus(__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].PAUSED);
  }

  stop() {
    this._audio.pause();

    this._audio.currentTime = 0;

    this._setStatus(__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* MEDIA_STATUS */].STOPPED);
  }

  seekToTime(time) {
    /* TODO: We could check if this is actually seekable:
    const { seekable } = this._audio;
    for (let i = 0; i < seekable.length; i++) {
      console.log("start", seekable.start(i), "end", seekable.end(i));
    }
    */
    this._audio.currentTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* clamp */])(time, 0, this.getDuration());

    this._emitter.trigger("positionChange");
  }

  getStalled() {
    return this._stalled;
  }

  getStatus() {
    return this._status;
  }

  getDuration() {
    const duration = this._audio.duration; // Safari on iOS currently has a strange behavior where it reports
    // the duration as infinity if an Accept-Ranges header is not returned.
    // For now, 0 is better even though it's still wrong.

    return isNaN(duration) || duration === Infinity ? 0 : duration;
  }

  getTimeElapsed() {
    return this._audio.currentTime;
  }

  getNumberOfChannels() {
    return this._source.channelCount;
  }

  getSampleRate() {
    // This is a lie. This is the sample rate of the context, not the
    // underlying source media.
    return this._context.sampleRate;
  }

  _setStatus(status) {
    this._status = status;

    this._emitter.trigger("statusChange");
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ElementSource;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./base-skin.min.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./base-skin.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "#webamp #balance{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAGkCAMAAABq7Kf7AAACvlBMVEUVfwoWFiMXFyQXGCUYFyUYGCYYkgsZLhwbGyschRIeaRYfHzIjIzgomRwpOCEujhYunBIvL0QvL0kvgBwxMU0xMU4yMU4yMk8zM1AzNFEzNFI0M1E0M1I0NFE0NFM0shU1NVQ1NlM1NlQ2NVM2NVQ2NlU2NlY2NyE3N1c3OFc3OFg4Jh04N1c4N1g4OFc4OFk5Gh05LSA5OVo7TkFCtiZHhidIcy1JSWNMi0BMlSVPU0RPpCNRQkBRmyxSMT5TUm9WqypauihbgTZcmyxcwCpixDFlvjdnoCxnsStp2TBrpU1rwCpuboRuj0Nw1T5xci5yxypz3D50QiR0xzF3JSJ3VCl3oDF3tCt30zB62jB7epB8e458fJB9fZB9fZJ+fpJ/1T6BxyqC3D6Eq1WEtDGEwF2F4jeGi0KGoYiHh5iIoDGJVi6KKSiKRC2KYzaKxDCLfjiLi5yLmCyMjJyNmiyOWxeOjp6OmyyQxzGRODmRTT2RWj2RbkKS4TCTk6KUyjiXXCGXrI+XtDGawmCa4z6bXSGbaSebfieb2jmeYhKeayaeriufFhufKhufPiGfSSGfVyGfbCefgSefkCyfmyygaTqho1Cj4Tik20Wk4jimNDemxzGpfEqprI+p40atkouuV0auag2uwCqwYh+xv16yERayKBayRx6ydiWynCqyriuyxDG3RUu94Ti/bRu/dRC/uyq/0zDAhFPB4kbCb1PCk1fCs1zDciPD1T7FDBLFJxLFQxvFURvFZRvFgCPFnCPFsSrFwCrF2TDGeA/G2jDIxdPI2z7JVyLJgSDJhSnJoCnJtDHJxDHJ3D7Zbx7ZfB/ZjifZlDfZrCfZsTfZwzDZxj7bhC/b1jXfsSjgDhXgHybgLBXgPCbgTB7gWC7gXB7gZy7gch7gfC7gkijgsijgyTDg2zfhmTfhtjfhzD7A/9hgAAAEC0lEQVRo3u3U+VeUZRTA8VeyQtQgKd6XZnGEmXEcmxkLG8YlBdTUCaRGSFFTA02zFBPTssUFF1zac4UKQkXUUrNUIHBLzX0PK3et9L/ouc8z2g+ec2/HX/I93u+ZMz/d877n3Ps5rxYI+J4O+AI+n88Dud0ut8vldDpSUlPtVrvdarNZDEPXAiIx4/V7/Z5Ocs7tcrqcDpGYs1qTYczQ5JDI740+DR7nTEnpYE+1i4dZbRaLoRvaY60fbCl6AP5axoifqEVMi9vFxLZpZ9O11g/HUT2abmixcRpVMFvX2sS1egivVWiarrVLS2yLFxpfomvuQO/sYaNUI0eNhEbcarjo5dc+KEnXNR+s1uv3dZL7cLlgt05HqgO2a7Ulwzp0PUmD1Xr9fo/nSbk0OAGs1gFLs1mSxWoNPUmMyRvAkJjyiCmXw5HSAcasVssTcAFdjkXv6Zc3UC8VQ/KVNptxawyO5fdFXymnHE71SnFPiwXunvR4krbvP6Xd45AS8eLSJKT4BLx4CSkxoT1egoIU6ooXZkhmg/RI8Bm8oIQU7NYDr1sIIAUzMvEywgrSc3jh2QzJdJCexYtCysjsi5WZISGF+g3E66cghQe9iDVoLEMyH6Q+eFFIA57HG5ADkLIGDy3AGjq4SEEaXYg1miGZEVJ/rH8hvYB1G1LBq1gFClL3cCE6VsiQTANJSjIAUn+irLR0LTZryCtEQ3KyBaTi94mKi6YBpLK5aGWls0tISCDpzXSGdI9AynqJSEEaU/w2WvEYgJQzs2z5SqTlZTMlpKIVX6GtKP2SITEkhnQfQuqYO4Eot7uAlDunnGjOOIBU/i1R+TKAtGwr0WqGZDpIU6ZOR5o6RUFa/A3RYoA0bsOWPT8j7dmyQUHasf8o0v4dDIkhMSSGxJAYEkNiSP8zpC+IFKT1m3ejbV4PkCYfaW7+C6m5+YiChE6JuW0MyXSQPifK7QmQancR1UpIh8/8iXbmsIJ09ibaWYbEkBgSQ2JIDOluIT2Vv+AztAVRSDuJaicDpEOnzl1HOnfqkIRUcfoG2mmGZD5I8xd9irRofj5Ayl/XRLTuPQFp0sET19BOHKwQkHpWnPwb7eSPXzMkhsSQ7kNInSOz5qHNUpCqvyOqniQgvb79ONF2CWnpr0TfMyTTQXqLKAKQIguriBYCpPyqTXvRNlUpSE2/oDVVMCTTQfqESH6RItWNRNXvwhep8dgVtGONCtJVIv4imQ/Sx0SRXgCp5ieiGoA08cAlogMSUuVloh8Ykskgdcn7iCgKqYGoZgZAarhA1FApIPWqvEjEkMwH6UOiPICUt7aeaO07AtIb9X8Q1UtIq84TVTIk00FaQqQgrakjWiMh1f1GVLdRQvqdaCNDuqN/AItpcu8L5wnUAAAAAElFTkSuQmCC)}#webamp #balance::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #balance::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #balance::-webkit-slider-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp #balance::-moz-range-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp .actions #previous{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAASFBMVEUfHzEgHzIgIDMhITQiITMiITQiIjUjIzYjJDgkIzckIzgkJDklJTolJjsmJTsmJjtKWmtSY3N7hJSElKWXqLmttca9ztbv//8qmLzOAAAAcklEQVQY022QMQ7DMAwDj7KQvqD/f2UXD2YGN43cWAuNo0wI1JvNjE8SGzwiwf/Ywwr2k1M6HFMPwDgvvxnoU2DN6fl7xh7X/YJx4a/yte67FaPmV2O5pxi5ZN/Gt5+rI998DD/ridxiLAQiHBKEJYGaT1TOJE+BDpf2AAAAAElFTkSuQmCC)}#webamp .actions #previous:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAS0lEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChcPAAsQwDmOIi4MoEocRieMgiMRhROYEInNckTkugcgcVzgnNASIwRxTZOcoIHwDAI4lI4lOrG7eAAAAAElFTkSuQmCC)}#webamp .actions #play{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAARVBMVEUmJTsmJTwnJz0nKD4oJz4oKD8pKUAqKUEqKUIqKkMrK0QrLEQsK0MsK0QsK0ZKWmtSY3N7hJSElKWXqLmttca9ztbv//93JWkaAAAAcElEQVQY022QQQ7FIAhEHzJpL/Dvf8y/MBG70VZbYEPeAIGxH0nEX5QEB4L+xj26CnkMXus2QJv92hXXrETluHnT07MqrnV6UbSfcY6rY+N+/1KUUTBl9Nl/vtxow5+PRyKif+1xpZhmmIEZMxFh+AXgtiNLLYv6agAAAABJRU5ErkJggg==)}#webamp .actions #play:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAARUlEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChcOAzGFkQOYIMiBzwDw4B8RDcEKROKFIykKRDAhFMjoUbqkpsnMUEL4BAGRUIvLymjxCAAAAAElFTkSuQmCC)}#webamp .actions #pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAARVBMVEUsLEUsLEYtLUctLkguLUguLkkvL0ovMEswL0swL0wwMEsxMU0xMU4xMk0yMU5KWmtSY3N7hJSElKWXqLmttca9ztbv//90IK75AAAAY0lEQVQYGW3BwQ3DQAwDwRVPsBtI/3UGfpCBDfiT00x9GPjbiI2dhvAnjsSsuV3AARdwAMHNo1kBmhVuEjMxEyOLkcRMzMRIze3kcfJyQyA8wqsaO2zSdtitogqqqEoJIgTLP/lyHlITiB2JAAAAAElFTkSuQmCC)}#webamp .actions #pause:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAOUlEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOCyXFgYAEyYBzBEBdGUdpzXENDXEJDwRxTZOcoIHwDAEquItl9JSARAAAAAElFTkSuQmCC)}#webamp .actions #stop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAAP1BMVEUyMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NVQ2NlVKWmtSY3N7hJSElKWXqLmttca9ztbv//8mgTHJAAAAXElEQVQYGW3BQQ7DMAwDwRUttPf+/6FFD2SBBLnYmqkPA38bcbBpCJs4ErPm8uPxAgLNrbmtcBGjiFHETIyWGFmMIkarubzZNAQIm8YOB7cdTqsooERWkEXJheoPfCIcRKB1vkQAAAAASUVORK5CYII=)}#webamp .actions #stop:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAMklEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChQPWC+MwCgoKitKBA3YamGOK7BwFhG8A34IfFkPmwnYAAAAASUVORK5CYII=)}#webamp .actions #next{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAALVBMVEUICBA2NlU2NlY3N1c4N1g4OFk4OFpKWmtSY3N7hJSElKWXqLmttca9ztbv//8TuYuxAAAAaUlEQVQI12M4AwenDjCcewcDJ4Ccu1BwZzkmp/zu3evld+9MB3Oqa+9e3wfnbEfm7K5F5mxH5uxD5rxF4uxDNuAtEufd3bv33kE4cFcDOWdWzoSC6QkMK8rhgIFB0MjY2NjFxSU0NJQBAK7vnSRnYMknAAAAAElFTkSuQmCC)}#webamp .actions #next:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAATElEQVQI12NgwAVMXCDAWYGBwTUUChyAbKi4CyabAcSAshlZXBxEYWwBJLYgCxJbAIktisQOQbBFkfSGINihLi6uoSC2KZIbFOCuBwDE5iIH3QcLbQAAAABJRU5ErkJggg==)}#webamp #eject{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAIVBMVEU4OFk4OFo5OVpKWmtSY3N7hJSElKWXqLmttca9ztbv//8Mnk1wAAAAVUlEQVQI12PogIM2hq5VMNDC0DUTCmYEQ9iWCPbkYgTbvNwSxp5cXl4MY5uXlwMlwOxZYBPh5sDNnGwMAlA2UHl5FYZ6uNuCGTpSQ6EgmEGISQkKmAB+iFckwoyJQwAAAABJRU5ErkJggg==)}#webamp #eject:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAATUlEQVQI12NgwAVMXCDAWYGBwTUUChyAbJAgCxBD2Q4CCDajIAuM7SAoKABjMwoKAiXAbIhJMPVgAGY7gO2EsoHKBUXR1ZsiqVeAuxIAu8seNVNafDwAAAAASUVORK5CYII=)}#webamp #main-window{background-image:url(data:image/png;base64,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)}#webamp .media-info #stereo{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAAAk1BMVEUlJTklJTolJjsmJTsmJjsnJz0nJz4oJz4oKD8pKUApKkEqKUEqKUIqKkEqKkIrK0MrK0QsK0QsLEUtLUYtLUguLUcuLUguLkcvL0U8PFNDQ1hJSWFQUGNaWm9lZXZpaXpvcH5wcX9xcYF3d4Z5eYh8e4x+fpCBgY+Dg5KKipaLi5mMi5mRkZ2bmqaioqypqbKqqrTexa8FAAAAvUlEQVQYGQXBQW4aURAFwOrPIJCjEY5Hytq73P9giCj2YBTy+7mqfkUTiURmtUiqRY8eJBJRFAGULIemEipBQySka0xQL+9Bz4FEwbBUj9PP+ffF22P1cXbc1+fnsv7br5ExRr9mz911M99Op+d2P1+22/yRitHttr9eUPP5cH+w/3ftQ4cFx9VX93a7nD+ObufVn/nbdSRqk4qWSCfERHS1USq6ggwkKTCMLBERpCuoVAQdYyAl4dASNJjKN1/Kh0LDHtt2AAAAAElFTkSuQmCC)}#webamp .stop .media-info #stereo.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAAAk1BMVEUlJTklJTolJjsmJTsmJjsnJz0nJz4oJz4oKD8pKUApKkEqKUEqKUIqKkEqKkIrK0MrK0QsK0QsLEUtLUYtLUguLUcuLUguLkcvL0U8PFNDQ1hJSWFQUGNaWm9lZXZpaXpvcH5wcX9xcYF3d4Z5eYh8e4x+fpCBgY+Dg5KKipaLi5mMi5mRkZ2bmqaioqypqbKqqrTexa8FAAAAvUlEQVQYGQXBQW4aURAFwOrPIJCjEY5Hytq73P9giCj2YBTy+7mqfkUTiURmtUiqRY8eJBJRFAGULIemEipBQySka0xQL+9Bz4FEwbBUj9PP+ffF22P1cXbc1+fnsv7br5ExRr9mz911M99Op+d2P1+22/yRitHttr9eUPP5cH+w/3ftQ4cFx9VX93a7nD+ObufVn/nbdSRqk4qWSCfERHS1USq6ggwkKTCMLBERpCuoVAQdYyAl4dASNJjKN1/Kh0LDHtt2AAAAAElFTkSuQmCC)}#webamp .media-info #stereo.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAABXFBMVEUA/wAD+AQG7gkG8QkH4wwI6A0K2g8K3xAL2xIL4hIM2RMN2BUN3RUOxRYO1RUQ0xkSxh0SzBwS0RwTuR0VvCEVxSEapCkbnyscrSwfczAgpzIhkzQinDUlJTklJTolJjslJzklKDolLjslkzomJjsmKTsmKzsmLDomMjsmMjwmNjsmOjsmRjsmWjwmdzsmiDwnJz0nKT0nLT0nNT0nOj0nQjwnTj0nYj0oKz4oLT8oND4oOT8oRz4oSz4oZT8pL0ApO0ApTEApTkApZkApZ0EqMEIqMkMqPEEqTEMqT0IqUEIqZUIqZkMqa0IrLkIrL0UrNEQrPEQrPUQrQEMrSkUrYkQrfUQsMUQsNkUsQkQsS0MsTkYsVEQsWEUsYEYsZ0UtLkUtLkctL0gtMEYtM0YtM0gtNEgtNUctNkctOUYtP0YtQkctR0YtS0Yti0cuLUguLkcuMUcuM0cuN0c2LFEQAAABDklEQVQYGQXBvVHDQBCA0W/3TrJkBBhmPAQkBATUQA+0QEROT9RBwtADCQQkDMaBLIOk8+nnlvfkUfYq0HKgtzIMMIBBxNpR/+Qsy+pcxLnj46iFiKrquJeuw/xp51QvayeuxkSikk+YHuFmxLdetRH//HXnCIuoxiSxpzS1hFfRlw+/DrxWO1YdqdgXV9vd4mrZmWgl9UdaUnD/LX4bo9ue9O8/N/lnkFG0g+tquwGSy5dUR1BlABio2fmmoVzL00XfZMluV027WL3tK8DkIWtUJRBMJGCMQKQve5vT4C2tRDd5LSaS2wEDcjqz2cbZM0l7Nh/KHiPCCERIKfjR8EmnEApqAGMASDD9uiHBP3bmjPqWVRjwAAAAAElFTkSuQmCC)}#webamp .media-info #mono{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAAAclBMVEUtLUguLkcuLkgvL0ovMEswL0swMEsxMU0xMU4xMk0xMk4yMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFI0NVM3N1E8PFNJSWFQUGdSUmtaWm9gYHZuboJ2dol8e4x+fpCGhpeOjp2VlaOdnaqlpbKsrLetrbnuzsEEAAAAp0lEQVQYGQXBQU4bURQEwOrvkcA4iRS4/+VYwI6VEyTPzGuq8ppyrjHKIVPQsSnnGpReZkQnQzfImKJUU8saWUEWQZyV0g7dqs6X349tf7qfN3uf6t/N/imLDL7WY1/Xx8d1m/+X6+P9+U1XSADNH8Xkr9aqmTW7fY5+r9v9OHp859f9i7z2vJwZpUdUjWpqSZQytlYJUrOpWaR1FhhgbcLQRiEFTH4AmtR0pKKbMGAAAAAASUVORK5CYII=)}#webamp .stop .media-info #mono.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAAAclBMVEUtLUguLkcuLkgvL0ovMEswL0swMEsxMU0xMU4xMk0xMk4yMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFI0NVM3N1E8PFNJSWFQUGdSUmtaWm9gYHZuboJ2dol8e4x+fpCGhpeOjp2VlaOdnaqlpbKsrLetrbnuzsEEAAAAp0lEQVQYGQXBQU4bURQEwOrvkcA4iRS4/+VYwI6VEyTPzGuq8ppyrjHKIVPQsSnnGpReZkQnQzfImKJUU8saWUEWQZyV0g7dqs6X349tf7qfN3uf6t/N/imLDL7WY1/Xx8d1m/+X6+P9+U1XSADNH8Xkr9aqmTW7fY5+r9v9OHp859f9i7z2vJwZpUdUjWpqSZQytlYJUrOpWaR1FhhgbcLQRiEFTH4AmtR0pKKbMGAAAAAASUVORK5CYII=)}#webamp .media-info #mono.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAABJlBMVEUA/wAD9wUG8QkI6A0J5g4L4hIM2RMM3xMN2BUN3RUP2hgQ0xkSzBwS0RwVvCEVxSEWySIZwicZwigcrSwgpzIhkzQkpzkmdzsmiDwnmD0olD8qa0IrfUQtL0gtMUgtQkcti0cuLkcuMEguMUcuNkguOkkuR0ovL0ovMEsvM0ovNEkvNEovNkovOkovPUovUUkvXEovZkswMEswM0swNUswNkwwP0swQkowTEswT0swUEwwVkswZkswaksxNU0xN04xP04xRE0xZk4xbk0yNU8yNk4yNlAyOE8yQ00yTk4yU04yVk4yY04yaU8ybE8yek4zNFEzOVEzPVAzQ1EzRlEzTFEzU1AzXlE0M1E0NFE0NFI0NVM0NlE0NlI0OlE0PlI0QVI0RlJbMtAUAAAA50lEQVQYGQXBTW7CMBCA0W9mrJKEAKr4WXXTu3TXG3Dc7nuOIiohKLHjGJzpe3IUreZ6BxJkIIHjnlxxbDBVs7EXaVV1u1UtpehDAdloNB3Xo6p1XbF7CN2kj0YFEYmasmUz05yb3KjmfW5LcBnEvk7L1N8P4UwvN+HwS/c+iqIrAT68XTyvq7frZNt6W33+nUAFHADAHAyw+ZsA6tXx0AxtaHTz/Nm9dGGxqef9bkKOntdRUh8BIFGIOD42KSBLn6WtFQAWN7zBL68plYDXQVwYASABGTy6h4DMOHEOyATMOHWmJh7hH8HfcsJFco7ZAAAAAElFTkSuQmCC)}#webamp #time #minus-sign{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAYAAAAW/mTzAAAAE0lEQVQImWOQUNT8z8DA8B+ZBgA5VwYi0an5SAAAAABJRU5ErkJggg==)}#webamp #time.countdown #minus-sign{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAYAAAAW/mTzAAAAEElEQVQImWNk+MHwnwENAAAjgQH5PvLWYAAAAABJRU5ErkJggg==)}#webamp .digit-0{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12OYGtrA4ACEHh0ORNFA9QAiPQsl393R7gAAAABJRU5ErkJggg==)}#webamp .digit-1{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAE0lEQVQI12PsYNjBwMDgwEgCDQAItwpIh/66WgAAAABJRU5ErkJggg==)}#webamp .digit-2{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAH0lEQVQI12OYGtrAwMDgwNDR4YBCg8RBLI8OVBooDgAebgr//9NFIgAAAABJRU5ErkJggg==)}#webamp .digit-3{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAGElEQVQI12OYGtrAwMDgwNDR4YBC4xEHAB3uCv9NUBWtAAAAAElFTkSuQmCC)}#webamp .digit-4{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAGklEQVQI12Pw6HBgAEF0emqoAwMDkO7owKABD8wKi451feQAAAAASUVORK5CYII=)}#webamp .digit-5{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAIElEQVQI12OYGtrA4MDAwODRgUqDxBmArI4OBxQaKA4AHm4K/5vyk78AAAAASUVORK5CYII=)}#webamp .digit-6{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAH0lEQVQI12OYGtrA4MDAwODRgUqHgsUdgHwHFBqoHgAbbgr/DdfRzgAAAABJRU5ErkJggg==)}#webamp .digit-7{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12MMZdBmYGBwYOxg2EEsDQDjggmI1L+I9wAAAABJRU5ErkJggg==)}#webamp .digit-8{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12OYGtrA4ACEHh0OKDQecQArbgt/wD0r9gAAAABJRU5ErkJggg==)}#webamp .digit-9{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAIUlEQVQI12OYGtrA4ACEHh0OKPTUUAcGBiDd0YFKA9UDACFuCv9mR03UAAAAAElFTkSuQmCC)}#webamp .play #play-pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAH0lEQVQI12Po8GhgYAhgYOgIAdKhQDrUAUKHQMU9GgCL+gfA1jUO8AAAAABJRU5ErkJggg==)}#webamp .pause #play-pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAGklEQVQI12Po6GhgAIGQVgeGEFYHFBoEgPIAiaIHnsCfw8kAAAAASUVORK5CYII=)}#webamp .stop #play-pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAGUlEQVQI12Po6GhgAIHWkAYG1hBUGgSA8gCN1wfe41RVhgAAAABJRU5ErkJggg==)}#webamp #work-indicator{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAATElEQVQYlWNkeMHwnwEKBCOMYUyG9wfOMsLYTAxEAKIUMTIwIKzDIgcxSUJRk4GBgYFBQlGTAZlNskksfvwI0Y2SCN8x3jgLZ1PPdwDE9Qua1aoDEgAAAABJRU5ErkJggg==)}#webamp #work-indicator.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAP0lEQVQYlWMUdDD+zwAF7w+cZWTAApiwCZKliJGBgeE/Gh/TJAlFTQYGBgYGGE22SSz/NYwRKm6cxWoS9XwHAD8UCdbSgnEwAAAAAElFTkSuQmCC)}#webamp .playlist-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-left-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-right-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABwElEQVQ4ja2VsY7VQAxFz3WQQFpoKGhgxYqGBioEHQUdTfhCJDp+49EhPmLZZrdCIKFUNDGFPc5O8hYkiCO9sd9M5o6vxzc6PX3ulCl+JSQBhgCZ5Uz4sdIg18Xa9NHyf/q3AMZxXGBkBdTHMVqLbehjGbFnxEOOyAIE4HD4TOwrzASuyECLb8o4R0kJIswGqDjAYo1hdJakOCDh7i091qacct9MVTbNKpPiHOEe+07T+XaHf7ACYXXYaTrn7eszHj882REESJ6q6E9fvvtvgA4kKFL6QfTHD+/3BUmorHkU7sWzB3uDBFXgdWW+Xv3izav7e4I0E45z7+4TLi6vuLj8sS9I1CUycnfu3H6EmQGr5rvWjMKqUW9qxk1Npuk7pUNNvyx0aNGx0Kq1Ri2SkxJEG1dUHbXZa8bdu2UBsDpq1jSu0dE+CRvHsbQsUrc6aZz2zwIJKZJbuhYw95lPhy8lktLAYEMJpCGwpSaNfxXVVlTacZAu9xpnn8v3pKi0c96+WrX6KwiN4wBrQJ0KuyO7oZ5sCr/aHF/kHjq/P3L0Fk5R1d6Ho83Yw4DAnZ/Tt+UKS9U/lgW//vldPtHx/AaiV3eczcMY/AAAAABJRU5ErkJggg==)}#webamp .playlist-top-title{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAMAAABMHminAAABd1BMVEUdHS0dHS4eHS4eHi8fHyIfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pJ0ApKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUtLUYtLkctLkguLUcuLUguLkcuLkkvL0ovMEsvMSUwL0swMEsxMEwyMU0yMU4yMk8zM1A0MCw0MlA0M1E0NFE1NFM2NVM2NVQ2Nk82NlU3NVY3N1Y4N1c4N1g4OFg5OFM5OFk6OVo7Olo7Olw8O109O149O2A9PFs9PF89PGA+PGBAQFhCQV9FQTtIR2ZMTGFVVG1WVmNbWnZfYGpgX3dlZXdlZnRnXEJnaHZoaHhpaXtqanpraoBra3xsbHxsbH1tbX9uboFwb4NxcYZzcohzc4p0c4p0dIp1dYZ1dYx4do54d5B5eIl9fY6FhJSGd02LjJqOkZCQj6CXlqeioq+srbettMQFH6KtAAADiklEQVQYGQXBTa8VVhkG0PW8+1zuRYuN4gfgpV4q3PpRNTFGw8Q4MlaJsUPjr/D3OHJgjANnNR2hxA6MNW00mKJAC0YSSZu2SkmBnrP361o5gsY09UL3Ymrd3bq7073obgAQSoUYJJKoqIgoY0DYvAgaaFbr1tA0mrawAABKQghBEIkBQXTY3AG7mrpZbfYylzVr123ZrWx199TLWsBYo6vYJEYqoySxFzV6qEqhGIUCGmKJXlqoKRoaWbozWwKzDYvVDYDRmFmAAGTDFVZtdbN69WQuvey6Lbu1stOzrc4uC1ClspkjGTGGSmKjkhpJRUnsbfdeYvNz9399xXze354/8dqFT7z+rfGnb9fNunTr3/393H3Djzz53Qsn/ea7h6x//Hnxs32eXL14fPeVTD8++ejlH+7fvPXC9vc/2P5Bff7SuzeOT5tv1UXsro+XfnpGVZ1DPqqTJzz99AOQI8zz6bPB/pcOSLv5cj1rwC9v738F9Djog/VqX7ycN8PQ+Nzp7Y23//f+a++5fV2cq9pc85iu/1w44my9B+yfpc6s7f7pd8xxyXavpxMXbWvC5T0LJd/MvcNv/P3uhU/d/1dYo8Hel7cPPwDaNer4+OvEEwe7+XHvB+aTp3Dqow99Ju733mMW559555UZ+MKZu3/E0odz69Bfp9ehFN6+M+0dLcHg+Ph4c8Zb8GiOD058bAuLf34tzmc85dwNHp+8d6R481WrFvyKcPo7/nKwDvsgWYMYz3iAz5697Tk05p4Pn7X5hYdXiAeffNcXH2qK/9694OyTa763/2nuXbx+JBu6uxZgcOqU+G0uH371DWh1yS08Gs+ZtwtYV65elZ8AW61ZbfYyl6V3utc0s9U9Wy89QWpupMgoNoY9STKSUpWNFAmbLnIENHNaTbduk2XRemltsRoARFEiBokkKpJEijEgFOgGQNC0poGGBQBIWokINAgJLABsXgQ0DaZumoamad1YAEChCCEIIWFAkA6bO2CZui169uq1dPeu25q92k6bbWXtohlzswbJJjJkZCTJiCqjYkRJ2IMC5gTFAugpFhB2pa01emCOXVplQ0iNClAMelDAahTYjQHoDkEIMaJmM2Z3d7cFU2CubtoEWExMAAkKbOYEizRTLLSYbQ0SCd0WkvRCNVitgVAI0OwgR9CYJqvp7ja17tZtac3S3QCQiJJIIpLEEBWkjAHh/7B25tuthDwsAAAAAElFTkSuQmCC)}#webamp .playlist-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABNVBMVEULDxYMDAwOFQsUFBQdHS0dHS4eHS4eHi8fEQofHyIfHzAfHzIgHzIhITQhIjQiITQiIjUjIzYkIzckIzgkJDklJTomJjsmJjwnJz0oJz4oKD8pKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUtLUYtLkguLUcuLUguLkcuLkkvL0ovMSUwL0swMEsxMEwyMU0yMU4yMk0yMk8zM1A0LhA0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4OFg5OFk5OVc6OVo7Olo7Olw8O109O149PFs9PF89PGA+PGBFQTtGQh9ORDBQPx5YVjxnXEJqanpra3xsbHxsbH1tbX9uboFwTyxwb4NxcYZzcohzk5p0c4p0dIp1dYx4do54d5B4h4yGd02LjJqNcTiOkZC/uXdbAAABJElEQVQYGQXBsWpTYRyH4ff7cig5a8FCKAge2slNqFvoBai4e5d26h0UrCnYpaCSrbV2cA0k5/97fZ42WYVR1ZCgZWC4REGDSEAVuRpeUoayyiqddU6IdIGeDkCHBQFgpo2s1dXR/mj/66BvHm/h4vSunocv/67XrpYsWb69L5yAadsaw+IV8hMAAl8/Tbtxe/tahhtAAKAXuBt30KCfnUEHAAL8HXcnQKcfH2huAPje4fO0/fNjujC0kbXMNwds75ydHr/B+9NNntuHlJZWYpWpOcb4NDxYpUTVSAzzx03RoQECIAQomGG4RESDSFCuABheUv2AVTFV2ScamnRCNYiYKAsUhA5g0pqNRpgVADq01gCaxNIgAMODVZJz+F2WWisA+A8o2vB09xIFIgAAAABJRU5ErkJggg==)}#webamp .selected .playlist-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-left-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-right-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABxUlEQVQ4ja2VsW4VQQxFz/UiQYHo6IhoERJ/ECFEQbdFfoGOgoqKv6DmL1KmejQI8QWRqNKjFGT7NYU93szuC0iwXumN/WZ27vh6fFcnJy+cMsWvhCTAECCznAk/VhrkulibPlr+T/8ewDiOC4ysgPo4RmuxDX0sI/aMeMgRWYAAHA7fiH2FmcAVGWjxTRnnKClBhNkAFQdYrDGMzpIUByTcvaXH2pRT7pupyqZZZVKcI9xj35vparvDP1iBsDrszXTFpw+veHn6eEcQIHmqop+9//zfAB1IUKT0g+g3r0/3BUmorHkU7t3Z871BgirwujJff1zz8e2zPUGaCcd59PAp5xeXnF9c7gsSdYmM3J0H959gZsCq+W41o7Bq1LuacVOTabqmdKjpl4UOLToWWrXWqEVyUoJo44qqozZ7zbh7tywAVkfNmsY1OtonYeM4lpZF6lYnjdP+WSAhRXJL1wLmPvPl8L1EUhoYbCiBNAS21KTxr6Laiko7DtLlXuPsc/meFJV2zttXq1Z/BaFxHGANqFNhd2R31JNN4Veb44vcQ+f3R47ewimq2vtwtBl7GBC482v6uVxhqfrHsuC3P7/LJzqe3w3Bd/kyd8EcAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-title{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAMAAABMHminAAABd1BMVEUdHS0dHS4eHS4eHi8eHyUfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pJ0ApKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUtLUYtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEsxMEwyMU0yMU4yMk8zM1A0MlA0M1E0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4N1g4OE44OFg5OFM5OFk6OVo7Olw8O109O149O2A9PF89PGA+PGA/QitAQFhCQV9FQTtIR2ZMTGFVVG1WVmNbWnZgX3djY3BlZXdlZnRqanpraoBra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcohzc4p0c4p0dIp1dYZ1dYx4do54d5B9fY6FhJSLjJqQj6CXlqeioq+srbettMSukmW8u8XHx83KydLW1tzk5Ojsznry8vT////NCpc8AAADfklEQVQYGQXBS6tfBxUH0PXb5+Q+Y2oFI5ZoknpLiU8cCELopANJG+M38Ds48nM4ciw4cVJ0INhBK5T6KPVRChVFIzHUB4IQvYbEe+//7O1auQGDzWYaM81mzMyYmclMMzMAIJQKsZBIoqIioiwLhPUuGGDoMaNhGAyj0QAAJSGEICiJBYKYsD4EW9oMM3bTunVnm9G2zoWZ2UzrBpZepoo1saRSJYk1qmaxVIKiCgUMxIhpI6TFwCBtJttIYBuLpmcAUINOAwKQlTt07cww073Rbdo2o23d2Zlt9GSXBlSprNuSLLGUSmJRSZZURSTW3fo667edf+eO/pL3vrj/7mf3f/OVS29/df3Dwc0H9+dry3/eds/Zj1858oN7V9j+9Ivmm3uc/+rqC6c/yuYbR09+cnf//u9f3b3x6sWb6vmbj3/95eNcPLj8HC7er9e/taeqDpDz5XjftYMzkOfR15c5CPZvHRLu/3y5aYHv/XXvC2CWwzns387Nl+vPoQyeu3z+u6ePPnz3sb+/Lw6q1g9sTM4Ob/DMegpm/yq5ttv2P/XQbj1xvjdcPbTVBrevaJS8lNMrt985feb4vw/CZMD+586e/TcwPqBOTl4k/ubwYnc8HwZ2Z8c4ON+5Hk9n7ynN0ccfv7cFrh+c/hBtnt21j3pz5y2Iwj8eXdi/PqA4OTlZ9/wTnu7Ws6zn0Pzx83F9ucQBnh49uaL4yy91NXyflPX2vHO4Hc1h0oi84DE+uX/fLUCvHn3C+l2P7xD/u3zq+MJQ/OvRx1w7+6mX9z/Nk8O37glmphqwtKPPOPRaXvnISz+Dsd70AGfLLRf3A/Sd18jXgZ0xzNhN69ZmM9Nty4WZbUybDaS2VYosxWqxSpJKSiqXJCQsU+QGMGybHmbM2GjNmDZG0wMAoigRC4kkKpJEimWBUGAGAMEwhgEGGgCQjBIRGBASaACsdwHDgM0MzcAwjBk0AFAoQghCkbBAkAnrQ9DajGF20zNtZrYZ3dNjZ2yj07sYlm3thWSNLLKkkqSiSlWsEQkrFNANQgNMiwbCrozuZRZsyy6jshJSlQBFMSsBelBgqwJMF0EIUVHbsGwzMzMaNoGtZxgN0DR2ABIUWLrBUE2LxogevZBImNFIMo0a0GOAEBQwbJAbMNhs9DAzYzNmxow2hjYzAJCIkkgiksQiKkhZFgj/B6KI5O4cXV8dAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABI1BMVEUdHS0dHS4eHS4eHi8eHyUfHzAfHzIgHzIhITQhIjQiITQiIjUjIzYkIzckIzgkJDklJTomJjsmJjwnJz0oJz4oKD8pKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUtLUYtLkguLUcuLUguLkcuLkkvL0owL0swMEsxMEwyMU0yMU4yMk0yMk8zM1A0LhA0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4OFg4QlY5OFk5OVc6OVo7Olo7Olw8O109O149PFs9PF89PGA+PGA/QitFQTtYVjxnXEJqanpra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcoh0c4p0dIp1dYx4do54d5CNcTisrbeukmWwmV7O4tDsznr////5EmU+AAABC0lEQVQYGQXBMUpcYRiG0ef7708qu4mgxYCFVdbgtIGsIesLZAOuQ0GIlfXFMEMgTOXc7308p/Z2Y1Q1JGgMzAcUVIIIqsjjPKUNm912a+uWEBkCIwsAAwYBYKMmB3UP8Oeid65wW8/9Pn/274P7BeDbS+PXsnbHKmZN5B8ABNba9XJalbkCWgCOBvvLhxTMa2BggQSo5WMpGMzlTMUS+D+a293J2vk3zF8crPMVwBmt4wqWUN/T2rETu022GOM6X+1Womokhv7x1AwoQACEAIEN5gMiKkFEeQRgntLjglvHdOeSaCgZhC6ImCgLCsIAMF1lUcimADCgqgBKYmsQgPlqt8R73tpWcwMAn2oG882E0Lr4AAAAAElFTkSuQmCC)}#webamp .playlist-middle-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAdAgMAAADjkWVKAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAD0lEQVQI12OoilvCQGcMALzxKw1EtyFgAAAAAElFTkSuQmCC)}#webamp .playlist-middle-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdAgMAAADX6KRWAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAEklEQVQI12OwmrXq1UuGIUICAIEjYC7HaOXEAAAAAElFTkSuQmCC)}#webamp .playlist-scrollbar-handle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASBAMAAACUbIJFAAAAG1BMVEUJAgJ1XCKNcTibgkmwmV6+sX3aypzy8vT06sbDyd/kAAAAKElEQVQI12NIAwKGJCWlAoakiHYHhqRGD/KJimYHhnQXFwEGBQYGBgB4dhfwKIryTQAAAABJRU5ErkJggg==)}#webamp .playlist-scrollbar-handle:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASBAMAAACUbIJFAAAAGFBMVEUgDABsURh1XCKNcTihhkuwmV7DrnXaypzxKekLAAAAKklEQVQI12MIDQ0NYAgUFCxgCHRLN2AITDQjnyhLMmAINzYWYFBgYGAAAIGKEsehmtv8AAAAAElFTkSuQmCC)}#webamp .playlist-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAmAgMAAABMq9iIAAAACVBMVEUnJz04OFh0dIo98+79AAAAGUlEQVQY02NYBQYNDKFg4DDiaHSAKzygAADHT1L3iexI4AAAAABJRU5ErkJggg==)}#webamp .playlist-bottom-left{background-image:url(data:image/png;base64,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)}#webamp .playlist-bottom-right{background-image:url(data:image/png;base64,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)}#webamp .playlist-visualizer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmBAMAAAB+CntdAAAAIVBMVEUAAAAAAAwAABAACCEAa7UYGCkZGSMnJz04OFhjnPd0dIrCNSsmAAAAW0lEQVQ4y2NYRQxYwNBBDGgYDsrKiQELGIgCCxhYiQFEm8aiSpRpTMSZxkmcaYxEus2MmqaNum0Yuk1FU0VTRFPF0sQSOwZBovNCFXEFF1HZuYBYZQNSWhLnNgDqVFE4O/Zo0wAAAABJRU5ErkJggg==)}#webamp #playlist-window-shade{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAHUlEQVQI12MIBQMHhv9gcIBhFRg0MFALwMyD2gMAcRoULw29bBMAAAAASUVORK5CYII=)}#webamp #playlist-window-shade .left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAIklEQVQI12MIBQMHhvr/IHCAoWoVCDQwVDFAAMU01DyoPQAU7xeZEgCs6QAAAABJRU5ErkJggg==)}#webamp #playlist-window-shade .right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAMAAABaWb9VAAAANlBMVEUAAAALDxYMDAwdHS0fEQopKUA0LhBGQh9ORDBQPx5YVjxnXEJqanpwTyxzk5p5ip6NcTiOkZBJ6prXAAAAbUlEQVQoz6XSORaAIAxFUQjyFTEO+9+sBI82ajT6KgpukYAL5txgLbhoLbjLfpFGkkMGESHfk2kXGEtiegbA0MiGUEm5GKnjxCCdCMJykDZxekdKqASc5idSZ6nk5SznjXnvtY2p7/Lh9e3fcgVRHAwq+Kdj5gAAAABJRU5ErkJggg==)}#webamp #playlist-window-shade.selected .right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAMAAABaWb9VAAAAM1BMVEUAAAAdHS0pKUA0LhBFQTtPSThYVjxnXEJqanpzk5p5ip6NcTiOkZCsrbewmV7O4tD///+ogWxMAAAAbElEQVQoz52SSQ7AIAgAsQjU3f+/tpIup9ZI58SBCSs4M7BbcbBZcfDKHyXeCV7RQBgRWb6VfkmeQilBHa7CUnmmnBJRGdCIUGqqgnNFJWqPwqknXlIGtFxFG/O5tUyLs0TrxuLsLj+ub3/LA63jB8yJpQTsAAAAAElFTkSuQmCC)}#webamp #playlist-add-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-add-menu .add-url{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWElEQVQI14WOsQ2AMAwEv3LPKBYTABsgorTfxCtkfRyUOIiGq04v62Sk4EKugxPZOmVzpxAGKeoupInwcWD6e3eP+9FpTnppOvm3g6307cTPinSsHcW+BDd3RTueo3YTtwAAAABJRU5ErkJggg==)}#webamp #playlist-add-menu .hover .add-url{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI14WOyQ2AMAwE9+MCEEkDdEAnGwmXACWQ9skFmx/zGq2skbEJLALBB8eOmF8S4n11zupOIxzW3Eg3Y3NAPu/Fv/tB77CU5OTfDtZSQpg6q/5/AGMtMU3PzLN0AAAAAElFTkSuQmCC)}#webamp #playlist-add-menu .add-dir{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWUlEQVQI122OsQ2AMAwEv/qeUSwmADZARG6/iVdgfRrHScFVp5d1MlrxwN/BDY+kH/AQhQC7wYNSkOoGD2D6ulPzfnQsO2K6gtLifzuF4Uunfja0a08M51Z82fg51vPZ5kgAAAAASUVORK5CYII=)}#webamp #playlist-add-menu .hover .add-dir{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDs0gDWAIZSBFcxmDQgIZWUNALMZGBBsZHEgG64eCuDmBLBC2QFgLQg2NnGQehBbBMkcYYT7AQVAL9EsAFyYAAAAAElFTkSuQmCC)}#webamp #playlist-add-menu .add-file{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXklEQVQI12WOsQ2AMAwEv3LPKBYTABsgorTfxCuwPpZJDIJzc3q9LaMkB+o52FGt0xZ3CmGQpu5CmgjDgcffuXv2xx13wseIcPOW8c4lXH65xQa+d/JnRdnmjmKdkguiDDkEOAftpAAAAABJRU5ErkJggg==)}#webamp #playlist-add-menu .hover .add-file{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI12WOwQ2AMAwD/ckAiHYBNmATI+ERYARYnzQttBKXz8lyomDpYOogqbGvyPfLhnydlaO4aIRg4UbKjOFA9zF3//qN4oSPiHB5S6y5hdsvV2x4Pw135v7/A+euLyJ1PQpNAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABIAgMAAABO2aeDAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYMghgCdAlLABvUy/BqCAQTQAAAABJRU5ErkJggg==)}#webamp #playlist-remove-menu .remove-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWklEQVQI13WOMQqAQBADp0rvUw5foP5AlG23MV/w+xbenSI41RBCCHtnI87GSrhyTIQxknUUwpJM3o4xPLnU/Om3nULYSmf1zJfzk2eS+LvTPxf2ZawU5qFzAa7rOIxN5zmHAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .hover .remove-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAWElEQVQI13WO0QmAMAxE7ycDiO0CbuAmJ3gj6Ai6vtGmpD8+CDwuIRyWBFOComBfUe/OhnqdjeN1QTCTfW5uoPVcQOY+4XkfNDeK4eTg+MnpG7iX4c+c/R8m4y6+oJDkfgAAAABJRU5ErkJggg==)}#webamp #playlist-remove-menu .crop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAR0lEQVQI12MIhYMQhvByGAhiCE+DglRHJLYhHjZDAlsCEIPYCWkJYABlswGZyOIw9QlA9fjNxMGGu9mQIdTZGAoMGZwE4QAAjAZBLD2pp6oAAAAASUVORK5CYII=)}#webamp #playlist-remove-menu .hover .crop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAASElEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEBumCC+bIYA1AIhB7IDQADCAslmBTGRxmPoAoPpQ4swXQWILI9wPAIC4Ne4ZKh5qAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .remove-selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXUlEQVQI112OvQnDUBgDr1KfUR6ZIMkGxuZr1VgreP0Ufj/gqw4hhDgmO3UNNiqd80OFIEVnoyIp+HZCYOXS8NUfO41KMO7uOMMja7pXbhmT58783Dh+707j+5r8AVpzN34SgZTJAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .hover .remove-selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAWklEQVQI102O0QmAMAwF388bQGwXcAM3iWBG0BF0fWOb+rxSOI40FIvAJFA82VfUe7ChXmfneN3hIJ3NGQbj6A6ox03XfNIdBku3drLT+LmpR40X4eW3Z9b/H/ZpLd3ACl8TAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .remove-misc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYUlEQVQI102Ouw0CQRQDJ3JOKSsqADpAd3qpk3ULtE+wn7uJLGtkmXNzUL/Fl8qkv6gQpKg3KpKCRyYErl5a+fLXTqMcO4TeKIs4Hj04mtl27O1bw7/v7M+N8/OcNN6PzR8ABzaO5fDK/gAAAABJRU5ErkJggg==)}#webamp #playlist-remove-menu .hover .remove-misc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXklEQVQI102O7QmAMAxE788NILYLuIGbRPBG0BF0fZN+EB8UXo9LCLYES4KiwbmjvpMD9bk7V7ggkGJzusE4cwGZ+xue/UG4ySwmmhPyf88BE4c7UZt9Y/TLb8+a93++ly0VHemPIgAAAABJRU5ErkJggg==)}#webamp #playlist-selection-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-selection-menu .invert-selection{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXUlEQVQI113OsQ3DQAwEwY0udymEK7DdgSCBKZO/FtS+k39K0EYDgiDI0e3kudpIz8aHNFKVNYJ0mbu5LIxHzP3ldSdIu4Q0LcvLZdrWNccIPe/0z8Hxe8+C76v7A5OQN+oVjwHMAAAAAElFTkSuQmCC)}#webamp #playlist-selection-menu .hover .invert-selection{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI103OwQ2AMAxDUV88AIIswAZs4kh4BBihrM+BhvafnqooKfYRlhE2984D8VSJaPfXlYgmyKSciGaKkzFZFP3Pd9eBRDSLgrppuSyLZXO8w4LgxDbtWcf/X0qvMI9I7cp+AAAAAElFTkSuQmCC)}#webamp #playlist-selection-menu .select-zero{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI102OwQ2AMAwD/cqfUSomADZAVHz9oSuwPm4aAtfPyXKtoCYHzvtlx9mCa+kOgvIip7/hzWjp/HKl+hF57Mh7SGs2OqoL9z5jw30+cu8z+r+dvLmgbnNQsE7JAyOvPXLeVffRAAAAAElFTkSuQmCC)}#webamp #playlist-selection-menu .hover .select-zero{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAX0lEQVQI102Oyw2AMAxDc8kAiHYBNmATI+ERYARYn3wK4fXyZLlWZClkKqRxsK/S75dN+nUmhzspEJDhiJdOhX6Oyi21HyNP3D2EUrNjdSPcZzQ95kcefXi//Xbmuv8BohAy09WnmqwAAAAASUVORK5CYII=)}#webamp #playlist-selection-menu .select-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAUklEQVQI12MIhYMQhvByGAhiCE+DglRHEJshgSEByDYEshPAEMJOY0tgg7MTEOJAUaAOqDjUHKh6hBpk9Qw4xBOwmgN3syFDqLMxFBgyOAnCAQD0WT/cwFbKdgAAAABJRU5ErkJggg==)}#webamp #playlist-selection-menu .hover .select-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAVElEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDs0lCGAISA0FMwOAEMIO5Q1gBXODkCIA0WBOqDiEABTj1CDrJ4Bh3gA1BwRJHOEEe4HAB23NNar7KHYAAAAAElFTkSuQmCC)}#webamp #playlist-close-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEU0MCxnXEKGd02ukmX///8tdlhEAAAAKElEQVQI12MwBgIDBkMBBkEgySjIaMBgIKAgACSFnARgbIg4RA1YPQCfwgXpyvsxsgAAAABJRU5ErkJggg==)}#webamp #playlist-window #playlist-shade-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEVFQTtPSThYVjxnXEKukmW0r4e+sX1mGpZYAAAANklEQVQI12NwAQIHBpe0tBQHBrfUtDAHBmdjY2MHBidjYyMgqWys5MDgqKSkCFQjKCACJEHqAT9eCss1JzHfAAAAAElFTkSuQmCC)}#webamp #playlist-window-shade #playlist-shade-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEVFQTtPSThYVjyukmW0r4e+sX3BsGNteY1yAAAAMUlEQVQI12MwBgIDBmMBAWEDBkORkEADBiPV0CAgmQom09KUgOJpaYogNYLMQBKkHgD8fwlqtoGUgQAAAABJRU5ErkJggg==)}#webamp #playlist-misc-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-misc-menu .misc-options{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI112OsQ0CQQwEN9qcUiwqADpAvJxOctsC7RPgPyEmmmA9so7NS/0+eaozrJuaQBStUmOFkFVqJOJxIIwH8He/O6VGmLMDv7eO4/HEYfaJ8X9n/1w6HtehdL9sPlWoO+DkW3+GAAAAAElFTkSuQmCC)}#webamp #playlist-misc-menu .hover .misc-options{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAYElEQVQI102O2xGAIAwE7ycFOEIDdmAn54xXgpag7Rsembj8LMwSwJZgSVA0OXfUNzhQn3twNadIQehukO/VHaBsutOy6GmjjwdGT2PMaX3eNfmaLnfO3p1+Xn5z1vz/BxcjMYQLzDa1AAAAAElFTkSuQmCC)}#webamp #playlist-misc-menu .file-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAX0lEQVQI12WOsQ2AMAwEv/qeUSwmADZARGndxCuwPomJTcGlOb0+L6MkF+odnKg2aRuqoj9TNOluxu7mTnf+cvMf3s+d4WOG4JtTSVo4iHSN3PvR+XbyZkE51olgX5IHU8k5In6uSFkAAAAASUVORK5CYII=)}#webamp #playlist-misc-menu .hover .file-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI12WOyw2AMAxDffEAiHYBNmCTIJERYAS6Pq1LKBIvlycrPywDTAMkf9hX5BJsyNfZOZobarlB7s7qLqecv9w1of44IG9rCPacRtLDQbxukau/efrsmcf/N3ldLzugWMN5AAAAAElFTkSuQmCC)}#webamp #playlist-misc-menu .sort-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXklEQVQI102OsQ2AQAwDXaVnlIgJgA0Qr7Ru3iuwPgVJ4Corsk/BaC7EXZwIJXNDCASNmI6gSFI2HSEjaZn53WlEd8rzbiGUR0ZlXzLZL5cHRPt/nv7ZMY41cexL8wCXGToqpM1dFQAAAABJRU5ErkJggg==)}#webamp #playlist-misc-menu .hover .sort-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI102O0Q2AMAhE74cBjO0CbuAmZyIj6Ai6vtBS6fvpCzmOYkuwJCganDvqOzhQn7tzuSsICuFOpaHS5mIq4cy5Z/9MELvwru62rZG3V2Xy0dPuupepZ83/f5v5MBfSedE0AAAAAElFTkSuQmCC)}#webamp #playlist-list-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-list-menu .new-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI123OsQ2DQBBE0R9NTiknKgB3YIE2nYRpgfYd3PlEwI9esBot5+yg7n9fKqNroxwhRVejLClSNyLQbSm4+3E/dxrlmGC6I2dsJooe9jDGLzvz58b5WUeNfZn9AKbQNSZ12uygAAAAAElFTkSuQmCC)}#webamp #playlist-list-menu .hover .new-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXklEQVQI112O0QmAMAxE7+cGENsF3MBNIngj6Ai6vk3T0uKDwCM5kmAbYBkgqXHuyG/nQH7u4HI3EaRYnW4MByEgvAwE4z/fD0TfSt4QLnp1Fye35iVrtZ+mPev4/wORlyvp1GfF2gAAAABJRU5ErkJggg==)}#webamp #playlist-list-menu .load-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWklEQVQI12MIhYMQhvByGAhiCE+DglRHhvCEtAQGIGRLNQSzwQDOZkBiw8RBqhMg6uHmQNQwpAHlIOw0NhCGsUEQzk6AssG2pmGYA3ezIUOoszEUGDI4CcIBAJZqO86fMyFaAAAAAElFTkSuQmCC)}#webamp #playlist-list-menu .hover .load-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDsgNIABCFmhbDCAsxmQ2DBxkOoAiHqYBTBzQoFyEHYoKwjD2CAIZwdA2WBbQWwRJHOEEe4HAE6RMXWXqbP6AAAAAElFTkSuQmCC)}#webamp #playlist-list-menu .save-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYklEQVQI102OuQ3EQAwDGSl3KYIrsK+Dwy2UTrJswe1fsA880YCgCKltfqpn8VV50i+VhQD1VGEA3FPlQED0VBlAIyfAMfp7Z9zKWjsO7FjueDnThZj5e2f/nGqfc5K6j80fAQw6zDOWMCAAAAAASUVORK5CYII=)}#webamp #playlist-list-menu .hover .save-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAYElEQVQI102O0Q2AIAxE76cDGHEBN3CTM7Ej6Ai6vlwL4iMkL5ejBesA0wDFG8eG5ensWO4rOeUOgiTkdAqP3CK3cKXInFYLlv2+oL2FZqXXRr3ddT5nc+2NvPzmzOP/L+cIMJ5Oo2aQAAAAAElFTkSuQmCC)}#webamp #equalizer-window:not(.shade){background-image:url(data:image/png;base64,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)}#webamp .equalizer-top{background-image:url(data:image/png;base64,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)}#webamp .selected .equalizer-top{background-image:url(data:image/png;base64,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)}#webamp .band{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAACBCAMAAABpaq8qAAABEVBMVEUAxv8SEh0SWwQTEx4XFyQaGigcGysdMBwfIDEhITQqKUIqKkEqmhYsK0MuLUcuLkgvL0ovL0svMiQwMEsxMC0xMU0xMU4yMU4yMk8yMlAzM1AzNFE0M1E0NFE0NFM1NVQ1NlQ2IRs2NVM2NlQ2NlU3N1Y3N1c3N1g4N1g4OFg4OFk5OFk5OVk9dCpCQl1EQTxNTWZYWHJZVjxasCxlmUVoaHhrcC1xzTR3QyiDg5WHd0yJ4jCNjp2QkJCQxz2SkqKTk6OTk6WWrI+ZmaidpDWfn62k4jipmGWrrZCtLSOvk4yvwziwcR3DcCrE2zLFVCrFhzDGeA/GszXOxtbTIhvTSR/cdx/gVB7gkijgsijgzTBk+3VYAAADm0lEQVR42u3bX09bNxjH8a8fP/lTombrhEC01TSkSuNik/Ym9q73XnKxqVs6VnUbNIFzbPcikNiIk4ZCIY4eXyB98OGIn+JjB4Wf+0aZN0l1KL5p4q+/VU91wqW0YXR0qsEnnHApPyJpUz5/dRe+4eJrU70nBjgaeG2jw3viyYTjYUaIOfs4t+KrtXwTSo75cBd+bO5OFSH+NAHtBfEREeIEJj+v2KeY7UPqZVTabjoFWXF4yV7TyfGAb88L8gVU8TCByS+hl5wgHgB8N5U2o4Lm1OLiQcDH7GeHzH0nB57B/N4U59zid+459Y7PU0E3vvgJqKpcDRdEqJ8iIVwJxVE/ld51QInaUj9l9Yo5glA/ZRlv+aVySlh+A6dQPxV3lfJqH6+esnyqHJDtE9VScRSjekoxFaifslOvz+qRupajfkqRTqmf4rxfPlIO6me5M+zC2MFEu3Yc2aqzRJbIElkiS2SJLJElskSWyBJZIktUT6JUun7u9KqL5UytFGIswlVPTalYjvVTs+crpET9LHaG1FI/7YTd/qHF+eSpn7JchiFBS/3UlJbHVFrshJXz+l8CiZAaqJ/Slu/56qcsT9wU8In6qeH6E7LkUhupn5r84kxypJZI/ZTUtg7AN8kHqJ8SQ9BjOBFPmwK38BJcxgCDjfkR2JgX0N6fGhMix4Nns1ZjhJgQOWGc0xVs2NNuxou1nLN31sn3eDe7NzW2DKZHvXYW274/Y8HhbB2bpptvP8Phv2uYhtyfGgQNfwBeIFA/Nfv7opXEDnDnhtvNRtUDNpteHzJ7Wuo9uksLHvA+4+H+3XgaunnINOcL2IQqQnwN4z+zdtK4LCut5UvhYLrivvLdP910JWG/nM15CIfvMvbpZ3wxgg+3UW9pNo2HMN+UDJjljaryVjfonhUX06NZM3ujfsW6ntcIRv9/YaPqBgXkcTpTIjlHMLJGlTWqrFH1lWiNqu2nNaq2n9ao2n5ao2r7aY0qa1TZJ8sPkMgaVbbqLJElskSWyBJZIktkiSyRJbJElsgSPVUia1TVtOqsUYU1qh6H1qjaftoJu/3DGlXbT2tUbT+tUWWNqsenNaq2hg5cd6PqPzjP2kl34l8l38GsmwkuM55C0z07LZtclzHGjGflxefLW+mijjQo2kmezTn/u2g2zeczf97J30fPc86mB8Xs976YnceQ3fntDyVf9ptbqQ9XZdqA06NUclpQhg9Aa1RtPz8But0Pz3B64+AAAAAASUVORK5CYII=)}#webamp .band .rc-slider-handle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAGFBMVEUAAAAICBApKUJKWmt7hJSLm6etvcbd5ukLNggsAAAAMElEQVQI12NQZGBgYFRgEC8vLy8WYBBPS0tzRqIExXDyQlxcQJQxEAgwAE1hFFQAAB9KDSykox1vAAAAAElFTkSuQmCC)}#webamp .band .rc-slider-handle:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAD1BMVEUAAAApKUJKWmvd5un5/v8UiEZ+AAAAJ0lEQVQI12MQYAACAQZmY2NjIwYGZiCHCYlyccDNg1BKQAAyAGQKAHJPAsUS1KniAAAAAElFTkSuQmCC)}#webamp #on{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAIVBMVEUAAAASWwQvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v8M+RL1AAAATklEQVQI12MoRwIJDFWr4GC5A0NVBxyUGjBUNRsbdzRpNHVoQHiCkh0aTU0aKDwlKG/mTBCvCcID6UfoQzUTYTmQV54aCgcGDCnGCGAAAPUyQLvRdOj2AAAAAElFTkSuQmCC)}#webamp #on:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAFVBMVEUICBASWwRSZnNje4R7jJyLm6etvcYvdU+XAAAAQElEQVQI12NgwAdMXODAgYHBLQ0OEoA8VDkgdnFgcXBhgfAERV1YHBxYUHgMUF5oKIjnAOGB9cP0maGYqYDkEgAFZxmn+1/+wgAAAABJRU5ErkJggg==)}#webamp #on.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAIVBMVEUAAAAA1gAvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v911B9qAAAATklEQVQI12MoRwIJDFWr4GC5A0NVBxyUGjBUNRsbdzRpNHVoQHiCkh0aTU0aKDwlKG/mTBCvCcID6UfoQzUTYTmQV54aCgcGDCnGCGAAAPUyQLvRdOj2AAAAAElFTkSuQmCC)}#webamp #on.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAFVBMVEUA1gAICBBSZnNje4R7jJyLm6etvcapTzEQAAAARElEQVQI12MQRAYMaDwTFzhwZBB0S4ODRCAPVc5RUNDFUcTRRQTCY2B1EXF0FEHhCUJ5oaEgniOEB9YP02eGYqYiklsAdNMdgDKFw2kAAAAASUVORK5CYII=)}#webamp #auto{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAHlBMVEUSWwQvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v/WADVeAAAAV0lEQVQI12NIQwWpDJkzUUAyQ2Y5MihzYsgsUlIqLxQvLBcXFC8UBwswcJSLFwIFQAgmICiILNDRgaoCZBaQI1heWA4xA8MWVIc5MaSFuCADJ4ZgJVQAABsNRRhxaDvQAAAAAElFTkSuQmCC)}#webamp #auto:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAFVBMVEUICBASWwRSZnNje4R7jJyLm6etvcYvdU+XAAAAS0lEQVQI14WOsQ2AQBDDAh8GYKMUHgF6ihP7j0CFxF+DS8tSIv0ymIh8T1xy9aIkI5wIEbmW/Qh2cPAr9BXb2QogOMaIaPSVtR19ACp1H3+cU6+ZAAAAAElFTkSuQmCC)}#webamp #auto.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAHlBMVEUA1gAvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v+vLTjBAAAAV0lEQVQI12NIQwWpDJkzUUAyQ2Y5MihzYsgsUlIqLxQvLBcXFC8UBwswcJSLFwIFQAgmICiILNDRgaoCZBaQI1heWA4xA8MWVIc5MaSFuCADJ4ZgJVQAABsNRRhxaDvQAAAAAElFTkSuQmCC)}#webamp #auto.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAFVBMVEUA1gAICBBSZnNje4R7jJyLm6etvcapTzEQAAAATElEQVQI12WOwQmAQBADtwSjsaDAlKAFCIf9l+BL8NZ5DgNJqVE/sTGR8j1xlUcvhmSEEyFSHksdwQ4OfoW+Yj9bAQTHGJHa+sranj59DSTnUdDwigAAAABJRU5ErkJggg==)}#webamp #eqGraph{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAATCAMAAACQnBKzAAAAw1BMVEUqKUEqKUIqKkMrK0QrLEQsK0MsK0QsLEUtLUYtLUgtLkctLkguLUcuLUguLkcuLkgvL0ovL0swL0owMEsxMU0xMU4xMk0xMk4yMU0yMU4yMk0yMk8yMlAzM1AzM1IzNFE0M1E0NFE0NFM1NVQ1NVY1NlM1NlQ2NVM2NVQ2NlQ2NlU3N1Y3N1c3N1g3OFc3OFg4N1c4N1g4OFc4OFg4OFk4OFo5OFk5OVk5OVpsbH5vb4JxcYZzc4hzc4p0c4p0dIt1dYwbWqB2AAAC2klEQVQYGQXBIQ9lSRkFwDpf930zCQqBxaLQ/H+PRuDXrCQkbObd7kNVzD/+qSay+fu/BDL87d/MMtL5628iiP2X31cQ5M//6cp3nrJ//u+upgM//2gAfv7BO6aOP/33ndQx4HVJMQGeXnSgB0/V/lWicJvObrKOrDNJCwJQ1XVzz1F3DxYTsaHBBbx7MIhsfDNHfwSNlE8vuCO8V7QAEJGzTnSlYxL3nojNJkVC+NRLGtoC8wjSIOl9Z2NJ3syeugkAwLvjyFtMl6FaGhoGyK/HZ1SX20D2CzQN+nn3vK8eOoaxAFC0vKxplMlx14qEucCdC10XJquy4/Ho/gKmbO/Mu5/sGQZcAAhN7tr1Jk3cWcu6EM4rGCbBXNdwouX72M0DgXizjh19T6S9twBASU1a+632nn2wiPIgCLDfTViHDV52oFHo+4Oy35M6Ww0KEBXlOilu9uKs6AMCHYH3McpZdQe29gshzE17tlSWZLkDAkCKhnV4wxwW8t4ZCqUAZC8xeL5yLihY6Xx3NGfclqEAgLg30dPcW3dcNzBCigBAigvI95kPSMp36Udti+be6kkBoK0knVTXJzKLwnYgzBAea8Y0hwGery9I2vjkheSMe5iJjABwG5G0Rm6v27ksCXNfEMDXoLHSAq/nM0grfDs+r46LIUgLwKRoj1wd5TOzSG2ZLUgFmCu1dALPd7sFSVDXO3L1rDWARAElTmXuEe5qf8290uDdUqZDyHJnJAfwePrc7wtVsz+SPdou5xwKCCDK0pNFuehkkaI0dC7YXDe6kzP4ft/j+bGJ4J5fH4WIZSnXBYBGxDrvgt2MPRW2hhB30nDHIHTw4OXXD9BBn3yCNF3W62aNAYA7Dtfc4867j2sOxBkCiWIGUsrw5bXyA9FRJj0SzVJZ9qK3ANqRvWql7crWMitq27OBlNAro0E6+OKeF6Sy7XOPNhk3CmQCIORWVk/inPcO/g8Gk8tpHAw47gAAAABJRU5ErkJggg==)}#webamp #presets{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAMBAMAAADrBkIEAAAAGFBMVEUvN01KWmtSZnN7hJSLm6ettca9ztb5/v8/TtPPAAAAXUlEQVQY022PsQ2AQAwDXblnlBcbwAYI9K0bbgXWpwAEErnSuii2topV/ShY1PmzN3UiZOQIWY7uGDsBEwj+2pHjyCF+bJwACdfBGyNfD9Bt102qOU3bPP5pmoaKE9BgTHfswQ68AAAAAElFTkSuQmCC)}#webamp #presets:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAMBAMAAADrBkIEAAAAElBMVEUAAAAICBBSZnNje4R7jJytvcYlh7IyAAAAW0lEQVQY03WPsQ2AMAwEv/gFMgI7QP+RLgNQsP8qFAGBlOTK01m2VaZopXdGqkq7Rk6VtqiJkJEjZDl6NHYCJhD8ryPHkUP81jgBEvrAp5H7AmSqyjG/ZJt9eQMWOi9EkrQa+gAAAABJRU5ErkJggg==)}#webamp #preamp-line{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAEklEQVQYlWPcdfruf4ZRMKQBAPWXA2N/DPRhAAAAAElFTkSuQmCC)}#webamp #equalizer-window.shade{background-image:url(data:image/png;base64,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)}#webamp #equalizer-window.shade.selected{background-image:url(data:image/png;base64,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)}#webamp #equalizer-volume.left::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-volume.left::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-volume.center::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-volume.center::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-volume.right::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-volume.right::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-balance.left::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-balance.left::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-balance.center::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-balance.center::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-balance.right::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-balance.right::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVKQT5SSj1sXUO0kWO/uX6z+JYEAAAAM0lEQVQIHQXBwRGAIAwAsLT07Z2zsP8qbuDBAliTmDjl1m8Gob6HK5uWti27V6uxDDFxfn1PDx8P0VYSAAAAAElFTkSuQmCC)}#webamp #equalizer-window.shade #equalizer-shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVKQT5SSj20kWO/uX7CsWHebnl7AAAALUlEQVQI12NQAgIFBiUGBiYFBgVhYwMFBkVhY0Mg6QwmXVwEgeIuLgIwNWD1AJzCBeFqt4OOAAAAAElFTkSuQmCC)}#webamp #equalizer-window.selected #equalizer-close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAALVBMVEUoJz4oKD8pKUAqKUEqKUIqKkMrK0Q6MSljXjtsXUORbkq0h2O0kWPCsWH///8vo79mAAAAO0lEQVQI12NIdTFWUmDIbC/vFGCI2Nl5QoAhfM6a6UCy61U7A4P7nLVAdsTJzhsMDJ5ANQwMLkaKCgwA6D4RaTQt0CAAAAAASUVORK5CYII=)}#webamp #equalizer-window #equalizer-close:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU6MSljXjtsXUORbkq0kWP////9IyyfAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}#webamp #position{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAAKCAMAAACuVWMrAAAByFBMVEUPDxgPEBkQDxgQEBkRERoREhsSERsSEhsTEx0TEx4TFB4UEx8UFB8VFSEVFSIVFiEVFiIWFSEWFiIXFyMXFyQXGCUYFyUYGCUZGSYZGSgZGicZGigaGSYaGSgaGicaGikbGyobGywbHCsbHCwcGyscGywcHCsdHSwdHS4dHi0dHi4eHS0eHS4eHi0eHi8fHzAfHzEfHzIfIDEfIDIgHzEgHzIgIDEgIDMhITQhIjUiITUiIjUiIzYjIzcjJDgkIzckIzgkJDckJTklJTolJTwlJjslJjwmJTsmJTwmJjwnJz0nJz4nKD4oJz4oKD8pKUApKUIpKkEpKkIqKUEqKUIqKkErK0IrK0QrK0YrLEUrLEYsK0UsK0YsLEUtLUctLUgtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swL0wwMEswMEwxMUwxMU1hYm1iYW1jY29jY3BjZHFkY3FlZHFlZXNmZXRmZnNnZnVnZ3ZoZ3VoaHVoaHdpaXhpaXppanlpanpqanlqanpra3xrbHxsbH1sbH9tbYBuboBvboFvb4NvcINwcINwcYVxcYZxcoZycYdycodzc4hzc4pzdIp0c4p0dIt1dYwExkcuAAACuklEQVQYGQXBAWEANxADMPmSFsOAjT+QNX+eFEYgZicIBCMQMBlphNGBIJgZQLjId3bmPtcHfncAkIZoAAAAAECBAuy7Hsfb2dnuwEPB7qKawjer1OYBhR0jAFMAFQIAQRJsAjSBnQUJF74aHp+DuQAgDVEAAAAA0EIVAPvgy7BSeLTgWUChFhr5QAsS/jFumXD3NrlkiGDOkNnJbGJigksiOHuIuyYmFdzxMmaH3/9+GHvAqKPTkMKgAQCbziLV77xZCiv/AZY+qB2bv/Oofmn5+1mPWnm0fPieUjVG5pZJMZJ9aqXB75nFTm3qxgAsxZ5SxrBNcN/uGQz256vdKdg5+aRBMSAAAFlorc0OCQtg11sXYnbtobUU7nJJ1FA+1D3QmNQZjHKXmptFA3+LmAzGK3D1OyAjxDo1swV0Abc95UQZY4toTBKjAAqgE1qdo5YW/HFh/OSBMuBiBLx97+GTtxrf0NVHpSbxHki4w65eI8GECWoGluBxP0gg7iQwgTdmAF9nx6iwmeecpNK0aVdQEKWKLch+MxB4zvVgAbCr3vewCp+5QKpU6FKASaQM7oWZ3y9vBPTMgtCMeyjoOzBN4fGZ3YDfmWVA7zcmpTjvWpVSVkYRQAiTgXxfp4uqrJt92KUPAJun+FJwAkpHFAsvoLuD81MLrLqSSwOHCRM2jBnhXi7iGxH3rmEGWH8H4P4NKglchgoTkwUA0M3aqJ67pgt8w9+MNcjlgcV3oaelLA/7bSgahUfBrBkMnlHoR1LMM0Ew7HQFfDcgi3pzQYB1i+HKDxbg+8yXENasqQAASbNa5c1OhjRr/d3HWNiF2tHOg1ShO6hxPCld4S8IuOPfCIjpIJiaHdMDaXL2QJAQEAYEGCKAEQRpgLGGaBoBAABomkIrWkAVbIFSNkVhU4raFMWbLYV2WcX/K67c097eK2wAAAAASUVORK5CYII=)}#webamp #position::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUJAgJlZXNlZnN1WyKDaTCNdTqcgkqvmGHFsn7by57u4rv06sf19fW6wGFFAAAARElEQVQI12PQnIkMAhgkXZDAUQYGSY/dcLCnFMj3PgMHp8F8YziwBvPL4aAaxPdB6N8G4p9CyJebAvmhyICBQYABBQAALnc7YhsUgeUAAAAASUVORK5CYII=)}#webamp #position::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUJAgJlZXNlZnN1WyKDaTCNdTqcgkqvmGHFsn7by57u4rv06sf19fW6wGFFAAAARElEQVQI12PQnIkMAhgkXZDAUQYGSY/dcLCnFMj3PgMHp8F8YziwBvPL4aAaxPdB6N8G4p9CyJebAvmhyICBQYABBQAALnc7YhsUgeUAAAAASUVORK5CYII=)}#webamp #position:active::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUgDABhRhBmSxNsUBdwVRt4XSGBZyqPdTmhhkuwmF6+qG/DrnXYxZOv4MtwAAAAR0lEQVQI12PwnIkMAhg8XZDAUQYGT4/dcLCnlIHB0vsMHJwG85XgQBvML4eDaiBf0wehfxuIfwohX67KwCAZigwYGAQYUAAAXWI7mESGeYIAAAAASUVORK5CYII=)}#webamp #position:active::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUgDABhRhBmSxNsUBdwVRt4XSGBZyqPdTmhhkuwmF6+qG/DrnXYxZOv4MtwAAAAR0lEQVQI12PwnIkMAhg8XZDAUQYGT4/dcLCnlIHB0vsMHJwG85XgQBvML4eDaiBf0wehfxuIfwohX67KwCAZigwYGAQYUAAAXWI7mESGeYIAAAAASUVORK5CYII=)}#webamp #shuffle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAilBMVEUQWgAqKUIqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU0xMU4yMU4yMk8zM1A0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NlU2NlY3N1c3N1g3OFc4N1g4OFk5OVpKWmtSY3N7hJSElKWttca9ztbV3vLv///LbncEAAAAqklEQVQoz5WSsQ7CMBBD37WpGPgDpJtY+/8fAxLLfUbVM0OiNgKG4CGKL45jRbYbiSUIkBAiMZJEqI2EMjGYynVhHHoWmIfle1IEOeqeogCwAQwFq3oesIoADyfaAt4mBHivb/Av5h8nRQCslQVOHPrK/Nif/ouaSdDd+OlvXYDD2qOP1r9j98s8/p/5KlarMIoCu/SPXvmf/yb2SQJkotZD087Z2VrcBIM3KB9V4lGQbMMAAAAASUVORK5CYII=)}#webamp #shuffle:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPBAMAAACGpYupAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAAY0lEQVQY02MQxA4EGHBLuIZighBDoER4ORYQCJLAoiMUIiEoKIpdQkgpNYAhIJSVNQBIARkBDEgSoRCJUAiESoilgXQwYOoAgQBsOkDiIDsCWMHCDCg6sLoKh4Q7LglD7IEIAKjwVurEkbm9AAAAAElFTkSuQmCC)}#webamp #shuffle.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAilBMVEUA1gAqKUIqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU0xMU4yMU4yMk8zM1A0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NlU2NlY3N1c3N1g3OFc4N1g4OFk5OVpKWmtSY3N7hJSElKWttca9ztbV3vLv//8gEwg9AAAAqklEQVQoz5WSsQ7CMBBD37WpGPgDpJtY+/8fAxLLfUbVM0OiNgKG4CGKL45jRbYbiSUIkBAiMZJEqI2EMjGYynVhHHoWmIfle1IEOeqeogCwAQwFq3oesIoADyfaAt4mBHivb/Av5h8nRQCslQVOHPrK/Nif/ouaSdDd+OlvXYDD2qOP1r9j98s8/p/5KlarMIoCu/SPXvmf/yb2SQJkotZD087Z2VrcBIM3KB9V4lGQbMMAAAAASUVORK5CYII=)}#webamp #shuffle.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPBAMAAACGpYupAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAAY0lEQVQY02NQwg4UGHBLuIZighAjoER4ORYQBJLAoiMUIqGkpIpdQlEwNYAhIJSVNQBIARkBDEgSoRCJUAiESqilgXQwYOoAgQBsOkDiIDsCWMHCDCg6sLoKh4Q7Lgkj7IEIAGMfXXXsp3orAAAAAElFTkSuQmCC)}#webamp #repeat{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAAeFBMVEUQWgAoKD8pKUApKkEqKUEqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU01NlQ2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1g4OFlKWmtSY3N7hJSElKWttca9ztbV3vLv//8ki4GoAAAAgUlEQVQYGQXBMQ7CUAwFMP+SzkgoO1vvfyQOgJBYWKB52OsOQpIVSJaZTdTnCgAAIDUuAACAcwoDAAAyKfCFHQBAAQ+OyO8NGlAAkL3Bs4Fa4AAvGgAqsAfQAKAWAPQTNKACgNYAoBYBAAAozgQAAFAyAQAAWLeRNSQRmS3j3GTCH4ZgNtlEi15VAAAAAElFTkSuQmCC)}#webamp #repeat:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPBAMAAAAFYbKSAAAAFVBMVEUICBAQWgBSa3Nje4R7jJyPn6itvcb4vicLAAAASElEQVQI12NgwA9MXODAWYGBwS0NARyAXISsC5jLwMCCzGUUDAHpYkFwnUBSUC5raIgDA4ILkmFB5Tog9KJZhMI1Q+UqIHsAAPs1JqMDCtK2AAAAAElFTkSuQmCC)}#webamp #repeat.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAAeFBMVEUA1gAoKD8pKUApKkEqKUEqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU01NlQ2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1g4OFlKWmtSY3N7hJSElKWttca9ztbV3vLv///lInoXAAAAgUlEQVQYGQXBMQ7CUAwFMP+SzkgoO1vvfyQOgJBYWKB52OsOQpIVSJaZTdTnCgAAIDUuAACAcwoDAAAyKfCFHQBAAQ+OyO8NGlAAkL3Bs4Fa4AAvGgAqsAfQAKAWAPQTNKACgNYAoBYBAAAozgQAAFAyAQAAWLeRNSQRmS3j3GTCH4ZgNtlEi15VAAAAAElFTkSuQmCC)}#webamp #repeat.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPBAMAAAAFYbKSAAAAFVBMVEUA1gAICBBSa3Nje4R7jJyPn6itvcYox7XLAAAATElEQVQI12MQRAEM6FwTFzhwVmQQdEtDAEcgFyHrAuYKCoogcwUYQpwVwWIwrhNICsoVDQ1xFERwQTIiqFxHhF40i1C4ZqhcRWQvAAA51isA/VWazgAAAABJRU5ErkJggg==)}#webamp #equalizer-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAAUVBMVEUQWgAqKUIqKkMrK0QrLEQsK0MsK0QsK0YsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0wwMEsxMU1KWmtSY3N7hJSElKWttca9ztbV3vLv//9O4LHRAAAAaUlEQVQYGQXBwQ2DUAwFMEODRCao2H++HnrKofBf7e0NAAD5lhcAAM+6iwUAkJVXwQ8Ho42GVeDjimmmTSM7AGYAKHCBhmmww5GEntHTAykCcIozZ6A8CQAAqawAAEDda/NgbZFErMfuD041NCuZPULmAAAAAElFTkSuQmCC)}#webamp #equalizer-button.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAIVBMVEUA1gArK0QvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//9R/wqlAAAAT0lEQVQI12Moh4MyAYaqVTBQAuR0QEF7MIhjbNzRpNGkAeEYcHZodGg0wTlKGjCO5UyQDFQZEAD1QGTg9gA55amhUADkpBjDgQCDIAIIAAAWsDNHmvvPEQAAAABJRU5ErkJggg==)}#webamp #equalizer-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAASElEQVQI12MQRAABBhSOgGsoFAQDOeHlUFAK4sBkQsEcQcHQANYAVghHSC2UNZQ1AM5hYIVxxNJAMlBlQADUA5ZxRzbNEOECAM5YHW8MP5O/AAAAAElFTkSuQmCC)}#webamp #equalizer-button.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAAR0lEQVQI12NQUIIDBQZUjmsoFAQDOeHlUFAK4sBkQsEcJaXQANYAVghHUSyUNZQ1AM5hYIVx1NJAMlBlQADUA5ZxRzYNyQUAEUAg+7nvOG8AAAAASUVORK5CYII=)}#webamp #playlist-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAAUVBMVEUQWgAjIzgkIzckIzgkJDklJTolJjsmJTwmJjsnJz0nKD4oJz0oJz4oKD8pKUAqKUEqKUIqKkEvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//+EzjHeAAAAXklEQVQYGQXBgRHCMAwEMLk4WYFj//nKAOHqR6o3AADk214AADyjGQCATKrhh+WwzwZygfve2ADUBYADwDT4gA2AhhUAxwZNACssAtqTAACgMwEAwPRRI5GpmTIhUX81UygSftVjhQAAAABJRU5ErkJggg==)}#webamp #playlist-button.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAIVBMVEUA1gArK0QvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//9R/wqlAAAASklEQVQI12Moh4MyAYaqVTBQAuR0QEF7MIhjbNyhpKEB5RhwdmggcxAyljM7NDpgHCDQAMqBOXB7gJzy1FAoAHJSjOFAgEEQAQQAwMcyRToQk0kAAAAASUVORK5CYII=)}#webamp #playlist-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAARElEQVQI12MQRAABBhQOo2soFDgDOeHlUFAK4sBkQsEcQcFQBlZWKEdILZQVmYOQEUsLZQ2FcYCAFSgH4rgjm2aIcAEAbLsb8tZoQy8AAAAASUVORK5CYII=)}#webamp #playlist-button.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAARElEQVQI12MQRAABBhQOo2soFDgDOeHlUFAK4sBkQsEcQcFQBlZWKEdILZQVmYOQEUsLZQ2FcYCAFSgH4rgjm2aIcAEAbLsb8tZoQy8AAAAASUVORK5CYII=)}#webamp #title-bar{background-image:url(data:image/png;base64,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)}#webamp .selected #title-bar{background-image:url(data:image/png;base64,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)}#webamp .llama #title-bar{background-image:url(data:image/png;base64,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)}#webamp .llama.selected #title-bar{background-image:url(data:image/png;base64,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)}#webamp .selected #title-bar #option.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAHlBMVEUUFB8VFSAVFSIVFiEWFSAWFiEWFiI0MCyah13sznoaG8L5AAAAPElEQVQI12NgYBAUCmBgmCCoaMDAWSmoZMAwvVIwNIBhRueMjgkMAoLTKwMYGAWnz0xgEBT0DAWxXdMSACxMDDJsyBoOAAAAAElFTkSuQmCC)}#webamp .selected #title-bar #option:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUhKDU0MCyah12jlGrsznoe/O3VAAAAMklEQVQI12MwBgIDBgMHBgYDBhMRASDpKCIIJJ1UnJQcGAwEHUWAsoyOLkCSgQWIweoBtzQG0TH1VqcAAAAASUVORK5CYII=)}#webamp .selected #title-bar #option:selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUhKDU0MCyah12jlGrsznoe/O3VAAAAMklEQVQI12MwBgIDBgMHBgYDBhMRASDpKCIIJJ1UnJQcGAwEHUWAsoyOLkCSgQWIweoBtzQG0TH1VqcAAAAASUVORK5CYII=)}#webamp .selected #title-bar #minimize.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAASFBMVEUqKUIqKkMrK0QrLEQsK0QsLEUtLUctLUgtLkcuLUhFQTxSSj1aVzpoWTVrXUNzbFKId0mckXWqurG71tm/uX7AwcbE3+HO4c5KSa+JAAAAPElEQVQIHQXBwQHAMAjEMJvQfLv/lJ0ArpK3FsLQZxogW9uqXjqlkKQphYTmcGBI4wPU6OVd4FtvYEzyA+cLGDTjuSw1AAAAAElFTkSuQmCC)}#webamp .selected #title-bar #minimize:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAIVBMVEVFQTxSSj1aVzpoWTVrXUNzbFKId0mRbkqckXWjlGq/uX4Hs2WWAAAAOUlEQVQI12OYCQQTGKYzMLBPYJggKCgwgWGSiYvRBIYpYWkhExhmdK3qAJKrVq0AqunoaJ/AAFYPAAQVFS+2qihdAAAAAElFTkSuQmCC)}#webamp .selected #title-bar #shade.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAMFBMVEUtLUgtLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEswMExFQTxSSj1rXUOqurHO4c6W/ePHAAAAQUlEQVQIHQE2AMn/AKqHZlVQAJnu7uUQAK7///4wAK3d3d0wAKzd3dwwAJzN3cwwAJvMzMNAAIi7u7MgAIZlVTAwDDgbUKzozR4AAAAASUVORK5CYII=)}#webamp .selected #title-bar #shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVFQTxSSj1rXUOjlGq/uX5Idn/CAAAAM0lEQVQIHQXBwRGAIAwAsLT07Z2zsP8qbuDBAliTmDjl1m8Gob6HK5uWti27V6uxDDFxfn1PDx8P0VYSAAAAAElFTkSuQmCC)}#webamp .selected #title-bar #close.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAALVBMVEUoJz4oKD8pKUAqKUEqKUIqKkMrK0Q0MCxoWTVrXUORbkqjlGq0h2PCsWH///9ex0i3AAAAO0lEQVQI12NIdTFWUmDIbC/vFGCIONm5Q4AhfPbq6UCy61U7A4P77LVAdsTOzhsMDJ5ANQwMLkaKCgwA5wURVkMAFf0AAAAASUVORK5CYII=)}#webamp .selected #title-bar #close:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU0MCxoWTVrXUORbkqjlGr///+HjTObAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}#webamp #clutter-bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAArBAMAAAC3GdQgAAAAElBMVEUAAAAAAAgQECEYGCkzPElgYGraVCJcAAAAVElEQVQI132NsQ2AQAwDr8gCv0FGMNLTu8gKv/8qFCAgQqI7WWebbYyBACQJEUbyRDgaTf95Va3xeGWkKUTQqPz12m9eyyYB8s7eVEUSJs8VIPe1DmVJGRTmaMgdAAAAAElFTkSuQmCC)}#webamp #clutter-bar.disabled{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAArBAMAAAC3GdQgAAAAD1BMVEUAAAAAAAgQECEYGClgYGoHCnLLAAAAIklEQVQI12MwFBQUZDBgAAIDIBhULAVUlgJhFlivgomLCwA8qROh1kJ8awAAAABJRU5ErkJggg==)}#webamp #button-o:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGUlEQVQI12Nw0GBwaWNwaIKRGQwODAwuLgA+SAT1jbNsAAAAAABJRU5ErkJggg==)}#webamp #button-0:selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGUlEQVQI12Nw0GBwaWNwaIKRGQwODAwuLgA+SAT1jbNsAAAAAABJRU5ErkJggg==)}#webamp #button-a:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGElEQVQI12Nw0GBwaWNwaGJwWQUmgWwGADIVBK9/og4OAAAAAElFTkSuQmCC)}#webamp #button-a.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGElEQVQI12Nw0GBwaWNwaGJwWQUmgWwGADIVBK9/og4OAAAAAElFTkSuQmCC)}#webamp #button-i:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAF0lEQVQI12NwcWFwWMHgksLgoAAjVwAALckEbUwsrjEAAAAASUVORK5CYII=)}#webamp #button-i.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAF0lEQVQI12NwcWFwWMHgksLgoAAjVwAALckEbUwsrjEAAAAASUVORK5CYII=)}#webamp #button-d:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAHElEQVQI12NoYGDo6GBo+MPQcZqh4TCIdACSfwBnkgl9KMHv2wAAAABJRU5ErkJggg==)}#webamp #button-d.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAHElEQVQI12NoYGDo6GBo+MPQcZqh4TCIdACSfwBnkgl9KMHv2wAAAABJRU5ErkJggg==)}#webamp #button-v:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAF0lEQVQI12NwYGDwOM3gcBhG/mdwsAEAPG8GMJvxEOEAAAAASUVORK5CYII=)}#webamp #button-v.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAF0lEQVQI12NwYGDwOM3gcBhG/mdwsAEAPG8GMJvxEOEAAAAASUVORK5CYII=)}#webamp .shade #title-bar{background-image:url(data:image/png;base64,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)}#webamp .shade.selected #title-bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAOCAMAAAA7SAh7AAACFlBMVEUAAAAA+AAKDRYNDRQPDxcQEBkRERsTEh0TEx4TFB4UFB0UFB8VFSAVFSIVFiEVFiIWFSAWFiEWFiIXFyQXGCQYFyUYGCUZGSYZGicZGigaGScaGSgaGicaGigbGyobHCscGyscHCsdHS0dHS4dHi0dHi4eHS0eHS8eHi8eHyUfHzAfHzIfIDEgIDEgIDMhITQhIjQiITQiIjUjIzYjIzgjJDgkIzckIzgkJDklJTolJiwlJjIlJjsmJTsmJjsmJj0nJz4nKD4oJz4oKD8pKUApKkEqKUEqKUIqKjoqKkEqKkMrK0QrLEQsK0QsLDssLEUtLD0tLUctLUgtLkctLkguLUcuLUguLkcuLkkvL0EvL0ovMEswL0swMEswMEwxMUIxMU0xMk0xMk4yMU0yMU4yMk8zM1AzNFI0MCw0M1E0NFE0NFI1LRA1NVM1NVQ1NlQ2NVU2NlU3N0Q3N1Y3N1g3OFc3OFg4N1c4N1g4OFk5OUc5OVo9P0w/QitFQTxJSVlOTl9SSj1YWGJaVzpbW2JdXWdgYGpiYm5kZHJmZnVoWTVpaHdqanprXUNra3xsbH5uboFwcINxcYZzbFJzc4hzc4pzk5p0dIt1dYx3d4GBl42EhI2Id0mIiJeUlJ6Zc0Kah12ckXWjlGqlpauqurGztri2nFS71tm/uX7AwcbE3+HO4c7V1drj4+fsznrvvmbx8fP////Kv08RAAAFRklEQVRIx+2XTYiVVRjHf89z3jszXq4zmJozvpJhfoQp4a5NIrRwEYFIi4hUKsIW0aKdGISISZCLBDcRuFCIVm4icpXtohoilEEFwcXc8UrkoNnVYd7zPC3Oee/MnQ8cXHcY5p6P55z3Of/n638kkJvAgq70D5KkuNLorde7C3FRQFBwkbxNoBA1zYcEEFCXelEUmftOUdFwcWS+NoILgoAFvE9NwMXBXW1uVK8Apk6VuuA4EJOMY2ppQtwBg6hVkiw4QX+T5ceynFg90KUnZGm0F5+jC7ebzoPGEfCF+oFLDYapZXhqfKxPcGFnwUQSPlfA54hn0wgS0q+6IoTYME1WTTZmAFBELaQdKqgHRBCXBtKTFBpWO4Zq8iVVUARBKVws9NzPinSsZxgUCsBr70MxhR5E85uRcPD0J1RFla8XswtY7SGOGYZjYhhm5hhEcROPuIGjEC328CoyJHj6eqhEcECsz5DeCxTEg5PgNEDELF0jKhFBC8WMoiFgWT+MGPNhEVSLfD0HBVWKAgwSJA5WQ7UIkH6nNqGyqja+imCKmRBT9LhiII4loAQUHBePtbcU9VUvvgPiURVxEDcFYsjJoLZWz5WzB6s86tPpBitrO1YovgPgAACjHRil/pem6OgoU2psBGjjm5iELbdN1dyT4+hvGSHPjnNk3NkCcLPyxuxugD8MXuvehQ3NH9ACggW4ePniIRAEcfmao2dbH5wa/vjs0NGvBn8devnPb/RM0fmCMzw8eXyYY5+sg+rqJYRHx1rz73BwhZicWqH4KeDh6QMolFMbS9owWkJCZbQMUAam2FgCMCmUZXuyvK0GIq9eSYYfS95U9fKGPB8Atl/3andYP8yDPeN494Vmtzl2Czy5KBcvp4QLuNAdPtziozXTKXe8dAs4UngLoPXmaghw7dpb21RcGOFpWlh2ReYSX5YbySGysQwxzfVQ6ROMiEMos7jvDfuu4HU66WuNwQBxBq0CwzD8F87d5tjM4J27uBc5SF+BC/dh5H0EJnfugU2NO0nF1iZg8+xMa9cEs43dPB5yGB3AMIHxp8JkvD/tL1UbAPh9XkUqwxwA5SJQevUqlKAGewNh308YaUiViy+4NAdWwaNABTtn6s3dmWfudXGkSMn8kAsXfmH/ewjw/c7hx2GtnwugzFRrIYx0Z1uvTzC9fujBAMBI6++fXQS2PhUmW1foJ9tqRAzaPVAi7fmQaM8PKiC2Swy2EIHtN2uJSlJuBcTXMQiNtHMQJiBCc/DeYBPxVPEkV/39mRjcmG08CGv/zR+68KFwuBgYoAX8M9x5Docb36Wqw/3yaTBpLbvii+Taud+hBNOFiORK24ug9u2kUbtfoKgyaYnuhEFgVZRZ4vQapokENozd6TbHuhNGkWJWgHfPv5fZkk8/e4e13WyWiRsvsvnhp3KytQs6q89/lquQWoDmtyxFup7UvgRg+olyxwEOmqG06XRGUTp12FjuTcFUSrFRaU9WtI060uJ1eHsB1o7/+IYBlxyuMgmMe6R56y50mygSTpwmkbZCauaWyTQN6VFwBKQBKMHSWEEkYCqCQCNvQkWUgAUBCaYKWkRVtCbziZEJ4hJSWdeaAPb4mksf510ebKtZq4tJCiADx4IlDuJQ4YCbVmCeyYlVxSwGlbhLBW64GHZb50CMVaxzUJqq3xdSX7bWTXLVFoiERFobmSWReK9ZDl5VA/PEZbV+kBSZGgbBLZ3qmvKCUlCzO8uQqLJE9QAz6xk/iplVVInDCpJ7DlVAcMcqMNwzbWQ2we2Og1kqUiD/vwEXvQH/A3+xY8OlLccKAAAAAElFTkSuQmCC)}#webamp .shade.selected #title-bar #shade{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAAM1BMVEUtLUgtLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEswMExFQTxSSj1zk5qBl42qurHO4c7FV37rAAAAOklEQVQIHQXBwQ2EQAwEMCdEPK7/YhFiM2fXzybCxAXvN1VVbe9tpenSDDCh+GhZVmpyHDwZu2HP9QfI+BkLtDdVPQAAAABJRU5ErkJggg==)}#webamp .shade #title-bar #shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVFQTxSSj2jlGq/uX7CsWH/Y2uiAAAALUlEQVQI12NQAgIFBiUGBiYFBgVhYwMFBkVhY0Mg6QwmXVwEgeIuLgIwNWD1AJzCBeFqt4OOAAAAAElFTkSuQmCC)}#webamp .shade #position{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAHAgMAAACTjE7vAAAADFBMVEUAABAwMEsxMUJaa3u9OGBkAAAAIklEQVQI12NgAIIDDFqrVq06wCAaBiZDQ8PAZCiM/A8EBwAZeBBhq+F40QAAAABJRU5ErkJggg==)}#webamp .shade #position::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp .shade #position::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp .shade #position.left::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp .shade #position.left::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp .shade #position.right::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp .shade #position.right::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #volume{background-image:url(data:image/png;base64,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)}#webamp #volume input::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #volume input::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #volume input::-webkit-slider-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp #volume input::-moz-range-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-top{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUAgMAAAAFGX4uAAAACVBMVEUeHi8rK0Rra3zjkZV/AAAAG0lEQVQI12NggIJVYNDAEAoGDlSj0QGx9kABAFXxKF3wQT+3AAAAAElFTkSuQmCC)}#webamp .gen-window .gen-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABsklEQVQ4ja2VsY4UMRBEX/VucEKQEZAsEoII6ZAuIUFEhGg+EQm+ZEngHy5YkgtIjmg2dhHYHtvL3h2I6WRkT7mru9zd1m53aQYTktpKAgUySCAFSIiMUQiItlb9Rt6R2AJM0zTSKLoD7bA655VICCI7rPjTc9vq+Ov+ew61Hs1hL44HYolQLA6X/xWvaAFJRCVxkWpcN7PbjjpczaqX6tS2I9AtTWCeD2cP/as1EueblYEQ8/EHH9695NXuYj2SmqgFKtK8efvxvwkGEqROrGxfPn9amcQu1dB+Xr1+tjIJFAIvpfXz9sj7q6crk5TLt8yTxy+4Ptxwffi1MklPlMyji+co6shQ6/rSbG0vyErH2Wb8g2Q+5sgrIIOj9lvX+eN3GTM9edkP7jBjsLGNSYujc8h+YP6dXMWmaWrRAiiIKlM/hfuMh8HYZt2dJAD7/bcmlTZECGlDECg0SlbuZKPAw2C9R66qhEkYgVMubRuryGgPIgkK2r2LB0gqOCXAJCfsNEzknuZ0clfiB0i6yFMphFIQg1uPD4VdMi+Ie++k2jzfLpdftY7Y5H44+/yOJfwbpYWAKYEHyZMAAAAASUVORK5CYII=)}#webamp .gen-window .gen-top-left-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABqklEQVQ4jbWVu04cQRBFT406QNY6ByG00hhZshGIzYhNyhL7D/gf/ofIu6HlH7AjE6IVIQHUddCP6Z5dCwt5OulXPW5Vdd22k09fJIQkACQnLYgnIBwEipIgwQ6dPLvASLJAWF4t0zYrRAP1etuYEojaKWXtGuAhEVbr73mLSbg8ushGpGhcKpGUswqM5GlOwDI4ic6sA8CyczPGo8OGcwMDzAxhQ5S1QmVCgM3nfXP/v8ds1hNuvp5M5uDn7yfu1r8I7w4uJ3NydgB361tscX46WbrcnnjcvBAWn/en8gEQ03V8tDeZg28/HgCw/sPHydL18vzM7H1PONy/KM0G4FVXC4E7npvOvXR125SUZsxrr9gibDb3Q3fydu6KLLGbuzrxD9l6TcQsNnlmj1pVIlwvrweE/J0UW8QjYqyJM1kqRCsRVqtMkMIEXhFbTmMhzqpuTS1ynXbUpCFIZKXAY4qM51bAxAxZyaNp0JCEKj4V0A15LVJbJagNjm7KVN+aWomuVum2YohYTERoCd4uqabYI6pPT9iRaJ5hjmj8U46fcIm7fFyD+VzTP7yJnc07OZspAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABYlBMVEULFRIMDAweHS4eHi8fHyIfHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUiIyYjIjYkIzckIzgkJDklJDomJTkmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEMsLEUsLEYtLUYuLUcuLUguLkcvJwgvLkkvL0ovMSUwL0kwL0owMEsxL0wxMC0xMEwxMU4yMU0yMU4zMk8zMlA0MlA0M1E1M1I1NFM2NFM2NVQ2Nhg3KxA3NlU3NlY4NVU4NlU4N1c5N1g5OFo6OFk6OVo7OVw7Ols7Olw8OVs8Olw8O11GQh9JRjlORDBQPx5dVztiWkVqanprXUFra3xsa3xsbH5tbX9tboBubX9vboFvb4JwTyxwb4Nxb4RxcIVxcYZycYZzcodzcoh0c4l0c4p1dIt1dIx2dY13dY6Gd02QkJCZc0LWhhB9AAABJUlEQVQYGT3BvWqUYRRG0X2++bRSGxsVhBls0oidP3W8gYCFXoW3JV6DVgmxslBbIQELJRAQA0Kc9zzbmcBkrVrZrTEaYuylEXs+EK/EEKNo4HA+SVf0n2mTMTqJcc00TTeBoGwUBZMINXPteTL2fn2E/XvHg/ktOz/fP4Ve7ZerU2Cqaw/YePdndXd1+qEWzIfsrKGbXNy+OCPN/IhrX1nI7+XFw3OqnO+z8wOa17dOz86XL79L3WHn7zMz9r59gSePP62pgxrG0bG1L23TraRWI24kRGNilv3iqJiaAgQRtEAomF+JIYRotPGIrfkki3UcncTkcqQHsjEtGEBRVeRymIBsTBYb3lCaqTqJbE0lG5WqVHrEyJX586A12omj45tj2foP9wDyBsXxPvcAAAAASUVORK5CYII=)}#webamp .gen-window .gen-top-right-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABk0lEQVQ4jbWVMU8DMQyFv2fdAGICMbCUSsDUSkgsLIgJNqT+/6kDC0s3ToKpZjgncVpYkC7L3cXxe87L+UWLxb1LQhIAQjjCBMgQgISINQJc/RygsjbWI5swEMNmswnwCEZiBiiA9QkdePvWwXMqWuvViysYC4lJXbJkKXmqWLKJVEIYslxIKcxAYABegrVycPfYdhUhQtO8y5M8sT4NI6QFBiTGccucYxjHLS9Pt9wtTuYjAbh/fJuNAEDL5Y1fnJ/NSjIAPKyu5if52I08P1zORqL1+tW/vt9nIwAY2O85PbmuPWIyPPpaEjKr3d8a1FrjqcWyGxQcBMPnuOsaMeCj+bONJPso78nPRPO5Pg+s79OD4X9HO29zHcWdZhbVIHO1k2xNnq6y4nESFt50tNMsKfzHICMmgqQ/E2m6KlQkzAbpFTAI2/ZCuSJdVOdTzpFMXtDaMOqB/zECvOofAP4LhReHrhp6kOz39aNWq0PgX4h1OBU/fuwkbh0g/cINtFybtOuXfLCpV9L9I/IvHucXuT+cnVfR1mFWhgAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIiIyYqKUExMC08O11iWkV3do6Gd02QkJBUeJn/AAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIiIyYqKUExMC08O11iWkV3do6Gd02QkJBUeJn/AAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUAgMAAAAFGX4uAAAACVBMVEUeHi8rK0Rra3zjkZV/AAAAG0lEQVQI12NggIJVYNDAEAoGDlSj0QGx9kABAFXxKF3wQT+3AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABsklEQVQ4ja2VL29UURDFf2fYBtOQSkyra0h9U1VSgVhMLQYsuoIPwEfgi1TWdFVTiSSrwJGAWlbvVNw39897t00a3iSblzt3Zs7cc++c1eHhG6cxIamsJJAhBwkkAwmRYmQCrKwVX0seiQXAcrlsYWRVQklWVTyAhMBSwYgf5y2i8Or2LrUaqantXLgBljBZLpj3I15WGpKwAPGBqnZdzL14VMXFqWqqxrZoA70cE9j8+9lNeq4VEE83KwdMbLa/+Hp1wbvTg/lA4qAu0EDNh8/f/hugAUGqyEr29vxsXhCHRFWF8vHyZF6QMQDA9x+/+fLpeD4Qx5ErA73aP+L6Zs31zXo+ECZvXLzce40sJENl6odhKz4DgbDuMLavy2G7/dsMVwGIXqz7zTJTgw/+PPFh40lvfN2J9kYwn6TLhxoR+j5Es9KsRtOyMlQa1whjyZtMfHrKqffV6n5yJ+n4hkwtZcOdvJDhjbB26AoePWP7ZN/luKefRns7HFWkOzx+JwE2GZ6BolDcGqZ3n+qBRI6LROGoRK9QxGX9c4HvcvxEIOVtKQk2mz+PP+Hu32/7hB8Aeq1hz7yWsz0AAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-top-left-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABrElEQVQ4jbWVu0pDQRCGvzks2hiwEayMjQFRECzFKlaCsfEJfA3zABZ5B1/DIm2009oHsJSQNoX7W+zl7DmJKOLZZm9z+Wdm5187OhxKCEkASJ64IJyA8CBQkAQJ1uik2QuMKAu40dUobpNCMFCuV40pgiidktdeNTwk3OzpJW0xCS8fXCQjUjAu5UjyWQFG8nGOwBI4icqsAsCSczPao8LqcwMDzAxhdZSlQmFCgO31Dxr3/z16W33s4/WuMyePzwvGkykmqdNI+vsD3MXwvDMHn7YAwN3enHTmBGA8meIuz7Y7c3D/8AaAHQyOO6vJcrmk1+vjdndOc7MB+KKrhcB7fGo673NXN5uS3Ixp7SU2N4KMm8/f6+7k79wVWGI9d1XiF9n6ScQsNHlij1JVwl2PrmuEfE+KTcQtYiyJM1rKRCvhZrNEkMIEviC2lMZMnEXdGrVIdWrVJDnJBIksF7hNkeHcMpiQIct5NNUaklDBpwKqOq9ZaqUEpcHWTZ7KW1NToipVqpUYAhYTAVqEt06qUewW1ccn7JFoPMMUUfunbD/hHHf+uGrzqaZfriKctwjIpw8AAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABO1BMVEUeHyUfHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDklJDolJiwmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUsLEYtLUYuLUcuLUguLkcvLkkvL0owL0owMEsxMEwyMU0yMU4zMk8zMlA0MlA0M1E1M1I1NFM2NFM2NVQ2Nhg3NlU3NlY4NVU4NlU4N1c5N1g5OFo6OFk6OVo7OVw7Ols7Olw8OVs8Olw8O10/QitCQTtdVztqanprXUFra3xsa3xsbH5tbX9tboBubYBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzbFJzcodzcoh0c4l0c4p1dIt1dIx2dY13dY6Zc0KjlGqxnVm2nF7sznr///+ZhXPBAAABBUlEQVQYGQXBwYmUURBG0Vv1P90KvWtnQCcBxyBEEAMxKWMSWjQAB2V2DeKyX33Xc+reGY3RoHHeGHHWR1HVMWgUDXxbT5mK3swYkyQab3T3SyAoQFFQIhQAAPA+5iFXOPVls74AADBf30HuOn3+A6wCAGABXPucfr7WMesXAICAkry4hQzrDgAAoIru29FUuQ4AAP6BnM7P6df5LfUKAOAvj5qHXOHU32/Uh9rGnTiaMSapza77HdWEqCbm7Txetj0UIIigJRBkfRJDGKJq5EID6ynHLe4kMTpxAKEPNlBUFRiQAhZtAbgUqgqqJDV0CVCpEqHAojesn5vRyBh0/PyD5tj8B5vM5TGngJW4AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top-right-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABmUlEQVQ4jbWVsU4EMQxE31gLNRWiASQEEuIk6GmBguYavgD+gYIP4P8oaa+joLurQDpTrJM4d9AgbZrdjeMZZ7Ke6PDw0iUhCQAhHGECZAhAQsQaAa5+DlBZG+uRjRiIYT6fB3gEIzEDFMD6hA68fWvjORat2cWNKxgLiUldsmQpeaxYspFUQhiyXEgpzEBgAF6CtXJw99h2FSFC47zLkzyxPg0jpAUGJJarBVOOYbla8Pp8x/313nQsR8dnPvXQ0fGZn57sT7cLYAB4fLianuTt/YOXp/PJSDSb3frX98dkBAAD6zW7Owe1R0yGR19LQma1+1uDWms8tVh2g4KDYFiuPrtGDPho/mwjyT7Ke/Iz0XyuzwPr+3Rj+N/RzttcW3GnmUU1yFztKFuTp6useJyEhTdt7TRLCv8xyIiJIOnPRBqvChUJs0F6BQzCtr1QrkgX1fmYsyWTF7Q2jHrgf4wAr/oHgP9C4cWhq4YeJOt1/ajVahP4F2JtTsWPHzuJWwdIv3ADLdcm7folH2zqlXT/iPyLx/lF7g/DNbn14ysKfwAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUlJiwqKUE8O11CQTt3do6jlGrsznr///9vkuiwAAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUlJiwqKUE8O11CQTt3do6jlGrsznr///9vkuiwAAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-bottom-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAOCAMAAAA16ON4AAABfVBMVEUdHS0dHS4dHi4eHS4eHi8fHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDckJDklJDomJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUsLEYtLUYtLUgtLkctLkguLUcuLUguLkcvLkkvL0ovMEowL0kwL0owMEsxL0wxMEwxMU4yMU0yMU4zMk8zMlA0MlA0M1E0NFE1M1I1NFM1NFQ2NFM2NFQ2NVQ3NlU3NlY4NVU4NlU4N1c5N1g5OFk5OFo6N1k6OFk6OVo7OVw7Ols7Olw8OVs8OVw8Olw8O109O149O2A9PF89PGA+O18+O2A+PF8+PGBqanpra3xsa3xsbH1sbH5tbX9ubX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzcYhzcodzcoh0c4l0c4p1dIt1dIx2dY13dY53do54dY94do94d5Ap3ahhAAACBUlEQVQYGQXBAQEYNRAEwNlLig3E4KTCcFK81AZ8bpmJn7/89vOX3z+BgBAEgQyBNARCIEHS2YEICIEAIR0BUsEF8OcvxhhwKxiXKQNxZDCBMGJ0mL3OmhpJwxHBfacmzA4u333+gAGAMQk6PqlkL7tYrnOSWca2CaCb1g5vqESDReG8+koHcOdcHwYAI6SVPWcL+RgMvmA6kEQLdOrMDHYAOHaFxxl3Hxafz6Y9ywAQEZWKTEgVwQB9igVJqkbtpkA84Jl56tjNiaM78F1mtsMAaLSrxWjKTgIB4DQs1Wg13U5p0W3nALrS7TPd/x4MYHZzggGIBmlEvUrYizwLfWvBCAVNNB3zhMYDTo5xfpzPMQ4Bxk7+/f77GEDfiYyXYh3RrO+z3xgcqmWsgkjaRuweNSbn0VIv+rmM82jB4vtxzuUCf5OKQUBgEAiSgATSIBiCwGww0hAkHRyEA0BgAFSwAsDA7iaQAECRYUYCMDvMUBJoAp51AARw4c+/AASIRgTSmEYCIkAIIQ1iEAQEIg0CqVMBBBfrn67rHZEBmWCa+913YcLhwAghaSJx1umI2RwBZ08a15c5zyGBS3NoDGtekTFMmXNm26i6TsyMOk+2BkAlgjUZTM+8tiV7FJ9rzXlPAZv0CQGAMDUNBIaOkCbSEAIiMAEERo1UCCSB67vOOwBR8T8KSRhI0bzb7AAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-bottom-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAOCAMAAAA16ON4AAABfVBMVEUdHS0dHS4dHi4eHS4eHi8fHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDklJDomJTkmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEMsLEUsLEYtLUYuLUcuLUguLkcvLkkvL0ovMEowL0owMEsxL0wxMEwyMU0yMU4zMk8zMlA0Mk80MlA0M1E0NFE1M1I1NFM1NFQ2NFM2NFQ2NVQ3NlU3NlY4NVU4NlU4N1c5N1g5OFk5OFo6N1k6OFk6OVo7OVw7Ols7Olw8OVs8OVw8Olw8O109O149O2A9PF89PGA+O18+O2A+PF8+PGBAP1BAQFFAQFJfX3Fqanpra3xrbHxsa3xsbH1sbH5tbX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzcYhzcodzcoh0c4l0c4p1dIt1dIx2dY13dY54dY94do94d5CUuEDKAAACKUlEQVQYGQXBwZFdRRAEwKyev3ZwwQ8gFisgdMIPzFlhhLhih2THvukiM3+jqRRolgIKpUAV2KZoU6WgaQGrKQoK3VQBvvH7Nz9e39nZ7ezsPJoFrni8PvOgNNUV91y7s21xqaaqWM2dy5qVLS12Ps3q1sL7v2Awd/u6Y56XmHB7N4960mOKVDO1uSwlSgsKjNQeZuhKStg9lkwM3i8wcPblwIOGfbzdFy6bfQFbaXtqZg+ROxEqBJ0ai91AUTvjhZox3u8HMKg8l31AlrfxibfXMHPQclzJubnWbTasVChFsFPQQXTgU6GM9/vxBRikk6zxAuHOcfAElAjS7dUTkxjOGBBgl1nAYjMLbxYhftt/vlxgIIfBA8rJTXa9WstC3UwS4s6dAl2ECjS7xI6Kxk6wDcT+0q9/7gcwwNnxvEAHV9t5PkPbCeFYHfSsG6gUGEV0UGMiomkhCeLXfvzZr1+A/ExTAFw8xwVdKIU1XdhZilIKFKWxpdGdsqBA2Ub565sfgzQAwHMu0AIKTAErSAMAKNJt0AoMAHsVLeD1B1QKaNEoqIJCUWiVpkpTTaEFbKooFLUACsDrO2zhARaXDg+3zNWUS+fiZnVn6ZaiTVk2FyzZplqWO4srzTaes2NgZ7AvUNyj1kOHc0mDmTjIIo2aCTQpRrOCDSvbbcApbaapcd2s13/QFMDlOXmgNtqURq1Ys3aWRosWUAW1qaZZDQuF7qkt+Gke/wNCVMxEPwTsWgAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAACVBMVEUrKkM+PGB4d5A1hmUAAAAAGElEQVQI12NYBQYNDKFg4EAyjQ5wmQcFAFaEHSfLt0cNAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-middle-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAdAgMAAAABTX4zAAAACVBMVEUdHS0qKUBqanoMSFahAAAAD0lEQVQI12NQ5QxhoDMGAFFyDru7vcmtAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-middle-left-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYAgMAAABRgO+AAAAACVBMVEUdHS0qKUBqanoMSFahAAAAD0lEQVQI12NQ5QxhoCEGAEUWDDHkAu/CAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-middle-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAdAgMAAADqesUwAAAACVBMVEUdHS0qKUBqanoMSFahAAAADklEQVQI12OYOoWBBggAuDohplXr188AAAAASUVORK5CYII=)}#webamp .gen-window .gen-middle-right-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYAgMAAAC6t1SDAAAACVBMVEUdHS0qKUBqanoMSFahAAAADklEQVQI12OYOoWBGggA6uEb2fBejlkAAAAASUVORK5CYII=)}#webamp .gen-window .gen-close:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU6MSljXjtsXUORbkq0kWP////9IyyfAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}#webamp .character-48{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12NIYJjAsIHhApBMAAAULANhy/alSwAAAABJRU5ErkJggg==)}#webamp .character-49{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NQYEhgUIBAAAbMAQE/4OmzAAAAAElFTkSuQmCC)}#webamp .character-50{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wCAAhAkMDQwfAA78AtFOxm3MAAAAAElFTkSuQmCC)}#webamp .character-51{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWP4wKDAkMAgwDCBIQEAEHwCcej/ubUAAAAASUVORK5CYII=)}#webamp .character-52{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNQYEhgWMDwgUGBQQEADlwCUbptSVYAAAAASUVORK5CYII=)}#webamp .character-53{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12P4wNDA8IBBAAgfAAAWXANRkouswAAAAABJRU5ErkJggg==)}#webamp .character-54{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYGhgeMAwAQgTABOsA0E/JWQ/AAAAAElFTkSuQmCC)}#webamp .character-55{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12P4wCDAoMDgAIIADgwB4bVklkQAAAAASUVORK5CYII=)}#webamp .character-56{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12NIYJjAAMJAEgAQvALRax9yugAAAABJRU5ErkJggg==)}#webamp .character-57{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJgAhAUMAgwJAA/sAmFIDiRPAAAAAElFTkSuQmCC)}#webamp .character-97{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12NIYJjA8AGIgRAAFNwDkUdAkdwAAAAASUVORK5CYII=)}#webamp .character-98{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIklEQVQImWNkeMTwnwEG5GAMiCAEQ9ksUAnCKpkYsACs2gEsDRGJegWqFQAAAABJRU5ErkJggg==)}#webamp .character-99{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJjA0ACEExgSABFMAuEl/r42AAAAAElFTkSuQmCC)}#webamp .character-100{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12N4wDABCh8AABgMBAHwBg9oAAAAAElFTkSuQmCC)}#webamp .character-101{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12P4wNDA8ACIGxg+AAAZ7ARBle8LfgAAAABJRU5ErkJggg==)}#webamp .character-102{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12P4wNDA8ACIgRAAGXwD0QArRQgAAAAASUVORK5CYII=)}#webamp .character-103{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12MoYGhg2MAwAQgTABMMAyEYrKesAAAAAElFTkSuQmCC)}#webamp .character-104{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12OYwDCB4QMDiJwAABbsA8FvtohKAAAAAElFTkSuQmCC)}#webamp .character-105{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MoYFCAwgIACEwBYXIvChIAAAAASUVORK5CYII=)}#webamp .character-106{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIklEQVQImWNgYGD4D8ePIDQTAxaAQ/ARkSoZoRZAgByEAgDyfAjILsXOLAAAAABJRU5ErkJggg==)}#webamp .character-107{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12OYwLCA4QAQLmCYAAAXTAPhR2cHZQAAAABJRU5ErkJggg==)}#webamp .character-108{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQI12NoYIDBDwASfANxBGbLlAAAAABJRU5ErkJggg==)}#webamp .character-109{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwPABCCeAIAAaTAQhA7qwOAAAAABJRU5ErkJggg==)}#webamp .character-110{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAJUlEQVQImWNgeMTwn4EBiqFsJgYsACL4CJugHKoEQrscNkEkAACJUwjKaMMZYwAAAABJRU5ErkJggg==)}#webamp .character-111{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYJgAhQkAEgwDAakOOnUAAAAASUVORK5CYII=)}#webamp .character-112{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wDCB4QFDAwgCABlcA9Fh/HqiAAAAAElFTkSuQmCC)}#webamp .character-113{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12NIYJgAhBcYNjAUAAATvANxqBzBZwAAAABJRU5ErkJggg==)}#webamp .character-114{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wKzA8IAJBD8AABkSBJqXbNZ9AAAAAElFTkSuQmCC)}#webamp .character-115{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12MoYGhgSGAQAMIHAA1cAlFD9hA9AAAAAElFTkSuQmCC)}#webamp .character-116{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQI12MoYFCAQQAH/AERspkQDgAAAABJRU5ErkJggg==)}#webamp .character-117{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAH0lEQVQImWNgeMTwn4EBiqFsJgYsgEJBRqgFECAHoQAqKQjI2yEAwwAAAABJRU5ErkJggg==)}#webamp .character-118{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQImWNgeMTwn4EBiqFsJgYsgHhBRqhZECCHRyUAU/8IyAyvwxUAAAAASUVORK5CYII=)}#webamp .character-119{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwACCH4BwAgAXTAQhMxLiQgAAAABJRU5ErkJggg==)}#webamp .character-120{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAI0lEQVQImWNgeMTwn4EBiqFsJgYsgBGqAgLkIBRWlQxEmwkAeNgPhWppWZwAAAAASUVORK5CYII=)}#webamp .character-121{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12OYwDCBIYFBAQQBDwwB4W/sEnMAAAAASUVORK5CYII=)}#webamp .character-122{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWP4wCDAoMDgwNDA8AEAD3wC0QyxJxkAAAAASUVORK5CYII=)}#webamp .character-34{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQIHWMIYGKAAQADkABTwIHJLQAAAABJRU5ErkJggg==)}#webamp .character-64{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12OQYFBgiABCBQYJAAbMASFkTTvgAAAAAElFTkSuQmCC)}#webamp .character-32{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAFUlEQVQImWNkYGD4z4AGmNAFaCUIAHz4AQtBW8fOAAAAAElFTkSuQmCC)}#webamp .character-8230{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAGUlEQVQImWNkYGD4z4AGmNAFqCL4CMpCogGaGgOxvAqT9wAAAABJRU5ErkJggg==)}#webamp .character-95{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHElEQVQImWNkYGD4z4AGmNAFqCL4iIGB4RGqIACa/ALP0NMiXQAAAABJRU5ErkJggg==)}#webamp .character-58{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHklEQVQImWNkYGD4z4AGmNAFEIKPoBgKGHFrJ0YlAIqfBo/8Un5dAAAAAElFTkSuQmCC)}#webamp .character-40{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NgYBBgUABCAQYGAAJMAGFQC8mLAAAAAElFTkSuQmCC)}#webamp .character-41{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NgYGhgcADCBgYGAAkMAYFEejkbAAAAAElFTkSuQmCC)}#webamp .character-45{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQImWNkYGD4z4AGmNAFcAqyMDxCE5FjYGAk2kwA3kYDC8SFNwoAAAAASUVORK5CYII=)}#webamp .character-39{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQIHWNQYGKAAQABgAAjjGgVVgAAAABJRU5ErkJggg==)}#webamp .character-33{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NwYIBABgYHAAhMAUHTrMzDAAAAAElFTkSuQmCC)}#webamp .character-43{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12NQYGJg+MEAIhkACPABPfEgkLEAAAAASUVORK5CYII=)}#webamp .character-92{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NgYGhgZoBAAATIAI13IxiAAAAAAElFTkSuQmCC)}#webamp .character-47{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNgYOBgEGBQYHBgaAAAAqQA+cACQKYAAAAASUVORK5CYII=)}#webamp .character-91{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYHCAwgQACowBwZsjALcAAAAASUVORK5CYII=)}#webamp .character-93{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MwYBCAQgMAA8wAoU+JerwAAAAASUVORK5CYII=)}#webamp .character-94{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQIHWNQYAhg6GAAAwAH9AD5R+QUOwAAAABJRU5ErkJggg==)}#webamp .character-38{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NQYAhgUGCIAJIaAAfsAWHaIpwJAAAAAElFTkSuQmCC)}#webamp .character-37{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNIYMhgEGBQYIhgkAAACgQBacCaDW0AAAAASUVORK5CYII=)}#webamp .character-46{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAGElEQVQImWNkYGD4z4AGmNAFyBV8REAlAJk4Ae2D9ha2AAAAAElFTkSuQmCC)}#webamp .character-61{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NgYChggGAGAAYsAOE2YeEkAAAAAElFTkSuQmCC)}#webamp .character-36{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NQYChgSGAwAJIKAApcAbE85GZ1AAAAAElFTkSuQmCC)}#webamp .character-35{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NIYPjAAMEMABUMAwFxUzDLAAAAAElFTkSuQmCC)}#webamp .character-197{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJjAAMIfGCYAABIMA2Fjj6V0AAAAAElFTkSuQmCC)}#webamp .character-214{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwJDAMAEMEwASbAMBKm1nAQAAAABJRU5ErkJggg==)}#webamp .character-196{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWOYwMDAkMAwgeEDwwQADwwDAcWvnbkAAAAASUVORK5CYII=)}#webamp .character-63{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNIYJjAIMCQwMDAkAAAC+wBwX8tiscAAAAASUVORK5CYII=)}#webamp .character-42{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNgYFBgeMBQwODAwAAACjwBsYRIp8kAAAAASUVORK5CYII=)}#webamp .character-60{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYHCAwgQACowBwZsjALcAAAAASUVORK5CYII=)}#webamp .character-62{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MwYBCAQgMAA8wAoU+JerwAAAAASUVORK5CYII=)}#webamp .character-123{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYHCAwgQACowBwZsjALcAAAAASUVORK5CYII=)}#webamp .character-125{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MwYBCAQgMAA8wAoU+JerwAAAAASUVORK5CYII=)}#webamp .gen-text-a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUA3N01bW21iYnN4eIZ/f4yNjZmUlKDQ9WnQAAAAIUlEQVQIHWMAAcZyAQamdAUGVrMABnGVQgY11yKGIIZUACkrA92ildtqAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUBGRlmNjZmbm6bGxszU1Nnx8fL///8iRh7bAAAAIUlEQVQIHWMAAcZyAQamdAUGVrMABnGVQgY11yKGIIZUACkrA92ildtqAAAAAElFTkSuQmCC)}#webamp .gen-text-b{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUAxMUdGRlliYnNqanpwcIB4eIZ/f4yNjZmUlKBMQpI+AAAAIUlEQVQI12NgAAHOmVOARIKlAgNnWyuQVRQuAOXOnMoAAFkvBehWf7S3AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-b{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUA3N01iYnObm6apqbO4uL/GxszU1Nnx8fL////s2d+PAAAAIUlEQVQI12NgAAHOmVOARIKlAgNnWyuQVRQuAOXOnMoAAFkvBehWf7S3AAAAAElFTkSuQmCC)}#webamp .gen-text-c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUAxMUc3N00/P1NGRllUVGZbW21qanpwcIB4eIaGhpONjZmUlKBrx3tvAAAAJUlEQVQI12NgAAHWNZMZGHQSdzAw5DgwgAgFBgabgk6gxJ7JDABjoQaLYu6ObAAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUA3N01GRllUVGZiYnN/f4yNjZmpqbO4uL/Gxszi4ubx8fL///9AK9zxAAAAJUlEQVQI12NgAAHWNZMZGHQSdzAw5DgwgAgFBgabgk6gxJ7JDABjoQaLYu6ObAAAAABJRU5ErkJggg==)}#webamp .gen-text-d{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUBUVGZbW214eIaNjZmUlKBPxwelAAAAG0lEQVQI12NgAALTEAUGU6ZABlOGYAgGsUMUACkqA3OelxceAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-d{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUB/f4yNjZnGxszx8fL///90u0SbAAAAG0lEQVQI12NgAALTEAUGU6ZABlOGYAgGsUMUACkqA3OelxceAAAAAElFTkSuQmCC)}#webamp .gen-text-e{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA3N00/P1NGRllUVGZbW214eIZ/f4yNjZmUlKBpF6uKAAAAH0lEQVQI12NgAALOmVMZOBOAdJsDA2exABAbAcWmAQA4DwTidXJmqwAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-e{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUBGRllUVGZiYnN/f4yNjZnGxszU1Nnx8fL///+DgC81AAAAH0lEQVQI12NgAALOmVMZOBOAdJsDA2exABAbAcWmAQA4DwTidXJmqwAAAABJRU5ErkJggg==)}#webamp .gen-text-f{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUA3N01GRllbW21qanqUlKC2H8YaAAAAGklEQVQI12NgAALT0CAGUwUg7SwAwSC2AgMAKTIC7Ms0rr0AAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-f{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUBGRlliYnONjZmpqbP///9D5gpdAAAAGklEQVQI12NgAALT0CAGUwUg7SwAwSC2AgMAKTIC7Ms0rr0AAAAASUVORK5CYII=)}#webamp .gen-text-g{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAIVBMVEUpKUA/P1NGRllUVGZbW21wcIB4eIZ/f4yGhpONjZmUlKCnwN9hAAAAJ0lEQVQIHWMAA8aqZgYGzoQoAQYtBwYGBi2XVQoMnAVeCgyMXa0KAE4GBYcb4B3nAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-g{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAIVBMVEUpKUBUVGZiYnN/f4yNjZm4uL/GxszU1Nni4ubx8fL///+LwSrlAAAAJ0lEQVQIHWMAA8aqZgYGzoQoAQYtBwYGBi2XVQoMnAVeCgyMXa0KAE4GBYcb4B3nAAAAAElFTkSuQmCC)}#webamp .gen-text-h{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUBwcIBycoGCgo+hoauqqrO3t767u8O8vMPDw8nGxszKytD26YaTAAAAGElEQVQI12NgAAJphQoITl3BIO08A8YHADj6BOvV9DaxAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-h{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUCrq7TDw8no6Ovw8PH5+fr///9e3zXEAAAAFklEQVQI12NgAAIxgTQIDgFiozQYHwAqqAOv6ufnjgAAAABJRU5ErkJggg==)}#webamp .gen-text-i{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHBAMAAADdS/HjAAAAFVBMVEUhITkkJDxra3xwcIBycoF6eoiCgo8pCsaXAAAAFUlEQVQI12MQEGQQCoQi4UQGERACABeTAqlm5PZ5AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-i{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHBAMAAADdS/HjAAAAFVBMVEUkJDwxMULAwMfDw8ne3uHh4eXl5ehBk9l/AAAAFUlEQVQI12NgFGBgcgCjAAZmCEoAABAKAfHk6DTHAAAAAElFTkSuQmCC)}#webamp .gen-text-j{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUAxMUdGRllNTWBUVGZ4eIaNjZmUlKAAywzwAAAAE0lEQVQI12NgAIFSVCwCxOrJDAAh4QLodMJ9awAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-j{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUA3N01iYnNwcIB/f4zGxszx8fL///+/0FlwAAAAE0lEQVQI12NgAIFSVCwCxOrJDAAh4QLodMJ9awAAAABJRU5ErkJggg==)}#webamp .gen-text-k{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW22GhpONjZmUlKC0yuawAAAAIklEQVQI12NgAIFM00lAIiMBSHQGAImKAiDhNhVIGLYzAABxtgda2evVPQAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-k{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZni4ubx8fL////1B4EGAAAAIklEQVQI12NgAIFM00lAIiMBSHQGAImKAiDhNhVIGLYzAABxtgda2evVPQAAAABJRU5ErkJggg==)}#webamp .gen-text-l{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAElBMVEUpKUAxMUdGRll4eIZ/f4yUlKDDTNTnAAAAFUlEQVQI12NgAIJgNByiJMAQGqoAABtZAp1Ff+GZAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-l{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAElBMVEUpKUA3N01iYnPGxszU1Nn///9EJz0RAAAAFUlEQVQI12NgAIJgNByiJMAQGqoAABtZAp1Ff+GZAAAAAElFTkSuQmCC)}#webamp .gen-text-m{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAAIVBMVEUpKUAxMUdGRllUVGZbW21iYnNwcIB4eIZ/f4yGhpOUlKBZcblpAAAAI0lEQVQI12NgAAGtJZzLGbRWaAGJrjIg4bUYSGguBBKqCcsBjp0JorkYhMsAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-m{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAAIVBMVEUpKUA3N01iYnN/f4yNjZmbm6a4uL/GxszU1Nni4ub////cS6NmAAAAI0lEQVQI12NgAAGtJZzLGbRWaAGJrjIg4bUYSGguBBKqCcsBjp0JorkYhMsAAAAASUVORK5CYII=)}#webamp .gen-text-n{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUAxMUc3N01GRllNTWBiYnNwcIB4eIaNjZmUlKCfa5y8AAAAIElEQVQI12NgAIIK5clMjA4MTP+NgPgKAxPDeiB+wwAASdwGGeDXGZQAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-n{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA3N01GRlliYnNwcICbm6a4uL/Gxszx8fL///8Fv7lnAAAAIElEQVQI12NgAIIK5clMjA4MTP+NgPgKAxPDeiB+wwAASdwGGeDXGZQAAAAASUVORK5CYII=)}#webamp .gen-text-o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA/P1NGRllUVGZbW214eIZ/f4yGhpONjZmUlKDmamWaAAAAHElEQVQI12NgAAKx6QYMrSwTGaYwTQFjEBsoBgBK6AZDMgIWOQAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUBUVGZiYnN/f4yNjZnGxszU1Nni4ubx8fL////xzWRAAAAAHElEQVQI12NgAAKx6QYMrSwTGaYwTQFjEBsoBgBK6AZDMgIWOQAAAABJRU5ErkJggg==)}#webamp .gen-text-p{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJ1BMVEUpKUAxMUc/P1NGRllNTWBbW21iYnNqanpwcIB4eIZ/f4yGhpOUlKBLTaK7AAAAIElEQVQI12NgAIKYM5sYYgxPMMSEHGeIWZnIEGPAAMIAZzYHJUki1qIAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-p{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJ1BMVEUpKUA3N01UVGZiYnNwcICNjZmbm6apqbO4uL/GxszU1Nni4ub////2OqNjAAAAIElEQVQI12NgAIKYM5sYYgxPMMSEHGeIWZnIEGPAAMIAZzYHJUki1qIAAAAASUVORK5CYII=)}#webamp .gen-text-q{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUA3N00/P1NGRllUVGZbW214eIZ/f4yGhpONjZmSkp6UlKAHPYNOAAAAI0lEQVQI12NgAAGm6hYGBs6EaAEG6wDrAAjBmdBtAJTY1QAAWmwG3UPBF3oAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-q{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUBGRllUVGZiYnN/f4yNjZm4uMDGxszU1Nni4ubx8fL7+/v////Rx7x8AAAAI0lEQVQI12NgAAGmnikMDFwFMQIMNgE2ARCCq2COAVDidAIAYQkHOMhnyMoAAAAASUVORK5CYII=)}#webamp .gen-text-r{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUAxMUc3N01GRllUVGZbW21qanpwcIB4eIZ/f4yGhpONjZmUlKDditvQAAAAIklEQVQI12NgAAGbM1uARMAcILHiJJBIPwQkQo4AicCTDACHOAih1LnoFgAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-r{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUA3N01GRlliYnN/f4yNjZmpqbO4uL/GxszU1Nni4ubx8fL///9vCc2uAAAAIklEQVQI12NgAAGbM1uARMAcILHiJJBIPwQkQo4AicCTDACHOAih1LnoFgAAAABJRU5ErkJggg==)}#webamp .gen-text-s{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUAxMUc/P1NGRllUVGZbW21qanpwcIB4eIaGhpONjZmUlKCHjnJIAAAAIklEQVQIHWMAAY1dAQzVygoM1TsDGMRmb2IIZdvE4LnLAQBTHAco/pVKOwAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-s{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUA3N01UVGZiYnN/f4yNjZmpqbO4uL/Gxszi4ubx8fL///+qJyS0AAAAIklEQVQIHWMAAY1dAQzVygoM1TsDGMRmb2IIZdvE4LnLAQBTHAco/pVKOwAAAABJRU5ErkJggg==)}#webamp .gen-text-t{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAD1BMVEUmJTwsLEM7O1BKSl2QkJxyH9PBAAAAFUlEQVQI12MQFBRgcHFxYGB2YkDHACPuAlQY49MWAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-t{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHAgMAAAC9yW99AAAADFBMVEUpKUBUVGZycoH///9VDRy9AAAAE0lEQVQI12NgYGD4f4BBlwEZAQAkDAKhcYNEwQAAAABJRU5ErkJggg==)}#webamp .gen-text-u{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUAxMUdGRllUVGZbW21qanqUlKDA77WeAAAAFklEQVQI12NgAAI3hRRUHJLMIJoWAAA5UATxAlDxBQAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-u{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUA3N01iYnN/f4yNjZmpqbP///8SF7O4AAAAFklEQVQI12NgAAI3hRRUHJLMIJoWAAA5UATxAlDxBQAAAABJRU5ErkJggg==)}#webamp .gen-text-v{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAKlBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW21iYnNqanpwcIB4eIaGhpONjZmUlKDthvA2AAAAIklEQVQIHWMAAd8EWQaeDTEMHJeWMzDfvMTAsHcDA0NtAgBSrAdcNQnv8gAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-v{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAKlBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZmbm6apqbO4uL/Gxszi4ubx8fL///81zHafAAAAIklEQVQIHWMAAd8EWQaeDTEMHJeWMzDfvMTAsHcDA0NtAgBSrAdcNQnv8gAAAABJRU5ErkJggg==)}#webamp .gen-text-w{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAALVBMVEUpKUAxMUc3N00/P1NGRllNTWBUVGZbW21iYnNqanpwcIB4eIZ/f4yNjZmUlKD3PA89AAAAKUlEQVQIHWMAg3nqT/wY8rKfdzPIzXt9nIHnXd9jBo7XcRcYWJ7zLQAAwo4M1uKKXVEAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-w{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAALVBMVEUpKUA3N01GRllUVGZiYnNwcIB/f4yNjZmbm6apqbO4uL/GxszU1Nnx8fL///+8HCoLAAAAKUlEQVQIHWMAg3nqT/wY8rKfdzPIzXt9nIHnXd9jBo7XcRcYWJ7zLQAAwo4M1uKKXVEAAAAASUVORK5CYII=)}#webamp .gen-text-x{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUAxMUc3N01GRllNTWBbW21iYnNwcIB4eIaGhpONjZmUlKDqWCJLAAAAJElEQVQI12NgAAHJiVECDMzbtwCZ2Q0gYhEDA/PWHUCJhOwAAGilBx+T4WwNAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-x{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUA3N01GRlliYnNwcICNjZmbm6a4uL/Gxszi4ubx8fL///+x/boCAAAAJElEQVQI12NgAAHJiVECDMzbtwCZ2Q0gYhEDA/PWHUCJhOwAAGilBx+T4WwNAAAAAElFTkSuQmCC)}#webamp .gen-text-y{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW21iYnN4eIaGhpONjZmUlKAsqFJVAAAAHklEQVQI12NgAIIdrJsYsrMKGDh3CTCwbGNgYIZgAE8aBbSrMTxDAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-y{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZmbm6bGxszi4ubx8fL///+UuWJCAAAAHklEQVQI12NgAIIdrJsYsrMKGDh3CTCwbGNgYIZgAE8aBbSrMTxDAAAAAElFTkSuQmCC)}#webamp .gen-text-z{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAHlBMVEUpKUAxMUc/P1NGRllbW21qanp4eIZ/f4yGhpOUlKDEgHzZAAAAIklEQVQIHWMAgcyZExgYIh0YmKczMEhMYmDwTDZgmDlzAgBE/AYOyL7s3AAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-z{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAHlBMVEUpKUA3N01UVGZiYnONjZmpqbPGxszU1Nni4ub////eXJaqAAAAIklEQVQIHWMAgcyZExgYIh0YmKczMEhMYmDwTDZgmDlzAgBE/AYOyL7s3AAAAABJRU5ErkJggg==)}#webamp .gen-text-a{width:6px}#webamp .selected .gen-text-a{width:undefinedpx}#webamp .gen-text-b{width:7px}#webamp .selected .gen-text-b{width:undefinedpx}#webamp .gen-text-c{width:7px}#webamp .selected .gen-text-c{width:undefinedpx}#webamp .gen-text-d{width:6px}#webamp .selected .gen-text-d{width:undefinedpx}#webamp .gen-text-e{width:6px}#webamp .selected .gen-text-e{width:undefinedpx}#webamp .gen-text-f{width:6px}#webamp .selected .gen-text-f{width:undefinedpx}#webamp .gen-text-g{width:7px}#webamp .selected .gen-text-g{width:undefinedpx}#webamp .gen-text-h{width:6px}#webamp .selected .gen-text-h{width:undefinedpx}#webamp .gen-text-i{width:4px}#webamp .selected .gen-text-i{width:undefinedpx}#webamp .gen-text-j{width:6px}#webamp .selected .gen-text-j{width:undefinedpx}#webamp .gen-text-k{width:7px}#webamp .selected .gen-text-k{width:undefinedpx}#webamp .gen-text-l{width:5px}#webamp .selected .gen-text-l{width:undefinedpx}#webamp .gen-text-m{width:8px}#webamp .selected .gen-text-m{width:undefinedpx}#webamp .gen-text-n{width:6px}#webamp .selected .gen-text-n{width:undefinedpx}#webamp .gen-text-o{width:6px}#webamp .selected .gen-text-o{width:undefinedpx}#webamp .gen-text-p{width:6px}#webamp .selected .gen-text-p{width:undefinedpx}#webamp .gen-text-q{width:7px}#webamp .selected .gen-text-q{width:undefinedpx}#webamp .gen-text-r{width:7px}#webamp .selected .gen-text-r{width:undefinedpx}#webamp .gen-text-s{width:6px}#webamp .selected .gen-text-s{width:undefinedpx}#webamp .gen-text-t{width:5px}#webamp .selected .gen-text-t{width:undefinedpx}#webamp .gen-text-u{width:6px}#webamp .selected .gen-text-u{width:undefinedpx}#webamp .gen-text-v{width:6px}#webamp .selected .gen-text-v{width:undefinedpx}#webamp .gen-text-w{width:8px}#webamp .selected .gen-text-w{width:undefinedpx}#webamp .gen-text-x{width:7px}#webamp .selected .gen-text-x{width:undefinedpx}#webamp .gen-text-y{width:6px}#webamp .selected .gen-text-y{width:undefinedpx}#webamp .gen-text-z{width:5px}#webamp .selected .gen-text-z{width:undefinedpx}#webamp #title-bar #close{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAIgAAAAAAAAAAAAAAAf4AACAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAADwAAAAAAAAAAAAf/gAAAAA8AAAAAAAAAAAAH//iIiAAPAAAAAAAAAAAAB//4iIAADwAAAAAAAAAAAAf/iIgAAA8AAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+HP//3hz//8w8///EP///wHz//8AE///ADP//wBz//8A8///AfP//wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window .band{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAAAAAAAAAAAAAAAAAAj3AAAA9wAAAAAAAAAAgACPcAAAAPcAAAAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAA/3cAAAAAAAAACP/3d3AAAA9wAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////8////+H///jA///wwP//8P///+Hz//3h4f/8w+H//EPz//wH///8AED//ADA//wB4f/8A/P//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window .title-bar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window.shade{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window.shade input{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp .window{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window.shade #title-bar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #playlist-window{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window #position{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #playlist-window #playlist-resize-target{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAcAAAAAAAAAAACPcAAAdwAHcAAAAAAAAAAAj3AAAP8AD/AAAAAAAAgACPcAAAAAAA8AAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////n////w////4H///iB///w/n//8OY//+HCH/3hwh/8w+Y//EP+f/wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #playlist-window .playlist-scrollbar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAAAAAAAAAAAAAAAAAAj3AAAA9wAAAAAAAAAAgACPcAAAAPcAAAAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAA/3cAAAAAAAAACP/3d3AAAA9wAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////8////+H///jA///wwP//8P///+Hz//3h4f/8w+H//EPz//wH///8AED//ADA//wB4f/8A/P//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window #title-bar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #volume{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #balance{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}\n", ""]);

// exports


/***/ })
/******/ ])["default"];
});