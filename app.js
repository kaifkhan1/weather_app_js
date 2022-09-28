// init 
// const weather = new Weather('Jamshedpur');
const ui = new UI;
const storage = new Storage;

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

// weather.changeLocation('Ranchi');

document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;

    // Change Location
    weather.changeLocation(city);

    // set location storage 
    storage.setLocationData(city);

    getWeather();

    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(res=>{
        // InputDeviceInfo.pain()
        ui.paint(res);
        // console.log(res);
        
    })
    .catch(err=>console.log(err))
}