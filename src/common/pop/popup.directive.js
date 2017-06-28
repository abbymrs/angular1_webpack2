let popupDirective = function() {
    return {
        restrict: 'AE',
        scope: {
            content: '=',
            isShowBtn: '=',
            onConfirm: '&',
            onCancel: '&'
        },
        templateUrl: 'src/common/pop/popup.html',
        controller: function($scope) {
            $scope.confirm = () => {
                $scope.onConfirm();
            };
            $scope.cancel = () => {
                $scope.onCancel();
            };
        }
    }
};

popupDirective.$inject = [];
export default popupDirective;