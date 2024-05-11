import ConnectDB from "@/config/database";

export const GET = async () => {
    // TODO: Get all active forms
    await ConnectDB();
}