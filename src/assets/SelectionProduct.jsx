import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectProduct({value, onChange}) {
  const [product, setProduct] = React.useState(value);

  const handleChange = (event) => {
    setProduct(event.target.value);
    onChange && onChange(event);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Category</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={product}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"GPU"}>GPU</MenuItem>
        <MenuItem value={"RAM"}>RAM</MenuItem>
        <MenuItem value={"MOTHERBOARD"}>MOTHERBOARD</MenuItem>
      </Select>
    </FormControl>
  );
}

