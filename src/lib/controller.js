class MainController {
    constructor($scope, mainService) {
        this.$scope = $scope;

        $scope.version = '0.1';

        mainService.load().then(function(data){

            $scope.level_changed = function() {
                var flag = mainService.get_random_flag(data, $scope.level);
                $scope.random_flag = flag.path;
            }

            $scope.levels = mainService.get_available_levels(data);
            $scope.level = $scope.levels.length ? $scope.levels[0] : 0;

            var flag = mainService.get_random_flag(data, $scope.level);
            $scope.random_flag = flag.path;
        });
    }
}

export { MainController }
