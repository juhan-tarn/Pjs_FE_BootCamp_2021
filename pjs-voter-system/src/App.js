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
import { AddElectionFormContainer } from './containers/AddElectionFormContainer';
import { ElectionTableContainer } from './containers/ElectionTableContainer';

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

                <Route path="/elections-table">
                  <ElectionTableContainer />
                </Route>
                
                <Route path="/create-election">
                  <AddElectionFormContainer />
                </Route>

                <Route path="/capture-vote">
                  <div>
                    <label htmlFor="userId-input">Userid</label>
                    <input type="text" id="make-input" name="make" value=""/>

                  </div>
                  <div>
                    <label htmlFor="userId-input">ElectionId</label>
                    <select type="text" id="make-input" name="make" value=""/>

                  </div>

                  <button>Vote</button>
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
