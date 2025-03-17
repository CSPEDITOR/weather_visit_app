import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
export default function InfoBox(){
    const INIT_URL ="https://plus.unsplash.com/premium_photo-1661809018780-b35c2c6106c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";
    let info = {
        city : "Delhi",
        feelslike : 24.84,
        temp :25.05,
        tempMin: 25.05,
        tempMax : 25.05,
        humidity: 47,
        weather : "haze",
    };
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
    <div> Temperature = {info.temp}</div>
    <div> humidity = {info.humidity}</div>
    <div> tempMin = {info.tempMin}</div>
    <div> tempMax = {info.tempMax}</div>
    <p>The weather can be described as {info.weather} & feels like {info.feelslike}</p>
    
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}