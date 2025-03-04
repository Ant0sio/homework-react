import {IDummy} from "../models/IDummy/IDummy.ts";

const ApiService = async ():Promise<IDummy> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json())
};

export default ApiService;