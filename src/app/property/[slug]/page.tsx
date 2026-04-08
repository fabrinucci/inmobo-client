import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getProperty } from '@/services';
import { PropertyCard } from '@/components/properties';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const property = await getProperty({ slug });
  if (!property) redirect('/');
  const { address, name, operation_type, property_type, price } = property;

  return (
    <section>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-6 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0'>
          <div className='text-sky-950 dark:text-blue-100'>
            <h2
              className='mb-2 text-center text-2xl font-semibold md:text-left'
              data-testid='property-name'
            >
              {property_type} - {name}
            </h2>
            <p className=''>{address}</p>
          </div>
          <div className='flex items-center gap-4 md:flex-col md:gap-2'>
            <h2 className='text-2xl font-bold text-sky-800 dark:text-blue-200'>$ {price}</h2>
            <Link
              href={`/properties?operation=${operation_type.toLowerCase()}`}
              className='rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-semibold uppercase text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 md:px-6 md:py-3'
            >
              {operation_type}
            </Link>
          </div>
        </div>
        <PropertyCard property={property} />
      </div>
    </section>
  );
}
