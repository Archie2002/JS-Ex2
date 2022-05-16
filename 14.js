const namelst = [
    {
        id: 1,
        name: 'Archie',
        age: 20,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Rita',
        age: 21,
        skill: 'Node'
    },
    {
        id: 3,
        name: 'Sita',
        age: 19,
        skill: 'Angular'
    },
    {
        id: 4,
        name: 'Kari',
        age: 22,
        skill: 'Express'
    },
    {
        id: 5,
        name: 'Kartik',
        age: 16,
        skill: 'JS'
    },
    {
        id: 6,
        name: 'Ram',
        age: 20,
        skill: 'Mongodb'
    },
    {
        id: 7,
        name: 'Lita',
        age: 21,
        skill: 'Express'
    },
    {
        id: 8,
        name: 'Yug',
        age: 19,
        skill: 'React'
    },
    {
        id: 9,
        name: 'Pira',
        age: 23,
        skill: 'JS'
    },
    {
        id: 10,
        name: 'Tiksh',
        age: 22,
        skill: 'HTML'
    },
]

let sba = namelst.sort((a,b) => {
    return a.age - b.age
})

console.log('sort by age: ')
console.log(sba);

let sbn = namelst.sort((a,b) => 
    a.name > b.name ? -1 : 1
)
console.log('reverse sort by name: ')
console.log(sbn)