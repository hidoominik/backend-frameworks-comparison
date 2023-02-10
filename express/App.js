import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

