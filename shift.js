const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

class Shift {
    constructor({start, end}) {
        this.start = moment(start);
        this.end = moment(end);
        this.range = moment.range(this.start, this.end);
    }
}

module.exports = Shift;