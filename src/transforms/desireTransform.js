function transformItem(item) {
  const newDesire = {
    ...item,
    desire: item.value,
    currentDate: new Date(item.dateDate)
  };
  delete newDesire.value;
  return newDesire;
}

export function userDesireEvents(data) {
  return data.map(item => transformItem(item));
}
