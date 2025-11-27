export async function uploadSpec(file: File) {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3000'}/upload`, {
        method: 'POST',
        body: fd
    });
    if (!res.ok) throw new Error('upload failed');
    return res.json();
}

export async function fetchSpec(uploadId: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3000'}/uploads/${uploadId}`);
    if (!res.ok) throw new Error('spec fetch failed');
    return res.json();
}

export async function tryEndpoint(uploadId: string, payload: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3000'}/uploads/${uploadId}/try`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}