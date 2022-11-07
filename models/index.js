const User = require('./user');
const Destinations = require('./destinations');

User.hasMany(Destinations, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Destinations.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Destinations };
