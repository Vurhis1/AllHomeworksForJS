//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];
  return function (...args) {
    const hash = md5(args);
    const objectFromCash = cache.find((object) => object.hash === hash);
    if (objectFromCash) {
      console.log("Из кэша: " + objectFromCash.value);
      return "Из кэша: " + objectFromCash.value;
    }

    let value = func(...args);
    cache.push({ hash, value });
    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
