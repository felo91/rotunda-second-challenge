function rotundaScoreAlgorithm({labels, businessDays}) {
    const scoreChart = {
        "Critical Priority": 1000,
        "High Priority": 50,
        "Mid Priority": 20,
        "Low Priority": 10,
        "Very Low Priority": 1,
    }

    const scoredLabels = labels.filter(label => scoreChart[label]);
    const higherLabel = scoredLabels.sort((a,b)=>scoreChart[b] - scoreChart[a]);
    const labelScore = scoreChart[higherLabel[0]];
    const score = labelScore * businessDays;

    return score;
}


module.exports = {rotundaScoreAlgorithm};