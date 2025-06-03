import { ConnectorError, Key } from '@sailpoint/connector-sdk'
import NodeRSA from 'node-rsa'
import { DateTime } from 'luxon'

export class Util {
    constructor() {}

    async encryptStringCommand(text: string, key: string): Promise<any> {
        const publicKeyDer = Buffer.from(key, 'base64')
        const publicKey = new NodeRSA(publicKeyDer, 'pkcs8-public-der', {
            encryptionScheme: 'pkcs1',
        })

        const encrypted = publicKey.encrypt(text, 'base64')

        return { result: encrypted }
    }

    async joinArrayCommand(items: string[], delimiter: string): Promise<any> {
        const result = items.join(delimiter)
        return { result: result }
    }

    async toIntCommand(value: string): Promise<any> {
        if (typeof value !== 'string') {
            throw new Error(`'value' must be a string.`)
        }
        return { result: Number(value) }
    }

    async addCommand(a: number, b: number): Promise<any> {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error(`Both 'a' and 'b' must be numbers.`)
        }
        return { result: a + b }
    }

    async substractCommand(a: number, b: number): Promise<any> {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error(`Both 'a' and 'b' must be numbers.`)
        }
        return { result: a - b }
    }

    async multiplyCommand(a: number, b: number): Promise<any> {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error(`Both 'a' and 'b' must be numbers.`)
        }
        return { result: a * b }
    }

    async divideCommand(a: number, b: number): Promise<any> {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error(`Both 'a' and 'b' must be numbers.`)
        }

        if (b === 0) {
            throw new Error(`Division by zero is not allowed.`)
        }
        return { result: a / b }
    }

    async dateDiffFromNowCommand(date: string): Promise<any> {
        const inputDate = new Date(date)
        const now = new Date()

        if (isNaN(inputDate.getTime())) {
            throw new Error(`Invalid date input: "${date}"`)
        }

        // Difference in milliseconds
        const diffMs = now.getTime() - inputDate.getTime()

        // Convert to full days (rounded down)
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))

        return { days: days }
    }

    async toISO8601Command(date: string, format: string): Promise<any> {
        const dt = DateTime.fromFormat(date, format, { zone: 'utc' })
        if (!dt.isValid) throw new Error(`Date Time is not valid`)
        const iso = dt.toISO()

        return { result: iso }
    }

    async base64EncodeCommand(value: string): Promise<any> {
        if (typeof value !== 'string') {
            throw new Error(`Invalid input: 'value' must be a String.`)
        }
        const encoded = Buffer.from(value, 'ascii').toString('base64')
        return { result: encoded }
    }

    async base64DecodeCommand(value: string): Promise<any> {
        try {
            const text = Buffer.from(value, 'base64').toString('utf-8')
            return { result: text }
        } catch (err) {
            throw new Error(`Failed to decode base64 string: ${err}`)
        }
    }
}
