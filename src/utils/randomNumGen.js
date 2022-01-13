export const randomNumGen = n => {
  const numbers = [];
  while (numbers.length < n) {
    const num = Math.floor(Math.random() * 100) + 1;
    if (numbers.indexOf(num) === -1) {
      numbers.push(num, num);
    }
  }

  numbers.sort(() => Math.random() - 0.5);
  return numbers;
};
