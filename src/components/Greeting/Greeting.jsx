import {PropTypes} from 'prop-types';

function Greeting({name}) {
    const hour = new Date().getHours();
    const getGreeting = (hour) => { 
        let greeting = '';
        if (hour >= 4 && hour < 10) greeting = 'Доброе утро, ';
        else if (hour >= 10 && hour < 18) greeting = 'Добрый день, ';
        else if (hour >= 18 && hour < 22) greeting = 'Добрый вечер, ';
        else  greeting = 'Доброй ночи, ';
        return greeting;
     }
    return ( 
        <>
            <p>{getGreeting(hour)} {name}! </p>
        </>
     );
};

Greeting.propType = {
    name: PropTypes.string.isRequired,
};

export default Greeting;