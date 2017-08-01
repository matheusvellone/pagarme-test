'use strict';

const Exception = require('./Exception');
const log = require('../utils/log');

class InternalException extends Exception {
    constructor(...errorDetails) {
        super(500, 'An internal error ocurred');
        if (errorDetails.length) {
            log.console(...errorDetails);
        }
    }
}

module.exports = InternalException;
