import config from 'config'

export const getBaseUrl = () => {
    return config.get("baseUrl")
}

export const getApiUsername = () => {
    return config.get("apiUsername")
}

export const getApiPassword = () => {
    return config.get("apiPassword")
}