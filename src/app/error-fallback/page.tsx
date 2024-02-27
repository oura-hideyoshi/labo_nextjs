'use client';

import ErrorBoundary from '@/components/ErrorBoundary';
import {Suspense, useState} from 'react';

interface Props {}

const Page: React.FC = () => {
  const [visibleErrorComponent, setErrorVisibleComponent] =
    useState<boolean>(false);
  const [visibleSuspenseErrorComponent, setSuspenseErrorVisibleComponent] =
    useState<boolean>(false);

  function errorFunction() {
    console.error('errorFunction で error が発生しました');
    throw new Error('errorFunction で error が発生しました');
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <button onClick={errorFunction}>
        error が発生する function を実行する
      </button>
      <button onClick={() => setErrorVisibleComponent(true)}>
        mount 中に error が発生する component を表示する
      </button>
      {visibleErrorComponent && <ErrorComponent />}
      <button onClick={() => setSuspenseErrorVisibleComponent(true)}>
        mount 中に error が発生する Suspense を表示する
      </button>
      {visibleSuspenseErrorComponent && (
        <ErrorBoundary fallback={<div>error</div>}>
          <ErrorComponent />
        </ErrorBoundary>
      )}
    </div>
  );
};

const ErrorComponent: React.FC = () => {
  throw new Error('error が発生しました');

  return <div>表示されることのない component</div>;
};

export default Page;
