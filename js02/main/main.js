const numbers = [
  ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'],
  ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'],
  ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'],
]


module.exports = function main(str) {
  const fetch = [[], [], []]

  for (let c of str) {
    fetch[0].push(numbers[0][c])
    fetch[1].push(numbers[1][c])
    fetch[2].push(numbers[2][c])
  }

  return fetch.map(row => row.join(' ') + '\n').join('')
};
