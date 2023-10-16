import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import NotFound from '@components/NotFound';
import PersonPage from '@containers/PersonPage';

const routesConfig = [
    {
        path: '/', 
        element: <HomePage/>
    }, 

    {
        path: '/people', 
        element: <PeoplePage/>
    },

    {
        path: '/people/:id', 
        element: <PersonPage/>
    },

    {
        path: '/not-found', 
        element: <NotFound/>
    },

    {
        path: '*', 
        element: <NotFound/>
    }

]

export default routesConfig