import { Button, Space } from 'antd';
import {
  RadiusBottomleftOutlined
} from '@ant-design/icons';
export default function index() {
  return (
    <div>
      <h1 className="box">我是Comp2里的内容</h1>
      <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <RadiusBottomleftOutlined />

  </Space>
    </div>
  )
}
