import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./component/Form";
import Input from "./component/Input";
import Label from "./component/Label";
import Button from "./component/Button";

function App() {
  const [poke, setpoke] = useState(null);
  const [pokename, setpokename] = useState();
  const [error, seterror] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    seterror(false);
    const response = fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokename.toLowerCase()}`
    )
      .then((res) => {
        if (res.status == 404) {
          seterror(true);
          // console.log('error');
        } else {
          return res.json();
        }
      })
      .then((data) => setpoke(data));

    // setpokename(e.target.value)
    // console.log(e.p)
  };

  const getSearchPoke = (input) => {
    setpokename(input);
  };
  console.log(poke);
  return (
    <>
      <h1 style={{ fontSize: "52px" }}>Pokemon</h1>
      {/* {poke?.results?.map(item=>
       <p>
       {item.name}
       </p>)} */}
      <form action="" onSubmit={handlesubmit}>
        <Input
          className={"searchin"}
          value={pokename}
          getSearchPoke={getSearchPoke}
        />
        <Button className={"searchbtn"} label={"Search"} type="submit" />
      </form>
      {poke && <Form pokemon={poke} />}
      {error && <h1 className="errormsg">No Pokemon Found</h1>}
    </>
  );
}

export default App;
