/* PILARES DO REACT: 
1- COMPONENTE (Encapsulamento de função que retorna html)
2- ESTADO (Estado no qual um componente se encontra)
3- PROPRIEDADE(herança de propriedades inseridas dentro de uma tag)
*/

import React, { useState }from "react";

import "./Login.css";

import api from '../services/api';

import logo from "../assets/logo.svg";

export default function Login({ history }) {
const [username, setUsername] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await api.post('/devs', {
        username,
        
      })
      const { _id } = response.data;
      history.push(`/dev/${_id}`);
    } catch (error) {
      
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input 
        type="text"
        placeholder="Digite seu usuario no github"
        value={username}
        onChange={e => setUsername(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
