import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';

const iconsTypes={
    'check':<CheckSVG/>,
    'delete':<DeleteSVG/>
};

function TodoIcon({type}){
    return (
        <span  
            className={`Icon Icon-svg Icon-${type}`}
        >
            {iconsTypes[type]}
        </span>
    )
}

export {TodoIcon}