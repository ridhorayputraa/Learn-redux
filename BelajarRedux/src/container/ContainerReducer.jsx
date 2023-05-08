// Karena sudah pasti menggunakan reducer, kita gunakan useReducer
import { useReducer } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

// import reducernya di sini
import {
  CounterReducer,
  counterInitialValue,
} from "../reducers/CounterReducer";

const CounterReducerContainer = () => {
  const [counter, dispatch] = useReducer(CounterReducer, counterInitialValue);

  // dispacth = function yang menerima objek yang mempresntasikan action
  const buttonIncrementOnClickHandler = () => {
    dispatch({
      tipe: "increment",
    });
  };

  const buttonDecrementOnClickHandler = () => {
    dispatch({
      tipe: "decrement",
    });
  };

  const buttonResetOnClickHandler = () => {
    dispatch({
      tipe: "reset",
    });
  };

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" component="div">
          Use Reducer
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterReducerContainer;
