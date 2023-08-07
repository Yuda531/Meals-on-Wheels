import MyOrder from "../component/MyOrder";
import StickyHeader from "../components/Navbar";

const HistoryOrder = () => {
    return (
        <>
            <div className="mb-5 pb-5">
                <StickyHeader />
            </div>
            <div className="mt-5">
                <MyOrder />
            </div>
        </>
    );
}

export default HistoryOrder;