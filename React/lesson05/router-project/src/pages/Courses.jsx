import { Link } from "react-router-dom";

function Courses() {
    const courses=[
        {
            id:1,
            name:'Javascript'
        },
        {
            id:2,
            name:'c++'
        },
        {
            id:3,
            name:'java'
        },
        {
            id:4,
            name:'c#'
        }
    ]

  return <>
  <h1>Courses</h1>
  <ul className="nav-items">
    {
        courses.map((item)=>(
            <Link to={`/courses/${item.name}`} key={item.id}>{item.name}</Link>
        ))
    }
  </ul>
  </>;
}

export default Courses;
