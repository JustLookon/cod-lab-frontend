import Navbar from "@@/components/Navbar";
import Packages from "@@/components/Packages";
import Slider from "@@/components/Slider";
import Card from "@@/components/PackagesCard";
import Image from "next/image";
import KeyAdvantages from "@@/components/KeyAdvantages";
import PathCare from "@@/components/PathCare"
import BookH from "@@/components/BookHomeCollection";
import BookHomeCollection from "@@/components/BookHomeCollection";
import OurPathCarePromise from "@@/components/OurPathCarePromise";
import BookAnAppointment from "@@/components/BookAnAppointment";
import OurCommitments from "@@/components/OurCommitments";
import OurTestimonials from "@@/components/OurTestimonials";
import OurPresence from "@@/components/OurPresence";
import Footer from "@@/components/Footer"
export default function Home() {
  // let packageObj = {
    
  // }

  return (
    <>
    <Slider />
    <Packages />
    <KeyAdvantages/>
    <PathCare/>
    <BookHomeCollection/>
    <OurPathCarePromise/>
    <BookAnAppointment/>
    <OurCommitments/>
    <OurTestimonials/>
    <OurPresence/>
    <Footer/>
    </>
  )
}
