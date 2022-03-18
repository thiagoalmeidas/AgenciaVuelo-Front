import React, { Component } from 'react'
import UsuarioService from '../../services/UsuarioService';



class CreateUsersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            nomeUsuario: '',
            emailUsuario: '',
            senhaUsuario: '',
            telefoneUsuario: ''
        }
        this.changeNomeUsuarioHandler = this.changeNomeUsuarioHandler.bind(this);
        this.changeEmailUsuarioHandler = this.changeEmailUsuarioHandler.bind(this);
        this.changeSenhaUsuarioHandler = this.changeSenhaUsuarioHandler.bind(this);
        this.saveOrUpdateUsuario = this.saveOrUpdateUsuario.bind(this);
    }

    // step 3
    componentDidMount(){
        return
      /*  // step 4 - Algo relacionado ao update, ao selecionar no botao update ele retorna os dados nos inputs para alterar
        if(this.state.id === '_add'){
            return
        }else{
            UsuarioService.getUsuarioById(this.state.id).then( (res) =>{
                let usuario = res.data;
                this.setState
                ({
                    nomeUsuario: usuario.nomeUsuario,
                    emailUsuario: usuario.emailUsuario,
                    senhaUsuario : usuario.senhaUsuario,
                    telefoneUsuario : usuario.telefoneUsuario
                });
            });
        }  */      
    }

    saveOrUpdateUsuario = (e) => {
        e.preventDefault();
        let usuario = {nomeUsuario: this.state.nomeUsuario, emailUsuario: this.state.emailUsuario, senhaUsuario: this.state.senhaUsuario, telefoneUsuario: this.state.telefoneUsuario};
        console.log('usuario => ' + JSON.stringify(usuario));

        UsuarioService.createUsuario(usuario).then(res =>{
           // this.props.history.push('/usuario');
        });
    }
    
    changeNomeUsuarioHandler= (event) => {
        this.setState({nomeUsuario: event.target.value});
    }

    changeEmailUsuarioHandler= (event) => {
        this.setState({emailUsuario: event.target.value});
    }

    changeSenhaUsuarioHandler= (event) => {
        this.setState({senhaUsuario: event.target.value});
    }

    render() {
        return (      
                <form method='POST'>
                    <div className = "form-group">
                        <label></label>
                        <input placeholder="Nome:" name="nomeUsuario" className="form-control" required="required"
                            value={this.state.nomeUsuario} onChange={this.changeNomeUsuarioHandler}/>
                    </div>

                    <div className = "form-group">
                        <label></label>
                        <input placeholder="E-mail:" name="emailUsuario" className="form-control" required="required"
                            value={this.state.emailUsuario} onChange={this.changeEmailUsuarioHandler}/>
                    </div>

                    <div className = "form-group">
                        <label></label>
                        <input placeholder="Senha:" name="senhaUsuario" type="password" className="form-control" required="required"
                            value={this.state.senhaUsuario} onChange={this.changeSenhaUsuarioHandler}/>
                    </div>       

                    <button className="button-principal" onClick={this.saveOrUpdateUsuario}>Cadastrar</button>
                </form>                               
        )
    }
}

export default CreateUsersComponent