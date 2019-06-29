import { expect } from 'chai';

import { HistoryService } from '../../../services';
import { generateHistoryModel } from '../../data/models';
import { MockEsBaseRepository } from '../mocks/MockEsBaseRepository';

describe('HistoryService', () => {
    let service: HistoryService;
    // tslint:disable-next-line:no-empty
    beforeEach(() => {

    });

    it('should instantiate', async () => {
        service = new HistoryService(new MockEsBaseRepository(generateHistoryModel()) as any);
        expect(!!service).to.be.true; // tslint:disable-line
    });
});
