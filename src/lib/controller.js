class MainController {
    constructor(mainService) {
        this.mainService = mainService;

        this.version = '0.1';
        this.level = 0;

        this.data = [];
        this.flag = {};
        this.options = {};
        this.selected_country = '';

        var parent = this;

        mainService.load().then(function(data){
            parent.data = data;
            parent.init();
        });
    }

    setup_levels() {
        this.levels = this.mainService.get_available_levels(this.data);
        this.level = this.levels.length ? this.levels[0] : 1;
    }

    setup_flag() {
        this.flag = this.mainService.get_random_flag(this.data, this.level);
        this.random_flag = this.flag.path;
    }

    setup_options() {
        this.options = this.mainService.get_quiz_options(this.data, this.level, this.flag.id);
    }

    reset() {
        this.selected_country = '';
        this.setup_flag();
        this.setup_options();
    }

    init() {
        if (!this.level)
            this.setup_levels();

        this.reset();
    }

    level_changed() {
        this.reset();
    }
}

export { MainController }
