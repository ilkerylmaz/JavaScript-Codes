//apiden çektiğimiz verileri daha sonra kullanmak için kaydedebiliriz 
//bunu deneme.json dosyamızdan çektiğimiz veriler üzerinde test edelim


fetch('../12_Day_JSON/deneme.json')
    .then(response => response.json())
    .then(data => {
        // JSON verileri parse edildi
        console.log(data);
        sessionStorage.setItem('data', JSON.stringify(data['John']));
    
       
    })
    .catch(error => console.error('Hata:', error));
/*
storage'e kaydedilen veri Stringdir String dışında veri kaydedilemez
bu yüzden storage içinde arama strin türü arama olmalıdır json türünde 
bir yapı kaydedildiğinde içerisinde aramayı json türünde yapamazsın!!!
*/
 const rawData = sessionStorage.getItem('data');
console.log(rawData);
// if(!rawData){
//     console.error('bulunamadi');
// }else{
//     try{
//         const data = rawData['John'];
//         if(data){
//             console.log(data);
//         }else{
//             console.error('kullanici bulunamadi');
//         }
//     }catch (error){
//         console.log('saptanmadik bir hata olustu', error);
//     }
// }

