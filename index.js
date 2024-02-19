// index.js

exports.handler = async (event, context) => {
    try {
        const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from AWS Lambda!'),
        };
        return response;
    } catch (err) {
        console.error('Error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Internal Server Error'),
        };
    }
};
