import React, { ChangeEvent, useEffect,useState } from 'react'
import style from './login.module.scss'
import initLoginBg from "./init"
import { Space, Input, Button, message } from 'antd';
import  './login.less'
import numStatus from "@/store/NumStatus/index"
import {useSelector,useDispatch} from "react-redux"
//import { Store } from 'antd/es/form/interface';
import {CaptchaAPI} from "@/request/api"
export default function Index() {
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() }
        getCaptchImg()
    },[]);

    //获取用户名
    const [usernameVal,setUsernameVal]=useState("")
    const usernameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log("用户名",e.target.value);
        setUsernameVal(e.target.value)
    }

    //获取密码
    const [passwordVal,setPasswordVal]=useState("")
    const passwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log("密码",e.target.value);
        setPasswordVal(e.target.value)
    }
    //获取验证码
    const [captchaVal,setCaptchaVal]=useState("")
    const captchaChange=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log("验证码",e.target.value);
        setCaptchaVal(e.target.value)
    }

    //点击登录按钮
    const clickLogin=()=>{
        console.log(usernameVal,passwordVal,captchaVal);
        
    }
    //获取验证码
    const [img,setImg]=useState("")
    const getCaptchImg=()=>{
        CaptchaAPI().then((res)=>{
            if(res.code==200){
                messageApi.success(res.msg);
                setImg("data:image/gif;base64,"+res.img)
            }
            
        }).catch(err=>{
            messageApi.error(err.message)
            console.log(2,err.message);
    })
    }
    //获取redux仓库数据
    const {num,sarr}=useSelector((state:RootState)=>{
       // console.log("state",state.NumReducer.num);
        
        return { 
            num:state.NumReducer.num,
            sarr:state.ArrReducer.sarr
        }
    })
    // const {sarr}=useSelector((state:RootState)=>{
    //     console.log("state",state.ArrReducer.sarr);
        
    //     return { sarr:state.ArrReducer.sarr}
    // })
    
    //修改仓库数据
    //对数字的操作
    const dispatch=useDispatch()
        const xiugai=()=>{
            dispatch({
                type:"add1",
                payload:10
            })
        }
    //对数组的操作
  
        const xiugaiArr=()=>{
            dispatch({
                type:"sarrPush",
                payload:10
            })
            console.log("sarr,",sarr);
        }

    //异步方法
    const asyncFunction=()=>{
        // dispatch({
        //     type:"add2",
        //     payload:20
        // })
        //resdux-thunk的用法
        // dispatch((dis:Function)=>{
        //     setTimeout(() => {
        //        dis({type:"add2",payload:20}) 
        //     }, 1000);
        // })
        dispatch(numStatus.asyncActions.asyncAdd2)
    }

    return (
        <div className={style.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            <div className={style.loginBox + " loginbox"}>
                {/* <h1 onClick={asyncFunction}>异步按钮改变数字</h1>
                <h1 onClick={xiugai}>数字{num} </h1>
                <h1 onClick={xiugaiArr}>数组{sarr} </h1> */}
                {/* 标题部分 */}
                <div className={style.title}>
                    <h1>哈哈哈&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="请输入用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="请输入密码" onChange={passwordChange} />
                        {/* 验证码盒子 */}
                        {contextHolder}
                        <div className="captchaBox">
                            <Input placeholder="请输入验证码"  onChange={captchaChange}/>
                            <div className="captchaImg" onClick={getCaptchImg}>
                                <img height="38" src={img} alt="加载失败" />
                            </div>
                        </div>
                        <Button type="primary" block onClick={clickLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
