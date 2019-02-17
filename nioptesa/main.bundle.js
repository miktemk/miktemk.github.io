webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <jt-test-game></jt-test-game>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jt';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'jt-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_game_test_game_component__ = __webpack_require__("../../../../../src/app/test-game/test-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__test_game_test_game_component__["a" /* TestGameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/jt-game/assets-nioptesa.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetUrls; });
var AssetUrls = {
    // vocabFile: 'assets/data/result_asdfghjkl.txt',
    vocabFile: 'assets/data/result_nioptesa.txt',
    bg_dunes_1000: 'assets/img/bg_dunes_1000.png',
    bg_dunes_inner_1000: 'assets/img/bg_dunes_inner_1000.png',
    raft_800: 'assets/img/raft_800.png',
    tree1: 'assets/img/varia/palm_tree1_150.png',
    tree2: 'assets/img/varia/palm_tree2_130.png',
    tree3: 'assets/img/varia/palm_tree3_130.png',
    building_collonade: 'assets/img/varia/egypt_collonade_360.png',
    building_obelisk1: 'assets/img/varia/egypt_obelisk1_80.png',
    building_obelisk2: 'assets/img/varia/egypt_obelisk2_80.png',
    building_pyramid: 'assets/img/varia/egypt_pyramid_280.png',
    gameOver: 'assets/img/game_over_tmp.png',
    rateProgress: {
        empty: 'assets/img/rate_progress.png',
        full: 'assets/img/rate_progress_full.png',
    },
    villain: {
        glyphShip: 'assets/img/villain/villain-glyph-ship.png',
        mask1: 'assets/img/villain/mask-bird.png',
        mask2: 'assets/img/villain/mask-crocodile.png',
        mask3: 'assets/img/villain/mask-hippo.png',
        mask4: 'assets/img/villain/mask-jackal.png',
    },
    titles: {
        nioptesa: 'assets/img/titles/nioptesa-logo-500.png',
    },
    keyboards: {
        qwerty: 'assets/img/kb/keyboard.svg',
        oneKey: 'assets/img/kb/one-button-letter.svg',
        oneKeyFaint: 'assets/img/kb/one-button-letter-faint.svg',
    },
    spritesheet: {
        riverWave: 'assets/img/wave_comic_50.png',
        splash: 'assets/img/spritesheet-splash.png',
        hunter: {
            img: 'assets/img/spritesheet-hunter.png',
            json: 'assets/img/spritesheet-hunter.json'
        },
        tomkarate: {
            img: 'assets/img/spritesheet-tomkarate.png',
            json: 'assets/img/spritesheet-tomkarate.json'
        },
        fatzorro: {
            img: 'assets/img/spritesheet-fatzorro.png',
            json: 'assets/img/spritesheet-fatzorro.json'
        },
        logs: {
            img: 'assets/img/spritesheet-log-debris.png',
            json: 'assets/img/spritesheet-log-debris.json'
        },
        blocks: {
            img: 'assets/img/spritesheet-block.png',
            json: 'assets/img/spritesheet-block.json'
        },
        villainBody: {
            img: 'assets/img/villain/spritesheet-villain.png',
            json: 'assets/img/villain/spritesheet-villain.json'
        },
        villainShipChunks: {
            img: 'assets/img/villain/spritesheet-vilshipchunks.png',
            json: 'assets/img/villain/spritesheet-vilshipchunks.json'
        },
        villainShootRock: {
            img: 'assets/img/villain/spritesheet-projectile.png',
            json: 'assets/img/villain/spritesheet-projectile.json'
        },
    }
};


/***/ }),

/***/ "../../../../../src/app/jt-game/game-commons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyUtils; });
var MyUtils = /** @class */ (function () {
    function MyUtils() {
    }
    /** NOTE: this method assumes the list contains unique elements. In case of collision, it just gives (index + 1) % len */
    MyUtils.sampleUnique = function (list, cur) {
        var randIndex = Math.floor(Math.random() * list.length);
        return (list[randIndex] !== cur)
            ? list[randIndex]
            : list[(randIndex + 1) % list.length];
    };
    return MyUtils;
}());



/***/ }),

/***/ "../../../../../src/app/jt-game/game-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QwertyKeys; });
/* unused harmony export GameLevel */
/* unused harmony export MyGameGlobals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SampleDebugGameLevels; });
var QwertyKeys;
(function (QwertyKeys) {
    QwertyKeys[QwertyKeys["Tilde"] = 0] = "Tilde";
    QwertyKeys[QwertyKeys["Oem1"] = 1] = "Oem1";
    QwertyKeys[QwertyKeys["Oem2"] = 2] = "Oem2";
    QwertyKeys[QwertyKeys["Oem3"] = 3] = "Oem3";
    QwertyKeys[QwertyKeys["Oem4"] = 4] = "Oem4";
    QwertyKeys[QwertyKeys["Oem5"] = 5] = "Oem5";
    QwertyKeys[QwertyKeys["Oem6"] = 6] = "Oem6";
    QwertyKeys[QwertyKeys["Oem7"] = 7] = "Oem7";
    QwertyKeys[QwertyKeys["Oem8"] = 8] = "Oem8";
    QwertyKeys[QwertyKeys["Oem9"] = 9] = "Oem9";
    QwertyKeys[QwertyKeys["Oem0"] = 10] = "Oem0";
    QwertyKeys[QwertyKeys["OemMinus"] = 11] = "OemMinus";
    QwertyKeys[QwertyKeys["OemPlus"] = 12] = "OemPlus";
    QwertyKeys[QwertyKeys["Q"] = 13] = "Q";
    QwertyKeys[QwertyKeys["W"] = 14] = "W";
    QwertyKeys[QwertyKeys["E"] = 15] = "E";
    QwertyKeys[QwertyKeys["R"] = 16] = "R";
    QwertyKeys[QwertyKeys["T"] = 17] = "T";
    QwertyKeys[QwertyKeys["Y"] = 18] = "Y";
    QwertyKeys[QwertyKeys["U"] = 19] = "U";
    QwertyKeys[QwertyKeys["I"] = 20] = "I";
    QwertyKeys[QwertyKeys["O"] = 21] = "O";
    QwertyKeys[QwertyKeys["P"] = 22] = "P";
    QwertyKeys[QwertyKeys["BracketOpen"] = 23] = "BracketOpen";
    QwertyKeys[QwertyKeys["BracketClose"] = 24] = "BracketClose";
    QwertyKeys[QwertyKeys["Backslash"] = 25] = "Backslash";
    QwertyKeys[QwertyKeys["A"] = 26] = "A";
    QwertyKeys[QwertyKeys["S"] = 27] = "S";
    QwertyKeys[QwertyKeys["D"] = 28] = "D";
    QwertyKeys[QwertyKeys["F"] = 29] = "F";
    QwertyKeys[QwertyKeys["G"] = 30] = "G";
    QwertyKeys[QwertyKeys["H"] = 31] = "H";
    QwertyKeys[QwertyKeys["J"] = 32] = "J";
    QwertyKeys[QwertyKeys["K"] = 33] = "K";
    QwertyKeys[QwertyKeys["L"] = 34] = "L";
    QwertyKeys[QwertyKeys["Colon"] = 35] = "Colon";
    QwertyKeys[QwertyKeys["Quote"] = 36] = "Quote";
    QwertyKeys[QwertyKeys["Z"] = 37] = "Z";
    QwertyKeys[QwertyKeys["X"] = 38] = "X";
    QwertyKeys[QwertyKeys["C"] = 39] = "C";
    QwertyKeys[QwertyKeys["V"] = 40] = "V";
    QwertyKeys[QwertyKeys["B"] = 41] = "B";
    QwertyKeys[QwertyKeys["N"] = 42] = "N";
    QwertyKeys[QwertyKeys["M"] = 43] = "M";
    QwertyKeys[QwertyKeys["Comma"] = 44] = "Comma";
    QwertyKeys[QwertyKeys["Period"] = 45] = "Period";
    QwertyKeys[QwertyKeys["Slash"] = 46] = "Slash";
})(QwertyKeys || (QwertyKeys = {}));
var GameLevel = /** @class */ (function () {
    function GameLevel() {
    }
    return GameLevel;
}());

var MyGameGlobals = /** @class */ (function () {
    function MyGameGlobals() {
    }
    return MyGameGlobals;
}());

var SampleDebugGameLevels = [
    {
        name: 'Homerow',
        vocabFile: '/assets/data/result_asdfghjkl.txt',
        keysActive: [
            { pos: QwertyKeys.A, letter: 'A' },
            { pos: QwertyKeys.S, letter: 'S' },
            { pos: QwertyKeys.D, letter: 'D' },
            { pos: QwertyKeys.F, letter: 'F' },
            { pos: QwertyKeys.G, letter: 'G' },
            { pos: QwertyKeys.H, letter: 'H' },
            { pos: QwertyKeys.J, letter: 'J' },
            { pos: QwertyKeys.K, letter: 'K' },
            { pos: QwertyKeys.L, letter: 'L' },
        ],
        keysFaint: [],
    },
    {
        name: 'Homerow + E',
        vocabFile: '/assets/data/result_asdfghjkl_e.txt',
        keysActive: [
            { pos: QwertyKeys.E, letter: 'E' },
        ],
        keysFaint: [
            { pos: QwertyKeys.A, letter: 'A' },
            { pos: QwertyKeys.S, letter: 'S' },
            { pos: QwertyKeys.D, letter: 'D' },
            { pos: QwertyKeys.F, letter: 'F' },
            { pos: QwertyKeys.G, letter: 'G' },
            { pos: QwertyKeys.H, letter: 'H' },
            { pos: QwertyKeys.J, letter: 'J' },
            { pos: QwertyKeys.K, letter: 'K' },
            { pos: QwertyKeys.L, letter: 'L' },
        ],
    },
    {
        name: 'Letter R',
        vocabFile: '/assets/data/result_asdfghjkle_r.txt',
        keysActive: [
            { pos: QwertyKeys.E, letter: 'R' },
        ],
        keysFaint: [
            { pos: QwertyKeys.E, letter: 'E' },
            { pos: QwertyKeys.A, letter: 'A' },
            { pos: QwertyKeys.S, letter: 'S' },
            { pos: QwertyKeys.D, letter: 'D' },
            { pos: QwertyKeys.F, letter: 'F' },
            { pos: QwertyKeys.G, letter: 'G' },
            { pos: QwertyKeys.H, letter: 'H' },
            { pos: QwertyKeys.J, letter: 'J' },
            { pos: QwertyKeys.K, letter: 'K' },
            { pos: QwertyKeys.L, letter: 'L' },
        ],
    },
    {
        name: 'Letter I',
        vocabFile: '/assets/data/result_asdfghjkler_i.txt',
        keysActive: [
            { pos: QwertyKeys.E, letter: 'I' },
        ],
        keysFaint: [
            { pos: QwertyKeys.E, letter: 'R' },
            { pos: QwertyKeys.E, letter: 'E' },
            { pos: QwertyKeys.A, letter: 'A' },
            { pos: QwertyKeys.S, letter: 'S' },
            { pos: QwertyKeys.D, letter: 'D' },
            { pos: QwertyKeys.F, letter: 'F' },
            { pos: QwertyKeys.G, letter: 'G' },
            { pos: QwertyKeys.H, letter: 'H' },
            { pos: QwertyKeys.J, letter: 'J' },
            { pos: QwertyKeys.K, letter: 'K' },
            { pos: QwertyKeys.L, letter: 'L' },
        ],
    },
];


