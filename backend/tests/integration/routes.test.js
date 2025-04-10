const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Corrigé ici

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /users', () => {
  it('should return status 200 and a list of users', (done) => {
    chai.request(app)
      .get('/users') // Corrigé ici aussi
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
