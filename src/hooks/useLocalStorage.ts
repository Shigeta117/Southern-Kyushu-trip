import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

/**
 * localStorage と同期する state。
 * 外部データ（localStorage の中身は改変されうる）を信頼しないため、
 * JSON.parse を try/catch で保護し、validate で型を検証する。
 */
export function useLocalStorage<T>(
  key: string,
  initial: T,
  validate?: (value: unknown) => value is T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw === null) return initial
      const parsed: unknown = JSON.parse(raw)
      if (validate) return validate(parsed) ? parsed : initial
      return parsed as T
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // 容量超過やプライベートモードなどは無視（永続化はベストエフォート）
    }
  }, [key, value])

  return [value, setValue]
}

/** Record<string, boolean> 形式（チェックリスト）の検証 */
export function isCheckedMap(value: unknown): value is Record<string, boolean> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false
  return Object.values(value).every((v) => typeof v === 'boolean')
}
