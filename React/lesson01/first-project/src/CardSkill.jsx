function CardSkill({title,bgColor}){
    
    return(
        <>
        <li className="card-skill-item" style={{backgroundColor:bgColor}} >{title}</li>
        </>
    )
}

export default CardSkill;