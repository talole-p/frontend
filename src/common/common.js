exports.token = () => {
  try {
    if (localStorage.getItem("itemName")) {
      return  localStorage.getItem("itemName");
    }
    return null;
  } catch (error) {
    return null;
  }
};


exports.count = ()=>{
try {
    let getRes = localStorage.getItem('visit')
    if (getRes) {
      const newCount = ++getRes
      localStorage.setItem('visit',newCount)
      return localStorage.getItem('visit')
    }
} catch (error) {
  return null
}
}
