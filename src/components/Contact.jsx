import React from 'react'

function Contact(){
    return(
     <div >
      <form>

       <div>
          <br/>
          <h1>Session Contacts</h1>
          <br/>
          <br/>


          <div className='form-group' style={{margin:'6px'}}>
          <label for='Pseudo'> Pseudo:</label>
          <input id='Pseudo'type='test' className='form-control'></input>
          </div>

          <div  className='form-group' style={{margin:'6px'}}>
          <label for='mail'> Email:</label>
          <input id='mail'type='test' className='form-control'></input>
          </div>

          <div  className='form-group' style={{margin:'6px'}}>
            <label for='Message'>Message</label>
            <textarea  id='Message'type='test' className='form-control'></textarea>
          </div>
          <br/>
          <boutton type='submit' style={{margin:'6px'}}> Envoyer</boutton>
          
         </div>

      </form>
     </div>
    )

}

export default Contact;