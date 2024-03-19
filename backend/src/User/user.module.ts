import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from './User.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [PrismaModule],
})
export class UserModule {}
