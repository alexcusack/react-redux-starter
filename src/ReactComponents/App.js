import React from 'react'

export default class App extends React.Component {
  render () {
    const { message } = this.props
    const {sampleAction, sampleAsycAction} = this.props.actions
    const nextMessage = message === 'hello world (click me)' ?
                                      'Action ran' :
                                      'hello world (click me)'
    return (
      <div>
        <h1 onClick={sampleAction.bind(null, nextMessage)}>{message}</h1>
        <button onClick={sampleAsycAction}>Click me for async request</button>
      </div>
    )
  }
}