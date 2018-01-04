import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return fetch('/api/cards').then((response) => response.json())
  },

  actions: {
    printCards () {
      window.print()
    }
  }
});
