import { NextApiRequest, NextApiResponse } from 'next';
import { mockManagers } from 'utils/mock-managers';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(mockManagers)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(mockManagers);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export const getMockManagers = () => {
  return mockManagers;
};

export default handler;
