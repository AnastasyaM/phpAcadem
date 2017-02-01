function ListCtrl($scope) {

    $scope.items = [
        { text: 'Chocolate', done: true },
        { text: 'Potato', done: false },
        { text: 'Banana', done: false },
        { text: 'Water', done: true }
    ];
    if (localStorage.object){
        $scope.items = JSON.parse(localStorage.getItem("object"));
    }
    $scope.addItem = function () {

        $scope.items.push({ text: $scope.itemText, done: false });
        $scope.itemText = '';
    };

    $scope.remain = function () {
        var count = $scope.items.length;
        angular.forEach($scope.items, function(item) {
            var sObj = JSON.stringify($scope.items);
            localStorage.setItem("object", sObj);
            count -= item.done;
        });
        return count;
    };
}
