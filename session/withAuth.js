import {applySession} from "next-session"
import {options} from "./index"

export function withAuthServerSideProps(getServerSidePropsFunc){
    return async (context) => {
        const req = context.req
        const res = context.res

        await applySession(req, res, options)

        const session = req.session

        if(session.token) {
            const ret = await getServerSidePropsFunc(context)

            ret.props.session = {}
            ret.props.session.token = session.token

            return ret
        } else {
            return {
                redirect: {
                    destination: '/logout',
                    permanent: false,
                },
            }
        }
    }
}