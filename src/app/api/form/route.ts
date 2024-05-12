import ConnectDB from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async () => {
    // TODO: Get all active forms
    await ConnectDB();
}