import express from "express";
const router = express.Router();
const title = "Mini Message Board";
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];
router.get("/", (req, res) => {
    res.render("index", { title: `${title}`, messages: messages });
});
router.get("/new", (req, res) => {
    res.render("form", { title: `${title} - New Message` });
});
router.post("/new", (req, res) => {
    console.log(req.body);
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date(),
    });
    res.redirect("/");
});
export default router;
