module.exports = {
    env: {
        config: {
            development: {
                api: {
                    root: "http://localhost:3000/api/v1/",
                    base: "https://dev-tadoit.ru/api/v1/"
                },
                sessionCookie: {
                    name: 'sc',
                    cookie: {
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
                    base: "https://dev-tadoit.ru/api/v1/"
                },
                sessionCookie: {
                    name: 'sc',
                    cookie: {
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
                    base: "https://dev-tadoit.ru/api/v1/"
                },
                sessionCookie: {
                    name: 'sc',
                    cookie: {
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
                    base: "https://dev-tadoit.ru/api/v1/"
                },
                sessionCookie: {
                    name: 'sc',
                    cookie: {
                        secure: true,
                        httpOnly: false,
                        sameSite: 'Strict',
                        maxAge: 86400
                    }
                }
            }
        },
        NEXT_PUBLIC_VERCEL: true
    },
}