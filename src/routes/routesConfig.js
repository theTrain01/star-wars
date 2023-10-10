import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import NotFound from '@components/NotFound';

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
        path: '/not-found', 
        element: <NotFound/>
    },

    {
        path: '*', 
        element: <NotFound/>
    }

]

export default routesConfig