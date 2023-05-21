import axios from "axios";

export async function POST(request: Request) {

    const service_url = process.env.ORIGINATIONS_QUOTATION_URL 
    const service_uname = process.env.ORIGINATIONS_QUOTATION_USERNAME
    const service_password = process.env.ORIGINATIONS_QUOTATION_PASSWORD

    res = await axios.post(service_url, request.body, {
        auth: {
          username: service_uname,
          password: service_password,
        }
      })
      
      return res.status(400).json({ data: 'First or last name not found' });
    }
