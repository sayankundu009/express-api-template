const { varifyAccessToken } = require("../../utils");

exports.authenticate = function (req, res, next) {
  const token = req.getAccessToken();

  if (token == null) return res.error({}, "Unauthorized", 401)

  varifyAccessToken(token, (err, user) => {

    if (err) {
      console.log(err)
      
      return res.error({}, "Forbidden", 403)
    }

    req.user = user

    next()
  });
}