import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private readonly httpService;
    private readonly configService;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    getUsers(): Promise<any>;
}
