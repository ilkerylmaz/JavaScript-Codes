//json ayrıştırma(parsing)
//json verisi deneme.json dosyasından okunur
//Fetch API kullanimi  
//mükemmel bir alet aşırı iyi
fetch('deneme.json')
  .then(response => response.json())
  .then(data => {
    // JSON verileri parse edildi
    console.log(data);
  })
  .catch(error => console.error('Hata:', error));

  // fetch api ile internet uzerinden api cekme
// Fetch API ile JSON dosyasından veri okuma
fetch('deneme.json')
  .then(response => response.json())
  .then(data => {
    // JSON verileri parse edildi
    console.log('Yerel JSON Verisi:', data);
  })
  .catch(error => console.error('Yerel Dosya Hatası:', error));



// Fetch API ile internet üzerinden API çekme

fetch('https://api.collectapi.com/economy/currencyToAll?int=10&base=TRY', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'apikey 3EmzY7Ef8hynUzMrFH5pPa:6rvr5jCVGv6oBXpMVw3ZDz'
  },
  credentials: 'omit'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP hata kodu: ${response.status}`);
    }
    return response.json(); // JSON formatına dönüştür
  })
  .then(data => {
    if (!data || !data.result || !data.result.data) {
      throw new Error('API verileri eksik veya yanlış formatta döndü.');
    }

    console.log('API Sonuç:', data.result);
    console.log('Baz Döviz:', data.result.base); // TRY olarak dönecek

    // Döviz verilerini listeleme
    data.result.data.forEach(currency => {
      console.log(`1 TRY = ${currency.rate} ${currency.code}`);
      //currency.rate para biriminin değeri
      //currency.code para birimi kodu(TRY,USD,GBP,etc.)
    });
  })
  .catch(error => console.error('API Hatası:', error));