const express = require("express")
const app = express.Router()
const CampaignController = require('../controller/campaign')

app.post('/test', CampaignController.test)

module.exports = app