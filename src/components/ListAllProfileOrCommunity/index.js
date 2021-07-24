import Link from "next/link";

const ListAllProfileOrCommunity = ({listComplete}) => {
	return (
		<ul>
			{
				listComplete.map((actualValue, index) => { 
					const corDeFundo = index%2 !== 0 ? '#F1F9FE' : '#D9E6F6';
					const baseUrl = !!actualValue.name ? 'perfil' : 'comunidade' ;
					const isProfileOrCommunity = (actualValue.title || actualValue.name);
					return (
						<li className="community" key={actualValue.title} style={{backgroundColor: corDeFundo}} key={`ProfileOrCommunity-${index}-${actualValue.title}`}>
							<img src="https://picsum.photos/300/300" alt="" />
							<div className="contentInfo">
								<Link href={`/${baseUrl}/${isProfileOrCommunity}`}><h3 style={{ cursor: "pointer"}}>{isProfileOrCommunity}</h3></Link>
								{
									!!actualValue.title ? 
									<>
										<p className="member" >membros ( <Link href="#"><a>{actualValue.members}</a></Link> )</p>
										<div className="descripton">
											<p>{actualValue.description}</p>
										</div>
										<p className="autor"> autor: <Link href="#"><a>{actualValue.author}</a></Link></p>
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