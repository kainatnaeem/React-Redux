/*
React-Redux
create your project
then install npm i redux

First of all inside our index.js we have : two actions userAdded and userRemoved check both in the console these functions are defined inside actionBody.js file 

store.dispatch(userAdded("")),
console.log(store.getState());
// store.dispatch(userRemoved())
// console.log("user removed",store.getState());

4 steps:
1: to design the store
2: define the actionss
3: create a reducer
4: setup the store

we can have a user having properties like id, description etc

add a user delete a user and update a user
it will type: "Add_user"
or type : "Update_user"
and lil description of action we can aslo use payload instead of description

make files 
reducer 
actionTypes
actionBody
store

reducer.js:
reducer will take current state and action then it will return updated state 

for  user removing or updating we have used id
by this
return state.filter(user => user.id !==action.payload.id)
statment we mean to return  all the users id except
the deleted one

actionType.js:
actiontype is created in order to easily call our actions
store.js:
inside store we have calling a  function in which we are passing reducer function as arugmnt

*/