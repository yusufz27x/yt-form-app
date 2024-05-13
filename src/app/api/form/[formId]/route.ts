import ConnectDB from "@/config/database";
import { NextRequest, NextResponse } from "next/server";
import {limit} from "@/middleware/rateLimiter";
import Form from '@/models/Form';
//import { useSearchParams } from 'next/navigation'

export const GET = async (request:NextRequest) => {
    // TODO: Get all active forms
    const ip = request.ip ?? request.headers.get('X-Forwarded-For') ?? 'unknown';
    const isRateLimited =   limit(ip);
    try {
    if (isRateLimited)
        return NextResponse.json({ error: 'rate limited' }, { status: 429 })
    await ConnectDB();

    const url = request.url;
    const id = url.split('/').pop();

    const form = await Form.findById(id);
    return NextResponse.json({ form, id }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Form Cannot be fetched"}, { status: 401 });
    }
} 