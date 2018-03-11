function transformItem(item) {
  const newData = {
    ...item,
    desire: item.value,
    currentDate: new Date(item.dateDate)
  };
  delete newData.value;
  return newData;
}

export function userSexEvents(data) {
  return data.map(item => transformItem(item));
}
