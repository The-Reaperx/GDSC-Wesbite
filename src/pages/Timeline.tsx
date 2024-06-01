import React from "react";
import Underline from "../components/Underline";
import { Element } from "react-scroll";
// Styles
import "./Timeline.css";
import TimelineBackground from "../components/TimelineBackground";
import TimelineBackgroundM from "../components/TimelineBackgroundM";

interface TlHeaderProps {
  title: string;
}

function TlHeader({ title }: TlHeaderProps) {
  return (
    <div className="timeline-main-heading">
      <h1 className="timeline-title">{title}</h1>
      <div className="underline">
        <Underline color="#FFFFFF" />
      </div>
    </div>
  );
}

interface TlBoxProps {
  month: string;
  day: string;
  details: string;
}

function TlBox({ month, day, details }: TlBoxProps) {
  return (
    <div className="tl-box">
      <div className="box-date">
        <span className="month">{month}</span>
        <span className="day">
          <span className="underline-span">{day}</span>
        </span>
      </div>
      <span className="box-details">{details}</span>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="timeline-section">
      <Element name="timeline" />
      <TlHeader title="Timeline" />
      <TimelineBackground />
      <TimelineBackgroundM />

      {/* Here You add more Boxes */}
      <div className="tl-boxes-container">
        <TlBox month={"April"} day="2" details={"Registration opens"} />
        <TlBox month={"April"} day="5" details={"Selection Process"} />
        <TlBox month={"April"} day="10" details={"Competition Day"} />
        <TlBox month={"April"} day="14" details={"Judging Entries"} />
        <TlBox month={"April"} day="22" details={"Announcing Results "} />
      </div>
    </section>
  );
}
