// env
require('dotenv').config({ path: './config/.env' });

// Express
const express = require('express');
const app = express();
const path = require('path');

// Mongoose
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

// Routes
const indexRouter = require('./src/routes/index.route');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    console.log(`Status: ${res.statusCode}`)
    next();
})

// View engine
app.set("view engine", "ejs");

app.use('/', indexRouter);

function main() {
    const PORT = process.env.PORT || 8080;

    // Connects to MongoDB and listens to the server port
    mongoose.connect(uri)
        .then(() => console.log(`MongoDB connected...`))
        .then(() => { app.listen(PORT, () => console.log(`It's live on http://localhost:${PORT}`));
        }).catch(err => console.log(err));
}
main()

