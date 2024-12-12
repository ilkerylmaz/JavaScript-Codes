//Callback ile promisses arasında fark vardır 
// Callback kod blogu
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      //buradaki callback fonksiyonu false değer alırsa else durumuna düşer
      //else durumunda skills çalışır
      callback(false, skills)
    }, 2000)
  }
  
const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

// promise kullanımı
// Promise default resolve ve reject parametrelerini alır
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        //resolve fonksiyonu işlem başarılı ise çalışır
        resolve(skills)
      } else {
        //reject fonksiyonu ise işlem başarısız ise çalışır
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

// async await kullanımı
// async bir söz döndürür
const square = async function (n) {
    return n * n
  }
  
console.log(square(2)) //Promise {<fulfilled>: 4}

//await kullanımı
//await yalnızca async fonksiyonu ile kullanılabilir.
async function main() {
    const value = await square(2);
    console.log(value); // 4
  }
  
  main();
