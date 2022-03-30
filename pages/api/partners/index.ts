import { NextApiRequest, NextApiResponse } from 'next';
import { mockPartners } from 'utils/mock-partners';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(mockPartners)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(mockPartners);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export const getMockPartners = () => {
  return mockPartners;
};

export default handler;
