function telephoneCheck(str) {
  let polishedNum = str.replace(/[^0-9]/g, "")
  if(str.match(/[^0-9\-\(\)\s]/g)){
    return false
  }
  if(str.indexOf(")") >=0 && str.indexOf("(") < 0){
    return false
  }else if(str.indexOf("(") >= 0 && str.indexOf(")") < 0){
    return false
  } if (str.indexOf(")") - str.indexOf("(") !== 4 && str.indexOf(")") - str.indexOf("(") !== 0){
    return false
  }
  if(str.match(/-/g) && str.match(/-/g).length > 2) {
    return false
  }
  if(polishedNum.length === 10){
    return true
  }else if(polishedNum.length === 11 && str[0] === "1"){
    return true
  } 
  return false;
}