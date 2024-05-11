import ConnectDB from "@/config/database";

export const GET = async () => {
    await ConnectDB();
}