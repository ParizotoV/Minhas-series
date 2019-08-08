import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const NovoGenero = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const save = () => {
    axios
      .post("/api/genres", {
        name
      })
      .then(res => {
        setSuccess(true);
      });
  };

  return (
    <div className="container">
      {!success && (
        <div>
          <h1>Novo Genero</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                value={name}
                className="form-control"
                id="name"
                placeholder="Nome do Genêro"
                onChange={e => setName(e.target.value)}
              />
              <button type="button" onClick={save} className="btn btn-primary">
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
      {success && <Redirect to="/generos" />}
    </div>
  );
};

export default NovoGenero;
