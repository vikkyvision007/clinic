import HomeSection from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";
import MeetTheDoctors from "./components/MeetTheDoctors/MeetTheDoctors";
import Benefits from "./components/Benefits/Benefits";
import Testimonials from "./components/Testimonials/Testimonials";
import ConnectWithUs from "./components/ConnectWithUs/ConnectWithUs";

export default function Page() {
  return (
    <>
      <HomeSection />
      <AboutUs />
      <OurServices />
      <MeetTheDoctors />
      <Benefits />
      <Testimonials />
      <ConnectWithUs />
    </>
  );
}
