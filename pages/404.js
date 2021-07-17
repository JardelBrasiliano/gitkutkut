import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h1>pagina não encontrada</h1>
            <p>Voltar para a <Link href="/"><a>pagina principal.</a></Link></p>
        </div>
    )
}

export default NotFound;