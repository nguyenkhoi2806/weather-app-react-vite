/* eslint-disable */

import React, { Suspense } from 'react';

import Loading from '@/components/Loading';

const withSuspense = (Component: React.ElementType) =>
  function (props: any) {
    return (
      <Suspense fallback={<Loading />}>
        <Component props={props} />
      </Suspense>
    );
  };

export default withSuspense;
