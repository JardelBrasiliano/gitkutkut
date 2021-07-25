import Link from "next/link";
// *MODEL COMMUNITY*
// htmlUrl: "/community/teste_3"
// id: "48521351"
// imageUrl: "https://picsum.photos/300/300"
// title: "teste 3"

// *MODELO PROFILE*
// html_url: "https://github.com/inaldobrandao"
// id: 8497500
// image_url: "https://avatars.githubusercontent.com/u/8497500?v=4"
// title: "inaldobrandao"
const LISTA_DE_COMUNIDADES = [
{
	id: 21315,
	title: 'Eu odeio acordar cedo',
	imageUrl: 'imagem.com.br',
	members: 2500,
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, in! Harum at, asperiores totam cumque fugiat neque adipisci quam. Provident laboriosam consequatur esse libero possimus!',
	author: 'JardelBrasiliano'
}
]

const ListAllProfileOrCommunity = ({listComplete}) => {
	return (
		<ul>
			{
				listComplete.map((actualValue, index) => { 
					const corDeFundo = index%2 !== 0 ? '#F1F9FE' : '#D9E6F6';
					const baseUrl = !!actualValue.image_url ? 'perfil' : 'comunidade' ;
					const imagem = actualValue.image_url || actualValue.imageUrl;
					
					return (
						<li className="community" key={actualValue.title} style={{backgroundColor: corDeFundo}} key={`ProfileOrCommunity-${actualValue.id}-${actualValue.title}`}>
							<img src={imagem} alt="Foto" />
							<div className="contentInfo">
								<Link href={`/${baseUrl}/${actualValue.title}`}><h3 style={{ cursor: "pointer"}}>{actualValue.title}</h3></Link>
								{
									!!actualValue.imageUrl ? 
									<>
										<p className="member" >membros ( <Link href={`/comunidade/${actualValue.title}/membros`}><a>{actualValue.members.length}</a></Link> )</p>
										<div className="descripton">
											<p>{actualValue.description}</p>
										</div>
										<p className="autor"> autor: <Link href={`perfil/${actualValue.author}`}><a>{actualValue.author}</a></Link></p>
									</>
									:
									<></>
								}
							</div>
						</li>
					);
				})
			}
		</ul>
	)
}

export default ListAllProfileOrCommunity;