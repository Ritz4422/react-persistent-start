// employees-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const employees = new Schema({
    name: { type: String, required: true }
  });

  return mongooseClient.model('employees', employees);
};
