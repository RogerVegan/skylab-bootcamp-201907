const logic = require('../../logic')

module.exports = function (req, res) {
    const { body: { name, style,instrument,tone, audio } } = req

    try {
        logic.registerTrack(name, style,instrument,tone, audio)
            .then(() => res.status(201).json({ message: 'Track correctly registered' }))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}