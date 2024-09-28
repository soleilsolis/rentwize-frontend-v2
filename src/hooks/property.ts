import axios from '@/lib/axios'

interface IApiRequest {
    setErrors: React.Dispatch<React.SetStateAction<never[]>>
    setStatus: React.Dispatch<React.SetStateAction<any | null>>
    [key: string]: any
}

interface LoginApiRequest extends IApiRequest {
    setProperties: React.Dispatch<React.SetStateAction<never[]>>
}

export const useProperty = () => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const indexProperties = async args => {
        const { setProperties, ...props } = args

        await csrf()

        axios.get('/api/properties', props).then(response => {
            console.log(response.data)
            setProperties(response.data)
        })
    }

    return { indexProperties }
}
