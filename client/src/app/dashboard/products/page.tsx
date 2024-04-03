import { ListUser } from "@/components"
import { URL } from "@/utils/config"
import { Fragment } from "react"


async function getData() {
    const res = await fetch(`${URL}/users`, {
        next: { revalidate: 100 }
    })
    return res.json()
}

export default async function Page() {
    const data = await getData()
    return (
        <Fragment>
            <ListUser data={data} />
        </Fragment>
    )
}