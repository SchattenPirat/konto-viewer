import { FormEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1rem;
    font-size: 1rem;
    border-radius: 10px;
    font-style: italic;
    :hover {
        border-color: hsl(200deg, 50%, 50%);
    }
`;

interface Props {
  onChange: (event: FormEvent<HTMLInputElement>) => void
}
const Search: FunctionComponent<Props> = ({ onChange }): JSX.Element => {
  return (
    <StyledInput placeholder="Search" onChange={onChange}/>
  );
};

export default Search;
