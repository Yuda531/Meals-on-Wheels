import Footer from "../components/footer";
import StickyHeader from "../components/header";
import LandingNoLogin from "../components/landingNoLogin";

function LandingPage(){
    return(
        <>
        <StickyHeader activePage={'home'} />
        <LandingNoLogin />
        </>
    )
}

export default LandingPage;