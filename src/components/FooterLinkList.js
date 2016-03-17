import React, { Component } from 'react';

const FooterLinkList = (props) => {
  return (
    <div className="col-md-3 col-sm-3">
      <h4>{props.header}</h4>
      <ul>
        <li>
          <a href={props.link1}>{props.linktext1}</a>
        </li>
        <li>
          <a href={props.link2}>{props.linktext2}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinkList;
