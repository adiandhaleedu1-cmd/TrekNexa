import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TrekNexa API's."
    })
});

app.listen(PORT, () => {
    console.log(`App is listening at Port ${PORT}`);
});