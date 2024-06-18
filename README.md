# TechSkillsCapitalist

## Descrição

Este projeto contém dados de habilidades técnicas e funções para combinar essas habilidades com os níveis de experiência do usuário, gerando uma avaliação personalizada do nível de habilidade em termos compreensíveis.

## Estrutura de Dados

### `TechSkillsCapitalistData`

Um array de objetos que representa várias habilidades, cada uma com um título, tipo, e peso associado:

```javascript
const TechSkillsCapitalistData = [
    { id: 1, title: 'Redes de Computadores', kind: 'hard', weight: 5 },
    { id: 2, title: 'Tecnologias Web', kind: 'hard', weight: 5 },
    { id: 3, title: 'JavaScript & Ramificações', kind: 'hard', weight: 3 },
    { id: 4, title: 'Estilização de Sites (CSS3)', kind: 'hard', weight: 2.25 },
    // Outros itens...
    { id: 23, title: 'Curioso', kind: 'soft', weight: 3.5 },
];
```

### `MyTechSkills`

Um array de objetos representando as habilidades do usuário e seus respectivos níveis de experiência:

```javascript
const MyTechSkills = [
    { title: 'Redes de Computadores', experience: 5 },
    { title: 'Tecnologias Web', experience: 5 },
    { title: 'Empático', experience: 4 },
    // Outros itens...
    { title: 'Laravel', experience: 2 },
];
```

## Funções

### `MatchSkill`

Recebe os dados de habilidades, uma habilidade específica e o nível de experiência do usuário, retornando um objeto com a habilidade e o nível de experiência calculado:

```javascript
function MatchSkill(capitalistData, skill, yourWeight) {
    try {
        const skillData = capitalistData.find((iteratedSkill) => iteratedSkill.title === skill.title);

        if (!skillData) {
            throw new Error('Skill not found');
        }

        const matchSum = skillData.weight + yourWeight;
        const matchMean = matchSum / 2;

        const result = {
            skill,
            experience: experienceCalculus(matchMean),
        };
        return result;
    } catch (error) {
        console.error(`Skill not found: ${skill.title}`);
        return null;
    }
}
```

### `experienceCalculus`

Recebe um número e retorna um nível de experiência correspondente:

```javascript
const experienceCalculus = (experience) => {
    if (experience < 1) return 1;
    if (experience < 3) return 2;
    if (experience < 5) return 3;
    if (experience < 8) return 4;
    return 5;
}
```

### `experienceToLanguage`

Converte um número de experiência para uma string representativa do nível de habilidade:

```javascript
const experienceToLanguage = (experience) => {
    if (experience < 1) return 'Básico';
    if (experience < 3) return 'Intermediário';
    if (experience < 5) return 'Experiente';
    if (experience < 8) return 'Expert';
    return 'Mestre';
}
```

### `getMyTechSkillsData`

Gera uma string com as habilidades do usuário e seus respectivos níveis de experiência:

```javascript
function getMyTechSkillsData() {
    return `Você tem as seguintes habilidades:\n\t${MyTechSkills.map((skill) => {
        const match = MatchSkill(TechSkillsCapitalistData, skill, skill.experience);
        return `${skill.title} - ${experienceToLanguage(match.experience)}`;
    }).join('\n\t')}`
}
```

## Como Usar

1. **Definir habilidades e experiências:** Modifique os arrays `TechSkillsCapitalistData` e `MyTechSkills` conforme necessário para refletir as habilidades e níveis de experiência.
2. **Chamar funções:** Utilize a função `getMyTechSkillsData` para obter uma avaliação das suas habilidades.
3. **Exemplo de uso:**

```javascript
console.log(getMyTechSkillsData());
```

Este código fornecerá uma lista de habilidades e seus níveis de experiência em um formato legível.