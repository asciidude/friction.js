import SnowflakeInterface from "../interfaces/models/Snowflake";

export default class Snowflake implements SnowflakeInterface {
    public _id: string;

    constructor(id: string) {
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    getNumericId(): bigint {
        return BigInt(this.id);
    }

    getTimestamp(): Date {
        const baseTimestamp = 1420070400000;
        const timestamp = (BigInt(this.id) >> BigInt(22)) + BigInt(baseTimestamp);
        return new Date(Number(timestamp));
    }
}