/***/ }),

/***/ "../../../../../src/app/jt-game/game-sprites.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RandomSidescrollingArtifactsConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RandomSidescrollingArtifacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RateMeterUiSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RiverWithWavesFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardSpriteFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return VillainOnAShipSpriteFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VillainComplexSpriteFactory; });
/* unused harmony export VillainOnAShipSprite */
/* unused harmony export VillainComplexSpriteState */
/* unused harmony export VillainComplexSprite */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_test_3rd_party_prando__ = __webpack_require__("../../../../../src/test-3rd-party/prando.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__ = __webpack_require__("../../../../../src/app/jt-game/assets-nioptesa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_commons__ = __webpack_require__("../../../../../src/app/jt-game/game-commons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_models__ = __webpack_require__("../../../../../src/app/jt-game/game-models.ts");





var RandomSidescrollingArtifactsConfig = /** @class */ (function () {
    function RandomSidescrollingArtifactsConfig() {
    }
    return RandomSidescrollingArtifactsConfig;
}());

var RandomSidescrollingArtifacts = /** @class */ (function () {
    function RandomSidescrollingArtifacts(game, imageKeys, config) {
        var _this = this;
        this.config = config;
        config = Object.assign({
            nObj: 20,
            eventDelay: 300,
            prandoSeed: 123,
            prandoRange: 20,
            xVelocity: -100,
            scale: {
                min: 0.3,
                max: 0.5,
            },
            yPos: {
                min: 200,
                max: 250,
            }
        }, config);
        this.reset();
        var spriteGroups = imageKeys.map(function (imageName) {
            var myGroup = game.add.group();
            myGroup.enableBody = true;
            myGroup.physicsBodyType = Phaser.Physics.ARCADE;
            myGroup.createMultiple(config.nObj, imageName);
            myGroup.setAll('anchor.x', 0);
            myGroup.setAll('anchor.y', 1);
            myGroup.setAll('outOfBoundsKill', true);
            myGroup.setAll('checkWorldBounds', true);
            return myGroup;
        });
        game.time.events.loop(config.eventDelay, function () {
            var randyIndex = Math.floor(_this.prandoGenerator.next(0, config.prandoRange));
            // let randyIndex = Math.floor(Math.random() * config.prandoRange);
            if (randyIndex < spriteGroups.length) {
                var sprite = spriteGroups[randyIndex].getFirstExists(false);
                if (sprite) {
                    var randScaleFactor = _this.prandoGenerator.next(config.scale.min, config.scale.max);
                    sprite.scale.x = randScaleFactor;
                    sprite.scale.y = randScaleFactor;
                    sprite.reset(800, _this.prandoGenerator.next(config.yPos.min, config.yPos.max));
                    sprite.body.velocity.x = config.xVelocity;
                }
            }
        }, game);
    }
    RandomSidescrollingArtifacts.prototype.reset = function () {
        this.prandoGenerator = new __WEBPACK_IMPORTED_MODULE_0_test_3rd_party_prando__["a" /* default */](this.config.prandoSeed);
    };
    return RandomSidescrollingArtifacts;
}());

var RateMeterUiSprite = /** @class */ (function () {
    function RateMeterUiSprite(game) {
        var rateMeterGroup = game.add.group(null, 'rate-meter', true);
        this.rateMeterEmpty = game.add.image(0, 0, 'rateProgress', 0, rateMeterGroup);
        this.rateMeterFull = game.add.image(0, 0, 'rateProgressFull', 0, rateMeterGroup);
        rateMeterGroup.position.set(game.world.width - 10, game.world.height - 10);
        rateMeterGroup.scale.set(0.6, 0.6);
        this.rateMeterEmpty.anchor.set(1, 1);
        this.rateMeterFull.anchor.set(1, 1);
        this.setRate(0);
    }
    RateMeterUiSprite.prototype.setRate = function (rate) {
        // console.log(rate);
        rate = Math.min(rate, 1);
        var cropRect = new Phaser.Rectangle(0, this.rateMeterEmpty.height * (1 - rate), this.rateMeterEmpty.width, this.rateMeterEmpty.height * rate);
        this.rateMeterFull.crop(cropRect);
    };
    RateMeterUiSprite.preload = function (game) {
        game.load.image('rateProgress', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].rateProgress.empty);
        game.load.image('rateProgressFull', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].rateProgress.full);
    };
    return RateMeterUiSprite;
}());

var RiverWithWavesFactory = /** @class */ (function () {
    function RiverWithWavesFactory() {
    }
    RiverWithWavesFactory.prototype.preload = function (game) {
        game.load.spritesheet('small-wave', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.riverWave, 50, 50, 5);
    };
    RiverWithWavesFactory.prototype.createRiverWithWaves = function (game, riverY) {
        var riverH = game.height - riverY;
        var bmd = game.add.bitmapData(800, riverH);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, 800, riverH);
        bmd.ctx.fillStyle = '#29acdb';
        bmd.ctx.fill();
        var drawnObject = game.add.sprite(0, riverY, bmd);
        // .... create waves
        var nWaves = 20;
        for (var i = 0; i < nWaves; i++) {
            var wave = game.add.sprite(game.world.randomX, (Math.random() * (riverH - 50)) + riverY - 10, 'small-wave');
            var randScale = Math.random() * 1 + 0.5;
            wave.scale.setTo(randScale, randScale);
            var anim = wave.animations.add('wavesplash', [0, 1, 2, 3, 4], 10, false);
            anim.onComplete.add(function (waveSprite, animation) {
                waveSprite.x = game.world.randomX;
                waveSprite.y = (Math.random() * (riverH - 50)) + riverY - 10;
                waveSprite.animations.play('wavesplash');
            }, game);
            wave.animations.play('wavesplash');
            wave.animations.next(Math.floor(Math.random() * 5)); // LESSON: 82fdd785: this only works after `play` has been called
            //wave.animations.play('wavesplash', Math.floor(Math.random() * 5 + 5)); // NOTE: 82fdd785: this works too
        }
    };
    return RiverWithWavesFactory;
}());

var KeyboardSpriteFactory = /** @class */ (function () {
    function KeyboardSpriteFactory() {
        this.QwertySvgPositions = {};
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Tilde] = this.calcQwertyPos(0, 0);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem1] = this.calcQwertyPos(0, 1);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem2] = this.calcQwertyPos(0, 2);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem3] = this.calcQwertyPos(0, 3);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem4] = this.calcQwertyPos(0, 4);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem5] = this.calcQwertyPos(0, 5);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem6] = this.calcQwertyPos(0, 6);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem7] = this.calcQwertyPos(0, 7);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem8] = this.calcQwertyPos(0, 8);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem9] = this.calcQwertyPos(0, 9);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Oem0] = this.calcQwertyPos(0, 10);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].OemMinus] = this.calcQwertyPos(0, 11);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].OemPlus] = this.calcQwertyPos(0, 12);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Q] = this.calcQwertyPos(1, 0);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].W] = this.calcQwertyPos(1, 1);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].E] = this.calcQwertyPos(1, 2);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].R] = this.calcQwertyPos(1, 3);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].T] = this.calcQwertyPos(1, 4);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Y] = this.calcQwertyPos(1, 5);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].U] = this.calcQwertyPos(1, 6);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].I] = this.calcQwertyPos(1, 7);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].O] = this.calcQwertyPos(1, 8);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].P] = this.calcQwertyPos(1, 9);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].BracketOpen] = this.calcQwertyPos(1, 10);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].BracketClose] = this.calcQwertyPos(1, 11);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Backslash] = this.calcQwertyPos(1, 12);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].A] = this.calcQwertyPos(2, 0);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].S] = this.calcQwertyPos(2, 1);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].D] = this.calcQwertyPos(2, 2);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].F] = this.calcQwertyPos(2, 3);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].G] = this.calcQwertyPos(2, 4);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].H] = this.calcQwertyPos(2, 5);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].J] = this.calcQwertyPos(2, 6);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].K] = this.calcQwertyPos(2, 7);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].L] = this.calcQwertyPos(2, 8);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Colon] = this.calcQwertyPos(2, 9);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Quote] = this.calcQwertyPos(2, 10);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Z] = this.calcQwertyPos(3, 0);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].X] = this.calcQwertyPos(3, 1);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].C] = this.calcQwertyPos(3, 2);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].V] = this.calcQwertyPos(3, 3);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].B] = this.calcQwertyPos(3, 4);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].N] = this.calcQwertyPos(3, 5);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].M] = this.calcQwertyPos(3, 6);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Comma] = this.calcQwertyPos(3, 7);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Period] = this.calcQwertyPos(3, 8);
        this.QwertySvgPositions[__WEBPACK_IMPORTED_MODULE_4__game_models__["a" /* QwertyKeys */].Slash] = this.calcQwertyPos(3, 9);
    }
    KeyboardSpriteFactory.prototype.preload = function (game) {
        game.load.image('keyboard-qwerty', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].keyboards.qwerty);
        game.load.image('keyboard-key', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].keyboards.oneKey);
        game.load.image('keyboard-key-faint', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].keyboards.oneKeyFaint);
    };
    KeyboardSpriteFactory.prototype.createSprite = function (game, selectedKeys, selectedKeysFaint) {
        var _this = this;
        var root = game.add.sprite();
        var kbSprite = game.add.image(0, 0, 'keyboard-qwerty');
        function centerPosition(obj) {
            obj.position.subtract(kbSprite.width / 2, kbSprite.height / 2);
        }
        centerPosition(kbSprite);
        root.addChild(kbSprite);
        selectedKeys.forEach(function (key) {
            var kbKey = game.add.image(0, 0, 'keyboard-key');
            var qwertyPosConfig = _this.QwertySvgPositions[key];
            kbKey.position.setTo(qwertyPosConfig.x, qwertyPosConfig.y);
            centerPosition(kbKey);
            root.addChild(kbKey);
            // TODO: a0b86b87: how to fade-in a sprite?
        });
        selectedKeysFaint.forEach(function (key) {
            var kbKey = game.add.image(0, 0, 'keyboard-key-faint');
            var qwertyPosConfig = _this.QwertySvgPositions[key];
            kbKey.position.setTo(qwertyPosConfig.x, qwertyPosConfig.y);
            centerPosition(kbKey);
            root.addChild(kbKey);
        });
        //-------------- DEBUG!!! -----------------------
        // let tmpLabel = game.add.text(-100, -100, `TODO:set`);
        // tmpLabel.setText(`${kbKey.position.x}:${kbKey.position.y}`);
        // root.addChild(tmpLabel);
        // game.input.keyboard.addCallbacks(game, (e: KeyboardEvent) => {
        //   // console.log(`KB: down`, e);
        //   if (e.keyCode == Phaser.KeyCode.UP) {
        //     kbKey.position.y -= 1;
        //   }
        //   if (e.keyCode == Phaser.KeyCode.DOWN) {
        //     kbKey.position.y += 1;
        //   }
        //   if (e.keyCode == Phaser.KeyCode.LEFT) {
        //     kbKey.position.x -= 1;
        //   }
        //   if (e.keyCode == Phaser.KeyCode.RIGHT) {
        //     kbKey.position.x += 1;
        //   }
        //   tmpLabel.setText(`${kbKey.position.x}:${kbKey.position.y}`);
        // }, (e: KeyboardEvent) => {
        //   // console.log(`up`, e);
        // }, (keyText: string) => {
        //   // console.log(`press`, keyText);
        // });
        return root;
    };
    KeyboardSpriteFactory.prototype.calcQwertyPos = function (row, col) {
        if (row == 0)
            return new Phaser.Point(col * 28, 0); // Oem1 = (28:0)
        if (row == 1)
            return new Phaser.Point(col * 28 + 42, 28); // Oem1 = (42:28)
        if (row == 2)
            return new Phaser.Point(col * 28 + 49, 56); // Oem1 = (49:56)
        if (row == 3)
            return new Phaser.Point(col * 28 + 62, 84); // Oem1 = (62:84)
    };
    return KeyboardSpriteFactory;
}());

