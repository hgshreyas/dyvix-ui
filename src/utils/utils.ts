type ClassType = string | undefined

export function ConstructClasses(...classes : ClassType[]) {
  return classes.filter(Boolean).join(' ');
}
