const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

const Track = sequelize.define('track', {
  id: {
    field: 'TrackId',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    field: 'Name',
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

Track.prototype.serialize = function() {
  let json = this.toJSON();

  json.playlists.forEach((playlist) => {
    delete playlist.playlist_track;
  });

  return json;
};

module.exports = Track;
