import PageTitleWithImage from "../../Components/PageTitleWithImage/PageTitleWithImage";
import ContactCards from "./ContactCards/ContactCards";
import Map from "./Map/Map";

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <PageTitleWithImage
                pageName={"Contact"}
                bgImage={"/public/img/dot.png"}
            />
            <ContactCards />
            <Map />
        </div>
    );
};

export default About;
