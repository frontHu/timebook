export function combineType(sagaType, actionType) {
  return `${sagaType}_${actionType}`
}