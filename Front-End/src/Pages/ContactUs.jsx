import ContactUsContent from "../components/contactUsContent";
import StickyHeader from "../components/header";

function ContactUs(){
    return(
        <>
        <StickyHeader activePage={"contact-us"} />
        <ContactUsContent />
        </>
    )
}

export default ContactUs;