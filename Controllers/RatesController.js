const axios = require('axios');

class RatesController {
    async getPrice(req, res) {
        try {
            const { currency } = req.query

            axios.get(`https://api.coincap.io/v2/assets/${currency}`)
                .then(function (response) {
                    const { priceUsd } = response.data.data
                    res.json({ "usd": priceUsd })
                })
                .catch(function (error) {
                    res.status(404).json({ "error": error })
                })
        } catch (error) {
            res.json({ "error": error })
            console.log(error)
        }
    }
}

module.exports = new RatesController();