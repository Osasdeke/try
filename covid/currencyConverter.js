//  AXIOS is a js library used for making http requests

/*
const axios = require('axios');

//CURRENCY CONVERTER USING ASYNC JS

//STEP 1 -> GET EXCHANGE RATE API
// EXCHANGE RATE API ->  https://v6.exchangerate-api.com/v6/7bd3ba92fa3d640c1c8eb03e/latest/USD

const getExchangeRate = function(fromCurrency,toCurrency){
    axios.get('https://v6.exchangerate-api.com/v6/7bd3ba92fa3d640c1c8eb03e/latest/USD').then(function(response){
        const rate = response.data.rates;

        console.log(rate);
        
    })
}

getExchangeRate('USD', 'EURO');

*/

//STEP 2 -> GET COUNTRIES API
// COUNTRIES API -> https://api.first.org/data/v1/countries




//STEP 3 -> GET CURRENCY CONVERTER API




const getCurrencyOption = async function(){
    const response = await fetch('https://api.exchangerate.host/symbols');

    const json = await response.json();

    return json.symbols;
};

getCurrencyOption().then(console.log);


const getCurrencyRate = async function(fromCurrency, toCurrency){
    const currencyConvertUrl = new URL('https://api.exchangerate.host/convert');

    currencyConvertUrl.searchParams.append('from', fromCurrency);
    currencyConvertUrl.searchParams.append('to', toCurrency);

    const response = await fetch(currencyConvertUrl);
    const json =await response.json();

    return json.result();

}


const appendOotionToSelect = function (selectElement, optionItem){
    const optionElement = document.createElement('option');
    optionElement.value = optionItem.code
    optionElement.textContent = option.Item.description;
    selectElement.appendChild(optionElement);
}

const populateSwlwctElement = function (selectElement, optionList){
    option.List.forEach (function(optionItem){

        appendOptionToSelect(selectElement,optionItem);
    })
}


const setUpCurrencies = async function(){
    const fromCurrencyElem = document.getElementById("getCurrency");
    const toCurrencyElem = document.getElementById('toCurrency');


    const getCurrencyOption = await getCurrencyOption();

    const currencies =object.keys(CurrencyOption).map{,
        currencyKeys => currencyOption[currencyKeys]
    }

}














