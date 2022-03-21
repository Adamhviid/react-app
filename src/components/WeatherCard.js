import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';

function WeatherCard({ data }) {
  return (
    <Card style={{ maxWidth: '200px' }}>
      <CardContent>
        <Typography sx={{ fontSize: '1.5em', color: 'black' }} color="text.secondary" gutterBottom>
          Dagens vejr <ThermostatOutlinedIcon />
        </Typography>
        <h2>{data.name}</h2>
        <p>temperatur: {data.main.temp}°</p>
        <p>{data.weather[0].description}</p>
        <p>Solopgang: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Solnedgang: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      </CardContent>
    </Card>
  )
}

export default WeatherCard