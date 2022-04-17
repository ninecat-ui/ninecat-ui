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
      { text: developmentGuideString, link: '/' },
      { text: aboutString, link: '/en-US/nAbout/' },
      {
         text: componentsString,
         children: [
            {
               text:baseComponentsString,
               children:[
                  { text: 'Tag', link: '/en-US/nTag/' },
               ]
            }
         ]
      },
      {
         text: '导航'
      },
      {
         text: '反馈'
      },
      {
         text: '数据录入'
      },
      {
         text: '数据展示'
      },
      {
         text: '布局'
      }]
}