import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 2.5rem;
padding:2rem 2rem;
background: linear-gradient(270deg, #ff622e 0%, #B133FF 100%);
border-radius: 50px;
transition: 0.5s;
&:hover{
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  
}
`;