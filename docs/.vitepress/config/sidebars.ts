// import { getLang } from '../utils/lang';

const localLang = 'en-US';
const developmentGuideString = localLang === 'en-US' ? 'Development Guide' : '开发指南';
const componentsString = localLang === 'en-US' ? 'Components' : '组件';
const aboutString = localLang === 'en-US' ? 'About' : '介绍';
const layoutString = localLang === 'en-US' ? 'Layout' : '布局';
const baseComponentsString = localLang === 'en-US' ? 'Base Components' : '基础组件';
const dataString = localLang === 'en-US' ? 'Data' : '数据';
const dataEntryString = localLang === 'en-US' ? 'Data Entry' : '数据录入';

export const sidebar = {
   '/': [
      { 
         text: developmentGuideString,
         children: [
            {
               text:aboutString,
               link: '/en-US/About/'
            },
         ]
      },
      {
         text:baseComponentsString,
         children:[
            { text: 'Alert', link: '/en-US/Alert/' },
         ]
      },]
}