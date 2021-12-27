import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List2, List3, List4, List5, ListItem, ListParagraph, ListTitle, ListIcon, ImageContainer, LinkItem } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <ListTitle>Languages</ListTitle>
    <List5>
    <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/C.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>C</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/c-logo.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>C++</ListParagraph>
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
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/SQL.jpg'}></ListIcon>
        </ImageContainer>
        <ListParagraph>SQL</ListParagraph>
      </ListItem>
    </List5>
    <ListTitle>Frameworks and Utilities </ListTitle>
    <List5>

    <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/DOCKER.jpeg'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Docker</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/GRAPHQL.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>GraphQL</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/react.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>React</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/POSTMAN.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Postman</ListParagraph>
      </ListItem>
    
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/django.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Django</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/OPENCV.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>OpenCV</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/nodejs.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Node.js</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/bootstrap.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>Bootstrap</ListParagraph>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/GIT.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>GIT</ListParagraph>
      </ListItem> 

    </List5>
    <ListTitle>Databases And Cloud</ListTitle>
    <List3>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/mysql.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>MySQL</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/OCI.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>OCI</ListParagraph>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/AWS.png'}></ListIcon>
        </ImageContainer>
        <ListParagraph>AWS</ListParagraph>
      </ListItem>
    </List3>
    <ListTitle>Competitive Programming</ListTitle>
    <List3>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/cc.png'}></ListIcon>
        </ImageContainer>
        <LinkItem href="https://www.codechef.com/users/adikr_singh">CodeChef</LinkItem>
      </ListItem>
      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/cf.png'}></ListIcon>
        </ImageContainer>
        <LinkItem href="https://codeforces.com/profile/adkrsingh">Codeforces</LinkItem>
      </ListItem>

      <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/ATCODER.png'}></ListIcon>
        </ImageContainer>
        <LinkItem href="https://atcoder.jp/users/adikrsingh">Atcoder</LinkItem>
      </ListItem>


    </List3>

    <List3>

    <ListItem>
          <ImageContainer>
            <ListIcon src={'/images/HACKERRANK.jpg'}></ListIcon>
          </ImageContainer>
          <LinkItem href="https://www.hackerrank.com/adikrsingh">Hackerrank</LinkItem>
        </ListItem>
      
 
      <ListItem>
          <ImageContainer>
            <ListIcon src={'/images/HACKEREARTH.png'}></ListIcon>
          </ImageContainer>
          <LinkItem href="https://www.hackerearth.com/@adikrs">Hackerearth</LinkItem>
        </ListItem>


        <ListItem>
        <ImageContainer>
          <ListIcon src={'/images/lc.png'}></ListIcon>
        </ImageContainer>
        <LinkItem href="https://leetcode.com/adikrsingh/">LeetCode</LinkItem>
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