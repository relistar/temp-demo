export function getEnvConfig() {
    const config = process.env.config;
    const isLocalDocker = process.env.NODE_DOCKER
    const environment = process.env.NODE_ENV
    const vercel = process.env.NEXT_PUBLIC_VERCEL

    let currentEnvConfig = config[environment]

    if (isLocalDocker) {
        currentEnvConfig = config['docker']
    } else if (vercel) {
        currentEnvConfig = config['vercel']
    }
    return currentEnvConfig;
}