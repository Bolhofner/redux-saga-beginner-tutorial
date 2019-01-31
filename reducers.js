const initialState = {
  posts: {},
  counter: 0
}


export function counter(state = initialState.counter, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export function getPost(state = initialState.posts, action) {
  console.log(state);
  switch (action.type) {
    case 'GET_POST':
      return Object.assign({}, state, {
        
    default:
      return state
  }
}

export default function* rootReducer() {
  yield all([
    getPost(),
    counter(),
  ])
}