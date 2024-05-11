'use client'

import { API } from "@/api";
import { Form, ImageUploader, Text, Textarea } from "@/components";
import { useRouter } from "next/navigation";

export const AddPost = () => {

    const { push } = useRouter()

    async function submit(data: FormData) {

        await API.post('/user/add_post', data).then(response => {
            if (response.status === 200) {
                push('/dashboard/list-post')
            }
        })
    }

    return (
        <figure className="w-full">
            <h1 className="text-center font-semibold text-2xl text-purple_75 pb-16">To register an ad, enter its information</h1>
            <Form onSend={submit} className="grid grid-cols-4 gap-4 w-1/2 mx-auto">
                <Text
                    name="title"
                    title="Title"
                    className="md:col-span-2 col-span-4"
                    type="text"
                />
                <Text
                    name="price"
                    title="Price"
                    className="md:col-span-2 col-span-4"
                    type="number"
                />
                <Textarea
                    name="description"
                    title="Description"
                    className="col-span-4"
                />
                <ImageUploader
                    className="col-span-4"
                    name="image"
                />
                <div className="col-span-4 row">
                    <button type='submit' className="row gap-x-2 shadow-sx border border-purple_25 px-10 py-2 bg-purple_75 text-white font-semibold text-lg w-1/2 whitespace-nowrap rounded-md mt-5">
                        submit
                    </button>
                </div>
            </Form>
        </figure>
    )
}
