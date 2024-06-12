import { AboutDescription } from '@/components/about';
import { Agents } from '@/components/agents';

export default function AboutPage() {
  return (
    <>
      <h1 className='mb-6 text-center text-3xl font-semibold text-sky-950 dark:text-blue-100'>
        Building dreams with a tradition of trust
      </h1>

      <AboutDescription />
      <Agents />
    </>
  );
}
