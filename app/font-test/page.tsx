'use client'

import { useEffect } from 'react'

export default function FontTest() {
  useEffect(() => {
    // 폰트 적용 확인을 위한 콘솔 로그
    const bodyFont = window.getComputedStyle(document.body).fontFamily
    console.log('현재 body에 적용된 폰트:', bodyFont)

    // 특정 요소의 폰트 확인
    const jakartaElement = document.querySelector('.font-jakarta')
    if (jakartaElement) {
      const jakartaFont = window.getComputedStyle(jakartaElement).fontFamily
      console.log('Jakarta 폰트 적용된 요소의 폰트:', jakartaFont)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-bold">폰트 테스트 페이지</h1>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Noto Sans (기본 폰트)</h2>
          <p className="font-sans">
            Noto Sans는 Google이 개발한 다국어 지원 폰트입니다. 이 텍스트는 Noto Sans 폰트로
            표시됩니다.
          </p>
          <p className="mt-4 font-sans">
            Bahasa Indonesia adalah bahasa resmi Republik Indonesia dan merupakan bahasa persatuan
            bangsa Indonesia.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="font-jakarta mb-4 text-xl font-bold">Plus Jakarta Sans</h2>
          <p className="font-jakarta">
            Plus Jakarta Sans는 인도네시아의 수도 자카르타에서 영감을 받은 폰트입니다. 이 텍스트는
            Plus Jakarta Sans 폰트로 표시됩니다.
          </p>
          <p className="font-jakarta mt-4">
            Dengan lebih dari 270 juta penduduk, Indonesia adalah negara dengan populasi terbesar
            keempat di dunia.
          </p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">폰트 CSS 변수 확인</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold">Noto Sans 변수:</p>
            <div className="mt-2 rounded bg-gray-100 p-2 font-sans">var(--font-noto-sans)</div>
          </div>
          <div>
            <p className="font-bold">Jakarta Sans 변수:</p>
            <div className="font-jakarta mt-2 rounded bg-gray-100 p-2">var(--font-jakarta)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
