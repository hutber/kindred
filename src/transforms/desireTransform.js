function transformItem(item) {
  console.info(item);
  return item;
}

export function desire(data) {
  return data.map(item => transformItem(item));
}
