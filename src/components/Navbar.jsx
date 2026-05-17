
export function NavBarDefault (){

    const navbarButtons = [
        { title: 'Home', isActive: true, id: 1 },
        { title: 'Room', isActive: true, id: 2 },
        { title: 'Services', isActive: false, id: 3 },
        { title: 'Location', isActive: false, id: 4 },
    ];

    let listOfButtons = navbarButtons.map(p=>
        <li key={p.id}>
            {p.title}
        </li>
    );
    return (
        <>
          <div className="w-auto flex flex-row shadow-sm p-2 justify-center m-2 rounded-lg">
                <ul className="flex flex-row gap-3 ">{listOfButtons}</ul>
          </div>
        </>

      
    );
}