import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from 'react';


function Hello(){
  useEffect(()=>{
    console.log("Created");
    return () => console.log("Destroyed");
  },[]);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((count) => count +1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShowing = () => setShowing((prev) => !prev);

  useEffect(()=>{
    if(keyword !== "" && keyword.length >= 3){
      console.log("Word" );
    }
  }, [keyword]);
  useEffect(() => {
  }, [counter]);

  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder='Search...'/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Count Clicker</button>
      <Button text={"Button"}/>

      {showing ? <Hello/> : null}
      <button onClick={onShowing}>{showing ? "hide" : "Show"}</button>
    </div>
  );
}

export default App;
