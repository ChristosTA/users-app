const jwt = require('jsonwebtoken');

function generateAccessToken(user){

   console.log("Auth Service", user)

   const payload = {
      username: user.username,
      email: user.email,
      roles: user.roles
   }

   const secret = process.env.TOKEN_SECRET;
   const option = {expiresIn: '1h'};

   return jwt.sign(payload, secret, option)

}

function verifyAccessToken(token) {
   const secret = process.env.TOKEN_SECRET;
   try {
      const decoded = jwt.verify(token, secret);
      console.log("VerifyToken", decoded);
      return {verified:true, data:decoded}
   } catch(err){
      return {verified: false , data: err}
   }
}

module.exports = { generateAccessToken , verifyAccessToken }