//#region --------------------------- villain ----------------------------
var VillainOnAShipSpriteFactory = /** @class */ (function () {
    function VillainOnAShipSpriteFactory(villainSpriteFactory) {
        this.villainSpriteFactory = villainSpriteFactory;
    }
    VillainOnAShipSpriteFactory.prototype.preload = function (game) {
        game.load.image('villain-glyph-ship', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].villain.glyphShip);
        // game.load.image('villain-shoot-rock', AssetUrls.villain.shootRock);
        // game.load.image('villain-shoot-rock', AssetUrls.villain.shootRockReal); // CODE: bf263593: if using real rock
        game.load.atlasJSONHash('villain-shoot-rock', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.villainShootRock.img, __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.villainShootRock.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        game.load.atlasJSONHash('vilship-chunks', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.villainShipChunks.img, __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.villainShipChunks.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    };
    VillainOnAShipSpriteFactory.prototype.createSprite = function (game) {
        var villainSprite = this.villainSpriteFactory.createSprite(game);
        return new VillainOnAShipSprite(game, villainSprite);
    };
    return VillainOnAShipSpriteFactory;
}());

var VillainComplexSpriteFactory = /** @class */ (function () {
    function VillainComplexSpriteFactory() {
    }
    VillainComplexSpriteFactory.prototype.preload = function (game) {
        game.load.atlasJSONHash('villain-parts', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.villainBody.img, __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].spritesheet.villainBody.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        game.load.image('villain-mask1', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].villain.mask1);
        game.load.image('villain-mask2', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].villain.mask2);
        game.load.image('villain-mask3', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].villain.mask3);
        game.load.image('villain-mask4', __WEBPACK_IMPORTED_MODULE_2__assets_nioptesa__["a" /* AssetUrls */].villain.mask4);
    };
    VillainComplexSpriteFactory.prototype.createSprite = function (game) {
        return new VillainComplexSprite(game);
    };
    return VillainComplexSpriteFactory;
}());

//-------------------------------------------------------------------------
var VillainOnAShipSprite = /** @class */ (function () {
    function VillainOnAShipSprite(game, villain) {
        var _this = this;
        this.game = game;
        this.villain = villain;
        this.root = game.add.sprite();
        this.spriteShip = game.add.sprite(0, 0, 'villain-glyph-ship');
        this.spriteShip.z = -1;
        //this.spriteShip.scale.setTo(1.5, 1.5);
        villain.root.scale.setTo(0.5, 0.5);
        villain.root.position.setTo(125, 196);
        villain.DoEgyptianDance();
        // villainSprite.DoArmspread();
        // villainSprite.PlayFallAnimation();
        //--------------------------------------------------------------------
        // particle effect: exploding logs
        this.emitterShipChunks = game.add.emitter(0, 0, 10);
        this.emitterShipChunks.makeParticles('vilship-chunks', ['chunk1', 'chunk2', 'chunk3', 'chunk4', 'chunk5', 'chunk6'], 20, false, false);
        var angleRange = 90;
        this.emitterShipChunks.setAngle(-90 - angleRange / 2, -90 + angleRange / 2, 10, 500);
        // this.emitterShipChunks.scale = new Phaser.Point(0.25, 0.25);
        this.emitterShipChunks.gravity = new Phaser.Point(0, 1000);
        this.root.addChild(this.spriteShip);
        this.root.addChild(villain.root);
        this.rockProjectile = this.game.add.sprite(0, 0, 'villain-shoot-rock', 'rock');
        this.rockProjectile.animations.add('rock', ['rock'], 1, true);
        var rockAnimExplode = this.rockProjectile.animations.add('explode', ['rock-break1', 'rock-break2', 'rock-break3'], 10, false);
        rockAnimExplode.onComplete.add(function (mySprite, animation) {
            _this.rockProjectile.kill();
        }, game);
        this.rockProjectile.anchor.setTo(0.5, 0.5);
        this.rockProjectile.scale.setTo(0.4, 0.4); // CODE: bf263593: if using real rock
        this.rockProjectile.visible = false;
    }
    VillainOnAShipSprite.prototype.declencheOminousFlying = function () {
        this.stopOminousFlying();
        var NTweenSteps = 40;
        var hoverDelta = 50;
        var hoverAroundX = this.game.world.centerX + 100;
        var hoverAroundY = this.game.world.centerY - 220;
        var easingType = Phaser.Easing.Linear.None;
        // const easingType = Phaser.Easing.Cubic.InOut;
        var tweenStepDelay = 1000;
        this.root.position.setTo(hoverAroundX, hoverAroundY);
        this.curTweenOminousFlying = this.game.add.tween(this.root);
        this.curTweenOminousFlying.loop(true);
        // OPTION 1: hardcode this tween sequence (lame)
        // this.curTweenOminousFlying.to({ x: hoverAroundX + hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ y: hoverAroundY - hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ y: hoverAroundY + hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ x: hoverAroundX - hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ y: hoverAroundY - hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ x: hoverAroundX + hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ y: hoverAroundY }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ x: hoverAroundX - hoverDelta }, tweenStepDelay, easingType);
        // this.curTweenOminousFlying.to({ y: hoverAroundY + hoverDelta }, tweenStepDelay, easingType);
        // OPTION 2: generate random tween sequence!
        var xLocations = [
            hoverAroundX - hoverDelta * 2,
            hoverAroundX - hoverDelta,
            // hoverAroundX,
            hoverAroundX + hoverDelta,
            hoverAroundX + hoverDelta * 2,
        ];
        var yLocations = [
            hoverAroundY - hoverDelta,
            // hoverAroundY,
            hoverAroundY + hoverDelta,
            hoverAroundY + hoverDelta * 2,
        ];
        var curX = hoverAroundX;
        var curY = hoverAroundY;
        for (var i = 0; i < NTweenSteps; i++) {
            if (Math.random() > 0.5) {
                // .... move x
                curX = __WEBPACK_IMPORTED_MODULE_3__game_commons__["a" /* MyUtils */].sampleUnique(xLocations, curX);
                this.curTweenOminousFlying.to({ x: curX }, tweenStepDelay, easingType);
            }
            else {
                // .... move y
                curY = __WEBPACK_IMPORTED_MODULE_3__game_commons__["a" /* MyUtils */].sampleUnique(yLocations, curY);
                this.curTweenOminousFlying.to({ y: curY }, tweenStepDelay, easingType);
            }
        }
        this.curTweenOminousFlying.to({ x: hoverAroundX }, tweenStepDelay, easingType);
        this.curTweenOminousFlying.to({ y: hoverAroundY }, tweenStepDelay, easingType);
        this.curTweenOminousFlying.start();
    };
    VillainOnAShipSprite.prototype.FireRock = function (arcadePhysicsGroup00) {
        var startX = this.root.position.x + 50;
        var startY = this.root.position.y + 190;
        if (!arcadePhysicsGroup00.contains(this.rockProjectile))
            arcadePhysicsGroup00.add(this.rockProjectile);
        this.rockProjectile.animations.play('rock');
        this.rockProjectile.reset(startX, startY);
        this.rockProjectile.visible = true;
        this.rockProjectile.physicsEnabled = true;
        this.rockProjectile.physicsType = Phaser.Physics.ARCADE;
        this.rockProjectile.body.gravity.y = 500;
        this.rockProjectile.body.velocity.y = -150;
        this.rockProjectile.body.velocity.x = -startX * 0.35;
        this.rockIsFlying = true;
    };
    VillainOnAShipSprite.prototype.stopOminousFlying = function () {
        if (this.curTweenOminousFlying)
            this.curTweenOminousFlying.stop();
    };
    VillainOnAShipSprite.prototype.killRockProjectile = function () {
        this.rockIsFlying = false;
        this.rockProjectile.animations.play('explode');
        if (this.rockProjectile.body) {
            this.rockProjectile.body.velocity.y = -100;
            //this.rockProjectile.body.velocity.x = 100;
        }
    };
    VillainOnAShipSprite.prototype.declencheBlowUp = function () {
        this.stopOminousFlying();
        this.emitterShipChunks.position = this.root.position.clone();
        this.emitterShipChunks.position.add(100, 150);
        this.emitterShipChunks.start(true, 2000, null, 7);
        this.spriteShip.visible = false;
        this.villain.PlayFallAnimation();
        // NOTE: detching villain sprite from this group...
        this.root.removeChild(this.villain.root);
        this.villain.root.position.add(this.root.position.x, this.root.position.y);
    };
    return VillainOnAShipSprite;
}());

