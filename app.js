const express = require("express");

const app = express();

// basic get route
app.get("/", (req, res) => {
	res.status(200).json({ message: "hellsosss" });
});

const port = 5000;

app.listen(port, () => {
	console.log("running on port", port);
});
