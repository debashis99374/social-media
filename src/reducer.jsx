export default function reducer(state,action){
switch(action.type){
    case"all_posts":
    return {...state,allPosts:action.payLoad}
    case"all_users":
    return {...state,allUsers:action.payLoad}
    default :
    return state
}
}