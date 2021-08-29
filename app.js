const submitBtn = document.getElementById('submit-btn').addEventListener('click', function () {
    const inputBtn = document.getElementById('input-btn').value;



    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputBtn + '&appid=784a83b9d523e25aac8241c953b55928')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
            const cityNme = data.name;
            const tem = data.main.temp;
            const cunt = data.sys.country
            const temp = tem - 273.15;
            const discription = data.weather[0].description;

            document.getElementById('city').innerText = cityNme;
            document.getElementById('temp').innerText = temp.toFixed(2);
            document.getElementById('discription').innerText = discription;
            document.getElementById('cunt').innerText = cunt;

        })
        .catch(res => alert('Please type right city name'))

})
