"use client"

import { clsx } from "clsx"
import Link from "next/link"
import { useEffect, useState } from "react"
import { parseXml, XmlData } from "@/common/utils/parseXML"
import { Skeleton } from "@/components/ui/skeleton"
import { OptionalString } from "@/common/types"
import * as CryptoJS from "crypto-js"
import AAStockLogo from "../common/atom/AAStockLogo"

const StockQuote: React.FC<{ stockQuote: OptionalString }> = (stockQuote) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<XmlData | null>(null)
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  const date = new Date()
  const newDate = date.toLocaleString("en-ZA", {
    timeZone: "Asia/Hong_Kong",
    year: `numeric`,
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const removeSpecialChar = newDate.replace(/[^\w\s]/g, "")
  const finalDate = removeSpecialChar.replace(/[^\d:/]/g, "")
  const string = `SOUT${finalDate}`
  const key = "aastocks78broker34encrypt56key01"
  const fkey = CryptoJS.enc.Utf8.parse(key)
  const enc = CryptoJS.AES.encrypt(string, fkey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })

  const brokerParams = "SOUT"
  const languageParams = "chi"
  const encodingParams = "utf8"
  const formatParams = "3"
  const realParams = "0"
  const qlParams = "1"
  const fieldTypeParams = "3"
  const symbolParams = stockQuote.stockQuote
  const validationtypeParams = "1"
  const tokenParams = enc.ciphertext.toString(CryptoJS.enc.Hex)
  const apiUrl = `/aastocks/getquote.ashx?broker=${brokerParams}&language=${languageParams}&encoding=${encodingParams}&format=${formatParams}&real=${realParams}&QL=${qlParams}&symbol=${symbolParams}&fieldtype=${fieldTypeParams}&validationtype=${validationtypeParams}&token=${tokenParams}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Accept: "application/xml",
            "content-type": "application/x-www-form-urlencoded",
          },
        })
        if (!response.ok) {
          setError(response.type)
          throw new Error("Failed to fetch data")
        }
        const data = await response.text()
        const parsedData = await parseXml(data || "")
        setData(parsedData)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [apiUrl])

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer)
  }

  if (loading) {
    return (
      <>
        <Skeleton className="mt-6 h-[52px] w-[124px]" />
        <Skeleton className="mt-2 mb-6 h-4 w-[350px]" />
      </>
    )
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!data) {
    return <p>No data available</p>
  }

  const { Quote } = data.Root
  const ErrorCode = Quote[0].ErrorCode

  if (ErrorCode !== undefined) {
    return null
  }

  const symbol = Quote[0].Symbol
  const stockPrice = Quote[0].Last
  const lastUpdate = Quote[0].LastUpdate
  const pctChange = Quote[0].PctChange
  const isDrop = pctChange[0].includes("-")

  return (
    <div className="my-6">
      <Link
        href={`http://www.aastocks.com/tc/stocks/quote/quick-quote.aspx?symbol=${symbol}`}
        target="_blank"
        className="inline-block rounded shadow-[0px_2px_4px_2px_rgba(0,0,0,0.08)] p-1.5 bg-white hover:cursor-pointer hover:bg-secondary-100"
      >
        <div className="text-xs font-bold">{symbol}:HK</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="text-base font-medium">{stockPrice}</div>
          <div
            className={clsx("justify-start items-center gap-1 flex", isDrop ? "text-primary-900" : "text-[#009900]")}
          >
            <div className="text-[11px] font-['Noto Sans'] leading-4 tracking-wider">
              {isDrop ? pctChange.toString().replace("-", "") : pctChange}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="text-primary-900"
              color="text-primary-900"
              className={isDrop ? "text-primary-900" : "text-[#009900] rotate-180"}
            >
              <path d="M4.75 7.5L0.852887 0.749999L8.64711 0.75L4.75 7.5Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </Link>
      <div className="text-secondary-600 text-xs font-normal leading-4 mt-2">
        資料最少有十五分鐘延遲 最後更新於: {lastUpdate}
      </div>
      <div className="relative text-secondary-600 text-xs font-normal leading-4 mt-2 flex">
        <div className="mr-[2px]">
          <AAStockLogo />
        </div>
        資料由AASTOCKS提供
        <button onClick={toggleDisclaimer} className="underline">
          免責聲明
        </button>
        {showDisclaimer && (
          <div className="absolute top-6 left-0 mx-auto h-fit bottom-0 popover w-full max-w-[330px] bg-white border rounded">
            <div className="flex relative flex-col justify-between items-center p-4">
              <h3 className="text-lg font-bold pb-4 w-full">免責聲明</h3>
              <p className="h6">
                聲明 :{" "}
                <Link href={`http://aastocks.com/`} target="_blank" className="underline">
                  AASTOCKS.com{" "}
                </Link>
                Limited丶香港資訊服務有限公司丶中國投資資訊有限公司丶深圳證券資訊有限公司丶其控股公司及交易所／或該等控股公司的任何附屬公司，及／其他資訊來源以及／或其他第三方資料供應商均竭力確保所提供資訊的準確和可靠程度，但不能保證其絕對準確和可靠，且亦不會承擔因任何不準確或遺漏而引起的任何損失或損害的責任（無論是否）當事人法下的責任或契約責任及或其他責任）
              </p>
              <button
                onClick={toggleDisclaimer}
                className="text-gray-500 bg-secondary-700 absolute right-[-20px] top-[-20px] hover:text-gray-700 p-[9px] rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path
                    d="M14.25 5.3075L13.1925 4.25L9 8.4425L4.8075 4.25L3.75 5.3075L7.9425 9.5L3.75 13.6925L4.8075 14.75L9 10.5575L13.1925 14.75L14.25 13.6925L10.0575 9.5L14.25 5.3075Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StockQuote
