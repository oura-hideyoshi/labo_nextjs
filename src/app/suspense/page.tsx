'use client';

import {Suspense, useState} from 'react';
import LazyComponent from './LazyComponent';

interface Props {}

const Page = () => {
  const [showCase1, setShowCase1] = useState(false);
  const [showCase2, setShowCase2] = useState(false);

  return (
    <>
      <h2>suspend される component</h2>
      <button onClick={() => setShowCase1(true)}>show</button>
      <button onClick={() => setShowCase1(false)}>hide</button>

      {showCase1 && (
        <Suspense fallback="loading,,,">
          <LazyComponent />
        </Suspense>
      )}

      <h2>suspend で囲まない場合</h2>
      <button onClick={() => setShowCase2(true)}>show</button>
      <button onClick={() => setShowCase2(false)}>hide</button>
      {showCase2 && <LazyComponent />}

      <h2>memo</h2>
      <ul>
        <li>
          <p>
            すでに <code>LazyComponent</code>{' '}
            がmountされている場合、結果が再利用されるため、fallback
            が表示されない
          </p>
        </li>
        <li>
          <p>
            うっかり先に throw Promise するやつを render してしまった場合, この
            Promise が resolve されるまで render が止まってしまう
          </p>
        </li>
      </ul>
    </>
  );
};

export default Page;
