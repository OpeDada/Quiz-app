const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.map(score => {
  (`${score.name} - ${score.score} `)
})
