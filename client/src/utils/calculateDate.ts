export const getNextPayDay = (date: string) => {
  const payYear = Number(date.split("-")[0]);
  const payMonth = Number(date.split("-")[1]);
  const payDay = Number(date.split("T")[0].split("-")[2]);
  const newDate = new Date(payYear, payMonth, payDay);
  newDate.toLocaleString();
  newDate.setDate(newDate.getDate() + 28);
  const newYear = newDate.getFullYear();
  const newMonth = newDate.getMonth();
  const newDay = String(newDate).split(" ")[2];
  return `${newYear}.${newMonth}.${newDay}`;
};

export const getToday = () => {
  const newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  return `${year}.${month}.${date}`;
};
