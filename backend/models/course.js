const Joi = require('joi');
const mongoose = require('mongoose');
// {
//   "id": 0,
//   "description": "Angular Ngrx Course",
//   "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png",
//   "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
//   "longDescription": "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
//   "category": "BEGINNER",
//   "lessonsCount": 6,
//   "promo": true
//   },
const Course = mongoose.model('Course', new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  iconUrl: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  courseListIcon: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  longDescription: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  category: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  promo: {
    type: Boolean,
    default: false
  },
  lessonsCount: {
    type: number,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateCourse(course) {
  const schema = {
    description: Joi.string().min(1).max(100).required(),
    iconUrl: Joi.string().min(1).max(500).required(),
    promo: Joi.boolean()
  };

  return Joi.validate(course, schema);
}

exports.Course = Course; 
exports.validate = validateCourse;