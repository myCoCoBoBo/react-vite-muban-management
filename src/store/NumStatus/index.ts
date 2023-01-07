  const  store= {
    state: {
        num: 1,
    },
    actions: {
        add1(newState: { num: number }, action: { type: string }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { type: string, payload: number }) {
            newState.num += action.payload   
        }
    },
    //名字统一管理
    // add1: "add1", handleNum.actions[handleNum.actionNames[key]](newState,action)
    // add2: "add2",
    // actionNames: {
    //     add1: "add1",
    //     add2: "add2",
    // }
    actionNames:{},
    //模仿vuex的写法处理异步方法
    asyncActions:{
        //resdux-thunk的用法
        asyncAdd2(dis:Function){
            setTimeout(() => {
               dis({type:"add2",payload:10}) 
            }, 1000);
        }
    }

}
for (const key in store.actions) {
    store.actionNames[key]=key
}
console.log("actionNames",store.actionNames)
export default store