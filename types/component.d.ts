import Vue from 'vue';

export class NComponent extends Vue {
  static name: string;

  static install(vue: typeof Vue): void;
}
