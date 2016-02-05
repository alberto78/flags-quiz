class MainController {
    constructor($scope, mainService) {

        $scope.version = '0.1';

        mainService.load().then(function(data){

            $scope.levels = mainService.get_available_levels(data);
            $scope.level = $scope.levels.length ? $scope.levels[0] : 0;

            $scope.level_changed = function() {
                // update data...
            }
        });
    }
}

export { MainController }
