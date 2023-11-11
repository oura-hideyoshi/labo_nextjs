import CreateContextComponent from '@/components/CreateContextComponent';

interface Props {}

const page: React.FC = () => {
  return (
    <div>
      <CreateContextComponent>
        <h1>
          Next.js can render client side component in server side component
        </h1>
      </CreateContextComponent>
    </div>
  );
};

export default page;
