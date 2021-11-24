import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { experiences } from '../../constants/constants';

const Experiences = () => (
  <Section id="experiences">
    <SectionDivider divider/>
    <SectionTitle>Experiences</SectionTitle>
    <GridContainer>
      <Img src={"/images/jswlogo (2).jpg"} />
      {experiences.map((ex, i) => {
        return (
          <BlogCard key={i}>
            {/* <Img src={ex.image} /> */}
            <TitleContent>
              <HeaderThree title>{ex.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{ex.description}</CardInfo>
            <div>
              {/* <TitleContent>Stack</TitleContent> */}
              <TagList>
                {ex.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <br></br>
            {/* <UtilityList>
              <ExternalLinks href={ex.visit}>Code</ExternalLinks>
              <ExternalLinks href={ex.source}>Source</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experiences;