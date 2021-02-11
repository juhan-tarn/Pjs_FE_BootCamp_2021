import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { VoterTableContainer } from './containers/VoterTableContainer';
import { voterToolStore } from './stores/voterToolStore';

import { Layout } from './components/ux/Layout'
import { ToolHeader } from './components/ux/ToolHeader'
import { ToolFooter } from './components/ux/ToolFooter'
import { Sidebar } from './components/ux/Sidebar';
import { Home } from './components/Home';

import './App.css';
import { AddVoterFormContainer } from './containers/AddVoterFormContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <ToolHeader headerText="PJS Voter System" />
          <aside><Sidebar></Sidebar></aside>
          <main>
            <Switch>
              <Provider store={voterToolStore}>
                <Route path="/voter-table" exact>
                  <VoterTableContainer/>
                </Route>
                <Route path="/register-voter" exact>
                  <AddVoterFormContainer/>
                </Route>
              </Provider>
              <Route path="/" exact>
                <Home/>
              </Route>
            </Switch>
          </main>
          <ToolFooter footerText="PJS, Inc." />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
