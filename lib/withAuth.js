import nextCoocies from 'next-cookies'
import axios from "axios"
import feCookie from "js-cookie"

export function withAuth(handler) {
    return async function withAuthHandler(...args) {

        const redirect = async function redirect(ctx) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: true
                }
            }
        }

        const handlerType = args[0] && args[1] ? "api" : "ssr"
        const req = handlerType === "api" ? args[0] : args[0].req
        const res = handlerType === "api" ? args[1] : args[0].res

        const cooks = nextCoocies(...args)

        const acTn = cooks.acTn


        if (!acTn) {
            req.isAuthenticated = false
            req.user = null
            if (res) {
                res.writeHead(302, { Location: '/login' });
                res.end();
            }
        } else {
            const config = {
                method: 'get',
                url: 'http://localhost:3000/660/users/1',
                headers: {
                    'Authorization': `Bearer ${acTn}`

                }
            }

            await axios(config)
                .then(function (response) {
                    let data = response.data

                    const user = {id: data.id, email: data.email}

                    req.isAuthenticated = true
                    req.user = user

                    console.log(user)

                })
                .catch(function (error) {
                    console.log(error)
                })
        }


        return handler(...args)
    }
}