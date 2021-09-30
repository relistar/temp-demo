const withPWA = require('next-pwa')

module.exports = withPWA({
    env: {
        config: {
            development: {
                api: {
                    root: "http://localhost:3000/api/v1/",
                    base: "https://api.dev-tadoit.ru/api/v1/",
                    cms: 'https://temp-strapi.herokuapp.com/'
                },
                sessionCookieConfig: {
                    cookieName: 'sc',
                    password: "7X6Y7T$=Xt%C8tSBTrwS@nCex6$5_pBQ*v@Zb&JQeGNfqvgyp9Kv",
                    cookieOptions: {
                        secure: false,
                        httpOnly: false,
                        sameSite: 'Strict',
                        maxAge: 86400
                    }
                }
            },
            docker: {
                api: {
                    root: "http://localhost:3000/api/v1/",
                    base: "https://api.dev-tadoit.ru/api/v1/",
                    cms: 'https://temp-strapi.herokuapp.com/'
                },
                sessionCookieConfig: {
                    cookieName: 'sc',
                    password: "X5tUVQ7U4*8aUDrvPBqUJ?^V!qS7xeAg6VUtyZcUZYcRHpEksgYy",
                    cookieOptions: {
                        secure: false,
                        httpOnly: false,
                        sameSite: 'Strict',
                        maxAge: 86400
                    }
                }
            },
            production: {
                api: {
                    root: "https://dev-tadoit.ru/api/v1/",
                    base: "https://api.dev-tadoit.ru/api/v1/",
                    cms: 'https://temp-strapi.herokuapp.com/'
                },
                sessionCookieConfig: {
                    cookieName: 'sc',
                    password: "Q2X^WS?T=aqw7^4DbVMkTu$8fH!f&egVQJ#MnQ4#F9TeD*2tUBWQ",
                    cookieOptions: {
                        secure: true,
                        httpOnly: false,
                        sameSite: 'Strict',
                        maxAge: 86400
                    }
                }
            },
            vercel: {
                api: {
                    root: "https://temp-demo-one.vercel.app/api/v1/",
                    base: "https://api.dev-tadoit.ru/api/v1/",
                    cms: 'https://temp-strapi.herokuapp.com/'
                },
                sessionCookieConfig: {
                    cookieName: 'sc',
                    password: "_Er8EpXY_g-XyaBBQ#VW=Z-*8Rbvgd67k%bZ^%C+CXC8y4V@p_8Z",
                    cookieOptions: {
                        secure: true,
                        httpOnly: false,
                        sameSite: 'Strict',
                        maxAge: 86400
                    }
                }
            }
        },
        NEXT_PUBLIC_VERCEL: false
    },
    pwa: {
        dest: 'public',
        sw: 'service-worker.js',        disable: process.env.NODE_ENV === 'development'
    }
})