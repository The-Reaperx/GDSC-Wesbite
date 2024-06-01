// Styles
import React from "react";
import "./Registration.css";
import Underline from "../components/Underline";
import Faqs from "../components/Faqs";
import { Button } from "react-bootstrap";
import RegisterGirl from "../components/RegisterGirl";
import Cloud1 from "../components/Cloud1";
import Cloud2 from "../components/Cloud2";
import { Element } from "react-scroll";

// Registration Section Title
type RegSectionTitleProps = { title: string };
function RegSectionTitle({ title }: RegSectionTitleProps) {
  return (
    <div className="registration-main-heading">
      <h1 className="registration-title">{title}</h1>
      <div className="underline">
        <Underline color="#0F9D58" />
      </div>
    </div>
  );
}

// Register Button and its container
function RegisterButton() {
  return (
    <Button
      href="https://github.com/The-Reaperx"
      className="register-button"
      size="lg"
      style={{ backgroundColor: "#4DA743", border: "black" }}
    >
      <h1 className="button-text">Register</h1>
    </Button>
  );
}

// Terms of Participation (Title & terms)
// Returns
function TermsSection() {
  return (
    <section className="terms-section">
      <h2 className="terms-msg">Terms of Participation</h2>
      <ul className="terms-list">
        <li>Be over the age of 18 </li>
        <li>A Member of the GDSC Club</li>
        <li>Have prior experience in the fields of management</li>
        <li>Atleast 1 year experience in Generative AI</li>
        <li>Follow The Reaper :D</li>
      </ul>
    </section>
  );
}

// Returns the Whole Registration Page
export default function RegistrationPage() {
  return (
    <div className="registration-page">
      <Element name="register" />
      <RegSectionTitle title="Registration" />
      <Cloud1 />
      <Cloud2 />
      <TermsSection />
      <RegisterButton />
      <RegisterGirl />
      <Faqs />
    </div>
  );
}
