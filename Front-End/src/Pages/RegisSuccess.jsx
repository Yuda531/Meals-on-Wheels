import StickyHeader from "../components/header";
import SignInOnly from "../components/signInOnly";

function RegisSuccess(){
    return(
        <>
        <StickyHeader activePage={"getStarted"} />
        <SignInOnly />
        </>
    )
}

export default RegisSuccess