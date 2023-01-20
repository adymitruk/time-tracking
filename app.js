const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.post('/submit-form', (req, res) => {
    const data = req.body;
    let line = '';
    Object.keys(data).forEach((key) => {
      line += data[key] + '\t';
    });
    line += '\n';
    fs.appendFileSync('data.txt', line);
    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
