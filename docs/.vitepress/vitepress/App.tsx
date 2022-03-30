import { defineComponent } from 'vue';
import NHeader from './components/NHeader'
import NNav from './components/NNav'
import headerConfig from '../config/header'

const DocApp = defineComponent({
    name: 'App',
    setup () {
        return () => <div class="app">
            <NHeader config={headerConfig}/>
            <NNav />
        </div>
    }
})

export default DocApp;