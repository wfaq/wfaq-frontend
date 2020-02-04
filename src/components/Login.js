import React, {Component} from "react";
import "./Login.css";
// require('bootstrap');


class Login extends Component {
    render(){
      return (
   
        <body>
          <div className="form-container" >
            <form className="form-singin">
              <div className="text-center mb-4">
                <img className="mb-4" src="../src/img/dino.jfif" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">wFaq Login</h1>
                <p>Bem Vindo !</p>
              </div>
              <div className="form-label-group">
                <label for="email">Email</label>
                <input type="email" id="email" className="form-control" required autoFocus></input>
              </div>
              <div className="form-label-group">
                <label for="password">Senha</label>
                <input type="password" className="form-control"  id="password" required></input>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Logar</button>            
            </form>
          </div>
        </body> 

       );
      
      } 
    };
    export default Login;