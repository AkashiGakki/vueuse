import type { Ref } from 'vue'
import { computed } from 'vue'

/**
 * Apply default value to a ref.
 *
 * @__NO_SIDE_EFFECTS__
 */
export function refDefault<T>(source: Ref<T | undefined | null>, defaultValue: T): Ref<T> {
  return computed({
    get() {
      return source.value ?? defaultValue
    },
    set(value) {
      source.value = value
    },
  })
}
