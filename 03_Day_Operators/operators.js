let text = prompt('Enter a text')
//prompt ekranda girdi çıkartır ama bu pencerede oluşan bir kutucuktur
//bilgileri String kaydeder
console.log(text)
console.log(typeof text)

let text2 = confirm('are you sure?')
console.log(text2)

// ----- Zaman kodları ----- //

const currentDate = new Date()
console.log(currentDate.get())