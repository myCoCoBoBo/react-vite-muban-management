
import handleArr from "./index"
let reducer =(state=handleArr.state,action:{type:string})=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case handleArr.sarrPush:
            handleArr.actions[handleArr.sarrPush](newState,action)
            break;
        default :
            break;
    }

    return newState
}
export default reducer