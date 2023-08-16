import styled from 'styled-components';

const Image = styled.img`

  @keyframes inputFocus {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: inputFocus 1.5s infinite;
`;

export default Image;
