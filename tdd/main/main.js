function getBase(parkTime) {
  return 6 +  0.25 * parkTime
}

function getOver2Less8(distance) {
  if (distance < 2) return 0
  if (distance <= 8) return  0.8 * (distance - 2)
  return 0.8 * (8 - 2)
}

function getOver8(distance) {
  if (distance <= 8) return 0
  return 0.8 * (1 + 0.5) * (distance - 8)
}

module.exports = function main(inputs) {
  return Math.round(
    getBase(inputs.parkTime) +
    getOver2Less8(inputs.distance) +
    getOver8(inputs.distance)
  )
}

