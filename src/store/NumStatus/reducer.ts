import handleNum from "./index"
let reducer =(state=handleNum.state,action:{type:string})=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case handleNum.add1:
            handleNum.actions[handleNum.add1](newState,action)
            break;
        default :
            break;
    }

    return newState
}
export default reducer