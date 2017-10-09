// State argument is not application state, only the state
// this reducer is responisble for.
// so same state flows through the same reducer every time.
// state = null means that if the state comes in is undefined, set it to null
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
