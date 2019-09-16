const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    try {
        logic.retrieveTrack(id)
            .then(track => res.json({ message: 'track retrieved correctly', track }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}