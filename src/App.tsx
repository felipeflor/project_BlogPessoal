import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/estaticos/navbar/Navbar';
import Footer from './Components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './Components/temas/listatema/ListaTema';
import ListaPostagem from './Components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <div style={{ minHeight: '100vh' }}>
              <Route exact path='/'>
                <Login />
              </Route>

              <Route path='/login'>
                <Login />
              </Route>

              <Route path='/home'>
                <Home />
              </Route>

              <Route path='/cadastrousuario'>
                <CadastroUsuario />
              </Route>

              <Route path='/temas'>
                <ListaTema />
              </Route>

              <Route path='/posts'>
                <ListaPostagem />
              </Route>

            </div>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
