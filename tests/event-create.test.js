const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const _event = {
    "firstName": "foo",
    "lastName": "bar",
    "email": "foo@bar.com",
    "date": "2019-04-30"
}

const _bad_event = {
    "firstName": "",
    "lastName": "bar",
    "email": "foo@bar.com",
    "date": "2019-04-30"
}

describe('events route', () => {
    afterAll(async done => {
        await mongoose.connection.close();
        done();
    });

    test('POST /events - invalid form - should respond with error', async  (done) => {
        return request(app)
            .post('/events')
            .send(_bad_event)
            .then(response => {
                expect(response.statusCode).toBe(500);
                const resObj = JSON.parse(response.text);
                expect(resObj.error.message).toBe( "Event validation failed: firstName: Path `firstName` is required.");
                done();
            });
    });

    test('POST /events - valid form - should return message and event data', async(done) => {
        return request(app)
            .post('/events')
            .send(_event)
            .then(response => {
                expect(response.statusCode).toBe(201);
                const resObj = JSON.parse(response.text);
                expect(resObj.message).toBe( "Event successfully added");
                done();
            });
    });
});


