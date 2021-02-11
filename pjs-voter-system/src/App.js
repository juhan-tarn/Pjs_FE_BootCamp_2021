import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Layout } from './components/ux/Layout'
import { ToolHeader } from './components/ux/ToolHeader'
import { ToolFooter } from './components/ux/ToolFooter'
import { Sidebar } from './components/ux/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <ToolHeader headerText="PJS Voter System" />
          <aside><Sidebar></Sidebar></aside>
          <main>
          </main>
          <ToolFooter footerText="PJS, Inc." />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
