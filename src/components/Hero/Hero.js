import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ExternalLinks, RightSection, Img, ImageContainer} from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey There! <br />
          This is adikrsingh<br /> (Aditya Kumar Singh)
        </SectionTitle>
        <SectionText>
        A Final Year Undergraduate from IIT(BHU) - Varanasi . <br/> My areas of interest are Problem Solving, Data Structures and Algorithms , Software Development and Computer Vision. 
        </SectionText>
        {/* <br/> */}
        {/* <ExternalLinks style={{height:'auto'}} href={'https://drive.google.com/file/d/1MXylX0EEV_F2NgrtLxjNzx2ajWX5Fi19/view?usp=sharing'}>Link to Resume</ExternalLinks> */}
        <Button onClick={props.handleClick} href={'https://drive.google.com/file/d/1MXylX0EEV_F2NgrtLxjNzx2ajWX5Fi19/view?usp=sharing'}>Link to Resume</Button>
      </LeftSection>
      <ImageContainer>
        <Img src={"/images/profile.jpeg"}></Img>
      </ImageContainer>

    </Section>
  </>
);

export default Hero;