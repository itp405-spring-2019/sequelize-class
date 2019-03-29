const frisby = require('frisby');

const { Joi } = frisby;

it('should return a status of 200', function () {
  return frisby
    .get('http://localhost:8000/api/tracks/5')
    .expect('status', 200);
});

it('should return a status of 404 when the track is not found', function () {
  return frisby
    .get('http://localhost:8000/api/tracks/-5')
    .expect('status', 404);
});

it('should return the track and playlists it belongs to', function () {
  return frisby
    .get('http://localhost:8000/api/tracks/5')
    .expect('json', 'name', 'Princess of the Dawn')

    // Assert *each* object in playlists array
    .expect('jsonTypes', 'playlists.*', {
      id: Joi.number().required(),
      name: Joi.string().required()
    });
});
