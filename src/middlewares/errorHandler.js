//error handler when no route found
const notFound = (req, res) => {
    res.status(404).send("Seems like you're lost😱. Do you need some help?🕵️");
}
export default notFound