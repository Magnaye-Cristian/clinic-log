export interface LogCreateDTO {
    people_id: number;
    type: string;
    type_spec: string | null;
    school_id: string | null;
    first_name: string;
    last_name: string;
    middle_name: string;
    department: string | null | undefined; // id?
    purpose: string;
    complaint: string;
    address: string | null | undefined;
}