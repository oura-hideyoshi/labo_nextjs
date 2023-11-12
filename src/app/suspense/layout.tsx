interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = props => {
  return (
    <>
      <h1>{`<Suspense />`}</h1>
      {props.children}
    </>
  );
};

export default layout;
