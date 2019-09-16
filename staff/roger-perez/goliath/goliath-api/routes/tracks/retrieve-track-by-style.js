const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { style,tone } } = req

    try {
        logic.retrieveTrackByStyle(style,tone)
            .then(track => res.json({ message: `track with sytle ${style} and tone ${tone} retrieved correctly`, track }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}