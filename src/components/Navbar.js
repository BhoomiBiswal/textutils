import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
//rfc also to inport react function based component
export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
         <Link className="navbar-brand" to="/">{props.title}</Link> 
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* ab jaise mujhe jome about pe navigate hona hai 
                toh neeche unn dono ke code mein a aur href ki jagah link and to */}
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/about">{props.Abouttext}</Link>
            </li> 
            </ul>
            {/* exercise 2 cutsom pallete 
            de-flex is clas sin boot strap*/}
            {/* in onclik we pass function not function call hence we ussed arrow func */}
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onclick={()=>{props.toggleMode('primary')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onclick={()=>{props.toggleMode('danger')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onclick={()=>{props.toggleMode('success')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onclick={()=>{props.toggleMode('warning')}}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>


            </div> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
    </div>
    </div>
  </div>
</nav>
    );
}
//PropTypes ka use hota hai props ka type check karne ke liye
/*❌ Agar galat type diya
<Navbar title={123} />

👉 Console me warning aayegi ⚠️

👉 Error nahi, but warning*/
Navbar.propTypes={
    title:PropTypes.string,
    Abouttext:PropTypes.string.isRequired
    //title:PropTypes.string.isRequired
    /*isse yeh hoga ki agar ab value na pass ki toh error aayega matlab default prop mat rakhna 
    uss case mein
    us required yaani usse kuch na kuch title milna chahiye undefined nahi hona chhaiye*/
}
//used when no value passed in parent component for that prop 
Navbar.defaultProps={
    title:'set title',
    Abouttext:'About'
}

