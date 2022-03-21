import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';


function Weather() {
  const APIkey = '82255b74e67a2977ea3e3503817383fc'
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${APIkey}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <WeatherCard data={data} />
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default Weather