var ListCtrl = ['$scope', function($scope) {
    $scope.list = [
      {name: "item 1", inEditMode: false}, 
      {name: "item 2", inEditMode: false}, 
      {name: "item 3", inEditMode: false}
    ];

    $scope.newItem;

    $scope.addItem = function(newItem) {
      $scope.list.push({name: newItem, inEditMode: false});
      $scope.newItem = "";
    };

    $scope.editItem = function(index, item) {
      item.inEditMode = true;
    };

    $scope.itemUpdated = function(item) {
      item.inEditMode = false;
    };

    $scope.removeItem = function(index) {
      $scope.list.splice(index, 1);
    };
  }
];