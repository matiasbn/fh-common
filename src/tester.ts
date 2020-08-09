import { Test } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { JwtModule } from '@nestjs/jwt';
import { Collections } from '@utils/collections';

export class Tester {
  constructor(private readonly providers: any[]) {}

  async init() {
    const tester = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          ignoreEnvFile: true,
          validationOptions: {
            allowUnknown: true,
            abortEarly: true,
          },
        }),
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            uri: configService.get<string>('MONGODB_URI'),
          }),
        }),
        MongooseModule.forFeature(
          Object.values(Collections).map((collection) => collection)
        ),
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '3600s' },
        }),
      ],
      providers: this.providers,
    });
    return tester;
  }

  async initCompiled() {
    const tester = await this.init();
    return tester.compile();
  }

  mongooseOptions: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  async dropDatabase() {
    await mongoose.connect(process.env.MONGODB_URI, this.mongooseOptions);
    await mongoose.connection.dropDatabase();
  }

  async clearCollections() {
    await mongoose.connect(process.env.MONGODB_URI, this.mongooseOptions);
    await Promise.all(
      Object.values(Collections).map(async (collection) => {
        const counter = await mongoose.connection
          .collection(collection.name)
          .countDocuments();
        if (counter > 0)
          await mongoose.connection.collection(collection.name).drop();
      })
    );
  }
}
