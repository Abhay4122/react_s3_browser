import React from 'react';
import ReactDOM from 'react-dom';
import './my.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Form, FormControl } from 'react-bootstrap';

function Basic() {
  return (
    <>
      <div class="body_section">
        <nav className="main_navigation" id="main_navi_gation">
            <div className="">
                <div className="row pt-2 px-xxl-5 px-0">
                    <div className="col-lg-2 col-7 text-md-left text-right">
                        <div className="row">
                            <div className="col-3 bar_toggle d-lg-none d-block" id="bar_toggle_1">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            <div className="col-9">
                                <h4 className="text-bold-700 mt-1"><a href="/">LOGO</a></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 d-lg-block d-none">
                        <div className="">
                            <ul className="main_menu">
                                <li><a href="/why-hcprof" id="why-hcprof" className="text-bold-600">Why Us ?</a></li>
                                <li><a href="/" id="hc_prof_home" className="text-bold-600">Webinar</a></li>
                                <li><a href="/speaker" id="speaker" className="text-bold-600">Speaker</a></li>
                                <li><a href="/membership" id="membership" className="text-bold-600">Membership</a></li>
                                <li><a href="/blog" id="blog" className="text-bold-600">Blog</a></li>
                                <li><a href="#" className="text-bold-600" onClick="grow_pop('bot_dv');">Ask Query</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-5 text-right">
                        <button className="btn btn-outline-primary btn-circle" id="globl_serch"><i className="fa fa-search"></i></button>
                        <button className="d-md-inline-block d-none btn btn-sm btn-primary rounded-pill" onClick="sign_in();">Login</button>
                        <button className="d-md-inline-block d-none btn btn-sm btn-primary rounded-pill" onClick="subs_cribe();">Subscribe</button>
                    </div>
                </div>
            </div>
        </nav>

        {/* search div */}
        <div id="serch_dv">
          <Form>
            <FormControl type="hidden" name="serch_page" id="serch_page" />
            <FormControl type="hidden" name="spikr_nam" id="spikr_nam_val" />
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="inpt_grup_left input-group-text">&nbsp;<i class="fa fa-search"></i></span>
                </div>
                <FormControl type="search" class="serch_inpt form-control" name="serch_inpt" id="serch_inpt" />
            </div>
          </Form>
        </div>

        {/* Left nav slider */}
        <div class="nav_slider_left" id="nav_slider_left">
            <ul>
                <li><a href="#" onclick="grow_pop('bot_dv');">FAQ's</a></li>
                <li><a href="#" onclick="modal_popup('unsub_mdl');">Unsubscribe</a></li>
                <li><a href="/feedback">Feedback</a></li>
                <li><a href="#">Setting</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="#">Share <i class="fa fa-linkedin mx-2"></i> <i class="fa fa-twitter mx-2"></i> <i class="fa fa-facebook mx-2"></i></a></li>
            </ul>
        </div>

        {/* user menu slider div */}
        <div class="nav_slider_right" id="nav_slider_right">
            <ul>
                <li><a class="bg-light" href="#">Hello ! &nbsp; User</a></li>
                <li><a href="/my-account"><i class="fa fa-address-card-o mr-2"></i> My Account</a></li>
                <li><a href="/my-webinar"><i class="fa fa-video-camera mr-2"></i> My Webinar</a></li>
                <li><a href="/user-invoice"><i class="fa fa-credit-card mr-2"></i> Invoice</a></li>
                <li><a href="/followed-speaker"><i class="fa fa-users mr-2"></i> Followed Speaker</a></li>
                <li><a href="/message"><i class="fa fa-envelope-o mr-2"></i> Message</a></li>
                <li><a href="#" onclick="go_to_link('/logout/user', '')"><i class="fa fa-sign-out mr-2"></i> Logout</a></li>
            </ul>
        </div>

        {/* notification slider div */}
        {/* <div class="nav_slider_right" id="nav_slider_right2">
            <ul>
                {% for i in all_noti.all_noti %}
                    <li class="p-2" onclick="noti_fication('{{i.title}}', '{{i.msg}}', 'remove_noti/{{i.id}}')">
                        <div class="noti_dv">
                            <h6 class="text-bold-600">{{forloop.counter}} : &nbsp; {{i.title|slice:': 40'}}</h6>
                            <p class="m-0 px-2">{{i.msg|slice:': 50'}}...</p>
                            <p class="px-2 text-right font-small-1 text-danger">{{i.det}}</p>
                        </div>
                    </li>
                    {% empty %}
                        <li><a>No Notification Found</a></li>
                {% endfor %}
            </ul>
        </div> */}

        {/* Main content */}
        
        {/* {% block main %} {% endblock %} */}

        <div class="foo_ter_dv d-lg-block d-none text-center">
            <div class="py-4">
                <ul class="main_menu text-bold-600">
                    <li><a class="cursor_pointer" onclick="grow_pop('bot_dv');">FAQ's</a></li>
                    <li><a class="cursor_pointer" onclick="modal_popup('unsub_mdl');">Unsubscribe</a></li>
                    <li><a href="/feedback" id="feedback">Feedback</a></li>
                    <li><a href="#">Setting</a></li>
                    <li><a href="/disclaimer" id="disclaimer">Disclaimer</a></li>
                    <li><a href="/privacy" id="privacy">Privacy Policy</a></li>
                    <li><a href="/contactus" id="contactus">Contact Us</a></li>
                    <li><a href="#">Share <i class="fa fa-linkedin mx-2"></i> <i class="fa fa-twitter mx-2"></i> <i class="fa fa-facebook mx-2"></i></a></li>
                </ul>
            </div>
            <div>
                <a href="#" class="btn_social"><i class="fa fa-facebook"></i></a>
                <a href="#" class="btn_social"><i class="fa fa-twitter"></i></a>
                <a href="#" class="btn_social"><i class="fa fa-google"></i></a>
                <a href="#" class="btn_social"><i class="fa fa-instagram"></i></a>
                <a href="#" class="btn_social"><i class="fa fa-youtube"></i></a>
            </div>
        </div>

        <div class="tab_main_dv d-lg-none d-block">
            <div class="container-xxl">
                <div class="tab_dv">
                    <div class="row text-center">
                        {/* <div class="col p-1"> <a href="/"><img src="{% static '/images/video_conference.svg' %}" width="20px"> <br> <span class="font-small-2">Webinar</span> </a> </div>
                        <div class="col p-1"> <a href="/speaker"><img src="{% static '/images/lecturer.svg' %}" width="20px"> <br> <span class="font-small-2">Speaker</span> </a> </div>
                        <div class="col p-1"> <a href="/membership"><img src="{% static '/images/user.svg' %}" width="20px"> <br> <span class="font-small-1">Membership</span> </a> </div>
                        <div class="col p-1"> <a href="/blog"><img src="{% static '/images/e-learning.svg' %}" width="20px"> <br> <span class="font-small-2">Blog</span> </a> </div>
                        <div class="col p-1"> <a onclick="grow_pop('bot_dv');"><img src="{% static '/images/inquiry.svg' %}" width="20px"> <br> <span class="font-small-2">Query</span> </a> </div> */}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

ReactDOM.render(<Basic />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
