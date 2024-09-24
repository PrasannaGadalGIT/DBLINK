const test = (req, res) => {
    console.log(req.body)

    res.json({
        msg : "This is a test"
    })
}

module.exports = {test}