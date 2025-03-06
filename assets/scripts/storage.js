let cartStorage = [];

const leer = (key, data) => {
  let info = localStorage.getItem(key);
  if (!info) {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
};

const guardar = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return leer(key);
};
