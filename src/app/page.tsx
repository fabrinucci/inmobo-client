import { Agents } from '@/components/agents';
import { Hero } from '@/components/hero';
import { Properties } from '@/components/properties';

export default async function Home() {
  return (
    <>
      <Hero />
      <div className='pt-[650px]'>
        <Properties />
        <Agents />
      </div>
    </>
  );
}
