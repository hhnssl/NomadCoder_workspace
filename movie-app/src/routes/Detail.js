import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  // console.log(id); // id 객체 반환

  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,lorem,,,,
        </h1>
      )}
    </div>
  );
}

export default Detail;
