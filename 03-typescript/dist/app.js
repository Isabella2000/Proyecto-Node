"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const findHero = (0, hero_service_1.findHeroById)(23);
console.log((_a = findHero === null || findHero === void 0 ? void 0 : findHero.name) !== null && _a !== void 0 ? _a : "Ganaron los villanos");
