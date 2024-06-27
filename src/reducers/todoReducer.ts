/* Reducer 
  Components with many state updates spread across many event handlers can get overwhelming. 
  For these cases, you can consolidate all the state update logic outside your component 
  in a single function, called a reducer.

  It can receive state and actions as params .
  * state is data for the feature 
  * action -- is object 
  * action obj can have two properties
  * 1. type (must)
  * 2. payload (optional)
  * reducer function must return updated state
  * * how to call the reducer? 
  *  step 1. have useReducer hook in the component with todoReducer as its param
  *  step 2:only one way -- by dispatching an action from the component
*/
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const initialTodoState: ITodo[] = [];

export function todoReducer(state: ITodo[] = initialTodoState, action: any) {
  console.log("todoReducer called");

  let newTodos: ITodo[] = [];
  switch (action.type) {
  case "LIST_TODOS":
    console.log("5. STATE UPDATED");
    return action.payload;

  case "ADD_TODO":
    newTodos = [...state, action.payload];
    return newTodos;

  default:
    return state;
  }
}

/* Let's identify the possible actions in this Todos feature
  1. LIST_TODOS [TO LEARN]
  2. ADD_TODO  [TO LEARN]
  3. EDIT_TODO
  4. COMPLETE_TODO
  5. DELETE_TODO
  6. SEARCH_TODOS
*/
