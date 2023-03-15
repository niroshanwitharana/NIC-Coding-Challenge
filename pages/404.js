import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react'

const NotFound = () => {
    // this router object have a method call go, we can use it to redirect the page
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1) will take one stage to history 0r router.go(1) will take it forward
            router.push('/') 

        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the</p>
            <p><Link href='/'>Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;