import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu, theme } from 'antd';
  import {useNavigate,useLocation} from "react-router-dom"
import type { MenuProps } from 'antd';
    type MenuItem = Required<MenuProps>['items'][number];
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//   ): MenuItem {
//     return {
//       key,
//       icon,
//       children,
//       label,
//     } as MenuItem;
//   }
  
//   const items: MenuItem[] = [
//     getItem('栏目一', '/page1', <PieChartOutlined />),
//     getItem('栏目二', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//       getItem('Tom', '3'),
//       getItem('Bill', '4'),
//       getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
//   ];
const items: MenuItem[]=[
    {
        label:'栏目一',
        key:'/page1',
        icon:<PieChartOutlined />
    },
    {
        label:'栏目二',
        key:'/page2',
        icon:<DesktopOutlined />
    },
    {
        label:'栏目三',
        key:'page3',
        icon:<UserOutlined />,
        children:[
            {
                label:'栏目301',
                key:'/page3/page301', 
            },
            {
                label:'栏目302',
                key:'/page3/page302', 
            },
            {
                label:'栏目303',
                key:'/page3/page303', 
            },
        ]
    },
    {
        label:'栏目四',
        key:'page4',
        icon:<UserOutlined />,
        children:[
            {
                label:'栏目401',
                key:'/page4/page401', 
            },
            {
                label:'栏目402',
                key:'/page4/page402', 
            },
            {
                label:'栏目403',
                key:'/page4/page403', 
            },
        ]
    },
]
export default function index() {
    const navigateTo=useNavigate()
    const currentRoute=useLocation()
    const menuClick=(e:{key:string})=>{
        //点击要跳转对应的路由
        navigateTo(e.key)
    }
    /*
        拿着这个currentRoute.pathname跟items数组的每一项的children的key值进行对比，
        如果找到相等的，就要他的上一级的key，这个key给到openkeys数组的元素，
        作为初始值
    */
   let firstOpenKey:string=''
   function findKey(obj:{key:string}){
        return obj.key===currentRoute.pathname
   }
   //对比的是多个children
   for (let i = 0; i < items.length; i++) {
    if (items[i]!["children"]&&items[i]!["children"].length>1&&items[i]!["children"].find(findKey)) {
        firstOpenKey=items[i]!.key as string;
        break;
    }
    
   }
   
    //设置展开项的初始值
    const [openKeys, setOpenKeys] = useState(['']);
    const handleOpenChange=(keys:string[])=>{
     //把这个数组修改成最后一项，因为只要一向是展开的，就是刚刚点击的这一项
      setOpenKeys([keys[keys.length-1]])
  
    }
  return (
    <Menu 
          theme="dark" 
          //当前选中的样式
          defaultSelectedKeys={[currentRoute.pathname]} 
          mode="inline" 
          onClick={menuClick} 
          items={items} 
          //某项菜单展开和回收的事件
          onOpenChange={handleOpenChange}
          //当前菜单展开项的key数组
          openKeys={openKeys}
        />
  )
}
