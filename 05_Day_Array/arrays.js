const arr = Array()
console.log(arr)

const arr2 = []
console.log(arr2)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// map ile listenin elemanları hızlı şekilde gezilir
numbers.map(number => console.log(number))


console.log('Numbers: ',numbers)
console.log('Numbers: ',numbers.length)

// listeler concat() yardımı ile birleştirilebilir
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// join işlemi liste içi birleştirmeye yarar
console.log(numbers.join())
console.log(numbers.join(' '))
console.log(numbers.join(2))
//birleştirirken aralara hangi karakterin geleceği parantez içine yazılan değer ile belirlenir.

// pop ve push ile listeye eleman eklenir veya cikarilir
numbers.push(30) //listeye ekler
numbers.pop() //liste sonundan eleman ceker
numbers.shift() //liste başından eleman çeker
numbers.unshift(0) //liste başına eleman ekler
numbers.reverse() // listeyi ters çevirir
console.log(numbers)