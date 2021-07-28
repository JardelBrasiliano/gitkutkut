import React from 'react';

import AlurakutCommunitySidebarMenuDefault from '../../lib/AlurakutCommunitySidebarMenuDefault';

import Box from '../../styles/components/Box';
const CommunitySideBar = ({nameCommunity, imageCommunity}) => {
  return (
    <Box as="aside">
      <img src={imageCommunity} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`/comunidade/${nameCommunity}`}></a>
          @{nameCommunity}
      </p>
      <hr />

      <AlurakutCommunitySidebarMenuDefault nameCommunity={nameCommunity}/>
    </Box>
  )
}

export default CommunitySideBar;
