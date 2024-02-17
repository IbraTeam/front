import type { MockServerConfig } from 'mock-config-server'
import * as requests from './mock'

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type', 'authorization'],
    credentials: true
  },
  interceptors: {
    request: async ({ setDelay }) => {
      await setDelay(1000)
    }
  },
  rest: {
    configs: Object.values(requests)
  }
}

export default mockServerConfig
