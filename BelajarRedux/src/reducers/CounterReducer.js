export const counterInitialValue = 1;

// Reducer
export const CounterReducer = (counter, action) => {
  // Counter = Initial Value Sebelumnya

  const tipeAksi = action.tipe;

  if (tipeAksi == "increment") {
    return counter + 1;
  } else if (tipeAksi == "decrement") {
    return counter - 1;
  } else if (tipeAksi == "reset") {
    return 0;
  } else {
    return counter;
  }
};
