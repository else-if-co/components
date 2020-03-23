import React, {Component} from 'react'
import { render } from 'react-dom'

import StickyNavigation from '../../src/StickyNavigation'

class Demo extends Component {
  render() {
    return <div>
      <h1>auspicus-components Demo</h1>
      <StickyNavigation
        menu={[{
          component: ({ link, _, className, children }) => (
            <a href={link} className={className}>
              {children}
            </a>
          ),
          className: 'sticky-navigation__item',
          label: 'Menu Item'
        }]} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
