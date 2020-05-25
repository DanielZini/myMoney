import React, { useEffect, useState } from 'react';
import { usePost } from '../utils/rest';
import { Redirect } from 'react-router-dom';

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZ2w1WMb_HoGApVt_eNW169xwPVe5XXJg';

const Login = () => {

  const [postData, signin] = usePost(url);
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (Object.keys(postData.data).length > 0) {
      localStorage.setItem('token', postData.data.idToken);
      window.location.reload();
    }
  }, [postData])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogado(true);
    }
  })

  const login = async () => {
    await signin({
      email,
      password,
      returnSecureToken: true
    })
  }

  const onChangeEmail = evt => {
    setEmail(evt.target.value);
  }
  const onChangeSenha = evt => {
    setPassword(evt.target.value);
  }

  if (logado) {
    return <Redirect to='/' />
  }

  return (
    <div className='container'>
      <h1>Login</h1>

      {
        postData.error && postData.error.length > 0 &&
        <p>E-mail ou senha inválido!</p>
      }

      <div className="form-group">
        <input type="text" value={email} onChange={onChangeEmail} placeholder="E-mail" className='form-control' />
      </div>
      <div className="form-group">
        <input type="password" value={password} onChange={onChangeSenha} placeholder="Senha" className='form-control' />
      </div>
      <button onClick={login} className='btn btn-success'>Login</button>
    </div>
  )
}

export default Login