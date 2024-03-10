import { FormEvent, FunctionComponent, useEffect, useState } from 'react';
import Papa from 'papaparse';
import csv from '../source/data';
import ListReport from '../components/ListReport';
import Search from '../components/Search';
import styled from 'styled-components';

const headers = ['Buchungstag', 'Verwendungszweck', 'Betrag'];

const FlexBox = styled.div`
   display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
`
interface AccountData {
  Buchungstag: string;
  Verwendungszweck: string;
  Betrag: string;
}

const AccountOverview: FunctionComponent = (): JSX.Element => {
  const [fullData, setFullData] = useState<string[][]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const results = Papa.parse<AccountData>(csv, {
        delimiter: ';',
        header: true
      });
      const rows = results.data;
      const tableData = rows.map(row => [row.Buchungstag, row.Verwendungszweck, row.Betrag]);
      setFullData(tableData);
    };
    fetchData().catch(e => console.log(e));
  }, []);
  const filteredData = fullData.filter(row => row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase())));
  return (
    <FlexBox>
      <Search onChange={(event: FormEvent<HTMLInputElement>) => setSearchTerm(event.currentTarget.value)}/>
      <ListReport headers={headers} data={filteredData}/>
    </FlexBox>
  );
};

export default AccountOverview;
