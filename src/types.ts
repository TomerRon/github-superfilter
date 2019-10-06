export interface IFile {
  readonly name: string
  readonly node: HTMLElement
}

export interface IIndexSignature<T> {
  readonly [key: string]: T
}