var VillainComplexSpriteState;
(function (VillainComplexSpriteState) {
    VillainComplexSpriteState[VillainComplexSpriteState["Idle"] = 0] = "Idle";
    VillainComplexSpriteState[VillainComplexSpriteState["EgyptianDance"] = 1] = "EgyptianDance";
    VillainComplexSpriteState[VillainComplexSpriteState["Armspread"] = 2] = "Armspread";
    VillainComplexSpriteState[VillainComplexSpriteState["Falling"] = 3] = "Falling";
})(VillainComplexSpriteState || (VillainComplexSpriteState = {}));
var VillainComplexSprite = /** @class */ (function () {
    function VillainComplexSprite(game) {
        var _this = this;
        this.game = game;
        this.NMasks = 4;
        this.root = game.add.sprite();
        this.spriteTorso = game.add.sprite(0, 0, 'villain-parts', 'villain-stand-torso-legs');
        this.spriteTorso.anchor.setTo(0.5, 1);
        this.spriteTorso.animations.add('stand', ['villain-stand-torso-legs'], 1, true);
        this.spriteTorso.animations.add('fall', ['villain-fall1', 'villain-fall2', 'villain-fall3', 'villain-fall2'], 10, true);
        this.root.addChild(this.spriteTorso);
        this.armsL = this.createArmVariations(game);
        this.armsL.forEach(function (arm) {
            arm.visible = false;
            arm.position.x = -14;
            arm.position.y = -86;
            _this.root.addChild(arm);
        });
        this.armsR = this.createArmVariations(game);
        this.armsR.forEach(function (arm) {
            arm.visible = false;
            arm.position.x = 12;
            arm.position.y = -88;
            arm.scale.x = -1;
            _this.root.addChild(arm);
        });
        this.hugArmL = game.add.sprite(-14, -86, 'villain-parts', 'villain-armL');
        this.hugArmL.visible = false;
        this.hugArmL.anchor.setTo(1, 0.7);
        this.hugArmR = game.add.sprite(12, -88, 'villain-parts', 'villain-armR');
        this.hugArmR.visible = false;
        this.hugArmR.anchor.setTo(0, 0.7);
        this.root.addChild(this.hugArmL);
        this.root.addChild(this.hugArmR);
        this.state = VillainComplexSpriteState.Idle;
        var maskIndex = Math.floor(Math.random() * 4) + 1;
        this.mask = game.add.sprite(0, -80, "villain-mask" + maskIndex);
        this.mask.anchor.setTo(0.6, 1);
        this.mask.scale.setTo(0.35, 0.35);
        this.root.addChild(this.mask);
        this.resetMask();
    }
    //#region ------------- creation ----------------------
    VillainComplexSprite.prototype.createArmVariations = function (game) {
        return [
            this.createArm(game, [
                'villain-arm-egy1',
                'villain-arm-egy2',
                'villain-arm-egy3',
                'villain-arm-egy4',
            ], 1, 0.17),
            // this.createArm(game, [
            //   'villain-arm-egy1',
            //   'villain-arm-egy2',
            // ], 1, 0.17),
            // this.createArm(game, [
            //   'villain-arm-egy3',
            //   'villain-arm-egy4',
            // ], 1, 0.17),
            this.createArm(game, [
                'villain-arm-egy5',
                'villain-arm-egy6',
                'villain-arm-egy7',
            ], 1, 0.75),
        ];
    };
    VillainComplexSprite.prototype.createArm = function (game, frameParts, anchorX, anchorY) {
        var arm = game.add.sprite(0, 0, 'villain-parts');
        arm.animations.add('move', frameParts, 10, false);
        arm.anchor.setTo(anchorX, anchorY);
        arm.animations.play('move');
        return arm;
    };
    //#endregion
    VillainComplexSprite.prototype.DoEgyptianDance = function () {
        if (this.state == VillainComplexSpriteState.EgyptianDance)
            return; // NOTE: already dancing!
        this.resetMask();
        this.StopArmAnimations();
        this.spriteTorso.animations.play('stand');
        this.DoOneArmDance(this.armsL);
        this.DoOneArmDance(this.armsR);
        this.state = VillainComplexSpriteState.EgyptianDance;
    };
    VillainComplexSprite.prototype.DoArmspread = function () {
        if (this.state == VillainComplexSpriteState.Armspread)
            return;
        this.resetMask();
        this.StopArmAnimations();
        this.spriteTorso.animations.play('stand');
        this.hugArmL.visible = true;
        this.hugArmR.visible = true;
        this.state = VillainComplexSpriteState.Armspread;
    };
    VillainComplexSprite.prototype.resetMask = function () {
        this.mask.rotation = 0;
        this.mask.position.setTo(0, -80);
    };
    VillainComplexSprite.prototype.PlayFallAnimation = function () {
        if (this.state == VillainComplexSpriteState.Falling)
            return;
        this.StopArmAnimations();
        this.spriteTorso.animations.play('fall');
        this.state = VillainComplexSpriteState.Falling;
        this.mask.rotation = Math.PI * 1.2;
        this.mask.position.setTo(10, -80);
    };
    VillainComplexSprite.prototype.StopArmAnimations = function () {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["union"](this.armsL, this.armsR).forEach(function (arm) {
            var anim = arm.animations.getAnimation('move');
            anim.stop(true, false);
            anim.onComplete.removeAll();
            arm.visible = false;
        });
        this.hugArmL.visible = false;
        this.hugArmR.visible = false;
        this.state = VillainComplexSpriteState.Idle;
    };
    VillainComplexSprite.prototype.DoOneArmDance = function (arms) {
        var _this = this;
        var arm = __WEBPACK_IMPORTED_MODULE_1_lodash__["sample"](arms);
        arm.visible = true;
        arm.animations.play('move').onComplete.addOnce(function (mySprite, myAnimation) {
            arm.visible = false;
            _this.DoOneArmDance(arms);
        }, this.game);
    };
    return VillainComplexSprite;
}());

//#endregion 


/***/ }),

