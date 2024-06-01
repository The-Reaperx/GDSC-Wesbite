import Countdown from "../components/Countdown";
import Faqs from "../components/Faqs";
import Circle from "../components/Circle";
import "./Home.css";
import Underline from "../components/Underline";
import Girl from "../components/Girl";
import { Tooltip } from "react-tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Element } from "react-scroll";
function Home() {
  return (
    <div className="home">
      <Element name="home" />
      <div className="hero-girl">
        <Girl />
      </div>
      <div className="hero">
        <div className="splash-art">
          <div className="splash-art-circle">
            <Circle />
          </div>
        </div>
        <div className="information">
          <div className="hero-heading">
            <h1 className="hero-title">PMI x Generative AI</h1>
            <div className="underline">
              <Underline
                color="#0D6EFD"
                cxValue={150}
                rxValue={130}
                cyValue={0.5}
                ryValue={1.5}
              />
            </div>
          </div>
          <h3 className="hero-subtitle-1">
            The AI Resource Center is your gateway to the future of AI-driven
            projects to Boost productivity and Increase project success. Drive
            value for your organization with generative AI. Join our competition
            to showcase your skills and win great rewards.
          </h3>

          <div className="circle-icon">
            <AiOutlineQuestionCircle
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Registration Ends in"
            />
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "#A4CDFF", color: "#222" }}
            />
          </div>

          <Countdown />
        </div>
      </div>
    </div>
  );
}

export default Home;
