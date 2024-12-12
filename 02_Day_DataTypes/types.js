let variable = 'JavaScript'
console.log(variable)

let nums = [1,2,3,4]
nums[5] = 10

console.log(nums)

let dict = {
    "usman":21,
    "ilker":22
}
console.log("usman yaş", dict.usman)
console.log(`ilker yaş ${dict.ilker}`) // format yalnızca ``bu tırnaklar ile mümkün

// uppercase and lowercase
let string = 'ankara'
console.log(string.toUpperCase()) /* ---> ANKARA */
console.log(string[0].toUpperCase() + string.slice(1)) /* ---> Ankara */

console.log(string.toLowerCase())

// split() verilen bilgiye göre cümleyi keser
string = 'Bugün JavaScript Çalıştım'
console.log(string.split(' ')) // boşlukları baz alarak böler

//trim() kelimenin başında veyahut sonundaki boşlukları kaldırır
string = ' selamlar '
console.log(string.trim())

// includes() verilen kelimenin cümlede olup olmadığını kontrol eder
string = 'Bugün JavaScript Çalıştım'
console.log(string.includes('bugün'))
console.log(string.includes('Bugün'))

//replace() istenen kelime dizesini verilen kelime dizesi ile değiştirir
string = 'Bugün JavaScript Çalıştım'
console.log(string.replace('JavaScript', 'HTML'))

//concat() bir çok alt dize alır ve onları birleştirir
string = 'ilker'
console.log(string.concat('yılmazDost'))

// pareseInt() string ifadeyi integer'a cevirir
