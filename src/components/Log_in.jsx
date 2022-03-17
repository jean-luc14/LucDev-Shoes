import React from 'react';
import "../scss/components/Log_in.scss";

  const Log_in = ({reverse_log, toogle_log}) => {
  
    return (

      <>
    
        {reverse_log ? <div className='op_log' onClick={toogle_log} /> :null}
        <div className='wrapper_log'
          style={{
          top: reverse_log ? '50%' : '-50%',
          left: reverse_log ? '50%' : '50%',
          opacity: reverse_log ? '1' : '0',
            transform: reverse_log
              ?'translate(-50%,-50%)'
              :'translate(-50%,-50%)',
        }}>
          
          <form >
            <br/>
            <h1>Sign_up Session</h1><button  type='close' onClick={toogle_log} ><span > &times;</span></button>
            <div>
              <label htmlFor='Pseudo'> Pseudo:</label>
              <input id='Pseudo' type='test'></input >
            </div>
            <div>
              <label htmlFor='Mot_de_passe'> Mot de passe:</label>
              <input id='Mot_de_passe' type='password' ></input>
            </div>
            <br />
            <button type='submit'> Soumettre</button>
            <br />
          </form>
        </div> 
      </>


    )
  }
    
export default Log_in;