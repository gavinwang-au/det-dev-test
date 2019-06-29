import { expect } from 'chai';
import * as ioc from '../../../ioc';
import { EsBaseService } from '../../../services/EsBaseService';
import { MockEsBaseRepository } from '../mocks/MockEsBaseRepository';
import { generateHistoryModels } from '../../data/models';

/** we need ioc on runtime */
ioc; // tslint:disable-line

class EsBaseServiceExtension extends EsBaseService<any> {
    protected repository = new MockEsBaseRepository(generateHistoryModels());
}

describe('EsBaseService', () => {
    let service: EsBaseService<any>;
    beforeEach(() => {
        service = new EsBaseServiceExtension();
    });

    it('should search by date', async () => {
        const startDate: string = '2019-02-11';
        const endDate: string = '2019-02-12';
        const res = await service.searchByDate(startDate, endDate);
        expect(res).to.have.length(1);
        expect(res[0]).to.have.property('user');
        expect(res[0]).to.have.property('sitecode');
        expect(res[0]).to.have.property('timestamp');
    });

});
