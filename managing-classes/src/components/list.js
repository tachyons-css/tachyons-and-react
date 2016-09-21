import React from 'react'
import classNames from 'classnames'

export default ({ title, children }) => (
  <article className='pa3 pa5-ns'>
    <h1 className='f4 bold center mw6' children={title} />
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2' children={children} />
  </article>
)

export const ListItem = ({ isDone, children }) => {
  const cx = classNames('pa3 bb b--light-silver', {
    'o-80 strike mid-gray bg-near-white': isDone
  })

  return <li className={cx} children={children} />
}
