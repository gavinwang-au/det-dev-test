import constants from './constants';
import { Logger } from './Logger';
import { Client } from 'elasticsearch';
import { ProvideSingleton } from '../ioc';

@ProvideSingleton(ElasticSearchConnection)
export class ElasticSearchConnection {

    public client;
    private readonly elasticSearchHost: string = constants.elasticSearchHost;

    constructor() {
        Logger.log(`connecting to ${constants.environment} elasticSearch`);
        this.client = new Client({
            host: this.elasticSearchHost,
        });
    }

}
