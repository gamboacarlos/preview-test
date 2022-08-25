import { MainStore } from '../store'

// State selectors ==============================================================
export const currentOffset = (state: Partial<MainStore>) => state.currentOffset
