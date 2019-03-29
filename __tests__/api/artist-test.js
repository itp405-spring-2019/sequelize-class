const frisby = require('frisby');

const { Joi } = frisby;

it('should create an artist', function () {
  return frisby
    .post('http://localhost:8000/api/artists', {
      name: 'David'
    })
    .expect('status', 200)
    .expect('jsonTypes', 'id', Joi.number().required())
    .expect('json', 'name', 'David');
});
