class MainController {
    constructor($scope, mainService) {

        $scope.version = '0.1';

        mainService.load().then(function(data){
            console.log('done!', data);
        });
    }
}

export { MainController }
