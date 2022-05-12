import React from 'react'

const styles = {
    color: {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "danger": "btn-danger",
        "default": "btn-color-default"
    },
    size: {
        "small": "btn-sm",
        "large": "btn-lg",
        "medium": "btn-md"
    },
    variant: {
        "default": "btn-default",
        "outline": "btn-outline",
        "text": "btn-text"
    }
}

const Buttons = ({ variant, disableShadow, disabled, startIcon, endIcon, size, color, hover, text}) => {

    const classes = [];
    classes.push(((hover) ? ((variant) ? `${styles.variant[variant]} ${styles.variant[variant]}-hover` : styles.variant[variant]) : styles.variant[variant]));
    classes.push(((hover) ? ((color) ? `${styles.color[color]} ${styles.color[color]}-hover` : styles.color[color]) : styles.color[color]));
    classes.push((size) ? styles.size[size] : "btn-md");
    classes.push((disableShadow) ? "btn-disable-shadow" : "");
    classes.push((disabled) ? "disabled" : "");
    console.log(disabled);
    const button = (
        <button className={`button ${classes.join(" ")}`} disabled={(disabled) ? true : false} >
        <span className='material-icons'>{startIcon}</span> Default <span className='material-icons'>{endIcon}</span>
        </button>
    );
    return (
        <div className='button-container'>
            <span className='button-text'>{text}</span>
            {button}
        </div>
    )
}

export default Buttons