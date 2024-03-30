import { useEffect, useState } from "react";

function Photo() {
  const [photos, setPhotos] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setPhotos(data.slice(0, 10));
    }
    getPhotos();
  }, []);
  return (
    <>
      <h1>Photos</h1>
      {photos.map((photo, index) => (
        <img src={photo.url} key={index} />
))}
    </>
  );
}

export default Photo;
