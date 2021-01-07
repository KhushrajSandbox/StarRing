const usersResponse = await fetch('https://raw.githubusercontent.com/KhushrajRathod/StarRing/main/users.json')
const users: string[] = await usersResponse.json()

users.forEach(async user => {
    try {
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos`)
        const userRepos = await reposResponse.json()

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
    } catch {}
})

export { } // Classify as TypeScript module
