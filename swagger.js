const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'PhonePe Clone API',
    description: 'API documentation for PhonePe backend',
  },
  host: 'localhost:5000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // or your main route file

swaggerAutogen(outputFile, endpointsFiles, doc);