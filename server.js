const app = require("./src/app")
const port = 4000;

app.listen(port, () => {
    console.log("serve is running at " + port)
})