/*     -----------------------EXERCISE LEVEL: 1---------------------      */
//1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
// 2- Print the string on the browser console using console.log()
console.log(challenge)
// 3- Print the length of the string on the browser console using console.log()
console.log(`boyut ${challenge.length}`)
// 4- Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
// 5- Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
// 6- Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3))
console.log(challenge.substring(3))
// 7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(0,3))
// 8- Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))
// 9- Split the string into an array using split() method
console.log(challenge.split('a'))
// 10- Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))
// 11- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))
// 12- What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(`index of 15 : ${challenge.charAt(15)}`)
// 13- What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))
// 14- Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))
// 15- Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
/* 16- Use indexOf to find the position of the first occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction'*/
console.log(challenge.indexOf('because'))
/* 17- Use lastIndexOf to find the position of the last occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction' */
console.log(challenge.lastIndexOf('because'))
// 18- Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
challenge = ' 30 Days Of JavaScript '
console.log(challenge.trim())
// 19- Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
// 20- Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('t'))
// 21- Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))
// 22- Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of'.concat('JavaScript'))
// 23- Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

/*     -----------------------EXERCISE LEVEL: 2---------------------      */

let string = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(string)
string = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(string)

// 1- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' === 10)
console.log(parseInt('10') === 10)

// 2- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10)
console.log(parseFloat('9.8') + 0.2 == 10)

// 3- Check if 'on' is found in both python and jargon
console.log('python'.includes('on') && 'jargon'.includes('on'))

// java script ile html sayfaya yazı yazdırmak
document.write('hello world')

let text = confirm('are you sure?')
console.log(text)

