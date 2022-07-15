import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query_res = await axios({
      socketPath: "/run/nanocl/nanocl.sock",
      method: req.method,
      url: req?.url?.replace("/api", "") || "/",
    });
    res.status(query_res.status || 200).json(query_res.data);
  } catch (query_err: any) {
    res.status(query_err.status || 400).json(query_err);
  }
}
