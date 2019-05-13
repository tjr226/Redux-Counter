export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

// first draft
// export const increment = count => {
//   return ++count;
// };
 export const increment = () => {
   console.log("increment");
   return {
     type: INCREMENT,
    //  payload: count
   }
 }

 export const decrement = () => {
   console.log("decrement");
  return {
    type: DECREMENT,
    // payload: count
  }
}



