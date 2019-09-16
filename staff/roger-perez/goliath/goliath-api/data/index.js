const mongoose = require('mongoose')
const { user, instrument, sequence, drumkit,tracks } = require('./schemas')

module.exports = {
    User: mongoose.model('User', user),
    Instrument: mongoose.model('Instrument', instrument),
    Sequence: mongoose.model('Sequence', sequence),
    Drumkit: mongoose.model('Drumkit', drumkit),
    Tracks: mongoose.model('Tracks', tracks)
}