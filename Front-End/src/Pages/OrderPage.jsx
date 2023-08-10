import StickyHeader from "../components/Navbar";
import OrderForm from "../components/orderForm";

function OrderPage(){
    return(
        <>
        <StickyHeader activePage={" "} />
        <OrderForm />
        </>
    )
}
export default OrderPage;