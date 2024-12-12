// --- Higher order functions --- //

const callback = (n) => {
    return n **  2
}
function cube(callback,n){
    return(callback(n) * n)
}
console.log(cube(callback,2))

// map olusturma

const map = new Map()
console.log(map)

map.set('usman',21)
map.set('ilker',22)
console.log(map)

// array to map

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map2 = new Map(countries)
  console.log(map2)
  console.log(map2.size)
// dict to map
  const map3 = {
    'ilker':21,
    'usman':22,
    'ali şahin':23
  }

  const map4 = new Map(Object.entries(map3))
  console.log(map4)

