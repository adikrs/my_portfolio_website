import React from 'react';

import { AiFillStar } from "react-icons/ai";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { value: 'Rank 181', text: 'Coding Ninjas – CodeKaze’21',},
  { value: '4', text: 'Star on CodeChef', },
  { value: 'Round 1A', text: 'CodeChef SnackDown-21 - Qualified', },
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
