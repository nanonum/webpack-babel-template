require("babel-polyfill");

// lib
var _ = require('lodash');


// module
import Model from './model';
const RequiredModel = require('./requiredmodel')


// import 'slick-carousel';
// import $ from 'jquery';
// import _ from 'lodash';

class Es6Class {
  constructor(name) {
    this.name = name;
  }

  // method
  meow(){
    console.log(this.name)
  }
}

$(function(){

  // jquery + lodash
  // _.each($('li'), function(el){
  //   console.log(el);
  // });

  var model = new Model();
  var requiredmodel = new RequiredModel();



  var k = new Es6Class('test');
  k.meow();
  var model = require('./model');
})
