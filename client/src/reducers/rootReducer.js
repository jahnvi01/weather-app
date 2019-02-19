var initialState={
 
    name:[
        
    ]

}
const rootReducer=(state=initialState,action)=>{
 
switch(action.type){

   case "post":
   return {...state,name:action.payload}
    ;
   default:
return state;
}

}
export default rootReducer;