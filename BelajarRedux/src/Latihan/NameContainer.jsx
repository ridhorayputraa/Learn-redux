// Karena sudah pasti menggunakan reducer, kita gunakan useReducer
import { useReducer } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

// import reducernya di sini
import { InitialValueOfName, reducer } from "./NameReducer";
const NameContaine = () => {
  const [state, dispatch] = useReducer(reducer, InitialValueOfName);

  const buttonOfChangeNaruto = () => {
    dispatch({
      name: "Naruto",
    });
  };

  const buttonOfChangeSasuke = () => {
    dispatch({
      name: "Sasuke",
    });
  };

  const buttonOfChangeRidho = () => {
    dispatch({
      name: "Ridho",
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
          Reducer Nama | Latihan Reducer
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            defaultValue="Ray"
            value={state}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonOfChangeRidho}
          >
            Ridho
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonOfChangeNaruto}
          >
            Naruto
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonOfChangeSasuke}
          >
            Sasuke
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NameContaine;
