import * as actions from './actionTypes';




/*
by this     return state.filter(user => user.id !==action.payload.id)
statment we mean to return  all the users id except
the deleted one


*/

let lastId =0;
function reducer(state = [],action){
    switch(action.type){
        case actions.User_Added:
        return[
            ...state,
            {
                id:++lastId,
                description:action.payload.description,
           
            }
        ];
        case actions.User_Removed:
            return state.filter(user => user.id !==action.payload.id)
    default:
        return state;
        }
}
export  default reducer;