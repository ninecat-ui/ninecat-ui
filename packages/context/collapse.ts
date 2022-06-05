import { computed, inject, provide } from 'vue';
import type { Ref, InjectionKey, ComputedRef } from 'vue';

export interface CollapseContext {
  activeNames:Array<any>;
  handleItemClick:Function,
}

export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey');


const useProvideCollapse = (state: CollapseContext) => {
  provide(CollapseContextKey, state);
};

const useInjectCollapse  = () => {
  return inject(CollapseContextKey, {
    activeNames: [],
    handleItemClick: () => {}
  });
};

export { useProvideCollapse, useInjectCollapse };
export default useProvideCollapse;