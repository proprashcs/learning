// jshint esversion: 6, node: true

"use strict";

const User  = require('../models/user');
const config  = require('./database');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      User.findOne({username: jwt_payload.username}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });

  }));

  passport.serializeUser(function(user, done) { done(null, user); });
  passport.deserializeUser(function(obj, done) { done(null, obj); });

};

