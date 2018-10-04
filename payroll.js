class Payroll {
    /**
     * Performs payroll calculation
     * @param worker
     * @param rates
     * @param shifts
     */
    calculate({worker, rates, shifts}) {
        const payrollResult = [];

        // Traverse through the rates and calculate worked hours for each shift
        for (let i = 0; i < rates.length; i++) {
            const rate = rates[i];

            const calculated = {
                worker: worker.name,
                rate: rate.name,
                time: 0,
                total: 0
            };

            for (let j = 0; j < shifts.length; j++) {
                const shift = shifts[j];

                const time = rate.worked(shift);

                // Save calculated values
                calculated.total += time * rate.hourly;
                calculated.time += time;
            }

            payrollResult.push(calculated);
        }

        return this.formatPayroll(payrollResult);
    }

    /**
     * Formats and prints pretty table to the console
     * @param payrollResult
     */
    formatPayroll( payrollResult = []) {
       console.table(payrollResult);
    }
}

module.exports = Payroll;