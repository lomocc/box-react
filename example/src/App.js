import { Box } from 'box-react';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Box color="red" fontSize={30}>
          Modern React component module Box
          <Box color="green" size="xs" fontSize={40}>
            Box 40
          </Box>
          <Box color="blue" size="lg" shape="pill" backgroundColor="#eee">
            Box xs
          </Box>
        </Box>
      </div>
    );
  }
}
