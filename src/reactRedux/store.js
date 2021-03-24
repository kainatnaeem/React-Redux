import {createStore} from 'redux';
import reducer from './reducer';

/*
we are passing reducer ass an argument in createStore
function and storing the reuslt in var
store reducer actaually  return us the 
update state
*/
const store = createStore(reducer);
export default store;