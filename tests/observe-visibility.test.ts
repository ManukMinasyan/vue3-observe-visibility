import { test, expect } from 'vitest'
import ObserveVisibility from '../src/directives/observe-visibility'

test('directive defines getSSRProps for SSR compatibility', () => {
    expect(typeof ObserveVisibility.getSSRProps).toBe('function')
})
