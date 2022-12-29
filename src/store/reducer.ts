import handleNum from "./NumStatus/index"

const defaultState={
    ...handleNum.state
}
let reducer =(state=defaultState,action:{type:string})=>{
    
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case handleNum.add1:
            handleNum.actions[handleNum.add1](newState,action)
            break;
        case handleNum.add1:
            handleNum.actions[handleNum.add2](newState,action)
            break;
            default :
            break;
    }

    return newState
}
export default reducer