const initialState = {
  message: 'hello world (click me)'
}

export const main = (state = initialState, action) => {
  if (action.type === 'SAMPLE_ACTION') return Object.assign({}, state, {message: action.value})
  return state
}
