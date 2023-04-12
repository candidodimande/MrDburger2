import { defineStore } from 'pinia';

export const useCardStore = defineStore('card', {
  state: () => ({
    counter: 0,
    cardsType: {
      1: {
        name: 'Pizza',
        price: 250,
        size: 'Small',
        colour:"orange",
        bgColor: "bg-grey-10"
      },

      2: {
        name: 'Pizza',
        price: 450,
        size: 'Medium',
        bgColor: "bg-grey-10"
      },

      3: {
        name: 'Pizza',
        price: 600,
        size: 'Large',
        color: 'orange-2',
        bgColor: "bg-grey-10"
      },

      4: {
        name: 'Pizza',
        price: 800,
        size: 'Extra-large',
        color: 'orange-2',
        bgColor: "bg-grey-10"
      },
    }
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
