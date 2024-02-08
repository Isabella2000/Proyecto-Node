"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: "Iroman",
        owner: "Marvel"
    },
    {
        id: 2,
        name: "Spideman",
        owner: "Marvel"
    },
    {
        id: 3,
        name: "Batman",
        owner: "DC"
    },
];
const findHeroById = (id) => {
    return heroes.find((data) => data.id === id);
};
const findHero = findHeroById(23);
console.log((_a = findHero === null || findHero === void 0 ? void 0 : findHero.name) !== null && _a !== void 0 ? _a : "Ganaron los villanos");
