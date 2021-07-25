import React from 'react';

import AlurakutProfileSidebarMenuDefault from '../../lib/AlurakutProfileSidebarMenuDefault';

import Box from '../../styles/components/Box';

const ProfileSidebar = ({gitHubUser}) => {
  return (
    <Box as="aside">
      <img src={`https://github.com/${gitHubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${gitHubUser}`}></a>
          @{gitHubUser}
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default ProfileSidebar;
