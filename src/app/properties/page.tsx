import Link from 'next/link';
import { Property } from '@/components/properties';
import { getProperties } from '@/services';

export const runtime = 'edge';

interface Props {
  searchParams: Promise<{
    operation?: string;
  }>;
}

export default async function PropertiesPage({ searchParams }: Props) {
  const { operation } = await searchParams;

  const properties = await getProperties();
  const operationValue = operation === 'sale' ? 'sale' : operation === 'rent' ? 'rent' : null;

  const filterProperties = (type: 'sale' | 'rent' | null) => {
    if (!type) return properties;
    return properties.filter((p) => p.operation_type.toLowerCase() === type);
  };

  const filteredProperties = filterProperties(operationValue);

  const linkClasses =
    'rounded-lg bg-blue-600 px-3 py-1.5 text-center text-sm font-semibold uppercase text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 md:px-6 md:py-3 md:text-base';

  return (
    <div className='mx-auto max-w-5xl'>
      <h1
        className='mb-6 text-center text-3xl font-semibold text-sky-950 dark:text-blue-100'
        data-testid='properties-title'
      >
        Take a look at our {operationValue ? `${operationValue} properties` : 'properties'}
      </h1>

      <div className='mb-10 flex items-center justify-center gap-4'>
        <Link href='/properties?operation=all' className={linkClasses}>
          All Properties
        </Link>
        <Link href='/properties?operation=sale' className={linkClasses}>
          For Sale
        </Link>
        <Link href='/properties?operation=rent' className={linkClasses}>
          For Rent
        </Link>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3' data-testid='properties-card'>
        {filteredProperties.map((p) => (
          <Property key={p.property_id} property={p} />
        ))}
      </div>
    </div>
  );
}
