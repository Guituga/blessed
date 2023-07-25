import React, { Component } from 'react';

class Cliente extends Component {
  constructor(props) {
    super(props);
    // Inicia o estado do componente com valores vazios
    this.state = {
      nome: '',
      morada: '',
      contactos: '',
      email: ''
    };
  }

  handleChange = (event) => {
    // Atualiza o estado correspondente ao campo de entrada alterado
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { nome, morada, contactos, email } = this.state;

    return (
      <div>
        <label>
          Nome:
          {/* Campo de entrada para o nome do cliente */}
          <input type="text" name="nome" value={nome} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Morada:
          {/* Campo de entrada para a morada do cliente */}
          <input type="text" name="morada" value={morada} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Contactos:
          {/* Campo de entrada para os contactos do cliente */}
          <input type="text" name="contactos" value={contactos} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          {/* Campo de entrada para o email do cliente */}
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default Cliente;