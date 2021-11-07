import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div class={`spinner-border mx-3 text-${props.mode==='light'?'dark':'light'}`} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div className="colormode">
        <button type="button" class="btn btn-primary mx-1 ">Enable blue mode</button>
        <button type="button" class="btn btn-danger mx-2 ">Enable Red mode</button>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          <input className="form-check-input" type="checkbox" onClick={props.toggledarkmode} role="switch" id="flexSwitchCheckDefault" />  
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
        </div>
      </div>
    </nav>

  )
}
