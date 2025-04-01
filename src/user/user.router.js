const express = require('express');
const router = express.Router();

// handle get request for path /users

router.get('/users', (request, response) => {
   return response.json({ route: '/users' });
});

module.exports = router;