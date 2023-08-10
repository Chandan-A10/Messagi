import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongooseModule } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    app.enableCors();
    await app.listen(8000);
    console.log('Server started at port 8000');

    const connection = app.get(MongooseModule);
    if (connection) {
      console.log('Db connected Successfully');
    } else {
      console.log('Error connecting to DB');
    }
  } catch (error) {
    console.log('Error starting server');
  }
}
bootstrap();
