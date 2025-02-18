import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


function App(){
const data=[
    {name: 'ANN',   salary: 500},
    {name: 'sasha',   salary: 600},
    {name: 'Masha',   salary: 800},
];

    return (
        <div className="app">
<AppInfo/>
<div className='search-panel'>
    <SearchPanel/>
    <AppFilter/>
    
</div>

<EmployersList data={data }/>
<EmployersAddForm/>

        </div>
    )
}
export default App;