class MainService {
    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.path_countries = '../data/countries.json';
    }

    load() {
        var deferred = this.$q.defer();

        this.$http.get(this.path_countries)
        .success(function(response, status) {
            deferred.resolve(response);
        })
        .error(function(response, status) {
            deferred.reject();
        });

        return deferred.promise;
    }
}

export { MainService }
