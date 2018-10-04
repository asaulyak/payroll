const Shift = require('./shift');
const Worker = require('./worker');
const Rate = require('./rate');

// Mock data to be passed for calculation
const worker = new Worker('John');
const rates = [
    new Rate({
        name: 'Morning',
        start: '05:00',
        end: '10:00',
        hourly: 15
    }),
    new Rate({
        name: 'Evening',
        start: '16:30',
        end: '20:00',
        hourly: 18
    }),
    new Rate({
        name: 'Night',
        start: '20:00',
        end: '23:00',
        hourly: 20
    })
];

const shifts = [
    new Shift({
        worker,
        start: '2017-06-23 09:00',
        end: '2017-06-23 17:00'
    }),

    new Shift({
        worker,
        start: '2017-06-24 06:00',
        end: '2017-06-24 14:00'
    })
];

module.exports = {
    rates,
    shifts,
    worker
};