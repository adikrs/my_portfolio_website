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
          This is adikrsingh <br /> (Aditya Kumar Singh)
        </SectionTitle>
        <SectionText>
        A Senior Undergraduate from IIT(BHU) - Varanasi . I love to solve real-world problems, through Data Structures, Algorithms and Software Development. 
        </SectionText>
        <br/>
        <ExternalLinks href={'https://drive.google.com/file/d/1MXylX0EEV_F2NgrtLxjNzx2ajWX5Fi19/view?usp=sharing'}>Link to Resume</ExternalLinks>
        {/* <Button onClick={props.handleClick} href={'https://drive.google.com/file/d/1MXylX0EEV_F2NgrtLxjNzx2ajWX5Fi19/view?usp=sharing'}>Link to Resume</Button> */}
      </LeftSection>
      <ImageContainer>
        <Img src={"/images/profile.jpeg"}></Img>
      </ImageContainer>

    </Section>
  </>
);

export default Hero;