import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://laybacksound:${process.env.DB_PASSWORD}@cluster0.rtqo185.mongodb.net/?retryWrites=true&w=majority`,
    ),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
