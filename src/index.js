import Storage from "./modules/Storage";
import Listeners from "./modules/Listeners";
import "./style.css"
import "./animations.css"

const demoInit = () => {
    Storage.addProject('Software')
    Storage.addProject('WebDev')
    Storage.addProject('MachineLearning')
    Storage.addProject('Photography')
    Storage.addProject('Workout')
    Storage.addProject('ShopList')

    Storage.addTask('Software', 'Code review', 'Review colleagues PR.', '2024-05-15', '2');
    Storage.addTask('Software', 'Debugging', 'Identify and fix bugs.', '2024-06-16', '2');
    Storage.addTask('Software', 'Documentation', 'Update wiki articles.', '2024-03-17', '0');
    Storage.addTask('Software', 'Testing', 'Run automated tests.', '2024-04-18', '2');
    Storage.addTask('Software', 'Requirements gathering', 'Meeting with stakeholders.', '2024-09-19', '2');
    Storage.addTask('Software', 'Specification analysis', 'Revise functional requirements.', '2024-09-20', '1');
    Storage.addTask('WebDev', 'HTML/CSS cleanup', 'Format markup.', '2024-04-15', '0');
    Storage.addTask('WebDev', 'JS refactoring', 'Modernize legacy code.', '2024-04-16', '2');
    Storage.addTask('WebDev', 'API integration', 'Connect to payment gateway.', '2024-05-18', '2');
    Storage.addTask('WebDev', 'UX improvement', 'Redesign navigation menu.', '2024-06-19', '1');
    Storage.addTask('WebDev', 'Performance tuning', 'Optimize image assets.', '2024-04-20', '2');
    Storage.addTask('MachineLearning', 'Feature engineering', 'Extract meaningful features.', '2024-07-15', '0');
    Storage.addTask('MachineLearning', 'Model training', 'Execute hyperparameter optimization.', '2024-07-16', '0');
    Storage.addTask('MachineLearning', 'Evaluation metrics', 'Calculate precision, recall, and accuracy.', '2024-12-17', '1');
    Storage.addTask('MachineLearning', 'Model selection', 'Choose the most promising algorithm.', '2024-05-18', '2');
    Storage.addTask('MachineLearning', 'Deployment', 'Push trained model to production.', '2024-05-19', '2');
    Storage.addTask('MachineLearning', 'Monitoring', 'Track model predictions.', '2024-09-20', '1');
    Storage.addTask('Photography', 'Landscape shooting', 'Visit national park.', '2024-05-12', '1');
    Storage.addTask('Photography', 'Macro photography', 'Flower garden visit.', '2024-09-05', '0');
    Storage.addTask('Photography', 'Star trail capturing', 'Clear night sky observatory.', '2024-11-19', '1');
    Storage.addTask('Photography', 'Bird watching', 'National wildlife refuge.', '2024-02-22', '1');
    Storage.addTask('Photography', 'Autumn Colors', 'Visit forests to shoot fall foliage.', '2024-10-10', '1');
    Storage.addTask('Workout', 'High-intensity cardio', 'Run a half marathon.', '2024-06-09', '2');
    Storage.addTask('Workout', 'Crossfit WOD', 'Fran, Helen, or Grace.', '2024-10-27', '1');
    Storage.addTask('Workout', 'Outdoor calisthenics', 'Monkey bars and parallel bars.', '2024-01-04', '1');
    Storage.addTask('Workout', 'Stationary bike spinning', 'Indoor cycling.', '2024-04-01', '0');
    Storage.addTask('Workout', 'Muay Thai Camp', 'Intensive martial arts training.', '2024-02-15', '1');
    Storage.addTask('ShopList', 'Watermelon', 'Summer season fruit.', '2024-06-17', '1');
    Storage.addTask('ShopList', 'Turkey', 'Thanksgiving dinner ingredient.', '2024-11-15', '1');
    Storage.addTask('ShopList', 'BBQ grill supplies', 'Charcoal, lighter fluid, meat thermometer.', '2024-07-04', '1');
    Storage.addTask('ShopList', 'Christmas tree', 'Real vs artificial debate.', '2024-12-01', '1');
    Storage.addTask('ShopList', 'Valentine’s day box', 'Heart shaped assortment.', '2024-02-09', '1');
    Storage.addTask('ShopList', 'Backpack', 'Camping trip necessity.', '2024-05-20', '2');
    Storage.addTask('ShopList', 'Skis', 'Hit the winter sports scene.', '2024-12-20', '0');


    Listeners.setCurrentProject(Storage.getList()._getProjects()[0].getTitle())
    
    Listeners.loadPage()

}

const initReset = () => localStorage.clear()
const isData = localStorage.getItem('doitapp_local_data')

const initApp = () => {
    if(!isData){
        demoInit()
        console.log('new demo data created!')
    }else{
        console.log(isData)
        Listeners.setCurrentProject(Storage.getList()._getProjects()[0].getTitle())
        Listeners.loadPage()
        console.log('data preloded!')
    }
}

initApp()

