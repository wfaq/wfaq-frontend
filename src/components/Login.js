import React, {useState}  from "react";
import "./Login.css";

import api from '../services/api';

     function Login () {

        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');


        async function autenticate(e){
          e.preventDefault();
           try {
            const response = await api.post('/authenticate',{
              email,
              password         

            });
            if(response.status === 200) {
              localStorage.setItem('wfaq-token',response.data.token);
            }
         }catch(exception){
           console.log(exception)
         }

          return 0;
        } 
        
   
      return (
   
        <body>
          <div className="container" >
            <div className="container col-md-4">
              <form onSubmit={autenticate} className="form-singin" >
                <div className="container form-login">
                  <div className="text-center">
                    <h1 className="h3 mb-3 font-weight-normal">wFaq Login</h1>
                    <p>Bem Vindo !</p>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}  className="form-control" 
                         required autoFocus></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password"
                      value={password}
                      onChange={e=> setPassword(e.target.value)} 
                      className="form-control"
                       
                       id="password" required></input>
                  </div>
                  <button className="btn btn-dark btn-lg btn-block" type="submit">Logar</button>            
              </div>  
            </form>
            <div class="alert alert-danger alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Erro!</strong> E-mail ou senha inválido!
            </div>
            </div>
          </div>
        </body> 

       );
    }
    export default Login;