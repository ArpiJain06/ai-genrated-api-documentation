import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { uploadSpec } from '../lib/api';

export default function UploadBox() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleUpload() {
        if (!file) return;
        setLoading(true);
        try {
            const data = await uploadSpec(file);
            const id = data.spec?.id || data.uploadId || data.id;
            router.push(`/explorer/${id}`);
        } catch (e) {
            alert('Upload failed: ' + (e as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold">Upload API Spec</h1>
        <p className="text-sm text-slate-500 mt-2">Upload an OpenAPI / Swagger / Postman file to create interactive docs.</p>

        <div className="mt-6">
            <input
            type="file"
            accept=".json,.yaml,.yml"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
        </div>

        <div className="mt-6 flex items-center gap-3">
            <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="px-4 py-2 bg-sky-600 text-white rounded disabled:opacity-50"
            >
            {loading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
        </div>
    );
}