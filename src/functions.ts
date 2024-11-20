import { filterElems, filterAllEnum } from './types/uiTypes'

export default function updateFilter(prevFilter: string[], toggleItem: string): string[] {
  const allSelectedArr = Object.keys(filterElems)

  if (!prevFilter.includes(toggleItem) && (prevFilter.length === 3 || toggleItem === filterAllEnum.ALL)) {
    return allSelectedArr
  }
  if (!prevFilter.includes(toggleItem)) {
    return [...prevFilter, toggleItem]
  }
  if (prevFilter.includes(toggleItem) && toggleItem !== filterAllEnum.ALL) {
    return prevFilter.filter((item) => item !== toggleItem && item !== filterAllEnum.ALL)
  }

  return []
}
