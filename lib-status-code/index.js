'use strict';

/**
 * Status Responses Centralized
 */


const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    BLOCKED_INVOICE: 3000,
    DISPATCHED_INVOICE: 3001,
};

const statusReason = {
    OK: 'Ok',
    CREATED: 'Created',
    BAD_REQUEST: 'Bad Request',
    UNAUTHORIZED: 'Unauthorized',
    NOT_FOUND: 'Not Found',
    CONFLICT: 'Conflict',
    BLOCKED_INVOICE: 'The invoice could not be generated',
    DISPATCHED_INVOICE: 'Invoice dispatched to customer',
}
  
Object.freeze(statusCodes);
Object.freeze(statusReason);

module.exports = {
    statusCodes,
    statusReason,
};




  