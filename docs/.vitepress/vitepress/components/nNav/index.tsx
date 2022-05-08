import { defineComponent } from 'vue';
import { useData, useRoute } from 'vitepress'
import './index.scss'

const NNav = defineComponent({
  name:'NNav',
  setup() {
    const { site } = useData()
    const {sidebar} = site.value.themeConfig
    const menuData = sidebar['/']
    const route = useRoute()
    function renderMenu ({text,link}) {
      return <div class="menu">
        <span>{text}</span>
      </div>
    }
    function renderSubMenu ({text,link,children,deep}) {
      // console.log(text,link,children,deep)
      const isActive = route.path === link
      const paddingLeft = 20 * deep
      return <div class="sub-menu">
        <a href={link} class={`sub-menu-item deep${deep} ${isActive ? 'active' : ''}`} style={{paddingLeft:`${paddingLeft}px`}}>{text}</a>
        {
          children && children.map(item => {
            return  renderSubMenu({...item,deep:deep + 1})
          })
        }
      </div>
    }

    return () => <aside class="n-nav">
      {
        menuData && menuData.map(menu => {
          return menu.children && menu.children.length > 0 ? renderSubMenu({...menu,deep:0}) : renderMenu(menu)
        })
      }
    </aside>
  }
})

export default NNav