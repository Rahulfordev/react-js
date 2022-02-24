import React from "react";

const Home = () => {
return (  
<div className="main-page-content">
    <div id="home">
        <div id="particles-js"></div>
        <div className="home-content-main">
            <div className="table-cell">
                <div className="container">
                    <div className="row home-row">
                        <div className="col-md-12 col-sm-12">
                            <div className="home-text WOW fadeIn text-center">
                                <h1 className="cd-headline clip is-full-width">
                                    <span
                                    className="cd-words-wrapper"
                                    style={{ width: "266px", overflow: "hidden" }}
                                    >
                                        <b className="is-hidden">Learn Daily Team</b>
                                        <b className="is-hidden">Designer</b>
                                        <b className="is-visible">Developer</b>
                                    </span>
                                </h1>

                                <div className="about-social-icon text-center">
                                    <ul className="about-social">
                                        <li className="wow fadeIn" data-wow-delay='.2s'>
                                            <a target='newtab' href="https://www.facebook.com/learndailyteam">
                                                <i className="fa fa-facebook"
                                                aria-hidden='true'></i>
                                            </a>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay='.2s'>
                                            <a target='newtab' href="https://www.facebook.com/learndailyteam">
                                                <i className="fa fa-instagram"
                                                aria-hidden='true'></i>
                                            </a>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay='.2s'>
                                            <a target='newtab' href="https://www.facebook.com/learndailyteam">
                                                <i className="fa fa-linkedin"
                                                aria-hidden='true'></i>
                                            </a>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay='.2s'>
                                            <a target='newtab' href="https://www.facebook.com/learndailyteam">
                                                <i className="fa fa-twitter"
                                                aria-hidden='true'></i>
                                            </a>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay='.2s'>
                                            <a target='newtab' href="https://www.facebook.com/learndailyteam">
                                                <i className="fa fa-medium"
                                                aria-hidden='true'></i>
                                            </a>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay='.2s'>
                                            <a target='newtab' href="https://www.facebook.com/learndailyteam">
                                                <i className="fa fa-github"
                                                aria-hidden='true'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default Home;
