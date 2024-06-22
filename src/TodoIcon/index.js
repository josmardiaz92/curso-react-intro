import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import React from 'react';
import './TodoIcon.css'

const iconsTypes={
    'check':(color)=><CheckSVG className='icon-svg' fill={color}/>,
    'delete':(color)=><DeleteSVG className='icon-svg' fill={color}/>
};

function TodoIcon({type,color,onClick}){
    return (
        <span  
            className={`Icon-container  Icon-container-${type}`}
            onClick={onClick}
        >
            {iconsTypes[type](color)}
        </span>
    )
}

export {TodoIcon}