let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
    { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    { name: 'Amit', email: 'amit@gmail.com', password: 'amit4' },
    { name: 'Anjana', email: 'anjana@gmail.com', password: 'anjana5' },
    { name: 'Bijay', email: 'bijay@gmail.com', password: 'bijay6' },
    { name: 'Bikash', email: 'bikash@gmail.com', password: 'bikash7' },
    {
        name: 'Chhiring',
        email: 'chhiring@gmail.com',
        password: 'chhiring8'
    },
    { name: 'Dilip', email: 'dilip@gmail.com', password: 'dilip9' },
    {
        name: 'Dipendra',
        email: 'dipendra@gmail.com',
        password: 'dipendra10'
    },
    { name: 'Gagan', email: 'gagan@gmail.com', password: 'gagan11' },
    { name: 'Gauri', email: 'gauri@gmail.com', password: 'gauri12' },
    { name: 'Hari', email: 'hari@gmail.com', password: 'hari13' },
    {
        name: 'Ishwari',
        email: 'ishwari@gmail.com',
        password: 'ishwari14'
    },
    { name: 'Jeevan', email: 'jeevan@gmail.com', password: 'jeevan15' },
    { name: 'Kabita', email: 'kabita@gmail.com', password: 'kabita16' },
    { name: 'Kiran', email: 'kiran@gmail.com', password: 'kiran17' },
    {
        name: 'Krishna',
        email: 'krishna@gmail.com',
        password: 'krishna18'
    },
    { name: 'Laxmi', email: 'laxmi@gmail.com', password: 'laxmi19' },
    { name: 'Manish', email: 'manish@gmail.com', password: 'manish20' },
    { name: 'Nabin', email: 'nabin@gmail.com', password: 'nabin21' },
    {
        name: 'Nirajan',
        email: 'nirajan@gmail.com',
        password: 'nirajan22'
    },
    {
        name: 'Pradeep',
        email: 'pradeep@gmail.com',
        password: 'pradeep23'
    },
    { name: 'Pragya', email: 'pragya@gmail.com', password: 'pragya24' },
    { name: 'Rajan', email: 'rajan@gmail.com', password: 'rajan25' },
    { name: 'Rina', email: 'rina@gmail.com', password: 'rina26' },
    { name: 'Sabin', email: 'sabin@gmail.com', password: 'sabin27' },
    { name: 'Sabina', email: 'sabina@gmail.com', password: 'sabina28' },
    { name: 'Sajan', email: 'sajan@gmail.com', password: 'sajan29' },
    { name: 'Saroj', email: 'saroj@gmail.com', password: 'saroj30' },
    { name: 'Shanti', email: 'shanti@gmail.com', password: 'shanti31' },
    {
        name: 'Srijana',
        email: 'srijana@gmail.com',
        password: 'srijana32'
    },
    { name: 'Subash', email: 'subash@gmail.com', password: 'subash33' },
    { name: 'Suman', email: 'suman@gmail.com', password: 'suman34' },
    { name: 'Sunil', email: 'sunil@gmail.com', password: 'sunil35' },
    { name: 'Sushil', email: 'sushil@gmail.com', password: 'sushil36' },
    { name: 'Urmila', email: 'urmila@gmail.com', password: 'urmila37' },
    { name: 'Yogesh', email: 'yogesh@gmail.com', password: 'yogesh38' }
]






const loginUser = (email, password) => {

    email = email.trim().toLowerCase()
    let matched = false;

    for (let index = 0; index < db_users.length; index++) {
        let user_email = db_users[index].email
        let user_password = db_users[index].password

        if (user_email === email && user_password === password) {
            matched = true
            break;
        }
    }

    if(matched){
        console.log("login success");
    }else{
        console.log("inavlid credentials...");
    }

}


loginUser("yogesh@gmail.com", "yogesh38") // login successful
loginUser("sunil@gmail.com   ", "sunil35") // login successful
loginUser("urmila@gmail.com", "urmila37") // login successful
loginUser("urmila@gmail.com", "urmila-wrong") // Invalid Credential





