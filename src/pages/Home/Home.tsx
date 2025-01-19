import { useEffect } from "react";
import HerozSection from "../../components/ui/HeroSection/HerozSection";
import Testimonials from "../../components/ui/Testimonials/Testimonials";
import TopBookingsFacilites from "../../components/ui/TopBookingsFacilites/TopBookingsFacilites";
import HowWork from "../../components/shared/HowWork/HowWork";


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
            <Testimonials/>
        </>
    );
};

export default Home;