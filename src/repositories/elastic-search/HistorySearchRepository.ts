import { ProvideSingleton } from '../../ioc';
import { EsBaseRepository } from './EsBaseRepository';
import { IHistoryModel } from '../../models/HistoryModel';
import { inject } from 'inversify';
import { ElasticSearchConnection } from '../../config/ElasticSearchConnection';

@ProvideSingleton(HistorySearchRepository)
export class HistorySearchRepository extends EsBaseRepository<IHistoryModel> {

    constructor(@inject(ElasticSearchConnection) protected esConnection: ElasticSearchConnection) {
        super();
        super.init();
    }

}
