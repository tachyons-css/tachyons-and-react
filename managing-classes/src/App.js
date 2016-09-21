import React, { Component } from 'react'
import List, { ListItem } from './components/list'

class App extends Component {
  render() {
    return (
      <List title='Todo'>
        <ListItem>Laundry</ListItem>
        <ListItem>Grocery shopping</ListItem>
        <ListItem>Update Tachyons dependencies</ListItem>
      </List>
    )
  }
}

export default App
