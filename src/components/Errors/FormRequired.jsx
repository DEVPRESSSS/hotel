export function RequiredFormPage({nameOfError}){

    return(
         <p className="mt-1 text-sm
             text-red-600">
                {nameOfError}
        </p>
    )
}