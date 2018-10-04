const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

class Rate {
    /**
     * @param {String} name
     * @param {String} start
     * @param {String} end
     * @param {Number} hourly Hourly rate
     */
    constructor({name, start, end, hourly}) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.hourly = hourly;
    }

    /**
     * Calculates number of hours worked within the shift
     * @param shift
     * @returns {number}
     */
    worked(shift) {
        // Dynamically calculate the temp rate range that corresponds to the shift
        const range = moment.range(moment(this.formatDate(shift.start, this.start)),
            moment(this.formatDate(shift.end, this.end)));

        // Find exact date intersection between shift and rate
        const distance = shift.range.intersect(range);

        return distance ? distance.diff('hours', true) : 0;
    }

    /**
     * Formats the date into moment readable
     * @param {moment} date
     * @param {String} time
     * @returns {string}
     */
    formatDate(date, time) {
        return `${date.format('YYYY-MM-DD')} ${time}`;
    }
}

module.exports = Rate;