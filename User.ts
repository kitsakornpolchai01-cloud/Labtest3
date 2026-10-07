export class User {
    private id: number;
    private username: string;
    private point: number;
    private isActive: boolean;

    constructor(
        id: number,
        username: string,
        point: number,
        isActive: boolean
    ) {
        this.id = id;
        this.username = username;
        this.point = point;
        this.isActive = isActive;
    }
    getId(): number {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getPoint(): number {
        return this.point;
    }

    getIsActive(): boolean {
        return this.isActive;
    }

    setId(id: number): void {
        this.id = id;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    setPoint(point: number): void {
        this.point = point;
    }

    setIsActive(isActive: boolean): void {
        this.isActive = isActive;
    }

    canRedeem(requiredPoint: number): boolean {
        return this.isActive === true && this.point >= requiredPoint;
    }
}

