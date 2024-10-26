class Question {
    constructor(question, answers, rightAnswer, id) {
        this.question = question;
        this.answers = answers;
        this.rightAnswer =  rightAnswer;
        this.id = id;
    }
}

const astronomyEasyQuizData = [
    new Question(
        "What is the closest planet to the Sun?",
        ["Venus","Saturn","Mars","Mercury"],
        "Mercury",
        "1"
    ),
    new Question(
        "How many moons does Earth have?",
        ["1", "2", "3", "0"],
        "2",
        "2"
    ),new Question(
        "What inspired our naming of the Solar System planets?",
        ["Greek mythology", "Roman mythology", "Celtic mythology", "Sumerian mythology"],
        "Roman mythology",
        "3"
    )
    ];
    
    const botanyEasyQuizData = [
    new Question(
        "Which part of a plant is responsible for photosynthesis?",
        ["Roots","Flowers","Leaves","Stems"],
        "Leaves",
        "1"
    ),
    new Question(
        "What is the process by which plants lose water vapor from their leaves?",
        ["Transpiration", "Photosynthesis", "Respiration", "Germination"],
        "Transpiration",
        "2"
    ),new Question(
        "What is the main purpose of a plant’s flowers?",
        ["To attract insects", "To support leaves", "Reproduction", "Water storage"],
        "Reproduction",
        "3"
    )
    ];
    
    const neuroscienceEasyQuizData = [
        new Question(
        "What is the primary neurotransmitter involved in muscle movement?",
        ["Dopamine","Serotonin","Acetylcholine","Glutamate"],
        "Acetylcholine",
        "1"
        ),
        new Question(
        "Which part of the brain is responsible for regulating balance and coordination?",
        ["Cerebellum", "Hippocampus", "Amygdala", "Thalamus"],
        "Cerebellum",
        "2"
        ),
        new Question(
        "Which brain region is primarily involved in the formation of long-term memory?",
        ["Frontal Lobe", "Hypothalamus", "Hippocampus", "Occipital Lobe"],
        "Hippocampus",
        "3"
        )
    ];
    
    
    const astronomyDifficultQuizData = [
        new Question(
        "What is the estimated age of the universe according to the Big Bang theory?",
        ["4.5 billion years","10.8 billion years","13.8 billion years","20.5 billion years"],
        "13.8 billion years",
        "1"
        ),
        new Question(
        "Which element is produced during the triple-alpha process in stellar nucleosynthesis?",
        ["Helium", "Carbon", "Oxygen", "Iron"],
        "Carbon",
        "2"
        ),
        new Question(
        "Which of the following is the name of the largest known structure in the observable universe?",
        ["The Hercules-Corona Borealis Great Wall", "The Virgo Supercluster", "The Local Group", "The Sloan Great Wall"],
        "The Hercules-Corona Borealis Great Wall",
        "3"
        )
    ];
    
    const botanyDifficultQuizData = [
        new Question(
        "What is the primary reason C4 plants are more efficient in hot climates than C3 plants?",
        ["Better water retention","More efficient CO2 fixation at high temperatures","Resistance to UV radiation","Faster growth rates"],
        "More efficient CO2 fixation at high temperatures",
        "1"
        ),
        new Question(
        "What type of plant tissue is responsible for transporting water and nutrients from the roots to the leaves?",
        ["Phloem", "Xylem", "Cambium", "Cortex"],
        "Xylem",
        "2"
        ),
        new Question(
        "Which plant hormone is primarily responsible for fruit ripening?",
        ["Auxin", "Cytokinin", "Ethylene", "Gibberellin"],
        "Ethylene",
        "3"
        )
    ];
    
    const neuroscienceDifficultQuizData = [
        new Question(
        "Which neurotransmitter is primarily involved in the brain's reward system and addiction mechanisms?",
        ["Dopamine","Serotonin","GABA","Glutamate"],
        "Dopamine",
        "1"
        ),
        new Question(
        "What is the primary role of the basal ganglia in the brain?",
        ["Regulating emotions", "Coordinating voluntary movements", "Processing sensory input", "Regulating body temperature"],
        "Coordinating voluntary movements",
        "2"
        ),
        new Question(
        "Which type of glial cell is involved in the formation of the blood-brain barrier?",
        ["Oligodendrocytes", "Astrocytes", "Microglia", "Schwann cells"],
        "Astrocytes",
        "3"
        )
    ];

export {astronomyEasyQuizData, botanyEasyQuizData, neuroscienceEasyQuizData, astronomyDifficultQuizData, botanyDifficultQuizData, neuroscienceDifficultQuizData};
export default Question;




// fetch('quizes/astronomy/easyQuizData.json')
//     .then(response => response.json())  
//     .then(data => {
//         const astronomyEasyQuizData = data.map(item => new Question(item.question, item.answers, item.rightAnswer, item.id));
//     })
//     .catch(error => console.error('Error loading quiz data:', error));

// fetch('quizes/botany/easyQuizData.json')
//     .then(response => response.json())  
//     .then(data => {
//         const botanyEasyQuizData = data.map(item => new Question(item.question, item.answers, item.rightAnswer, item.id));
//     })
//     .catch(error => console.error('Error loading quiz data:', error));

// fetch('quizes/neuroscience/easyQuizData.json')
//     .then(response => response.json()) 
//     .then(data => {
//         const neuroscienceEasyQuizData = data.map(item => new Question(item.question, item.answers, item.rightAnswer, item.id));
//     })
//     .catch(error => console.error('Error loading quiz data:', error));

// fetch('quizes/astronomy/difficultQuizData.json')
//     .then(response => response.json())  
//     .then(data => {
//         const astronomyDifficultQuizData = data.map(item => new Question(item.question, item.answers, item.rightAnswer, item.id));
//     })
//     .catch(error => console.error('Error loading quiz data:', error));

// fetch('quizes/botany/difficultQuizData.json')
//     .then(response => response.json())  
//     .then(data => {
//         const botanyDifficultQuizData = data.map(item => new Question(item.question, item.answers, item.rightAnswer, item.id));
//     })
//     .catch(error => console.error('Error loading quiz data:', error));

// fetch('quizes/neuroscience/difficultQuizData.json')
//     .then(response => response.json())  
//     .then(data => {
//         const neuroscienceDifficultQuizData = data.map(item => new Question(item.question, item.answers, item.rightAnswer, item.id));
//     })
//     .catch(error => console.error('Error loading quiz data:', error));