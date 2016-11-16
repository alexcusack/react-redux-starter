import * as request from 'request'
import * as P from 'bluebird'
P.promisifyAll(request)

export const sampleAction = (value) => {
  return {
    type: 'SAMPLE_ACTION',
    value: value,
  }
}

/* ASYNC ACTIONS
Using Thunks:
The Asynchronous actions are actions that return a function.
The returned function takes the dispatch as a parameter.
The dispatch then calls the synchronous action internally once
the async portion has resolved.
This is made possible by the thunk middleware applied in
*/

export const sampleAsycAction = () => {
  return (dispatch) => {
    return request.getAsync('localhost:8080')
    .then((res) => {
      return dispatch(sampleAction('finished async request'))
    })
    .catch(err => {
      // pretending it worked even though 8080 isn't setup,
      // and, depending on the browser, you'd get a CORS error
      return dispatch(sampleAction('it totally worked!'))
    })
  }
}