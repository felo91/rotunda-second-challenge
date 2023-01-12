module.exports.buildMakeScore = ({ calculateScoreAlgorithm }) => {
    return function makeSource ({ labels, businessDays } = {}) {
        if (!labels)  return;
        if (labels.length === 0) return;

        return calculateScoreAlgorithm({labels, businessDays});
    }
}
