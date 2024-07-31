
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from './auth'

export const useProperties = () => {

    const { user } = useAuth({ middleware: 'auth' })

    return {

    }
}