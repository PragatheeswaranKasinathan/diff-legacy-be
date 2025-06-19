import { Controller, Get } from '@nestjs/common';
import { ChangesService } from './changes.service';

@Controller('code-details')
export class ChangesController {
  constructor(private readonly changesService: ChangesService) {}

  @Get()
  getChanges() {
    return this.changesService.getChanges();
  }
} 