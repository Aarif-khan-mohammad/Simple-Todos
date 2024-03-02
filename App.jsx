import {Component} from 'react';
import SimpleTodos from './components/SimpleTodos/index.jsx'
import './App.css'

const InitialTaskData = [
  {"uniqueNo": 1, "task": "Buy fresh fruits and vegetables for the week's meals."},
  {"uniqueNo": 2, "task": "Clean and declutter the living room and dining area."},
  {"uniqueNo": 3, "task": "Take out the trash and recycling from the kitchen and bathrooms."},
  {"uniqueNo": 4, "task": "Do a full load of laundry, including sorting, washing, drying, and folding."},
  {"uniqueNo": 5, "task": "Water all indoor and outdoor plants, checking for signs of wilting."},
  {"uniqueNo": 6, "task": "Take the dog for a long walk in the park or around the neighborhood."},
  {"uniqueNo": 7, "task": "Organize and pay all outstanding bills, including utilities and rent."},
  {"uniqueNo": 8, "task": "Call mom to catch up and see how she's doing."},
  {"uniqueNo": 9, "task": "Read a chapter of a new book or continue with a current one."},
  {"uniqueNo": 10, "task": "Engage in a workout routine, whether it's yoga, running, or strength training."},
  {"uniqueNo": 11, "task": "Prepare a healthy and balanced dinner for yourself or your family."},
  {"uniqueNo": 12, "task": "Watch a movie you've been wanting to see or revisit an old favorite."},
  {"uniqueNo": 13, "task": "Go for a run or a jog to get some fresh air and exercise."},
  {"uniqueNo": 14, "task": "Meet up with friends for coffee, a meal, or a fun activity."},
  {"uniqueNo": 15, "task": "Study a subject of interest, whether it's a new language or a skill."},
  {"uniqueNo": 16, "task": "Work on a personal or professional project, making progress each day."},
  {"uniqueNo": 17, "task": "Take a short nap to recharge and improve focus and productivity."},
  {"uniqueNo": 18, "task": "Write in a journal or diary to reflect on your thoughts and experiences."},
  {"uniqueNo": 19, "task": "Plan your next vacation or getaway, researching destinations and activities."},
  {"uniqueNo": 20, "task": "Learn a new skill or hobby, such as painting, cooking, or coding."},
  {"uniqueNo": 21, "task": "Organize your closet, donating or discarding items you no longer need."},
  {"uniqueNo": 22, "task": "Volunteer your time and skills to a cause or organization you care about."},
  {"uniqueNo": 23, "task": "Meditate for a few minutes to relax and center your mind and body."},
  {"uniqueNo": 24, "task": "Practice a hobby you enjoy, whether it's playing an instrument or knitting."},
  {"uniqueNo": 25, "task": "Visit a museum or art gallery to explore and appreciate culture and history."},
  {"uniqueNo": 26, "task": "Go to the beach and enjoy the sun, sand, and sea for a day."},
  {"uniqueNo": 27, "task": "Attend a concert or live performance to enjoy music and entertainment."},
  {"uniqueNo": 28, "task": "Start a blog or online journal to share your thoughts, ideas, and experiences."},
  {"uniqueNo": 29, "task": "Take a road trip to explore new places and enjoy the journey."},
  {"uniqueNo": 30, "task": "Create a budget to manage your finances and save for future goals."}
];




class App extends Component{

  state = {updatedTodos : InitialTaskData }

  deleteTodo = uniqueNo => {
    const {updatedTodos} = this.state
    const filteredUsersData = updatedTodos.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
        updatedTodos: filteredUsersData
    })
  }
  
  render(){
    const {updatedTodos}  = this.state
    
    
  return (
    <div className="App">
      <div className='todo-container'>
        <h2 className="heading">Simple Todos</h2>
        <ul> 
          { updatedTodos.map((item)=> <SimpleTodos key={item.uniqueNo} eachTodo={item} ondelete = {this.deleteTodo}/>)}
        </ul>
      </div>
      
    </div>
  )}
}

export default App;