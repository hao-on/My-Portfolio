import { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [ completion, setCompletion ] = useState<Number>(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress : number = window.scrollY;
            const scrollHeight : number = document.body.scrollHeight - window.innerHeight;

            if(scrollHeight) {
                setCompletion(+Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        }
        // event
        window.addEventListener('scroll', updateScrollCompletion)
        // clear event
        return () => window.removeEventListener('scroll', updateScrollCompletion)
    }, [])
  return completion
}

export default useScrollProgress
