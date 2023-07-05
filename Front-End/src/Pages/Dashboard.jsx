import StickyHeader from "../components/header";
import ProfileComp from "../components/profile";

function Dashboard(){
    return(
        <>
        <StickyHeader activePage={"dashboard"} />
        <ProfileComp />
        </>
    )
}

export default Dashboard;