export const stringToPrice = (string) => {
  if (!string) return 0;
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const removeLastStr = (string) => {
  return string.slice(0,string.length-2)
}