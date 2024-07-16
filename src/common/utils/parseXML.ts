import { parseString } from "xml2js"

export interface Quote {
  ID: string
  Symbol: string
  Last: string
  LastUpdate: string
  PctChange: string
  FieldType: string
  ErrorCode: string
}

export interface Root {
  TimeStamp: string
  Quote: Quote[]
}

export interface XmlData {
  Root: Root
}

export async function parseXml(xmlData: string): Promise<XmlData> {
  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result as XmlData)
      }
    })
  })
}
