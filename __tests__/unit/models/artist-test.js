const { expect } = require('chai');
const Artist = require('./../../../models/artist');

describe('artist', () => {
  describe('name', () => {
    it('should be at least 2 characters', async () => {
      try {
        let artist = new Artist({ name: 'a' });
        await artist.validate();
      } catch(error) {
        expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
      }
    });

    it('should be less than 10 characters', async () => {
      try {
        let artist = new Artist({ name: 'abcdefghij' });
        await artist.validate();
      } catch(error) {
        expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
      }
    });

    it('should pass validation when between 2 and 10 characters', async () => {
      let artist = new Artist({ name: 'David' });
      await artist.validate();
    });

    it('should only contain leters', async () => {
      try {
        let artist = new Artist({ name: '1' });
        await artist.validate();
      } catch(error) {
        expect(error.errors[0].message).to.equal('Name must only contain letters');
      }
    });
  });
});
