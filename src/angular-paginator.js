'use strict';

var paginatorModule = angular.module('paginator', []).
                      provider('Paginator', $paginatorProvider);

function $paginatorProvider () {
  var paginator = {};

  paginator.new = function(perPage) {

    perPage = perPage === undefined ? 5 : perPage;

    var paginator = {
      pages : {
        integer: 1,
        toArray: function () {
          var array = [];

          for(var i=0; i < paginator.pages.integer; i++) {
            array.push(i);
          }

          return array;
        }
      },
      perPage: perPage,
      page: 0
    };

    paginator.prevPage = function() {
      if (paginator.page > 0) {
        paginator.page -= 1;
      }
    };

    paginator.nextPage = function() {
      if (paginator.page < paginator.pages.integer - 1) {
        paginator.page += 1;
      }
    };

    paginator.toPageId = function(id) {
      if (id >= 0 && id <= paginator.pages.integer - 1) {
        paginator.page = id;
      }
    };

    return paginator;
  };

  this.$get = [function () {
    return new function () {
      return paginator;
    }
  }];
}

paginatorModule.filter('startFrom', function() {
  return function(input, start) {
    if (input === undefined) {
      return input;
    } else {
      return input.slice(+start);
    }
  };
});

paginatorModule.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }
    return input;
  };
});