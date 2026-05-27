const app = require('./src/aap')
const connetTodb = require('./src/config/db')
require('dotenv').config()

connetTodb();

app.listen(3000, () => {
    console.log(`server is running on port : 3000`);
})