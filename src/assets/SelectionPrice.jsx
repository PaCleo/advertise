import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectPrice({value, onChange}) {
  const [price, setPrice] = React.useState(value);

  const handleChange = (event) => {
    setPrice(event.target.value);
    onChange && onChange(event);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Price</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={price}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={200}>Less than R$200</MenuItem>
        <MenuItem value={500}>Less than R$500</MenuItem>
        <MenuItem value={1000}>Less than R$1000</MenuItem>
        <MenuItem value={2000}>Less than R$2000</MenuItem>

      </Select>
    </FormControl>
  );
}