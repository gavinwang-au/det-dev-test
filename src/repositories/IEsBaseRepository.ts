export interface IEsBaseRepository<EntityType> {
    check(): Promise<boolean>;
    search(query: any): Promise<EntityType[]>;
}
