const validate = require('../../../utils/validate')
const { Tracks } = require('../../../data')
const mongoose = require('mongoose')

/**
 * Retrieves track by its style.
 * 
 * @param {string} estilo 
 * 
 * @returns {Promise}
 */
module.exports = function (estilo,tono) {
    validate.string(estilo, 'estilo')
    validate.string(tono, 'tono')
 

    return (async () => {
        const track= await Tracks.find({ style: estilo, tone: tono, }).lean()
        if (!track) throw new Error(`track with style ${estilo} and tone ${tone} not found`)
        track.estilo = estilo
        track.tono = tono

        let ids = track.map(a => a._id)

        let randomId = Math.floor(Math.random() * ids.length  )

        console.log('random id: ' + ids[randomId])
        console.log('ids :', ids);

        let idRandom = ids[randomId]
        
        return idRandom

    })()
}
