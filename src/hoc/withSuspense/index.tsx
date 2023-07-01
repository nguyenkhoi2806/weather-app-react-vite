/* eslint-disable */

import React, { Suspense } from 'react';

import Loading from '@/components/Loading';

const withSuspense = (Component: React.ElementType) =>
  function (props: any) {
    return (
      <Suspense
        fallback={
          <div className="m-auto w-full justify-center flex">
            <Loading />
          </div>
        }
      >
        <Component props={props} />
      </Suspense>
    );
  };

export default withSuspense;
