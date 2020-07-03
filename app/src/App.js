import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import SimpleLines from './SimpleLines';
import SharedEventsGraphs from './SharedEventsGraph';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <SharedEventsGraphs/>
      </Container>
    </React.Fragment>
  );
}

export default App;
