import { defineComponent,App,HTMLAttributes,SetupContext } from 'vue';
import './index.scss';


export interface CardProps extends HTMLAttributes {
  title?: string;
  src?: string;
  description?: string;
}

const nCard = defineComponent({
  name: 'NCard',
  setup(_:CardProps, {attrs}:SetupContext) {
    const {title, src, description} = attrs as CardProps;

    return () => (
      <div class="card">
      <img
        class="card-img"
        src={src}
      />
      <span class="card-title">{{ title }}</span>
      <p class="card-message">
        { description }
      </p>
    </div>
    )
  }
})

nCard.install = function (app: App) {
  app.component(nCard.name, nCard);
  return app;
};

export default nCard;
