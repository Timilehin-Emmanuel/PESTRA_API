// ########## CORS ##########
const allowedOrigins = process.env.CORS_ORIGIN.split(",").map((origin) =>
  origin.trim(),
);

console.log("Allowed Origins:", allowedOrigins);

const corsOption = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Request-ID"],
  exposedHeaders: ["X-Request-ID"],
  credentials: true,
  maxAge: 86400,
};

module.exports = corsOption;
