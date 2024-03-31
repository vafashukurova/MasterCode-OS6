import { useParams } from "react-router-dom";

function CourseInner() {

    const {name}=useParams()

  return (
    <>
      <h1>Inner Course {name}</h1>
    </>
  );
}

export default CourseInner;
