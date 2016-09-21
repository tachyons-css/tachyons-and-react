import React, { Component } from 'react'
import List, { ListItem } from './components/list'

class App extends Component {
  render() {
    const items = [{
      key: 1,
      text: 'Laundry',
      isDone: false
    }, {
      key: 2,
      text: 'Grocery shopping',
      isDone: true
    }, {
      key: 3,
      text: 'Update Tachyons dependencies',
      isDone: false
    }]

    return (
      <List title='Todo'>
        {items.map(item => (
          <ListItem
            key={item.key}
            isDone={item.isDone}
            children={item.text} />
        ))}
      </List>
    )
  }
}

export default App
