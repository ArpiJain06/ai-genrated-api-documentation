import React from 'react';
import { Endpoint } from '../lib/types';

export default function ApiSidebar({ endpoints, selectedId, onSelect }: { endpoints: Endpoint[]; selectedId?: string; onSelect: (e: Endpoint) => void }) {
    return (
        <aside className="w-80 bg-white border-r h-full overflow-auto">
        <div className="p-4 border-b">
            <h2 className="font-semibold">Endpoints</h2>
        </div>
        <div>
            {endpoints.map((ep) => (
            <div
                key={ep.id}
                onClick={() => onSelect(ep)}
                className={`p-3 cursor-pointer hover:bg-slate-50 border-b ${selectedId === ep.id ? 'bg-sky-50' : ''}`}
            >
                <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-slate-700">{ep.method}</span>
                <div className="text-sm truncate">{ep.path}</div>
                </div>
                {!!ep.summary && <div className="text-xs text-slate-500 mt-1">{ep.summary}</div>}
            </div>
            ))}
        </div>
        </aside>
    );
}