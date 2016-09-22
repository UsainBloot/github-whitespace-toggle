javascript:(function () {

  if(window.location.search = '') {
    window.location.search += '?w=1';
    return;
  } else {
    var params = window.location.search.substring(1, window.location.search.length).split('&');
    var whitespaceOn = false;

    for(var i = 0; i < params.length; i++) {
      if(params[i] === 'w=1') {
        params.splice(i, 1);
        whitespaceOn = true;
      }
    }

    if(!whitespaceOn) {
      params.push('w=1');
    }

    window.location.search = params.join('&');

  }
 })()
