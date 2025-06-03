import { Context, createConnector, Response, logger } from '@sailpoint/connector-sdk'
//import { MyClient } from './my-client'
import { Util } from './util/util'

// Connector must be exported as module property named connector
export const connector = async () => {
    // Get connector source config
    //const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    //const myClient = new MyClient(config)
    // const myClient = new MyClient()
    const util = new Util()

    return createConnector()
        .command(
            'util:string:toInt',
            async (context: Context, input: { value: string }, res: Response<{ number: number }>) => {
                res.send(await util.toIntCommand(input.value))
            }
        )
        .command(
            'util:password:encrypt',
            async (
                context: Context,
                input: { key: string; password: string },
                res: Response<{ encrypted: string }>
            ) => {
                res.send(await util.encryptPasswordCommand(input.key, input.password))
            }
        )
        .command(
            'util:array:join',
            async (
                context: Context,
                input: { items: string[]; delimiter: string },
                res: Response<{ result: string }>
            ) => {
                res.send(await util.joinArrayCommand(input.items, input.delimiter))
            }
        )
        .command(
            'util:math:add',
            async (context: Context, input: { a: number; b: number }, res: Response<{ result: number }>) => {
                res.send(await util.addCommand(input.a, input.b))
            }
        )
        .command(
            'util:math:substract',
            async (context: Context, input: { a: number; b: number }, res: Response<{ result: number }>) => {
                res.send(await util.substractCommand(input.a, input.b))
            }
        )
        .command(
            'util:math:multiply',
            async (context: Context, input: { a: number; b: number }, res: Response<{ result: number }>) => {
                res.send(await util.multiplyCommand(input.a, input.b))
            }
        )
        .command(
            'util:math:divide',
            async (context: Context, input: { a: number; b: number }, res: Response<{ result: number }>) => {
                res.send(await util.divideCommand(input.a, input.b))
            }
        )
        .command(
            'util:date:diff-from-now',
            async (context: Context, input: { date: string }, res: Response<{ result: string }>) => {
                res.send(await util.dateDiffFromNowCommand(input.date))
            }
        )
        .command(
            'util:date:to-iso8601',
            async (context: Context, input: { date: string; format: string }, res: Response<{ result: string }>) => {
                res.send(await util.toISO8601Command(input.date, input.format))
            }
        )
        .command(
            'util:string:base64-encode',
            async (context: Context, input: { value: string }, res: Response<{ result: string }>) => {
                res.send(await util.base64EncodeCommand(input.value))
            }
        )
        .command(
            'util:string:base64-decode',
            async (context: Context, input: { value: string }, res: Response<{ result: string }>) => {
                res.send(await util.base64DecodeCommand(input.value))
            }
        )
}
