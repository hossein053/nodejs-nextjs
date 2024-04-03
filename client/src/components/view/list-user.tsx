'use client'

import { User } from "@/types"

type data = {
    count: number;
    page: number;
    pages: number;
    data: User[]
}

export const ListUser = ({ data }: { data: data }) => {

    return (
        <section className="container">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="grid grid-cols-3 gap-x-3">
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((item, index) => {
                        return (
                            <tr className="odd:bg-white even:bg-gray-100 grid grid-cols-3 gap-x-3" key={index}>
                                <td className="text-center">{item._id}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}
