const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 599).json({
        error: true,
        message: err.message || "Error interno del servidor",
    });
};

module.exports = { errorHandler };
