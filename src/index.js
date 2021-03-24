
import store from './reactRedux/store';
import {userAdded} from './reactRedux/actionBody.js';
import {userRemoved} from './reactRedux/actionBody.js';
import * as actions from './reactRedux/actionTypes';

store.dispatch(userAdded("")),
console.log(store.getState());






// store.dispatch(userRemoved())
// console.log("user removed",store.getState());