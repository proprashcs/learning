// jshint esversion: 6, node: true

"use strict";

const User  = require('../models/user');
const config  = require('./database');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('Authorization');
  opts.secretOrKey = config.secret;
//   console.log(opts);l
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      console.log(jwt_payload);
      User.getUserById(jwt_payload._doc._id, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
              // or you could create a new account
          }
      });
  }));
};
