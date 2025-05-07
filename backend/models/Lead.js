
// const mongoose = require('mongoose');

// const leadSchema = new mongoose.Schema({
//   leadOwner: String,
//   firstName: String,
//   lastName: String,
//   company: String,
//   title: String,
//   phone: String,
//   mobile: String,
//   email: String,
//   fax: String,
//   website: String,
//   leadSource: String,
//   leadStatus: String,
//   industry: String,
//   annualRevenue: String,
//   noOfEmployees: String,
//   rating: String,
//   skypeId: String,
//   secondaryEmail: String,
//   twitter: String,
// });

// const Lead = mongoose.model('Lead', leadSchema);

// module.exports = Lead;
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  leadOwner: String,
  firstName: String,
  lastName: String,
  company: String,
  title: String,
  phone: String,
  mobile: String,
  email: String,
  fax: String,
  website: String,
  leadSource: String,
  leadStatus: String,
  industry: String,
  annualRevenue: String,
  noOfEmployees: String,
  rating: String,
  skypeId: String,
  secondaryEmail: String,
  twitter: String,
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
