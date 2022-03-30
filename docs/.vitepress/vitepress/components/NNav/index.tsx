import { useData, useRoute } from 'vitepress'
import { defineComponent,PropType, reactive, onMounted } from 'vue';


const NNav = defineComponent({
  name: 'NNav',
  setup () {
    const { site } = useData()
    console.log(site.value.themeConfig.sidebar)
    return () => <div>nav</div>
  }
})

export default NNav