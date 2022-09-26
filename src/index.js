
const arr = ['Loadash', 'React', 'Next', 'Strapi', 'Axios', 'Typescript']

arr.forEach((v) => console.log(v))
arr.reverse()
arr.forEach((v) => console.log(v))
arr.sort()
arr.forEach((v) => console.log(v))

const car = {
  brand: 'Škoda',
  model: 'kodiaq',
  year: 2016
}

const { brand, model, year } = car

console.log(brand, model, year)

function *numgen() {
  while(true) yield Math.floor(Math.random() * 555)
}

const gen = numgen.next().value

console.log(`Náhodné číslo je: ${gen}`)
