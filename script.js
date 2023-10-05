let inp = document.getElementById("inp");
let sub = document.getElementById("sub");
let weatherForm = document.getElementById("weather-form");

sub.addEventListener('click', (e) => {
    e.preventDefault();

    let cityName = inp.value;
    let apiKey = "f27fcd4f7650379fa70b854f932651cb";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => displayData(data.weather[0]))
        .catch(e => console.log(e));
});

function displayData(data) {
    let main = document.getElementById("data-main")
    let desc = document.getElementById("data-desc")
    main.innerText = data.main
    desc.innerText = data.description
}
