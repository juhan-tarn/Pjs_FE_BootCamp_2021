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
                <Route path="/" exact >
                  <AddElectionFormContainer />
                </Route>
                <Route path="/voter-table" exact>
                  <VoterTableContainer/>
                </Route>
                <Route path="/register-voter" exact>
                  <AddVoterFormContainer/>
                </Route>

                <Route path="/ballots-table">
                  Hello
                  <table>
                      <thead>
                          <tr>
                              <th>Ballot ID</th>
                              <th>Status</th>
                              <th>Voters Count</th>
                              <th>Number of questons</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th>1</th>
                              <th>Ready</th>
                              <th>120</th>
                              <th>5</th>
                          </tr>
                          <tr>
                              <th>2</th>
                              <th>Initial</th>
                              <th>120</th>
                              <th>5</th>
                          </tr>
                          
                      </tbody>
                  </table>
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
