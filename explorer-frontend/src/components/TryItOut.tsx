import React, { useState } from 'react';
import { Endpoint } from '../lib/types';
import { tryEndpoint } from '../lib/api';

export default function TryItOut({ endpoint, uploadId }: { endpoint: Endpoint; uploadId?: string }) {
    const [body, setBody] = useState(JSON.stringify({}, null, 2));
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    async function send() {
        setLoading(true);
        try {
            const payload = {
                path: endpoint.path,
                method: endpoint.method,
                params: {},
                body: JSON.parse(body || '{}'),
            };
            const res = await tryEndpoint(uploadId || '', payload);
            setResponse(res);
        } catch (e) {
            setResponse({ error: (e as Error).message });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mt-6">
        <h4 className="font-medium">Try it out</h4>
        <textarea className="w-full h-40 mt-2 p-2 font-mono text-sm bg-white border" value={body} onChange={(e) => setBody(e.target.value)} />
        <div className="mt-3">
            <button onClick={send} className="px-3 py-1 bg-green-600 text-white rounded" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
        </div>

        {response && (
            <div className="mt-4">
            <h5 className="font-medium">Response</h5>
            <pre className="mt-2 bg-black text-green-200 p-3 rounded max-h-72 overflow-auto">{JSON.stringify(response, null, 2)}</pre>
            </div>
        )}
        </div>
    );
}
