import './styles.css'


export function Card ({name, time}) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <br></br>
            <small>{time}</small>
        </div>
    )


}



