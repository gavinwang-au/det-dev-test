import { inject, ProvideSingleton } from '../ioc';
import { IHistoryModel } from '../models/HistoryModel';
import { HistorySearchRepository } from '../repositories/elastic-search/HistorySearchRepository';
import { EsBaseService } from './EsBaseService';

@ProvideSingleton(HistoryService)
export class HistoryService extends EsBaseService<IHistoryModel> {

    constructor(@inject(HistorySearchRepository) protected repository: HistorySearchRepository) {
       super();
    }

}
