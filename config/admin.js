module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d014aa9d929848c61cea14d12a978f1'),
  },
});
