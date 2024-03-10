import styled from 'styled-components';
import { FunctionComponent } from 'react';

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: #f2f2f2;
`;

const StyledTableData = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;

const StyledTableRow = styled.tr`
:hover {
  background-color: hsl(200deg, 0%, 50%);  
}
`;

interface Props {
  headers: string[];
  data: string[][];
}

const ListReport: FunctionComponent<Props> = ({
  headers,
  data
}) => {
  return (
    <div>
      <StyledTable>
        <thead>
        <tr>
          {headers.map((header, i) => <StyledTableHeader key={i}>{header}</StyledTableHeader>)}
        </tr>
        </thead>
        <tbody>
        {data.map((row, i) => (
          <StyledTableRow key={i}>
            {row.map((cell, j) => <StyledTableData key={j}>{cell}</StyledTableData>)}
          </StyledTableRow>
        ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default ListReport;
