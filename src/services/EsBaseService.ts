import { decorate, injectable } from 'inversify';
import { IEsBaseRepository } from '../repositories/IEsBaseRepository';
import moment = require('moment');
import { Logger } from '../config/Logger';

export abstract class EsBaseService<EntityModel> {
    protected repository: IEsBaseRepository<EntityModel>;

    public async searchByDate(startDate: string, endDate: string): Promise<EntityModel[]> {
        if (this.isValidDate(startDate) && this.isValidDate(endDate)) {
            const searchQuery = this.toElasticSearchQuery(startDate, endDate);
            const isReady: boolean = await this.repository.check();
            Logger.log('elasticSearchService is ready:' + isReady);
            if (isReady === true) {
                const historyItems: EntityModel[] = await this.repository.search(searchQuery);
                Logger.log('elasticSearchService historyItems' + historyItems);
                if (Array.isArray(historyItems) && historyItems.length > 0) {
                    return historyItems;
                }
            }
        }
        return [] as EntityModel[];
    }

    private toElasticSearchQuery(startDate: string, endDate: string) {
        return {
            query: {
                range : {
                    timestamp : {
                        gte : new Date(startDate).toISOString(),
                        lte : new Date(endDate).toISOString()
                    }
                }
            }
        };
    }

    private isValidDate(date: string): boolean {
        if (moment(date).isValid()) {
            return true;
        }
        return false;
    }
}

decorate(injectable(), EsBaseService);
