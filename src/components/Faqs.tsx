import Accordion from "react-bootstrap/Accordion";
import "./stylesheets/faqs.css";
import { Element } from "react-scroll";

function Faqs() {
  return (
    <>
      <div className="faqs-container">
        <h3 className="faqs-title">Frequently asked Questions</h3>
        <div className="faqs-information" style={{ width: "100%" }}>
          <Accordion>
            <Element name="faqs" />
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ color: "#343a40" }}>
                What are the requirements to compete?{" "}
              </Accordion.Header>
              <Accordion.Body>
                |-Get Good in programming and Know the Reaper
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What's my favorite Pokemon? </Accordion.Header>
              <Accordion.Body>|- It's Tinkaton!</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How many members per team? </Accordion.Header>
              <Accordion.Body>
                |- Good question..We will get back to you soon
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>When is the deadline? </Accordion.Header>
              <Accordion.Body>|- May 31st 2024</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faqs;
