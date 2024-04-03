import { Request } from "express";

type Paginate = {
    count: number,
    page: number,
    pages: number,
    data: any,
} | null

type Props = {
    filter?: object,
    request: Request
}

const paginate = async (model: any, { filter = {}, request }: Props): Promise<Paginate> => {

    let data = model.find(filter);
    const page = Number(request.query.page) || 1;
    const pageSize = Number(request.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await model.countDocuments(filter);
    const pages = Math.ceil(total / pageSize);
    if (page > pages) {
        return null;
    }
    const result = await data.skip(skip).limit(pageSize);
    return {
        count: result.length,
        page,
        pages,
        data: result
    }
}

export default paginate