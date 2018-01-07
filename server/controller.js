module.exports = {

    postQuote(req, res) => {
        const db = req.app.get('db')
    },

    getQuotes(req, res) => {
        const db = req.app.get('db')
    },

    editQuote(req, res) => {
        const db = req.app.get('db')
    },

    deleteQuote(req, res) => {
        const db = req.app.get('db')
    }
}