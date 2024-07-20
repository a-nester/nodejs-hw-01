import { readParsedData, writeStringifiedData } from '../utils/unificate.js';

export const removeLastContact = async () => {
  try {
    const existData = await readParsedData();
    const newData = existData.slice(0, existData.length - 1);
    await writeStringifiedData(newData);
  } catch (error) {
    console.error('Fail to remove last contact', error);
  }
};

removeLastContact();
