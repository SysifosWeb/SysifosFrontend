export {}
declare global {
  interface Window {
    SysifosConsent?: {
      choose(analytics: boolean, action?: 'accept' | 'reject' | 'save'): void
      openPreferences(): void
      track(name: string, parameters?: Record<string, unknown>): boolean
      pageView(): void
      mount(): void
      getState(): { analytics: boolean; decided: boolean; version: string }
    }
  }
}
