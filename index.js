cities = [{
        "name": "Moscow",
        "time": "Europe/Moscow"
    },
    {
        "name": "Sydney",
        "time": "Australia/Sydney"
    },
    {
        "name": "Hong Kong",
        "time": "Asia/Hong_Kong"
    },
    {
        "name": "New York",
        "time": "America/New_York"
    },
    {
        "name": "Guam",
        "time": "Pacific/Guam"
    },
    {
        "name": "Dakar",
        "time": "Africa/Abidjan"
    },
    {
        "name": "Tehran",
        "time": "Asia/Tehran"
    }
];

setInterval(function () {

    for (i in cities) {
        let City = ObjectConstructor(cities[i].name, cities[i].time);
        CityDateTime(City, "#city" + i, "#date" + i, "#time" + i);
    }

    function ObjectConstructor(city, tzone) {
        this.city = city;
        //this.day = new Date()
        this.date = new Date().toLocaleDateString("en-US", {
            timeZone: tzone
        });
        this.time = new Date().toLocaleTimeString("en-US", {
            timeZone: tzone
        });
        return this;
    }

    function CityDateTime(object, cityId, dateId, timeId) {
        //console.log(object, cityId, dateId, timeId);

        document.querySelector(cityId).innerHTML = object.city;
        document.querySelector(dateId).innerHTML = object.date;
        document.querySelector(timeId).innerHTML = object.time;
    }

}, 1000);