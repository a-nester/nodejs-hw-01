import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { readParsedData, writeStringifiedData } from '../utils/unificate.js';

const addOneContact = async () => {
  const newContact = [createFakeContact()];
  try {
    const existData = await readParsedData();
    const newData = [...existData, ...newContact];
    await writeStringifiedData(newData);
  } catch (error) {
    console.error('Error to create contact:', error);
  }
};

addOneContact();
