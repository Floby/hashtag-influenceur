import Service from '@ember/service';

export default Service.extend({
  fetch: function (url, options) {
    options = options || {}
    return fetch(url).then((response) => response.json())
  }
});
