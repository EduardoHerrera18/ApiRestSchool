const express= require('express');
const app = express();
const port = 3000;
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/estudiantes', estudiantesRoutes);


app.listen(port, () => {
    console.log(`Server Emmanuel Active http://localhost:${port}`);
});
