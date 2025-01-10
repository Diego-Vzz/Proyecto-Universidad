const corsOptions = {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};

module.exports = corsOptions;
