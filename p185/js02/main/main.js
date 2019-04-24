const nums = [
  ['._.', '|.|', '|_|'],
  ['...', '..|', '..|'],
  ['._.', '._|', '|_.'],
  ['._.', '._|', '._|'],
  ['...', '|_|', '..|'],
  ['._.', '|_.', '._|'],
  ['._.', '|_.', '|_|'],
  ['._.', '..|', '..|'],
  ['._.', '|_|', '|_|'],
  ['._.', '|_|', '..|'],
]


module.exports = function main(str) {
  const result = [[], [], []]

  for (let c of str) {
    result[0].push(nums[c][0])
    result[1].push(nums[c][1])
    result[2].push(nums[c][2])
  }

  return result.map(e => e.join(' ') + '\n').join('')
};
