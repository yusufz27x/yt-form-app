import ConnectDB from "@/config/database";
import ApplicationsModel from "@/models/Application";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request : NextRequest) => {
    const { formID, answers } = await request.json();

    try {
        await ConnectDB();
    
        await ApplicationsModel.create({formID, answers});
        return NextResponse.json({ message: "Application Created"}, { status: 201 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Application Cannot Created"}, { status: 401 });
    }
}