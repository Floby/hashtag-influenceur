import Component from '@ember/component';

export default Component.extend({
  typeSign: function () {
    switch(this.get('card.type')) {
      case 'object':
        return 'O'
      case 'complement':
        return 'C'
      case 'hashtag':
        return '#'
      case 'verb':
      default:
        return 'V'
    }
  }.property('card.type'),

  countHelper: function () {
    if (this.get('card.points')) {
      const points = Number(this.get('card.points'))
      if (points < 0) {
        return String(points)
      } else {
        return `+${points}`
      }
    }
    if (this.get('card.multiply')) {
      const multiply = Number(this.get('card.multiply'))
      if (multiply < 0) {
        return `${multiply} × {`
      } else {
        return `+${multiply} × {`
      }
    }
  }.property('card.multiply', 'card.points')
});
