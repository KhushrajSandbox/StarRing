const users: string[] = await (await fetch('https://raw.githubusercontent.com/KhushrajRathod/StarRing/main/users.json')).json()
users.forEach(async user => {
    const userRepos = await(await fetch(`https://api.github.com/users/${user}/repos`)).json()
    userRepos.forEach((userRepo: any) => {
        fetch(`https://api.github.com/user/starred/${user}/${userRepo.name}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${Deno.args[0]}`,
                'Content-Length': "0",
                'Accept': "application/vnd.github.v3+json"
            }
        })
    })
})
export { } // Classify as TypeScript module