import React, { Component } from 'react';
import FooterLinkList from './FooterLinkList';

const Footer  = () => {
  return (
    <footer className="mainFooter">
      <div className="mainFooterContent row">
        <FooterLinkList header="Legal" link1="#!/about/terms" link2="#!/about/dmca" linktext1="Terms of Use" linktext2="DMCA" />
        <FooterLinkList header="Legal" link1="#!/about/terms" link2="#!/about/dmca" linktext1="Terms of Use" linktext2="DMCA" />
        <FooterLinkList header="Legal" link1="#!/about/terms" link2="#!/about/dmca" linktext1="Terms of Use" linktext2="DMCA" />
        <FooterLinkList header="Legal" link1="#!/about/terms" link2="#!/about/dmca" linktext1="Terms of Use" linktext2="DMCA" />
      </div>
      <div className="subFooter">
        <span>&copy;2016 Radio Reddit</span>
      </div>
    </footer>
  );
};

export default Footer;
