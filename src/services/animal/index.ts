"use server"

import config from "@/configs"

// create getAllAnimal server action
export const getAllAnimal = async () => {
    const res = await fetch(`${config.baseUrl}/animal`, { cache: "force-cache", next: { tags: ["animals"] } })

    return res.json()
}

// create getAllCategory server action
export const getAllCategory = async () => {
    const res = await fetch(`${config.baseUrl}/category`, { cache: "force-cache", next: { tags: ["categories"] } })

    return res.json()
}