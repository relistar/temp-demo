import {getEnvConfig} from "../config"

const sessionCookieConfig = getEnvConfig().sessionCookieConfig

export const options = { ...sessionCookieConfig }