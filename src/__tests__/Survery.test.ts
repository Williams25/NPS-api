import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('Users', () => {

  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it('Should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'title test',
      description: 'test description'
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should be able to get all surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'title test',
      description: 'test description'
    })
    const response = await request(app).get('/surveys')

    expect(response.body.length).not.toBe(0)
  })
})