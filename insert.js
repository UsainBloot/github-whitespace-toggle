(function() {
  var pattern = /\/pull\/[0-9]+\/(files|commits\/[a-f0-9]+)|\/commit\/[a-f0-9]+/;
  var markup_HTML = '<div class="diffbar-item"><button id="ignoreWhitespace" class="btn btn-sm btn-outline tooltipped tooltipped-s" type="button" aria-label="View diff with whitespace ignored">Ignore whitespace</button></div>';

  if(window.location.hostname === "github.com" && pattern.test(window.location.pathname)) {
    var container_DOM = document.querySelector('.float-right.pr-review-tools');

    var InsertInDom = new Promise(
      function(resolve, reject) {
        container_DOM.insertAdjacentHTML('afterBegin', markup_HTML);
        resolve();
      }
    );


    InsertInDom.then(function(val) {
      var WHITESPACE_PARAM = 'w=1';
      var button_DOM = document.getElementById('ignoreWhitespace');

      if(window.location.search.indexOf(WHITESPACE_PARAM) > -1) {
        button_DOM.classList.add('selected');
      }

      button_DOM.addEventListener('click', function () {
        if(window.location.search = '') {
          window.location.search += '?' + WHITESPACE_PARAM;
          return;
        } else {
          var params = window.location.search.substring(1, window.location.search.length).split('&');
          var whitespaceOn = false;

          for(var i = 0; i < params.length; i++) {
            if(params[i] === WHITESPACE_PARAM) {
              params.splice(i, 1);
              whitespaceOn = true;
            }
          }

          if(!whitespaceOn) {
            params.push(WHITESPACE_PARAM);
          }

          window.location.search = params.join('&');

        }
        document.getElementById('ignoreWhitespace').classList.toggle('selected');

      });
    })
    .catch(function(reason) {
      console.warn('Unable to inject whitespace button: ' + reason);
    });

  }

})()
