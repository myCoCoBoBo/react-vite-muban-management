import handleNum from "./index"
let reducer =(state=handleNum.state,action:{type:string})=>{
    let newState=JSON.parse(JSON.stringify(state))

    //思路：switch的做法是拿着action.type和case后面的条件做对比，这种做法很像遍历。
    //做成对象

    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState,action)
    //         break;
    //     default :
    //         break;
    // }
    
    //【优化】
    for(let key in handleNum.actionNames){
        if (action.type===handleNum.actionNames[key]) {
            handleNum.actions[key](newState,action)
            // handleNum.actions[handleNum.actionNames[key]](newState,action)
        }
    }
    return newState
}
export default reducer