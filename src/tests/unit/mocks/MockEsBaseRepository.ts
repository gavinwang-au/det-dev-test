import { IEsBaseRepository } from '../../../repositories/IEsBaseRepository';

export class MockEsBaseRepository implements IEsBaseRepository<any> {
    constructor(public mock?: any) { }

    public check(): Promise<boolean> {
        return Promise.resolve(true);
    }

    public search(query: any): Promise<any[]> {
      return this.mock || [];
    }
}
