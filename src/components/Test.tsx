import { defineComponent } from 'vue';
import HelloWorld from './HelloWorld.vue'


export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div>
          <HelloWorld />
          TEST
        </div>
      </>
    );
  }
});