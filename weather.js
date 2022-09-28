class Weather{
    constructor(city){
        this.apikey = '3c1dcc6c7220e6f51d8f5f3e441dedd5';
        this.city = city;
        // this.stateCode = stateCode;
    }

    // Fetch Weather 

    async getWeather(){
    
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apikey}`);
    
        const responseJson  = await response.json();

        return responseJson;

    }

    // Change Weather Location 

    changeLocation(city){
        this.city = city;
        // this.stateCode = stateCode;
    }
}