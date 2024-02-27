import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link href={'/ssc-csc'}>ssc-csc</Link>
        </li>
        <li>
          <Link href={'/suspense'}>suspense</Link>
        </li>
        <li>
          <Link href={'/error-fallback'}>error-fallback</Link>
        </li>
      </ol>
    </main>
  );
}
