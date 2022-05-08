import {defineComponent,onMounted,reactive, watch} from 'vue'
import { useData,useRoute } from 'vitepress'
import './index.scss'

const NLinkContent = defineComponent({
  name:'NLinkContent',
  setup() {
    const { page } = useData()
    const route = useRoute()

    console.log(route)

    const state = reactive({
      hash: ''
    })

    const hashChange = () => {
      window.addEventListener(
        'hashchange',
        () => {
         const {hash} = window.location
         state.hash = hash
        },
        false
      );
    };

    onMounted(() => {
      hashChange()
    })

    return () => page.value.headers && page.value.headers.length > 0 && <div class="n-link-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul>
        {
          page.value.headers.map((o) => {
            return <li>
              <a class={`${state.hash.includes(o.slug) ? 'active' : ''} `} href={`#${o.slug}`}>{o.title}</a>
            </li>
          })
        }
      </ul>
    </div>
  }
})

export default NLinkContent