const https = require('https');

console.log('Testing HTTPS request through proxy...');

const options = {
  hostname: 'api.telegram.org',
  port: 443,
  path: '/bot8761953497:AAHhevaXKD2k8rr3a2OCee0NiIuw6EeQF7k/getMe',
  method: 'GET',
  timeout: 10000
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (d) => {
    console.log('Response:', d.toString());
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.on('timeout', () => {
  console.error('Request timed out!');
  req.destroy();
});

req.end();