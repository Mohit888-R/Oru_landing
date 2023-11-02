

export default async function reviews(){
    try{
        const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/home/reviews`, {
            method : 'GET',
            headers : {
                'Content-Type':'application/json',
            },
            credentials:'include'
        })
        const data = await resp.json();
        return data;
    }catch(error){  
        return console.log(error)
    }
}