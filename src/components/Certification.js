import { useContext } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const Certification = () => {
  const { setNewsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"certification"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Certification"} title={"Certification"} />
            </div>
          </div>
          <div className="justify-center items-center">
            <img src="/assets/img/certifications/GenAI-cert.webp" alt="Certification" className="mx-auto object-contain h-[50%] w-[50%]" />
            <img src="/assets/img/certifications/Negotations-cerf.webp" alt="Certification" className="mx-auto object-contain h-[50%] w-[50%]" />
            <img src="/assets/img/certifications/Managment Mastery.webp" alt="Certification" className="mx-auto object-contain h-[50%] w-[50%]" />
            <img src="/assets/img/certifications/Sales for Engineers.webp" alt="Certification" className="mx-auto object-contain h-[50%] w-[50%]" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Certification;
