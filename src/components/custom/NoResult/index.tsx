import { Paragraph } from '../../../components/base/Typography';
import { BoomBox } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const NoResultContainer = styled.div`
  text-align: center;
  padding: 5rem;
`;

const NoResult: React.FC = () => {
  return (
    <NoResultContainer>
      <BoomBox size={64} />
      <Paragraph>No result found.</Paragraph>
    </NoResultContainer>
  );
};

export default NoResult;
