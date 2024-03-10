import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    background-color: hsl(220deg, 100%, 50%);
    color: hsl(0deg, 100%, 100%);
    border-style: solid;
    border-color: hsl(220deg, 100%, 50%);
    :hover {
    background-color: hsl(220deg, 100%, 40%);
    }
    :active {
        background-color: hsl(0deg, 100%, 100%);
        color: hsl(220deg, 100%, 50%);
    }
`;

const ActionButton = ({onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      Upload
    </StyledButton>
  )
}

export default ActionButton;
