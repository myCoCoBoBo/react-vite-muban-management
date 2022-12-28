import handleNum from "./NumStatus/index"

const defaultState={
    ...handleNum.state
}
let reducer =(state=defaultState,action:{type:string})=>{
    
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'add1':
            handleNum.actions.add1(newState,action)
            break;
        case "add2":
            handleNum.actions.add2(newState,action)
            break;
            default :
            break;
    }

    return newState
}
export default reducer