import { useState } from 'react';

export default function Login() {
  // Estados para armazenar o nome de usuário e a senha.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Lida com a mudança em qualquer campo de input (usuário ou senha).
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Lida com a submissão do formulário.
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página.

    // Exibe as coisas no console.
    console.log('Login:');
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className='card-container'>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        {/* Input para o nome de usuário */}
        <input type="text" name="username" value={username} onChange={handleInputChange} placeholder="Nome"
        />
        {/* Input para a senha */}
        <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Senha"
        />
        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}