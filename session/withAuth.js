import {applySession} from "next-iron-session"
import {options} from "./index"

export function withAuthServerSideProps(getServerSidePropsFunc){
    return async (context) => {
        const req = context.req
        const res = context.res

        await applySession(req, res, options)

        const token = req.session.get("token")

        if(token) {
            const ret = await getServerSidePropsFunc(context)

            ret.props.session = {}
            ret.props.session.token = token

            return ret
        } else {
            return {
                redirect: {
                    destination: '/logout',
                    permanent: false
                }
            }
        }
    }
}