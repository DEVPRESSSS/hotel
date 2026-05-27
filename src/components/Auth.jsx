export function AuthDefault(){
    const authBtns = [
        {title: "Login", id: 1},
        {title: "Register", id: 2},

    ];
    return (
        <>
        {
            authBtns.map(p=>(
                <li className="text-black text-sm" key={p.id}>
                    {p.title}
                </li>
            ))
        }
        </>
        
    );
}