import {connect} from '@orion-js/mongodb'

const url = `${global.__MONGO_URI__}jest`
process.env.MONGO_URL = url
const connection = connect(url)

beforeEach(async () => {
  await connection.connectionPromise

  const collections = await connection.db.collections()
  for (const collection of collections) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  await connection.client.close()
})
