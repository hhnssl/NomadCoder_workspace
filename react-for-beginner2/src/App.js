import {useState, useEffect} from "react";

function Hello(){
  useEffect(() => {
    console.log("hi :)");

    return () => console.log("bye:(");;
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  // setShowing을 통해서 이전 value를 받아온 다음, 그 value의 반대값을 return 할거다
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "Show"}</button>
    </div>
  );
}

export default App;
