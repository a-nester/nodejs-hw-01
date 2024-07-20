import { PATH_DB } from '../constants/contacts.js';
import fs, { writeFile } from 'fs/promises';

export const readParsedData = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Fail to read data', error);
  }
};

export const writeStringifiedData = async (data) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Fail to write data:', error);
  }
};
