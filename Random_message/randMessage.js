const setOfMessage=['User just joined the server - glhf!',
    'User just joined. Everyone, look busy!',
    'User just joined. Can I get a heal?',
    'User joined your party.',
    'User joined. You must construct additional pylons.',
    'Ermagherd. User is here.',
    'Welcome, User. Stay awhile and listen.',
    'Welcome, User. We were expecting you ( ͡° ͜ʖ ͡°)',
    'Welcome, User. We hope you brought pizza.',
    'Welcome User. Leave your weapons by the door.',
    'A wild User appeared.',
    'Swoooosh. User just landed.',
    'Brace yourselves. User just joined the server.',
    'User just joined. Hide your bananas.',
    'User just arrived. Seems OP - please nerf.',
    'User just slid into the server.',
    'A User has spawned in the server.',
    'Big User showed up!',
    'Where’s User? In the server!',
    'User hopped into the server. Kangaroo!!',
    'User just showed up. Hold my beer.',
    'Challenger approaching - User has appeared!',
    'It is a bird! It is a plane! Nevermind, it is just User.',
    'It is User! Praise the sun! [T]',
    'Never gonna give User up. Never gonna let User down.',
    'Ha! User has joined! You activated my trap card!',
    'Cheers, love! User is here!',
    'Hey! Listen! User has joined!',
    'We have been expecting you User',
    'It is dangerous to go alone, take User!',
    'User has joined the server! It is super effective!',
    'Cheers, love! User is here!',
    'User is here, as the prophecy foretold.',
    'User has arrived. Party is over.',
    'Ready player User',
    'User is here to kick butt and chew bubblegum. And User is all out of gum.',
   'Hello. Is it User you are looking for?',
    'User has joined. Stay a while and listen!',
    'Roses are red, violets are blue, User joined this server with you'];

function ranDomMessages(){
    let ranNum=Math.trunc((Math.random()*100) %100);
    console.log(ranNum);
    while (ranNum >39){
        ranNum=Math.trunc((Math.random()*100) %100);
        console.log("In loop: "+ ranNum);
    }
        let message=setOfMessage[ranNum];
        return message;
}

console.log(ranDomMessages());
