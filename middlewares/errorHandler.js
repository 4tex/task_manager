
// this is basic error handeling to catch if if server throws an internal error

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;
