import React, { ChangeEvent, useEffect,useState } from 'react'
import style from './login.module.scss'
import initLoginBg from "./init"
import { Space, Input, Button, message } from 'antd';
import  './login.less'
import {useSelector,useDispatch} from "react-redux"
//import { Store } from 'antd/es/form/interface';


export default function Index() {
    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() }
    });

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

    //获取redux仓库数据
    const {num}=useSelector((state:RootState)=>(
        { num:state.num}
    ))
    
    //修改仓库数据
    const dispatch=useDispatch()
        const xiugai=()=>{
            dispatch({
                type:"add1",
                payload:10
            })
        }

    return (
        <div className={style.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            <div className={style.loginBox + " loginbox"}>
                <h1 onClick={xiugai}>仓库数据{num} </h1>
                {/* 标题部分 */}
                <div className={style.title}>
                    <h1>前端&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="请输入用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="请输入密码" onChange={passwordChange} />
                        {/* 验证码盒子 */}
                        <div className="captchaBox">
                            <Input placeholder="请输入验证码"  onChange={captchaChange}/>
                            <div className="captchaImg" >
                                <img height="38" src="" alt="" />
                            </div>
                        </div>
                        <Button type="primary" block onClick={clickLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
