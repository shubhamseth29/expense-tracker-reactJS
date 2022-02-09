import './Card.css';

function Card(props){
    const classVariable = 'card ' + props.className    
    return (
        <div className={classVariable}>
            {props.children}
        </div>
    )
}

export default Card;