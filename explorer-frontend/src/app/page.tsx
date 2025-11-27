'use client';
import Link from 'next/link';


  export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
    <h1 className="text-3xl font-bold">API Explorer</h1>
    <p className="mt-3 text-slate-600">Upload an OpenAPI / Swagger / Postman file to explore your API interactively.</p>
    <div className="mt-6 flex gap-3 justify-center">
    <Link href="/upload" className="px-4 py-2 bg-sky-600 text-white rounded">Upload Spec</Link>
    </div>
    </div>
    </div>
  );
}