import React from 'react';

import { AiFillStar } from "react-icons/ai";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { value: 'Rank 181', text: 'Coding Ninjas – CodeKaze’21',},
  { value: '4 Star (1928)', text: 'On CodeChef', },
  { value: 'Top 10', text: 'Females (Global)  in  Pre-Elimination SnackDown-21', },
  { value: "33rd", text: 'Position - Myntra HackerRamp-20', }
];

const Acomplishments = () => (
  <Section id="achievements">
    <SectionDivider divider />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.value}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider/> */}
  </Section>
);

export default Acomplishments;
