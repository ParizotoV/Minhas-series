import React, { useState, useEffect } from "react";
import axios from "axios";

// Componentes
import { Genres, Header, NewGenre, EditGenre } from './components/index';

//Rotas
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/generos/:id" exact component={EditGenre} />
        <Route path="/generos/novo" exact component={NewGenre} />
        <Route path="/generos" exact component={Genres} />
      </div>
    </Router>
  );
}

export default App;
