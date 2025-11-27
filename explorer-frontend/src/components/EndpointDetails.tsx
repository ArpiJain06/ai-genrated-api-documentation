import React from 'react';
import { Endpoint } from '../lib/types';
import TryItOut from './TryItOut';

export default function EndpointDetails({ endpoint, uploadId }: { endpoint?: Endpoint | null; uploadId?: string }) {
    if (!endpoint) return <div className="p-6">Select an endpoint to view details.</div>;

    return (
        <div className="p-6 overflow-auto">
        <h3 className="text-xl font-semibold">{endpoint.path} <span className="text-sm text-slate-500">{endpoint.method.toUpperCase()}</span></h3>
        {endpoint.summary && <p className="mt-2 text-slate-600">{endpoint.summary}</p>}
        {endpoint.description && <p className="mt-2 text-slate-500">{endpoint.description}</p>}

        <div className="mt-6">
            <h4 className="font-medium">Parameters</h4>
            <pre className="mt-2 bg-slate-100 p-3 rounded text-sm overflow-auto">{JSON.stringify(endpoint.parameters || [], null, 2)}</pre>
        </div>

        <div className="mt-6">
            <h4 className="font-medium">Request Body Schema</h4>
            <pre className="mt-2 bg-slate-100 p-3 rounded text-sm overflow-auto">{JSON.stringify(endpoint.requestBody || {}, null, 2)}</pre>
        </div>

        <TryItOut endpoint={endpoint} uploadId={uploadId} />
        </div>
    );
}