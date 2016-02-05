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

    get_data_by_level(data, lvl) {

        var lvl_data = data
            .filter(function(item){
                return item.level == lvl;
            });

        return lvl_data;
    }

    get_random_flag(data, lvl) {

        var data_by_level = this.get_data_by_level(data, lvl);
        var rand = Math.floor(Math.random() * Object.keys(data_by_level).length);

        var flag = {
            id: rand,
            path: '../img/' + data_by_level[rand].id + '.png'
        };

        return flag;
    }

    get_quiz_options(data, lvl, correct_id) {

        var data_by_level = this.get_data_by_level(data, lvl);
        var names = data_by_level.map(function(item){
            return item.name;
        });

        var correct_name = names[correct_id];

        var countries = [];
        countries.push(correct_name);
        names.splice(correct_id, 1);

        var rand, i;
        for (i = 0; i < lvl; i++) {
            rand = Math.floor(Math.random() * names.length);
            countries.push(names[rand]);
            names.splice(rand, 1);
        }

        rand = Math.floor(Math.random() * countries.length);
        if (rand) {
            var tmp = countries[rand];
            countries[rand] = countries[0];
            countries[0] = tmp;
        }

        return {
            countries: countries,
            correct_name: correct_name
        }
    }
}

export { MainService }
