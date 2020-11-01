import { t } from '../locale/index.js';

export default {
  methods: {
    t (...args) {
      return t.apply(this, args);
    }
  }
};
