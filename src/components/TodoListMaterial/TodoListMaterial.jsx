import { TextField } from "@mui/material";
import { useState } from "react";
import  Icon  from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import List from '@mui/material/List';
import Item from "./Item";


function TodoListMaterial() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([{id: 1, value: 'Первая запись'}, {id: 2, value: 'Вторая запись'}]);
    const [count, setCount] = useState(3);

    const updateValue = (e) => { 
        setValue(e.target.value);
     };
    
    const increment = () => { setCount(prevCount => prevCount + 1) }; 

    const updateList = () => { 
        if (value.trim() === '') {
            setValue('');
            return;
        };
        increment();
        const newList = [...list, {id: count, value}];
        setList(newList);
        setValue('');
     };

    const removeItem= (id) => { 
        setList(list.filter((item) => item.id !== id));
     }; 

    return ( 
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <TextField value={value} onChange={updateValue} sx={{backgroundColor: green[200], m: '20px', width: '300px'}}
            label="Введите текст" color="info" focused variant="filled" 
        />
        <Icon sx={{ color: green[500]}} onClick={updateList}>add_circle</Icon>
        <List>
        <>
            {list.map(item => 
                <Item key={item.id} id={item.id} text={item.value} fns={() => removeItem(item.id)} />)}
        </>

        </List>
        </>
     );
}

export default TodoListMaterial;