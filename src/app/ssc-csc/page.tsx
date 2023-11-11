import CreateContextComponent from '@/components/CreateContextComponent';

interface Props {}

const page: React.FC = () => {
  return (
    <>
      <h1>Next.js can render client side component in server side component</h1>
      <p>you don&apos;t need dynamic import</p>
      <div style={{border: '1px solid gray'}}>
        Im server side component
        <CreateContextComponent>children</CreateContextComponent>
      </div>
    </>
  );
};

export default page;
