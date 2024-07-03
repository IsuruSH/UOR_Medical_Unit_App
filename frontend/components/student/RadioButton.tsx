"use client";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme,ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    success: {
      main: '#386641',
    },
  },
});


interface RowRadioButtonsGroupProps {
  options: { value: string; label: string; disabled?: boolean }[];
  label: string;
}

export default function RadioButton({ options, label }: RowRadioButtonsGroupProps) {
  return (
    <ThemeProvider theme={theme}>

    <FormControl>
      <FormLabel color="success" id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={options[0].value} // Set the default value to the first option's value
        >
        {options.map((option) => (
            <FormControlLabel
            key={option.value}
            value={option.value}
            control={
                <Radio 
                sx={{
                    '&.Mui-checked': {
                        color: '#386641',
                    },
                }} 
                />
            }
            label={option.label}
            disabled={option.disabled || false}
            />
        ))}
      </RadioGroup>
    </FormControl>
    </ThemeProvider>
  );
}

