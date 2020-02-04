import React from "react";

const HelloBootstrap = () => (
  <div className="main-container">
    <div className="jumbotron">
      <h1>Colorado Trip</h1>
      <ul>Things to do:
        <li>ski</li>
        <li>drink warm beverages</li>
        <li>ski</li>
      </ul>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">Panel content</div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">Panel content</div>
    </div>
  </div>
);

export default HelloBootstrap;
