
import PrivacyOptions from './PrivacyOptionsClient';
import { cookies } from 'next/headers';


export default async function PrivacyNotice() {
  const cookieStore = cookies();
  const cookie = cookieStore.get('lendotopiaCookiePreferences')

    return (cookie)? 
    (
        <div></div>
    ):(
          <PrivacyOptions />
    )
  }
  