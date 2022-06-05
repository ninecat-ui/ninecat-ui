// import { getLang } from '../utils/lang';

const localLang = 'en-US';
const developmentGuideString = localLang === 'en-US' ? 'Development Guide' : '开发指南';
const componentsString = localLang === 'en-US' ? 'Components' : '组件';
const aboutString = localLang === 'en-US' ? 'About' : '介绍';
const layoutString = localLang === 'en-US' ? 'Layout' : '布局';
const baseComponentsString = localLang === 'en-US' ? 'Base Components' : '基础组件';
const dataString = localLang === 'en-US' ? 'Data' : '数据';
const dataEntryString = localLang === 'en-US' ? 'Data Entry' : '数据录入';
const feedbackString = localLang === 'en-US' ? 'Feedback' : '反馈'

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
            { text: 'Button', link: '/en-US/Button/' },
         ]
      },
      {
         text:dataString,
         children:[
            { text: 'Avatar', link: '/en-US/Avatar/' },
            { text: 'Badge', link: '/en-US/Badge/' },
            { text: 'Card', link: '/en-US/Card/' },
            { text: 'Tag', link: '/en-US/Tag/' },
            { text: 'Collapse', link: '/en-US/Collapse/' },
         ]
      },
      {
         text:feedbackString,
         children:[
            { text: 'Alert', link: '/en-US/Alert/' },
            { text: 'Loader', link: '/en-US/Loader/' },
         ]
      },
   ]
}