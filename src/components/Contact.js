import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ContactForm from "./contact/ContactForm";
import Map from "./contact/Map";
const Contact = () => {
  return (
    <SectionContainer name={"contact"}>
      <div className="container">
        <div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Contact"} title={"Get in Touch"} />
            </div>
          </div>
          <div className="text-[20px] mb-[20px]">
            <p>Email: vsakaria@gmail.com</p>
            <p>Phone: 07930110405</p>
            <a href="https://app.enhancv.com/share/01c6c6d5/" target="_blank">Read my CV</a>
          </div>
          {/* <Map /> */}
          {/* <ContactForm /> */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;