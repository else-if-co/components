import React, {Component} from 'react'
import { render } from 'react-dom'

import UserCircle from './icons/UserCircle'
import StickyNavigation, { STICKY_NAVIGATION_POSIITON } from '../../src/Sticky/StickyNavigation'

import './styles.css'

const LinkComponent = props => (
  <a style={{ display: 'block', width: '100%', height: '100%' }} href={props.link}>
    {props.icon}

    <div>
      {props.label}
    </div>
  </a>
)

class Demo extends Component {
  render() {
    return (
      <div>
        <StickyNavigation
          position={STICKY_NAVIGATION_POSIITON.TOP}
          menu={[{
            component: LinkComponent,
            label: 'Hello World',
            link: '/hello-world',
            icon: <UserCircle />,
          }, {
            component: LinkComponent,
            label: 'Hello World 2',
            link: '/hello-world-2',
            icon: <UserCircle />,
          }, {
            component: LinkComponent,
            label: 'Hello World 3',
            link: '/hello-world-3',
            icon: <UserCircle />,
          }, {
            component: LinkComponent,
            label: 'Hello World 4',
            link: '/hello-world-4',
            icon: <UserCircle />,
          }]}
          />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
