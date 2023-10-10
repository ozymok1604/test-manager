const getFilteredList = (list) =>
  list.reduce((o, i) => {
    if (!o.find((v) => v.id == i.id)) {
      o.push(i);
    }
    return o;
  }, []);

export { getFilteredList };
