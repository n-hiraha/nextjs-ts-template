import Link from 'next/link';
import Layout from 'components/Layout';

const IndexPage = () => {
  console.log('red');
  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1>Hello Next.js 👋</h1>

      <object data='' type=''></object>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
