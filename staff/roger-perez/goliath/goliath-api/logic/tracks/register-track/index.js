const validate = require('../../../utils/validate')
const { Tracks } = require('../../../data')

/**
 * Registers a track.
 * 
 * @param {string} name 
 * @param {string} style
 *  @param {string} instrument
 *  @param {string} tone
 * @param {string} audio 
 * 
 * @returns {Promise}
 */


module.exports = function (name, style,instrument,tone, audio) {


    validate.string(name, 'name')
    validate.string(style, 'style')
    validate.string(instrument, 'audio')
    validate.string(tone, 'audio')
    validate.string(audio, 'audio')

    
    return Tracks.findOne({ name })
        .then(track => {
            if (track) throw new Error(`Track with name ${name} already exists`)

          

            return Tracks.create({ name, style,instrument,tone, audio })
        })
        .then(() => { })
}