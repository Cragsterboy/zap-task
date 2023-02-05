import express from "express";
const port = 3333;
const app = express();
import notFound from "./middlewares/errorHandler.js";
app.get("/", (req, res) => {
    res.send("Hello from Zaptic! 👋💜");
});

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
});

app.get("/zaptic",(req, res) => {
    res.sendFile('src/public/res/zaptic_logo.jpeg', { root: '.' });
});

//If no route is found, they are lost, return not found
app.use(notFound)

export default app;
