import styled from 'styled-components';

const StyledBlockLayer = styled.div`
  position: absolute;
    width: 100%;
    height: 100%;
    background-color: hsla(0deg, 0%, 0%, 50%);
`;
const BlockLayer = () => {
  return (
    <StyledBlockLayer/>
  )
}

export default BlockLayer;
