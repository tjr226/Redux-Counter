import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

const initialState = {
  count: 0
}

// export default (state = initialState, action) => {
//   console.log('states')
//   console.log(state)
//   console.log(state.count)
//   switch (action.type) {
//     case INCREMENT:
//       return state.count + 1;
//     case DECREMENT:
//       return state.count - 1;
//     default:
//       return state.count;
//   }
// };

// works, commented out to save it
export default (count = initialState.count, action) => {
  // console.log(count)
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
};
