import React, {Component} from 'react'
import { render } from 'react-dom'

import Modal from '../../src/Modal'

class Demo extends Component {
  render() {
    return <div>
      <h1>auspicus-components Demo</h1>
      <Modal title="newTitle" subtitle="newSubtitle" />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
