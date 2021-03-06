const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({msg: 'welcome to Hotel rwanda'}));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));