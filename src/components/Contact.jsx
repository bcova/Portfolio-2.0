import React from "react";
import clear from '../assets/clear.svg'
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        mode: "cursor",
        container:"#email",
        player: '#at',
        actions: [
          {
            type: "click",
            forceFlag: false
          },
        ],
      });
      create({
        mode: "cursor",
        container:"#name",
        player: '#avatar',
        actions: [
          {
            type: "click",
            forceFlag: false
          },
        ],
      });
    });
  }

render(){
  return (
    <div id="contact" className="carousel-item h-screen text-white justify-center items-center px-6 select-none flex-col touch-pan-up overflow-y-hidden snap-end">
      <legend className="text-5xl mb-4 px-2 text-primary tracking-wide rounded-md outline outline-2 bg-base-100 ">Contact</legend> 
      <form method='POST' action='https://getform.io/f/8d6019f6-b493-46c2-895f-427e73583556' className="h-[500px] flex items-center justify-center overflow-hidden shadow-lg bg-zinc-900 bg-opacity-50 rounded-lg relative isolate border-secondary border-2">
      <div className="form-control p-6 gap-10" >
        <label className="input-group relative">
            <span className="bg-primary w-[70px] flex justify-center">
            <lottie-player
                ref={this.myRef}
                id='at'
                src="https://cdn.lordicon.com/diihvcfp.json"
                >
            </lottie-player>
            </span>
            <input enterKeyHint="next" type="email" required placeholder="Enter email here..." name='email' className="input input-bordered focus:outline-secondary caret-primary touch-pan-y focus:placeholder:invisible border-primary" id="email"/>
            <button className=" absolute bottom-2 right-2" onClick={() => document.getElementById('email').value = ''}><img src={clear} className='w-7 '/></button>
        </label>
        <label className="input-group relative">
            <span className="bg-primary w-[70px] overflow-hidden">
            <lottie-player
                ref={this.myRef}
                id='avatar'
                src='https://assets4.lottiefiles.com/packages/lf20_vvmyca9c.json'
                style={{transform:'scale(1.5)'}}
                >
            </lottie-player>
            </span>
            <input enterKeyHint="next" type="text" required placeholder="Enter name here..." name='name' className="input input-bordered focus:outline-secondary caret-primary focus:placeholder:invisible border-primary" id="name"/>
            <button className=" absolute bottom-2 right-2" onClick={() => document.getElementById('name').value = ''}><img src={clear} className='w-7 '/></button>
        </label>

        <textarea enterKeyHint="done" required className="textarea min-h-[200px] max-h-[200px] caret-primary focus:outline-secondary touch-pan-y border-primary" placeholder="Type message here..."></textarea>
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
      </form>

    </div>
  );
};
}

export default Contact;


