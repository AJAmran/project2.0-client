import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title}-EduToysHub`;
    }, [title])
}


export default useTitle;