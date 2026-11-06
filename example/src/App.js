import { Box, Text } from 'box-react';
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
          <Text
            mediaQueries={{
              sm: '(min-width: 576px)',
              md: '(min-width: 768px)',
              lg: '(min-width: 1312px)'
            }}
            color="green"
            size="xs"
            mdSize="lg"
          >
            Text
          </Text>
          <Box color="blue" size="lg" shape="pill" backgroundColor="#eee">
            Box xs
          </Box>
        </Box>
      </div>
    );
  }
}
