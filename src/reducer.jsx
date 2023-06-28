import axios from "axios"






export default function reducer(state,{type,payLoad}){
switch(type){
    //post related reducers--------
    case"all-posts":

    console.log(payLoad)
    
    return {...state,allPosts:payLoad}

    case "like-post":
        return{...state,allPosts:payLoad}



    case "dislike-post":
      return{...state,allPosts:payLoad}

    
    

    //user related reducers----------
    case"all-users":
    console.log(payLoad)
    return {...state,allUsers:payLoad}
    case "user":
      
    
   
      return { ...state, user: payLoad };

    case"add-to-bookmark":
    
    
   
      return { ...state, bookmarks: payLoad };
      case"remove-bookmark":
    
    
   
      return { ...state, bookmarks: payLoad };
      
      

    default :
    return state
}
}