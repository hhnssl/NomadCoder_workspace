import {useState} from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault()

    // 인풋에 아무것도 입력 안돼있으면 버튼 눌러도 암것도 안하기
    if(toDo === ""){
      return;
    }

    // 입력하고 버튼 누르면 제출하고 인풋 내용은 비우기
    setToDos( (currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }; 
  // console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

  return (
    <div className="App">
      <h1>my to do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."/>

        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
