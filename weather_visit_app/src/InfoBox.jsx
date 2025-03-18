import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // cold
import WbSunnyIcon from "@mui/icons-material/WbSunny"; //sun
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; //rain
export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1661809018780-b35c2c6106c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";

  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGz3Xcd457dc0ZK7cAd4gGv4yaFuRfq8ehP9gLrYHtjybUPcT4ALlG6ctRIxZh9LE-fhs&usqp=CAU";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>

            <Typography
              variant="body2"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <div> Temperature = {info.temp}</div>
              <div> humidity = {info.humidity}</div>
              <div> tempMin = {info.tempMin}</div>
              <div> tempMax = {info.tempMax}</div>
              <p>
                The weather can be described as {info.weather} & feels like{" "}
                {info.feelslike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
