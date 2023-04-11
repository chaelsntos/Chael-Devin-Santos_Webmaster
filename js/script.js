const api_url = "http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0";

getISS();

setInterval(updateAmount, 3000);

async function getISS(){
	const response = await fetch(api_url);
	const data = await response.json();
	const totalJackpot = data.entity['totalAmount'];
	console.log(totalJackpot);

	const jackpot = document.querySelector("#jackpot-amount");

	jackpot.innerHTML = `${totalJackpot}`;

}


function updateAmount(){
	var random = Math.random(10)/1;
	var decimal = random.toFixed(2);
	var jackpot = document.querySelector("#jackpot-amount");
	var jackpotValue = document.querySelector("#jackpot-amount").textContent;

	var totalAmount =  parseInt(jackpotValue);

	jackpot.innerHTML = (Number(jackpotValue) + Number(decimal)).toFixed(2);

	console.log(decimal);
 	
}