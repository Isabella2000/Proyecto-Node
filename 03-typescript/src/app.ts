import { findHeroById } from "./services/hero.service"

const findHero = findHeroById(23)
console.log(findHero?.name ?? "Ganaron los villanos")