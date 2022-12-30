const { Kafka } = require('kafkajs')
const { randomUUID } = require('node:crypto')

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'test-producer',
    brokers: ['social-pup-9479-us1-kafka.upstash.io:9092'],
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'c29jaWFsLXB1cC05NDc5JOX0qOVbuKPs1SU3GVwwXMV_rtT2fcO4lTn9o6OWfF8',
        password: '98f4b82187944ba9bef3a9c8548a4bca'
    },
    ssl: true,
  })

  const producer = kafka.producer()

  await producer.connect()

  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade!',
          category: 'social',
          recipientId: randomUUID(),
        })
      },
    ],
  })

  await producer.disconnect()
}

bootstrap()