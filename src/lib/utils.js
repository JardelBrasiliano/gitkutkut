import NextLink from 'next/link';

const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';


function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export { BASE_URL, v, Link };