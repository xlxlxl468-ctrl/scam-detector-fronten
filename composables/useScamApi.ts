declare const useRuntimeConfig: () => { public: { apiBase: string } }
declare const $fetch: <T>(url: string, options?: { method?: string; body?: any }) => Promise<T>

type PredictResult = {
  is_scam: boolean
  probability: number
  risk_level: string
  risk_description: string
  reason: string
}

type ChatContext = {
  text?: string
  is_scam?: boolean
  probability?: number
  risk_level?: string
  risk_description?: string
  reason?: string
}

type PhoneMatch = {
  raw: string
  normalized: string
  type: 'mobile' | 'landline' | 'toll_free' | 'unknown'
  start: number
  end: number
}

type UrlScanResult = {
  ok: boolean
  url: string
  host: string
  final_url: string
  redirected: boolean
  risk_score: number
  safety_score: number
  risk_level: 'LOW' | 'MEDIUM' | 'HIGH'
  findings: string[]
  is_whitelisted: boolean
  phone_matches: PhoneMatch[]
}

type OcrAnalyzeResult = {
  ok: boolean
  text: string
  predict: PredictResult | null
  phone_matches: PhoneMatch[]
  ai_answer: string
}

export const useScamApi = () => {
  const config = useRuntimeConfig()
  const base = config.public.apiBase

  const predict = async (text: string): Promise<PredictResult> => {
    const res = await $fetch<{ ok: boolean; result: PredictResult }>(`${base}/predict`, {
      method: 'POST',
      body: { text }
    })
    return res.result
  }

  const batch = async (texts: string[]) => {
    return await $fetch<{ ok: boolean; count: number; results: Array<{ text: string; is_scam: boolean; probability: number; risk_level: string; risk_description: string; reason: string }> }>(`${base}/batch`, {
      method: 'POST',
      body: { texts }
    })
  }

  const chat = async (question: string, context?: ChatContext) => {
    const res = await $fetch<{ ok: boolean; answer: string }>(`${base}/chat`, {
      method: 'POST',
      body: { question, context: context || {} }
    })
    return res.answer
  }

  const scanUrl = async (url: string) => {
    return await $fetch<UrlScanResult>(`${base}/url-scan`, {
      method: 'POST',
      body: { url }
    })
  }

  const detectPhones = async (text: string) => {
    return await $fetch<{ ok: boolean; count: number; matches: PhoneMatch[] }>(`${base}/phone-detect`, {
      method: 'POST',
      body: { text }
    })
  }

  const analyzeOcr = async (file: File) => {
    const form = new FormData()
    form.append('image', file)
    return await $fetch<OcrAnalyzeResult>(`${base}/ocr-analyze`, {
      method: 'POST',
      body: form
    })
  }

  return { predict, batch, chat, scanUrl, detectPhones, analyzeOcr }
}
