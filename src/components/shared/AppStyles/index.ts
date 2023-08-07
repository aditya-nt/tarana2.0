import styled from "styled-components";
import { Card } from "react-bootstrap";

const flex = styled.div`
  display: flex;
  align-items: baseline;
`;
const vflex = styled.div`
  display: flex;
`;

const fullFlex = styled(flex)`
  justify-content: space-between;
  width: 100%;
`;

const zeroFlex = styled(flex)`
  justify-content: center;
`;
const rowg1 = styled(zeroFlex)`
  gap: 1rem;
`;

export const col = styled(vflex)`
  flex-direction: column;
  width: 100%;
`;

export const colg1 = styled(col)`
  gap: 1rem;
`;

export const colg2 = styled(col)`
  gap: 2rem;
  height: 100vh;
`;


export const HStack = { flex, fullFlex, zeroFlex, rowg1 }

export const VStack = { col , colg2, colg1}


export const StyledCard = styled(Card)`
  padding: 2rem;
  width: 100%;
`
export const Container = styled.div`
  display : flex;
  width: 100%;
  flex-grow : 1;
  padding-inline: 2rem;
`

export const StyledHeading4W = styled.h4`
  color: #eeeeee;
`
export const StyledHeading4 = styled.h4`

`
export const StyledHeading5 = styled.h5`
  font-size: 16px;
`
export const StyledHeading5W = styled.h5`
  font-size: 16px;
  color: #eeeeee;
`
export const StyledSpan = styled.span`
  font-size: 14px;
  color: #eeeeee;
`

export const StyledFiller = styled.div`
  height: 10rem;
`
