import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGift";

export const useFetchGifts = (categoria) => {
    const [state, setstate] = useState({
        data : [],
        loading : true
    })

    useEffect(() => {
        getGifts(categoria)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            });
    }, [categoria]);

    return state;
}
