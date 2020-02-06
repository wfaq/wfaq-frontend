import React, {Component} from "react";
import "./Login.css";
// require('bootstrap');


class Login extends Component {
    render(){
      return (
   
        <body>
          <div className="container" >
            <div className="container col-md-4">
              <form className="form-singin">
                <div className="container form-login">
                  <div className="text-center">
                    <h1 className="h3 mb-3 font-weight-normal">wFaq Login</h1>
                    <p>Bem Vindo !</p>
                  </div>
                  
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" className="form-control" required autoFocus></input>
                  </div>
                  <div className="form-group">
                    <label for="password">Senha</label>
                    <input type="password" className="form-control"  id="password" required></input>
                  </div>
                  <button className="btn btn-dark btn-lg btn-block" type="submit">Logar</button>            
              </div>  
            </form>
            </div>
          </div>
        </body> 

       );
      
      } 
    };
    export default Login;