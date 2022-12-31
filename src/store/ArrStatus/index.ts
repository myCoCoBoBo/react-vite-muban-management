export default {
    state:{
        sarr:[10,20,30],
    },
    actions:{
       sarrPush(newState:{sarr:number[]},action:{type:string,payload:number}){
            newState.sarr.push(action.payload)
        },
    },
    //名字统一管理
    sarrPush:"sarrPush",
    

}