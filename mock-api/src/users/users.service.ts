import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('API_BASE_URL');
  }

  async getUsers() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/users`)
    );
    return data;
  }
}