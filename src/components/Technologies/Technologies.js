import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List2, List3, List4, List5, ListItem, ListParagraph, ListTitle, ListIcon, ImageContainer, LinkItem } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <ListTitle>Languages</ListTitle>
    <List4>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/c-logo.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>C++</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/java-logo-1.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Java</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/python.jpg'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Python</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/js.jpg'}></ListIcon>
        </ImageContainer>
        <ListParagraph>JavaScript</ListParagraph>
      </ListItem>
    </List4>
    <ListTitle>Technologies</ListTitle>
    <List5>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/spring-boot-logo.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Spring Boot</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/django.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Django</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/nodejs.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Node.js</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/react.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>React</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/bootstrap.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Bootstrap</ListParagraph>
      </ListItem>
    </List5>
    <ListTitle>Databases</ListTitle>
    <List2>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/mysql.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>MySQL</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/mongodb.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>MongoDB</ListParagraph>
      </ListItem>
    </List2>
    <ListTitle>Competitive Programming</ListTitle>
    <List3>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/cc.png'}></ListIcon>
        </ImageContainer>
        <LinkItem href="https://www.codechef.com/users/tejaswita_269">CodeChef</LinkItem>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/cf.png'}></ListIcon>
        </ImageContainer>
        <LinkItem href="https://codeforces.com/profile/Charisma">Codeforces</LinkItem>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/lc.png'} href = "https://www.codechef.com/users/tejaswita_269"></ListIcon>
        </ImageContainer>
        <LinkItem href="https://leetcode.com/user3259H/">LeetCode</LinkItem>
      </ListItem>
    </List3>
  </Section>
);

export default Technologies;


  // <Section id="tech">
  //   {/* <SectionDivider colorAlt /> */}
  //   <SectionDivider divider />
  //   <SectionTitle>Skills</SectionTitle>
  //   {/* <SectionText>
  //     I've worked with a range a technologies in the web development world.
  //     From Back-end To Design
  //   </SectionText> */}
  //   <List>
  //     <ListItem>
  //       <picture>
  //         <DiReact size="3rem" />
  //       </picture>
  //       <ListContainer>
  //         <ListTitle>Front-End</ListTitle>
  //         <ListParagraph>
  //           Experiece with <br />
  //           React.js
  //         </ListParagraph>
  //       </ListContainer>
  //     </ListItem>
  //     <ListItem>
  //       <picture>
  //         <DiFirebase size="3rem" />
  //       </picture>
  //       <ListContainer>
  //         <ListTitle>Back-End</ListTitle>
  //         <ListParagraph>
  //           Experience with <br />
  //           Node and Databases
  //         </ListParagraph>
  //       </ListContainer>
  //     </ListItem>
  //     <ListItem>
  //       <picture>
  //         <DiZend size="3rem" />
  //       </picture>
  //       <ListContainer>
  //         <ListTitle>UI/UX</ListTitle>
  //         <ListParagraph>
  //           Experience with <br />
  //           tools like Figma
  //         </ListParagraph>
  //       </ListContainer>
  //     </ListItem>
  //   </List>
  //   {/* <SectionDivider colorAlt /> */}
  // </Section>