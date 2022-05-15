<<<<<<< HEAD
import './Card.css';
import React from "react";

const Card = (props) => {
    const classes = 'card '+props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

=======
import './Card.css';
import React from "react";

const Card = (props) => {
    const classes = 'card '+props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

>>>>>>> e7210b592b3c941fb5fa69ee468131427aef5346
export default Card;