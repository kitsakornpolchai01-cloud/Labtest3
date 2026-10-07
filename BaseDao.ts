import Database from "better-sqlite3";

export abstract class BaseDao {
    protected db: Database.Database;

    constructor() {
        this.db = new Database("user_system.db");
        this.initTable();
    }

    protected abstract initTable(): void;
}
