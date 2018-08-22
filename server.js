
let express = require('express');
let app = express();

// enable CORS so the API is remotely testable by FCC 
let cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  const IP = 'IP';
  const ip = req.ip;
  const headers = req.headers;
  const language = headers['accept-language'];
  const software = headers['user-agent'];
  res.send({IP: req.ip, language, software});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
