import { SiteClient, buildModularBlock } from 'datocms-client';

const API_TOKEN_SEED = process.env.NEXT_PUBLIC_TOKEN_FULL_DATO;

const seedNewCommunity = async (request, response) => {
  if(request.method === 'POST'){
    const client = new SiteClient(API_TOKEN_SEED);
    const newCommunity = {
      itemType: "977382",
      title: request.body.title, 
      members: [
        buildModularBlock({
          itemType: "1005753",
          name: request.body.member,
        })
      ],
      imageUrl: request.body.imageUrl, 
      description: request.body.description,
      author: request.body.author,
    }

    const createCommunity = await client.items.create(newCommunity);

    response.json({
      info: 'criar Comunidade',
      createCommunity: createCommunity
    });

  }else {
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    });
  }
}

export default seedNewCommunity;