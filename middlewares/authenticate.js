const API_KEY = 'abc123def456ghi789';

const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({ message: "No API key provided." });
    }

    if (apiKey !== API_KEY) {
        return res.status(403).json({ message: "Invalid API key." });
    }

    next();  
};

module.exports = authenticate;