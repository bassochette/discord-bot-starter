import { Test, TestingModule } from '@nestjs/testing';
import { DiscordService } from './discord.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { CommandsService } from './commands/commands.service';
import { PingHandler } from './commands/ping/ping.handler';

describe('DiscordService', () => {
  let service: DiscordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [DiscordService, ConfigService, CommandsService, PingHandler],
    }).compile();

    service = module.get<DiscordService>(DiscordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
