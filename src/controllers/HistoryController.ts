import {
    Route,
    Controller,
    Get,
    Query,
    Tags
} from 'tsoa';

import { ProvideSingleton, inject } from '../ioc';
import { HistoryService } from '../services';
import { IHistoryModel } from '../models/HistoryModel';

@Tags('history')
@Route('history')
@ProvideSingleton(HistoryController)
export class HistoryController extends Controller {
    constructor(@inject(HistoryService) private service: HistoryService) {
       super();
    }

    @Get()
    // tslint:disable-next-line:max-line-length
    public async search(@Query('startDate') startDate: string, @Query('endDate') endDate: string): Promise<IHistoryModel[]> {
        return await this.service.searchWithTypeReturn(startDate, endDate);
    }

}
