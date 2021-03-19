const { createServer } = require("http");
createServer((req, res) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    res.setHeader("Content-Type", "application/xhtml+xml;charset=UTF-8");
    res.write(`
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
</head>
<body>
<div>Client</div>
</body>
</html>
`, (err) => {
        if (err) {
            console.error(err);
        }
        res.end();
    });
}).listen(8080, () => {
    console.log("client server start");
});
