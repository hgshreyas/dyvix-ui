type ClassType = string | undefined

export function ConstructClasses(...clasess : ClassType[]) {
  return clasess.filter(Boolean).join(' ');
}
