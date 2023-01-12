module.exports.buildMakeLabel = () => {
     function makeLabel ({ id, name, color } = {}) {
        if (!id) throw new Error('Label must contain an id.')
        if (!name) throw new Error('Label must contain a name.')
        if (!color) throw new Error('Label must contain a color.')

        return Object.freeze({
            getIp: () => id,
            getName: () => name,
            getColor: () => {return {color: "#"+color}},
            getObjectData: () => ({ id, name, color:"#"+color })
        })
    }

    return { makeLabel }
}