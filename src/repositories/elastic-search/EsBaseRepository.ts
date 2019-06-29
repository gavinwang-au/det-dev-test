import { IEsBaseRepository } from '../IEsBaseRepository';
import { Logger } from '../../config/Logger';
import { ElasticSearchConnection } from '../../config/ElasticSearchConnection';
import { decorate, injectable } from 'inversify';
import constants from '../../config/constants';
import { SearchResponse } from 'elasticsearch';

export abstract class EsBaseRepository<EntityType> implements IEsBaseRepository<EntityType> {
    protected esConnection: ElasticSearchConnection;
    private initiated: boolean = false;

    /** this needs to be called after the extended class super is executed */
    protected init(): void {
        if (this.initiated) return;
        this.initiated = true;
    }

    public check(): Promise<boolean> {
        return new Promise((done, fail) => {
            this.esConnection.client.ping({
                requestTimeout: 30000,
            }, (error) => {
                if (error) {
                    Logger.error('elasticsearch cluster is down!', {err: error});
                    fail(false); // ('elasticsearch cluster is down!', {err:error});
                } else {
                    Logger.log('All is well');
                    done(true);
                }
            });
        });
    }

    public async search<T>(query: any): Promise<EntityType[]> {
        try {
            const esResults: SearchResponse<EntityType> = await this.esConnection.client.search({
                index: constants.elasticSearchIndex,
                // tslint:disable-next-line:object-literal-sort-keys
                body: query
            });
            if (esResults) {
                Logger.log('elastic search result:' + esResults);
                return esResults.hits.hits.map((hit) => hit._source);
            }
        } catch (error) {
            Logger.error(error);
        }
        return [] as EntityType[];
    }
}

decorate(injectable(), EsBaseRepository);
