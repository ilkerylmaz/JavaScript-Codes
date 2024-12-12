//throw error mesajı fırlatır
if(6 > 5) throw '6 is greater than 5'

//try catch blogu
try {
    if(7 > 5) 
        console.log('7 is greater than 5') // '7 is greater than 5'
} catch (error) {
    console.log(error)
}