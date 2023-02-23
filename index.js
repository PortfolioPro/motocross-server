const express = require('express')
const cors = require('cors')

const teamsRouter = require('./routes/teams')
const ridersRouter = require('./routes/riders')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', teamsRouter, ridersRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
