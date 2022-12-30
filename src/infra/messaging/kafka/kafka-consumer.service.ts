import { Injectable,OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaCosumerService extends ServerKafka implements OnModuleDestroy {
    
    constructor(){
        super({
            client: {
                clientId: 'notifications',
                brokers: ['social-pup-9479-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'c29jaWFsLXB1cC05NDc5JOX0qOVbuKPs1SU3GVwwXMV_rtT2fcO4lTn9o6OWfF8',
                    password: '98f4b82187944ba9bef3a9c8548a4bca'
                },
                ssl: true,
            }
        });
    }   
    
    async onModuleDestroy() {
        await this.close();
    }

    
}