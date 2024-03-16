import CardSkill from "./CardSkill";
import "./card.css";

function Card({ title, imgUrl, skills }) {
  return (
    <>
      <div className="card-box">
        <div className="card-img">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://images.unsplash.com/photo-1710092673366-68f0114d3db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
            }
          />
        </div>
        <div className="card-content">
          <h2 className="card-title title">{title}</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores,
            vero cupiditate laboriosam aspernatur quaerat eum porro minus
            commodi tenetur.
          </p>
          <ul className="card-skills">
            {/* {
                  skillsArray.map((skill,index)=> <li className="card-skill-item" key={index}>{skill}</li>)
                } */}
            {skills.map((skill, index) => (
              <CardSkill
                title={skill.skillTitle}
                bgColor={skill.bgColor}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
