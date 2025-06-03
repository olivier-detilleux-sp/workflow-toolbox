import { ConnectorError, Key } from '@sailpoint/connector-sdk'

export class MyClient {
    private readonly token?: string

    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        this.token = config?.token
        if (this.token == null) {
            throw new ConnectorError('token must be provided from config')
        }
    }

    async testConnection(): Promise<any> {
        return {}
    }
}
