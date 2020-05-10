import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Effects from './components/Effects'
import Info from './components/Info'


function App() {
  const [state, setState] = useState({
    s: "",
    effects: [],
    selected: {}
  });

  const apiurl = "http://www.omdbapi.com/?apikey=6743b942";

  const searching = (e) =>
  {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let effects = data.Search;

        setState(prevState => {
          return { ...prevState, effects: effects }
        })
      });
    }
    
  }
  
  const handleInput = (e) =>
  {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openInfo = id =>
  {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let effect = data;

      console.log(effect);

      setState(prevState => {
        return { ...prevState, selected: effect }
      });
    });
  }

  const closeInfo = () =>
  {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h2>movie collection</h2>
      </header>
      <main>
        <Search handleInput={handleInput} searching={searching} />
        <Effects effects={state.effects} openInfo={openInfo} />
        {(typeof state.selected.Title != "undefined") ? <Info selected={state.selected} closeInfo={closeInfo} /> : false}
      </main>
    </div>
  );
}

export default App