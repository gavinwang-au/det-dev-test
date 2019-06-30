import { inject, ProvideSingleton } from '../ioc';
import { IHistoryModel } from '../models/HistoryModel';
import { HistorySearchRepository } from '../repositories/elastic-search/HistorySearchRepository';
import { EsBaseService } from './EsBaseService';

@ProvideSingleton(HistoryService)
export class HistoryService extends EsBaseService<IHistoryModel> {

    constructor(@inject(HistorySearchRepository) protected repository: HistorySearchRepository) {
       super();
    }

    public async searchWithTypeReturn(startDate: string, endDate: string): Promise<IHistoryModel[]> {
        const searchResults = await this.searchByDate(startDate, endDate);
        if (Array.isArray(searchResults) && searchResults.length > 0) {
            return searchResults.map((result) => {
                const historyModel = {
                  sitecode: '',
                  timestamp: '',
                  user: ''
                } as IHistoryModel;
                Object.keys(historyModel).forEach(key => historyModel[key] = result[key]);
                return historyModel;
            });
        }
        return [] as IHistoryModel[];
    }

}
