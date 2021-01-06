const users: string[] = await(fetch('https://raw.githubusercontent.com/KhushrajRathod/StarRing/main/users.json')).then(r => {r.json()});
users.forEach(async user => {
    const userRepos = await(fetch(`https://api.github.com/users/${user}/repos`)).then(r => {r.json()});
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
