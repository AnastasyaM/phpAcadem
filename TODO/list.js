angular.module("todoList",[])
    .controller("ListCtrl", function($scope) {

    $scope.items = [
        { text: 'Позвонить родителям', date: '22.02.2017', done: true },
        { text: 'Купить книгу', date: '20.02.2017', done: false },
        { text: 'Сделать зарядку', date: '10.02.2017', done: false },
        { text: 'Выгулять собаку', date: '15.02.2017', done: true }
    ];

    $scope.addItem = function () {

        $scope.items.push({ text: $scope.itemText, date: $scope.itemDate, done: false });
        $scope.itemText = '';
    };

    $scope.remain = function () {
        var count = $scope.items.length;
        angular.forEach($scope.items, function(item) {
            count -= item.done;
        });
        return count;
    };

    $scope.delete = function () {
        $scope.items.splice(this.$index, 1);
    };

    var activeItem = 1;
    $scope.edit = function(item) {
        $scope.activeItem = item;
    };

    $scope.update = function(item) {
        $scope.activeItem = null;
    };

    //     $scope.modelvalue = false;
    //     $scope.changeModelValue = function() {
    //         $scope.modelvalue = !$scope.modelvalue;
    //     }
    // })
    // .filter("showResolved", function () {
    //     return function (value, boolian) {
    //         var result = [];
    //         if(boolian == false) return value;
    //         value.map(function(item) {
    //             if(item.resolved === false) result.push(item);
    //         })
    //         return result;
    //
    //     };

});

