import AboutContent from "../components/aboutContent";
import StickyHeader from "../components/header";

function AboutUs(){
    return(
        <>
        <StickyHeader activePage={"about-us"} />
        <AboutContent />
        </>
    )
}

export default AboutUs;