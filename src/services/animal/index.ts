"use server"

import config from "@/configs"
import { TAnimal } from "@/types/animal"

// create getAllAnimal server action
export const getAllAnimal = async (queryString: string | null) => {
    let url = `${config.baseUrl}/animal`

    // if queryStrimg exist
    if (queryString) {
        url += `?category=${queryString}`
    }
    const res = await fetch(url, { cache: "no-store" })

    return res.json()
}

// create getAllAnimal server action
export const createAnimal = async (data: TAnimal) => {
    console.log(data)
    const res = await fetch(`${config.baseUrl}/animal`, { cache: "no-store", method: "POST", body: JSON.stringify(data), headers: { 'content-type': 'application/json' } })

    return res.json()
}

