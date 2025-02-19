import { useEffect } from "react";
import HerozSection from "../../components/ui/HeroSection/HerozSection";
import Testimonials from "../../components/ui/Testimonials/Testimonials";
import TopBookingsFacilites from "../../components/ui/TopBookingsFacilites/TopBookingsFacilites";
import HowWork from "../../components/shared/HowWork/HowWork";
import OurFeature from "../../components/ui/OurFeature/OurFeature";


const Home = () => {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <HerozSection/>
            <TopBookingsFacilites/>
            <HowWork/>
            <OurFeature/>
            <Testimonials/>
        </>
    );
};

export default Home;