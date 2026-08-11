export async function generatIdempotentKey (){
    return crypto.randomUUID();
}
    