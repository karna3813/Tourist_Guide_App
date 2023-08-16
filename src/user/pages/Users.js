import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
   const USERS = [
      {
         id : 'u1',
         name : 'Shivam',
         image : 'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/avneet-kaur-hotness-personified-202301-1674281664.jpg',
         places : 3
      },

      {
         id : 'u2',
         name : 'Sneha',
         image : 'https://qph.cf2.quoracdn.net/main-qimg-a31ae2a9b22a5f137febb8037974d9bd-lq',
         places : 2
      }
   ]


   return <UsersList items = {USERS} />
};

export default Users;