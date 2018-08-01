var AV = require('leancloud-storage');
var APP_ID = 'LffNyJoouqKHLUQdcplO5eEC-gzGzoHsz';
var APP_KEY = 'RrOB7PLoKUb8jaiwSzVhO4sJ';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import {  HashRouter } from 'react-router-dom';
import App from "./App";
import './index.css'


render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById("root")
);
