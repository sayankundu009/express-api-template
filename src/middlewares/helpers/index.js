exports.responsehelpers = function (req, res, next){
    function sendResponse(data, message, status = 200) {
        res.status(status).json({
            data,
            message,
            status,
        });
    }

    req.getAccessToken = () => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1];

        return token;
    }
    
    res.success = (data, message, status) => sendResponse(data, message, status);
    res.error = (data, message, status = 500) => sendResponse(data, message, status);

    next(); 
}