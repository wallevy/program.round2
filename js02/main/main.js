const numbers = [
  ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'],
  ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'],
  ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'],
]


module.exports = function main(str) {
  const result = [[], [], []]

  for (let c of str) {
    result[0].push(numbers[0][c])
    result[1].push(numbers[1][c])
    result[2].push(numbers[2][c])
  }

  return result.map(e => e.join(' ') + '\n').join('')
};
