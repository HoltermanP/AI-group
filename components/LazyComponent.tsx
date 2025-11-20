import { Suspense, lazy, ComponentType } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface LazyComponentProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function LazyComponent({ 
  children, 
  fallback = <LoadingSpinner /> 
}: LazyComponentProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Higher-order component for lazy loading
export function withLazyLoading<T extends Record<string, any>>(
  Component: ComponentType<T>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return function LazyLoadedComponent(props: T) {
    return (
      <Suspense fallback={fallback || <LoadingSpinner />}>
        <LazyComponent {...(props as any)} />
      </Suspense>
    )
  }
}
