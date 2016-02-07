import { MainService } from '../src/lib/service.js';

describe('MainService', function() {

    let MServ = new MainService();
    let data = [
        {"id": 1,"level": 1},
        {"id": 2,"level": 1},
        {"id": 3,"level": 1},
        {"id": 4,"level": 2},
        {"id": 5,"level": 2},
        {"id": 6,"level": 2}
    ];

    it('get_available_levels', function() {

        let av_levels = MServ.get_available_levels(data);
        expect(av_levels).toEqual([1,2]);
    });

    it('get_data_by_level', function() {

        let lvl = 2;
        let by_level = MServ.get_data_by_level(data, lvl);
        expect(by_level).toEqual([
            {"id": 4,"level": 2},
            {"id": 5,"level": 2},
            {"id": 6,"level": 2}
        ]);
    });

    function get_random_flag_loop() {
        it('get_random_flag', function() {

            let lvl = 2;
            let flag = MServ.get_random_flag(data, lvl);
            expect(flag.id).toBeLessThan(4);
        });
    }

    for(var i = 0; i < 6; i++) {
        get_random_flag_loop();
    }

});
