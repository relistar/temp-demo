import {getEnvConfig} from "../config";

const sessionCookieConfig = getEnvConfig().sessionCookie;

export const options = { ...sessionCookieConfig };