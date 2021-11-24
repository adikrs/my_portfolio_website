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

export const RightSection = styled.div`
  width: 100%;
  text-align : right;
  align-items: right;
  justify-content: right;
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
padding:2rem;
background: linear-gradient(270deg, #ff622e 0%, #B133FF 100%);
border-radius: 50px;
transition: 0.5s;
&:hover{
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  
}
`;

export const Img = styled.img`
  width:250px;
  height:auto;
  border: solid white 2px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 100%;
  padding: 60px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`