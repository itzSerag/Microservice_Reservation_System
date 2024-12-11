import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

// always search for dynamic configs
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      // how to create mongoose options
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow('MONGODB_URI'),
      }),

      // inject the needed dependencies for the options
      // get this deps access to these services
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {

  // just abstraction for injecting the schemas once in db module 
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models)
  }
}
