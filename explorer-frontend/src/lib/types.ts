export type Endpoint = {
    id: string;
    path: string;
    method: string;
    summary?: string;
    description?: string;
    parameters?: any[];
    requestBody?: any;
    responses?: any;
};

export type SpecData = {
    uploadId: string;
    title?: string;
    endpoints: Endpoint[];
};