/***/ "../../../../../src/app/jt-game/my-game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcousterNioptesa; });
/* unused harmony export NioptesaGame */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__ = __webpack_require__("../../../../../src/app/jt-game/assets-nioptesa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_sprites__ = __webpack_require__("../../../../../src/app/jt-game/game-sprites.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_models__ = __webpack_require__("../../../../../src/app/jt-game/game-models.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var AcousterNioptesa;
(function (AcousterNioptesa) {
    var GameplayStates;
    (function (GameplayStates) {
        GameplayStates[GameplayStates["Stella"] = 0] = "Stella";
        GameplayStates[GameplayStates["Villain"] = 1] = "Villain";
        GameplayStates[GameplayStates["GameOver"] = 2] = "GameOver";
    })(GameplayStates || (GameplayStates = {}));
    var MyGameStateMain = /** @class */ (function (_super) {
        __extends(MyGameStateMain, _super);
        function MyGameStateMain(gameGlobals) {
            var _this = _super.call(this) || this;
            _this.gameGlobals = gameGlobals;
            // TODO: move to contants
            _this.stellaX = 500;
            _this.stellaY = 100;
            _this.stellaGravity = 100;
            _this.TypingRateStartValue = 0; // CODE: 4cc7dd56: set to 1 for tmp villain test;
            _this.TypingRateDeltaOutOf1 = 0.1;
            _this.TimeSecondsTillRockIsFired = 1;
            return _this;
        }
        MyGameStateMain.prototype.preload = function (game) {
            game.load.image('bg-dunes', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].bg_dunes_1000);
            game.load.image('bg-grass', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].bg_dunes_inner_1000);
            game.load.image('raft', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].raft_800);
            game.load.spritesheet('splash', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.splash, 64, 64, 9);
            game.load.image('tree1', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].tree1);
            game.load.image('tree2', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].tree2);
            game.load.image('tree3', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].tree3);
            game.load.image('pyramid1', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_collonade);
            game.load.image('pyramid2', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_obelisk1);
            game.load.image('pyramid3', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_obelisk2);
            game.load.image('pyramid4', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_pyramid);
            game.load.image('game-over', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].gameOver);
            game.load.text('vocab', this.gameGlobals.level.vocabFile);
            __WEBPACK_IMPORTED_MODULE_2__game_sprites__["c" /* RateMeterUiSprite */].preload(game);
            // game.load.image('player', 'assets/img/player.svg');
            // game.load.image('player', 'assets/img/santo-gun.png');
            // game.load.image('bullet', 'assets/img/bullet.svg');
            // game.load.audio('music', 'assets/audio/rising-sun.mp3');
            // LINK: https://www.leshylabs.com/apps/sstool/
            game.load.atlasJSONHash('hunter', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.hunter.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.hunter.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            game.load.atlasJSONHash('tomkarate', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.tomkarate.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.tomkarate.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            game.load.atlasJSONHash('fatzorro', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.fatzorro.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.fatzorro.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            game.load.atlasJSONHash('log-debris', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.logs.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.logs.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            game.load.atlasJSONHash('blocks', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.blocks.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.blocks.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            this.riverFactory = new __WEBPACK_IMPORTED_MODULE_2__game_sprites__["d" /* RiverWithWavesFactory */]();
            this.riverFactory.preload(game);
            this.villainFactory = new __WEBPACK_IMPORTED_MODULE_2__game_sprites__["e" /* VillainComplexSpriteFactory */]();
            this.villainFactory.preload(game);
            this.villainShipFactory = new __WEBPACK_IMPORTED_MODULE_2__game_sprites__["f" /* VillainOnAShipSpriteFactory */](this.villainFactory);
            this.villainShipFactory.preload(game);
        };
        MyGameStateMain.prototype.create = function (game) {
            var _this = this;
            game.stage.backgroundColor = "#c4ebff";
            //--------------------------------------------------------------------
            // create river and mountains and pseudo-random scrolling trees/pyramids
            // NOTE: init like this for z-indexing
            this.bgScrollingDunes = game.add.tileSprite(0, 0, 800, 200, 'bg-dunes');
            this.bgScrollingPyramids = new __WEBPACK_IMPORTED_MODULE_2__game_sprites__["b" /* RandomSidescrollingArtifacts */](game, ['pyramid1', 'pyramid2', 'pyramid3', 'pyramid4'], {
                nObj: 6,
                prandoSeed: 456,
                prandoRange: 80,
                xVelocity: -80,
                yPos: { min: 245, max: 255 },
                scale: { min: 0.4, max: 0.6 },
            });
            this.bgScrollingGrass = game.add.tileSprite(0, 0, 800, 130, 'bg-grass');
            this.bgScrollingTrees = new __WEBPACK_IMPORTED_MODULE_2__game_sprites__["b" /* RandomSidescrollingArtifacts */](game, ['tree1', 'tree2', 'tree3'], {
                nObj: 15,
                prandoSeed: 123,
                prandoRange: 15,
                xVelocity: -100,
                yPos: { min: 290, max: 310 },
                scale: { min: 0.25, max: 0.35 },
            });
            this.bgScrollingDunes.position.y = 40;
            this.bgScrollingGrass.position.y = 200;
            this.riverFactory.createRiverWithWaves(game, 330);
            //--------------------------------------------------------------------
            // TODO: 9d495005: how did they do explosions in space invaders?
            this.splashes = game.add.group();
            for (var i = 0; i < 5; i++) {
                var splash = game.add.sprite(0, 0, 'splash');
                splash.scale = new Phaser.Point(3, 3);
                var anim = splash.animations.add('splash', [0, 1, 2, 3, 4, 6, 7, 8, 9], 10, false);
                anim.onComplete.add(function (splashSprite, animation) {
                    splashSprite.kill();
                }, game);
                this.splashes.add(splash);
            }
            this.splashes.setAll('anchor.x', 0.5);
            this.splashes.setAll('anchor.y', 1);
            this.splashes.killAll();
            //--------------------------------------------------------------------
            // make villain and his ship
            this.villainShip = this.villainShipFactory.createSprite(game);
            this.villainShip.root.position.setTo(game.world.centerX, game.world.centerY);
            this.villainShip.root.visible = false;
            //--------------------------------------------------------------------
            // make friends
            this.hunter = game.add.sprite(0, 0, 'hunter', 'hunter_stand');
            this.hunter.anchor.setTo(0.5, 1);
            this.hunter.animations.add('stand', ['hunter_stand'], 1, true);
            this.hunter.animations.add('jump', ['hunter_jump1', 'hunter_jump2', 'hunter_jump3'], 5, false);
            this.hunter.animations.add('shoot', ['hunter_shoot1', 'hunter_shoot2', 'hunter_shoot3', 'hunter_shoot4', 'hunter_stand'], 10, false);
            this.hunter.scale.setTo(0.6, 0.6);
            this.tomKarate = game.add.sprite(0, 0, 'tomkarate', 'tomkarate_stand');
            this.tomKarate.anchor.setTo(0.5, 1);
            this.tomKarate.animations.add('stand', ['tomkarate_stand'], 1, true);
            this.tomKarate.animations.add('jump', ['tomkarate_jump'], 1, false);
            this.tomKarate.animations.add('punch', ['tomkarate_punch1', 'tomkarate_punch2', 'tomkarate_punch1', 'tomkarate_stand'], 10, false);
            this.tomKarate.scale.setTo(0.35, 0.35);
            this.fatZorro = game.add.sprite(0, 0, 'fatzorro', 'stand');
            this.fatZorro.anchor.setTo(0.5, 1);
            this.fatZorro.animations.add('stand', ['stand'], 1, true);
            this.fatZorro.animations.add('jump', ['slip'], 1, false);
            this.fatZorro.animations.add('attack1', ['attack1', 'attack2', 'attack3', 'attack4'], 10, false);
            this.fatZorro.animations.add('attack2', ['attack4', 'attack3', 'attack2', 'attack1', 'stand'], 10, false);
            this.fatZorro.scale.setTo(0.45, 0.45);
            //--------------------------------------------------------------------
            // make raft group
            this.raft = game.add.sprite(0, 0, 'raft');
            this.raft.anchor.setTo(0.5, 0.5);
            this.raft.width = 300;
            this.raft.height = 75;
            this.raftGroup = game.add.group(null, 'raft-group', true);
            this.raftGroup.position = new Phaser.Point(game.world.centerX - 100, game.world.centerY + 200);
            this.raftGroup.z = 100;
            this.raftGroup.add(this.raft);
            this.raft.position = new Phaser.Point(0, 0);
            this.thoseWhoFallInWater = game.add.group(null, 'jumping-friends', true);
            this.thoseWhoFallInWater.position.setTo(this.raftGroup.x, this.raftGroup.y); // NOTE: 147e9cda: jumpingFriends.position will be the same as raftGroup.position, so that friends will always be relative to the same place
            this.thoseWhoFallInWater.enableBody = true;
            this.thoseWhoFallInWater.physicsBodyType = Phaser.Physics.ARCADE;
            var raftBounce = game.add.tween(this.raftGroup);
            raftBounce.loop(true);
            raftBounce.to({ y: game.world.centerY + 210 }, 1000, Phaser.Easing.Sinusoidal.Out);
            raftBounce.to({ y: game.world.centerY + 200 }, 1000, Phaser.Easing.Sinusoidal.Out);
            //raftBounce.onComplete.add(startBounceTween, this);
            raftBounce.start();
            //--------------------------------------------------------------------
            // particle effect: exploding logs
            this.emitterLogs = game.add.emitter(0, 0, 100);
            this.emitterLogs.makeParticles('log-debris', ['log1', 'log2', 'log3', 'log4', 'log5'], 20, false, false);
            var angleRange = 40;
            this.emitterLogs.setAngle(-90 - angleRange / 2, -90 + angleRange / 2, 2000, 3000);
            this.emitterLogs.scale = new Phaser.Point(0.25, 0.25);
            this.emitterLogs.gravity = new Phaser.Point(0, 3000);
            this.emitterLogs.position = this.raftGroup.position;
            //--------------------------------------------------------------------
            // make stella
            this.stella = this.game.add.sprite(0, 0, 'blocks', 'block1');
            this.stella.anchor.setTo(0.5, 1);
            this.stella.animations.add('rock', ['block1'], 1, true);
            var stellaAnimEplode = this.stella.animations.add('explode', ['block2', 'block3', 'block4'], 10, false);
            //stellaAnimEplode.killOnComplete = true; // CODE: e1a237bd
            stellaAnimEplode.onComplete.add(function (stellaSprite, animation) {
                _this.stella.kill(); // CODE: e1a237bd
            }, game);
            // falling shit group/stella physics
            this.arcadePhysicsGroup00 = this.game.add.group(null, 'falling-sjit', true);
            this.arcadePhysicsGroup00.enableBody = true;
            this.arcadePhysicsGroup00.physicsBodyType = Phaser.Physics.ARCADE;
            this.arcadePhysicsGroup00.add(this.stella);
            this.stella.physicsEnabled = true;
            this.stella.physicsType = Phaser.Physics.ARCADE;
            // target text
            this.spriteTextCur = this.game_add_typingTextSprite(game, 'nioptesa');
            this.spriteTextCur.stroke = "#fff";
            this.spriteTextCur.strokeThickness = 10;
            this.arcadePhysicsGroup00.add(this.spriteTextCur);
            //--------------------------------------------------------------------
            // misc
            this.gameOverSign = game.add.sprite(game.world.centerX, game.world.centerY, 'game-over');
            this.gameOverSign.anchor.setTo(0.5, 0.5);
            this.gameOverSign.z = 1000;
            this.gameOverSign.visible = false;
            this.rateMeterSprite = new __WEBPACK_IMPORTED_MODULE_2__game_sprites__["c" /* RateMeterUiSprite */](game);
            //--------------------------------------------------------------------
            // inputs
            // this.buttonFire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            // this.buttonA = game.input.keyboard.addKey(Phaser.Keyboard.A);
            // this.buttonD = game.input.keyboard.addKey(Phaser.Keyboard.D);
            game.input.keyboard.addCallbacks(game, function (e) {
                if (_this.gameOverPrettyMuch && (e.keyCode == Phaser.KeyCode.SPACEBAR || e.keyCode == Phaser.KeyCode.ENTER)) {
                    _this.resetGame(game);
                    e.preventDefault();
                    return;
                }
                if (_this.friendsJumpedShip)
                    return;
                console.log("KB: down", e);
                // TODO: 75c92e0a: how to test if KeyboardEvent is a letter
                if (e.keyCode == Phaser.KeyCode.BACKSPACE) {
                    _this.textUser = _this.textUser.substr(0, _this.textUser.length - 1);
                    _this.spriteTextCur.addColor('#000', _this.textUser.length);
                    if (_this.typingRate > 0 && _this.gameplayState == GameplayStates.Stella) {
                        _this.typingRate -= _this.TypingRateDeltaOutOf1; // NOTE: 520a7067: bump rate down each time user presses backspace (if in stella mode!)
                        _this.rateMeterSprite.setRate(_this.typingRate);
                    }
                    e.preventDefault();
                }
                else if (e.keyCode == Phaser.KeyCode.SPACEBAR || e.keyCode == Phaser.KeyCode.ENTER) {
                    if (_this.textUser == _this.textCur)
                        _this.frendsWillAttack(game);
                    e.preventDefault();
                }
                else if (_this.util_isLetter(e.key)) {
                    _this.textUser = _this.textUser + e.key;
                    if (_this.textCur.startsWith(_this.textUser)) {
                        //this.hunter.animations.play('shoot');
                    }
                    else {
                        //console.log(`fail`, e.key);
                        _this.rougueChar = e.key;
                    }
                }
                _this.updateSpriteTextColors();
                console.log("KB: " + _this.textUser);
            }, function (e) {
                // console.log(`up`, e);
            }, function (keyText) {
                // console.log(`press`, keyText);
            });
            var vocabTextAll = game.cache.getText('vocab');
            this.vocabWords = vocabTextAll.split('\n').map(function (x) { return x.trim(); });
            //--------------------------------------------------------------------
            // start game
            this.resetGame(game);
        };
        MyGameStateMain.prototype.resetGame = function (game) {
            this.friendsJumpedShip = false;
            this.gameOverPrettyMuch = false;
            this.gameOverSign.visible = false;
            // this.bgScrollingPyramids.reset(); // DESIGN: 0ba5fc45: dont need to reset the pyramids for each rerun, let them scroll pseudo-randomly!
            // this.bgScrollingTrees.reset();
            // revive raft and friends
            this.thoseWhoFallInWater.remove(this.hunter);
            this.thoseWhoFallInWater.remove(this.tomKarate);
            this.thoseWhoFallInWater.remove(this.fatZorro);
            this.raftGroup.visible = true;
            this.addFriendsToRaftGroup();
            this.setGameplayState(GameplayStates.Stella);
            this.typingRate = this.TypingRateStartValue;
            this.rateMeterSprite.setRate(this.typingRate);
            // GO!
            this.nextWord();
        };
        MyGameStateMain.prototype.setGameplayState = function (state) {
            if (state == GameplayStates.Stella) {
                this.villainShip.root.visible = false;
                this.villainShip.stopOminousFlying();
                this.villainShip.killRockProjectile();
                this.gameplayState = GameplayStates.Stella;
            }
            else if (state == GameplayStates.Villain) {
                if (this.gameplayState == GameplayStates.Stella) {
                    console.log("EVENT: typingRate reached 1.0, introduce villain");
                    this.villainShip.root.visible = true;
                    this.villainShip.declencheOminousFlying();
                }
                this.gameplayState = GameplayStates.Villain;
            }
            else if (state == GameplayStates.GameOver) {
                this.gameplayState = GameplayStates.GameOver;
                // state cleanup????
            }
        };
        MyGameStateMain.prototype.breakRaft = function (game) {
            var _this = this;
            this.friendsJumpedShip = true;
            this.emitterLogs.start(true, 2000, null, 15);
            this.hunter.animations.play('jump');
            this.tomKarate.animations.play('jump');
            this.fatZorro.animations.play('jump');
            this.raftGroup.remove(this.hunter);
            this.raftGroup.remove(this.tomKarate);
            this.raftGroup.remove(this.fatZorro);
            this.thoseWhoFallInWater.add(this.hunter);
            this.thoseWhoFallInWater.add(this.tomKarate);
            this.thoseWhoFallInWater.add(this.fatZorro);
            this.hunter.body.velocity.x = -Math.random() * 100;
            this.hunter.body.velocity.y = -800 + Math.random() * 100;
            this.hunter.body.gravity.y = 1500;
            this.tomKarate.body.velocity.x = Math.random() * 100;
            this.tomKarate.body.velocity.y = -800 + Math.random() * 100;
            this.tomKarate.body.gravity.y = 1500;
            this.fatZorro.body.velocity.x = Math.random() * 100;
            this.fatZorro.body.velocity.y = -150 + Math.random() * 100;
            this.fatZorro.body.gravity.y = 800;
            this.raftGroup.visible = false;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                _this.gameOverSign.visible = true;
                _this.gameOverPrettyMuch = true;
            }, game);
        };
        MyGameStateMain.prototype.blowUpStella = function () {
            this.stella.animations.play('explode');
            //this.stella.body.gravity.y = 0;
            this.stella.body.velocity.y = -100;
            //this.stella.kill();
        };
        MyGameStateMain.prototype.addFriendsToRaftGroup = function () {
            this.hunter.revive();
            this.raftGroup.add(this.fatZorro);
            this.raftGroup.add(this.hunter);
            this.raftGroup.add(this.tomKarate);
            this.hunter.reset(-60, -10);
            this.tomKarate.reset(50, -5);
            this.fatZorro.reset(-10, -5);
            this.hunter.animations.play('stand');
            this.tomKarate.animations.play('stand');
            this.fatZorro.animations.play('stand');
            if (this.hunter.body) {
                this.hunter.body.velocity.x = 0;
                this.hunter.body.velocity.y = 0;
                this.hunter.body.gravity.y = 0;
            }
            if (this.tomKarate.body) {
                this.tomKarate.body.velocity.x = 0;
                this.tomKarate.body.velocity.y = 0;
                this.tomKarate.body.gravity.y = 0;
            }
            if (this.fatZorro.body) {
                this.fatZorro.body.velocity.x = 0;
                this.fatZorro.body.velocity.y = 0;
                this.fatZorro.body.gravity.y = 0;
            }
        };
        MyGameStateMain.prototype.nextWord = function () {
            var _this = this;
            this.textCur = __WEBPACK_IMPORTED_MODULE_0_lodash__["sample"](this.vocabWords);
            this.textUser = '';
            console.log("EVENT: next text: " + this.textCur);
            if (this.gameplayState == GameplayStates.Stella) {
                this.spriteTextCur.setText(this.textCur);
                this.spriteTextCur.clearColors();
                //this.stella.revive(1); // CODE: e1a237bd: i guess `stella.reset` will revive it?
                this.stella.animations.play('rock');
                this.stella.reset(this.stellaX, this.stellaY);
                this.stella.body.gravity.y = this.stellaGravity;
            }
            else if (this.gameplayState == GameplayStates.Villain) {
                this.spriteTextCur.setText(this.textCur);
                this.spriteTextCur.clearColors();
                this.curRockEvent = this.game.time.events.add(this.TimeSecondsTillRockIsFired * Phaser.Timer.SECOND, function () {
                    _this.villainShip.FireRock(_this.arcadePhysicsGroup00);
                }, this.game);
            }
        };
        MyGameStateMain.prototype.frendsWillAttack = function (game) {
            var _this = this;
            if (this.gameplayState == GameplayStates.Stella) {
                // .... which friend will attack?
                if (this.stella.position.y < game.world.centerY - 110)
                    this.hunter.animations.play('shoot');
                else if (this.stella.position.y <= game.world.centerY - 40)
                    this.hunter.animations.play('shoot');
                else if (this.stella.position.y <= game.world.centerY + 40)
                    this.fatZorro.animations.play((Math.random() > 0.7) ? 'attack1' : 'attack2');
                else
                    this.tomKarate.animations.play('punch');
                this.blowUpStella();
                // NOTE: 520a7067: bump rate up on successful word
                this.typingRate += this.TypingRateDeltaOutOf1;
                this.rateMeterSprite.setRate(this.typingRate);
                if (this.typingRate >= 1) {
                    this.setGameplayState(GameplayStates.Villain);
                }
                // .... next word!!!
                this.game.time.events.add(0.2 * Phaser.Timer.SECOND, function () {
                    _this.nextWord();
                }, this.game);
            }
            else if (this.gameplayState == GameplayStates.Villain) {
                if (this.villainShip.rockIsFlying) {
                    // .... which friend will attack?
                    if (Math.random() > 0.5)
                        this.tomKarate.animations.play('punch');
                    else
                        this.fatZorro.animations.play((Math.random() > 0.7) ? 'attack1' : 'attack2');
                    this.villainShip.killRockProjectile();
                    // .... next word!!!
                    this.game.time.events.add(0.2 * Phaser.Timer.SECOND, function () {
                        _this.nextWord();
                    }, this.game);
                }
                else {
                    this.hunter.animations.play('shoot');
                    this.game.time.events.remove(this.curRockEvent);
                    console.log("TODO: 0dae0790: subtract life from villain here");
                    this.villainShip.declencheBlowUp();
                    this.thoseWhoFallInWater.add(this.villainShip.villain.root);
                    this.villainShip.villain.root.position.subtract(this.raftGroup.x, this.raftGroup.y); // NOTE: 147e9cda
                    this.villainShip.villain.root.body.gravity.y = 200;
                    // this.villainShip.villain.root.body.velocity.y = 100; // NOTE: linear fall looks cuter!
                    game.time.events.add(Phaser.Timer.SECOND * 3, function () {
                        // this.gameOverSign.visible = true;
                        // this.gameOverPrettyMuch = true;
                        _this.game.state.start('levels');
                    }, game);
                }
            }
        };
        MyGameStateMain.prototype.updateSpriteTextColors = function () {
            var resultText = this.textCur;
            if (this.textUser.length > this.textCur.length)
                resultText += this.textUser.substring(this.textCur.length);
            this.spriteTextCur.setText(resultText);
            this.spriteTextCur.clearColors();
            if (this.textUser == this.textCur) {
                this.spriteTextCur.addColor('#0a0', 0);
                return;
            }
            for (var i = 0; i < this.textUser.length; i++) {
                // if (i >= this.textCur.length)
                //   break;
                if (this.textUser[i] == this.textCur[i])
                    this.spriteTextCur.addColor('#0d0', i);
                else
                    this.spriteTextCur.addColor('#f00', i);
            }
            this.spriteTextCur.addColor('#000', this.textUser.length);
        };
        MyGameStateMain.prototype.update = function (game) {
            var _this = this;
            this.bgScrollingDunes.tilePosition.x -= 1;
            this.bgScrollingGrass.tilePosition.x -= 1.5;
            // if (this.buttonA.isDown)
            //   this.hunter.animations.play('shoot');
            // if (this.buttonD.isDown)
            //   this.tomKarate.animations.play('punch');
            // if (this.buttonFire.isDown) {
            //   this.breakRaft();
            // }
            this.thoseWhoFallInWater.forEachAlive(function (sprite) {
                // NOTE: 147e9cda: position is relative to the jumpingFriends group
                if (sprite.position.y > 60) {
                    sprite.kill();
                    var splash = _this.splashes.getFirstExists(false);
                    if (splash) {
                        // console.log(`sploosh!`, sprite.x + this.jumpingFriends.x, sprite.y + this.jumpingFriends.y);
                        splash.reset(sprite.x + _this.thoseWhoFallInWater.x, sprite.y + _this.thoseWhoFallInWater.y);
                        splash.animations.play('splash');
                    }
                }
            });
            if (this.stella.position.y > game.world.centerY + 200 && !this.friendsJumpedShip) {
                this.blowUpStella();
                this.breakRaft(game);
            }
            if (this.villainShip.rockIsFlying && this.villainShip.rockProjectile.position.y > game.world.centerY + 200 && !this.friendsJumpedShip) {
                this.villainShip.killRockProjectile();
                // TODO: 8a1371ca: blow up rock?
                //this.blowUpStella();
                this.breakRaft(game);
            }
        };
        MyGameStateMain.prototype.game_add_typingTextSprite = function (game, text) {
            var textSprite = game.add.text(this.stellaX, this.stellaY, text, {
                font: "50px Helvetica",
                // font: "50px monospace",
                fill: '#000',
                align: "center"
            });
            textSprite.anchor.setTo(0.5, 1.2);
            textSprite.fontWeight = 'bold';
            return textSprite;
        };
        MyGameStateMain.prototype.util_isLetter = function (c) {
            // LINK: https://stackoverflow.com/a/32567789
            return c && c.length == 1 && c.toLowerCase() != c.toUpperCase();
        };
        return MyGameStateMain;
    }(Phaser.State));
    AcousterNioptesa.MyGameStateMain = MyGameStateMain;
    var NioptesaGame = /** @class */ (function () {
        function NioptesaGame(parent) {
            var gameGlobals = {
                level: __WEBPACK_IMPORTED_MODULE_3__game_models__["b" /* SampleDebugGameLevels */][1],
            };
            var mainState = new MyGameStateMain(gameGlobals);
            this.game = new Phaser.Game(800, 600, Phaser.CANVAS, parent, mainState);
        }
        return NioptesaGame;
    }());
    AcousterNioptesa.NioptesaGame = NioptesaGame;
    var SimpleGameCodepen = /** @class */ (function () {
        function SimpleGameCodepen() {
            var gameGlobals = {
                level: __WEBPACK_IMPORTED_MODULE_3__game_models__["b" /* SampleDebugGameLevels */][1],
            };
            var mainState = new MyGameStateMain(gameGlobals);
            this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', mainState); // LESSON: Phaser.CANVAS works in codepen, but Phaser.AUTO defaults to WEBGL for some reason and fails
        }
        return SimpleGameCodepen;
    }());
    AcousterNioptesa.SimpleGameCodepen = SimpleGameCodepen;
})(AcousterNioptesa || (AcousterNioptesa = {}));
//======================= for codepen comment these lines... ===================================
var NioptesaGame = AcousterNioptesa.NioptesaGame;
//======================= ...and uncomment these lines ===================================
// window.onload = () => { new AcousterNioptesa.SimpleGameCodepen(); };
// ... and also remove `export` from `export module AcousterNioptesa `
// ... also codepen does not support this syntax: <ClassName> { ... }, so remove all `<RandomSidescrollingArtifactsConfig>`, etc


