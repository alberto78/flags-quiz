class MainController {
    constructor(mainService) {
        this.mainService = mainService;

        this.version = '0.1';
        this.level = 1;
        this.data = null;

        var parent = this;

        mainService.load().then(function(data){
            parent.data = data;
            parent.init();
        });
    }

    setup_flag() {
        var flag = this.mainService.get_random_flag(this.data, this.level);
        this.random_flag = flag.path;
    }

    level_changed() {
        this.setup_flag();
    }

    init() {
        this.levels = this.mainService.get_available_levels(this.data);
        this.level = this.levels.length ? this.levels[0] : 0;

        this.setup_flag();
    }
}

export { MainController }
