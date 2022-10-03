import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CollectForm from '../forms/CollectForm';
import Typography from '@mui/material/Typography';

let collections = [ {id:1,name:'Breakfast'},{id:2,name:'Cookies'},{id:3,name:'Dinner'} ];

export default function SelectMenu() {

    const [collect, setCollect] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        if (event.target.value === 'default'){
            setCollect("")
            return
        }
        setCollect(JSON.parse(event.target.value));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="Collect - label">Collection</InputLabel>
        <Select
          labelId="Collect - label"
          // id="collection_id"
          name="collection_id"
          value={collect?JSON.stringify(collect):'default'}
          label="Collection"
          placeholder="Collection"
          onChange={(event) => handleChange(event)}
        >
          <MenuItem value="default"><em>None</em></MenuItem>
          {collections?.map(
            (collection) => (
              <MenuItem key={collection.id} value={JSON.stringify(collection)}> {collection.name} | {collection.id} </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      {collect ?
      <>
        <Typography sx = {{p:4}} variant ="h5">
          Edit {collect.name}
        </Typography>
        <CollectForm collection={collect}/>
      </>
        :
      <>
        <Typography sx = {{p:4}} variant ="h5">
          Create Collection {collections.name}
        </Typography>
        <CollectForm />
      </>
      }
    </>
  )
}
