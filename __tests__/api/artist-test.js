const frisby = require('frisby');

const { Joi } = frisby;

it('should create an artist', () => {
  return frisby
    .post('http://localhost:8000/api/artists', {
      name: 'ITP'
    })
    .expect('status', 200)
    .expect('json', 'name', 'ITP')
    .expect('jsonTypes', 'id', Joi.number().required());
});
