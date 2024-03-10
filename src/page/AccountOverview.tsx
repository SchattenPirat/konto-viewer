import { FormEvent, FunctionComponent, useEffect, useState } from 'react';
import Papa from 'papaparse';
import csv from '../source/data';
import ListReport from '../components/ListReport';
import Search from '../components/Search';
import styled from 'styled-components';
import ActionButton from '../components/ActionButton';
import UploadDialog from '../components/UploadDialog';
import BlockLayer from '../components/BlockLayer';

const headers = ['Buchungstag', 'Verwendungszweck', 'Betrag'];

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
`;

const ActionBar = styled.div`
    display: flex;
    justify-content: end;
    padding: 0.5rem;
`;

interface AccountData {
  Buchungstag: string;
  Verwendungszweck: string;
  Betrag: string;
}

const AccountOverview: FunctionComponent = (): JSX.Element => {
  const [fullData, setFullData] = useState<string[][]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState<boolean>(false);
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
    <>
      {
       isUploadDialogOpen &&(<><UploadDialog onClick={() => setIsUploadDialogOpen(!isUploadDialogOpen)}/> <BlockLayer/></>)
      }
      <FlexBox>
        <div>
        <Search onChange={(event: FormEvent<HTMLInputElement>) => setSearchTerm(event.currentTarget.value)}/>
        </div>
        <div>
          <ActionBar>
            <ActionButton onClick={() => setIsUploadDialogOpen(!isUploadDialogOpen)}/>
          </ActionBar>
          <ListReport headers={headers} data={filteredData}/>
        </div>
      </FlexBox>
    </>
  );
};

export default AccountOverview;
