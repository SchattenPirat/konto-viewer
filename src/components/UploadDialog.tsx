import styled from 'styled-components';
import ActionButton from './ActionButton';

const StyledDialog = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    border-style: solid;
    background-color: hsl(0deg, 100%, 100%);
    border-radius: 10px;
    width: 50%;
    max-width: 60ch;

`;

const FlexBox = styled.div`

`;

const Title = styled.div`
    background-color: hsl(220deg, 100%, 50%);
    text-align: center;
    padding: 1rem;

`;

const TitleText = styled.span`
    color: hsl(0deg, 100%, 100%);
    font-weight: bold;
`;

const ActionBar = styled.div`
  display: flex;
    justify-content: end;
    padding: 1rem;
    border-top-style: solid;
    border-top-width: thin;
    border-top-color: hsl(0deg, 0%, 50%);
`;

const FileInput = styled.input`
    padding: 0.5rem;

    ::file-selector-button {
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
    }
`;

const UploadDialog = ({onClick}) => {
  return (
    <StyledDialog>
      <Title>
        <TitleText>
          File Upload
        </TitleText>
      </Title>
      <FileInput type="file"/>
      <ActionBar>
        <ActionButton onClick={onClick}/>
      </ActionBar>
    </StyledDialog>
  );
};

export default UploadDialog;
