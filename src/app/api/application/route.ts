import ConnectDB from "@/config/database";
import ApplicationsModel from "@/models/Application";
import { NextRequest, NextResponse } from "next/server";
import {limit} from "@/middleware/rateLimiter";





export const POST = async (request : NextRequest, response: NextResponse) => {
    const { formID, answers } = await request.json();
    const ip = request.ip ?? request.headers.get('X-Forwarded-For') ?? 'unknown';
    const isRateLimited =   limit(ip);
    try {
        await ConnectDB();
        if (isRateLimited)
            return NextResponse.json({ error: 'rate limited' }, { status: 429 })
        await ApplicationsModel.create({formID, answers});
        return NextResponse.json({ message: "Application Created"}, { status: 201 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Application Cannot Created"}, { status: 401 });
    }
}