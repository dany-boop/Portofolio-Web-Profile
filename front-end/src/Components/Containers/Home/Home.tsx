import {FC} from 'react';
import Head from 'next/head';

import TopSection from './Components/TopSection';

const ContainerHome: FC =() => {
  return (
    <>
    <Head>
      <title>Dany's Place</title>
    </Head>

    <main className='pt-20'>
<TopSection/>
    </main>
</>
  )
}
export default ContainerHome