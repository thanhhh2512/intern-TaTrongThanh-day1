// libraries/logto.ts
import { LogtoClient } from "@logto/next";
import { logtoConfig } from "../../logto"; // Đảm bảo đường dẫn đúng đến tệp logtoConfig

export const logtoClient = new LogtoClient(logtoConfig);
