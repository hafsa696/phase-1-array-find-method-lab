// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]
  function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    return win.year
  }
  console.log(superbowlWin(record));

  function superbowlWin(record) {
    const undefined =record.find ( entry => entry.result ==="N/A")
    return undefined.year
    
  }
  
  
  
 