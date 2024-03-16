import Card from "./Card";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div className="card-container">
        <Card
          title="Yunis"
          imgUrl="https://images.unsplash.com/photo-1708058885067-ed3b3c2cab9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
          skills={[
            { skillTitle: "html", bgColor: "red" },
            { skillTitle: "css", bgColor: "blue" },
            { skillTitle: "js", bgColor: "orange" },
          ]}
        />
        <Card
          title="Yuzemmed"
          imgUrl="https://plus.unsplash.com/premium_photo-1710030733154-16b30a0f944f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D"

          skills={[
            { skillTitle: "java", bgColor: "red" },
            { skillTitle: "php", bgColor: "blue" },
            { skillTitle: "c#", bgColor: "orange" },
          ]}
        />
        <Card title="Solmaz"
         skills={[
          { skillTitle: "html", bgColor: "red" },
          { skillTitle: "css", bgColor: "blue" },
          { skillTitle: "js", bgColor: "orange" },
        ]} />
      </div>
      <Heading/>
    </>
  );
}

export default App;
