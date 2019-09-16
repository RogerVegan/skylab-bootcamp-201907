const validate = require('../../../utils/validate')
const { Tracks } = require('../../../data')
const mongoose = require('mongoose')

/**
 * Retrieves track by its id.
 * 
 * @param {string} id 
 * 
 * @returns {Promise}
 */
module.exports = function (id) {
    validate.string(id, 'id')

    return (async () => {
        const track= await Tracks.findOne({ _id: id }).lean()
        if (!track) throw new Error(`track with id ${id} not found`)
        track.id = id
        return track

    })()
}