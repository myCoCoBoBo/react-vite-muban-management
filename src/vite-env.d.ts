import { legacy_createStore } from 'redux';
//全局申明
/// <reference types="vite/client" />
declare module "*.ts"
declare module '*.scss';
type RootState=ReturnType<typeof import("./store").getState>
