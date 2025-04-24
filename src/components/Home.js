import SectionContainer from "./SectionContainer";
const socialIcon = [
  {
    id: 1,
    iconName: "icon-github-circled-1",
    link: "https://www.github.com/vsakaria",
    text: "Github",
  },
  {
    id: 3,
    iconName: "icon-github-circled-1",
    link: "https://gist.github.com/vsakaria",
    text: "Gist",
  },
  {
    id: 2,
    iconName: "icon-linkedin-circled",
    link: "https://www.linkedin.com/in/vishal-sakaria-0aa94b40/",
    text: "Linkedin",
  },
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >

              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/Vishal-Default-2MB.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Vishal <span>Sakaria</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
              <p>
              I’m a product engineer with over 12 years of front-end experience and a deep passion for business and solving real user problems. I listen closely to customers, uncover what truly matters, and shape products that deliver meaningful value. I combine strong UX design instincts with a sharp focus on product-market fit building clean, thoughtful interfaces that align with real needs, not just features.              </p>

                  </p>
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.sort((a, b) => a.id - b.id).map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                        title={item.text}
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
