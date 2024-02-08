import { heroes } from "../data/heroes"

export const findHeroById = (id: number) => {
    return heroes.find((data) => data.id === id)
}