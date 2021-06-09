module.exports = {
    env: {
        config: {
            development: {
                api: {
                    root: "http://localhost:3000/api/v1/",
                    base: "https://dev-tadoit.ru/api/v1/"
                }
            },
            docker: {
                api: {
                    root: "http://localhost:3000/api/v1/",
                    base: "https://dev-tadoit.ru/api/v1/"
                }
            },
            production: {
                api: {
                    root: "https://dev-tadoit.ru/api/v1/",
                    base: "https://dev-tadoit.ru/api/v1/"
                }
            },
            vercel: {
                api: {
                    root: "https://temp-demo-one.vercel.app/api/v1/",
                    base: "https://dev-tadoit.ru/api/v1/"
                }
            }
        },
        NEXT_PUBLIC_VERCEL: false
    },
}