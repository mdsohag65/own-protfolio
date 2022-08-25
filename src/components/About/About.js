import React from 'react';
import './About.css';
import user from '../../images/user.png';

const About = () => {

    return (
        <section id='about'>
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={user} alt="" />
                    </div>
                    <div className="about-col-2">
                        <h1 className='sub-title'>About Me</h1>
                        <p>A React Developer has strong experience working with HTML, CSS, and JS (ES6). Creativity to write a better code base for reusability. Experience working with Git and GitHub. The curiosity of learning from senior developers. Passionate to adapt and learn new technology according to requirements.
                        </p>

                        <div className="tab-titles">
                            <div><p className="tab-links active-link">Skills</p>
                                <div className="tab-contents active-tab">
                                    <ul>
                                        <li><span>UI/UX</span><br />Designing web/app interfaces</li>
                                        <li><span>Web Development</span><br />Web app development</li>
                                        <li><span>App Development</span><br />Building Android/iOS apps</li>
                                    </ul>
                                </div>
                            </div>
                            <div><p className="tab-links">Experience</p>
                                <div className="tab-contents">
                                    <ul>
                                        <li><span>2022 - Current</span><br />Freelancer on Upwork</li>
                                        <li><span>February,2022</span><br />Internship at Falcon</li>
                                        <li><span>2021-2022</span><br />Web Instructor</li>
                                    </ul>
                                </div>
                            </div>
                            <div><p className="tab-links">Education</p>
                                <div className="tab-contents">
                                    <ul>
                                        <li><span>2020</span><br />BA(Hons) In English at HSTU</li>
                                        <li><span>2019</span><br />HSC from Birganj Govt College</li>
                                        <li><span>2017</span><br />SSC from Birganj Govt Pilot High School</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;