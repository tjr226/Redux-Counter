import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

export default (state = initialState.count, action) => {
  // console.log('states')
  // console.log(state)
  // console.log(state.count)
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// works, commented out to save it
// export default (count = initialState.count, action) => {
//   // console.log(count)
//   switch (action.type) {
//     case INCREMENT:
//       return count + 1;
//     case DECREMENT:
//       return count - 1;
//     default:
//       return count;
//   }
// };
