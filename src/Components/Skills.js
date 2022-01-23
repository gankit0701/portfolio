import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Button1 from './Button1';


const skill = ["JAVA", "C", "C++", "ANDROID STUDIO","HTML", "CSS", "JAVASCRIPT", "BOOTSTRAPS"];
const  industry = ["APPLICATION LIFE CYCLE","PROJECT MANAGEMENT","BRAND OVERSIGHT","TEST ESTIMATION"]
const tech = ["VSCODE","POSTMAN","ANDROID STUDIO","WEBSITE ANALYTIES TOOLS"]
const soft = ["TEAM PLAYER","Good Communication","Work Ethics","Creative"]
function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                       
                      <Button1 button={skill} title = "SKILL'S"/>
                      <Button1 button={industry} title = "INDUSTRY KNOWLEDGE"/>
                      <Button1 button={tech} title = "TOOLS"/>
                      <Button1 button={soft} title = "SOFT-SKILLS"/>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
