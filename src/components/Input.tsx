import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (...args: any[]) => any;
  label:string
};

export default function InputField(props: InputProps) {
  const { placeholder, value, onChange, label } = props

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id="outlined-required"
          label={label}
          defaultValue="Hello World"
        />
      </div>
    </Box>
  );
}
