const { handler } = require('./index');

describe('Lambda Handler', () => {
  it('returns a successful response', async () => {
    const event = { key: 'value' };
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Welcome to Group 1",
        },
        null,
        2
      ),
    };
    const response = await handler(event);
    expect(response).toEqual(expectedResponse);
  });
});