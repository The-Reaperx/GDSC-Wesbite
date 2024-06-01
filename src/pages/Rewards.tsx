//  Importing
import Underline from "../components/Underline";
import { Element } from "react-scroll";
// imgs
import podium from "../assets/Trophies.svg";
import bullet from "../assets/Bullet-point.svg";
import square1 from "../assets/square.png";
import square3 from "../assets/square3.png";
import square1inverted from "../assets/square-inverted.png";

// Style
import "./Rewards.css";

// Title
interface TlHeaderProps {
  title: string;
}

function RewardsHeader({ title }: TlHeaderProps) {
  return (
    <div className="rewards-main-heading">
      <h1 className="rewards-title">{title}</h1>
      <div className="underline">
        <Underline color="#4e83f0" />
      </div>
    </div>
  );
}

// Function to display rewards for winners using arrays
function RewardsForWinners() {
  // Define arrays for places and prizes here
  const places = ["1st Place", "2nd Place", "3rd Place"];
  const prizes = [
    "A Cash Prize of 5000 SAR",
    "A Cash Prize of 500 SAR",
    "A Cash Prize of 50 SAR",
  ];
  return (
    <div className="winner-place-container">
      {places.map((place, index) => (
        <div key={index} className="winner-row">
          <div className="bulletpoint-container">
            <img src={bullet} alt="Bullet Point" className="bullet-point" />
          </div>

          <div className="winner">
            <span className="winner-place">{place}</span>
            <span className="winner-reward">{prizes[index]}</span>
          </div>
        </div>
      ))}
      <img className="podium" src={podium} alt="Podium Image" />
    </div>
  );
}

// Function to display the rewards section
export default function Rewards() {
  return (
    <section className="rewards">
      <Element name="Rewards" />
      <RewardsHeader title="Rewards" />
      {/* This won't show up until width of screen <= 650 */}
      <img className="podium-650" src={podium} alt="Podium Image" />
      <RewardsForWinners />

      {/* Background imgs */}
      <img src={square1} alt="" className="square-top-left background-square" />
      <img
        src={square1inverted}
        alt=""
        className="square-bottom-right background-square"
      />
      <img
        src={square3}
        alt=""
        className="square-top-right background-square"
      />
      <img
        src={square3}
        alt=""
        className="square-bottom-left background-square"
      />
      {/* <img src={squareMidd3} alt="" className="square-middle-left background-square" />
      <img src={squareMidd1} alt="" className="square-middle-right background-square" /> */}
    </section>
  );
}
