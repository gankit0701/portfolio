import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Experince and Education"} span={"education"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle
            icon={briefcase}
            title={"Mobile Application Developer"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Nov, 2021 - Present"}
            title={"Saraswat Infotech Pvt Ltd , Mumbai"}
            text={`● Presented designs to customers for evaluation, promptly changing client's required improvements,
                  amendments and requests.
                  ● Creating banking Application from Scratch in Flutter .
                  ● Deployed More than 30 application using Flavor.
                  ● Planned storyboards for clients before creating applications, ensuring designs and ideas stayed to client
                  requirements and expectations.
                  ● Worked with outside data sources and APIs
                   `}
          />
        </div>
        <div className="small-title">
          <SmallTitle
            icon={briefcase}
            title={"Mobile Application Developer"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"March, 2021 - Oct 2021"}
            title={" Digixy Global Consulting  , Noida"}
            text={`● Presented designs to customers for evaluation, promptly changing client's required improvements,
                  amendments and requests.
                  ● Designed applications that were successfully downloaded by 5000+ users.
                  ● Planned storyboards for clients before creating applications, ensuring designs and ideas stayed to client
                  requirements and expectations.
                  ● Worked with outside data sources and APIs
                   `}
          />
        </div>

        <div className="small-title">
          <SmallTitle
            icon={briefcase}
            title={"Android App Developer"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"June, 2020 - Feb,2021"}
            title={" First Nucleus Internet Technology  , Mumbai"}
            text={` ● Presented designs to customers for evaluation, promptly changing client's required improvements,
                    amendments and requests.
                    ● Designed applications that were successfully downloaded by 5000+ users.
                    ● Planned storyboards for clients before creating applications, ensuring designs and ideas stayed to client
                    requirements and expectations.
                    ● Worked with outside data sources and APIs.
                    ● Work on bug fixing and improving application performance.
                    ● Unit-test code robustness, including edge cases, usability and general reliability.
                    ● Used various playout systems to deliver first-class sound and vision across live and recorded media output.
                    `}
          />
        </div>
        <div className="small-title">
          <SmallTitle
            icon={briefcase}
            title={"Interships, Android App Developer"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"April, 2020 - June,2020"}
            title={" Mirazh Media and Entertainment Pvt  , Mumbai"}
            text={` ● Worked closely with suppliers to source new, in-demand reads for a popular, ever-growing library catalogue.
                    ● Built customer loyalty through exceptional service, consistently growing repeat business to ensure excellent
                    sales figures.
                    ● Bug fixing and improving application performance.
                    ● Work with outside data sources and APIs.
                    ● Unit-test code for robustness, including edge cases, usability and general reliability.
                    ● Work on bug fixing and improving application performance`}
          />
        </div>
        {/* <div className="small-title">
          <SmallTitle icon={briefcase} title={"Interships, Web Designer"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Jan, 2020 - Feb,2020"}
            title={"Write Soft , Mumbai"}
            text={` ● Built reusable code that could be utilized in other projects, effectively saving the company money.
                    ● Reviewed information regularly on websites and pages to ensure that it was accurate.
                    ● Created web materials to be used in marketing and email campaigns.
                    ● Managed all project and web strategic planning for the entire team.
                    ● Ensured that sites adhered to brand guidelines.
                    ● Handled special projects designated by the senior developer.
                    ● Redesigned sites to enhance navigation and improve visual appeal.
                    ● Created and implemented firewalls, encryption strategies and other critical security measures.
              `}
          />
        </div> */}

        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Interships,Web Developer"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"June, 2019 - July,2019"}
            title={"Smart Study Hub, Mumbai"}
            text={` ●Built reusable code that could be utilized in other projects, effectively saving the company money      
                    ● Participated in pre-project analysis and technical assessments to ensure the creation of a user-friendly
                    interface.
                    ● Reviewed information regularly on websites and pages to ensure that it was accurate.
                    ● Created web materials to be used in marketing and email campaigns.
                    ● Contributed back-end experience and collaborated on APIs.
                    ● Managed all project and web strategic planning for the entire team.
                    ● Ensured that sites adhered to brand guidelines.
                    ● Handled special projects designated by the senior developer.
                    ● Redesigned sites to enhance navigation and improve visual appeal.
                    ● Created and implemented firewalls, encryption strategies and other critical security measures.
              
              `}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2017 - 2020"}
            title={"Bsc IT"}
            subTitle={"Vidyalankar School Of Information Technology"}
            text={"Wadala, Mumbai:400031"}
            /* text={
              "Got 75% through out the semester. Always active in project cirriculum."
            } */
          />
          <ResumeItem
            year={"2016 - 2017"}
            title={"HSC (Science)"}
            subTitle={"GuruNanak Khalsa College"}
            text={"Matunga, Mumbai:400019"}
          />
          <ResumeItem
            year={"2014 - 2015"}
            title={"SSC"}
            subTitle={"Shree Dayanand Balak Vidyalay"}
            text={"Matunga, Mumbai:400019"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
