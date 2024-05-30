type FootballPlayer={
    name:string,
    age:number
}

type FootballPlayerDetail={
    role:string,
    team:string,
}

type fullPlayerData = FootballPlayer & FootballPlayerDetail;

const player:fullPlayerData = {
    name:"Rushford",
    age:20,
    role:"Striker",
    team:"Manchester United",
}


console.log(player.name)
console.log(player.age)
console.log(player.role)
console.log(player.team)
