import  { destroyCookie } from 'nookies'

export async function getServerSideProps(ctx) {
    
    destroyCookie(ctx, 'USER_TOKEN');

    return {
        redirect: {
          destination: '/',
          permanent: false,
        },
        props: {
          githubUser: null
        },
    }
}

const Logout = () => {
    return <></>
}

export default Logout;