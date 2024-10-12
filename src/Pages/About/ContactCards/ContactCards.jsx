import ContactCard from "../ContactCard/ContactCard";

const ContactCards = () => {
  return (
    <div className="py-5">
      <h1 className="font-yeseva font-bold text-3xl my-5 text-center">
        Find Us Here
      </h1>
      <div className="grid md:grid-cols-2 gap-5  p-5 max-w-5xl">
        <ContactCard
          icon={"office"}
          title={"Head Office "}
          description={"Dhaka,Bangladesh"}
        />
        <ContactCard
          icon={"tree"}
          title={"Work Hours"}
          description={""}
        />
        <ContactCard
          icon={"phone"}
          title={"Phone Number"}
          description={"01730481212"}
        />
        <ContactCard
          icon={"mail"}
          title={"Email us at"}
          description={""}
        />
      </div>
    </div>
  );
};

export default ContactCards;
