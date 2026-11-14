import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TelegramModule } from './telegram/telegram.module';
import { ReceiversModule } from './receivers/receivers.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CountriesModule } from './countries/countries.module';
import { OfficesModule } from './offices/offices.module';
import { OrdersModule } from './orders/orders.module';
import { SystemSettingsModule } from './system-settings/system-settings.module';
import { TariffsModule } from './tariffs/tariffs.module';
import { ContactModule } from './contact/contact.module';
import { SupportChatModule } from './support-chat/support-chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CloudinaryModule,
    PrismaModule,
    EmailModule,
    AuthModule,
    UsersModule,
    TelegramModule,
    ReceiversModule,
    CountriesModule,
    OfficesModule,
    OrdersModule,
    SystemSettingsModule,
    TariffsModule,
    ContactModule,
    SupportChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

