import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { green } from '@mui/material/colors';


function Item({id, text, fns}) {
    return ( 
        <ListItem sx={{width: '400px'}}>
            <ListItemButton component="a" href="#" sx={{backgroundColor: green[600], cursor: 'arrow'}}>
                <ListItemText primary={`${id}. ${text}`}/>
                <DeleteForeverIcon onClick={fns}/>    
            </ListItemButton>
        </ListItem>
        
     );
}

export default Item;

