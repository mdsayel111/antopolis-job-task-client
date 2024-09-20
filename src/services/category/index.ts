import config from "@/configs"
import { TCategory } from "@/types/category"

// create getAllCategory server action
export const getAllCategory = async () => {
    const res = await fetch(`${config.baseUrl}/category`, { cache: "no-store" })

    return res.json()
}

// create getAllCategory server action
export const createCategory = async (data: TCategory) => {
    const res = await fetch(`${config.baseUrl}/category`, { cache: "no-store", method: "POST", body: JSON.stringify(data), headers: { 'content-type': 'application/json' } })
    return res.json()
}