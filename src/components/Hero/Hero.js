import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ExternalLinks, RightSection, Img, ImageContainer} from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey There! <br />
          This is Tejaswita Som  
        </SectionTitle>
        <SectionText>
        A Senior Undergraduate from IIT(BHU) - Varanasi, with a zeal to apply the creative mind and technical skills to solve real-world problems, through Data Structures, Algorithms and Software Development. 
        </SectionText>
        <br/>
        <ExternalLinks href={'https://drive.google.com/file/d/1CLrPVTgjEXiPsXSvSfmtBRsHM_zB5U34/view?usp=sharing'}>Link to Resume</ExternalLinks>
        {/* <Button onClick={props.handleClick} href={'https://drive.google.com/file/d/1CLrPVTgjEXiPsXSvSfmtBRsHM_zB5U34/view?usp=sharing'}>Link to Resume</Button> */}
      </LeftSection>
      <ImageContainer>
        <Img src={"/images/Profile (2).jpeg"}></Img>
      </ImageContainer>
      {/* <RightSection >
        <SectionText>
          aasdfghjk
          </SectionText>
        <Img src={'/images/JSW.png'} />
      </RightSection> */}
    </Section>
  </>
);

export default Hero;