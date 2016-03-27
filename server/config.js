const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://54.200.57.125:27017/mern',
  port: process.env.PORT || 8000,
};

export default config;
