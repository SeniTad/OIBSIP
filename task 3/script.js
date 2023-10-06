
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const resetBtn = document.querySelector("#reset-btn");
const result = document.querySelector("#result");


//detect load event
window.addEventListener("load", () => {
  // initialize
  degree.value = "";
  result.innerHTML = "";
});

// validate input
if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 400);
}

// on submit provide progress report to user
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerHTML = "";
  degree.value = "";
});

// on submit provide progress report to user
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  temperatureConverter();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>";
  }, 200);
});

//perform calculation and display it after the above progress report is done
function temperatureConverter() {
  let inputValue = degree.value;
  //wait for 1 second
  setTimeout( () => {
    // detect selected type of temperature by user
    if (tempType.value == "fahrenheit") {

      //perform calculation
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      //perform calculation
      const FahrenheitToKelvin = (inputValue - 32) * 5/9 + 273.15;
      //show the result
      result.innerHTML = `${FahrenheitToCelsius.toFixed(2).toString()} &deg;c and ${FahrenheitToKelvin.toFixed(2).toString()} &deg;K`;

    } else if (tempType.value == "kelvin") {

      const KelvinToCelsius = inputValue - 273.15;
      const KelvinToFahrenheit =  (inputValue - 273.15) * 9/5 + 32;

      result.innerHTML = `${KelvinToCelsius.toFixed(2).toString()} &deg;c and ${KelvinToFahrenheit.toFixed(2).toString()} &deg;F`;

    } else if (tempType.value == "celsius") {

      const CelsiusToKelvin = parseInt(inputValue) + 273.15;
      const CelsiusToFahrenheit = (inputValue * 9/5) + 32;

      
      result.innerHTML = `${CelsiusToKelvin.toFixed(2).toString()} &deg;K and ${CelsiusToFahrenheit.toFixed(2).toString()} &deg;F`;
    }
  }, 400)
}