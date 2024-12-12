const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//apiden aldığımız country bilgilerini ülke ismi, nüfusu, yüz ölçümü ve dillerine göre sıraladık
// diller ayrı bir liste olduğu için onun içinde map ile verileri çektik
async function getData() {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    return data;
  }
  
  async function processData() {
    const data = await getData();
  
    // İstediğiniz alanları seçin
    const filteredData = data.map(country => ({
      name: country.name,
      area: country.area,
      capital: country.capital,
      population: country.population,
      language: country.languages.map(langName => langName.name)
        
    }));
  
    console.log(filteredData);
  }
  
processData();
//kedilerin verilerinden sadece ağırlıgını aldım metric cinsinden 
//bunu .map ile yapamıyoruz çünkü api verileri array cinsinden değil object cinsinden kaydedilmiş
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    // API'den gelen veri üzerinde işlem
    const catData = data.map(cat => {
      if (cat.weight && cat.weight.metric) {
        // '2 - 5' gibi stringi böl ve sayılara dönüştür
        const weights = cat.weight.metric.split(' - ').map(Number);
        // Ortalama ağırlığı hesapla
        const averageWeight = (weights[0] + weights[1]) / 2;

        return {
          name: cat.name,
          weight: averageWeight
        };
      }
      // Eğer weight yoksa null döndür
      return {
        name: cat.name,
        weight: null
      };
    });

    // İşlenmiş veriyi konsola yazdır
    console.log(catData);
  })
  .catch(error => console.log('Hata:', error));

// ülkeler apisini okuyup en büyük 10 ülkeyi sırala
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const sortedData = data.sort((a, b) => b.population - a.population).slice(0, 10);
    console.log(sortedData);
  })
  .catch(error => console.log('Hata:', error));

//Ülkelerin API'lerini okuyun ve dünyada resmi olarak kullanılan dillerin toplam sayısını sayın.
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const totalLanguages = data.reduce((total, country) => total + country.languages.length, 0);
    console.log(`Toplam diller sayısı: ${totalLanguages}`);
  })
  .catch(error => console.log('Hata:', error));