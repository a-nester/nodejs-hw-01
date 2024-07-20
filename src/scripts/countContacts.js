import { readParsedData } from '../utils/unificate.js';

export const countContacts = async () => {
  try {
    const allContacts = await readParsedData();
    return allContacts.length;
  } catch (error) {
    console.error('Fail to count contacts', error);
  }
};

console.log(await countContacts());
