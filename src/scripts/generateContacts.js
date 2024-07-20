import { createFakeContact } from '../utils/createFakeContact.js';
import { readParsedData, writeStringifiedData } from '../utils/unificate.js';

export const generateContacts = async (number) => {
  const newContactsArr = Array.from({ length: number }, createFakeContact);
  try {
    const existData = await readParsedData();
    const data = [...existData, ...newContactsArr];
    await writeStringifiedData(data);
  } catch (error) {
    console.error('Fail to generate contacts:', error);
  }
};

generateContacts(5);
