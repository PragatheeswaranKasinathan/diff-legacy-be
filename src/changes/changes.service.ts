import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ChangesService {
  private readonly dbPath = path.join(process.cwd(), 'db.json');

  getChanges() {
    try {
      const data = fs.readFileSync(this.dbPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Failed to read changes data');
    }
  }
} 