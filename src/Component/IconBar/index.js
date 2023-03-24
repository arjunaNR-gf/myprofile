import './IconBar.css';


const IconBar=({icon,text})=>{
    return(
        <>
        <div className='Icon--bar'>
            <div className='Icon--bar--icon'>{icon} </div>
            <div className='Icon--bar--text'><p>{text}</p></div>
        </div>
        </>
    )
}

export default IconBar;