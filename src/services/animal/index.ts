"use server"

import config from "@/configs"
import { TAnimal } from "@/types/animal"

// create getAllAnimal server action
export const getAllAnimal = async (queryStrimg: string) => {
    const res = await fetch(`${config.baseUrl}/animal?category=${queryStrimg}`, { cache: "no-store" })

    return res.json()
}

// create getAllAnimal server action
export const createAnimal = async (data: TAnimal) => {
    const res = await fetch(`${config.baseUrl}/animal`, { cache: "no-store", method: "POST", body: JSON.stringify(data), headers: { 'content-type': 'application/json' } })

    return res.json()
}

