class ZestoBusinessHours {
    constructor({
        monday = null,
        tuesday = null,
        wednesday = null,
        thursday = null,
        friday = null,
        saturday = null,
        sunday = null
    } = {}) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }

    static createSchedule(open, close) {
        return {
            open,
            close
        };
    }
}
