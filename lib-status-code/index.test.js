'use strict';

const {statusCodes, statusReason} = require('./index');


/**
 * TEST CODES
 */
describe('Code by Name', () => {

    const testsCodes = [
      {
        name: 'should return 200',
        input: statusCodes.OK,
        expected: 200,
      },
      {
        name: 'should return 201',
        input: statusCodes.CREATED,
        expected: 201,
      },
      {
        name: 'should return 400',
        input: statusCodes.BAD_REQUEST,
        expected: 400,
      },
      {
        name: 'should return 401',
        input: statusCodes.UNAUTHORIZED,
        expected: 401,
      },
      {
        name: 'should return 404',
        input: statusCodes.NOT_FOUND,
        expected: 404,
      },
      {
        name: 'should return 409',
        input: statusCodes.CONFLICT,
        expected: 409,
      },
      {
        name: 'should return 3000',
        input: statusCodes.BLOCKED_INVOICE,
        expected: 3000,
      },
      {
        name: 'should return 3001',
        input: statusCodes.DISPATCHED_INVOICE,
        expected: 3001,
      },
    ];

    testsCodes.forEach(test => {
      it(test.name, () => {
        
        expect(test.input).toBe(test.expected);

      });
    });
});



/**
 * TEST REASON PHRASES
 */
describe('Reason Phrase by Name', () => {
  
    const testsStatusReason = [
      {
        name: 'should return Ok',
        input: statusReason.OK,
        expected: 'Ok',
      },
      {
        name: 'should return Created',
        input: statusReason.CREATED,
        expected: 'Created',
      },
      {
        name: 'should return Bad Request',
        input: statusReason.BAD_REQUEST,
        expected: 'Bad Request',
      },
      {
        name: 'should return Unauthorized',
        input: statusReason.UNAUTHORIZED,
        expected: 'Unauthorized',
      },
      {
        name: 'should return Not Found',
        input: statusReason.NOT_FOUND,
        expected: 'Not Found',
      },
      {
        name: 'should return Conflict',
        input: statusReason.CONFLICT,
        expected: 'Conflict',
      },
      {
        name: 'should return The invoice could not be generated',
        input: statusReason.BLOCKED_INVOICE,
        expected: 'The invoice could not be generated',
      },
      {
        name: 'should return Invoice dispatched to customer',
        input: statusReason.DISPATCHED_INVOICE,
        expected: 'Invoice dispatched to customer',
      },
    ];

    testsStatusReason.forEach(test => {
      it(test.name, () => {
        
        expect(test.input).toBe(test.expected);

      });
    });
});