/***/ }),

/***/ "../../../../../src/app/jt-game/sprite-test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_sprites__ = __webpack_require__("../../../../../src/app/jt-game/game-sprites.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__ = __webpack_require__("../../../../../src/app/jt-game/assets-nioptesa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_game__ = __webpack_require__("../../../../../src/app/jt-game/my-game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_models__ = __webpack_require__("../../../../../src/app/jt-game/game-models.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var AcousterNioptesaTest;
(function (AcousterNioptesaTest) {
    var MyGameStateSpriteTest = /** @class */ (function (_super) {
        __extends(MyGameStateSpriteTest, _super);
        function MyGameStateSpriteTest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MyGameStateSpriteTest.prototype.preload = function (game) {
            this.villainFactory = new __WEBPACK_IMPORTED_MODULE_0__game_sprites__["e" /* VillainComplexSpriteFactory */]();
            this.villainFactory.preload(game);
            this.villainShipFactory = new __WEBPACK_IMPORTED_MODULE_0__game_sprites__["f" /* VillainOnAShipSpriteFactory */](this.villainFactory);
            this.villainShipFactory.preload(game);
        };
        MyGameStateSpriteTest.prototype.create = function (game) {
            var _this = this;
            game.stage.backgroundColor = "#c4ebff";
            game.add.text(0, 0, 'Press 1,2,3 to toggle different sprite states');
            this.arcadePhysicsGroup00 = this.game.add.group(null, 'falling-sjit', true);
            this.arcadePhysicsGroup00.enableBody = true;
            this.arcadePhysicsGroup00.physicsBodyType = Phaser.Physics.ARCADE;
            var villainShip = this.villainShipFactory.createSprite(game);
            villainShip.root.position.setTo(game.world.centerX, game.world.centerY);
            villainShip.declencheOminousFlying();
            //----------------------------------------------------------------------------------------------------
            game.input.keyboard.addCallbacks(game, function (e) {
                // console.log(`KB: down`, e);
                if (e.keyCode == Phaser.KeyCode.ONE) {
                    villainShip.villain.DoArmspread();
                }
                else if (e.keyCode == Phaser.KeyCode.TWO) {
                    villainShip.villain.DoEgyptianDance();
                }
                else if (e.keyCode == Phaser.KeyCode.THREE) {
                    villainShip.villain.PlayFallAnimation();
                }
                else if (e.keyCode == Phaser.KeyCode.SPACEBAR) {
                    villainShip.FireRock(_this.arcadePhysicsGroup00);
                }
                else if (e.keyCode == Phaser.KeyCode.X) {
                    villainShip.declencheBlowUp();
                    _this.arcadePhysicsGroup00.add(villainShip.villain.root);
                    // villainShip.villain.root.body.gravity.y = 200;
                    villainShip.villain.root.body.velocity.y = 100; // NOTE: linear fall looks cuter!
                }
            }, function (e) {
                // console.log(`up`, e);
            }, function (keyText) {
                // console.log(`press`, keyText);
            });
        };
        MyGameStateSpriteTest.prototype.update = function (game) {
        };
        return MyGameStateSpriteTest;
    }(Phaser.State));
    // #region ========================= goodies =====================================
    var defaultColor = "#069";
    var highlightColor = "#fb0";
    var style = {
        header: {
            font: 'bold 60pt TheMinion',
            fill: defaultColor,
            align: 'center'
        },
        navitem: {
            base: {
                font: '30pt TheMinion',
                align: 'left',
                strokeThickness: 4
            },
            default: {
                fill: defaultColor,
                stroke: 'rgba(0,0,0,0)'
            },
            hover: {
                fill: highlightColor,
                stroke: 'rgba(200,200,200,0.5)'
            }
        }
    };
    var MyGameState_Menu = /** @class */ (function (_super) {
        __extends(MyGameState_Menu, _super);
        function MyGameState_Menu() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.optionCount = 0;
            return _this;
        }
        MyGameState_Menu.prototype.preload = function (game) {
            game.load.image('nioptesa-title', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].titles.nioptesa);
            this.villainFactory = new __WEBPACK_IMPORTED_MODULE_0__game_sprites__["e" /* VillainComplexSpriteFactory */]();
            this.villainFactory.preload(game);
        };
        MyGameState_Menu.prototype.create = function (game) {
            // .... background and shit
            game.stage.backgroundColor = "#c4ebff";
            // game.add.sprite(0, 0, 'menu-bg'); // TODO: pretty menu bg
            var villainSpriteScale = 0.7;
            var villainSpritrOffsetX = 250;
            var villainSpritrOffsetY = 150;
            var villainSprite1 = this.villainFactory.createSprite(game);
            var villainSprite2 = this.villainFactory.createSprite(game);
            villainSprite1.root.scale.setTo(villainSpriteScale, villainSpriteScale);
            villainSprite2.root.scale.setTo(villainSpriteScale, villainSpriteScale);
            villainSprite1.root.position.setTo(game.world.centerX - villainSpritrOffsetX, game.world.centerY + villainSpritrOffsetY);
            villainSprite2.root.position.setTo(game.world.centerX + villainSpritrOffsetX, game.world.centerY + villainSpritrOffsetY);
            villainSprite1.DoEgyptianDance();
            villainSprite2.DoEgyptianDance();
            // .... title and menu
            var titleText = game.add.image(game.world.centerX, 150, 'nioptesa-title');
            titleText.anchor.set(0.5);
            // titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // titleText.anchor.set(0.5);
            // game.stage.disableVisibilityChange = true;
            // game.add.sprite(0, 0, 'menu-bg');
            // game.add.existing(titleText);
            this.addMenuOption(game, 'QWERTY', function () {
                game.state.start('levels', true, true);
                // console.log('You clicked QWERTY!');
            });
            this.addMenuOption(game, 'DVORAK', function () {
                console.log('You clicked DVORAK!');
            });
            this.addMenuOption(game, 'AlphaGrip', function () {
                console.log('You clicked AlphaGrip!');
            });
        };
        MyGameState_Menu.prototype.addMenuOption = function (game, text, callback) {
            var txt = game.add.text(game.world.centerX, (this.optionCount * 40) + 300, text, style.navitem.default);
            txt.anchor.set(0.5);
            txt.inputEnabled = true;
            txt.events.onInputUp.add(callback);
            txt.events.onInputOver.add(function (target) {
                target.setStyle(style.navitem.hover);
            });
            txt.events.onInputOut.add(function (target) {
                target.setStyle(style.navitem.default);
            });
            this.optionCount++;
        };
        return MyGameState_Menu;
    }(Phaser.State));
    var MyGameState_LevelMap = /** @class */ (function (_super) {
        __extends(MyGameState_LevelMap, _super);
        function MyGameState_LevelMap(gameGlobals) {
            var _this = _super.call(this) || this;
            _this.gameGlobals = gameGlobals;
            return _this;
        }
        MyGameState_LevelMap.prototype.preload = function (game) {
            game.load.image('bg-dunes', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].bg_dunes_1000);
            game.load.image('raft', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].raft_800);
            game.load.image('collonade', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_collonade);
            game.load.image('obelisk1', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_obelisk1);
            game.load.image('obelisk2', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].building_obelisk2);
            game.load.atlasJSONHash('blocks', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.blocks.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.blocks.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            game.load.atlasJSONHash('hunter', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.hunter.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.hunter.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            game.load.atlasJSONHash('tomkarate', __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.tomkarate.img, __WEBPACK_IMPORTED_MODULE_1__assets_nioptesa__["a" /* AssetUrls */].spritesheet.tomkarate.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            this.riverFactory = new __WEBPACK_IMPORTED_MODULE_0__game_sprites__["d" /* RiverWithWavesFactory */]();
            this.riverFactory.preload(game);
            this.kbSpriteFactory = new __WEBPACK_IMPORTED_MODULE_0__game_sprites__["a" /* KeyboardSpriteFactory */]();
            this.kbSpriteFactory.preload(game);
        };
        MyGameState_LevelMap.prototype.create = function (game) {
            var SecondsTillStartAfterRaftMove = 2;
            var RiverY = 430;
            // .... background and shit
            game.stage.backgroundColor = "#c4ebff";
            this.riverFactory.createRiverWithWaves(game, RiverY);
            // game.add.sprite(0, 0, 'menu-bg'); // TODO: pretty menu bg
            this.bgScrollingDunes = game.add.tileSprite(0, 0, 800, 200, 'bg-dunes');
            this.bgScrollingDunes.position.y = RiverY;
            this.bgScrollingDunes.anchor.set(0, 1);
            this.bgScrollingDunes.tilePosition.x = Math.random() * 800;
            this.bgScrollingDunes.scale.set(1, 0.6);
            //---------------------------------------------------
            // city and oasis
            this.citySprite = this.createCityAndOasis(game, RiverY, 'shitville');
            //---------------------------------------------------
            // raft
            var raft = game.add.sprite(game.world.centerX - 150, game.world.centerY + 200, 'raft');
            raft.anchor.setTo(0.5, 0.5);
            raft.scale.setTo(0.25, 0.25);
            // this.raft.width = 300;
            // this.raft.height = 75;
            var hunter = game.add.sprite(-150, -20, 'hunter', 'hunter_stand');
            hunter.anchor.setTo(0.5, 1);
            hunter.scale.setTo(1.3, 1.3);
            var tomKarate = game.add.sprite(110, -20, 'tomkarate', 'tomkarate_stand');
            tomKarate.anchor.setTo(0.5, 1);
            tomKarate.scale.setTo(0.75, 0.75);
            raft.addChild(hunter);
            raft.addChild(tomKarate);
            var raftBounce = game.add.tween(raft);
            raftBounce.loop(true);
            raftBounce.to({ y: game.world.centerY + 210 }, 1000, Phaser.Easing.Sinusoidal.Out);
            raftBounce.to({ y: game.world.centerY + 200 }, 1000, Phaser.Easing.Sinusoidal.Out);
            var raftGoto = game.add.tween(raft);
            raftGoto.loop(false);
            raftGoto.to({ x: game.world.centerX + 200 }, 1500, Phaser.Easing.Cubic.InOut);
            raftGoto.start();
            raftGoto.onComplete.addOnce(function () {
                raftBounce.start(); // NOTE: this looks better, than starting raftBounce right away
                game.time.events.add(Phaser.Timer.SECOND * SecondsTillStartAfterRaftMove, function () {
                    //game.state.start('game');
                }, game);
            });
            //---------------------------------------------------
            // keyboard
            this.kbSprite = this.kbSpriteFactory.createSprite(game, this.gameGlobals.level.keysActive.map(function (x) { return x.pos; }), this.gameGlobals.level.keysFaint.map(function (x) { return x.pos; }));
            this.kbSprite.position.setTo(game.world.centerX, 150);
            //let virtualImgTag = kbSprite.texture.baseTexture.source;
            // titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
            // titleText.anchor.set(0.5);
            // game.stage.disableVisibilityChange = true;
            // game.add.sprite(0, 0, 'menu-bg');
            // game.add.existing(titleText);
        };
        MyGameState_LevelMap.prototype.createCityAndOasis = function (game, y, text) {
            var bmd = game.add.bitmapData(800, 100);
            // bmd.ctx.beginPath();
            // bmd.ctx.bezierCurveTo(20, 20, 40, 40, 30, 30);
            // bmd.ctx.bezierCurveTo(100, 20, 140, 40, 30, 30);
            // bmd.ctx.closePath();
            bmd.ctx.rect(0, 0, 800, 30);
            bmd.ctx.fillStyle = '#ffd585';
            bmd.ctx.fill();
            var tmpHackIsland = game.add.sprite(0, 0, bmd);
            var citySprite = game.add.sprite(game.world.centerX + 100, y);
            citySprite.addChild(tmpHackIsland);
            [
                game.add.image(50, 0, 'obelisk2'),
                game.add.image(100, 0, 'obelisk2'),
                game.add.image(350, 0, 'obelisk1'),
                game.add.image(400, 0, 'obelisk1'),
                game.add.image(220, 0, 'collonade'),
            ].forEach(function (x) {
                x.anchor.setTo(0.5, 1);
                x.scale.setTo(0.4, 0.4);
                citySprite.addChild(x);
            });
            var stella = this.game.add.sprite(220, -60, 'blocks', 'block1');
            stella.anchor.setTo(0.5, 1);
            stella.scale.setTo(0.6, 0.6);
            citySprite.addChild(stella);
            var cityText = game.add.text(220, -65, text, {
                font: "40px Helvetica",
                // font: "50px monospace",
                fill: '#000',
                align: "center"
            });
            cityText.fontWeight = 'bold';
            cityText.anchor.setTo(0.5, 1);
            citySprite.addChild(cityText);
            return citySprite;
        };
        MyGameState_LevelMap.prototype.update = function (game) {
            this.bgScrollingDunes.tilePosition.x -= 0.3;
            this.citySprite.x -= 0.4;
        };
        return MyGameState_LevelMap;
    }(Phaser.State));
    // #endregion
    var TestGame = /** @class */ (function () {
        function TestGame(parent) {
            var gameGlobals = {
                level: __WEBPACK_IMPORTED_MODULE_3__game_models__["b" /* SampleDebugGameLevels */][1],
            };
            // let mainState = new MyGameStateSpriteTest();
            var game = new Phaser.Game(800, 600, Phaser.CANVAS, parent);
            game.state.add('menu', new MyGameState_Menu());
            game.state.add('levels', new MyGameState_LevelMap(gameGlobals));
            game.state.add('game', new __WEBPACK_IMPORTED_MODULE_2__my_game__["a" /* AcousterNioptesa */].MyGameStateMain(gameGlobals));
            game.state.start('game');
            // game.state.start('levels');
        }
        return TestGame;
    }());
    AcousterNioptesaTest.TestGame = TestGame;
    var TestGameCodepen = /** @class */ (function () {
        function TestGameCodepen() {
            var mainState = new MyGameStateSpriteTest();
            this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', mainState); // LESSON: Phaser.CANVAS works in codepen, but Phaser.AUTO defaults to WEBGL for some reason and fails
        }
        return TestGameCodepen;
    }());
    AcousterNioptesaTest.TestGameCodepen = TestGameCodepen;
})(AcousterNioptesaTest || (AcousterNioptesaTest = {}));
//======================= for codepen comment these lines... ===================================
var TestGame = AcousterNioptesaTest.TestGame;
//======================= ...and uncomment these lines ===================================
// window.onload = () => { new AcousterNioptesaTest.TestGameCodepen(); };
// ... and also remove `export` from `export module AcousterNioptesa `
// ... also codepen does not support this syntax: <ClassName> { ... }, so remove all `<RandomSidescrollingArtifactsConfig>`, etc


