import React from 'react';

import { AiFillStar } from "react-icons/ai";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { value: '1111 Rank', text: 'Google Hash Code 2021',},
  { value: '171 rank', text: 'Google Kickstart Round H 2021', },
  { value: '1st in IIT BHU', text: 'Codejunk, TECHNICHE(IIT GUWAHATI)', },
  { value: "2nd place", text: 'SpyBits’20, Cryptographic Event, Udyam’20', },
  { value: "1st Rank", text: 'NP COMPETE’19, COPS(IIT-BHU)', },
  { value: "Top Kaggle scorer", text: 'Ctrl Shift Intelligence , ML event COPS(IIT BHU)', }

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
