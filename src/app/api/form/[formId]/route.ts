import ConnectDB from "@/config/database";
import {limit} from "@/middleware/rateLimiter";

export const GET = async () => {
    await ConnectDB();
}