const { generateAccessToken, varifyAccessToken } = require("../utils");

exports.login = async function(req, res){
    const { email, password } = req.body;

    const user = {
        email,
    }

    const access_token = generateAccessToken(user);

    res.success({
        user,
        access_token,
    }, "Login successful");
}

exports.varify = async function(req, res){

  const access_token = req.getAccessToken();

  if (access_token == null) return res.error({}, "Unauthorized", 401)

  varifyAccessToken(access_token, (err, user) => {
    if (err) return res.error({}, "Forbidden", 403)

    res.success({
        user,
        access_token,
    })
  });
}