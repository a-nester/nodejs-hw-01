import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const addOneContact = async (number) => {
  const newContact = Array.from({ length: number }, createFakeContact);
  try {
    const existData = await fs.readFile(PATH_DB, 'utf-8');
    const newData = [...JSON.parse(existData), ...newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(newData), 'utf-8');
  } catch (error) {
    console.error('Error to create contact:', error);
  }
};

addOneContact(1);
