var config = {
  url: process.env.CANNON_URL || 'http://localhost:8080',
  port: process.env.CANNON_PORT || 8080,
};

config.upload = {
  path: process.env.CANNON_UPLOAD_PATH || 'root/cannon_uploads'
};

config.mongo = {
  url: process.env.CANNON_MONGO_URL || 'mongodb://localhost/cannon'
};

config.cookie = {
  name: process.env.CANNON_COOKIE_NAME || 'cannon',
  password: process.env.CANNON_COOKIE_PASSWORD || 'YOUR COOKIE PASSWORD'
};

config.facebook = {
  appId: process.env.CANNON_FACEBOOK_APP_ID || 'YOUR APP ID',
  appSecret: process.env.CANNON_FACEBOOK_APP_SECRET || 'YOUR APP SECRET'
};

config.bunyan = {
  name: require('./package.json').name,
  level: process.env.CANNON_LOG_LEVEL || 'trace'
};

config.logs = {
  path: process.env.CANNON_LOG_PATH || '/tmp/logs/',
};


module.exports = config;