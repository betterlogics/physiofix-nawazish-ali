import React from "react";
import { Link } from "react-router-dom";
import "./Nav_bar.css";
import logo from "../Assets/logo.svg";
import { VscThreeBars } from "react-icons/vsc";

function Nav_bar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler nac_btc"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" nav_ivv">
              <VscThreeBars className="tex-white nac_btc "></VscThreeBars>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img src={logo} className="nav_logo" alt="" />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/">Home</Link>

                      <i class="fa fa-caret-down"></i>
                    </a>
                    <div class="drop_c">
                      <div class="row">
                        <div class="column">
                          <h3>video appoinments</h3>
                          <p>
                            The equivalent of our in-person appointments, but
                            from anywhere! Schedule a virtual visit and let us
                            help you get where you want to be physically!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Training</h3>
                          <p>
                            Check out all of our online programs. They are
                            created with our medical and training knowledge to
                            help repair and prevent injury and enhance your
                            mobility and strength!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Custom programing</h3>
                          <p>
                            Have a specific goal and want to work 1-on-1 with
                            one of our team members? We build a 100% custom
                            program to help you with your needs and goals!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/online">Online Services</Link>
                      <i class="fa fa-caret-down"></i>
                    </a>
                    <div class="drop_c">
                      <div class="row">
                        <div class="column">
                          <h3>video appoinments</h3>
                          <p>
                            The equivalent of our in-person appointments, but
                            from anywhere! Schedule a virtual visit and let us
                            help you get where you want to be physically!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Training</h3>
                          <p>
                            Check out all of our online programs. They are
                            created with our medical and training knowledge to
                            help repair and prevent injury and enhance your
                            mobility and strength!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Custom programing</h3>
                          <p>
                            Have a specific goal and want to work 1-on-1 with
                            one of our team members? We build a 100% custom
                            program to help you with your needs and goals!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/about">About</Link>
                      <i class="fa fa-caret-down"></i>
                    </a>
                    <div class="drop_c">
                      <div class="row">
                        <div class="column">
                          <h3>video appoinments</h3>
                          <p>
                            The equivalent of our in-person appointments, but
                            from anywhere! Schedule a virtual visit and let us
                            help you get where you want to be physically!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Training</h3>
                          <p>
                            Check out all of our online programs. They are
                            created with our medical and training knowledge to
                            help repair and prevent injury and enhance your
                            mobility and strength!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Custom programing</h3>
                          <p>
                            Have a specific goal and want to work 1-on-1 with
                            one of our team members? We build a 100% custom
                            program to help you with your needs and goals!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/blog">Blog</Link>

                      <i class="fa fa-caret-down"></i>
                    </a>
                    <div class="drop_c">
                      <div class="row">
                        <div class="column">
                          <h3>video appoinments</h3>
                          <p>
                            The equivalent of our in-person appointments, but
                            from anywhere! Schedule a virtual visit and let us
                            help you get where you want to be physically!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Training</h3>
                          <p>
                            Check out all of our online programs. They are
                            created with our medical and training knowledge to
                            help repair and prevent injury and enhance your
                            mobility and strength!
                          </p>
                        </div>
                        <div class="column">
                          <h3>Custom programing</h3>
                          <p>
                            Have a specific goal and want to work 1-on-1 with
                            one of our team members? We build a 100% custom
                            program to help you with your needs and goals!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/allblogs">All Blogs</Link>
                      <i class="fa fa-caret-down"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/login">Log in</Link>
                      <i class="fa fa-caret-down"></i>
                    </a>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/signup">Sign up</Link>
                      <i class="fa fa-caret-down"></i>
                    </a>
                  </div>
                </div>
              </li>
           
              <li className="nav-item">
                <div class="navbar_1">
                  <div class="drop_d">
                    <a className="text-white">
                      <Link to="/submit">Submit</Link>
                      <i class="fa fa-caret-down"></i>
                    </a>
                  </div>
                </div>
              </li> 
           

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav_bar;
