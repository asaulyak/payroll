const Payroll = require('./payroll');
const {worker, rates, shifts} = require('./mocks');

const payroll = new Payroll();

// Show the calculation result
payroll.calculate({worker, rates, shifts});