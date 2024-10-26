class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

const categories = [
    new Category("ASTR_E", "Astronomy Easy"),
    new Category("BOT_E", "Botany Easy"),
    new Category("NEU_E", "Neuroscience Easy"),
    new Category("ASTR_D", "Astronomy Difficult"),
    new Category("BOT_D", "Botany Difficult"),
    new Category("NEU_D", "Neuroscience Difficult")
];

export default categories;