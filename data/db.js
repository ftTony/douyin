module.exports = () => {
  const data = { contents: [] }
  for (let i = 0; i < 1000; i++) {
    data.contents.push({
      id: i,
      content: `抖音${i}`
    })
  }
  return data
};