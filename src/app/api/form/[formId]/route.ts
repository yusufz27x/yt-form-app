import ConnectDB from "@/config/database";
import { NextRequest } from "next/server";

export const GET = async (request : NextRequest) => {
    const { formId } = await request.json();
    await ConnectDB();
}