/***/ }),

/***/ "../../../../../src/app/test-game/test-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div #myDiv></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/test-game/test-game.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-game/test-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_jt_game_sprite_test__ = __webpack_require__("../../../../../src/app/jt-game/sprite-test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestGameComponent = /** @class */ (function () {
    function TestGameComponent() {
    }
    TestGameComponent.prototype.ngOnInit = function () {
        // var game = new NioptesaGame(this.myCanvasElem.nativeElement);
        var game = new __WEBPACK_IMPORTED_MODULE_1_app_jt_game_sprite_test__["a" /* TestGame */](this.myCanvasElem.nativeElement);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('myDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], TestGameComponent.prototype, "myCanvasElem", void 0);
    TestGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'jt-test-game',
            template: __webpack_require__("../../../../../src/app/test-game/test-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test-game/test-game.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TestGameComponent);
    return TestGameComponent;
}());

// TODO: move to commons so this is available GLOBALLY
var nameof = function (name) { return name; };


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/test-3rd-party/prando.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Prando = /** @class */ (function () {
    // ================================================================================================================
    // CONSTRUCTOR ----------------------------------------------------------------------------------------------------
    /**
     * Generate a new Prando pseudo-random number generator.
     *
     * @param seed - A number or string seed that determines which pseudo-random number sequence will be created. Defaults to current time.
     */
    function Prando(seed) {
        this._value = NaN;
        if (typeof (seed) === "string") {
            // String seed
            this._seed = this.hashCode(seed);
        }
        else if (typeof (seed) === "number") {
            // Numeric seed
            this._seed = seed;
        }
        else {
            // Pseudo-random seed
            this._seed = Date.now() + Math.random();
        }
        this.reset();
    }
    // ================================================================================================================
    // PUBLIC INTERFACE -----------------------------------------------------------------------------------------------
    /**
     * Generates a pseudo-random number between a lower (inclusive) and a higher (exclusive) bounds.
     *
     * @param min - The minimum number that can be randomly generated.
     * @param pseudoMax - The maximum number that can be randomly generated (exclusive).
     * @return The generated pseudo-random number.
     */
    Prando.prototype.next = function (min, pseudoMax) {
        if (min === void 0) { min = 0; }
        if (pseudoMax === void 0) { pseudoMax = 1; }
        this.recalculate();
        return this.map(this._value, Prando.MIN, Prando.MAX, min, pseudoMax);
    };
    /**
     * Generates a pseudo-random integer number in a range (inclusive).
     *
     * @param min - The minimum number that can be randomly generated.
     * @param max - The maximum number that can be randomly generated.
     * @return The generated pseudo-random number.
     */
    Prando.prototype.nextInt = function (min, max) {
        if (min === void 0) { min = 10; }
        if (max === void 0) { max = 100; }
        this.recalculate();
        return Math.floor(this.map(this._value, Prando.MIN, Prando.MAX, min, max + 1));
    };
    /**
     * Generates a pseudo-random string sequence of a particular length from a specific character range.
     *
     * Note: keep in mind that creating a random string sequence does not guarantee uniqueness; there is always a
     * 1 in (char_length^string_length) chance of collision. For real unique string ids, always check for
     * pre-existing ids, or employ a robust GUID/UUID generator.
     *
     * @param length - Length of the strting to be generated.
     * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
     * @return The generated string sequence.
     */
    Prando.prototype.nextString = function (length, chars) {
        if (length === void 0) { length = 16; }
        if (chars === void 0) { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        var str = "";
        while (str.length < length) {
            str += this.nextChar(chars);
        }
        return str;
    };
    /**
     * Generates a pseudo-random string of 1 character specific character range.
     *
     * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
     * @return The generated character.
     */
    Prando.prototype.nextChar = function (chars) {
        if (chars === void 0) { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        this.recalculate();
        return chars.substr(this.nextInt(0, chars.length - 1), 1);
    };
    /**
     * Picks a pseudo-random item from an array. The array is left unmodified.
     *
     * Note: keep in mind that while the returned item will be random enough, picking one item from the array at a time
     * does not guarantee nor imply that a sequence of random non-repeating items will be picked. If you want to
     * *pick items in a random order* from an array, instead of *pick one random item from an array*, it's best to
     * apply a *shuffle* transformation to the array instead, then read it linearly.
     *
     * @param array - Array of any type containing one or more candidates for random picking.
     * @return An item from the array.
     */
    Prando.prototype.nextArrayItem = function (array) {
        this.recalculate();
        return array[this.nextInt(0, array.length - 1)];
    };
    /**
     * Generates a pseudo-random boolean.
     *
     * @return A value of true or false.
     */
    Prando.prototype.nextBoolean = function () {
        this.recalculate();
        return this._value > 0.5;
    };
    /**
     * Skips ahead in the sequence of numbers that are being generated. This is equivalent to
     * calling next() a specified number of times, but faster since it doesn't need to map the
     * new random numbers to a range and return it.
     *
     * @param iterations - The number of items to skip ahead.
     */
    Prando.prototype.skip = function (iterations) {
        if (iterations === void 0) { iterations = 1; }
        while (iterations-- > 0) {
            this.recalculate();
        }
    };
    /**
     * Reset the pseudo-random number sequence back to its starting seed. Further calls to next()
     * will then produce the same sequence of numbers it had produced before. This is equivalent to
     * creating a new Prando instance with the same seed as another Prando instance.
     *
     * Example:
     * let rng = new Prando(12345678);
     * console.log(rng.next()); // 0.6177754114889017
     * console.log(rng.next()); // 0.5784605181725837
     * rng.reset();
     * console.log(rng.next()); // 0.6177754114889017 again
     * console.log(rng.next()); // 0.5784605181725837 again
     */
    Prando.prototype.reset = function () {
        this._value = this._seed;
    };
    // ================================================================================================================
    // PRIVATE INTERFACE ----------------------------------------------------------------------------------------------
    Prando.prototype.recalculate = function () {
        // Xorshift*32
        // Based on George Marsaglia's work: http://www.jstatsoft.org/v08/i14/paper
        this._value ^= this._value << 13;
        this._value ^= this._value >> 17;
        this._value ^= this._value << 5;
    };
    Prando.prototype.map = function (val, minFrom, maxFrom, minTo, maxTo) {
        return ((val - minFrom) / (maxFrom - minFrom)) * (maxTo - minTo) + minTo;
    };
    Prando.prototype.hashCode = function (str) {
        var hash = 0;
        if (str) {
            var l = str.length;
            for (var i = 0; i < l; i++) {
                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                hash |= 0;
            }
        }
        return hash;
    };
    Prando.MIN = -2147483648; // Int32 min
    Prando.MAX = 2147483647; // Int32 max
    return Prando;
}());
/* harmony default export */ __webpack_exports__["a"] = (Prando);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map