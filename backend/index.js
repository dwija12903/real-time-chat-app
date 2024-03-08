const express = require("express");
const cors = require("cors");               //cors is a package that allows us to make requests to our server from a different domain
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;            //get the username from the request body
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username : username, secret: username, first_name: username},
        { headers: { "private-key": "ea7f45ab-a82d-4f2e-9a6b-bd46a19b18c2"}}
    );
     return res.status(r.status).json(r.data)
  }catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

