module.exports = function main(inputs) {
  let sum = 6 + 0.25 * inputs.parkTime

  if (inputs.distance > 2 && inputs.distance <= 8)
    sum += 0.8 * (inputs.distance - 2)

  if (inputs.distance > 8)
    sum += 0.8 * 6 + 1.2 * (inputs.distance - 8)

  return Math.round(sum)
};
