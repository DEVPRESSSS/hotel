
export function NavBarDefault (){

    const navbarButtons = [
        { title: 'Home', isActive: true, id: 1 },
        { title: 'About Us', isActive: true, id: 2},
        { title: 'Room', isActive: true, id: 3 },
        { title: 'Services', isActive: false, id: 4 },
    ];

    let listOfButtons = navbarButtons.map(p=>
        <li key={p.id}>
            {p.title}
        </li>
    );
    return (
        <>
          <div className="w-auto flex flex-row items-center shadow-sm p-2 justify-center h-15">
                <ul className="flex flex-row gap-3 cursor-pointer">{listOfButtons}</ul>
          </div>
        </>

      
    );
}