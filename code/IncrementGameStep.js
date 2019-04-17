// IncrementGameStep
exports.function = function(state) {
  state.stepsSinceRecognizedCommand++
  state.step++
  return state
}
