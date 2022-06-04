

const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ] 
function searchName(param1, param2, callback) {
  

  const filtered = name.filter((item) => {
      return item.toLowerCase().includes(param1)
    })
    .slice(0,param2)
  return callback(filtered)
}

function callback(value) {
  console.log(value)
}
searchName("an", 3, callback)

