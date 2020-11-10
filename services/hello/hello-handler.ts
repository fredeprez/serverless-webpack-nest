import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as proxy from 'aws-lambda-fastify';
import * as fastify from 'fastify';

import { HelloModule } from './hello-module';

let app: INestApplication;

export const handler = async (event, context) => {
	if (!app) {
		app = await NestFactory.create<NestFastifyApplication>(HelloModule, new FastifyAdapter(fastify()));
		await app.init();
	}

	return proxy(app.getHttpAdapter())(event, context);
};
