export type ContactUs = {
	name: string;
	email: string;
	phone: string ;
	message:string;
};

export default async function contactUs(props:Partial<ContactUs>){
    try{
        const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/global/contactUs`, {
            method : 'POST',
            headers : {
                'Content-Type':'application/json',
                'userUniqueId':'Guest'
            },
            body: JSON.stringify(props),
            credentials:'include'
        })
        const data = await resp.json();
        return data;
    }catch(error){  
        console.log(error)
    }
}