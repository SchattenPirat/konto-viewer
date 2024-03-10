import styled from 'styled-components';
import ListReport from './components/ListReport';
import AccountOverview from './page/AccountOverview';

const AppWrapper = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
`;

const App = (): JSX.Element => {
  return (
    <AppWrapper>
      <AccountOverview/>
    </AppWrapper>
  );
};

export default App;
