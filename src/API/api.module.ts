import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [
    UsersModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'users',
            module: UsersModule,
          },
        ],
      },
    ]),
  ],
})
export class APIModule {}
