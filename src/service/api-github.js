export async function getUser(username){
    const user = await fetch(`https://api.github.com/users/${username}`).then(res => res.json())
    return user
}