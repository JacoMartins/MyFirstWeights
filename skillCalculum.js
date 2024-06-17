const TechSkillsCapitalistData = [
    {
        id: 1,
        title: 'Redes de Computadores',
        kind: 'hard',
        weight: 5
    },
    {
        id: 2,
        title: 'Tecnologias Web',
        kind: 'hard',
        weight: 5
    },
    {
        id: 3,
        title: 'JavaScript & Ramificações',
        kind: 'hard',
        weight: 3
    },
    {
        id: 4,
        title: 'Estilização de Sites (CSS3)',
        kind: 'hard',
        weight: 2.25
    },
    {
        id: 5,
        title: 'UI/UX',
        kind: 'hard',
        weight: 2.5
    },
    {
        id: 6,
        title: 'Python e Flask',
        kind: 'hard',
        weight: 3
    },
    {
        id: 7,
        title: 'NodeJS',
        kind: 'hard',
        weight: 2
    },
    {
        id: 8,
        title: 'NextJS',
        kind: 'hard',
        weight: 3
    },
    {
        id: 9,
        title: 'PHP',
        kind: 'hard',
        weight: 1.5
    },
    {
        id: 10,
        title: 'Laravel',
        kind: 'hard',
        weight: 2.25
    },
    {
        id: 11,
        title: 'Django',
        kind: 'hard',
        weight: 2.5
    },
    {
        id: 12,
        title: 'C',
        kind: 'hard',
        weight: 1.5
    },
    {
        id: 13,
        title: 'Linux',
        kind: 'hard',
        weight: 3.5
    },
    {
        id: 14,
        title: 'Banco de Dados',
        kind: 'hard',
        weight: 3.5
    },
    {
        id: 15,
        title: 'Inglês',
        kind: 'communication',
        weight: 5
    },
    {
        id: 16,
        title: 'Português',
        kind: 'communication',
        weight: 5
    },
    {
        id: 17,
        title: 'Espanhol',
        kind: 'communication',
        weight: 4.5
    },
    {
        id: 18,
        title: 'Comunicativo',
        kind: 'soft',
        weight: 1
    },
    {
        id: 19,
        title: 'Legal',
        kind: 'soft',
        weight: 1
    },
    {
        id: 20,
        title: 'Saudável',
        kind: 'soft',
        weight: 1
    },
    {
        id: 21,
        title: 'Empático',
        kind: 'soft',
        weight: 0.5
    },
    {
        id: 22,
        title: 'Ansioso',
        kind: 'soft',
        weight: 2.25
    },
    {
        id: 23,
        title: 'Proativo',
        kind: 'soft',
        weight: 1.5
    },
    {
        id: 23,
        title: 'Curioso',
        kind: 'soft',
        weight: 3.5
    },
];

const MyTechSkills = [
    { title: 'Redes de Computadores', experience: 5 },
    { title: 'Tecnologias Web', experience: 5 },
    { title: 'Empático', experience: 4 },
    { title: 'Ansioso', experience: 3 },
    { title: 'Proativo', experience: 3 },
    { title: 'Curioso', experience: 5 },
    { title: 'JavaScript & Ramificações', experience: 5 },
    { title: 'Estilização de Sites (CSS3)', experience: 5 },
    { title: 'UI/UX', experience: 5 },
    { title: 'Python e Flask', experience: 5 },
    { title: 'Comunicativo', experience: 5 },
    { title: 'Inglês', experience: 5 },
    { title: 'Português', experience: 1 },
    { title: 'Linux', experience: 3.5 },
    { title: 'Banco de Dados', experience: 3.5 },
    { title: 'Laravel', experience: 2 },
]

function MatchSkill(capitalistData, skill, yourWeight) {
    try {
        const skillData = capitalistData.find((iteratedSkill) => iteratedSkill.title === skill.title)

        if (!skillData) {
            throw new Error('Skill not found')
        }

        const matchSum = skillData.weight + yourWeight
        const matchMean = matchSum / 2


        const result = {
            skill,
            experience: experienceCalculus(matchMean),
        }
        return result;
    } catch (error) {
        console.error(`Skill not found: ${skill.title}`)
        return null
    }
}

const experienceCalculus = (experience) => {
    if (experience < 1) return 1;
    if (experience < 3) return 2;
    if (experience < 5) return 3;
    if (experience < 8) return 4;
    return 5;
}

const experienceToLanguage = (experience) => {
    if (experience < 1) return 'Básico';
    if (experience < 3) return 'Intermediário';
    if (experience < 5) return 'Experiente';
    if (experience < 8) return 'Expert';
    return 'Mestre';
}

function getMyTechSkillsData() {
    return `Você tem as seguintes habilidades:
    ${MyTechSkills.map((skill, experience) => {
        const match = MatchSkill(TechSkillsCapitalistData, skill, experience)
        return `${skill.title} - ${experienceToLanguage(match.experience)}`
    }).join('\n')}`
}

console.log(getMyTechSkillsData())