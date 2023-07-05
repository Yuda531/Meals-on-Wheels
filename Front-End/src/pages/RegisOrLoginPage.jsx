import RegisLogin from "../components/RegisLogin";
import StickyHeader from "../components/header";

function RegisOrLoginPage(){
    return(
        <>
        <StickyHeader activePage={"getStarted"}/>
        <RegisLogin />
        </>
    )
}

export default RegisOrLoginPage;