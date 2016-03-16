import React, { Component } from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="aboutSection">
        <section className="row">
          <div className="col-md-8">
          <h1>About Radio Reddit</h1>
          <p>Radio for Reddit was created with one basic goal in mind:  Let's change the way the music industry does business forever.</p>
          <p>It's easier than you think. It's all about who has the power.</p>
          <p>Who do you want running the show? A Fortune 500 company eager to take the enjoyment of music and turn it into a profit game where art becomes commodity? Should it be the consultant who sits behind a desk in Florida and decides what music gets played by every commercial radio station in America? Maybe we should just hand things over to a marketing department that uses demographics and numbers to decide which artists are the most viable?</p>
          <p>At Radio for Reddit, we believe only TWO sets of people should hold the power in the music industry:  The musicians who make music, and the listeners who dig music.</p>

          <h2>Musicians have the power:</h2>
          <p>If you make music, we want to help you get it to the masses. It doesn't matter if you're 18 or 80, a bedroom musician or a studio master. We want to hear your stuff. Just upload your songs to Radio for Reddit and we make that music accessible to our listeners across the globe through our dynamic music streams and easy-to-search database.</p>
          </div>
          <div className="col-md-4">
          <h2>Listeners have the power:</h2>
          <p>Are you a music fan? We are, too. We know what it's like to hear a new band that hits your gut and speaks to your soul. Here at Radio for Reddit, artists upload new music each and every day. Listen to our streams and catch new talent as it erupts. If you hear something you like, upvote it and you'll help that song climb the charts and get heard by other fans like you. If you hear something you don't care for, downvote it and spare others from the same fate. YOUR vote counts!</p>
          <p>Radio for Reddit is devoted to our community. We're in the business of promoting art and culture in as straight-forward and transparent a manner as possible. We believe every musician on Earth deserves an equal shot at having their content heard and appreciated. We're available to every musician and music fan out there, and if you don't believe us, email our CEO right now at <a href="mailto:daniel@radioreddit.com">daniel@radioreddit.com</a> and see if he doesn't respond.</p>
          <p>We also believe in the power of open source technology and as such make <a href="https://bitbucket.org/radioreddit">our entire code base</a> available.  If you can get behind what we're trying to build here and you have the skills, we'd love to have your contribution.</p>
          <p>We encourage you to explore the site and get as excited as we are.</p>
          <p>Welcome to Radio for Reddit. The power is yours.</p>
          </div>
          <h2>Legal</h2>
          <ul>
            <li>
              <a href="#!/about/terms">Terms of Use</a>
            </li>
            <li>
              <a href="#!/about/dmca">DMCA</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
