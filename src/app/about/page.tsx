import React from "react";
import Slider from "@@/components/Slider";
import OurCommitments from "@@/components/OurCommitments";
import OurTestimonials from "@@/components/OurTestimonials";
import OurPresence from "@@/components/OurPresence";
import Footer from "@@/components/Footer";

export default function About() {
  return (
    <div>
      <Slider/>
      <OurCommitments/>
      <OurTestimonials/>
      <OurPresence/>
      <Footer/>
    </div>
  );
}
