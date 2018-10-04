const uuid = require('uuid');

class Worker {

    /**
     * Holder for a worker
     * @param name
     */
    constructor(name) {
        // Might be needed for identity checks
        this.id = uuid.v1();
        this.name = name;
    }
}

module.exports = Worker;