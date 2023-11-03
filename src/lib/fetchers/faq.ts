export default async function Faq(){
    try{
        const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/home/faq`,
        {
            method:'GET',
            headers : {
                'Content-Type':'application/json',
            },
            credentials : 'include'
        })
        const data = resp.json();
        return data;
    }catch(err){
        return console.log(err);
    }
}