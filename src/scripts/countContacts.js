import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(allContacts).length;
  } catch (error) {
    console.error('Fail to count contacts', error);
  }
};

console.log(await countContacts());
