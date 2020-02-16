import React from 'react';

import './global.css';
import './app.css';

function App() {
 return (
  <div id="app">
   <aside>
    <strong>Cadastrar</strong>
     <form action="">

      <div className="input-block">
       <label htmlFor="github_username">Usuário do github</label>
       <input name="github_username" id="github_username" required/>
      </div>

      <div className="input-block">
       <label htmlFor="techs">Tecnologias</label>
       <input name="techs" id="techs" required/>
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required/>
        </div>
      </div>

     </form>
   </aside>
   <main>

   </main>
  </div>
 );
}

export default App;