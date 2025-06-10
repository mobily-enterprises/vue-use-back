import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const stack = ref([])

export function useBackButton() {
  const router = useRouter()

  function trackNavigation() {
    router.beforeEach((to, from, next) => {
      const navState = window.history.state
      const goingBack = navState?.back === from.fullPath
      const goingForward = navState?.forward === to.fullPath
      const isReplace = !goingBack && !goingForward && stack.value.length && to.fullPath === stack.value[stack.value.length - 1]?.fullPath

      if (goingBack) {
        stack.value.pop()
      } else if (!isReplace && from.name && from.fullPath !== to.fullPath) {
        stack.value.push(from)
      }

      next()
    })
  }

  const canGoBack = computed(() => stack.value.length > 0)

  function goBack() {
    stack.value.pop()
    router.back()
  }

  return {
    trackNavigation,
    canGoBack,
    goBack
  }
}
