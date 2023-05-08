export const InitialValueOfName = "Ridho";

export const reducer = (counter, action) => {
  const TypeOfName = action.name;

  if (TypeOfName == "Ridho") {
    return (counter = "Ridho");
  } else if (TypeOfName == "Sasuke") {
    return (counter = "Sasuke");
  } else if (TypeOfName == "Naruto") {
    return (counter = "Naruto");
  } else {
    return counter;
  }
};

 
