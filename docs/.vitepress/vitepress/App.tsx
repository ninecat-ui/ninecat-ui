import { defineComponent } from 'vue';
import NHeader from './components/NHeader'
import headerConfig from '../config/header'

const DocApp = defineComponent({
    name: 'App',
    setup () {
        return () => <div class="app">
            <NHeader config={headerConfig}/>
        </div>
    }
})

export default DocApp;