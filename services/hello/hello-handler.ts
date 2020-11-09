import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { HelloModule } from './hello-module';

let app: INestApplication;

export const handler = async () => {
	if (!app) {
		app = await (await NestFactory.create(HelloModule)).init();
	}
	return app;
};
