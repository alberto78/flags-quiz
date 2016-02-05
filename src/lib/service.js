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

    get_available_levels(data) {

        var available = data
            .map(function(item, pos, arr){
                if (!pos || item.level != arr[pos - 1].level)
                    return item.level;
            })
            .filter(function(item){
                return item;
            });

        return available;
    }
}

export { MainService }
