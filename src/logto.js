export const logtoConfig = {
  endpoint: "https://l3r5ib.logto.app/",
  appId: "jjd28lxfzgukmwfiy7o03",
  appSecret: "PMuCqXdpcj65r6XCrdBCf8s9Mn1q6tvy",
  baseUrl: "http://localhost:3000",
  cookieSecret: "DCyURLkgFeq32XGNJWClTNUGAmaQuOiD",
  cookieSecure: process.env.NODE_ENV === "production",
  scopes: ["openid", "profile", "email", "read:user"],  
  resources: ["https://cloud.logto.io/api"]  
};
