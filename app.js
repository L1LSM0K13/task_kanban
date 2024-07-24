const express = require('express');
const app = express();
const path = require('path');

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

// Listening to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

