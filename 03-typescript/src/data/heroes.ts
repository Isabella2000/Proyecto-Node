interface Heroe {
    id: number,
    name: string,
  
    owner: string
}

//dataBodegas : BodegasAgg[] 
//Heroe[] ---> Array<Heroe | number>
export const heroes: Heroe[] = [
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
]
