const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server'); 

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


describe('POST /users', () => {
    it('should return status 201 when a new user is added', (done) => {
      const newUser = { name: 'John Doe', email: 'john.doe@example.com', password: 'password123' };
  
      chai.request(app)
        .post('/users')
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.text).to.equal('Utilisateur ajouté');
          done();
        });
    });
  });

  describe('PUT /users/:id', () => {
    it('should return status 200 when an existing user is updated', (done) => {
      const updatedUser = { name: 'John Updated', email: 'john.updated@example.com', password: 'newpassword123' };
      const userId = 1; // ID de l'utilisateur à modifier (utilise un ID existant)
  
      chai.request(app)
        .put(`/users/${userId}`)
        .send(updatedUser)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Utilisateur modifié');
          done();
        });
    });
  });
  
  describe('DELETE /users/:id', () => {
    it('should return status 200 when an existing user is deleted', (done) => {
      const userId = 1; // ID de l'utilisateur à supprimer (utilise un ID existant)
  
      chai.request(app)
        .delete(`/users/${userId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Utilisateur supprimé');
          done();
        });
    });
  });
  

