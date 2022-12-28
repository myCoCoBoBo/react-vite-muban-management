export default {
    state:{
        num:1,
    },
    actions:{
        add1(newState:{num:number},action:{type:string}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,val?:number}){
            if(action.val){
                newState.num+=action.val
            }
            
        }
    }

}