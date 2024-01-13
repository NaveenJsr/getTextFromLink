const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.options('/api/readText', cors());

app.get('/api/readText', async (req, res) => {
  const url = req.query.url;
  
  try {
    const response = await axios.get(url);
    // console.log(response.data)
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(error.response ? error.response.status : 500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
