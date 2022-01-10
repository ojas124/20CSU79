function getTemp(){
    var cityName = document.querySelector("#inputCity").value;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=53299659186493b22111e28d77055790`;
    var info = fetch(url);
    info.then(DataRecv => {
        DataRecv.json().then(data=>{
            console.log(data);
            document.querySelector("#city").innerText = data.main.temp - 273;
        }).catch(err=>{
            console.log("Data not in JSON format", err);
        })
    }).catch(err=>{
        console.log("Server error...", err);
    })

    console.log("after fetching data..");
}