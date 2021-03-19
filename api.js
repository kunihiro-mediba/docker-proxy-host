const { createServer } = require("http");
createServer((req, res) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    res.setHeader("Content-Type", "application/json;charset=UTF-8");
    res.write(JSON.stringify({
        status: "OK",
    }), (err) => {
        if (err) {
            console.error(err);
        }
        res.end();
    });
}).listen(3000, () => {
    console.log("api server start");
});
