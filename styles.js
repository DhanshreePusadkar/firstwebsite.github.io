(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n/* Namari Landing Page v.1.1.0 Style Index - a free landing page by shapingrain.com\r\n\r\n1. Default and Reset styles\r\n- 1.1 Input Elements\r\n2. Global elements\r\n- 2.1 Header\r\n- 2.2 Logo\r\n- 2.3 Buttons\r\n- 2.4 Navigation\r\n- 2.5 Social Elements\r\n- 2.6 Images\r\n3. Fonts and Headings\r\n4. Banner\r\n- 4.1 SignUp Form\r\n5. Content Elements\r\n- 5.1 Icons\r\n- 5.2 Parallax Elements\r\n- 5.3 Divider\r\n6. Landing Page Sections\r\n- 6.1 Features\r\n- 6.2 Testimonials\r\n- 6.3 Gallery\r\n- 6.4 Video\r\n- 6.5 Clients\r\n- 6.6 Pricing Table\r\n7. Footer\r\n\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 1. Defaults & Reset of specific styles across browsers */\r\n/*------------------------------------------------------------------------------------------*/\r\n*, *:before, *:after {\r\n    box-sizing: border-box;\r\n}\r\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, blockquote, th, td {\r\n    margin: 0;\r\n    padding: 0;\r\n    direction: ltr;\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-font-smoothing: antialiased;\r\n    overflow-x: hidden;\r\n}\r\np {\r\n    line-height: 25px;\r\n}\r\n.row img {\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\na {\r\n    text-decoration: none;\r\n    line-height: inherit;\r\n    transition: opacity 0.3s ease-out;\r\n}\r\niframe {\r\n    border: 0 !important;\r\n}\r\n.parallax-window {\r\n    min-height: 400px;\r\n    background: transparent;\r\n}\r\nfigure {\r\n    margin: 0;\r\n}\r\n/* Page Border */\r\n.page-border {\r\n    position: fixed;\r\n    z-index: 999999;\r\n    pointer-events: none;\r\n}\r\n.page-border .bottom-border, .page-border .left-border, .page-border .right-border, .page-border .top-border {\r\n    background: #f3f3ef;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}\r\n.page-border > .top-border, .page-border > .right-border, .page-border > .bottom-border, .page-border > .left-border {\r\n    padding: 11px;\r\n    background: #ccc;\r\n}\r\n.page-border .bottom-border, .page-border .top-border {\r\n    width: 100%;\r\n    padding: 10px;\r\n    left: 0;\r\n}\r\n.page-border .left-border, .page-border .right-border {\r\n    padding: 10px;\r\n    height: 100%;\r\n    top: 0;\r\n}\r\n.page-border .top-border {\r\n    top: 0;\r\n}\r\n.page-border .right-border {\r\n    right: 0;\r\n}\r\n.page-border .bottom-border {\r\n    bottom: 0;\r\n}\r\n.page-border .left-border {\r\n    left: 0;\r\n}\r\n#wrapper {\r\n    margin:0 15px;\r\n    padding: 15px 0;\r\n    position: relative;\r\n}\r\n/* --------- 1.1 Input Elements ---------- */\r\ninput, textarea {\r\n    border: 1px solid #e1e1e1;\r\n    padding: 10px;\r\n    transition: all .3s linear;\r\n    border-radius: 3px;\r\n}\r\ninput {\r\n    height: 40px;\r\n    margin: 3px 0;\r\n    outline: none;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n}\r\ninput[type=\"submit\"] {\r\n    cursor: pointer;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\nselect {\r\n    border: 1px solid #e1e1e1;\r\n    height: 40px;\r\n    padding: 5px;\r\n}\r\ninput:focus, textarea:focus {\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n*:focus {\r\n    outline: none;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 2. Layout Elements */\r\n/*------------------------------------------------------------------------------------------*/\r\nsection {\r\n    clear: both;\r\n    overflow: hidden;\r\n}\r\n/* Rows and Columns */\r\n.row {\r\n    max-width: 1245px;\r\n    margin: 0 auto;\r\n    padding: 75px 0;\r\n    position: relative;\r\n}\r\n.no-padding-bottom .row, .no-padding-bottom div, .no-padding-bottom.row {\r\n    padding-bottom: 0;\r\n}\r\n.no-padding-top.row, .no-padding-top div {\r\n    padding-top: 0;\r\n}\r\n.big-padding-top {\r\n    padding-top: 75px !important;\r\n}\r\n.big-padding-bottom {\r\n    padding-bottom: 85px !important;\r\n}\r\n/* Targets all elements */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding: 20px;\r\n}\r\n#clients .col-2-3 [class*='col-'] {\r\n    padding: 0;\r\n}\r\n/* Clearfix */\r\n.clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* Main Widths */\r\n.col-1 {\r\n    width: 100%;\r\n}\r\n.col-2 {\r\n    width: 50%;\r\n}\r\n.col-3 {\r\n    width: 33.33%;\r\n}\r\n.col-4 {\r\n    width: 25%;\r\n}\r\n.col-5 {\r\n    width: 20%;\r\n}\r\n.col-6 {\r\n    width: 16.6666666667%;\r\n}\r\n.col-7 {\r\n    width: 14.2857142857%;\r\n}\r\n.col-8 {\r\n    width: 12.5%;\r\n}\r\n.col-9 {\r\n    width: 11.1111111111%;\r\n}\r\n.col-10 {\r\n    width: 10%;\r\n}\r\n.col-11 {\r\n    width: 9.09090909091%;\r\n}\r\n.col-12 {\r\n    width: 8.33%;\r\n}\r\n.col-2-3 {\r\n    width: 66.66%;\r\n}\r\n.col-3-4 {\r\n    width: 75%;\r\n}\r\n.col-9-10 {\r\n    width: 90%;\r\n}\r\n/* Golden Ratio */\r\n.col-61 {\r\n    width: 61.8%;\r\n}\r\n.col-38 {\r\n    width: 38.2%;\r\n}\r\n/* --------- 2.1 Header --------- */\r\n#header {\r\n    height: 71px !important;\r\n    overflow: visible;\r\n    z-index: 9999;\r\n    width: 100%;\r\n    position: absolute !important;\r\n}\r\n#header .row {\r\n    padding: 0;\r\n}\r\n#header aside {\r\n    text-align: right;\r\n}\r\n#header ul {\r\n    text-align: center;\r\n}\r\n#header li {\r\n    display: inline-block;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n/* --------- 2.2 Logo ---------- */\r\n#logo {\r\n    float: left;\r\n    height: 71px;\r\n    line-height: 66px;\r\n    margin-right: 15px;\r\n}\r\n#logo h1, #logo h2 {\r\n    display: inline-block;\r\n}\r\n#banner #logo h1 {\r\n    font-size: 28px;\r\n    margin-right: 10px;\r\n    font-weight: 900;\r\n    padding: 0;\r\n}\r\n#logo h2 {\r\n    font-size: 18px;\r\n    padding: 0;\r\n}\r\n#logo img {\r\n    max-height: 22px;\r\n    vertical-align: middle;\r\n    margin-right: 15px;\r\n}\r\n#navigation-logo {\r\n    display: none;\r\n}\r\n.nav-solid #logo #banner-logo {\r\n    display: none;\r\n}\r\n.nav-solid #logo #navigation-logo {\r\n    display: inline-block;\r\n}\r\n/* --------- 2.3 Buttons ---------- */\r\n.call-to-action {\r\n    padding: 35px 0 35px 0;\r\n}\r\n/*Style*/\r\n.button {\r\n    font-size: 16px;\r\n    margin: 35px 0;\r\n    padding: 11px 16px;\r\n    transition: all .3s linear;\r\n    display: inline-block;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n}\r\n/* Play Button */\r\n#video-section {\r\n    position:relative;\r\n}\r\n.play-video {\r\n    height:110px;\r\n    position:absolute;\r\n    top:50%;\r\n    margin-top:-110px;\r\n    width:100%;\r\n}\r\n.play-icon {\r\n    display: inline-block;\r\n    font-size: 0px;\r\n    cursor: pointer;\r\n    margin: 45px auto;\r\n    width: 110px;\r\n    height: 110px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.play-icon:after {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    content: '';\r\n    box-sizing: content-box;\r\n}\r\n.play-icon:before {\r\n    font-family: 'fontawesome';\r\n    content: '\\f144';\r\n    speak: none;\r\n    font-size: 74px;\r\n    line-height: 110px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    display: block;\r\n    -webkit-font-smoothing: antialiased;\r\n    color:#fff;\r\n}\r\n.play-video .play-icon {\r\n    background: rgba(255, 255, 255, 0.5);\r\n    transition: background 0.4s, -webkit-transform ease-out 0.3s;\r\n    transition: transform ease-out 0.3s, background 0.4s;\r\n    transition: transform ease-out 0.3s, background 0.4s, -webkit-transform ease-out 0.3s;\r\n}\r\n.play-video .play-icon:after {\r\n    top: 0;\r\n    left: 0;\r\n    padding: 0;\r\n    z-index: -1;\r\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n}\r\n.play-video .play-icon:hover {\r\n    background: rgba(255, 255, 255, 0.05);\r\n    -webkit-transform: scale(0.93);\r\n    transform: scale(0.93);\r\n    color: #fff;\r\n}\r\n/* --------- 2.4 Navigation ---------- */\r\n#header {\r\n    font-size: 13px;\r\n}\r\n#header aside {\r\n    float: right;\r\n}\r\n#header nav ul {\r\n    text-transform: uppercase;\r\n\r\n}\r\n#header nav a {\r\n    height: 71px;\r\n    line-height: 71px;\r\n    display: block;\r\n    padding: 0 10px;\r\n}\r\n#header nav a:hover {\r\n    opacity: 0.6;\r\n}\r\n/*Navigation Solid*/\r\n#header.nav-solid [class*='col-'] {\r\n    padding: 0 20px;\r\n}\r\n#header.nav-solid {\r\n    background: #fff;\r\n    box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.2);\r\n    position: fixed !important;\r\n    left:0;\r\n}\r\n#header.nav-solid nav a {\r\n    border-bottom: 3px solid;\r\n    border-color: #fff;\r\n    transition: all 0.3s ease-out;\r\n}\r\n#header.nav-solid nav a:hover {\r\n    opacity: 1;\r\n}\r\n/* Social Elements when Solid*/\r\n#header.nav-solid .social-icons a {\r\n    transition: all 0.3s ease-out;\r\n    opacity: 0.5;\r\n}\r\n#header.nav-solid .social-icons a:hover {\r\n    opacity: 1;\r\n    color: #e4473c;\r\n}\r\n/* Responsive Nav Styling */\r\n#nav-trigger {\r\n    display: none;\r\n    text-align: right;\r\n}\r\n#nav-trigger span {\r\n    display: inline-block;\r\n    width: 38px;\r\n    height: 71px;\r\n    color: #111;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n    transition: all 0.3s ease-out;\r\n}\r\n#nav-trigger span:after {\r\n    font-family: \"fontAwesome\";\r\n    display: inline-block;\r\n    width: 38px;\r\n    height: 71px;\r\n    line-height: 75px;\r\n    text-align: center;\r\n    content: \"\\f0c9\";\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n#nav-trigger span.open:after {\r\n    content: \"\\f00d\";\r\n}\r\n#nav-trigger span:hover, .nav-solid #nav-trigger span.open:hover, .nav-solid #nav-trigger span:hover {\r\n    opacity: 0.6;\r\n}\r\n#nav-trigger span.open, #nav-trigger span.open:hover {\r\n    color: #111;\r\n}\r\n.nav-solid #nav-trigger span.open:hover {\r\n    color: #999;\r\n}\r\n.nav-solid #nav-trigger span {\r\n    color: #999;\r\n    opacity: 1;\r\n}\r\nnav#nav-mobile {\r\n    position: relative;\r\n    display: none;\r\n}\r\nnav#nav-mobile ul {\r\n    display: none;\r\n    list-style-type: none;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2);\r\n}\r\nnav#nav-mobile ul:after {\r\n    display: none;\r\n}\r\nnav#nav-mobile li {\r\n    margin: 0 20px;\r\n    float: none;\r\n    text-align: left;\r\n    border-bottom: 1px solid #e1e1e1;\r\n}\r\nnav#nav-mobile li:last-child {\r\n    border-bottom: none;\r\n}\r\n.nav-solid nav#nav-mobile li {\r\n    border-top: 1px solid #e1e1e1;\r\n    border-bottom: none;\r\n}\r\nnav#nav-mobile a {\r\n    display: block;\r\n    padding: 12px 0;\r\n    color: #333;\r\n    width: 100%;\r\n    height: auto;\r\n    line-height: normal;\r\n    display: block;\r\n    border-bottom: none !important;\r\n    transition: all 0.3s ease-out;\r\n}\r\nnav#nav-mobile a:hover {\r\n    background: #fafafa;\r\n    opacity: 1;\r\n}\r\n/* --------- 2.5 Social Elements ---------- */\r\n#header .col-4 {\r\n    text-align: right;\r\n}\r\n.social-icons {\r\n    display: inline-block;\r\n    list-style: none;\r\n}\r\n.social-icons a {\r\n    display: inline-block;\r\n    width: 32px;\r\n    text-align: center;\r\n}\r\n.social-icons a:hover {\r\n    opacity: 0.7;\r\n}\r\n.social-icons span {\r\n    display: none;\r\n}\r\n#header .social-icons {\r\n    margin-top: 27px;\r\n}\r\n/* --------- 2.6 Images ---------- */\r\n/*Alignment*/\r\nimg {\r\n    vertical-align: top;\r\n}\r\n.image-center {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\na img {\r\n    border: none;\r\n    transition: all 0.3s ease-out;\r\n    -webkit-backface-visibility: hidden;\r\n}\r\na img:hover {\r\n    opacity: 0.7;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 3. Fonts */\r\n/*------------------------------------------------------------------------------------------*/\r\nh1 {\r\n    padding: 20px 0;\r\n}\r\nh2 {\r\n    padding: 14px 0;\r\n}\r\nh3 {\r\n    padding: 10px 0;\r\n}\r\nh4 {\r\n    padding: 7px 0;\r\n}\r\nh5 {\r\n    padding: 7px 0;\r\n}\r\nh6 {\r\n    padding: 7px 0;\r\n}\r\n/* Text Alignment */\r\n.text-left {\r\n    text-align: left;\r\n}\r\n.text-center {\r\n    text-align: center;\r\n}\r\n.text-right {\r\n    text-align: right;\r\n}\r\n/* Section Headings */\r\n.section-heading {\r\n    padding: 0 0 15px 0;\r\n}\r\n.section-subtitle {\r\n    font-size: 18px;\r\n    padding-top: 0;\r\n}\r\n.section-heading h3 {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #ccc;\r\n    letter-spacing: 2px;\r\n    padding-bottom: 0;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 4. Banner */\r\n/*------------------------------------------------------------------------------------------*/\r\n#banner {\r\n    background-size: cover;\r\n}\r\n#banner-content.row {\r\n    padding-top: 170px;\r\n    padding-bottom: 100px;\r\n}\r\n#banner h1 {\r\n    padding-top: 5%;\r\n}\r\n#banner .section-heading:before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 30px;\r\n    height: 5px;\r\n    margin-top: 30px;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 5. Content Elements */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* --------- 5.1 Icons ---------- */\r\n/*Font Icon sizes*/\r\n.fa-1x {\r\n    font-size: 15px !important;\r\n}\r\n/*Icon Block*/\r\n.icon-block {\r\n    position: relative;\r\n}\r\n.icon-block h4 {\r\n    font-weight: bold;\r\n    padding-top: 0;\r\n}\r\n.icon-block .icon {\r\n    position: absolute;\r\n}\r\n.icon-block p {\r\n    margin-top: 0;\r\n}\r\n/* Icon Left*/\r\n.icon-left .icon {\r\n    left: 15;\r\n}\r\n.icon-left .icon-block-description {\r\n    padding-left: 53px;\r\n}\r\n/* Icon Right */\r\n.icon-right .icon {\r\n    right: 15;\r\n}\r\n.icon-right .icon-block-description {\r\n    padding-right: 53px;\r\n}\r\n/* Icon Above */\r\n.icon-top {\r\n    display: block;\r\n}\r\n.icon-top .icon {\r\n    position: relative;\r\n    display: block;\r\n}\r\n.icon-top .icon-block-description {\r\n    padding-top: 25px;\r\n}\r\n/* --------- 5.2 Parallax Elements ---------- */\r\n.banner-parallax-1, .banner-parallax-2, .banner-parallax-3 {\r\n    min-height: 350px;\r\n}\r\n/* --------- 5.3 Divider ---------- */\r\n.divider {\r\n    position: relative;\r\n    width: 40%;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    margin: 10px auto 5px auto;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\n.divider-inner {\r\n    position: absolute;\r\n    height: 1px;\r\n    width: 100%;\r\n    top: 50%;\r\n    margin-top: -1px;\r\n    border-top: 1px solid;\r\n    border-color: #e1e1e1;\r\n}\r\n.divider i {\r\n    background: #fff;\r\n    position: relative;\r\n    top: -11px;\r\n    padding: 0 5px 0 5px;\r\n    color: #e1e1e1;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 6. Landing Page Sections */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* --------- 6.1 Introduction ---------- */\r\n.introduction img.featured {\r\n    padding: 55px 0 0 0;\r\n}\r\n/* --------- 6.2 Features ---------- */\r\n.features.row {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n.features div:nth-child(4) {\r\n    clear: both;\r\n}\r\n/* --------- 6.3 Testimonials ---------- */\r\n.testimonial {\r\n    padding: 15px;\r\n}\r\nblockquote {\r\n    position: relative;\r\n}\r\n.testimonial img {\r\n    max-height: 120px;\r\n    border-radius: 250em;\r\n}\r\n.testimonial footer {\r\n    padding-top: 12px;\r\n}\r\n/* Style Classic - Avatar above Testimonial */\r\n.testimonial.classic img {\r\n    display: inline-block;\r\n    margin-bottom: 25px;\r\n}\r\n.testimonial.classic q {\r\n    display: block;\r\n}\r\n.testimonial.classic footer:before {\r\n    display: block;\r\n    content: \"\";\r\n    width: 30px;\r\n    height: 4px;\r\n    margin: 10px auto 15px auto;\r\n}\r\n/* Style Big */\r\n.testimonial.bigtest {\r\n    padding-top: 0;\r\n}\r\n.testimonial.bigtest q {\r\n    font-size: 22px;\r\n}\r\n/* --------- 6.4 Gallery ---------- */\r\n#gallery img {\r\n    max-height: 300px;\r\n}\r\n#gallery [class*='col-'] {\r\n    padding: 0;\r\n}\r\n#gallery a {\r\n    display: inline-block;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n#gallery a:hover img {\r\n    opacity: 0.15;\r\n    -moz-backface-visibility: hidden;\r\n}\r\n#gallery a:before {\r\n    font-size: 2.2em;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    content: \"+\";\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 100em;\r\n    display: block;\r\n    position: absolute;\r\n    top: 55%;\r\n    left: 50%;\r\n    line-height: 72px;\r\n    margin: -35px 0 0 -35px;\r\n    opacity: 0;\r\n    transition: all .2s linear;\r\n    vertical-align: middle;\r\n}\r\n#gallery a:hover:before {\r\n    opacity: 1;\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n/**\r\n * Featherlight – ultra slim jQuery lightbox\r\n * Version 1.3.3 - http://noelboss.github.io/featherlight/\r\n *\r\n * Copyright 2015, Noël Raoul Bossart (http://www.noelboss.com)\r\n * MIT Licensed.\r\n**/\r\n@media all {\r\n    .featherlight {\r\n        display: none;\r\n\r\n        /* dimensions: spanning the background from edge to edge */\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        z-index: 2147483647; /* z-index needs to be >= elements on the site. */\r\n\r\n        /* position: centering content */\r\n        text-align: center;\r\n\r\n        /* insures that the ::before pseudo element doesn't force wrap with fixed width content; */\r\n        white-space: nowrap;\r\n\r\n        /* styling */\r\n        cursor: pointer;\r\n        background: #333;\r\n        /* IE8 \"hack\" for nested featherlights */\r\n        background: rgba(0, 0, 0, 0);\r\n    }\r\n\r\n    /* support for nested featherlights. Does not work in IE8 (use JS to fix) */\r\n    .featherlight:last-of-type {\r\n        background: rgba(0, 0, 0, 0.8);\r\n    }\r\n\r\n    .featherlight:before {\r\n        /* position: trick to center content vertically */\r\n        content: '';\r\n        display: inline-block;\r\n        height: 100%;\r\n        vertical-align: middle;\r\n        margin-right: -0.25em;\r\n    }\r\n\r\n    .featherlight .featherlight-content {\r\n\r\n        /* position: centering vertical and horizontal */\r\n        text-align: left;\r\n        vertical-align: middle;\r\n        display: inline-block;\r\n\r\n        /* dimensions: cut off images */\r\n        overflow: auto;\r\n        padding: 25px 0;\r\n        border-bottom: 25px solid transparent;\r\n\r\n        /* dimensions: handling small or empty content */\r\n        min-width: 30%;\r\n\r\n        /* dimensions: handling large content */\r\n        margin-left: 5%;\r\n        margin-right: 5%;\r\n        max-height: 95%;\r\n\r\n        /* styling */\r\n        cursor: auto;\r\n\r\n        /* reset white-space wrapping */\r\n        white-space: normal;\r\n    }\r\n\r\n    /* contains the content */\r\n    .featherlight .featherlight-inner {\r\n        /* make sure its visible */\r\n        display: block;\r\n    }\r\n\r\n    .featherlight .featherlight-close-icon {\r\n        /* position: centering vertical and horizontal */\r\n        position: absolute;\r\n        z-index: 9999;\r\n        top: 25px;\r\n        right: 25px;\r\n\r\n        /* dimensions: 25px x 25px */\r\n        line-height: 25px;\r\n        width: 25px;\r\n\r\n        /* styling */\r\n        cursor: pointer;\r\n        text-align: center;\r\n        color: #fff;\r\n        font-family: \"fontawesome\";\r\n        font-size: 22px;\r\n        opacity: 0.5;\r\n        transition: all 0.3s ease-out;\r\n    }\r\n\r\n    .featherlight .featherlight-close-icon:hover {\r\n        opacity: 1;\r\n    }\r\n\r\n    .featherlight .featherlight-image {\r\n        /* styling */\r\n        max-height: 100%;\r\n        max-width:100%;\r\n    }\r\n\r\n    .featherlight-iframe .featherlight-content {\r\n        /* removed the border for image croping since iframe is edge to edge */\r\n        border-bottom: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    .featherlight iframe {\r\n        /* styling */\r\n        border: none;\r\n    }\r\n}\r\n/* handling phones and small screens */\r\n@media only screen and (max-width: 1024px) {\r\n    .featherlight .featherlight-content {\r\n        /* dimensions: maximize lightbox with for small screens */\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n        max-height: 98%;\r\n\r\n        padding: 10px 10px 0;\r\n        border-bottom: 10px solid transparent;\r\n    }\r\n\r\n}\r\n/* Gallery Styling */\r\n@media all {\r\n    .featherlight-next,\r\n    .featherlight-previous {\r\n        font-family: \"fontawesome\";\r\n        font-size: 22px;\r\n        display: block;\r\n        position: absolute;\r\n        top: 25px;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 80%;\r\n        cursor: pointer;\r\n        /* preventing text selection */\r\n        -webkit-touch-callout: none;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        user-select: none;\r\n        /* IE9 hack, otherwise navigation doesn't appear */\r\n        background: rgba(0, 0, 0, 0);\r\n        transition: all 0.3s ease-out;\r\n    }\r\n\r\n    .featherlight-previous {\r\n        left: 0;\r\n        right: 80%;\r\n    }\r\n\r\n    .featherlight-next span,\r\n    .featherlight-previous span {\r\n        display: inline-block;\r\n        opacity: 0.3;\r\n        position: absolute;\r\n        top: 50%;\r\n        width: 100%;\r\n        font-size: 80px;\r\n        line-height: 80px;\r\n\r\n        /* center vertically */\r\n        margin-top: -40px;\r\n        color: #fff;\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        transition: all 0.3s ease-out;\r\n    }\r\n\r\n    .featherlight-next span {\r\n        text-align: right;\r\n        left: auto;\r\n        right: 7%;\r\n    }\r\n\r\n    .featherlight-previous span {\r\n        text-align: left;\r\n        left: 7%;\r\n    }\r\n\r\n    .featherlight-next:hover span,\r\n    .featherlight-previous:hover span {\r\n        display: inline-block;\r\n        opacity: 1;\r\n    }\r\n\r\n    /* Hide navigation while loading */\r\n    .featherlight-loading .featherlight-previous, .featherlight-loading .featherlight-next {\r\n        display: none;\r\n    }\r\n}\r\n/* Always display arrows on touch devices */\r\n@media only screen and (max-device-width: 1024px) {\r\n    .featherlight-next:hover,\r\n    .featherlight-previous:hover {\r\n        background: none;\r\n    }\r\n\r\n    .featherlight-next span,\r\n    .featherlight-previous span {\r\n        display: block;\r\n    }\r\n}\r\n/* handling phones and small screens */\r\n@media only screen and (max-width: 1024px) {\r\n    .featherlight-next,\r\n    .featherlight-previous {\r\n        top: 10px;\r\n        right: 10px;\r\n        left: 85%;\r\n    }\r\n\r\n    .featherlight-previous {\r\n        left: 10px;\r\n        right: 85%;\r\n    }\r\n\r\n    .featherlight-next span,\r\n    .featherlight-previous span {\r\n        margin-top: -30px;\r\n        font-size: 40px;\r\n    }\r\n}\r\n/* --------- 6.5 Video ---------- */\r\n#video-box {\r\n    color:#fff;\r\n    position:relative;\r\n    overflow:hidden;\r\n    text-align:center;\r\n}\r\n.video_container, .easyContainer {\r\n    position: relative;\r\n    padding-bottom: 56.25%; /* 16/9 ratio */\r\n    margin: 0;\r\n    padding-top: 0; /* IE6 workaround*/\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n.video_container iframe, .video_container object, .video_container embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n}\r\n.slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\r\n    width: 100% !important;\r\n    height: 529px !important;\r\n}\r\n.videojs-background-wrap {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -998;\r\n}\r\n#slvj-window {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    z-index: 9999999999;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n#slvj-window,\r\n#slvj-window * {\r\n    box-sizing: border-box;\r\n}\r\n#slvj-background-close {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    z-index: 31;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n#slvj-back-lightbox {\r\n    max-width: 940px;\r\n    max-height: 529px;\r\n    z-index: 32;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n.slvj-lightbox {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    z-index: 53;\r\n}\r\n#slvj-close-icon:before {\r\n    font-family: \"fontawesome\";\r\n    color: #fff;\r\n    content: '\\f00d';\r\n    font-size: 22px;\r\n    opacity: 0.5;\r\n    transition: all 0.3s ease-out;\r\n    z-index: 99999;\r\n    height: 22px;\r\n    width: 22px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    cursor: pointer;\r\n}\r\n#slvj-close-icon:before:hover {\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n/* --------- 6.6 Clients ---------- */\r\n#clients a {\r\n    display: block;\r\n    text-align: center;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #fff;\r\n}\r\n#clients img {\r\n    display: inline-block;\r\n    padding: 15px 25px;\r\n}\r\n.client-overlay {\r\n    background: rgba(0, 0, 0, 0.8);\r\n    position: absolute;\r\n    top:0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s ease-out;\r\n}\r\n#clients a:hover .client-overlay {\r\n    opacity: 1;\r\n}\r\n.client-overlay span {\r\n    position: absolute;\r\n    top: 48%;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n/* --------- 6.7 Pricing Table ---------- */\r\n.pricing-block-content {\r\n    background: #fff;\r\n    padding: 25px 0 25px 0;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n    transition: all 0.2s ease-in-out 0s;\r\n    position: relative;\r\n    border: 10px solid #fff;\r\n}\r\n.pricing-block ul {\r\n    list-style: none;\r\n    margin: 25px 0 25px 0;\r\n}\r\n.pricing-block li {\r\n    padding: 14px 0;\r\n    border-bottom: 1px dotted #e1e1e1;\r\n}\r\n.pricing-block li:last-of-type {\r\n    border:none;\r\n}\r\n.pricing-block h3 {\r\n    font-size:17px;\r\n    text-transform:uppercase;\r\n    padding-bottom:0;\r\n}\r\n.pricing-sub {\r\n    font-style: italic;\r\n    color:#ccc;\r\n    margin:0 0 25px 0;\r\n}\r\n/*Price*/\r\n.pricing {\r\n    background: #f5f5f5;\r\n    padding: 25px;\r\n    position: relative;\r\n}\r\n.price {\r\n    display: inline-block;\r\n    font-size: 62px;\r\n    font-weight: 700;\r\n    position: relative;\r\n}\r\n.price span {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -20px;\r\n    font-size: 22px;\r\n}\r\n.pricing  p {\r\n    font-style:italic;\r\n    color:#b4b4b4;\r\n    line-height:auto;\r\n    margin:0;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 7. Footer */\r\n/*------------------------------------------------------------------------------------------*/\r\n#landing-footer {\r\n    clear: both;\r\n}\r\n#landing-footer .row {\r\n    padding: 0;\r\n}\r\n#landing-footer p {\r\n    margin: 0;\r\n}\r\n#landing-footer ul {\r\n    list-style: none;\r\n    text-align: right;\r\n}\r\n#landing-footer li {\r\n    display: inline-block;\r\n}\r\n/* Scroll Up */\r\n#scrollUp {\r\n    bottom: 15px;\r\n    right: 30px;\r\n    width: 70px;\r\n    height: 80px;\r\n    margin-bottom: -10px;\r\n    padding: 0 5px 20px 5px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    transition: margin-bottom 150ms linear;\r\n}\r\n#scrollUp:hover {\r\n    margin-bottom: 0;\r\n}\r\n#scrollUp:before {\r\n    background: #ccc;\r\n    font-family: \"fontawesome\";\r\n    font-size: 2.4em;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    color: #fff;\r\n    width: 45px;\r\n    height: 45px;\r\n    display: inline-block;\r\n    line-height: 45px;\r\n    content: \"\\f106\";\r\n    opacity: 1;\r\n}\r\n/*Preloader*/\r\n#preloader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #fff; /* change if the mask should have another color then white */\r\n    z-index: 99999; /* makes sure it stays on top */\r\n}\r\n#status {\r\n    width: 110px;\r\n    height: 110px;\r\n    position: absolute;\r\n    left: 50%; /* centers the loading animation horizontally one the screen */\r\n    top: 50%; /* centers the loading animation vertically one the screen */\r\n    background-position: center;\r\n    margin: -55px 0 0 -55px; /* is width and height divided by two */\r\n    text-align: center;\r\n}\r\n/*!\r\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\r\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\r\n * Licensed under MIT\r\n */\r\n.la-ball-triangle-path,\r\n.la-ball-triangle-path > div {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n.la-ball-triangle-path {\r\n    display: block;\r\n    font-size: 0;\r\n    color: #fff;\r\n}\r\n.la-ball-triangle-path.la-dark {\r\n    color: #333;\r\n}\r\n.la-ball-triangle-path > div {\r\n    display: inline-block;\r\n    float: none;\r\n    background-color: currentColor;\r\n    border: 0 solid currentColor;\r\n}\r\n.la-ball-triangle-path {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n.la-ball-triangle-path > div {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 100%;\r\n}\r\n.la-ball-triangle-path > div:nth-child(1) {\r\n    -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\r\n    animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\r\n}\r\n.la-ball-triangle-path > div:nth-child(2) {\r\n    -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\r\n    animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\r\n}\r\n.la-ball-triangle-path > div:nth-child(3) {\r\n    -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\r\n    animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\r\n}\r\n.la-ball-triangle-path.la-sm {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n.la-ball-triangle-path.la-sm > div {\r\n    width: 4px;\r\n    height: 4px;\r\n}\r\n.la-ball-triangle-path.la-2x {\r\n    width: 64px;\r\n    height: 64px;\r\n}\r\n.la-ball-triangle-path.la-2x > div {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.la-ball-triangle-path.la-3x {\r\n    width: 96px;\r\n    height: 96px;\r\n}\r\n.la-ball-triangle-path.la-3x > div {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n/*\r\n * Animations\r\n */\r\n@-webkit-keyframes ball-triangle-path-ball-one {\r\n    0% {\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n    17% {\r\n        opacity: .25;\r\n    }\r\n    33% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n    50% {\r\n        opacity: .25;\r\n    }\r\n    66% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n    83% {\r\n        opacity: .25;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n}\r\n@keyframes ball-triangle-path-ball-one {\r\n    0% {\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n    17% {\r\n        opacity: .25;\r\n    }\r\n    33% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n    50% {\r\n        opacity: .25;\r\n    }\r\n    66% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n    83% {\r\n        opacity: .25;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n}\r\n@-webkit-keyframes ball-triangle-path-ball-two {\r\n    0% {\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n    17% {\r\n        opacity: .25;\r\n    }\r\n    33% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n    50% {\r\n        opacity: .25;\r\n    }\r\n    66% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n    83% {\r\n        opacity: .25;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n}\r\n@keyframes ball-triangle-path-ball-two {\r\n    0% {\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n    17% {\r\n        opacity: .25;\r\n    }\r\n    33% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n    50% {\r\n        opacity: .25;\r\n    }\r\n    66% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n    83% {\r\n        opacity: .25;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n}\r\n@-webkit-keyframes ball-triangle-path-ball-tree {\r\n    0% {\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n    17% {\r\n        opacity: .25;\r\n    }\r\n    33% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n    50% {\r\n        opacity: .25;\r\n    }\r\n    66% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n    83% {\r\n        opacity: .25;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n}\r\n@keyframes ball-triangle-path-ball-tree {\r\n    0% {\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n    17% {\r\n        opacity: .25;\r\n    }\r\n    33% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(0, 220%);\r\n        transform: translate(0, 220%);\r\n    }\r\n    50% {\r\n        opacity: .25;\r\n    }\r\n    66% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(110%, 0);\r\n        transform: translate(110%, 0);\r\n    }\r\n    83% {\r\n        opacity: .25;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translate(220%, 220%);\r\n        transform: translate(220%, 220%);\r\n    }\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* Responsive Elements */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* =Media Queries for Nav\r\n===============================*/\r\n@media all and (max-width: 1024px) {\r\n    #nav-trigger {\r\n        display: block;\r\n    }\r\n\r\n    nav#nav-main {\r\n        display: none;\r\n    }\r\n\r\n    nav#nav-mobile {\r\n        display: block;\r\n    }\r\n\r\n    nav#nav-mobile li {\r\n        display: block;\r\n    }\r\n\r\n    #header aside {\r\n        display: none;\r\n    }\r\n}\r\n/* Landscape mobile & down\r\n===============================*/\r\n@media (max-width: 480px) {\r\n\r\n    #wrapper {\r\n        margin:0;\r\n        padding:0;\r\n    }\r\n\r\n    .page-border, #scrollUp, #scrollUp:before {\r\n        display:none;\r\n    }\r\n\r\n    .row {\r\n        padding: 15px !important;\r\n    }\r\n\r\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-2-3, .col-3-4, .col-9-10, .col-61, .col-38, .row {\r\n        width: 100%;\r\n    }\r\n\r\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-2-3, .col-3-4, .col-9-10, .col-61, .col-38 {\r\n        padding-right: 0;\r\n        padding-left: 0;\r\n    }\r\n\r\n    /*-----------------Header Elements-----------------*/\r\n    #header .row {\r\n        padding: 0 15px !important;\r\n    }\r\n\r\n    #header.nav-solid [class*=\"col-\"] {\r\n        padding: 0;\r\n    }\r\n\r\n    /*Logo*/\r\n    #logo h2 {\r\n        padding: 0;\r\n    }\r\n\r\n    /* Social */\r\n    #header aside {\r\n        clear: both;\r\n        padding: 0;\r\n    }\r\n\r\n    #header ul.social-icons {\r\n        margin-top: 0;\r\n    }\r\n\r\n    #banner-content.row {\r\n        padding-top: 85px !important;\r\n    }\r\n\r\n    /*-----------------Sections-----------------*/\r\n\r\n    /* Call to Action*/\r\n    .call-to-action {\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    /* Video */\r\n    .slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\r\n        height: 270px !important;\r\n    }\r\n\r\n    /* Footer */\r\n    #landing-footer #copyright {\r\n        float: left;\r\n        width: 50%;\r\n    }\r\n\r\n    #landing-footer .social-icons {\r\n        float: right;\r\n        width: 50%;\r\n    }\r\n\r\n    /*-----------------Typography-----------------*/\r\n    h1 {\r\n        font-size: 38px;\r\n    }\r\n\r\n    #banner h1 {\r\n        font-size: 48px;\r\n    }\r\n\r\n    /* Hide Elements */\r\n    a#scrollUp {\r\n        display: none !important;\r\n    }\r\n\r\n}\r\n/* Mobile to Tablet Portrait\r\n===============================*/\r\n@media (min-width: 480px) and (max-width: 767px) {\r\n\r\n    #wrapper {\r\n        margin:0;\r\n        padding:0;\r\n    }\r\n\r\n    .page-border, #scrollUp, #scrollUp:before {\r\n        display:none;\r\n    }\r\n\r\n\r\n    .row {\r\n        padding: 15px 0 !important;\r\n    }\r\n\r\n    .col-1, .col-2, .col-5, .col-7, .col-9, .col-11, .col-2-3, .col-3-4, .col-61, .col-38, .row {\r\n        width: 100%;\r\n    }\r\n\r\n    .col-3, .col-4, .col-6, .col-8, .col-10, .col-12 {\r\n        width: 50%;\r\n    }\r\n\r\n    /*-----------------Header Elements-----------------*/\r\n    #header .row {\r\n        padding: 0 !important;\r\n    }\r\n\r\n    #header aside {\r\n        display: inline-block;\r\n        position: absolute;\r\n        top: 40px;\r\n        right: 60px;\r\n        padding-top:3px;\r\n        padding-right: 5px;\r\n    }\r\n\r\n    #header.nav-solid aside {\r\n        top: 20px;\r\n    }\r\n\r\n    #header aside ul {\r\n        margin-top: 0 !important;\r\n        padding-top: 6px;\r\n    }\r\n\r\n    #banner-content.row {\r\n        padding-top: 85px !important;\r\n    }\r\n\r\n    /*Navigation*/\r\n    nav#nav-mobile ul {\r\n        margin-left: -40px;\r\n        margin-right: -40px;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n\r\n    /*-----------------Sections-----------------*/\r\n\r\n    /* Video */\r\n    .slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\r\n        height: 370px !important;\r\n    }\r\n\r\n    /* Footer */\r\n    #landing-footer #copyright {\r\n        float: left;\r\n        width: 50%;\r\n    }\r\n\r\n    #landing-footer .social-icons {\r\n        float: right;\r\n        width: 50%;\r\n    }\r\n\r\n}\r\n/* Landscape Tablet to Desktop\r\n===============================*/\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n\r\n    #wrapper {\r\n        margin:0;\r\n        padding:0;\r\n    }\r\n\r\n    .page-border {\r\n        display:none;\r\n    }\r\n\r\n    .big-padding-top {\r\n        padding-top: 45px !important;\r\n    }\r\n\r\n    /*-----------------Header Elements-----------------*/\r\n    #header aside {\r\n        display: inline-block;\r\n        position: absolute;\r\n        top: 40px;\r\n        right: 60px;\r\n        padding-top:3px;\r\n        padding-right: 5px;\r\n    }\r\n\r\n    #header.nav-solid aside {\r\n        top: 20px;\r\n    }\r\n\r\n    #header aside ul {\r\n        margin-top: 0 !important;\r\n        padding-top: 6px;\r\n    }\r\n\r\n    /*Navigation*/\r\n    nav#nav-mobile ul {\r\n        margin-left: -40px;\r\n        margin-right: -40px;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n\r\n    /*-----------------Sections-----------------*/\r\n\r\n    /* Video */\r\n    .slvj-lightbox iframe, .slvj-lightbox object, .slvj-lightbox embed {\r\n        height: 432px !important;\r\n    }\r\n\r\n}\r\n/* Namari Landing Page Dynamic Style Index\r\n\r\n1. Website Default Styling\r\n2. Navigation\r\n3. Primary and Secondary Colors\r\n4. Banner\r\n5. Typography\r\n6. Buttons\r\n7. Footer\r\n\r\n\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 1. Website Default Styling */\r\n/*------------------------------------------------------------------------------------------*/\r\nbody {\r\n    background:#fff;\r\n}\r\n/* Default Link Color */\r\na, .la-ball-triangle-path {\r\n    color:#d2b356;\r\n}\r\na:hover, #header.nav-solid nav a:hover {\r\n    color:#d2b356;\r\n}\r\n/* Default Icon Color */\r\n.icon i {\r\n    color:#d2b356;\r\n}\r\n/* Border Color */\r\n#banner .section-heading:before, .testimonial.classic footer:before {\r\n    background: #d2b356;\r\n}\r\n.pricing-block-content:hover {\r\n    border-color:#d2b356;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 2. Navigation */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* Transparent Navigation Color on a Banner */\r\n#header nav a, #header i {\r\n    color:#111;\r\n}\r\n/* Navigation Colors when the Navigation is sticky and solid */\r\n#header.nav-solid, #header.nav-solid a, #header.nav-solid i, #nav-mobile ul li a {\r\n    color:#333;\r\n}\r\n/* Navigation Active State */\r\n#header.nav-solid .active {\r\n    color: #d2b356;\r\n    border-color: #d2b356;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 3. Primary and Secondary Colors */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* Primary Background and Text Colors */\r\n.primary-color, .featured .pricing {\r\n    background-color:#d2b356;\r\n}\r\n.primary-color, .primary-color .section-title, .primary-color .section-subtitle, .featured .pricing, .featured .pricing p {\r\n    color:#fff;    \r\n}\r\n.section-heading h2:after {\r\n    background:#d2b356;\r\n    content:\"\";\r\n    display:block;\r\n    width:30px;\r\n    height:5px;\r\n    margin-top:30px;\r\n}\r\n.text-center .section-heading h2:after {\r\n    margin:30px auto 25px auto;\r\n}\r\n/* Primary Icon Colors */\r\n.primary-color .icon i, .primary-color i {\r\n    color:#fff;\r\n}\r\n/* Secondary Background and Text Colors */\r\n.secondary-color {\r\n    background-color:#f5f5f5;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 4. Banner */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* Banner Background and Text Colors */\r\n#banner {\r\n    background: url('banner-image-1.jpg') no-repeat center top;\r\n    background-size:cover;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 5. Typography */\r\n/*------------------------------------------------------------------------------------------*/\r\nbody {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size:15px;\r\n    font-weight:normal;\r\n    color:#111;\r\n}\r\n/* Logo, if you are using Fonts as Logo and not image\r\n\r\n#logo h1 {\r\n    font-family:;\r\n    font-size:; \r\n    font-weight:;\r\n    color:;\r\n}\r\n\r\n#logo h2 {\r\n    font-family:;\r\n    font-size:; \r\n    font-weight:;\r\n    color:;\r\n}\r\n\r\n*/\r\n/* Banner Typography */\r\n#banner h1 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size:62px;\r\n    line-height:60px;\r\n    font-weight:800;\r\n    color:#111;\r\n}\r\n#banner h2 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size:18px;\r\n    font-weight:300;\r\n    color:#111;\r\n}\r\n/* Section Title and Subtitle */\r\n.section-title {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 34px; \r\n    font-weight:700;\r\n    color:#111;\r\n}\r\n.section-subtitle {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 16px;\r\n    font-weight:300;\r\n    color:#9c9c9c;\r\n}\r\n/* Testimonial */\r\n.testimonial q {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 17px; \r\n    font-weight:300;\r\n}\r\n.testimonial.classic q, .testimonial.classic footer {\r\n    color:#111;\r\n}\r\n/* Standard Headings h1-h6 */\r\nh1 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 40px; \r\n    font-weight:300;\r\n    color:#111;\r\n}\r\nh2 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 34px; \r\n    font-weight:300;\r\n    color:#111;\r\n}\r\nh3 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 30px; \r\n    font-weight:700;\r\n    color:#111;\r\n}\r\nh4 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 18px; \r\n    font-weight:400;\r\n    color:#111;\r\n}\r\nh5 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 16px; \r\n    font-weight:400;\r\n    color:#111;\r\n}\r\nh6 {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size: 14px; \r\n    font-weight:400;\r\n    color:#111;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 6. Buttons */\r\n/*------------------------------------------------------------------------------------------*/\r\n/* ----------Default Buttons---------- */\r\n/* Button Text */\r\n.button, input[type=\"submit\"]  {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size:14px;\r\n    font-weight:bold;\r\n    color:#111;\r\n}\r\n/* Button Color */\r\n.button, input[type=\"submit\"] {\r\n    border-color:#111;\r\n}\r\n/* Button Hover Color */\r\n.button:hover,  input[type=\"submit\"]:hover {\r\n    border-color:#d2b356;\r\n    color:#d2b356;\r\n}\r\n/* ----------Banner Buttons---------- */\r\n/* Button Text */\r\n#banner .button {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size:16px;\r\n    color:#111;\r\n}\r\n/* Button Color */\r\n#banner .button {\r\n    border-color:#111;\r\n}\r\n/* Button Hover Color */\r\n#banner .button:hover {\r\n    color:#d2b356;\r\n    border-color:#d2b356;\r\n}\r\n/*------------------------------------------------------------------------------------------*/\r\n/* 7. Footer */\r\n/*------------------------------------------------------------------------------------------*/\r\n#landing-footer, #landing-footer p, #landing-footer a {\r\n    font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n    font-size:12px;\r\n    font-weight:normal;\r\n    color:#999;\r\n}\r\n/* Footer Icon Color */\r\n#landing-footer i {\r\n    color:#999;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DHANSHREE\MY PROJECT FILE\ANGULAR\firstwebsite\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map