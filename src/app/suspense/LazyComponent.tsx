'use client';
import {useEffect, useState} from 'react';

function fetchData(): Promise<string> {
  return new Promise(resolve => {
    console.log('start');
    setTimeout(() => {
      resolve('データ読み込み完了');
    }, 3000); // 3秒後に解決
  });
}
let data: string | undefined;

function useLazyData(): string {
  // dataがまだ無ければローディングを開始する
  if (data === undefined) {
    throw fetchData().then(d => (data = d));
  }
  return data;
}

const LazyComponent: React.FC = () => {
  const data = useLazyData();

  return <p>{data}</p>;
};

export default LazyComponent;
