import React, { lazy, Suspense } from 'react'

function LazyComponent(importStatement) {
  const Component = lazy(importStatement)
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props}/>
    </Suspense>
  );
}

export default LazyComponent
