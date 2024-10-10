const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server')
const { expect } = chai

chai.use(chaiHttp)

describe('POST /auth/local/signin', () => {
  it('should return a success message with valid credentials', (done) => {
    const validCredentials = {
      emailOrUsername: 'ajosesejoro@gmail.com',
      password: 'password123',
    }

    chai
      .request(app)
      .post('/auth/local/signin')
      .send(validCredentials)
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('message', 'Signin successful')
        expect(res.body).to.have.property('user')
        done()
      })
  })

  it('should return an error if email or username is missing', (done) => {
    const missingEmail = {
      password: 'password123',
    }

    chai
      .request(app)
      .post('/auth/local/signin')
      .send(missingEmail)
      .end((err, res) => {
        expect(res).to.have.status(400)
        expect(res.body).to.have.property('errors')
        expect(res.body.errors).to.include.deep.members([
          { msg: 'Email or username is required' },
        ])
        done()
      })
  })

  it('should return an error if password is missing', (done) => {
    const missingPassword = {
      emailOrUsername: 'alice@example.com',
    }

    chai
      .request(app)
      .post('/auth/local/signin')
      .send(missingPassword)
      .end((err, res) => {
        expect(res).to.have.status(400)
        expect(res.body).to.have.property('errors')
        expect(res.body.errors).to.include.deep.members([
          { msg: 'Password is required' },
        ])
        done()
      })
  })

  it('should return an error if credentials are invalid', (done) => {
    const invalidCredentials = {
      emailOrUsername: 'alice@example.com',
      password: 'wrongpassword',
    }

    chai
      .request(app)
      .post('/auth/local/signin')
      .send(invalidCredentials)
      .end((err, res) => {
        expect(res).to.have.status(401)
        done()
      })
  })
})
