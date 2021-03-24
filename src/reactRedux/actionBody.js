
import * as actions from "./actionTypes";

export  function userAdded(description){
return{
    type:actions.User_Added,
    payload:{
        description:"Its the first user added"
    }
}
}



// export  function userRemoved(description){
//     return{
//         type:actions.User_Added,
//         payload:{
//             id:1
//         }
//     }
//     }

