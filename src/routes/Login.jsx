import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListaSenhas, ListaUsuarios } from '../components/ListaUsuarios';
import '../scss/_login.scss';

function Login() {
  const navigate = useNavigate();
  const user = useRef();
  const password = useRef();

  function validade() {
    for (var i = 0; i < ListaUsuarios.length; i++) {
      if (ListaUsuarios[i] === user.current.value && ListaSenhas[i] === password.current.value) {
        return true;
      }
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validade()) {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('usuario', user.current.value);
      sessionStorage.setItem('senha', token);
      navigate('/COntextualizacao');
    } else {
      alert('Dados inválidos.');
    }
  };

  return (
    <div className='login'>
      <form className='login-card' onSubmit={handleSubmit}>
        <h1 className='login-card-title'>Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Nome de usuário:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" required ref={user} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">Password</label>
          <input type="password" id="inputPassword5" className="form-control" placeholder='******' aria-describedby="passwordHelpBlock" required ref={password} />
        </div>
        <button type="submit" className="btn login-button">Entrar</button>
        <p className='texto-cadastro'>Se não possui conta <Link to="/cadastro" className="texto-cadastro-cadastre_se">Cadastre-se!</Link></p>
      </form>
    </div>
  );
}

export default Login;
