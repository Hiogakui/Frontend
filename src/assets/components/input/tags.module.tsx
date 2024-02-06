import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function InputTags() {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const handleTagsChange = (event:any, newValue:any) => {
    if (newValue.length <= 2) {
      setSelectedTags(newValue);
    }
  };

  return (
    <Autocomplete
      multiple
      limitTags={2}
      options={tags}
      value={selectedTags}
      onChange={handleTagsChange}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Tags" />
      )}
    />
  );
}

const tags = [
  {title: 'Dev'},
  {title: 'Web'},
  {title: 'UX'},
  {title: 'UI'},
];