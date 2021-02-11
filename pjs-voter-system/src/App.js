import { Provider } from 'react-redux';
import { VoterTableContainer } from './containers/VoterTableContainer';
import { voterToolStore } from './stores/voterToolStore';

function App() {
  return (
    <>
      <Provider store={voterToolStore}>
        <VoterTableContainer/>
      </Provider>
    </>
  );
}

export default App;
