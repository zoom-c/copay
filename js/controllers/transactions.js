'use strict';

angular.module('copay.transactions').controller('TransactionsController',
  function($scope, $rootScope, $location) {
    $scope.title = 'Transactions';

    $scope.oneAtATime = true;

    if (!$rootScope.wallet.id) {
      $location.path('signin');
    }

    $scope.txsinput = [
    {
      fromAddr: "n3zUqNR7Bbbc4zJhPVj1vG2Lx66K3Xhzvb",
      toAddr: "msvv2mDfE298s7boXwALq4Dqv77K3TWRZ1",
      amount: 23.9982
    },
    {
      fromAddr: "my9wnLwwUrwpNfEgSrWY62ymEGf1edKf4J",
      toAddr: "monCusNiDuptf68rtr58hEjKpJt6cW6zwS",
      amount: 2.22
    }
    ];

    $scope.txsoutput = $rootScope.wallet.getTxProposals();

    $scope.sign = function (ntxid) {
      var w = $rootScope.wallet;
      var ret = w.sign(ntxid);
console.log('[transactions.js.28:ret:]',ret); //TODO
      $scope.txsoutput = $rootScope.wallet.getTxProposals();
    };
  });
