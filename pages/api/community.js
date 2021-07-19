import { SiteClient } from 'datocms-client';

const API_TOKEN_SEED = process.env.NEXT_PUBLIC_TOKEN_FULL_DATO;

export default async function seedNewCommunity(request, response) {
  if(request.method === 'POST'){
    const client = new SiteClient(API_TOKEN_SEED);
    const newCommunity = {
      itemType: "977382",
      title: request.body.title, 
      imageUrl: request.body.imageUrl, 
      htmlUrl: request.body.htmlUrl, 
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