import { useState } from "react";
import Items from "./Items";

function App() {
  const [value,setValue] = useState("");
  const [values,setValues] = useState([]);
  const changed = (e) => {
    setValues([...e.target.value]);
    setValue(e.target.value);
  }
  let indexOf = 0;
  return (
    <div className="App">
      <input value={value} type="text" onChange={changed} />
      <p>{value}</p>
      {value.length > 4 ? <p>Text long enough</p> : <p>Text too short</p>}
      <div style={{display : "flex"}}>
        {values.map(item => <Items ids={indexOf++} setValue={setValue} setValues={setValues} values={values} value={item} key={Math.random() * 1000}>{item}</Items>)}
      </div>
    </div>
  );
}

export default App;