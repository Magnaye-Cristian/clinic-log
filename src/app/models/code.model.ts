import { ROLEENUM } from "./role.enum";

export interface ICode {
    role: ROLEENUM;
    code: string;
    created_on: Date;
}