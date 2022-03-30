// API
import api from 'api';

import ClubContacts from './ClubContacts';

export async function getServerSideProps() {
  try {
    const contacts = await api.contacts.getContacts();

    return {
      props: { contacts }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { contacts: [] }
    };
  }
}

export default ClubContacts;
