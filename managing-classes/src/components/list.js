import React from 'react'

export default ({ title, children }) => (
  <article className='pa3 pa5-ns'>
    <h1 className='f4 bold center mw6' children={title} />
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2' children={children} />
  </article>
)

export const ListItem = ({ children }) => (
  <li className='ph3 pv3 bb b--light-silver' children={children} />
)
