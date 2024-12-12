const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function getData() {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    return data;
  }

async function returnData(){
  const data = await getData();

  console.log(data);

}
returnData();